import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  Icon: LucideIcon;
  href?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href = '#' }) => {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 group border border-white/5"
    >
      <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
    </a>
  );
};