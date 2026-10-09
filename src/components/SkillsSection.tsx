import React from 'react';
import { TabId } from './Header';
import {
  ShieldAlert,
  Terminal,
  Search,
  Cpu,
  Star,
  Sparkles,
  Layers,
} from 'lucide-react';

interface SkillsSectionProps {
  onSelectTab?: (tab: TabId) => void;
}

interface StackCategory {
  title: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: {
    name: string;
    featured?: boolean;
    level?: string;
  }[];
}

const STACK_CATEGORIES: StackCategory[] = [
  {
    title: 'Defensive Operations & SIEM',
    badge: 'Specialized',
    icon: ShieldAlert,
    skills: [
      { name: 'Wazuh SIEM', featured: true, level: 'Expert' },
      { name: 'Wireshark', featured: true },
      { name: 'Suricata' },
      { name: 'Zeek / Bro' },
      { name: 'Sysmon' },
      { name: 'Log Corroboration' },
    ],
  },
  {
    title: 'Reconnaissance & Network Analysis',
    icon: Terminal,
    skills: [
      { name: 'Nmap', featured: true, level: 'Expert' },
      { name: 'SubScope Recon', featured: true },
      { name: 'Burp Suite' },
      { name: 'Nikto' },
      { name: 'TCPDump' },
      { name: 'Packet Dissection' },
    ],
  },
  {
    title: 'Digital Forensics & Email Security',
    icon: Search,
    skills: [
      { name: 'Email Header Forensics', featured: true },
      { name: 'SPF / DKIM / DMARC', featured: true },
      { name: 'ExifTool' },
      { name: 'Steghide' },
      { name: 'PDF-Fortress' },
      { name: 'Hashcat' },
    ],
  },
  {
    title: 'Security Automation & Tooling',
    icon: Cpu,
    skills: [
      { name: 'Python', featured: true, level: 'Advanced' },
      { name: 'Go', featured: true },
      { name: 'FastAPI' },
      { name: 'Docker' },
      { name: 'Linux / Kali' },
      { name: 'Git & CLI Engineering' },
    ],
  },
];

export const SkillsSection: React.FC<SkillsSectionProps> = () => {
  return (
    <section id="stack" className="py-14 md:py-20 border-t border-[#1A2642] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Tag (Matching video: • 02 // TECH STACK) */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#22D3EE] font-semibold mb-3">
          <span>• 02 // TECH STACK</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-10">
          Tools &amp; Technologies
        </h2>

        {/* 4 Tech Stack Container Cards (Matching video 00:01 2x2 grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {STACK_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="p-6 rounded-2xl bg-[#0D1527] border border-[#1E2D4A] hover:border-[#22D3EE]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-[#16233B] text-[#22D3EE]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {cat.title}
                      </h3>
                    </div>

                    {cat.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#22D3EE]/15 border border-[#22D3EE]/40 text-[#22D3EE] font-semibold">
                        {cat.badge}
                      </span>
                    )}
                  </div>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                          skill.featured
                            ? 'bg-[#16233B] text-white border border-[#22D3EE]/40 shadow-sm shadow-[#22D3EE]/10'
                            : 'bg-[#080D1A] text-[#94A3B8] border border-[#1E2D4A] hover:text-white hover:border-[#22D3EE]/30'
                        }`}
                      >
                        {skill.featured && (
                          <Star className="w-3 h-3 text-[#22D3EE] fill-[#22D3EE]" />
                        )}
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] text-[#22D3EE] font-semibold ml-0.5">
                            ({skill.level})
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
