import { supabase } from './supabaseClient';

export async function fetchPosts() {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data;
}

export async function createPost({ title, content, author }: { title: string, content: string, author: string }) {
  const { data, error } = await supabase
    .from('posts')
    .insert([{ title, content, author }])
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function updatePost(id: string, { title, content, author }: { title: string, content: string, author: string }) {
  const { data, error } = await supabase
    .from('posts')
    .update({ title, content, author })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function deletePost(id: string) {
  const { error } = await supabase
    .from('posts')
    .delete()
    .eq('id', id);
  if (error) throw error;
}