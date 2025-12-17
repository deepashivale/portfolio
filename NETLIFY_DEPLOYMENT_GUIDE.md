# Netlify Deployment Guide

## ✅ MIME Type Error Fixed!

The configuration files have been added to fix the MIME type error.

## Deployment Steps

### Option 1: Redeploy (Recommended)

1. Go to your Netlify dashboard
2. Find your site
3. Click **Deploys** tab
4. Click **Trigger deploy** → **Clear cache and deploy site**
5. Wait for the build to complete
6. Your site should now work! ✅

### Option 2: Fresh Deploy

If the above doesn't work, try a fresh deployment:

1. **Delete the old site** (if any) from Netlify
2. Go to Netlify dashboard
3. Click **Add new site** → **Import an existing project**
4. Choose **GitHub**
5. Select your repository: `AbhijitDengale/portpolio`
6. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18
7. Click **Deploy site**

### Build Settings (Auto-configured via netlify.toml)

```
Build command: npm run build
Publish directory: dist
Node version: 18
```

## Environment Variables (Optional)

If you want to use environment variables instead of hardcoded values:

1. Go to **Site settings** → **Environment variables**
2. Add these variables:
   - `VITE_SUPABASE_URL` = `https://vwlyipjvlbxsutmpqxpz.supabase.co`
   - `VITE_SUPABASE_ANON_KEY` = `your_anon_key`

## Files Added to Fix MIME Error

✅ **netlify.toml** - Main configuration file
✅ **public/_headers** - HTTP headers for proper MIME types
✅ **public/_redirects** - SPA routing configuration

## What These Files Do

### netlify.toml
- Sets build command and output directory
- Configures proper MIME types for .js, .mjs, .css files
- Sets up SPA redirects
- Adds security headers

### public/_headers
- Ensures JavaScript files are served with correct MIME type
- Adds caching for static assets
- Security headers

### public/_redirects
- Redirects all routes to index.html for SPA routing
- Enables client-side routing to work properly

## Verify Deployment

After deployment, check:

1. ✅ Site loads without errors
2. ✅ Navigation works (all sections)
3. ✅ Contact form submits to Supabase
4. ✅ All project links work
5. ✅ Social media links work

## Troubleshooting

### Still getting MIME type error?
1. Clear Netlify cache: **Deploys** → **Trigger deploy** → **Clear cache and deploy site**
2. Check browser console for specific errors
3. Verify all files were pushed to GitHub

### Build fails?
1. Check build logs in Netlify
2. Verify `package.json` has all dependencies
3. Make sure Node version is 18+

### Contact form not working?
1. Check Supabase RLS policies
2. Run `fix-rls-policies.sql` in Supabase SQL Editor
3. Verify Supabase credentials in `src/lib/supabase.ts`

## Custom Domain (Optional)

To add a custom domain:

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Follow the DNS configuration steps
4. Wait for SSL certificate to provision

## Success! 🎉

Your portfolio should now be live on Netlify without any MIME type errors!

**Next Steps:**
- Share your portfolio URL
- Test all features
- Monitor Supabase for contact form submissions
