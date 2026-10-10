import React from 'react';
import { personalProfile } from '../data/portfolioData';
import { Github, Linkedin, ExternalLink, ArrowUp, Shield } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#E2E8F0] py-12 text-[#64748B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[#E2E8F0]">
          {/* Brand Name & Headline */}
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] p-1 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="Isha Sonaria Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-base text-[#0F172A]">
                {personalProfile.name}
              </span>
            </div>
            <p className="text-xs text-[#64748B]">
              {personalProfile.headline}
            </p>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            <a
              href={personalProfile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#0A66C2] text-[#64748B] transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalProfile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#0F172A] text-[#64748B] transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalProfile.tryhackme}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] hover:border-[#EF4444] text-xs font-mono font-bold text-[#DC2626] transition-all"
              aria-label="TryHackMe Profile"
            >
              THM Top 2%
            </a>
          </div>
        </div>

        {/* Footer Navigation & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#64748B]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <button
              onClick={() => onNavigate('home')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => onNavigate('skills')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => onNavigate('experience')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => onNavigate('projects')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => onNavigate('achievements')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Achievements
            </button>
            <button
              onClick={() => onNavigate('certifications')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Certifications
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-[#0F172A] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          <div className="flex items-center gap-4">
            <span>© {currentYear} Isha Sonaria. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md hover:bg-[#F1F5F9] text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
