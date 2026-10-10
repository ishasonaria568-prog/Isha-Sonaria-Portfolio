import React from 'react';
import { personalProfile, heroStats } from '../data/portfolioData';
import {
  Shield,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  ExternalLink,
  Award,
  Terminal,
  Activity,
  CheckCircle2,
  FileText,
  Search,
  Eye,
  Radar
} from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <section id="home" className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-[#F8FAFC] border-b border-[#E2E8F0]">
      {/* Background subtle mesh grid */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Two-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT COLUMN: Identity & Bio */}
          <div className="lg:col-span-6 space-y-6">
            {/* Cybersecurity Status Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for SOC Analyst &amp; Defensive Roles</span>
            </div>

            {/* Candidate Name & Title */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-[#0F172A] tracking-tight leading-tight">
                {personalProfile.name}
              </h1>
              <h2 className="mt-3 text-lg sm:text-xl font-semibold text-[#2563EB] leading-snug">
                {personalProfile.headline}
              </h2>
            </div>

            {/* Short Introduction */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl">
              Hands-on cybersecurity practitioner trained in SOC operations, network anomaly triage, and vulnerability assessment. Experienced with Wazuh SIEM, Wireshark, and Kali Linux, engineering custom tools for phishing URL detection, email header forensics, and automated reconnaissance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all cursor-pointer shadow-sm hover:shadow"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="/Isha_Sonaria_Resume.pdf"
                download="Isha_Sonaria_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-[#0F172A] bg-white border border-[#E2E8F0] hover:bg-[#F1F5F9] hover:border-[#CBD5E1] transition-all cursor-pointer shadow-xs"
              >
                <Download className="w-4 h-4 text-[#2563EB]" />
                <span>Download Resume</span>
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm text-[#64748B] hover:text-[#0F172A] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-[#2563EB]" />
                  <span>View Dossier</span>
                </button>
              )}
            </div>

            {/* Verified Social Profile Links */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-[#64748B] font-semibold uppercase tracking-wider">
                Profiles:
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalProfile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] shadow-xs transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={personalProfile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:text-[#2563EB] shadow-xs transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-3.5 h-3.5 text-[#0F172A]" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personalProfile.tryhackme}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] hover:border-[#DC2626] hover:text-[#DC2626] shadow-xs transition-all"
                  aria-label="TryHackMe Profile"
                >
                  <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
                  <span>TryHackMe</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Light Terminal-Style Dashboard Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              {/* Card Window Title Bar */}
              <div className="px-5 py-3.5 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
                  <span className="ml-2 font-mono text-xs font-semibold text-[#0F172A] tracking-wider uppercase">
                    SOC Triage &amp; Security Dashboard
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live Telemetry</span>
                </div>
              </div>

              {/* Security Monitoring Panels */}
              <div className="p-6 space-y-4">
                {/* 4 Security Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Item 1: Security Monitoring */}
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#0F172A] flex items-center gap-1.5">
                        <Activity className="w-3.5 h-3.5 text-[#2563EB]" />
                        Security Monitoring
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-[11px] text-[#64748B]">
                      Wazuh SIEM event logs, rule matches, and host alert surveillance
                    </p>
                  </div>

                  {/* Item 2: Network Analysis */}
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#0F172A] flex items-center gap-1.5">
                        <Radar className="w-3.5 h-3.5 text-[#2563EB]" />
                        Network Analysis
                      </span>
                      <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                        MONITORED
                      </span>
                    </div>
                    <p className="text-[11px] text-[#64748B]">
                      Wireshark packet capture, protocol anomalies &amp; TCP handshakes
                    </p>
                  </div>

                  {/* Item 3: Threat Investigation */}
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#0F172A] flex items-center gap-1.5">
                        <Search className="w-3.5 h-3.5 text-[#059669]" />
                        Threat Investigation
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                        TRIAGED
                      </span>
                    </div>
                    <p className="text-[11px] text-[#64748B]">
                      Email header hops, SPF/DKIM validation &amp; phishing URL analysis
                    </p>
                  </div>

                  {/* Item 4: Vulnerability Assessment */}
                  <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#0F172A] flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-[#059669]" />
                        Vulnerability Audit
                      </span>
                      <span className="text-[10px] font-mono font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                        VERIFIED
                      </span>
                    </div>
                    <p className="text-[11px] text-[#64748B]">
                      Nmap service discovery, Nikto/Nuclei scans &amp; port exposure
                    </p>
                  </div>
                </div>

                {/* Simulated Incident Triage Terminal Log */}
                <div className="p-3.5 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0] font-mono text-xs text-[#0F172A] space-y-1.5">
                  <div className="flex items-center justify-between text-[11px] text-[#64748B] pb-1 border-b border-[#E2E8F0]">
                    <span className="flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#2563EB]" />
                      soc-analyst@triage-station:~$
                    </span>
                    <span>Wazuh Rule 5710 Match</span>
                  </div>
                  <div className="text-[11px] leading-relaxed text-[#334155]">
                    <p className="text-emerald-700 font-semibold">
                      [OK] Host 192.168.1.45: Agent connected, syscheck baseline validated.
                    </p>
                    <p className="text-[#2563EB]">
                      [INFO] PhishGuard Engine: 16 lexical URL features extracted.
                    </p>
                    <p className="text-[#0F172A]">
                      [TRIAGE] Email Header Forensics: SPF/DKIM Pass, 0-100 risk computed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Prominent Clean Statistic Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-5 sm:p-6 rounded-xl border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all"
            >
              <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-wider text-[#2563EB] bg-[#EFF6FF] px-2 py-0.5 rounded mb-2">
                {stat.badge}
              </span>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#0F172A] tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-[#0F172A] mt-1">
                {stat.label}
              </div>
              <p className="text-xs text-[#64748B] mt-0.5">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
