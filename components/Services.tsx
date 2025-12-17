import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  Code2, 
  Smartphone, 
  Zap, 
  Sparkles, 
  Cpu, 
  Network,
  Layers3,
  Orbit,
  Binary,
  Hexagon,
  Triangle
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: React.ElementType;
  index: number;
  isHovered: boolean;
  onHover: (index: number | null) => void;
  features: string[];
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  Icon, 
  index, 
  isHovered, 
  onHover, 
  features, 
  color 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    if (isHovered && cardRef.current) {
      cardRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isHovered]);

  return (
    <div 
      ref={cardRef}
      className={`relative p-8 rounded-3xl transition-all duration-700 group overflow-hidden cursor-pointer transform-gpu glass ${
        isHovered 
          ? 'scale-105 z-20 animate-pulse-glow' 
          : 'hover-scale-102 z-10'
      }`}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      style={{
        background: isHovered 
          ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, ${color}40 0%, rgba(15, 5, 24, 0.95) 50%)`
          : 'rgba(15, 5, 24, 0.8)',
        backdropFilter: 'blur(20px)',
        border: isHovered 
          ? `1px solid ${color}60`
          : '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: isHovered 
          ? `0 25px 50px -12px ${color}40, inset 0 1px 0 rgba(255, 255, 255, 0.1)`
          : '0 10px 25px -5px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
      }}
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full transition-all duration-1000 ${
              isHovered ? 'opacity-60 animate-float' : 'opacity-20'
            }`}
            style={{
              background: color,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Holographic Grid Overlay */}
      <div 
        className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${
          isHovered ? 'opacity-20' : ''
        }`}
        style={{
          backgroundImage: `
            linear-gradient(${color}30 1px, transparent 1px),
            linear-gradient(90deg, ${color}30 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      {/* Floating Geometric Shapes */}
      <div className="absolute top-4 right-4 opacity-10">
        <Hexagon size={24} className="animate-spin" style={{ animationDuration: '8s' }} />
      </div>
      <div className="absolute bottom-4 left-4 opacity-10">
        <Triangle size={16} className="animate-pulse" />
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon with Orbital Animation */}
        <div className="relative mb-6 flex justify-center">
          <div 
            className={`relative p-4 rounded-2xl transition-all duration-500 ${
              isHovered 
                ? 'bg-white/20 border-white/30 shadow-lg' 
                : 'bg-white/5 border-white/10'
            }`}
            style={{ borderColor: isHovered ? `${color}60` : undefined }}
          >
            <Icon 
              size={40} 
              strokeWidth={1.5} 
              className={`transition-all duration-500 ${
                isHovered ? 'text-white scale-110' : 'text-gray-300'
              }`}
            />
            
            {/* Orbiting Dots */}
            {isHovered && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full animate-orbit"
                    style={{
                      background: color,
                      animationDelay: `${i * 0.7}s`,
                      transformOrigin: '32px 32px'
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Title with Glitch Effect */}
        <h3 
          className={`text-xl font-bold mb-4 transition-all duration-300 ${
            isHovered ? 'text-white' : 'text-gray-200'
          }`}
          style={{
            textShadow: isHovered ? `0 0 20px ${color}60` : 'none'
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-6 transition-colors duration-300 ${
          isHovered ? 'text-white/90' : 'text-gray-400'
        }`}>
          {description}
        </p>

        {/* Feature Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {features.map((feature, i) => (
            <span
              key={i}
              className={`px-3 py-1 text-xs rounded-full transition-all duration-300 ${
                isHovered 
                  ? 'bg-white/20 text-white border border-white/30' 
                  : 'bg-white/5 text-gray-400 border border-white/10'
              }`}
              style={{
                borderColor: isHovered ? `${color}40` : undefined,
                backgroundColor: isHovered ? `${color}20` : undefined
              }}
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-1000 ${
              isHovered ? 'w-full' : 'w-0'
            }`}
            style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }}
          />
        </div>
      </div>

      {/* Corner Accent */}
      <div 
        className={`absolute top-0 right-0 w-16 h-16 transition-opacity duration-500 ${
          isHovered ? 'opacity-30' : 'opacity-0'
        }`}
        style={{
          background: `linear-gradient(135deg, ${color}60, transparent)`,
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)'
        }}
      />
    </div>
  );
};

export const Services: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      title: "AI-Native Development",
      description: "Building intelligent applications with machine learning integration, natural language processing, and automated decision-making systems.",
      Icon: Brain,
      features: ["ML Integration", "NLP", "Automation", "Smart APIs"],
      color: "#ff6b6b"
    },
    {
      title: "Full-Stack Engineering",
      description: "End-to-end development from responsive frontends to scalable backend architectures with modern frameworks and cloud deployment.",
      Icon: Code2,
      features: ["React/Next.js", "Node.js", "Cloud Deploy", "APIs"],
      color: "#4ecdc4"
    },
    {
      title: "Agentic Systems",
      description: "Designing autonomous agent architectures that can reason, plan, and execute complex tasks with minimal human intervention.",
      Icon: Cpu,
      features: ["Agent Design", "Task Planning", "Reasoning", "Autonomy"],
      color: "#45b7d1"
    },
    {
      title: "Mobile Solutions",
      description: "Cross-platform mobile applications with native performance, seamless UX, and integration with modern backend services.",
      Icon: Smartphone,
      features: ["React Native", "Flutter", "Native APIs", "Performance"],
      color: "#f9ca24"
    }
  ];

  // Auto-rotate active service
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 px-4 w-full overflow-hidden" id="services">
      
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <pattern id="neural-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="#ffffff" opacity="0.3"/>
              <line x1="50" y1="50" x2="100" y2="0" stroke="#ffffff" strokeWidth="0.5" opacity="0.2"/>
              <line x1="50" y1="50" x2="100" y2="100" stroke="#ffffff" strokeWidth="0.5" opacity="0.2"/>
              <line x1="50" y1="50" x2="0" y2="100" stroke="#ffffff" strokeWidth="0.5" opacity="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural-grid)"/>
        </svg>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Orbit size={60} className="text-white/10 animate-spin" style={{ animationDuration: '20s' }} />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <Network size={40} className="text-white/10 animate-pulse" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <Layers3 size={50} className="text-white/10 animate-bounce" style={{ animationDuration: '3s' }} />
      </div>

      {/* Holographic Title Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 relative">
          
          {/* Holographic Background Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-32 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-3xl animate-pulse" />
          </div>

          {/* Main Title with Glitch Effect */}
          <div className="relative z-10 mb-6">
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white animate-pulse">
              Services
            </h2>
            <div className="absolute inset-0 text-5xl md:text-6xl font-bold text-purple-400/30 animate-ping" style={{ animationDuration: '3s' }}>
              Services
            </div>
          </div>

          {/* Subtitle with Typewriter Effect */}
          <div className="relative">
            <p className="text-gray-300 text-lg md:text-xl text-center max-w-2xl">
              Engineering the future with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold">
                AI-Native Solutions
              </span>
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" />
          </div>

          {/* Floating Tech Icons */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            {[Binary, Zap, Sparkles].map((Icon, i) => (
              <Icon
                key={i}
                size={20}
                className="absolute text-white/20 animate-float"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                  animationDelay: `${i * 1.5}s`,
                  animationDuration: '4s'
                }}
              />
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.Icon}
              index={index}
              isHovered={hoveredCard === index}
              onHover={setHoveredCard}
              features={service.features}
              color={service.color}
            />
          ))}
        </div>

        {/* Interactive Service Selector */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="flex gap-3">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeService === index
                    ? 'bg-gradient-to-r from-purple-400 to-pink-400 scale-125 shadow-lg shadow-purple-400/50'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Active Service Highlight */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            {React.createElement(services[activeService].Icon, { size: 20, className: "text-purple-400" })}
            <span className="text-white font-medium">{services[activeService].title}</span>
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>
      </div>


    </section>
  );
};
