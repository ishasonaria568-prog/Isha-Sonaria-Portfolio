import React from 'react';
import { skillCategoriesData } from '../data/portfolioData';
import {
  Network,
  ShieldCheck,
  Terminal,
  Code2,
  CheckCircle2,
  Layers
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'networking-security':
        return <Network className="w-5 h-5 text-[#2563EB]" />;
      case 'soc-threat-defense':
        return <ShieldCheck className="w-5 h-5 text-[#059669]" />;
      case 'security-tools':
        return <Terminal className="w-5 h-5 text-[#2563EB]" />;
      case 'programming-scripting':
        return <Code2 className="w-5 h-5 text-[#059669]" />;
      default:
        return <Layers className="w-5 h-5 text-[#2563EB]" />;
    }
  };

  const getAccentBadge = (id: string) => {
    switch (id) {
      case 'soc-threat-defense':
      case 'programming-scripting':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default:
        return 'bg-blue-50 text-blue-700 border-blue-200';
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider font-mono">
            Technical Competencies
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-[#0F172A] tracking-tight">
            Skills &amp; Security Toolkit
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Organized across core defensive domains and toolchains, grounded in 100+ TryHackMe security rooms, SOC operations training, and open-source defensive tool development.
          </p>
        </div>

        {/* 4 Responsive Grid White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {skillCategoriesData.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0 shadow-xs">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-[#0F172A]">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-[#64748B] mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border shrink-0 ${getAccentBadge(
                      cat.id
                    )}`}
                  >
                    Verified
                  </span>
                </div>

                {/* Skills Clean Tags Grid */}
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#F1F5F9] text-[#1E293B] border border-[#E2E8F0] hover:bg-[#E2E8F0] hover:border-[#CBD5E1] transition-colors cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom Micro-Note */}
              <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#64748B]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Hands-on Lab Competency</span>
                </span>
                <span className="text-[#94A3B8]">{cat.skills.length} competencies</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
