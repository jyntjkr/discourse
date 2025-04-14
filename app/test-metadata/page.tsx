"use client";

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import LinkInput from '@/components/discourse/LinkInput';
import LinkPreview from '@/components/discourse/LinkPreview';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { fetchLinkMetadata, LinkMetadata } from '@/lib/metadata';

const TestMetadataPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [metadata, setMetadata] = useState<LinkMetadata | null>(null);
  const { toast } = useToast();
  
  const handleLinkSubmit = async (url: string) => {
    setIsLoading(true);
    
    try {
      const result = await fetchLinkMetadata(url);
      
      if (!result) {
        throw new Error("Failed to fetch metadata");
      }
      
      setMetadata(result);
      
      toast({
        title: "Metadata fetched successfully",
        description: `Type: ${result.type}`,
      });
    } catch (error) {
      console.error("Error fetching metadata:", error);
      toast({
        title: "Error fetching metadata",
        description: "There was a problem processing your link. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Test Metadata Fetching</h1>
          
          <div className="bg-white rounded-lg border p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Enter a URL</h2>
            <p className="text-muted-foreground mb-4">
              Paste a URL to test metadata fetching (YouTube links are supported).
            </p>
            
            <LinkInput onLinkSubmit={handleLinkSubmit} isLoading={isLoading} />
          </div>
          
          {metadata && (
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-xl font-semibold mb-4">Metadata Results</h2>
              
              <div className="mb-6">
                <LinkPreview
                  url={metadata.url}
                  title={metadata.title}
                  description={metadata.description}
                  imageUrl={metadata.imageUrl}
                  domain={metadata.domain}
                />
              </div>
              
              <div className="space-y-2">
                <div>
                  <span className="font-medium">Type:</span> {metadata.type}
                </div>
                <div>
                  <span className="font-medium">URL:</span> {metadata.url}
                </div>
                <div>
                  <span className="font-medium">Title:</span> {metadata.title}
                </div>
                {metadata.author && (
                  <div>
                    <span className="font-medium">Author:</span> {metadata.author}
                  </div>
                )}
                {metadata.description && (
                  <div>
                    <span className="font-medium">Description:</span> {metadata.description}
                  </div>
                )}
                <div>
                  <span className="font-medium">Domain:</span> {metadata.domain}
                </div>
                {metadata.imageUrl && (
                  <div>
                    <span className="font-medium">Image URL:</span> {metadata.imageUrl}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default TestMetadataPage; 