"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/layout/Header';
import LinkPreview from '@/components/discourse/LinkPreview';
import DiscourseReply from '@/components/discourse/DiscourseReply';
import ReplyInput from '@/components/discourse/ReplyInput';
import CategoryBadge, { ResponseCategory } from '@/components/discourse/CategoryBadge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Filter, MessageSquare, ExternalLink } from 'lucide-react';

// Mock data for the discourse detail page
const mockDiscourseData = {
  id: '1',
  slug: 'the-future-of-remote-work',
  title: 'The Future of Remote Work: Trends and Predictions',
  url: 'https://example.com/blog/remote-work-future',
  domain: 'example.com',
  imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
  description: 'Exploring how remote work will evolve over the next decade and its impact on businesses and employees.',
  createdAt: '2023-05-12T10:30:00Z',
  author: {
    id: 'user-1',
    name: 'Jane Smith',
    avatarUrl: '',
  },
  note: 'I found this article fascinating and wanted to hear everyone\'s thoughts on how remote work will change in the coming years.',
};

// Mock replies data
const mockReplies = [
  {
    id: 'reply-1',
    author: {
      id: 'user-2',
      name: 'John Doe',
      avatarUrl: '',
    },
    content: 'I think the article makes excellent points about the need for better collaborative tools. As teams become more distributed, we need software that can bridge the gap more effectively than current solutions.',
    createdAt: '2023-05-12T14:22:00Z',
    category: 'agreement' as ResponseCategory,
    likes: 12,
    replies: [
      {
        id: 'reply-1-1',
        author: {
          id: 'user-3',
          name: 'Sarah Johnson',
          avatarUrl: '',
        },
        content: 'Agreed! I\'ve been working remotely for 5 years now, and while tools have improved, there\'s still a huge gap in replicating spontaneous collaboration.',
        createdAt: '2023-05-12T14:45:00Z',
        category: 'expansion' as ResponseCategory,
        likes: 8,
      },
      {
        id: 'reply-1-2',
        author: {
          id: 'user-4',
          name: 'Mike Chen',
          avatarUrl: '',
        },
        content: 'Have you tried tools like Gather or Teamflow? They\'re trying to solve this exact problem with virtual office spaces.',
        createdAt: '2023-05-12T15:10:00Z',
        category: 'resource' as ResponseCategory,
        likes: 5,
      }
    ],
  },
  {
    id: 'reply-2',
    author: {
      id: 'user-5',
      name: 'Emily Davis',
      avatarUrl: '',
    },
    content: 'I disagree with the article\'s prediction that offices will become obsolete. I think we\'ll see a hybrid model become dominant, where teams gather in person for certain types of work and collaboration, while routine tasks happen remotely.',
    createdAt: '2023-05-12T16:05:00Z',
    category: 'counterpoint' as ResponseCategory,
    likes: 15,
    replies: [],
  },
  {
    id: 'reply-3',
    author: {
      id: 'user-6',
      name: 'Robert Wilson',
      avatarUrl: '',
    },
    content: 'What about the mental health aspects of remote work? The article briefly touches on isolation, but I think this deserves more attention.',
    createdAt: '2023-05-13T09:30:00Z',
    category: 'question' as ResponseCategory,
    likes: 10,
    replies: [],
  },
];

export default function DiscourseDetail() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DiscourseDetailContent />
    </Suspense>
  );
}

function DiscourseDetailContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const { toast } = useToast();
  
  // In a real app, this would fetch the discourse data based on the slug
  // For now, we'll use the mock data
  const discourse = mockDiscourseData;
  const replies = mockReplies;
  
  const handleNewReply = (content: string, category: ResponseCategory) => {
    toast({
      title: "Reply submitted",
      description: "Your reply has been added to the discourse.",
    });
    
    console.log({ content, category });
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{discourse.title}</h1>
            
            <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-x-3 gap-y-1 mb-4">
              <span>Posted by {discourse.author.name}</span>
              <span>•</span>
              <span>{new Date(discourse.createdAt).toLocaleDateString()}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span>{replies.length} replies</span>
              </div>
            </div>
            
            <LinkPreview
              url={discourse.url}
              title={discourse.title}
              description={discourse.description}
              imageUrl={discourse.imageUrl}
              domain={discourse.domain}
            />
            
            {discourse.note && (
              <div className="mt-4 p-4 bg-discourse-light rounded-lg border border-discourse-primary/20">
                <p className="text-discourse-tertiary">{discourse.note}</p>
              </div>
            )}
          </div>
          
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Discussion</h2>
            
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              Filter Responses
            </Button>
          </div>
          
          <ReplyInput onSubmit={handleNewReply} />
          
          <div className="space-y-4">
            {replies.map((reply) => (
              <DiscourseReply key={reply.id} {...reply} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}