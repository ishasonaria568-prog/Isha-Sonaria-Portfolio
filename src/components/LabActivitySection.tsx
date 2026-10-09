import React, { useState } from 'react';
import { personalProfile, tryHackMeMetrics, thmAchievements } from '../data/portfolioData';
import { TabId } from './Header';
import { Activity, ExternalLink, Trophy, Flame, ShieldAlert, Award, Filter, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';

interface LabActivitySectionProps {
  onSelectTab?: (tab: TabId) => void;
}

export const LabActivitySection: React.FC<LabActivitySectionProps> = ({ onSelectTab }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filterCategories = [
    'ALL',
    'Leagues',
    'Streaks',
    'Defensive & SOC',
    'Exploitation & Web',
    'Fundamentals',
  ];

  const displayedBadges =
    selectedCategory === 'ALL'
      ? thmAchievements
      : thmAchievements.filter((badge) => badge.category === selectedCategory);

  return (
    <section id="lab" className="py-16 md:py-24 bg-[#040814] border-b border-[#16335C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#16335C] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] mb-2">
              <Activity className="w-3.5 h-3.5" />
              <span>PRACTICAL_TELEMETRY // TRYHACKME_ACTIVITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-white uppercase tracking-tight">
              LAB ACTIVITY
            </h2>
            <p className="text-sm text-[#94A3B8] mt-1 max-w-2xl font-sans">
              Real hands-on problem-solving in defensive detection, network enumeration, and web security environments.
            </p>
          </div>

          <div>
            <a
              id="lab-thm-profile-btn"
              href={personalProfile.links.tryhackme}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-semibold bg-[#38BDF8]/15 border border-[#38BDF8]/40 hover:bg-[#38BDF8]/25 text-white transition-colors"
            >
              <Trophy className="w-4 h-4 text-blue-400" />
              <span>View TryHackMe Profile</span>
              <ExternalLink className="w-3 h-3 text-[#38BDF8]" />
            </a>
          </div>
        </div>

        {/* Top 4 Telemetry Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="p-4 sm:p-5 rounded-lg bg-[#0B172E] border border-[#16335C] flex flex-col justify-between hover:border-[#34D399]/40 transition-colors">
            <span className="text-[10px] font-mono uppercase text-[#94A3B8] block mb-1">COMPLETED ROOMS</span>
            <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#34D399]">
              {tryHackMeMetrics.roomsCompleted}
            </div>
            <span className="text-[11px] font-mono text-[#94A3B8] mt-1">Hands-on Security Labs</span>
          </div>

          <div className="p-4 sm:p-5 rounded-lg bg-[#0B172E] border border-[#16335C] flex flex-col justify-between hover:border-[#22D3EE]/40 transition-colors">
            <span className="text-[10px] font-mono uppercase text-[#94A3B8] block mb-1">VERIFIED BADGES</span>
            <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#38BDF8]">
              {tryHackMeMetrics.badgesEarned}
            </div>
            <span className="text-[11px] font-mono text-[#94A3B8] mt-1">Platform Milestones</span>
          </div>

          <div className="p-4 sm:p-5 rounded-lg bg-[#0B172E] border border-[#16335C] flex flex-col justify-between hover:border-[#38BDF8]/40 transition-colors">
            <span className="text-[10px] font-mono uppercase text-[#94A3B8] block mb-1">ACTIVE STREAK</span>
            <div className="text-2xl sm:text-3xl font-mono font-extrabold text-blue-400 flex items-center gap-1.5">
              <Flame className="w-6 h-6 text-blue-400 inline" />
              <span>{tryHackMeMetrics.currentStreakDays} Days</span>
            </div>
            <span className="text-[11px] font-mono text-[#94A3B8] mt-1">Unbroken Daily Labs</span>
          </div>

          <div className="p-4 sm:p-5 rounded-lg bg-[#0B172E] border border-[#16335C] flex flex-col justify-between hover:border-[#F5F3FF]/40 transition-colors">
            <span className="text-[10px] font-mono uppercase text-[#94A3B8] block mb-1">GLOBAL RANKING</span>
            <div className="text-2xl sm:text-3xl font-mono font-extrabold text-white">
              {tryHackMeMetrics.globalRankPercent}
            </div>
            <span className="text-[11px] font-mono text-[#34D399] mt-1">Top Tier Competitor</span>
          </div>
        </div>

        {/* TryHackMe League Achievements Spotlight */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-blue-400" />
              <h3 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white">
                TRYHACKME LEAGUE ACHIEVEMENTS
              </h3>
            </div>
            <span className="text-[11px] font-mono text-[#94A3B8]">Verified 1st Place Finishes</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Bronze League */}
            <div className="p-5 rounded-xl bg-[#0B172E] border border-[#CD7F32]/50 hover:border-[#CD7F32] shadow-[0_0_20px_rgba(205,127,50,0.12)] transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#CD7F32]/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#CD7F32]/15 border border-[#CD7F32]/40 flex items-center justify-center text-xl shadow-inner">
                    🥉
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wide bg-[#CD7F32]/20 border border-[#CD7F32]/40 text-[#F0B27A]">
                    1ST PLACE
                  </span>
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#CD7F32] font-semibold mb-1">
                  BRONZE BRACKET
                </div>
                <h4 className="text-base sm:text-lg font-bold font-mono text-white mb-2 group-hover:text-[#F0B27A] transition-colors">
                  Bronze League — 1st Place
                </h4>
                <p className="text-xs text-[#94A3B8] font-sans leading-relaxed">
                  Secured 1st place champion finish in the TryHackMe competitive Bronze League bracket, outperforming competitors through relentless lab completions and problem solving.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-[#16335C] flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
                <span className="text-[#F0B27A] font-semibold">STATUS: CHAMPION</span>
                <span>TRYHACKME VERIFIED</span>
              </div>
            </div>

            {/* Silver League */}
            <div className="p-5 rounded-xl bg-[#0B172E] border border-slate-400/50 hover:border-slate-300 shadow-[0_0_20px_rgba(203,213,225,0.12)] transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-300/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-300/15 border border-slate-400/40 flex items-center justify-center text-xl shadow-inner">
                    🥈
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wide bg-slate-300/20 border border-slate-300/40 text-slate-200">
                    1ST PLACE
                  </span>
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-300 font-semibold mb-1">
                  SILVER BRACKET
                </div>
                <h4 className="text-base sm:text-lg font-bold font-mono text-white mb-2 group-hover:text-slate-100 transition-colors">
                  Silver League — 1st Place
                </h4>
                <p className="text-xs text-[#94A3B8] font-sans leading-relaxed">
                  Finished 1st place in TryHackMe weekly competitive Silver League, outperforming peers across offensive privilege escalation and defensive SOC rooms.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-[#16335C] flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
                <span className="text-slate-200 font-semibold">STATUS: CHAMPION</span>
                <span>TRYHACKME VERIFIED</span>
              </div>
            </div>

            {/* Gold League */}
            <div className="p-5 rounded-xl bg-[#0B172E] border border-amber-400/50 hover:border-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.15)] transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-400/15 border border-amber-400/40 flex items-center justify-center text-xl shadow-inner">
                    🥇
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wide bg-amber-400/20 border border-amber-400/40 text-amber-300">
                    1ST PLACE
                  </span>
                </div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-semibold mb-1">
                  GOLD BRACKET
                </div>
                <h4 className="text-base sm:text-lg font-bold font-mono text-white mb-2 group-hover:text-amber-200 transition-colors">
                  Gold League — 1st Place
                </h4>
                <p className="text-xs text-[#94A3B8] font-sans leading-relaxed">
                  Promoted and earned 1st place champion status in TryHackMe competitive Gold League with top-tier weekly room clears and rapid CTF problem solving.
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-[#16335C] flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
                <span className="text-amber-300 font-semibold">STATUS: CHAMPION</span>
                <span>TRYHACKME VERIFIED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filterable Badge Gallery */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#38BDF8]" />
              <h3 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-white">
                VERIFIED BADGES & MILESTONES
              </h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#0B172E] border border-[#16335C]">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#38BDF8] text-white font-semibold shadow-sm'
                      : 'text-[#94A3B8] hover:text-white hover:bg-[#060E1F]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {displayedBadges.map((badge, idx) => (
              <div
                key={`${badge.name}-${idx}`}
                className="p-4 rounded-lg bg-[#0B172E] border border-[#16335C] hover:border-[#38BDF8]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase text-[#38BDF8] font-semibold">
                      {badge.category}
                    </span>
                    {badge.metric && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#060E1F] border border-[#16335C] text-blue-400">
                        {badge.metric}
                      </span>
                    )}
                  </div>
                  <h4 className="text-sm font-mono font-bold text-white mb-1.5">
                    {badge.name}
                  </h4>
                  <p className="text-xs text-[#94A3B8] font-sans leading-relaxed">
                    {badge.description}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-[#16335C]/60 flex items-center justify-between text-[10px] font-mono text-[#34D399]">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>VERIFIED LAB WORK</span>
                  </span>
                  <span className="text-[#94A3B8]">THM PLATFORM</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
