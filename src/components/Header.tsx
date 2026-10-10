import React, { useState } from 'react';
import { Menu, X, FileText, ExternalLink } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'tryhackme', label: 'TryHackMe' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B0A14]/90 backdrop-blur-md border-b border-[#231F3D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Brand Wordmark & Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
            aria-label="Isha Sonaria — Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#17142E] border border-[#231F3D] group-hover:border-[#8B5CF6]/60 p-1 flex items-center justify-center transition-all overflow-hidden shadow-sm">
              <img
                src="/logo.png"
                alt="Isha Sonaria Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to monogram if image fails
                  const target = e.currentTarget;
                  target.style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="block font-display font-bold text-base sm:text-lg text-[#F8FAFC] tracking-tight group-hover:text-[#8B5CF6] transition-colors">
                Isha Sonaria
              </span>
              <span className="block text-[11px] text-[#A1A1AA] tracking-wider uppercase font-medium">
                SOC &amp; Blue Team
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-[#A1A1AA]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3 py-1.5 rounded-lg transition-all text-xs xl:text-sm whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-[#F8FAFC] bg-[#1F1B3C] border border-[#8B5CF6]/40 font-semibold'
                      : 'hover:text-[#F8FAFC] hover:bg-[#15122B]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Header Action */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-[#F8FAFC] bg-[#1F1B3C] border border-[#231F3D] hover:border-[#8B5CF6]/60 hover:bg-[#28224D] transition-all cursor-pointer shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>Resume</span>
              </button>
            )}
            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] transition-all cursor-pointer shadow-sm"
            >
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#A1A1AA] hover:text-[#F8FAFC] hover:bg-[#17142E] border border-[#231F3D] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Collapsible Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#231F3D] bg-[#0E0C1A] px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-[#F8FAFC] bg-[#1F1B3C] border border-[#8B5CF6]/50 font-semibold'
                      : 'text-[#A1A1AA] hover:text-[#F8FAFC] hover:bg-[#17142E]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#231F3D] flex items-center gap-2">
            {onOpenResume && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-[#F8FAFC] bg-[#17142E] border border-[#231F3D]"
              >
                <FileText className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>Resume</span>
              </button>
            )}
            <button
              onClick={() => handleLinkClick('contact')}
              className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#8B5CF6]"
            >
              <span>Contact</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
