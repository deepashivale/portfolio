import React, { useEffect, useState } from 'react';
import { 
  Sparkles, 
  ChevronDown,
  Brain,
  Code,
  Rocket,
  Database,
  Zap,
  Globe,
  Star,
  ArrowRight,
  Play,
  Cpu,
  Terminal,
  Layers,
  Atom,
  TrendingUp
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-10 overflow-hidden">
      
      {/* Cleaner Background System with Better Contrast */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle animated gradient orbs - reduced opacity for better text visibility */}
        <div className="absolute top-20 left-20 w-[600px] h-[600px] rounded-full opacity-15 animate-pulse blur-3xl" style={{
          background: 'radial-gradient(circle, #FFB5A7 0%, #E76F51 50%, transparent 70%)',
          animationDuration: '8s'
        }}></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full opacity-10 animate-pulse blur-3xl" style={{
          background: 'radial-gradient(circle, #F4A261 0%, #FFB5A7 50%, transparent 70%)',
          animationDelay: '4s',
          animationDuration: '10s'
        }}></div>

        {/* Subtle floating particles - fewer and less distracting */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-20 animate-float"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              background: i % 3 === 0 ? '#FFB5A7' : i % 3 === 1 ? '#E76F51' : '#F4A261',
              animationDelay: `${i * 1}s`,
              animationDuration: '6s'
            }}
          />
        ))}
      </div>

      <div className="relative w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Content - Clean & Readable Layout */}
        <div className="lg:col-span-7 flex flex-col gap-8 text-left order-2 lg:order-1 relative z-20">
          
          {/* Welcome Badge - Enhanced Visibility */}
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-xl border border-white/20 shadow-2xl" style={{
              background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.25) 0%, rgba(231, 111, 81, 0.25) 100%)'
            }}>
              <Star className="w-5 h-5 text-white animate-spin" style={{animationDuration: '3s'}} />
              <span className="text-white font-bold text-base tracking-wide">Web Developer</span>
              <Sparkles className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Clean Typography with High Contrast */}
          <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            
            {/* Greeting */}
            <div>
              <h2 className="text-3xl md:text-4xl text-white font-light tracking-tight leading-tight mb-4">
                Hello, I'm
              </h2>
            </div>
            
            {/* Name with Clear Gradient - Better Visibility */}
            <div className="relative mb-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight">
                <span 
                  className="block text-transparent bg-clip-text mb-2"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #FFB5A7 0%, #E76F51 50%, #F4A261 100%)',
                    WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  DEEPA
                </span>
                <span 
                  className="block text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #F4A261 0%, #E76F51 50%, #FFB5A7 100%)',
                    WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)'
                  }}
                >
                  SHIVALE
                </span>
              </h1>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 blur-2xl opacity-30 -z-10" style={{
                background: 'linear-gradient(135deg, #FFB5A7 0%, #E76F51 50%, #F4A261 100%)'
              }}></div>
            </div>

            {/* Role Title with Dividers */}
            <div className="flex items-center gap-4 py-4">
              <div className="w-12 h-1 rounded-full" style={{
                background: 'linear-gradient(90deg, transparent 0%, #FFB5A7 100%)'
              }}></div>
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                WEB DEVELOPER
              </h3>
              <div className="w-12 h-1 rounded-full" style={{
                background: 'linear-gradient(90deg, #E76F51 0%, transparent 100%)'
              }}></div>
            </div>
            
            {/* Subtitle - High Contrast */}
            <p className="text-xl md:text-2xl text-gray-200 font-medium tracking-wide">
              Full-Stack & Systems Architect
            </p>
          </div>

          {/* Description Card - High Readability */}
          <div className={`relative transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative p-8 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl" style={{
              background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.15) 0%, rgba(231, 111, 81, 0.15) 100%)'
            }}>
              <p className="text-lg md:text-xl text-white leading-relaxed">
                Crafting <span className="font-bold text-transparent bg-clip-text" style={{
                  backgroundImage: 'linear-gradient(135deg, #FFB5A7 0%, #E76F51 100%)'
                }}>scalable full-stack web applications</span> that deliver seamless user experiences through {' '}
                <span className="font-bold">clean architecture </span>,{' '}
                <span className="font-bold">modern frameworks </span>, and{' '}
                <span className="font-bold"> efficient backend systems</span>.
              </p>
            </div>
          </div>

          {/* CTA Buttons - Clear & Accessible */}
          <div className={`flex flex-wrap items-center gap-6 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a 
              href="#projects" 
              className="group relative px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3" 
              style={{
                background: 'linear-gradient(135deg, #FFB5A7 0%, #E76F51 100%)',
                color: '#ffffff'
              }}
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>View My Work</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#contact" 
              className="group relative px-8 py-4 rounded-2xl font-bold text-lg text-white border-2 backdrop-blur-xl hover:scale-105 transition-all duration-300 flex items-center gap-3" 
              style={{
                borderColor: 'rgba(255, 181, 167, 0.5)',
                background: 'rgba(255, 181, 167, 0.1)'
              }}
            >
              <Terminal className="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
          </div>

          {/* Stats Cards - Clean Design */}
          <div className={`grid grid-cols-3 gap-4 transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {[
              { value: '15+', label: 'AI Systems', icon: Brain, color: '#FFB5A7' },
              { value: '70%', label: 'Efficiency', icon: Zap, color: '#E76F51' },
              { value: '40%', label: 'Growth', icon: TrendingUp, color: '#F4A261' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl backdrop-blur-xl border border-white/20 text-center hover:scale-105 transition-transform duration-300" 
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.15) 0%, rgba(231, 111, 81, 0.15) 100%)'
                }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-white" />
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Clean Avatar Section */}
        <div className="lg:col-span-5 relative flex items-center justify-center order-1 lg:order-2">
          
          {/* Avatar Container */}
          <div className="relative group">
            
            {/* Subtle background glow */}
            <div className="absolute -inset-8 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-500" style={{
              background: 'conic-gradient(from 0deg, #FFB5A7, #E76F51, #F4A261, #FFB5A7)',
              filter: 'blur(40px)'
            }}></div>

            {/* Main Avatar Card */}
            <div className="relative w-[400px] h-[400px] rounded-3xl backdrop-blur-xl border-2 shadow-2xl group-hover:scale-105 transition-all duration-500 overflow-hidden" style={{
              background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.15) 0%, rgba(231, 111, 81, 0.15) 100%)',
              borderColor: 'rgba(255, 181, 167, 0.3)'
            }}>
              
              {/* Avatar Image */}
              <div className="absolute inset-8 flex items-center justify-center">
                <img 
                  src="/assets/images/girl.png" 
                  alt="Deepa Shivale - Web Developer" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(255, 181, 167, 0.4))'
                  }}
                />
              </div>

              {/* Orbiting Tech Icons - Cleaner Design */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                {[
                  { icon: Brain, pos: 'top-8 left-1/2 -translate-x-1/2', color: '#FFB5A7' },
                  { icon: Rocket, pos: 'bottom-8 left-1/2 -translate-x-1/2', color: '#E76F51' },
                  { icon: Code, pos: 'top-1/2 right-8 -translate-y-1/2', color: '#F4A261' },
                  { icon: Database, pos: 'top-1/2 left-8 -translate-y-1/2', color: '#FFB5A7' }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`absolute ${item.pos} w-12 h-12 rounded-2xl backdrop-blur-xl border border-white/30 flex items-center justify-center shadow-lg`} 
                    style={{
                      background: `linear-gradient(135deg, ${item.color}30 0%, ${item.color}15 100%)`
                    }}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                ))}
              </div>

              {/* Status Badges */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-xl border border-white/20" style={{
                background: 'rgba(255, 181, 167, 0.25)'
              }}>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-white text-xs font-bold">AVAILABLE</span>
              </div>

              <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-xl border border-white/20" style={{
                background: 'rgba(231, 111, 81, 0.25)'
              }}>
                <Cpu className="w-4 h-4 text-white" />
                <span className="text-white text-xs font-bold">SOFTWARE DEVELOPER</span>
              </div>
            </div>

            {/* Achievement Badges - Cleaner Positioning */}
            <div className="absolute -top-8 -left-8 px-5 py-2 rounded-xl backdrop-blur-xl border border-white/20 shadow-xl" style={{
              background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.3) 0%, rgba(231, 111, 81, 0.3) 100%)'
            }}>
              <div className="text-white font-bold text-sm">🧠 WEB DEVELOPER</div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 px-5 py-2 rounded-xl backdrop-blur-xl border border-white/20 shadow-xl" style={{
              background: 'linear-gradient(135deg, rgba(244, 162, 97, 0.3) 0%, rgba(255, 181, 167, 0.3) 100%)'
            }}>
              <div className="text-white font-bold text-sm">🚀 INNOVATOR</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <a href="#about" className="flex flex-col items-center gap-2 animate-bounce cursor-pointer group">
          <div className="w-12 h-12 rounded-full backdrop-blur-xl border-2 border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-all duration-300" style={{
            background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.25) 0%, rgba(231, 111, 81, 0.25) 100%)'
          }}>
            <ChevronDown size={24} />
          </div>
          <span className="text-white text-xs font-medium">Scroll Down</span>
        </a>
      </div>

    </section>
  );
};