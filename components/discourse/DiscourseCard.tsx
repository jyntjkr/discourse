"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { MessageSquare, ExternalLink, ThumbsUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface DiscourseCardProps {
  id: string;
  slug: string;
  title: string;
  url: string;
  domain: string;
  imageUrl?: string;
  description?: string;
  replyCount: number;
  createdAt: string;
  tags?: string[];
}

const DiscourseCard = ({
  id,
  slug,
  title,
  url,
  domain,
  imageUrl,
  description,
  replyCount,
  createdAt,
  tags = [],
}: DiscourseCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:border-discourse-primary/50">
      <CardHeader className="p-0">
        {imageUrl && (
          <div className="aspect-video w-full overflow-hidden">
            <img 
              src={imageUrl} 
              alt={title} 
              className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <span>{domain}</span>
          <span>•</span>
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>
        
        <Link href={`/DiscourseDetail?slug=${slug}`} className="group">
          <h3 className="font-semibold text-lg mb-2 group-hover:text-discourse-primary transition-colors">
            {title}
          </h3>
        </Link>
        
        {description && (
          <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{description}</p>
        )}
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3 mb-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-discourse-light text-discourse-tertiary">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="gap-1 h-8">
            <MessageSquare className="h-4 w-4" />
            <span>{replyCount}</span>
          </Button>
          <Button variant="ghost" size="sm" className="gap-1 h-8">
            <ThumbsUp className="h-4 w-4" />
          </Button>
        </div>
        <Button asChild variant="ghost" size="sm" className="h-8">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DiscourseCard;