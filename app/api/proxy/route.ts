import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get the URL from the query parameters
    const url = request.nextUrl.searchParams.get('url');
    
    if (!url) {
      return NextResponse.json(
        { error: 'URL parameter is required' },
        { status: 400 }
      );
    }
    
    // Fetch the HTML content from the provided URL
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; DiscourseBot/1.0; +http://discourse.example.com)',
      },
    });
    
    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch content: ${response.statusText}` },
        { status: response.status }
      );
    }
    
    // Get the content type
    const contentType = response.headers.get('content-type') || '';
    
    // If it's not HTML, return an error
    if (!contentType.includes('text/html')) {
      return NextResponse.json(
        { error: 'URL does not point to an HTML page' },
        { status: 400 }
      );
    }
    
    // Get the HTML content
    const html = await response.text();
    
    // Return the HTML content
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    console.error('Error in proxy route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 