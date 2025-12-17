import React from 'react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#', isActive: true },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="glass-nav rounded-full px-2 pl-6 pr-2 py-2 flex items-center justify-between w-full max-w-5xl shadow-lg shadow-purple-900/20 bg-[#1a0b2e]/60 border border-white/10">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white font-bold italic bg-gradient-to-br from-gray-800 to-black shadow-inner">
            <span className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">S</span>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative text-sm font-medium transition-colors ${
                item.isActive ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              {item.label}
              {item.isActive && (
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                   <div className="w-8 h-1 bg-fuchsia-500 rounded-t-full shadow-[0_0_10px_#d946ef]"></div>
                </div>
              )}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a href="#contact" className="hidden sm:block bg-gradient-to-r from-[#c026d3] to-[#7c3aed] text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105 transition-all duration-200 border border-white/20">
          Contact Us
        </a>
      </div>
    </nav>
  );
};