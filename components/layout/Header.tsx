"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { MessageSquare, Plus, Home, User, LogOut } from 'lucide-react';
import { useAuth } from '@/app/providers';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const pathname = usePathname();
  const { user, profile, signOut } = useAuth();
  
  const isActive = (path: string) => {
    return pathname === path;
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
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
          {user ? (
            <>
              <Button asChild variant="outline">
                <Link href="/start">
                  <Plus className="mr-2 h-4 w-4" />
                  New Discourse
                </Link>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={profile?.avatar_url} alt={profile?.username || 'User'} />
                      <AvatarFallback>{profile?.username?.substring(0, 2).toUpperCase() || 'U'}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                      <p className="font-medium">{profile?.full_name}</p>
                      <p className="text-xs text-muted-foreground">@{profile?.username}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile" className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" size="icon" className="md:hidden">
                <Link href="/">
                  <Home className="h-5 w-5" />
                </Link>
              </Button>
              
              <Button asChild variant="outline">
                <Link href="/auth">Sign In</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;