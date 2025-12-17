# Assets Usage Guide

## 📁 Folder Structure

```
public/
└── assets/
    ├── images/          # General images (hero, about, backgrounds)
    ├── icons/           # Icons, logos, and SVG files
    ├── projects/        # Project showcase images
    └── gallery/         # Gallery section images
```

## 🖼️ How to Add Your Images

### 1. Hero Section Avatar
Place your 3D avatar or profile image in `assets/images/` and update:

**File:** `components/Hero.tsx`
```tsx
<img 
  src="/assets/images/avatar.png" 
  alt="Sara Howari Avatar" 
  // ... rest of props
/>
```

### 2. About Section Image
**File:** `components/About.tsx`
```tsx
<img 
  src="/assets/images/profile.png" 
  alt="Profile" 
  // ... rest of props
/>
```

### 3. Project Images
Place project screenshots in `assets/projects/` and update:

**File:** `components/Projects.tsx`
```tsx
const projects: Project[] = [
  {
    title: "Amaksora App",
    image: "/assets/projects/amaksora.jpg",
    // ... rest of properties
  },
  // ... more projects
];
```

### 4. Gallery Images
Place gallery images in `assets/gallery/` and update:

**File:** `components/Gallery.tsx`
```tsx
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Mobile Banking App',
    image: '/assets/gallery/banking-app.jpg',
    // ... rest of properties
  },
  // ... more items
];
```

### 5. Logo/Favicon
Place your logo in `assets/icons/` and update:

**File:** `index.html`
```html
<link rel="icon" type="image/svg+xml" href="/assets/icons/logo.svg" />
```

**File:** `components/Navbar.tsx` (if using image instead of text)
```tsx
<img src="/assets/icons/logo.svg" alt="Logo" className="w-9 h-9" />
```

## 📐 Recommended Image Sizes

### Hero Section
- **Avatar/Profile**: 800x1000px (portrait orientation)
- **Format**: PNG with transparency or JPG

### Projects
- **Thumbnail**: 600x400px (3:2 ratio)
- **Format**: JPG or WebP

### Gallery
- **Images**: 1200x800px (3:2 ratio)
- **Format**: JPG or WebP

### Icons/Logo
- **Logo**: SVG (scalable) or PNG 512x512px
- **Favicon**: 32x32px, 64x64px

## 🎨 Image Optimization

### Before Adding Images:

1. **Compress Images**
   - Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/)
   - Target: < 200KB per image

2. **Resize to Appropriate Dimensions**
   - Don't upload 4K images for thumbnails
   - Use the recommended sizes above

3. **Choose Right Format**
   - Photos: JPG or WebP
   - Graphics with transparency: PNG
   - Icons/Logos: SVG

4. **Add Alt Text**
   - Always include descriptive alt text for accessibility

## 🔄 Replacing Placeholder Images

Currently, the site uses Unsplash URLs as placeholders. To replace them:

1. Add your images to the appropriate `assets/` subfolder
2. Update the image paths in the component files
3. Test that images load correctly

### Quick Find & Replace:

Search for these patterns in your code:
- `https://images.unsplash.com/` - Replace with `/assets/...`
- `https://img.freepik.com/` - Replace with `/assets/...`

## 🚀 Example: Complete Image Replacement

### Step 1: Add Your Images
```
public/assets/
├── images/
│   ├── avatar.png
│   └── profile.png
├── projects/
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── project-3.jpg
│   └── project-4.jpg
└── gallery/
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    └── ...
```

### Step 2: Update Components
See the "How to Add Your Images" section above for specific file locations.

### Step 3: Test
```bash
npm run dev
```

Visit each section and verify images load correctly.

## 💡 Tips

- Keep filenames lowercase with hyphens: `my-project.jpg`
- Use descriptive names: `banking-app-dashboard.jpg` not `img1.jpg`
- Maintain consistent aspect ratios within each section
- Consider using WebP format for better performance
- Add a fallback for older browsers if using WebP

## 🐛 Troubleshooting

**Images not loading?**
- Check file path is correct (case-sensitive)
- Verify file is in the `public/` folder
- Clear browser cache
- Check browser console for 404 errors

**Images look blurry?**
- Use higher resolution images
- Check image dimensions match display size
- Ensure images aren't being stretched

**Slow loading?**
- Compress images more
- Use WebP format
- Consider lazy loading for gallery images
