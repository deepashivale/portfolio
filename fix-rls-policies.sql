-- =====================================================
-- Fix RLS Policies for Contact Form
-- =====================================================

-- First, drop existing policies if any
DROP POLICY IF EXISTS "Allow public insert" ON contacts;
DROP POLICY IF EXISTS "Allow authenticated read" ON contacts;
DROP POLICY IF EXISTS "Allow authenticated update" ON contacts;

-- Make sure RLS is enabled
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows ANYONE (including anonymous users) to insert
CREATE POLICY "Enable insert for anon users"
ON contacts
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Create a policy that allows authenticated users to read
CREATE POLICY "Enable read for authenticated users"
ON contacts
FOR SELECT
TO authenticated
USING (true);

-- Create a policy that allows authenticated users to update
CREATE POLICY "Enable update for authenticated users"
ON contacts
FOR UPDATE
TO authenticated
USING (true);

-- Verify the policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies
WHERE tablename = 'contacts';
