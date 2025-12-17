# Assets Folder

This folder contains all static assets for the Sara Howari Portfolio website.

## Structure

```
assets/
├── images/          # General images (hero, about, etc.)
├── icons/           # Icon files and logos
├── projects/        # Project showcase images
└── gallery/         # Gallery section images
```

## Usage

### Images
Place your images in the appropriate subfolder and reference them in your components:

```tsx
// Example usage in components
<img src="/assets/images/avatar.png" alt="Avatar" />
<img src="/assets/projects/project-1.jpg" alt="Project" />
<img src="/assets/gallery/design-1.jpg" alt="Gallery Item" />
```

## Recommended Image Formats

- **Photos/Complex Images**: JPG/JPEG (optimized for web)
- **Graphics/Logos**: PNG (with transparency if needed)
- **Icons**: SVG (scalable vector graphics)
- **Modern Browsers**: WebP (smaller file size, better quality)

## Image Optimization Tips

1. Compress images before uploading (use tools like TinyPNG, ImageOptim)
2. Use appropriate dimensions (don't upload 4K images for thumbnails)
3. Consider using WebP format for better performance
4. Add descriptive alt text for accessibility

## Placeholder Images

Currently using Unsplash URLs as placeholders. Replace with your actual project images:

- Hero avatar: 3D character illustration
- Project images: Your actual UI/UX work
- Gallery images: Portfolio pieces
