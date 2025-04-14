import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface LinkPreviewProps {
  url: string;
  title: string;
  description?: string;
  imageUrl?: string;
  domain: string;
  favicon?: string;
  author?: string;
  type?: string;
}

const LinkPreview: React.FC<LinkPreviewProps> = ({
  url,
  title,
  description,
  imageUrl,
  domain,
  favicon,
  author,
  type = 'other',
}: LinkPreviewProps) => {
  // Determine the appropriate aspect ratio based on content type
  const getImageContainerClass = () => {
    if (!imageUrl) return '';
    
    switch (type) {
      case 'youtube':
        // YouTube thumbnails typically have a 16:9 aspect ratio
        return 'w-full md:w-1/3 aspect-video';
      case 'medium':
      case 'substack':
      case 'article':
        // Blog posts often have a 3:2 or 4:3 aspect ratio
        return 'w-full md:w-1/3 aspect-[4/3]';
      default:
        // Default to a square aspect ratio for other content types
        return 'w-full md:w-1/3 aspect-square';
    }
  };

  return (
    <Card className="overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {imageUrl && (
          <div className={`${getImageContainerClass()} overflow-hidden relative`}>
            <Image
              src={imageUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        )}
        
        <CardContent className={`flex flex-col gap-2 p-4 ${imageUrl ? 'md:w-2/3' : 'w-full'}`}>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {favicon && (
              <img src={favicon} alt={domain} className="h-4 w-4" />
            )}
            <span>{domain}</span>
          </div>
          
          <h2 className="text-xl font-semibold">{title}</h2>
          
          {author && (
            <p className="text-sm text-muted-foreground">By {author}</p>
          )}
          
          {description && (
            <p className="text-muted-foreground text-sm line-clamp-3">{description}</p>
          )}
          
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-discourse-primary hover:underline mt-2"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Visit original link
          </a>
        </CardContent>
      </div>
    </Card>
  );
};

export default LinkPreview;