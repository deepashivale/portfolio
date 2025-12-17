<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Sara Howari Portfolio

A modern, dark-themed portfolio website for UI/UX designer Sara Howari, featuring stunning 3D elements and smooth animations.

## Features

- **Hero Section** - Eye-catching landing with 3D frame and floating elements
- **About** - Personal introduction with skills showcase
- **Services** - UI/UX, Web Design, App Design, and Prototyping services
- **Skills** - Interactive skill bars showing proficiency levels
- **Projects** - Portfolio showcase with project cards
- **Gallery** - Filterable image gallery with lightbox view
- **Contact** - Contact form with social media links

## Tech Stack

- React 19.2.0
- TypeScript 5.8.2
- Vite 6.2.0
- Tailwind CSS
- Lucide React Icons

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

## Project Structure

```
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Services.tsx    # Services section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   ├── Gallery.tsx     # Gallery section
│   ├── Contact.tsx     # Contact form
│   └── SocialIcon.tsx  # Social media icons
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── types.ts            # TypeScript types
```
