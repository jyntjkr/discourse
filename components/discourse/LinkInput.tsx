import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LinkInputProps {
  onLinkSubmit: (link: string) => void;
  isLoading?: boolean;
}

const LinkInput = ({ onLinkSubmit, isLoading = false }: LinkInputProps) => {
  const [url, setUrl] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      toast({
        title: "Link required",
        description: "Please enter a valid URL to start a discourse.",
        variant: "destructive",
      });
      return;
    }
    
    // Simple URL validation
    try {
      // Add https if missing
      let processedUrl = url;
      if (!/^https?:\/\//i.test(url)) {
        processedUrl = `https://${url}`;
      }
      
      new URL(processedUrl);
      onLinkSubmit(processedUrl);
    } catch (error) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL to start a discourse.",
        variant: "destructive",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-3xl flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Link className="h-5 w-5 text-muted-foreground" />
          </div>
          <Input
            type="text"
            placeholder="Paste or type a URL (blog, tweet, video, etc.)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>Loading...</>
          ) : (
            <>
              <Check className="mr-2 h-4 w-4" />
              Fetch
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default LinkInput;
