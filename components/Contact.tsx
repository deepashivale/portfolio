import React, { useState } from 'react';
import { Mail, MapPin, Send, Linkedin, Github, Instagram, Star, MessageSquare, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      // Import Supabase function dynamically
      const { submitContactForm } = await import('../src/lib/supabase');
      
      const result = await submitContactForm(formData);

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or email me directly at abhijitden01@gmail.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative py-32 px-4 w-full overflow-hidden" id="contact">
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
            <span className="text-white font-medium">Let's Connect</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text mb-6" style={{
            backgroundImage: 'linear-gradient(135deg, #FFB5A7 0%, #E76F51 50%, #F4A261 100%)'
          }}>
            Get In Touch
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Ready to build your next {' '}
            <span className="text-white font-bold">Web Solution</span>?{' '}
            Let's discuss your project
          </p>
          
          <div className="w-32 h-1 mx-auto mt-6 rounded-full" style={{
            background: 'linear-gradient(90deg, #FFB5A7 0%, #E76F51 50%, #F4A261 100%)'
          }}></div>
        </div>



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl" style={{
              background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
            }}>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Open to discussing full-stack web development projects and modern web solutions. Let’s create something impactful together.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                <ContactCard
                  icon={Mail}
                  title="Email"
                  content="patilaniket0302@gmail.com"
                  color="#FFB5A7"
                  href="mailto:patilaniket0302@gmail.com"
                />
                <ContactCard
                  icon={Phone}
                  title="Phone"
                  content="+91 72490 69206"
                  color="#E76F51"
                  href="tel:+917249069206"
                />
                <ContactCard
                  icon={MapPin}
                  title="Location"
                  content="Pune, Also Available for Remote Work"
                  color="#F4A261"
                />
              </div>
            </div>
          </div>
        

          

              

              
  
          
          <div className="p-8 rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl" style={{
            background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
            }}>
            <div className="flex items-center gap-1 mb-6">
              <h4 className="text-white font-bold text-xl mb-6">Connect With Me</h4></div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <SocialLink Icon={Linkedin} href="https://www.linkedin.com/in/aniket-suryawanshi0302/" label="LinkedIn" />
                <SocialLink Icon={Instagram} href="https://www.instagram.com/ANIKET_PATIL2409/" label="Instagram" />
              </div>
            

              
              {/* GitHub Profiles */}
              <div className="pt-4 border-t border-white/10">
                <h5 className="text-white font-semibold text-sm mb-4">GitHub Profiles</h5>
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href="https://github.com/Aniketpatilsuryawanshi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
                    }}
                  >
                    <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    <div className="flex-1">
                      <span className="text-white text-sm font-medium">@aniketsuryawanshi</span>
                      <p className="text-gray-400 text-xs">Primary Profile</p>
                    </div>
                  </a>

                </div>
              </div>
          </div>
         


            

              
      </div>
       </div>  
    </section>
    
  );
};

            
                  

              

              


         
            
          


const ContactCard: React.FC<{
  icon: React.ElementType;
  title: string;
  content: string;
  color: string;
  href?: string;
}> = ({ icon: Icon, title, content, color, href }) => {
  const CardContent = (
    <>
      <div 
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${color}40 0%, ${color}20 100%)`
        }}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h4 className="text-gray-300 text-sm font-medium">{title}</h4>
        <p className="text-white font-semibold">{content}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a 
        href={href}
        className="flex items-center gap-4 p-4 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group hover:scale-105"
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group">
      {CardContent}
    </div>
  );
};

const SocialLink: React.FC<{
  Icon: React.ElementType;
  href: string;
  label: string;
}> = ({ Icon, href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 p-4 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group text-center"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 181, 167, 0.1) 0%, rgba(231, 111, 81, 0.1) 100%)'
      }}
    >
      <Icon className="w-6 h-6 text-white mx-auto mb-2 group-hover:scale-110 transition-transform" />
      <span className="text-white text-sm font-medium">{label}</span>
    </a>
  );
};

const InputField: React.FC<{
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}> = ({ label, name, type, placeholder, value, onChange, required }) => {
  return (
    <div>
      <label className="block text-white font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 rounded-xl backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
        style={{
          background: 'rgba(255, 181, 167, 0.05)'
        }}
      />
    </div>
  );
};
