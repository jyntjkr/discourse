// This file defines the TypeScript types for our database schema
// These types will be used throughout the application

export type User = {
  id: string;
  email: string;
  username: string;
  full_name: string;
  avatar_url?: string;
  bio?: string;
  created_at: string;
  updated_at: string;
};

export type Discourse = {
  id: string;
  slug: string;
  title: string;
  url: string;
  domain: string;
  image_url?: string;
  description?: string;
  author_id: string;
  note?: string;
  type: string;
  reply_count: number;
  created_at: string;
  updated_at: string;
};

export type Reply = {
  id: string;
  discourse_id: string;
  user_id: string;
  content: string;
  category: 'agreement' | 'counterpoint' | 'question' | 'expansion' | 'resource';
  parent_id?: string;
  created_at: string;
  updated_at: string;
};

export type Tag = {
  id: string;
  name: string;
  created_at: string;
};

export type DiscourseTag = {
  discourse_id: string;
  tag_id: string;
};

// Database schema SQL (to be executed in Supabase SQL editor)
/*
-- Create users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create discourses table
CREATE TABLE discourses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  domain TEXT NOT NULL,
  image_url TEXT,
  description TEXT,
  author_id UUID NOT NULL REFERENCES users(id),
  note TEXT,
  type TEXT NOT NULL,
  reply_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create replies table
CREATE TABLE replies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  discourse_id UUID NOT NULL REFERENCES discourses(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id),
  content TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('agreement', 'counterpoint', 'question', 'expansion', 'resource')),
  parent_id UUID REFERENCES replies(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create tags table
CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create discourse_tags junction table
CREATE TABLE discourse_tags (
  discourse_id UUID NOT NULL REFERENCES discourses(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (discourse_id, tag_id)
);

-- Create indexes
CREATE INDEX idx_discourses_author_id ON discourses(author_id);
CREATE INDEX idx_replies_discourse_id ON replies(discourse_id);
CREATE INDEX idx_replies_user_id ON replies(user_id);
CREATE INDEX idx_replies_parent_id ON replies(parent_id);
CREATE INDEX idx_discourse_tags_discourse_id ON discourse_tags(discourse_id);
CREATE INDEX idx_discourse_tags_tag_id ON discourse_tags(tag_id);

-- Create function to update reply_count
CREATE OR REPLACE FUNCTION update_reply_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE discourses
    SET reply_count = reply_count + 1
    WHERE id = NEW.discourse_id;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE discourses
    SET reply_count = reply_count - 1
    WHERE id = OLD.discourse_id;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for reply_count
CREATE TRIGGER update_reply_count_trigger
AFTER INSERT OR DELETE ON replies
FOR EACH ROW
EXECUTE FUNCTION update_reply_count();
*/ 