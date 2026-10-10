import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { CertificationSection } from './components/CertificationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

const SECTIONS = [
  'home',
  'about',
  'skills',
  'experience',
  'projects',
  'achievements',
  'certifications',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Smooth scroll handler with header offset
  const handleNavigate = (targetId: string) => {
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 72;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementPosition - headerOffset),
        behavior: 'smooth',
      });
      setActiveSection(targetId);
    }
  };

  // Scroll spy to highlight active section in navbar as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sec = document.getElementById(SECTIONS[i]);
        if (sec && scrollPos >= sec.offsetTop) {
          setActiveSection(SECTIONS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans relative selection:bg-[#2563EB]/20 selection:text-[#0F172A]">
      {/* Skip to Content Accessibility Link */}
      <a href="#about" className="skip-link">
        Skip to main content
      </a>

      {/* Sticky White Navigation Bar */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main" className="relative z-10">
        {/* 1. Hero Section: Two-Column Identity, White Terminal Dashboard, 4 Stats */}
        <Hero
          onNavigate={handleNavigate}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 2. About Me: Professional Intro, 4 Information Cards */}
        <AboutSection
          onNavigate={handleNavigate}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* 3. Technical Skills: 4 Categorized Cards with Clean Tags */}
        <SkillsSection />

        {/* 4. Experience and Training: VRSecurity SOC Trainee + TryHackMe Practitioner */}
        <ExperienceSection />

        {/* 5. Featured Projects: PhishGuard ML, Email Forensics, SubScope, PDF Fortress */}
        <ProjectsSection />

        {/* 6. Achievements: Top 2% THM, 100+ Labs, 20+ Badges, Leagues, BCA Rank 1 */}
        <AchievementsSection />

        {/* 7. Education & Certifications: BCA Degree + CSFP & CORE Credentials */}
        <CertificationSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 8. Contact Section: Let's Connect, Mailto Link, Profiles, Dispatch Form */}
        <ContactSection />
      </main>

      {/* 9. Minimal Clean Light Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Resume Dossier & PDF Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
