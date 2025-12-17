import React, { useState } from 'react';
import { X, ZoomIn, Star, Calendar, MapPin } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  date?: string;
  location?: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'AI/ML Conference 2024',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop',
    description: 'Presented a keynote on "Building Autonomous AI Agents" at the annual AI/ML conference. Shared insights on multi-agent orchestration, LangChain frameworks, and real-world deployment strategies with 500+ attendees.',
    date: 'March 2024',
    location: 'Tech Innovation Hub, Mumbai'
  },
  {
    id: 2,
    title: 'Team Collaboration at ZyraTech',
    category: 'Work',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop',
    description: 'Daily standup with the engineering team discussing sprint goals for the AI-powered hiring platform. Collaborating on architecture decisions, code reviews, and mentoring junior developers on best practices.',
    date: 'February 2024',
    location: 'ZyraTech Office, Pune'
  },
  {
    id: 3,
    title: 'Late Night Coding Session',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop',
    description: 'Deep dive into building the RAG system with Pinecone vector database and OpenAI embeddings. Implementing semantic search and context-aware retrieval for enterprise document analysis.',
    date: 'January 2024',
    location: 'Home Workspace'
  },
  {
    id: 4,
    title: 'Python Developers Meetup',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop',
    description: 'Networking with fellow Python developers and AI enthusiasts. Discussed latest trends in LangChain, prompt engineering techniques, and shared experiences on deploying ML models to production.',
    date: 'December 2023',
    location: 'Tech Community Center'
  },
  {
    id: 5,
    title: 'Hiring Platform Launch Day',
    category: 'Milestones',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop',
    description: 'Successfully launched the AI-powered hiring platform that reduced recruitment time by 70%. The system processes 1000+ resumes daily with automated screening, RAG-based matching, and intelligent scheduling.',
    date: 'November 2023',
    location: 'ZyraTech Headquarters'
  },
  {
    id: 6,
    title: 'AWS Certification Achievement',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
    description: 'Completed AWS Solutions Architect certification. Deepened knowledge in cloud architecture, serverless computing, containerization with ECS/EKS, and implementing scalable ML pipelines on AWS.',
    date: 'October 2023',
    location: 'Online Learning'
  },
  {
    id: 7,
    title: 'AI Agent Workshop',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop',
    description: 'Led a hands-on workshop on "Building Autonomous AI Agents with LangChain". Taught 50+ developers how to create agents with reasoning, planning, and tool-use capabilities for real-world applications.',
    date: 'September 2023',
    location: 'Innovation Lab'
  },
  {
    id: 8,
    title: '40% Growth Milestone',
    category: 'Milestones',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop',
    description: 'Celebrating ZyraTech achieving 40% business growth driven by AI initiatives. Our ML solutions attracted major clients and positioned the company as a leader in AI-native development.',
    date: 'August 2023',
    location: 'Company Celebration'
  },
  {
    id: 9,
    title: 'Full-Stack AI Development',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop',
    description: 'Building a complete full-stack application with Next.js frontend, FastAPI backend, PostgreSQL database, and integrated OpenAI APIs. Implementing real-time features with WebSockets and Redis caching.',
    date: 'July 2023',
    location: 'Development Studio'
  },
  {
    id: 10,
    title: 'Hackathon Victory',
    category: 'Milestones',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop',
    description: 'Won first place at the AI Innovation Hackathon with a multi-agent system that automates customer support. Built in 48 hours using LangChain, OpenAI, and deployed on AWS with Docker containers.',
    date: 'June 2023',
    location: 'Hackathon Arena'
  },
  {
    id: 11,
    title: 'Open Source Contribution',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=1000&auto=format&fit=crop',
    description: 'Contributing to LangChain open source project. Submitted PRs for improving agent memory systems and added documentation for custom tool integration. Active in the community helping other developers.',
    date: 'May 2023',
    location: 'GitHub Community'
  },
  {
    id: 12,
    title: 'Tech Talk on RAG Systems',
    category: 'Events',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop',
    description: 'Delivered a tech talk on "Building Production-Ready RAG Systems" covering vector databases, embedding strategies, chunking techniques, and retrieval optimization for enterprise applications.',
    date: 'April 2023',
    location: 'Tech Conference Hall'
  },
  {
    id: 13,
    title: 'Docker & Kubernetes Mastery',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=1000&auto=format&fit=crop',
    description: 'Implementing containerized microservices architecture with Docker and orchestrating with Kubernetes. Set up CI/CD pipelines with GitHub Actions for automated testing and deployment to production.',
    date: 'March 2023',
    location: 'DevOps Lab'
  },
  {
    id: 14,
    title: 'Mentorship Program',
    category: 'Work',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop',
    description: 'Started mentoring junior developers in AI/ML development. Teaching Python best practices, LangChain fundamentals, prompt engineering, and guiding them through building their first AI applications.',
    date: 'February 2023',
    location: 'Training Room'
  },
  {
    id: 15,
    title: 'System Architecture Design',
    category: 'Work',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
    description: 'Designing scalable system architecture for the multi-agent platform. Planning microservices, database schemas, API contracts, and infrastructure requirements for handling 10,000+ concurrent users.',
    date: 'January 2023',
    location: 'Architecture Planning'
  },
  {
    id: 16,
    title: 'First AI Project Success',
    category: 'Milestones',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop',
    description: 'Completed my first production AI project - an intelligent chatbot with RAG capabilities. Achieved 90% accuracy in answering customer queries and reduced support ticket volume by 60%.',
    date: 'December 2022',
    location: 'Project Completion'
  },
  {
    id: 17,
    title: 'Learning LangChain',
    category: 'Development',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop',
    description: 'Deep diving into LangChain framework documentation and tutorials. Building sample projects with chains, agents, and memory systems. Experimenting with different LLM providers and prompt templates.',
    date: 'November 2022',
    location: 'Learning Space'
  },
  {
    id: 18,
    title: 'Team Building Event',
    category: 'Work',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop',
    description: 'Annual team building event with the engineering team. Strengthening bonds, sharing knowledge, and planning the roadmap for upcoming AI projects. Great discussions on innovation and collaboration.',
    date: 'October 2022',
    location: 'Team Retreat'
  },
];

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Events', 'Work', 'Development', 'Milestones'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="relative py-32 px-4 w-full overflow-hidden" id="gallery">
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
            <span className="text-white font-medium">My Journey</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text mb-6" style={{
            backgroundImage: 'linear-gradient(135deg, #FFB5A7 0%, #E76F51 50%, #F4A261 100%)'
          }}>
            Gallery
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            A visual journey through{' '}
            <span className="text-white font-bold">milestones</span>,{' '}
            <span className="text-white font-bold">achievements</span>, and{' '}
            <span className="text-white font-bold">memorable moments</span>
          </p>
          
          <div className="w-32 h-1 mx-auto mt-6 rounded-full" style={{
            background: 'linear-gradient(90deg, #FFB5A7 0%, #E76F51 50%, #F4A261 100%)'
          }}></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'text-white shadow-lg'
                  : 'text-gray-300 hover:text-white border border-white/20 hover:border-white/30'
              }`}
              style={{
                background: selectedCategory === category 
                  ? 'linear-gradient(135deg, #FFB5A7 0%, #E76F51 100%)'
                  : 'rgba(255, 181, 167, 0.05)'
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => setSelectedImage(item)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Lightbox
          item={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
};

const GalleryCard: React.FC<{
  item: GalleryItem;
  onClick: () => void;
}> = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative rounded-3xl overflow-hidden cursor-pointer backdrop-blur-xl border border-white/20 shadow-2xl hover:scale-105 transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
      }}
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        
        {/* Zoom Icon */}
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{
          background: 'rgba(255, 181, 167, 0.2)'
        }}>
          <ZoomIn className="w-5 h-5 text-white" />
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1.5 rounded-full text-xs font-bold text-white backdrop-blur-sm border border-white/20" style={{
            background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.3) 0%, rgba(231, 111, 81, 0.3) 100%)'
          }}>
            {item.category}
          </span>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
          <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
          <p className="text-gray-200 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity">
            {item.description}
          </p>
          
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
            {item.date && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{item.date}</span>
              </div>
            )}
            {item.location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>{item.location}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Lightbox: React.FC<{
  item: GalleryItem;
  onClose: () => void;
}> = ({ item, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 w-12 h-12 rounded-full backdrop-blur-xl border border-white/20 flex items-center justify-center text-white transition-colors hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.3) 0%, rgba(231, 111, 81, 0.3) 100%)'
        }}
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-5xl w-full rounded-3xl overflow-hidden backdrop-blur-xl border border-white/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
        }}
      >
        <div className="relative h-[60vh]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-4 py-1.5 rounded-full text-sm font-bold text-white" style={{
              background: 'linear-gradient(135deg, #FFB5A7 0%, #E76F51 100%)'
            }}>
              {item.category}
            </span>
            <div className="flex items-center gap-4 text-sm text-gray-300">
              {item.date && (
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
              )}
              {item.location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{item.location}</span>
                </div>
              )}
            </div>
          </div>
          <h3 className="text-white font-bold text-3xl mb-3">{item.title}</h3>
          <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  );
};
