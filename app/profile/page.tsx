import React from 'react';
import Header from '@/components/layout/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DiscourseCard from '@/components/discourse/DiscourseCard';

// Mock user data
const mockUser = {
  id: 'user-1',
  name: 'Jane Smith',
  username: 'janesmith',
  avatarUrl: '',
  bio: 'Tech enthusiast and avid reader. Interested in AI, philosophy, and how technology shapes society.',
  joinedDate: '2023-01-15T00:00:00Z',
};

// Mock discourses started by the user
const mockStartedDiscourses = [
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
    id: '4',
    slug: 'sustainable-urban-design',
    title: 'Sustainable Urban Design: Creating Cities of Tomorrow',
    url: 'https://example.com/blog/sustainable-cities',
    domain: 'example.com',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    description: 'How urban planners are incorporating sustainability principles to build better cities.',
    replyCount: 18,
    createdAt: '2023-04-22T08:15:00Z',
    tags: ['urban', 'sustainability', 'design'],
  },
];

// Mock discourses the user has participated in
const mockParticipatedDiscourses = [
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

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={mockUser.avatarUrl} alt={mockUser.name} />
                  <AvatarFallback className="text-2xl">{mockUser.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <h1 className="text-2xl font-bold mb-1">{mockUser.name}</h1>
                  <p className="text-muted-foreground mb-3">@{mockUser.username}</p>
                  
                  <p className="mb-3">{mockUser.bio}</p>
                  
                  <div className="text-sm text-muted-foreground">
                    Joined {new Date(mockUser.joinedDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Tabs defaultValue="started">
            <TabsList className="mb-6">
              <TabsTrigger value="started">Discourses Started</TabsTrigger>
              <TabsTrigger value="participated">Participated In</TabsTrigger>
            </TabsList>
            
            <TabsContent value="started">
              {mockStartedDiscourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockStartedDiscourses.map((discourse) => (
                    <DiscourseCard key={discourse.id} {...discourse} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No discourses started yet.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="participated">
              {mockParticipatedDiscourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockParticipatedDiscourses.map((discourse) => (
                    <DiscourseCard key={discourse.id} {...discourse} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No participation in discourses yet.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;