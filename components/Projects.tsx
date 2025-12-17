
import React from 'react';
import { Brain, Zap, Users, TrendingUp, ExternalLink, Github, Star, Utensils, Briefcase, Building2, Cloud, Dumbbell, Youtube, Rocket } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  impact?: string;
  icon: React.ElementType;
  color: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "TasteVibe Restaurant Recommender",
    category: "AI/ML Application",
    description: "A modern web application that helps discover the best restaurants in any location using Qloo's location intelligence and Google's Gemini AI for personalized recommendations and chat assistance.",
    technologies: ["React", "TypeScript", "Gemini AI", "Qloo API"],
    impact: "Smart Discovery",
    icon: Utensils,
    color: "#FFB5A7",
    githubUrl: "https://github.com/Darkcoder011/TasteVibe-Restaurant-Recommender",
    liveUrl: "https://taste-vibe-restaurant-recommender.vercel.app/"
  },
  {
    title: "AutoApply AI - Job Automation",
    category: "AI Platform",
    description: "A modern, intelligent job application automation platform built with React, TypeScript, and Supabase. Streamline your job search with AI-powered automation and comprehensive tracking.",
    technologies: ["React", "TypeScript", "Supabase", "AI Automation"],
    impact: "Auto-Apply",
    icon: Briefcase,
    color: "#E76F51",
    liveUrl: "https://hirehutr.netlify.app/"
  },
  {
    title: "Lunexa Company Website",
    category: "Full-Stack",
    description: "A professional full-stack website built with React.js, TailwindCSS, and Firebase for Lunexa company. Features both a public company website and a protected team portal for internal collaboration.",
    technologies: ["React.js", "TailwindCSS", "Firebase", "Team Portal"],
    impact: "Founder Project",
    icon: Building2,
    color: "#F4A261",
    liveUrl: "http://lunexa.dpdns.org/"
  },
  {
    title: "Cloud Browser",
    category: "Cloud Service",
    description: "A lightweight cloud-based web browser service optimized to run on Render's free tier with 500MB RAM constraints. Allows users to browse external websites through a proxy server.",
    technologies: ["Node.js", "Proxy Server", "Render", "Cloud"],
    impact: "500MB RAM",
    icon: Cloud,
    color: "#FFB5A7",
    githubUrl: "https://github.com/AbhijitDengale/cloudbrowser"
  },
  {
    title: "FitNFab Fitness Website",
    category: "Web Application",
    description: "A modern fitness website designed to help users achieve their health and wellness goals with comprehensive workout plans, nutrition guides, and progress tracking.",
    technologies: ["React", "TailwindCSS", "Fitness API", "Responsive"],
    impact: "Health & Wellness",
    icon: Dumbbell,
    color: "#E76F51",
    liveUrl: "https://fit-nfab.vercel.app/"
  },
  {
    title: "YouTube Automation System",
    category: "Automation",
    description: "Advanced YouTube automation system managing and automating content for 60+ channels. Handles video scheduling, analytics tracking, and content optimization at scale.",
    technologies: ["Python", "YouTube API", "Automation", "Analytics"],
    impact: "60+ Channels",
    icon: Youtube,
    color: "#F4A261"
  },
  {
    title: "HireHut - AI Job Platform",
    category: "AI Platform",
    description: "A modern, beautiful landing page for an AI-powered job application automation platform built with React, Vite, and Tailwind CSS. Streamlines the entire job application process.",
    technologies: ["React", "Vite", "Tailwind CSS", "AI Integration"],
    impact: "Smart Apply",
    icon: Rocket,
    color: "#FFB5A7",
    liveUrl: "http://hirehut.me/"
  }
];

export const Projects: React.FC = () => {
  return (
    <section className="relative py-32 px-4 w-full overflow-hidden" id="projects">
      {/* Subtle Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] rounded-full opacity-15 animate-pulse blur-3xl" style={{
          background: 'radial-gradient(circle, #FFB5A7 0%, #E76F51 50%, transparent 70%)',
          animationDuration: '8s'
        }}></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full opacity-10 animate-pulse blur-3xl" style={{
          background: 'radial-gradient(circle, #F4A261 0%, #FFB5A7 50%, transparent 70%)',
          animationDelay: '4s',
          animationDuration: '10s'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full backdrop-blur-xl border border-white/10" style={{
            background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
          }}>
            <Star className="w-5 h-5 text-white animate-spin" style={{animationDuration: '3s'}} />
            <span className="text-white font-medium">Featured Work</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text mb-6" style={{
            backgroundImage: 'linear-gradient(135deg, #FFB5A7 0%, #E76F51 50%, #F4A261 100%)'
          }}>
            My Projects
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Real-world AI systems delivering{' '}
            <span className="text-white font-bold">measurable impact</span> and{' '}
            <span className="text-white font-bold">business value</span>
          </p>
          
          <div className="w-32 h-1 mx-auto mt-6 rounded-full" style={{
            background: 'linear-gradient(90deg, #FFB5A7 0%, #E76F51 50%, #F4A261 100%)'
          }}></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { title, category, description, technologies, impact, icon: Icon, color, githubUrl, liveUrl } = project;

  return (
    <div 
      className="relative p-8 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-105 transition-all duration-300 group"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
      }}
    >
      {/* Icon & Category */}
      <div className="flex items-center justify-between mb-6">
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
          style={{
            background: `linear-gradient(135deg, ${color}40 0%, ${color}20 100%)`
          }}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
        <span 
          className="text-xs font-bold px-3 py-1.5 rounded-full text-white"
          style={{
            background: `linear-gradient(135deg, ${color}30 0%, ${color}15 100%)`
          }}
        >
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed mb-6">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full text-white border border-white/20"
            style={{
              background: `linear-gradient(135deg, ${color}15 0%, ${color}5 100%)`
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links & Impact */}
      <div className="space-y-3">
        {/* Project Links */}
        {(githubUrl || liveUrl) && (
          <div className="flex gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all text-white text-sm font-medium hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`
                }}
              >
                <Github className="w-4 h-4" />
                <span>Code</span>
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-sm border border-white/20 hover:border-white/30 transition-all text-white text-sm font-medium hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${color}20 0%, ${color}10 100%)`
                }}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live</span>
              </a>
            )}
          </div>
        )}

        {/* Impact Badge */}
        {impact && (
          <div className="flex items-center gap-2 pt-3 border-t border-white/10">
            <TrendingUp className="w-4 h-4 text-white" />
            <span className="text-white font-bold text-sm">{impact}</span>
          </div>
        )}
      </div>

      {/* Hover Accent Line */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, ${color}, ${color}80)`
        }}
      />
    </div>
  );
};
