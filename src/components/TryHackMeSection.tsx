import React from 'react';
import { tryHackMeData } from '../data/portfolioData';
import {
  Trophy,
  Flame,
  Award,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Layers
} from 'lucide-react';

export const TryHackMeSection: React.FC = () => {
  return (
    <section id="tryhackme" className="py-16 sm:py-24 border-b border-[#231F3D] bg-[#0E0C1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider font-mono">
              Hands-on Cyber Training
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight">
              TryHackMe Achievements &amp; Lab Record
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-2xl leading-relaxed">
              Demonstrated problem-solving across defensive SOC scenarios, network exploitation, log analysis, and incident investigation labs.
            </p>
          </div>
          <a
            href={tryHackMeData.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#EF4444] hover:bg-[#DC2626] transition-all cursor-pointer self-start md:self-auto shadow-md shadow-red-950/30"
          >
            <span>View TryHackMe Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Compact Key Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="sec-card p-5 bg-[#121024]">
            <div className="flex items-center justify-between text-xs text-[#A1A1AA] font-mono">
              <span>COMPLETED LABS</span>
              <Layers className="w-4 h-4 text-[#8B5CF6]" />
            </div>
            <div className="mt-2 text-3xl font-display font-extrabold text-[#F8FAFC] tabular-nums">
              {tryHackMeData.roomsCompleted}
            </div>
            <p className="mt-1 text-xs text-[#A1A1AA]">
              Security rooms and triage scenarios
            </p>
          </div>

          <div className="sec-card p-5 bg-[#121024]">
            <div className="flex items-center justify-between text-xs text-[#A1A1AA] font-mono">
              <span>GLOBAL STANDING</span>
              <Trophy className="w-4 h-4 text-[#F59E0B]" />
            </div>
            <div className="mt-2 text-3xl font-display font-extrabold text-[#22D3EE] tabular-nums">
              {tryHackMeData.globalRank}
            </div>
            <p className="mt-1 text-xs text-[#A1A1AA]">
              Worldwide practitioner percentile
            </p>
          </div>

          <div className="sec-card p-5 bg-[#121024]">
            <div className="flex items-center justify-between text-xs text-[#A1A1AA] font-mono">
              <span>ACTIVE STREAK</span>
              <Flame className="w-4 h-4 text-[#EF4444]" />
            </div>
            <div className="mt-2 text-3xl font-display font-extrabold text-[#F8FAFC] tabular-nums">
              {tryHackMeData.streakDays} Days
            </div>
            <p className="mt-1 text-xs text-[#A1A1AA]">
              Continuous daily hands-on solving
            </p>
          </div>

          <div className="sec-card p-5 bg-[#121024]">
            <div className="flex items-center justify-between text-xs text-[#A1A1AA] font-mono">
              <span>BADGES EARNED</span>
              <Award className="w-4 h-4 text-[#8B5CF6]" />
            </div>
            <div className="mt-2 text-3xl font-display font-extrabold text-[#C4B5FD] tabular-nums">
              {tryHackMeData.badgesEarned}
            </div>
            <p className="mt-1 text-xs text-[#A1A1AA]">
              Skill certifications &amp; badges
            </p>
          </div>
        </div>

        {/* Competitive Leagues & Verified Badges Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: League Championships */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-display font-bold text-[#F8FAFC] flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#F59E0B]" />
              <span>Competitive League Achievements</span>
            </h3>

            <div className="space-y-3">
              {tryHackMeData.leagues.map((league, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#121024] border border-[#231F3D] flex items-center justify-between gap-4"
                >
                  <div>
                    <span className="block text-sm font-semibold text-[#F8FAFC]">
                      {league.title}
                    </span>
                    <span className="block text-xs text-[#A1A1AA] mt-0.5">
                      {league.note}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 shrink-0">
                    {league.position}
                  </span>
                </div>
              ))}
            </div>

            {/* Practical Learning Focus */}
            <div className="mt-6 p-5 rounded-xl bg-[#121024] border border-[#231F3D] space-y-3">
              <h4 className="text-xs font-mono uppercase text-[#22D3EE] tracking-wider font-semibold">
                Key Investigation Tracks Practiced
              </h4>
              <ul className="space-y-2 text-xs text-[#A1A1AA]">
                {tryHackMeData.focusAreas.map((area, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Verified Lab Badges */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-display font-bold text-[#F8FAFC] flex items-center gap-2">
              <Award className="w-4 h-4 text-[#8B5CF6]" />
              <span>Verified Challenge &amp; Defensive Badges</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {tryHackMeData.verifiedAchievements.map((badge, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#121024] border border-[#231F3D] hover:border-[#8B5CF6]/40 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-mono text-[#8B5CF6]">
                      {badge.category}
                    </span>
                    {badge.highlight && (
                      <span className="text-[10px] font-mono text-[#22D3EE] bg-[#22D3EE]/10 px-1.5 py-0.5 rounded">
                        Highlighted
                      </span>
                    )}
                  </div>
                  <h4 className="mt-1 text-sm font-semibold text-[#F8FAFC]">
                    {badge.name}
                  </h4>
                  <p className="mt-1 text-xs text-[#A1A1AA] leading-relaxed">
                    {badge.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-right">
              <a
                href={tryHackMeData.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA] hover:text-[#F8FAFC] transition-colors"
              >
                <span>View full badges &amp; completed rooms on TryHackMe</span>
                <ExternalLink className="w-3 h-3 text-[#EF4444]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
