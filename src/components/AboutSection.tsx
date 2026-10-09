import React from 'react';
import { TabId } from './Header';
import {
  ShieldAlert,
  Search,
  BookOpen,
  CheckCircle2,
  Lock,
  Cpu,
  Layers,
  Award,
} from 'lucide-react';

interface AboutSectionProps {
  onSelectTab?: (tab: TabId) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="py-14 md:py-20 border-t border-[#1A2642] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Tag (Matching video: • 01 // ABOUT ME) */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#22D3EE] font-semibold mb-3">
          <span>• 01 // ABOUT ME</span>
        </div>

        {/* Section Big Bold Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
          Defending Infrastructure with Disciplined Investigation
        </h2>

        {/* Narrative Paragraph */}
        <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-4xl mb-12 font-sans">
          I investigate threat telemetry and engineer defensive security pipelines down to the raw packet layer. Blending structured SOC L1 triage procedures with automated network analysis, I inspect suspicious email vectors, track adversarial indicators of compromise (IoCs), and build custom defensive tooling in Python and Go to reduce false positives and protect system integrity.
        </p>

        {/* 4 Feature/Pillar Cards Grid (Matching video 00:01: Specialization, Clean Architecture, Education, Code Standards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: Specialization */}
          <div className="p-6 rounded-2xl bg-[#0D1527] border border-[#1E2D4A] hover:border-[#22D3EE]/50 transition-all flex flex-col justify-between group">
            <div className="mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#16233B] border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] mb-4 group-hover:scale-105 transition-transform">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider block mb-1">
                Specialization
              </span>
              <h3 className="text-base font-bold text-white group-hover:text-[#22D3EE] transition-colors">
                SOC Triage &amp; Forensics
              </h3>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Alert prioritization, deep packet dissection in Wireshark, and email header analysis.
            </p>
          </div>

          {/* Card 2: Core Philosophy */}
          <div className="p-6 rounded-2xl bg-[#0D1527] border border-[#1E2D4A] hover:border-[#22D3EE]/50 transition-all flex flex-col justify-between group">
            <div className="mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#16233B] border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] mb-4 group-hover:scale-105 transition-transform">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider block mb-1">
                Core Philosophy
              </span>
              <h3 className="text-base font-bold text-white group-hover:text-[#22D3EE] transition-colors">
                Zero Trust &amp; Integrity
              </h3>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Verify explicitly, assume breach, and maintain tamper-evident audit evidence.
            </p>
          </div>

          {/* Card 3: Education */}
          <div className="p-6 rounded-2xl bg-[#0D1527] border border-[#1E2D4A] hover:border-[#22D3EE]/50 transition-all flex flex-col justify-between group">
            <div className="mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#16233B] border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] mb-4 group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider block mb-1">
                Education
              </span>
              <h3 className="text-base font-bold text-white group-hover:text-[#22D3EE] transition-colors">
                BCA • CGPA 8.30
              </h3>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              BKNM University • Academic 1st Ranker in Semester 1 with computing honors.
            </p>
          </div>

          {/* Card 4: Detection Standard */}
          <div className="p-6 rounded-2xl bg-[#0D1527] border border-[#1E2D4A] hover:border-[#22D3EE]/50 transition-all flex flex-col justify-between group">
            <div className="mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#16233B] border border-[#22D3EE]/30 flex items-center justify-center text-[#22D3EE] mb-4 group-hover:scale-105 transition-transform">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-[#94A3B8] uppercase tracking-wider block mb-1">
                Standard
              </span>
              <h3 className="text-base font-bold text-white group-hover:text-[#22D3EE] transition-colors">
                Tested, True-Positive
              </h3>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Eliminate false positives through rigorous hypothesis validation and sandboxing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
