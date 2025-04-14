import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ResponseCategory } from './CategoryBadge';

interface ReplyInputProps {
  onSubmit: (content: string, category: ResponseCategory) => void;
  parentId?: string;
  avatarUrl?: string;
  userName?: string;
}

const ReplyInput = ({ 
  onSubmit, 
  parentId, 
  avatarUrl,
  userName = 'Guest'
}: ReplyInputProps) => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<ResponseCategory>('other');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (content.trim()) {
      onSubmit(content.trim(), category);
      setContent('');
      setCategory('other');
      setIsExpanded(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border p-4 mb-4">
      <div className="flex items-start gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src={avatarUrl} alt={userName} />
          <AvatarFallback>{userName.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <Textarea
            placeholder={parentId ? "Write a reply..." : "Add to the discussion..."}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
              if (!isExpanded && e.target.value) {
                setIsExpanded(true);
              }
            }}
            onFocus={() => setIsExpanded(true)}
            className="resize-none mb-3"
            rows={isExpanded ? 4 : 2}
          />
          
          {isExpanded && (
            <div className="flex items-center justify-between gap-3">
              <Select
                value={category}
                onValueChange={(value) => setCategory(value as ResponseCategory)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="agreement">Agreement</SelectItem>
                  <SelectItem value="counterpoint">Counterpoint</SelectItem>
                  <SelectItem value="question">Question</SelectItem>
                  <SelectItem value="expansion">Expansion</SelectItem>
                  <SelectItem value="resource">Resource</SelectItem>
                  <SelectItem value="meta">Meta</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline" 
                  onClick={() => {
                    setContent('');
                    setIsExpanded(false);
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={!content.trim()}>
                  Submit
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default ReplyInput;