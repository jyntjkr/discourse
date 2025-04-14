"use client";

import React from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { MessageSquare, Users, Link2, Filter } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="w-full">
          <h1 className="text-4xl font-bold mb-6 text-center">About Discourse</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="lead">
              Discourse is a platform for thoughtful, structured discussions around content from across the internet.
            </p>
            
            <p>
              Our mission is to create a space where meaningful dialogue can happen around any shared topic, 
              from blog posts to videos, tweets to academic papers. We believe in the power of diverse perspectives 
              and structured conversations to deepen understanding and create new insights.
            </p>
            
            <h2>How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-white p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-discourse-light p-3 rounded-full">
                    <Link2 className="h-6 w-6 text-discourse-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Share Content</h3>
                </div>
                <p>Start by sharing a link to any content you'd like to discuss — articles, videos, tweets, and more.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-discourse-light p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-discourse-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Structured Replies</h3>
                </div>
                <p>Contribute with categorized responses — agreements, counterpoints, questions, expansions, and resources.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-discourse-light p-3 rounded-full">
                    <Filter className="h-6 w-6 text-discourse-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Filter & Focus</h3>
                </div>
                <p>Navigate discussions easily by filtering for the type of responses you're most interested in.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-discourse-light p-3 rounded-full">
                    <Users className="h-6 w-6 text-discourse-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Community Insights</h3>
                </div>
                <p>Discover new perspectives and deepen your understanding through diverse community input.</p>
              </div>
            </div>
            
            <h2>Our Values</h2>
            
            <ul>
              <li><strong>Thoughtfulness</strong> — We prioritize depth over speed, reflection over reaction.</li>
              <li><strong>Structure</strong> — Categories and organization help make complex discussions navigable.</li>
              <li><strong>Perspective</strong> — We believe multiple viewpoints create richer understanding.</li>
              <li><strong>Curiosity</strong> — Questions and explorations are as valuable as assertions.</li>
            </ul>
            
            <div className="bg-discourse-light p-6 rounded-lg border border-discourse-primary/20 my-8">
              <h3 className="text-xl font-semibold mb-4">Ready to join the conversation?</h3>
              <Button asChild>
                <Link href="/start">Start a New Discourse</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;