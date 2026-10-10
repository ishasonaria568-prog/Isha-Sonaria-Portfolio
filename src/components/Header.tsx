import React, { useState } from 'react';
import { Menu, X, Download, ShieldCheck, FileText } from 'lucide-react';

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
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
            aria-label="Isha Sonaria — Home"
          >
            <div className="w-10 h-10 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] group-hover:border-[#2563EB]/40 p-1 flex items-center justify-center transition-all overflow-hidden shadow-xs">
              <img
                src="/logo.png"
                alt="Isha Sonaria Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div>
              <span className="block font-display font-bold text-base sm:text-lg text-[#0F172A] tracking-tight group-hover:text-[#2563EB] transition-colors">
                Isha Sonaria
              </span>
              <span className="block text-[11px] text-[#64748B] tracking-wider uppercase font-semibold">
                SOC &amp; Defensive Security
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-[#64748B]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? 'text-[#2563EB] bg-[#EFF6FF] font-semibold'
                      : 'hover:text-[#0F172A] hover:bg-[#F1F5F9]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-[#0F172A] bg-[#F1F5F9] border border-[#E2E8F0] hover:bg-[#E2E8F0] transition-all cursor-pointer"
                title="View Resume Dossier"
              >
                <FileText className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>View Dossier</span>
              </button>
            )}

            <a
              href="/Isha_Sonaria_Resume.pdf"
              download="Isha_Sonaria_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] border border-[#E2E8F0] cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2E8F0] bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#2563EB] bg-[#EFF6FF] font-semibold'
                      : 'text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex flex-col gap-2.5">
            <a
              href="/Isha_Sonaria_Resume.pdf"
              download="Isha_Sonaria_Resume.pdf"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] shadow-xs cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            {onOpenResume && (
              <button
                onClick={() => {
                  onOpenResume();
                  setMobileMenuOpen(false);
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-[#0F172A] bg-[#F1F5F9] border border-[#E2E8F0] hover:bg-[#E2E8F0] cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#2563EB]" />
                <span>View Online Resume Dossier</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
