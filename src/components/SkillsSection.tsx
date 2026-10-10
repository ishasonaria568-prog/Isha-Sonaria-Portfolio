import React from 'react';
import { skillCategoriesData } from '../data/portfolioData';
import {
  ShieldAlert,
  Terminal,
  Code2,
  Search,
  CheckCircle2,
  Layers,
  Wrench
} from 'lucide-react';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'soc-blue-team': <ShieldAlert className="w-5 h-5 text-[#8B5CF6]" />,
  'security-tools': <Terminal className="w-5 h-5 text-[#22D3EE]" />,
  'programming-automation': <Code2 className="w-5 h-5 text-[#8B5CF6]" />,
  'forensics-web-security': <Search className="w-5 h-5 text-[#22D3EE]" />,
};

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-[#231F3D] bg-[#0B0A14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider font-mono">
            Technical Competencies
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight">
            Skills &amp; Security Toolkit
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Organized across core defensive domains and toolchains, grounded in hands-on TryHackMe labs, CTF challenges, and open-source project development.
          </p>
        </div>

        {/* 4 Clean Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategoriesData.map((cat) => (
            <div
              key={cat.id}
              className="sec-card p-6 sm:p-7 flex flex-col justify-between hover:border-[#8B5CF6]/40 transition-colors"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-[#231F3D]">
                  <div className="w-10 h-10 rounded-xl bg-[#17142E] border border-[#231F3D] flex items-center justify-center">
                    {CATEGORY_ICONS[cat.id] || <Wrench className="w-5 h-5 text-[#8B5CF6]" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-[#F8FAFC]">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-[#A1A1AA] mt-0.5">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="pt-4 divide-y divide-[#231F3D]/60">
                  {cat.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="py-2.5 flex items-start justify-between gap-3 text-xs"
                    >
                      <div>
                        <span className="font-semibold text-[#F8FAFC] text-sm block">
                          {skill.name}
                        </span>
                        <span className="text-[#A1A1AA] text-xs block mt-0.5">
                          {skill.role}
                        </span>
                      </div>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono shrink-0 ${
                          skill.proficiency === 'Practical'
                            ? 'bg-[#8B5CF6]/15 text-[#C4B5FD] border border-[#8B5CF6]/30'
                            : 'bg-[#22D3EE]/10 text-[#67E8F9] border border-[#22D3EE]/25'
                        }`}
                      >
                        {skill.proficiency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer Note */}
              <div className="mt-6 pt-3 border-t border-[#231F3D] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                <span>Practical Familiarity</span>
                <span>Verified in Labs &amp; Code</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
