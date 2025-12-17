import { createClient } from '@supabase/supabase-js';

// Hardcoded Supabase credentials
const supabaseUrl = 'https://vwlyipjvlbxsutmpqxpz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3bHlpcGp2bGJ4c3V0bXBxeHB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNTQ1OTgsImV4cCI6MjA3OTYzMDU5OH0.rfsj2CZVVIgKBTF1CDuMYQDvyw-xiVypB31OMQv4xic';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for contact form
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactRecord extends ContactFormData {
  id: string;
  created_at: string;
  read: boolean;
  ip_address?: string;
  user_agent?: string;
}

// Function to submit contact form
export async function submitContactForm(data: ContactFormData) {
  try {
    const { data: result, error } = await supabase
      .from('contacts')
      .insert({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
        user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown'
      })
      .select();

    if (error) {
      console.error('Supabase error:', error);
      throw new Error(error.message || 'Failed to submit form');
    }

    return { success: true, data: result };
  } catch (error: any) {
    console.error('Error in submitContactForm:', error);
    return { success: false, error: error.message || 'Unknown error' };
  }
}

// Function to get all contacts (for admin use)
export async function getAllContacts() {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return { success: false, error };
  }
}

// Function to mark contact as read
export async function markContactAsRead(id: string) {
  try {
    const { error } = await supabase
      .from('contacts')
      .update({ read: true })
      .eq('id', id);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error marking contact as read:', error);
    return { success: false, error };
  }
}
