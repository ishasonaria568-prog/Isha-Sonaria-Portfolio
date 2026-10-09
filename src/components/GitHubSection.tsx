import React, { useState } from 'react';
import { personalProfile } from '../data/portfolioData';
import { TabId } from './Header';
import {
  Github,
  GitBranch,
  Star,
  ExternalLink,
  GitFork,
  Code2,
  CheckCircle2,
  Terminal,
  Layers,
} from 'lucide-react';

interface GitHubSectionProps {
  onSelectTab?: (tab: TabId) => void;
}

interface RepositoryItem {
  name: string;
  description: string;
  tags: string[];
  language: string;
  languageColor: string;
  githubUrl: string;
  stars?: number;
  forks?: number;
}

const REPOSITORIES: RepositoryItem[] = [
  {
    name: 'phishguard-ml',
    description: 'Offline ML-based phishing URL detection engine combining 16 lexical features and Random Forest classifier.',
    tags: ['#python', '#fastapi', '#scikit-learn', '#offline-analysis', '#ml-security'],
    language: 'Python',
    languageColor: '#38BDF8',
    githubUrl: 'https://github.com/ishasonaria568-prog/phishguard-ml',
  },
  {
    name: 'email-header-forensics',
    description: 'Two-tier email investigation tool for analyzing raw RFC 5322 headers, SPF/DKIM/DMARC and received hops.',
    tags: ['#go', '#mime-parser', '#spf-dkim-dmarc', '#dfir', '#email-security'],
    language: 'Go',
    languageColor: '#22D3EE',
    githubUrl: 'https://github.com/ishasonaria568-prog/email-header-forensics',
  },
  {
    name: 'SubScope',
    description: 'Concurrent Python CLI for multithreaded subdomain enumeration, asynchronous DNS, and wildcard detection.',
    tags: ['#python', '#dns-resolver', '#reconnaissance', '#cli', '#attack-surface'],
    language: 'Python',
    languageColor: '#38BDF8',
    githubUrl: 'https://github.com/ishasonaria568-prog/SubScope',
  },
  {
    name: 'pdf-fortress',
    description: 'Defensive PDF stream analysis, object token inspection, metadata sanitization, and AES-256 encryption.',
    tags: ['#python', '#typescript', '#dfir', '#stream-inspection', '#aes-256'],
    language: 'TypeScript',
    languageColor: '#60A5FA',
    githubUrl: 'https://github.com/ishasonaria568-prog/pdf-fortress',
  },
  {
    name: 'college-voting-portal-secure',
    description: 'Tamper-resistant institutional voting application enforcing strict RBAC and atomic ballot transactions.',
    tags: ['#react', '#fastapi', '#jwt', '#bcrypt', '#atomic-locks'],
    language: 'TypeScript',
    languageColor: '#60A5FA',
    githubUrl: 'https://github.com/ishasonaria568-prog/college-voting-portal-secure',
  },
];

export const GitHubSection: React.FC<GitHubSectionProps> = () => {
  const [selectedLang, setSelectedLang] = useState('ALL');

  const filteredRepos = REPOSITORIES.filter((r) => {
    if (selectedLang === 'ALL') return true;
    return r.language.toLowerCase() === selectedLang.toLowerCase();
  });

  return (
    <section id="github" className="py-14 md:py-20 border-t border-[#1A2642] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Tag & Headline (Matching video 00:07) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#22D3EE] font-semibold mb-3">
              <span>• OPEN SOURCE &amp; GITHUB</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Codebase &amp; GitHub Activity
            </h2>
          </div>

          <a
            href={personalProfile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-[#22D3EE] hover:underline"
          >
            <span>github.com/ishasonaria568-prog</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* GitHub User Profile Card with Matrix & Badges (Matching video 00:07) */}
        <div className="p-6 rounded-2xl bg-[#0D1527] border border-[#1E2D4A] mb-8 shadow-xl shadow-black/40">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#1E2D4A] gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E293B] to-[#080D1A] border border-[#22D3EE]/50 flex items-center justify-center font-mono font-bold text-base text-[#22D3EE]">
                IS
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>{personalProfile.displayName}</span>
                  <span className="text-[11px] font-mono font-normal text-[#22D3EE]">
                    (Public Profile)
                  </span>
                </h3>
                <p className="text-xs font-mono text-[#94A3B8]">
                  Cybersecurity &amp; Defense Developer • 5+ Public Repositories
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className="flex items-center gap-6 text-xs font-mono">
              <div>
                <span className="text-[#94A3B8] block text-[10px] uppercase">Repositories</span>
                <span className="text-white font-bold text-sm">5+</span>
              </div>
              <div>
                <span className="text-[#94A3B8] block text-[10px] uppercase">THM Rooms</span>
                <span className="text-[#22D3EE] font-bold text-sm">147+</span>
              </div>
              <div>
                <span className="text-[#94A3B8] block text-[10px] uppercase">Code Reviews</span>
                <span className="text-[#34D399] font-bold text-sm">Pull Shark</span>
              </div>
            </div>
          </div>

          {/* Earned Badges Row (Matching video 00:07: Pull Shark, Pair Extraordinaire, Quickdraw, YOLO) */}
          <div className="pt-4 pb-5 flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-[#94A3B8] text-[11px] mr-2">Earned Badges:</span>
            <span className="px-3 py-1 rounded-lg bg-[#080D1A] border border-[#1E2D4A] text-[#7DD3FC] flex items-center gap-1.5">
              <span>🦈</span>
              <span>Pull Shark</span>
            </span>
            <span className="px-3 py-1 rounded-lg bg-[#080D1A] border border-[#1E2D4A] text-[#7DD3FC] flex items-center gap-1.5">
              <span>⚡</span>
              <span>Pair Extraordinaire</span>
            </span>
            <span className="px-3 py-1 rounded-lg bg-[#080D1A] border border-[#1E2D4A] text-[#7DD3FC] flex items-center gap-1.5">
              <span>🎯</span>
              <span>Quickdraw</span>
            </span>
            <span className="px-3 py-1 rounded-lg bg-[#080D1A] border border-[#1E2D4A] text-[#34D399] flex items-center gap-1.5">
              <span>🔥</span>
              <span>105D Active Streak</span>
            </span>
          </div>

          {/* Commit Frequency & Activity Spectrum Matrix (Matching video 00:08) */}
          <div className="pt-4 border-t border-[#1E2D4A]">
            <div className="flex items-center justify-between text-xs font-mono text-[#94A3B8] mb-3">
              <span>Commit Frequency &amp; Activity Spectrum</span>
              <div className="flex items-center gap-1 text-[10px]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-[#16233B]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#0E7490]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#0284C7]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#22D3EE]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-[#38BDF8]" />
                <span>More</span>
              </div>
            </div>

            {/* Matrix Squares Simulation */}
            <div className="grid grid-flow-col grid-rows-4 gap-1.5 overflow-x-auto pb-2">
              {Array.from({ length: 48 }).map((_, i) => {
                const intensity = (i * 7 + 3) % 5;
                const colors = [
                  'bg-[#16233B]',
                  'bg-[#0E7490]',
                  'bg-[#0284C7]',
                  'bg-[#22D3EE]',
                  'bg-[#38BDF8]',
                ];
                return (
                  <div
                    key={i}
                    title={`Activity day ${i + 1}`}
                    className={`w-3.5 h-3.5 rounded-sm ${colors[intensity]} hover:scale-125 transition-transform`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* Filter Pills for Repositories */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-xs font-mono text-[#94A3B8] mr-2">Filter:</span>
          {['ALL', 'Python', 'Go', 'TypeScript'].map((lang) => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang)}
              className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                selectedLang === lang
                  ? 'bg-gradient-to-r from-[#22D3EE] to-[#38BDF8] text-[#060A12] font-bold shadow-md shadow-[#22D3EE]/25'
                  : 'bg-[#0D1527] border border-[#1E2D4A] text-[#94A3B8] hover:text-white'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>

        {/* Grid of Public Repository Cards (Matching video 00:08-00:10) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRepos.map((repo) => (
            <div
              key={repo.name}
              className="p-5 rounded-xl bg-[#0D1527] border border-[#1E2D4A] hover:border-[#22D3EE]/50 transition-all flex flex-col justify-between group text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-white group-hover:text-[#22D3EE] transition-colors font-mono flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-[#22D3EE]" />
                    <span>{repo.name}</span>
                  </h4>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#16233B] text-[#94A3B8]">
                    Public
                  </span>
                </div>

                <p className="text-xs text-[#94A3B8] leading-relaxed mb-4 line-clamp-2">
                  {repo.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono text-[#7DD3FC] hover:underline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Language Indicator & Code Link */}
              <div className="flex items-center justify-between pt-3 border-t border-[#1E2D4A] text-xs font-mono">
                <div className="flex items-center gap-1.5 text-white">
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span>{repo.language}</span>
                </div>

                <a
                  href={repo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#22D3EE] hover:text-white flex items-center gap-1 font-semibold"
                >
                  <span>Code</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
