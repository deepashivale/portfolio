# Supabase Setup Instructions

## Step 1: Run SQL Script in Supabase

1. Go to your Supabase project dashboard: https://app.supabase.com
2. Navigate to **SQL Editor** in the left sidebar
3. Click **New Query**
4. Open the `supabase-setup.sql` file in this project
5. Copy the entire SQL script
6. Paste it into the Supabase SQL Editor
7. Click **Run** to execute the script

This will create:
- ✅ `contacts` table to store form submissions
- ✅ Indexes for better performance
- ✅ Row Level Security (RLS) policies
- ✅ Helper functions and views

## Step 2: Verify Table Creation

1. In Supabase dashboard, go to **Table Editor**
2. You should see a new table called `contacts`
3. Click on it to verify the columns:
   - `id` (UUID, Primary Key)
   - `name` (VARCHAR)
   - `email` (VARCHAR)
   - `subject` (VARCHAR)
   - `message` (TEXT)
   - `created_at` (TIMESTAMP)
   - `read` (BOOLEAN)
   - `ip_address` (VARCHAR)
   - `user_agent` (TEXT)

## Step 3: Test the Contact Form

1. Your contact form is now connected to Supabase
2. Fill out the form on your portfolio website
3. Click "Send Message"
4. Check the `contacts` table in Supabase to see the submission

## Step 4: View Submissions

### In Supabase Dashboard:
1. Go to **Table Editor**
2. Click on `contacts` table
3. View all form submissions

### Query Recent Contacts:
```sql
SELECT * FROM recent_contacts;
```

### Get Statistics:
```sql
SELECT * FROM get_contact_stats();
```

## Security Features

✅ **Row Level Security (RLS)** is enabled
✅ **Public can insert** - Anyone can submit the contact form
✅ **Authenticated users can read** - Only you can view submissions
✅ **Anon key is safe** - It's designed to be public

## Credentials Already Configured

Your Supabase credentials are hardcoded in `src/lib/supabase.ts`:
- **URL**: https://vwlyipjvlbxsutmpqxpz.supabase.co
- **Anon Key**: Already configured

## Testing

1. Start your dev server: `npm run dev`
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check Supabase dashboard for the submission

## Troubleshooting

### Form not submitting?
- Check browser console for errors
- Verify SQL script ran successfully
- Check RLS policies are enabled

### Can't see submissions?
- Make sure you're logged into Supabase
- Check the `contacts` table in Table Editor
- Verify the data was inserted

### Need to reset?
```sql
-- Delete all contacts (be careful!)
DELETE FROM contacts;

-- Or drop and recreate the table
DROP TABLE IF EXISTS contacts CASCADE;
-- Then run the setup script again
```

## Next Steps

- Set up email notifications when form is submitted
- Create an admin dashboard to manage contacts
- Add spam protection (reCAPTCHA)
- Set up automated responses

## Support

If you encounter any issues:
1. Check Supabase logs in the dashboard
2. Verify your API keys are correct
3. Ensure RLS policies are properly configured
