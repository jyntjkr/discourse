"use client";

import { parse } from "url";
import * as cheerio from 'cheerio';

export interface LinkMetadata {
  url: string;
  title: string;
  description?: string;
  imageUrl?: string;
  domain: string;
  type: "youtube" | "article" | "twitter" | "instagram" | "substack" | "medium" | "other";
  author?: string;
}

/**
 * Extracts the YouTube video ID from a YouTube URL
 */
export function extractYouTubeVideoId(url: string): string | null {
  try {
    const parsedUrl = parse(url);
    
    // Handle different YouTube URL formats
    if (parsedUrl.hostname?.includes("youtube.com")) {
      // Format: https://www.youtube.com/watch?v=VIDEO_ID
      const queryParams = new URLSearchParams(parsedUrl.query || "");
      return queryParams.get("v");
    } else if (parsedUrl.hostname?.includes("youtu.be")) {
      // Format: https://youtu.be/VIDEO_ID
      return parsedUrl.pathname?.substring(1) || null;
    }
    
    return null;
  } catch (error) {
    console.error("Error extracting YouTube video ID:", error);
    return null;
  }
}

/**
 * Fetches metadata for a YouTube video using the oEmbed API
 */
export async function fetchYouTubeMetadata(url: string): Promise<LinkMetadata | null> {
  try {
    const videoId = extractYouTubeVideoId(url);
    
    if (!videoId) {
      return null;
    }
    
    // Use the YouTube oEmbed API to fetch metadata
    const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
    const response = await fetch(oembedUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch YouTube metadata: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    return {
      url,
      title: data.title,
      description: `Video by ${data.author_name}`,
      imageUrl: data.thumbnail_url,
      domain: "youtube.com",
      type: "youtube",
      author: data.author_name
    };
  } catch (error) {
    console.error("Error fetching YouTube metadata:", error);
    return null;
  }
}

/**
 * Extracts metadata from HTML using Open Graph tags
 */
export async function fetchOpenGraphMetadata(url: string): Promise<LinkMetadata | null> {
  try {
    // Use a proxy or server-side API to fetch the HTML content
    // This avoids CORS issues when fetching directly from the client
    const proxyUrl = `/api/proxy?url=${encodeURIComponent(url)}`;
    const response = await fetch(proxyUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch HTML content: ${response.statusText}`);
    }
    
    const html = await response.text();
    const $ = cheerio.load(html);
    
    // Helper function to get meta content
    const getMeta = (name: string) => 
      $(`meta[property="${name}"]`).attr('content') || 
      $(`meta[name="${name}"]`).attr('content');
    
    // Extract metadata
    const title = getMeta('og:title') || $('title').text() || '';
    const description = getMeta('og:description') || getMeta('description') || '';
    const imageUrl = getMeta('og:image') || '';
    const author = getMeta('author') || '';
    
    // Parse the URL to get the domain
    const parsedUrl = parse(url);
    const domain = parsedUrl.hostname?.replace("www.", "") || "";
    
    // Determine the type based on the domain
    let type: LinkMetadata['type'] = "other";
    if (domain.includes("medium.com")) {
      type = "medium";
    } else if (domain.includes("substack.com")) {
      type = "substack";
    }
    
    return {
      url,
      title,
      description,
      imageUrl,
      domain,
      type,
      author: author || undefined
    };
  } catch (error) {
    console.error("Error fetching Open Graph metadata:", error);
    return null;
  }
}

/**
 * Extracts publication and post information from a Substack URL
 */
export function extractSubstackInfo(url: string): { publication: string; postSlug: string } | null {
  try {
    const parsedUrl = parse(url);
    
    if (!parsedUrl.hostname?.includes("substack.com")) {
      return null;
    }
    
    // Extract publication name from hostname (e.g., varyant.substack.com -> varyant)
    const publication = parsedUrl.hostname.split('.')[0];
    
    // Extract post slug from pathname (e.g., /p/nurture -> nurture)
    const pathParts = parsedUrl.pathname?.split('/') || [];
    const postSlug = pathParts[pathParts.length - 1];
    
    if (!publication || !postSlug) {
      return null;
    }
    
    return { publication, postSlug };
  } catch (error) {
    console.error("Error extracting Substack info:", error);
    return null;
  }
}

/**
 * Fetches metadata for a Substack article
 */
export async function fetchSubstackMetadata(url: string): Promise<LinkMetadata | null> {
  try {
    // First try to fetch Open Graph metadata
    const ogMetadata = await fetchOpenGraphMetadata(url);
    if (ogMetadata) {
      return ogMetadata;
    }
    
    // Fall back to URL-based extraction if Open Graph fetching fails
    const substackInfo = extractSubstackInfo(url);
    
    if (!substackInfo) {
      return null;
    }
    
    const { publication, postSlug } = substackInfo;
    
    // For Substack, we'll construct a basic metadata object based on the URL
    // This is more reliable than trying to fetch the HTML directly
    return {
      url,
      title: `${postSlug.charAt(0).toUpperCase() + postSlug.slice(1).replace(/-/g, ' ')}`,
      description: `Article from ${publication}'s Substack`,
      imageUrl: `https://${publication}.substack.com/api/v1/posts/${postSlug}/og-image`,
      domain: "substack.com",
      type: "substack",
      author: publication
    };
  } catch (error) {
    console.error("Error fetching Substack metadata:", error);
    return null;
  }
}

/**
 * Extracts article information from a Medium URL
 */
export function extractMediumInfo(url: string): { author: string; slug: string; publication?: string } | null {
  try {
    const parsedUrl = parse(url);
    
    if (!parsedUrl.hostname?.includes("medium.com")) {
      return null;
    }
    
    // Extract path parts
    const pathParts = parsedUrl.pathname?.split('/').filter(Boolean) || [];
    
    // Medium URLs can have different formats:
    // 1. https://medium.com/@username/article-slug
    // 2. https://medium.com/publication-name/article-slug
    // 3. https://username.medium.com/article-slug
    // 4. https://medium.com/publication-name/article-slug-article-id
    
    let author = "";
    let slug = "";
    let publication = "";
    
    if (parsedUrl.hostname === "medium.com" || parsedUrl.hostname === "www.medium.com") {
      // Format 1, 2, or 4
      if (pathParts.length >= 2) {
        if (pathParts[0].startsWith('@')) {
          // Format 1: @username/article-slug
          author = pathParts[0].replace('@', '');
        } else {
          // Format 2 or 4: publication-name/article-slug
          publication = pathParts[0];
          // Try to find author in the URL or use publication as author
          author = publication;
        }
        
        // Get the last part as slug, removing any article ID if present
        slug = pathParts[pathParts.length - 1].split('-').slice(0, -1).join('-');
      }
    } else if (parsedUrl.hostname.endsWith(".medium.com")) {
      // Format 3: username.medium.com/article-slug
      author = parsedUrl.hostname.split('.')[0];
      slug = pathParts[pathParts.length - 1].split('-').slice(0, -1).join('-');
    }
    
    if (!author || !slug) {
      return null;
    }
    
    return { author, slug, publication: publication || undefined };
  } catch (error) {
    console.error("Error extracting Medium info:", error);
    return null;
  }
}

/**
 * Fetches metadata for a Medium article
 */
export async function fetchMediumMetadata(url: string): Promise<LinkMetadata | null> {
  try {
    // First try to fetch Open Graph metadata
    const ogMetadata = await fetchOpenGraphMetadata(url);
    if (ogMetadata) {
      return ogMetadata;
    }
    
    // Fall back to URL-based extraction if Open Graph fetching fails
    const mediumInfo = extractMediumInfo(url);
    
    if (!mediumInfo) {
      return null;
    }
    
    const { author, slug, publication } = mediumInfo;
    
    // For Medium, we'll construct a basic metadata object based on the URL
    // This is more reliable than trying to fetch the HTML directly
    return {
      url,
      title: `${slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')}`,
      description: publication 
        ? `Article from ${publication} on Medium` 
        : `Article by ${author} on Medium`,
      imageUrl: `https://miro.medium.com/max/1200/1/${slug}.jpg`,
      domain: "medium.com",
      type: "medium",
      author: publication || author
    };
  } catch (error) {
    console.error("Error fetching Medium metadata:", error);
    return null;
  }
}

/**
 * Fetches metadata for any link
 */
export async function fetchLinkMetadata(url: string): Promise<LinkMetadata | null> {
  try {
    const parsedUrl = parse(url);
    const domain = parsedUrl.hostname?.replace("www.", "") || "";
    
    // Handle different types of links
    if (domain.includes("youtube.com") || domain.includes("youtu.be")) {
      return fetchYouTubeMetadata(url);
    } else if (domain.includes("substack.com")) {
      return fetchSubstackMetadata(url);
    } else if (domain.includes("medium.com")) {
      return fetchMediumMetadata(url);
    }
    
    // For other types of links, we'll implement more handlers later
    // For now, return a basic metadata object
    return {
      url,
      title: `Content from ${domain}`,
      domain,
      type: "other"
    };
  } catch (error) {
    console.error("Error fetching link metadata:", error);
    return null;
  }
} 