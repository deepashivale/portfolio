-- =====================================================
-- Supabase Database Setup for Portfolio Contact Form
-- =====================================================

-- Create contacts table to store form submissions
CREATE TABLE IF NOT EXISTS contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(500) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    read BOOLEAN DEFAULT FALSE,
    ip_address VARCHAR(45),
    user_agent TEXT
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_read ON contacts(read);

-- Enable Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (submit contact form)
CREATE POLICY "Allow public insert" ON contacts
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create policy to allow authenticated users to read all contacts
CREATE POLICY "Allow authenticated read" ON contacts
    FOR SELECT
    TO authenticated
    USING (true);

-- Create policy to allow authenticated users to update contacts
CREATE POLICY "Allow authenticated update" ON contacts
    FOR UPDATE
    TO authenticated
    USING (true);

-- Optional: Create a function to get contact statistics
CREATE OR REPLACE FUNCTION get_contact_stats()
RETURNS TABLE (
    total_contacts BIGINT,
    unread_contacts BIGINT,
    today_contacts BIGINT
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        COUNT(*)::BIGINT as total_contacts,
        COUNT(*) FILTER (WHERE read = FALSE)::BIGINT as unread_contacts,
        COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE)::BIGINT as today_contacts
    FROM contacts;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Optional: Create a view for recent contacts (last 30 days)
CREATE OR REPLACE VIEW recent_contacts AS
SELECT 
    id,
    name,
    email,
    subject,
    LEFT(message, 100) as message_preview,
    created_at,
    read
FROM contacts
WHERE created_at >= NOW() - INTERVAL '30 days'
ORDER BY created_at DESC;

-- Grant permissions
GRANT SELECT ON recent_contacts TO authenticated;

-- =====================================================
-- Instructions:
-- =====================================================
-- 1. Go to your Supabase project dashboard
-- 2. Navigate to SQL Editor
-- 3. Copy and paste this entire SQL script
-- 4. Click "Run" to execute
-- 5. Your contacts table will be created with proper security
-- =====================================================

-- =====================================================
-- After running this SQL, you'll need:
-- =====================================================
-- 1. Your Supabase URL (from project settings)
-- 2. Your Supabase Anon Key (from project settings)
-- 3. Add these to your .env.local file:
--    VITE_SUPABASE_URL=your_supabase_url
--    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
-- =====================================================
