import React from 'react';
import { journeyMilestones } from '../data/portfolioData';
import { History, CheckCircle2, Calendar, Tag, Shield } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="py-16 md:py-24 bg-[#060814] border-b border-[#1A2748] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#1A2748] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] mb-2">
              <History className="w-3.5 h-3.5" />
              <span>INCIDENT_TIMELINE // DEVELOPMENT_LOG</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-white uppercase tracking-tight">
              SECURITY JOURNEY
            </h2>
            <p className="text-sm text-[#94A3B8] mt-1 max-w-2xl font-sans">
              Chronological progression styled as an incident investigation log, tracking from academic origins to practical offensive and defensive mastery.
            </p>
          </div>

          <div className="font-mono text-xs text-[#94A3B8] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
            <span>ACTIVE TIMELINE RECORD</span>
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-[#1A2748] ml-4 md:ml-6 space-y-8 pl-6 md:pl-8">
          {journeyMilestones.map((item, idx) => (
            <div key={`${item.year}-${idx}`} className="relative group">
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#080D1D] border-2 border-[#8B5CF6] group-hover:border-[#22D3EE] group-hover:scale-125 transition-all flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              </div>

              {/* Milestone Card */}
              <div className="p-5 sm:p-6 rounded-xl bg-[#0B1024] border border-[#1A2748] hover:border-[#8B5CF6]/50 transition-all shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded font-mono font-bold text-xs bg-[#2563EB]/20 border border-[#8B5CF6]/40 text-blue-400">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#34D399] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.status}</span>
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold font-mono text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#94A3B8] font-sans leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Evidence Artifact */}
                <div className="p-3 rounded-lg bg-[#060814] border border-[#1A2748] mb-3 text-xs font-mono text-[#34D399]">
                  <span className="text-[#94A3B8] mr-1.5">VERIFIED RECORD:</span>
                  <span>{item.evidence}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#080D1D] border border-[#1A2748] text-[11px] font-mono text-[#94A3B8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
