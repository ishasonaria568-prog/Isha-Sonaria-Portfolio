import React from 'react';
import { CyberMonogram } from './CyberMonogram';
import { personalProfile } from '../data/portfolioData';
import { ArrowUp, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onSelectTab: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f4f5f7] dark:bg-[#090e17] border-t border-[#dfe3e8] dark:border-[#1e293b] pt-16 pb-12 text-[#3b4754] dark:text-[#94a3b8] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Layout (matching pw.is footer-layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#dfe3e8] dark:border-[#1e293b]">
          {/* Brand Col (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <CyberMonogram size="md" withRing />
              <div>
                <span className="text-base font-bold text-[#0c1620] dark:text-white block leading-tight">
                  Isha Sonaria
                </span>
                <span className="text-xs text-[#6b7785] dark:text-[#94a3b8]">
                  Cybersecurity Analyst &amp; SOC Operator
                </span>
              </div>
            </div>

            <p className="text-xs text-[#6b7785] dark:text-[#94a3b8] max-w-sm leading-relaxed">
              Defending digital frontiers through proactive telemetry, deep packet analysis, and automated incident triage. Verified TryHackMe Top 2% practitioner.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b] text-[11px] font-mono text-[#059669] dark:text-[#34d399]">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span>Verified Entity • Hackviser CORE Certified</span>
            </div>
          </div>

          {/* Nav Col 1: Pillars */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0c1620] dark:text-white">
              Themen &amp; Focus
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab('themen')}
                  className="hover:text-[#ff5a36] transition-colors text-left cursor-pointer"
                >
                  Attacker-Centric Defense
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('themen')}
                  className="hover:text-[#ff5a36] transition-colors text-left cursor-pointer"
                >
                  Signal-to-Noise Reduction
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('arsenal')}
                  className="hover:text-[#ff5a36] transition-colors text-left cursor-pointer"
                >
                  Wazuh SIEM &amp; Suricata
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('arsenal')}
                  className="hover:text-[#ff5a36] transition-colors text-left cursor-pointer"
                >
                  Packet Forensics (PCAP)
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Col 2: Case Studies */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0c1620] dark:text-white">
              Case Studies
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab('projects')}
                  className="hover:text-[#ff5a36] transition-colors text-left cursor-pointer"
                >
                  PhishGuard (ML Classifier)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('projects')}
                  className="hover:text-[#ff5a36] transition-colors text-left cursor-pointer"
                >
                  Email Header Forensics
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('projects')}
                  className="hover:text-[#ff5a36] transition-colors text-left cursor-pointer"
                >
                  College Voting Portal
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('projects')}
                  className="hover:text-[#ff5a36] transition-colors text-left cursor-pointer"
                >
                  SubScope CLI Recon
                </button>
              </li>
            </ul>
          </div>

          {/* Nav Col 3: Profiles & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0c1620] dark:text-white">
              Verified Profiles
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={personalProfile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff5a36] transition-colors inline-flex items-center gap-1"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={personalProfile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff5a36] transition-colors inline-flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={personalProfile.links.tryhackme}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#ff5a36] transition-colors inline-flex items-center gap-1"
                >
                  <span>TryHackMe Top 2%</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('facts')}
                  className="hover:text-[#ff5a36] transition-colors text-left cursor-pointer"
                >
                  Entity Data &amp; FAQ
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (matching pw.is bottom) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6b7785] dark:text-[#94a3b8]">
          <div className="flex items-center gap-2 flex-wrap">
            <span>© {new Date().getFullYear()} Isha Sonaria.</span>
            <span>•</span>
            <span>Zero Tracking // Client-Side AI Dossier</span>
            <span>•</span>
            <a
              href="/portfolio-source.zip"
              download="portfolio-isha-sonaria.zip"
              className="text-[#12355b] dark:text-[#38bdf8] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Download Source .ZIP</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b] hover:border-[#12355b] dark:hover:border-[#0284c7] text-[#0c1620] dark:text-white transition-all cursor-pointer shadow-sm text-xs font-sans font-medium"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#ff5a36]" />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
