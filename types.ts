import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface SocialLink {
  icon: React.ComponentType<any>;
  href: string;
  label: string;
}