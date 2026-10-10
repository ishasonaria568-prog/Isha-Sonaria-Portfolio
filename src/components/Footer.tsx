import React from 'react';
import { personalProfile } from '../data/portfolioData';
import { Github, Linkedin, ExternalLink, ArrowUp, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08070F] border-t border-[#231F3D] py-12 text-[#A1A1AA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#231F3D]">
          {/* Brand & Focus */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#141126] border border-[#231F3D] p-1 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Isha Sonaria Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-base text-[#F8FAFC]">
                {personalProfile.name}
              </span>
            </div>
            <p className="text-xs text-[#A1A1AA]">
              {personalProfile.headline}
            </p>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            <a
              href={personalProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#121024] border border-[#231F3D] hover:border-[#8B5CF6]/50 text-[#A1A1AA] hover:text-[#F8FAFC] transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#121024] border border-[#231F3D] hover:border-[#8B5CF6]/50 text-[#A1A1AA] hover:text-[#0EA5E9] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalProfile.tryhackme}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg bg-[#121024] border border-[#231F3D] hover:border-[#8B5CF6]/50 text-xs font-mono font-bold text-[#EF4444] transition-colors"
              aria-label="TryHackMe Profile"
            >
              THM
            </a>
          </div>
        </div>

        {/* Footer Nav & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#71717A]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#F8FAFC] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#F8FAFC] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="hover:text-[#F8FAFC] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate('certifications')}
              className="hover:text-[#F8FAFC] transition-colors cursor-pointer"
            >
              Certifications
            </button>
            <button
              onClick={() => onNavigate('tryhackme')}
              className="hover:text-[#F8FAFC] transition-colors cursor-pointer"
            >
              TryHackMe
            </button>
            <button
              onClick={() => onNavigate('skills')}
              className="hover:text-[#F8FAFC] transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => onNavigate('education')}
              className="hover:text-[#F8FAFC] transition-colors cursor-pointer"
            >
              Education
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#F8FAFC] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span>© 2026 Isha Sonaria. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md hover:bg-[#121024] hover:text-[#F8FAFC] transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
