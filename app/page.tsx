"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import DiscourseCard from '@/components/discourse/DiscourseCard';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import Link from 'next/link';

// Sample data for initial UI rendering
const sampleDiscourses = [
  {
    id: '1',
    slug: 'the-future-of-remote-work',
    title: 'The Future of Remote Work: Trends and Predictions',
    url: 'https://example.com/blog/remote-work-future',
    domain: 'example.com',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80',
    description: 'Exploring how remote work will evolve over the next decade and its impact on businesses and employees.',
    replyCount: 24,
    createdAt: '2023-05-12T10:30:00Z',
    tags: ['work', 'tech', 'future'],
  },
  {
    id: '2',
    slug: 'climate-change-solutions',
    title: 'Innovative Solutions to Combat Climate Change',
    url: 'https://example.com/blog/climate-solutions',
    domain: 'example.com',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    description: 'A comprehensive look at emerging technologies and policies aimed at addressing climate change challenges.',
    replyCount: 42,
    createdAt: '2023-05-10T14:15:00Z',
    tags: ['climate', 'environment', 'innovation'],
  },
  {
    id: '3',
    slug: 'artificial-intelligence-ethics',
    title: 'Ethical Considerations in Artificial Intelligence Development',
    url: 'https://example.com/blog/ai-ethics',
    domain: 'example.com',
    imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    description: 'Examining the ethical implications and necessary guardrails for responsible AI development.',
    replyCount: 36,
    createdAt: '2023-05-08T09:45:00Z',
    tags: ['AI', 'ethics', 'tech'],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Recent Discourses</h2>
          
          <Button asChild>
            <Link href="/start">
              <Plus className="mr-2 h-5 w-5" />
              Start New Discourse
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleDiscourses.map((discourse) => (
            <DiscourseCard key={discourse.id} {...discourse} />
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="outline">Load More</Button>
        </div>
      </main>
    </div>
  );
};

export default Index;