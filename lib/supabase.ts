import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export function handleSupabaseError(error: unknown) {
  if (error instanceof Error) {
    console.error('Supabase error:', error.message)
    throw new Error(error.message)
  }
  if (typeof error === 'object' && error !== null && 'message' in error) {
    console.error('Supabase error:', (error as { message: string }).message)
    throw new Error((error as { message: string }).message)
  }
  console.error('Unknown error:', error)
  throw new Error('An unknown error occurred')
} 