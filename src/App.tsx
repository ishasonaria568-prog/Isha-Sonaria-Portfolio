import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatementSection } from './components/StatementSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PillarsSection } from './components/PillarsSection';
import { FieldNotesSection } from './components/FieldNotesSection';
import { FactsSection } from './components/FactsSection';
import { ToolArsenalSection } from './components/ToolArsenalSection';
import { CertificationSection } from './components/CertificationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveTerminalModal } from './components/InteractiveTerminalModal';
import { GitHubDeployModal } from './components/GitHubDeployModal';

const SECTIONS = [
  { id: 'profile', tab: 'ask' },
  { id: 'projects', tab: 'projects' },
  { id: 'themen', tab: 'themen' },
  { id: 'facts', tab: 'facts' },
  { id: 'arsenal', tab: 'arsenal' },
  { id: 'credentials', tab: 'credentials' },
  { id: 'contact', tab: 'contact' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('ask');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isGitHubModalOpen, setIsGitHubModalOpen] = useState(false);

  // Smooth scroll handler with header offset
  const handleSelectTab = (targetId: string) => {
    let resolvedId = targetId;
    if (targetId === 'ask') resolvedId = 'profile';

    if (resolvedId === 'profile') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveTab('ask');
      return;
    }

    const element = document.getElementById(resolvedId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementPosition - headerOffset),
        behavior: 'smooth',
      });
      setActiveTab(targetId);
    }
  };

  // Scroll Spy to highlight active section in navbar as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sec = document.getElementById(SECTIONS[i].id);
        if (sec && scrollPos >= sec.offsetTop) {
          setActiveTab(SECTIONS[i].tab);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#090e17] text-[#0c1620] dark:text-[#f1f5f9] font-sans relative selection:bg-[#ff5a36]/20 selection:text-[#0c1620] dark:selection:text-white transition-colors">
        {/* Skip to Content Accessibility Link (matching pw.is) */}
        <a href="#profile" className="skip-link">
          Skip to main content
        </a>

        {/* Site Header */}
        <Header
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* Main Content Area */}
        <main id="main" className="relative z-10">
          {/* Hero & Interactive Ask Dossier */}
          <Hero
            onSelectTab={handleSelectTab}
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenTerminal={() => setIsTerminalOpen(true)}
          />

          {/* Statement & Verification Guarantee */}
          <StatementSection />

          {/* Projects Series */}
          <ProjectsSection />

          {/* Pillars & Commitments ("What Isha Stands For") */}
          <PillarsSection onSelectTab={handleSelectTab} />

          {/* Field Notes ("Digital Defense To-Go") */}
          <FieldNotesSection />

          {/* Facts & Entity Dossier */}
          <FactsSection />

          {/* Tool Arsenal */}
          <ToolArsenalSection />

          {/* Verified Credentials & Academic Honors */}
          <CertificationSection onOpenResume={() => setIsResumeOpen(true)} />

          {/* Contact & Inquiries */}
          <ContactSection />
        </main>

        {/* Site Footer */}
        <Footer onSelectTab={handleSelectTab} />

        {/* Modals */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />

        <InteractiveTerminalModal
          isOpen={isTerminalOpen}
          onClose={() => setIsTerminalOpen(false)}
        />

        <GitHubDeployModal
          isOpen={isGitHubModalOpen}
          onClose={() => setIsGitHubModalOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
