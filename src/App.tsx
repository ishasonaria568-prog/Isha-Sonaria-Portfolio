import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CertificationSection } from './components/CertificationSection';
import { TryHackMeSection } from './components/TryHackMeSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

const SECTIONS = [
  'home',
  'about',
  'experience',
  'projects',
  'certifications',
  'tryhackme',
  'skills',
  'education',
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
      const headerOffset = 76;
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
      const scrollPos = window.scrollY + 140;
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
    <div className="min-h-screen bg-[#0B0A14] text-[#F8FAFC] font-sans relative selection:bg-[#8B5CF6]/30 selection:text-[#F8FAFC]">
      {/* Skip to Content Accessibility Link */}
      <a href="#about" className="skip-link">
        Skip to main content
      </a>

      {/* Sticky Top Navigation Bar */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main id="main" className="relative z-10">
        {/* Hero Section: Two-Column Identity + Professional Summary */}
        <Hero
          onNavigate={handleNavigate}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Dedicated About Me Section */}
        <AboutSection onNavigate={handleNavigate} />

        {/* Practical Security Experience / Training */}
        <ExperienceSection />

        {/* Featured Projects Showcase with Live & Code Links */}
        <ProjectsSection />

        {/* Verified Certifications Section (Hackviser & VR Security) */}
        <CertificationSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* TryHackMe Achievements & Lab Record */}
        <TryHackMeSection />

        {/* Categorized Skills & Security Toolkit */}
        <SkillsSection />

        {/* Education Section (BCA Degree & Coursework) */}
        <EducationSection />

        {/* Contact Section for Recruiters & Security Teams */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Resume Dossier & PDF Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
