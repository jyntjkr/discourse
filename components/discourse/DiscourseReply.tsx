import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ThumbsUp, Reply, Flag } from 'lucide-react';
import CategoryBadge, { ResponseCategory } from './CategoryBadge';

export interface DiscourseReplyProps {
  id: string;
  author: {
    id: string;
    name: string;
    avatarUrl?: string;
  };
  content: string;
  createdAt: string;
  category: ResponseCategory;
  likes: number;
  replies?: DiscourseReplyProps[];
  depth?: number;
}

const DiscourseReply = ({
  id,
  author,
  content,
  createdAt,
  category,
  likes,
  replies = [],
  depth = 0,
}: DiscourseReplyProps) => {
  const maxDepth = 3;
  
  return (
    <div className="mb-4">
      <div className={`border p-4 rounded-lg bg-white ${depth > 0 ? 'ml-6' : ''}`}>
        <div className="flex items-start gap-3 mb-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={author.avatarUrl} alt={author.name} />
            <AvatarFallback>{author.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center flex-wrap gap-2">
              <span className="font-medium">{author.name}</span>
              <span className="text-xs text-muted-foreground">
                {new Date(createdAt).toLocaleDateString()} at {new Date(createdAt).toLocaleTimeString()}
              </span>
              <CategoryBadge category={category} />
            </div>
          </div>
        </div>
        
        <div className="prose prose-sm max-w-none mb-3">
          <p>{content}</p>
        </div>
        
        <div className="flex items-center gap-2 mt-2">
          <Button variant="ghost" size="sm" className="h-8 gap-1">
            <ThumbsUp className="h-3.5 w-3.5" />
            <span>{likes}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="h-8 gap-1">
            <Reply className="h-3.5 w-3.5" />
            <span>Reply</span>
          </Button>
          
          <div className="flex-grow"></div>
          
          <Button variant="ghost" size="sm" className="h-8">
            <Flag className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>
      
      {replies.length > 0 && depth < maxDepth && (
        <div className="mt-2 border-l-2 border-muted pl-4 ml-4">
          {replies.map((reply) => (
            <DiscourseReply key={reply.id} {...reply} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DiscourseReply;