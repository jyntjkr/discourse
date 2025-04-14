import { supabase, handleSupabaseError } from '../supabase';
import { Discourse, Reply, Tag, User } from './schema';

// User services
export const userService = {
  async getCurrentUser() {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return null;
      
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single();
        
      if (error) throw error;
      return data as User;
    } catch (error) {
      return handleSupabaseError(error);
    }
  },
  
  async createUser(userData: Partial<User>) {
    try {
      const { data, error } = await supabase
        .from('users')
        .insert(userData)
        .select()
        .single();
        
      if (error) throw error;
      return data as User;
    } catch (error) {
      return handleSupabaseError(error);
    }
  },
  
  async updateUser(userId: string, userData: Partial<User>) {
    try {
      const { data, error } = await supabase
        .from('users')
        .update(userData)
        .eq('id', userId)
        .select()
        .single();
        
      if (error) throw error;
      return data as User;
    } catch (error) {
      return handleSupabaseError(error);
    }
  }
};

// Discourse services
export const discourseService = {
  async getDiscourses(limit = 10, offset = 0) {
    try {
      const { data, error } = await supabase
        .from('discourses')
        .select(`
          *,
          author:users(id, username, full_name, avatar_url),
          tags:discourse_tags(tag:tags(id, name))
        `)
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1);
        
      if (error) throw error;
      return data;
    } catch (error) {
      return handleSupabaseError(error);
    }
  },
  
  async getDiscourseBySlug(slug: string) {
    try {
      const { data, error } = await supabase
        .from('discourses')
        .select(`
          *,
          author:users(id, username, full_name, avatar_url),
          tags:discourse_tags(tag:tags(id, name))
        `)
        .eq('slug', slug)
        .single();
        
      if (error) throw error;
      return data;
    } catch (error) {
      return handleSupabaseError(error);
    }
  },
  
  async createDiscourse(discourseData: Partial<Discourse>) {
    try {
      const { data, error } = await supabase
        .from('discourses')
        .insert(discourseData)
        .select()
        .single();
        
      if (error) throw error;
      return data as Discourse;
    } catch (error) {
      return handleSupabaseError(error);
    }
  },
  
  async addTagsToDiscourse(discourseId: string, tagIds: string[]) {
    try {
      const discourseTags = tagIds.map(tagId => ({
        discourse_id: discourseId,
        tag_id: tagId
      }));
      
      const { data, error } = await supabase
        .from('discourse_tags')
        .insert(discourseTags)
        .select();
        
      if (error) throw error;
      return data;
    } catch (error) {
      return handleSupabaseError(error);
    }
  }
};

// Reply services
export const replyService = {
  async getRepliesByDiscourseId(discourseId: string) {
    try {
      const { data, error } = await supabase
        .from('replies')
        .select(`
          *,
          user:users(id, username, full_name, avatar_url)
        `)
        .eq('discourse_id', discourseId)
        .order('created_at', { ascending: true });
        
      if (error) throw error;
      return data;
    } catch (error) {
      return handleSupabaseError(error);
    }
  },
  
  async createReply(replyData: Partial<Reply>) {
    try {
      const { data, error } = await supabase
        .from('replies')
        .insert(replyData)
        .select()
        .single();
        
      if (error) throw error;
      return data as Reply;
    } catch (error) {
      return handleSupabaseError(error);
    }
  }
};

// Tag services
export const tagService = {
  async getAllTags() {
    try {
      const { data, error } = await supabase
        .from('tags')
        .select('*')
        .order('name');
        
      if (error) throw error;
      return data as Tag[];
    } catch (error) {
      return handleSupabaseError(error);
    }
  },
  
  async createTag(name: string) {
    try {
      const { data, error } = await supabase
        .from('tags')
        .insert({ name })
        .select()
        .single();
        
      if (error) throw error;
      return data as Tag;
    } catch (error) {
      return handleSupabaseError(error);
    }
  }
}; 