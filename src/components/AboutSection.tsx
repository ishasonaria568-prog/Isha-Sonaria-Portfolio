import React from 'react';
import { personalProfile, aboutCards } from '../data/portfolioData';
import {
  MapPin,
  GraduationCap,
  Shield,
  Target,
  ArrowRight,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface AboutSectionProps {
  onNavigate?: (sectionId: string) => void;
  onOpenResume?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate, onOpenResume }) => {
  const getCardIcon = (type: string) => {
    switch (type) {
      case 'location':
        return <MapPin className="w-5 h-5 text-[#2563EB]" />;
      case 'education':
        return <GraduationCap className="w-5 h-5 text-[#2563EB]" />;
      case 'focus':
        return <Shield className="w-5 h-5 text-[#059669]" />;
      case 'goal':
        return <Target className="w-5 h-5 text-[#059669]" />;
      default:
        return <Shield className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider font-mono">
            Candidate Profile
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-[#0F172A] tracking-tight">
            About Me
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            I am an aspiring cybersecurity analyst focused on defensive security, SOC Tier-1 operations, and practical vulnerability assessment. Rather than relying solely on theoretical study, I develop technical capabilities through continuous hands-on labs, CTF challenges, and engineering real-world defensive tools.
          </p>
          <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
            My training encompasses real-time event monitoring with Wazuh SIEM, deep packet inspection in Wireshark, active reconnaissance with Nmap and Nuclei, and custom software development in Python and Go. I aim to contribute immediate investigative value to a Security Operations Center or Blue Team.
          </p>
        </div>

        {/* 4 Clean Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {aboutCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center mb-4 shadow-xs">
                  {getCardIcon(card.type)}
                </div>
                <span className="text-xs font-mono font-semibold text-[#64748B] uppercase tracking-wider block">
                  {card.title}
                </span>
                <h3 className="mt-1 text-base font-display font-bold text-[#0F172A]">
                  {card.value}
                </h3>
              </div>
              <p className="mt-4 pt-3 border-t border-[#E2E8F0] text-xs text-[#64748B] leading-relaxed">
                {card.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Investigative Philosophy Box */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#F1F5F9] border border-[#E2E8F0] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <h4 className="text-base font-display font-bold text-[#0F172A]">
              Defensive Methodology: Systematic Investigation Over Assumptions
            </h4>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Every alert investigation must follow reproducible steps: observe baseline traffic, extract uncorrupted telemetry, correlate with host and network artifacts, and document findings with clear remediation recommendations.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onNavigate && (
              <button
                onClick={() => onNavigate('experience')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all cursor-pointer shadow-xs"
              >
                <span>View Training History</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] transition-all cursor-pointer shadow-xs"
              >
                <FileText className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>View Full Resume</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
