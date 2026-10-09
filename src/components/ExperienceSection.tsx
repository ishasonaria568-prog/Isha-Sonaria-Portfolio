import React from 'react';
import { educationData } from '../data/portfolioData';
import { TabId } from './Header';
import {
  Briefcase,
  GraduationCap,
  CheckCircle2,
  Calendar,
  MapPin,
  Award,
  Sparkles,
} from 'lucide-react';

interface ExperienceSectionProps {
  onSelectTab?: (tab: TabId) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = () => {
  return (
    <section id="experience" className="py-14 md:py-20 border-t border-[#1A2642] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Column: Professional Journey (Matching video 00:11-00:13) */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#22D3EE] font-semibold mb-3">
              <span>• 04 / EXPERIENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-8">
              Professional Journey
            </h2>

            <div className="space-y-6">
              {/* Experience Card 1 */}
              <div className="p-6 rounded-2xl bg-[#0D1527] border border-[#1E2D4A] hover:border-[#22D3EE]/50 transition-all text-left">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#22D3EE] font-bold">
                    2024 — Present
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/40 text-[#22D3EE] font-semibold">
                    Active Lab / Research
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  SOC &amp; Defensive Operations Specialist
                </h3>
                <p className="text-xs font-mono text-[#94A3B8] mb-5">
                  Self-Directed Cybersecurity &amp; Threat Research Lab
                </p>

                <ul className="space-y-3 text-xs text-[#94A3B8]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                    <span>
                      Architected and delivered 5 open-source defensive tools with offline detection (PhishGuard ML, Email Header Forensics, SubScope).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                    <span>
                      Dissected raw PCAP captures in Wireshark to reconstruct TCP sessions, identify DNS anomalies, and map alerts to MITRE ATT&amp;CK.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                    <span>
                      Correlated simulated brute-force and privilege escalation telemetry with Wazuh SIEM rules to minimize mean time to triage.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22D3EE] shrink-0 mt-0.5" />
                    <span>
                      Maintained an unbroken 105-day daily challenge streak across 147+ TryHackMe rooms, ranking in the Top 2% worldwide.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Experience Card 2: Competitive CTF & Leagues */}
              <div className="p-6 rounded-2xl bg-[#0D1527] border border-[#1E2D4A] hover:border-[#22D3EE]/50 transition-all text-left">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#22D3EE] font-bold">
                    2023 — 2026
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#16233B] text-[#94A3B8]">
                    CTF &amp; Leagues
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  TryHackMe Competitive League Operator
                </h3>
                <p className="text-xs font-mono text-[#94A3B8] mb-4">
                  Global Cybersecurity Training &amp; Labs
                </p>

                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Earned 1st Place Champion in Bronze, Silver, and Gold leagues. Awarded 23 technical badges across web exploitation, digital forensics, and defensive SOC procedures.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Foundation / Education (Matching video 00:11-00:14) */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#22D3EE] font-semibold mb-3">
              <span>• ACADEMIC FOUNDATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-8">
              Education
            </h2>

            <div className="space-y-4">
              {/* Education 1: BCA */}
              <div className="p-6 rounded-2xl bg-[#0D1527] border border-[#1E2D4A] hover:border-[#22D3EE]/50 transition-all text-left">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#22D3EE] font-bold">
                    2023 — 2026
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/40 text-[#22D3EE] font-semibold">
                      Pursuing
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#34D399]/15 border border-[#34D399]/40 text-[#34D399] font-bold">
                      CGPA 8.30 / 10.0
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <p className="text-xs font-mono text-[#94A3B8] mb-3">
                  Bhakta Kavi Narsinh Mehta University, Junagadh
                </p>

                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                  Core computer science, object-oriented programming, data structures, algorithms, operating systems architecture, and relational database management systems. Academic 1st Ranker in Semester 1.
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {educationData.coursework.slice(0, 4).map((c) => (
                    <span
                      key={c}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080D1A] border border-[#1E2D4A] text-[#E0F2FE]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education 2: Higher Secondary */}
              <div className="p-5 rounded-2xl bg-[#0D1527] border border-[#1E2D4A] hover:border-[#22D3EE]/50 transition-all text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#22D3EE] font-bold">
                    2023
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#16233B] text-[#94A3B8]">
                    82%
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  Higher Secondary Certificate (12th, GSEB)
                </h4>
                <p className="text-xs font-mono text-[#94A3B8]">
                  General Science, Mathematics &amp; Computer Studies • Veraval
                </p>
              </div>

              {/* Education 3: Secondary School */}
              <div className="p-5 rounded-2xl bg-[#0D1527] border border-[#1E2D4A] hover:border-[#22D3EE]/50 transition-all text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#22D3EE] font-bold">
                    2021
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#16233B] text-[#94A3B8]">
                    85%
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">
                  Secondary School Certificate (10th, GSEB)
                </h4>
                <p className="text-xs font-mono text-[#94A3B8]">
                  Science, Mathematics &amp; Foundations of Computing • Veraval
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
