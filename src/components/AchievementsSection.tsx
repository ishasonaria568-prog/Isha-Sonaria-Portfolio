import React from 'react';
import { achievementsList, personalProfile } from '../data/portfolioData';
import {
  Trophy,
  Flame,
  Award,
  Layers,
  GraduationCap,
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const getAchievementIcon = (id: string) => {
    switch (id) {
      case 'thm-top-2':
        return <Trophy className="w-5 h-5 text-[#2563EB]" />;
      case 'thm-100-labs':
        return <Layers className="w-5 h-5 text-[#059669]" />;
      case 'thm-badges':
        return <Award className="w-5 h-5 text-[#2563EB]" />;
      case 'thm-streak':
        return <Flame className="w-5 h-5 text-[#EF4444]" />;
      case 'thm-leagues':
        return <Trophy className="w-5 h-5 text-[#D97706]" />;
      case 'bca-rank-1':
        return <GraduationCap className="w-5 h-5 text-[#2563EB]" />;
      default:
        return <Award className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  return (
    <section id="achievements" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider font-mono">
              Milestones &amp; Standing
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-[#0F172A] tracking-tight">
              Verified Achievements
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl leading-relaxed">
              Documented milestones across competitive cybersecurity platforms, structured SOC training modules, and academic performance.
            </p>
          </div>
          <a
            href={personalProfile.tryhackme}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all cursor-pointer self-start md:self-auto shadow-xs"
          >
            <span>TryHackMe Profile (@CipherGhost24)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6 Compact White Statistic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsList.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#E2E8F0] p-6 shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E2E8F0]">
                  <div className="w-10 h-10 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shadow-2xs">
                    {getAchievementIcon(item.id)}
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#64748B] bg-[#F1F5F9] px-2.5 py-0.5 rounded border border-[#E2E8F0]">
                    {item.category}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="text-3xl font-display font-extrabold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                    {item.metric}
                  </div>
                  <h3 className="text-base font-bold text-[#0F172A] mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#64748B] mt-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#E2E8F0] flex items-center gap-1.5 text-[11px] font-mono text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                <span>Verified Achievement</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
