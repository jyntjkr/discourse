"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import LinkInput from '@/components/discourse/LinkInput';
import LinkPreview from '@/components/discourse/LinkPreview';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { fetchLinkMetadata, LinkMetadata } from '@/lib/metadata';

const StartDiscoursePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [linkData, setLinkData] = useState<null | {
    url: string;
    title: string;
    description?: string;
    imageUrl?: string;
    domain: string;
    author?: string;
    type: string;
  }>(null);
  const [note, setNote] = useState('');
  const [customTitle, setCustomTitle] = useState('');
  
  const router = useRouter();
  const { toast } = useToast();
  
  const handleLinkSubmit = async (url: string) => {
    setIsLoading(true);
    
    try {
      // Use our metadata fetching utility
      const metadata = await fetchLinkMetadata(url);
      
      if (!metadata) {
        throw new Error("Failed to fetch metadata");
      }
      
      setLinkData({
        url: metadata.url,
        title: metadata.title,
        description: metadata.description,
        imageUrl: metadata.imageUrl,
        domain: metadata.domain,
        author: metadata.author,
        type: metadata.type,
      });
      
      setCustomTitle(metadata.title);
      
      // Show a success toast for YouTube links
      if (metadata.type === "youtube") {
        toast({
          title: "YouTube video detected",
          description: `Video by ${metadata.author}`,
        });
      }
    } catch (error) {
      console.error("Error fetching link data:", error);
      toast({
        title: "Error fetching link data",
        description: "There was a problem processing your link. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!linkData) return;
    
    // In a real app, this would save to a database
    console.log({
      url: linkData.url,
      title: customTitle || linkData.title,
      description: linkData.description,
      imageUrl: linkData.imageUrl,
      domain: linkData.domain,
      note,
    });
    
    toast({
      title: "Discourse created!",
      description: "Your new discourse has been successfully created.",
    });
    
    // Generate a simple slug from the title
    const slug = (customTitle || linkData.title)
      .toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');
    
    router.push(`/DiscourseDetail?slug=${slug}`);
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="w-full">
          <h1 className="text-3xl font-bold mb-6">Start a New Discourse</h1>
          
          <div className="bg-white rounded-lg border p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Step 1: Share a Link</h2>
            <p className="text-muted-foreground mb-4">
              Paste a URL to an article, blog post, tweet, video, or any content you'd like to discuss.
            </p>
            
            <LinkInput onLinkSubmit={handleLinkSubmit} isLoading={isLoading} />
          </div>
          
          {linkData && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4">Step 2: Preview and Customize</h2>
                
                <div className="mb-6">
                  <LinkPreview
                    url={linkData.url}
                    title={linkData.title}
                    description={linkData.description}
                    imageUrl={linkData.imageUrl}
                    domain={linkData.domain}
                    author={linkData.author}
                    type={linkData.type}
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium mb-2">
                      Discourse Title
                    </label>
                    <Input
                      id="title"
                      value={customTitle}
                      onChange={(e) => setCustomTitle(e.target.value)}
                      placeholder="Customize the discourse title (optional)"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="note" className="block text-sm font-medium mb-2">
                      Your Note (Optional)
                    </label>
                    <Textarea
                      id="note"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Add context or explain why you're starting this discourse..."
                      rows={4}
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => setLinkData(null)}>
                  Back
                </Button>
                <Button type="submit">
                  Create Discourse
                </Button>
              </div>
            </form>
          )}
        </div>
      </main>
    </div>
  );
};

export default StartDiscoursePage;
