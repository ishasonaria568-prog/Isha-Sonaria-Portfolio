import React from 'react';
import { personalProfile, tryHackMeData } from '../data/portfolioData';
import {
  Shield,
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  Terminal,
  Activity,
  CheckCircle,
  FileText
} from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <section id="home" className="relative pt-8 pb-14 sm:pt-12 sm:pb-20 overflow-hidden border-b border-[#231F3D]">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#22D3EE]/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT HALF — Personal Identity */}
          <div className="lg:col-span-6 space-y-6">
            {/* Logo and Name Lockup */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#141126] border border-[#2B254E] p-2 flex items-center justify-center shadow-lg shadow-black/40 shrink-0">
                <img
                  src="/logo.png"
                  alt="Isha Sonaria Emblem"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#22D3EE] tracking-wider uppercase font-mono">
                  <Shield className="w-3.5 h-3.5" />
                  Defensive Security &amp; SOC
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
                  {personalProfile.name}
                </h1>
              </div>
            </div>

            {/* Professional Headline */}
            <div>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#C4B5FD] leading-snug">
                {personalProfile.headline}
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-[#A1A1AA] leading-relaxed max-w-xl">
                {personalProfile.tagline}
              </p>
            </div>

            {/* Call-to-action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-white bg-[#8B5CF6] hover:bg-[#7C3AED] transition-all cursor-pointer shadow-md shadow-[#8B5CF6]/20"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm text-[#F8FAFC] bg-[#161329] border border-[#2B254E] hover:border-[#8B5CF6]/50 hover:bg-[#1D1936] transition-all cursor-pointer"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 text-[#A1A1AA]" />
              </button>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-[#A1A1AA] hover:text-[#F8FAFC] transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#8B5CF6]" />
                  <span>View Resume</span>
                </button>
              )}
            </div>

            {/* Verified Profile Links */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-[#71717A] font-medium">Profiles:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-[#A1A1AA] hover:text-[#F8FAFC] bg-[#141126] border border-[#231F3D] hover:border-[#8B5CF6]/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-[#A1A1AA] hover:text-[#F8FAFC] bg-[#141126] border border-[#231F3D] hover:border-[#8B5CF6]/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0EA5E9]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personalProfile.tryhackme}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-[#A1A1AA] hover:text-[#F8FAFC] bg-[#141126] border border-[#231F3D] hover:border-[#8B5CF6]/40 transition-all"
                  aria-label="TryHackMe Profile"
                >
                  <span className="font-mono font-bold text-[#EF4444] text-[11px]">THM</span>
                  <span>TryHackMe</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT HALF — Professional Summary Panel */}
          <div className="lg:col-span-6">
            <div className="sec-card p-6 sm:p-7 relative overflow-hidden bg-gradient-to-b from-[#141126] to-[#100D20] border border-[#2B254E]">
              {/* Header of the panel */}
              <div className="flex items-center justify-between pb-4 border-b border-[#231F3D]">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6]" />
                  <span className="text-xs font-semibold text-[#F8FAFC] tracking-wide uppercase font-mono">
                    Professional Summary
                  </span>
                </div>
                <span className="text-xs font-mono text-[#22D3EE] bg-[#22D3EE]/10 px-2 py-0.5 rounded-md border border-[#22D3EE]/20">
                  {personalProfile.status}
                </span>
              </div>

              {/* Exact Verbatim Professional Summary */}
              <div className="pt-5 space-y-4">
                <p className="text-sm sm:text-base text-[#F8FAFC] leading-relaxed">
                  {personalProfile.summary}
                </p>

                {/* Practical Focus Checklist */}
                <div className="pt-3 border-t border-[#231F3D] grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#A1A1AA]">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                    <span>SOC L1 Alert Triage &amp; Monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                    <span>Email MIME &amp; Route Forensics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#22D3EE] shrink-0" />
                    <span>ML Phishing URL Classification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                    <span>Python Security Tooling &amp; Automation</span>
                  </div>
                </div>

                {/* Location & Academic Note */}
                <div className="pt-2 flex items-center justify-between text-xs text-[#71717A] font-mono">
                  <span>Based in {personalProfile.location}</span>
                  <span>{personalProfile.educationSummary}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Verified Metrics Banner (adjacent to hero) */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-[#231F3D]/80">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#121024] border border-[#231F3D]">
              <span className="block text-xs font-mono text-[#A1A1AA] uppercase">TryHackMe Labs</span>
              <span className="block mt-1 text-2xl font-display font-bold text-[#F8FAFC] tabular-nums">
                147
              </span>
              <span className="block text-[11px] text-[#8B5CF6] mt-0.5 font-medium">Completed security rooms</span>
            </div>

            <div className="p-4 rounded-xl bg-[#121024] border border-[#231F3D]">
              <span className="block text-xs font-mono text-[#A1A1AA] uppercase">Global Standing</span>
              <span className="block mt-1 text-2xl font-display font-bold text-[#22D3EE] tabular-nums">
                Top 2%
              </span>
              <span className="block text-[11px] text-[#A1A1AA] mt-0.5 font-medium">TryHackMe worldwide rank</span>
            </div>

            <div className="p-4 rounded-xl bg-[#121024] border border-[#231F3D]">
              <span className="block text-xs font-mono text-[#A1A1AA] uppercase">Learning Streak</span>
              <span className="block mt-1 text-2xl font-display font-bold text-[#F8FAFC] tabular-nums">
                105 Days
              </span>
              <span className="block text-[11px] text-[#8B5CF6] mt-0.5 font-medium">Unbroken daily practice</span>
            </div>

            <div className="p-4 rounded-xl bg-[#121024] border border-[#231F3D]">
              <span className="block text-xs font-mono text-[#A1A1AA] uppercase">Academic Merit</span>
              <span className="block mt-1 text-2xl font-display font-bold text-[#F8FAFC] tabular-nums">
                8.30 CGPA
              </span>
              <span className="block text-[11px] text-[#A1A1AA] mt-0.5 font-medium">1st Ranker in Semester 1 (BCA)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
