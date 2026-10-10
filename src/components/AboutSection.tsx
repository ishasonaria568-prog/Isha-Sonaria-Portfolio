import React from 'react';
import {
  ShieldAlert,
  Search,
  Code,
  Terminal,
  Activity,
  FileCheck,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface AboutSectionProps {
  onNavigate?: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-[#231F3D] relative bg-[#0B0A14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider font-mono">
            Background &amp; Approach
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight">
            Building Practical Security Skills Through Systematic Investigation
          </h2>
          <p className="mt-4 text-base text-[#A1A1AA] leading-relaxed">
            I am an aspiring cybersecurity analyst pursuing SOC L1 and Blue Team defensive roles. Rather than relying purely on theory, I build technical competence through hands-on lab environments, realistic incident scenarios, and engineering custom tools that address practical security workflows.
          </p>
        </div>

        {/* 3 Core Focus Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: SOC & Blue Team Fundamentals */}
          <div className="sec-card p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#17142E] border border-[#231F3D] flex items-center justify-center text-[#8B5CF6] mb-5">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-[#F8FAFC]">
                SOC Operations &amp; Alert Triage
              </h3>
              <p className="mt-3 text-sm text-[#A1A1AA] leading-relaxed">
                Practicing structured Tier-1 triage: distinguishing false positives from actionable threats, analyzing Windows Event IDs (such as 4624/4625 for logon tracking), and understanding the full incident escalation lifecycle.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#231F3D] text-xs font-mono text-[#22D3EE]">
              Focus: Wazuh SIEM · Syslog · Event Correlation
            </div>
          </div>

          {/* Pillar 2: Threat Detection & Digital Forensics */}
          <div className="sec-card p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#17142E] border border-[#231F3D] flex items-center justify-center text-[#22D3EE] mb-5">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-[#F8FAFC]">
                Threat Detection &amp; Forensics
              </h3>
              <p className="mt-3 text-sm text-[#A1A1AA] leading-relaxed">
                Investigating attack telemetry at the transport and packet layers. Hands-on analysis of multi-hop email headers, SPF/DKIM/DMARC records, malicious PDF object streams, and Wireshark PCAP stream reconstruction.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#231F3D] text-xs font-mono text-[#8B5CF6]">
              Focus: Wireshark · Email MIME · DFIR Tooling
            </div>
          </div>

          {/* Pillar 3: Tooling & Practical Automation */}
          <div className="sec-card p-6 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#17142E] border border-[#231F3D] flex items-center justify-center text-[#8B5CF6] mb-5">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-[#F8FAFC]">
                Defensive Tooling &amp; Automation
              </h3>
              <p className="mt-3 text-sm text-[#A1A1AA] leading-relaxed">
                Engineering custom scripts and utilities in Python and Go to automate repetitive analyst tasks, extract static features from suspicious links, and enforce tamper-resistant data verification.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#231F3D] text-xs font-mono text-[#22D3EE]">
              Focus: Python · Go · FastAPI · Scikit-Learn
            </div>
          </div>
        </div>

        {/* Practical Methodology Banner */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#121024] border border-[#231F3D] grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-2">
            <h4 className="text-base font-display font-bold text-[#F8FAFC]">
              My Operational Philosophy: Evidence Over Guesswork
            </h4>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Every alert investigation must follow a methodical, reproducible process: observe normal baseline traffic, gather raw artifacts without tampering, cross-reference indicators across independent sources, and document findings clearly for engineering and response teams.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            {onNavigate && (
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] transition-all cursor-pointer"
              >
                <span>View Engineering Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
            {onNavigate && (
              <button
                onClick={() => onNavigate('tryhackme')}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#F8FAFC] bg-[#17142E] border border-[#231F3D] hover:border-[#8B5CF6]/40 transition-all cursor-pointer"
              >
                <span>Review TryHackMe Record</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
