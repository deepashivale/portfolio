import React from 'react';
import { Sparkles, Brain, Code, Zap, Award, TrendingUp, Users, Cpu, Database, Globe, Rocket, Star, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="relative w-full py-32 px-4 overflow-hidden" id="about">
      {/* Dynamic Background with Animated Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-[600px] h-[600px] rounded-full opacity-20 animate-pulse blur-3xl" style={{
          background: 'radial-gradient(circle, #FFB5A7 0%, #E76F51 50%, transparent 70%)'
        }}></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full opacity-15 animate-pulse blur-3xl" style={{
          background: 'radial-gradient(circle, #F4A261 0%, #FFB5A7 50%, transparent 70%)',
          animationDelay: '2s'
        }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-10 animate-pulse blur-3xl" style={{
          background: 'radial-gradient(ellipse, #E76F51 0%, #F4A261 50%, transparent 70%)',
          animationDelay: '4s'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero Title Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full backdrop-blur-xl border border-white/10" style={{
            background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
          }}>
            <Star className="w-5 h-5 text-white animate-spin" style={{animationDuration: '3s'}} />
            <span className="text-white font-medium">Meet the Developer</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text mb-6" style={{
            backgroundImage: 'linear-gradient(135deg, #FFB5A7 0%, #E76F51 50%, #F4A261 100%)',
            textShadow: '0 0 40px rgba(255, 181, 167, 0.3)'
          }}>
            About Me
          </h2>
          <div className="w-32 h-1 mx-auto rounded-full animate-pulse" style={{
            background: 'linear-gradient(90deg, #FFB5A7 0%, #E76F51 50%, #F4A261 100%)'
          }}></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
          
          {/* Left Column: Avatar & Role */}
          <div className="xl:col-span-1 space-y-6">
            {/* 3D Avatar Card */}
            <div className="relative group">
              {/* Floating background elements */}
              <div className="absolute -inset-4 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" style={{
                background: 'conic-gradient(from 0deg, #FFB5A7, #E76F51, #F4A261, #FFB5A7)',
                filter: 'blur(20px)'
              }}></div>
              
              <div className="relative p-8 rounded-3xl backdrop-blur-2xl border border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500" style={{
                background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
              }}>
                <div className="relative w-full aspect-square max-w-[300px] mx-auto">
                  <img 
                    src="/assets/images/girl.png" 
                    alt="AI Engineer" 
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                  
                  {/* Orbiting Tech Icons */}
                  <div className="absolute inset-0 animate-spin" style={{animationDuration: '20s'}}>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full backdrop-blur-xl border border-white/20 flex items-center justify-center" style={{
                      background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.3) 0%, rgba(231, 111, 81, 0.3) 100%)'
                    }}>
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-xl border border-white/20 flex items-center justify-center" style={{
                      background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.3) 0%, rgba(231, 111, 81, 0.3) 100%)'
                    }}>
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full backdrop-blur-xl border border-white/20 flex items-center justify-center" style={{
                      background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.3) 0%, rgba(231, 111, 81, 0.3) 100%)'
                    }}>
                      <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-10 h-10 rounded-full backdrop-blur-xl border border-white/20 flex items-center justify-center" style={{
                      background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.3) 0%, rgba(231, 111, 81, 0.3) 100%)'
                    }}>
                      <Database className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Role Highlight */}
            <div className="p-6 rounded-3xl backdrop-blur-2xl border border-white/20 shadow-2xl" style={{
              background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.15) 0%, rgba(231, 111, 81, 0.15) 100%)'
            }}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, #FFB5A7 0%, #E76F51 100%)'
                }}>
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Web Developer</h3>
                <p className="text-gray-300 text-sm mb-4">Full-Stack & system Architect</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-3xl font-bold text-white">150+</div>
                    <div className="text-xs text-gray-300">Websites Built</div>
                  </div>
                  <div className="p-3 rounded-xl backdrop-blur-sm border border-white/10">
                    <div className="text-3xl font-bold text-white">90%</div>
                    <div className="text-xs text-gray-300">Efficiency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Columns: Content */}
          <div className="xl:col-span-2 space-y-6">
            {/* Main Story Card */}
            <div className="p-8 rounded-3xl backdrop-blur-2xl border border-white/20 shadow-2xl" style={{
              background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
            }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, #FFB5A7 0%, #E76F51 100%)'
                }}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">The Story</h3>
              </div>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  I'm an <span className="text-white font-bold text-xl bg-gradient-to-r from-[#FFB5A7] to-[#E76F51] bg-clip-text text-transparent">Full-Stack Web Developer</span> who builds modern, scalable web applications focused on performance, usability, and clean architecture.
                </p>
                <p>
                  Using technologies like <span className="text-white font-semibold">HTML, CSS, JavaScript, React, Node.js, Wordpress and modern frameworks,</span> I create responsive, user-friendly solutions that help businesses establish a strong digital presence and streamline their workflows.
                </p>
                <p>
                  My flagship achievement: developing a <span className="text-white font-semibold">Full-stack web application</span> featuring dynamic UI components, secure backend integration, and optimized performance.<span className="text-white font-bold"> </span>
                </p>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl backdrop-blur-2xl border border-white/20 shadow-2xl group hover:scale-105 transition-transform duration-300" style={{
                background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
              }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{
                    background: 'linear-gradient(135deg, #FFB5A7 0%, #E76F51 100%)'
                  }}>
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">80%</div>
                    <div className="text-sm text-gray-300">Growth at Affinity</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">Created modern web solutions that helped drive user engagement and platform growth.</p>
              </div>

              <div className="p-6 rounded-3xl backdrop-blur-2xl border border-white/20 shadow-2xl group hover:scale-105 transition-transform duration-300" style={{
                background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
              }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{
                    background: 'linear-gradient(135deg, #F4A261 0%, #FFB5A7 100%)'
                  }}>
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">150+</div>
                    <div className="text-sm text-gray-300">Web Applications</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">Full-stack web applications with modern front-end frameworks and robust backend integration.</p>
              </div>
            </div>

            {/* Tech Stack Showcase */}
            <div className="p-8 rounded-3xl backdrop-blur-2xl border border-white/20 shadow-2xl" style={{
              background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
            }}>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="w-6 h-6" />
                Tech Arsenal
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'HTML5', icon: '🌐' },
                  { name: 'CSS3', icon: '🎨' },
                  { name: 'JavaScript', icon: '📜' },
                  { name: 'React.js', icon: '⚛️' },
                  { name: 'TypeScript', icon: '⚡' },
                  { name: 'Restful APIs', icon: '🔗' },
                  
                  { name: 'Node.js', icon: '🟢' },
                  { name: 'WordPress', icon: '📝' }
                ].map((tech, index) => (
                  <div key={tech.name} className="p-4 rounded-2xl backdrop-blur-sm border border-white/10 text-center hover:scale-105 transition-transform duration-200 group" style={{
                    background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
                  }}>
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <div className="text-white text-sm font-medium">{tech.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="p-8 rounded-3xl backdrop-blur-2xl border border-white/20 shadow-2xl" style={{
              background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.15) 0%, rgba(231, 111, 81, 0.15) 100%)'
            }}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to Innovate</h3>
                  <p className="text-gray-300">Seeking Full-Stack Web Developer Roles</p>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/20 hover:scale-105 transition-transform duration-200 cursor-pointer" style={{
                  background: 'linear-gradient(135deg, #FFB5A7 0%, #E76F51 100%)'
                }}>
                  <span className="text-white font-semibold"><a 
              href="#contact"> Let's Connect</a></span>
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};