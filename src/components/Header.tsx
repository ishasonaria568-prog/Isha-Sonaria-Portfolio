import React, { useState } from 'react';
import { CyberMonogram } from './CyberMonogram';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Sun, Moon, ArrowUpRight, ShieldCheck, Terminal, FileText, Download } from 'lucide-react';

export type TabId = 'ask' | 'projects' | 'themen' | 'facts' | 'arsenal' | 'credentials' | 'contact';

interface HeaderProps {
  activeTab: string;
  onSelectTab: (sectionId: string) => void;
  onOpenResume?: () => void;
  onOpenTerminal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenResume,
  onOpenTerminal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mode, toggleMode } = useTheme();

  const navLinks: { label: string; id: string }[] = [
    { label: 'Ask Isha', id: 'ask' },
    { label: 'Projects', id: 'projects' },
    { label: 'Themen', id: 'themen' },
    { label: 'Facts & Entity', id: 'facts' },
    { label: 'Tool Arsenal', id: 'arsenal' },
    { label: 'Credentials', id: 'credentials' },
  ];

  const handleNavClick = (id: string) => {
    onSelectTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#090e17]/95 backdrop-blur-md border-b border-[#dfe3e8] dark:border-[#1e293b] transition-colors">
      {/* Identity Bar (matching pw.is top verification bar) */}
      <div className="identity-bar py-1 px-4 sm:px-6 border-b border-[#dfe3e8] dark:border-[#1e293b] bg-[#f4f5f7] dark:bg-[#0f172a] text-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-[#3b4754] dark:text-[#94a3b8]">
            <span className="identity-dot shrink-0" aria-hidden="true" />
            <span className="font-medium text-[11px] sm:text-xs">
              The official portfolio of Isha Sonaria
            </span>
            <span className="hidden md:inline text-[#cbd5e1] dark:text-[#334155]">•</span>
            <span className="hidden md:inline text-[11px] text-[#6b7785] dark:text-[#94a3b8]">
              Verified via <span className="font-mono text-[#12355b] dark:text-[#38bdf8]">Hackviser CORE</span> &amp; <span className="font-mono text-[#12355b] dark:text-[#38bdf8]">TryHackMe Top 2%</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#10b981]/10 text-[#059669] dark:text-[#34d399] font-mono text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              AVAILABLE FOR SOC ROLES
            </span>

            {/* Quick CLI Modal Trigger */}
            {onOpenTerminal && (
              <button
                onClick={onOpenTerminal}
                className="hidden lg:inline-flex items-center gap-1 text-[11px] text-[#6b7785] dark:text-[#94a3b8] hover:text-[#0c1620] dark:hover:text-white transition-colors cursor-pointer"
                title="Interactive Diagnostic CLI"
              >
                <Terminal className="w-3 h-3" />
                <span>CLI Terminal</span>
              </button>
            )}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleMode}
              className="p-1 rounded-md text-[#6b7785] dark:text-[#94a3b8] hover:text-[#0c1620] dark:hover:text-white hover:bg-[#eceef1] dark:hover:bg-[#1e293b] transition-colors cursor-pointer flex items-center gap-1"
              aria-label={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
            >
              {mode === 'light' ? (
                <>
                  <Moon className="w-3.5 h-3.5" />
                  <span className="text-[11px] hidden sm:inline">Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px] hidden sm:inline">Light</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Site Header (matching pw.is site-header) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-4">
        {/* Brand Lockup */}
        <button
          onClick={() => handleNavClick('profile')}
          className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
          aria-label="Isha Sonaria, Homepage"
        >
          <CyberMonogram size="md" withRing />
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-[#0c1620] dark:text-white group-hover:text-[#12355b] dark:group-hover:text-[#38bdf8] transition-colors leading-tight">
              Isha Sonaria
            </span>
            <span className="text-[11px] text-[#6b7785] dark:text-[#94a3b8] font-sans tracking-tight leading-tight mt-0.5">
              Cybersecurity Analyst &amp; SOC Operator
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#12355b] text-white dark:bg-[#0284c7] shadow-sm'
                    : 'text-[#3b4754] dark:text-[#94a3b8] hover:text-[#0c1620] dark:hover:text-white hover:bg-[#f4f5f7] dark:hover:bg-[#1e293b]'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Source Zip Download */}
          <a
            href="/portfolio.zip"
            download="cybersecurity-portfolio-isha-sonaria.zip"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-[#12355b] dark:text-[#38bdf8] bg-[#12355b]/10 dark:bg-[#0284c7]/20 hover:bg-[#12355b] hover:text-white dark:hover:bg-[#0284c7] transition-all border border-[#12355b]/20 dark:border-[#0284c7]/30"
            title="Download full project source code as ZIP"
          >
            <Download className="w-3.5 h-3.5" />
            <span>.ZIP</span>
          </a>

          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-[#dfe3e8] dark:border-[#334155] text-[#3b4754] dark:text-[#94a3b8] hover:text-[#0c1620] dark:hover:text-white hover:bg-[#f4f5f7] dark:hover:bg-[#1e293b] transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Dossier / CV</span>
            </button>
          )}

          {/* Contact Button (matching pw.is btn-brand) */}
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#12355b] hover:bg-[#0b2644] text-white dark:bg-[#0284c7] dark:hover:bg-[#0369a1] shadow-sm transition-all cursor-pointer"
          >
            <span>Inquire</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Toggle Button (matching pw.is menu-open) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#0c1620] dark:text-white hover:bg-[#f4f5f7] dark:hover:bg-[#1e293b] transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (matching pw.is menu-sheet) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#dfe3e8] dark:border-[#1e293b] bg-white dark:bg-[#090e17] px-4 py-4 space-y-2 shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-[#dfe3e8] dark:border-[#1e293b]">
            <span className="text-xs font-mono font-medium text-[#6b7785] dark:text-[#94a3b8]">
              NAVIGATION MENU
            </span>
            <span className="text-[11px] font-mono text-[#10b981]">● ACTIVE</span>
          </div>

          <div className="grid grid-cols-1 gap-1 pt-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-[#0c1620] dark:text-white hover:bg-[#f4f5f7] dark:hover:bg-[#1e293b] transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#6b7785]" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-[#ff5a36] hover:bg-[#ff5a36]/10 transition-colors flex items-center justify-between"
            >
              <span>Contact &amp; Inquiries</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="pt-2 border-t border-[#dfe3e8] dark:border-[#1e293b] space-y-2">
            <a
              href="/portfolio.zip"
              download="cybersecurity-portfolio-isha-sonaria.zip"
              className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-[#12355b] text-white hover:bg-[#0b2644] dark:bg-[#0284c7] text-center flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Project .ZIP Archive</span>
            </a>

            {onOpenResume && (
              <button
                onClick={() => {
                  onOpenResume();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2 px-3 rounded-lg text-xs font-medium border border-[#dfe3e8] dark:border-[#334155] text-center text-[#0c1620] dark:text-white hover:bg-[#f4f5f7] dark:hover:bg-[#1e293b] flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Security CV &amp; Dossier</span>
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
