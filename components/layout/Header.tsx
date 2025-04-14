"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { MessageSquare, Plus, Home, User } from 'lucide-react';

const Header = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 max-w-5xl flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-discourse-primary" />
          <h1 className="text-xl font-bold">Discourse</h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-4">
          <Link href="/" className={`text-sm font-medium transition-colors hover:text-discourse-primary ${isActive('/') ? 'text-discourse-primary' : 'text-foreground'}`}>
            Home
          </Link>
          <Link href="/start" className={`text-sm font-medium transition-colors hover:text-discourse-primary ${isActive('/start') ? 'text-discourse-primary' : 'text-foreground'}`}>
            Start Discourse
          </Link>
          <Link href="/about" className={`text-sm font-medium transition-colors hover:text-discourse-primary ${isActive('/about') ? 'text-discourse-primary' : 'text-foreground'}`}>
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button asChild variant="outline">
            <Link href="/start">
              <Plus className="mr-2 h-4 w-4" />
              New Discourse
            </Link>
          </Button>
          
          <Button asChild variant="ghost" size="icon" className="md:hidden">
            <Link href="/">
              <Home className="h-5 w-5" />
            </Link>
          </Button>
          
          <Button asChild variant="ghost" size="icon">
            <Link href="/profile">
              <User className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;