"use client";

import React from 'react';
import Header from '@/components/layout/Header';
import AuthForm from '@/components/auth/AuthForm';
import { useAuth } from '@/app/providers';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthPage = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (!loading && user) {
      router.push('/');
    }
  }, [user, loading, router]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-12 max-w-5xl">
          <div className="flex justify-center items-center h-64">
            <p className="text-lg">Loading...</p>
          </div>
        </main>
      </div>
    );
  }
  
  if (user) {
    return null; // Will redirect in useEffect
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm border">
          <h1 className="text-2xl font-bold text-center mb-6">Welcome to Discourse</h1>
          <p className="text-muted-foreground text-center mb-8">
            Sign in to your account or create a new one to get started.
          </p>
          
          <AuthForm />
        </div>
      </main>
    </div>
  );
};

export default AuthPage; 