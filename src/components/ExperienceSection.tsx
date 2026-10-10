import React from 'react';
import { practicalExperiences } from '../data/portfolioData';
import { Briefcase, Shield, CheckCircle2, Calendar, Award } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 border-b border-[#231F3D] bg-[#0E0C1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider font-mono">
            Practical Security Training &amp; Roles
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight">
            Security Experience &amp; Training
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Hands-on SOC operations, network anomaly prioritization, and adversarial problem-solving across structured industry training programs and competitive platforms.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practicalExperiences.map((exp) => (
            <div
              key={exp.id}
              className="sec-card p-6 sm:p-8 flex flex-col justify-between hover:border-[#8B5CF6]/40 transition-colors"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#231F3D]">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#17142E] border border-[#231F3D] flex items-center justify-center text-[#8B5CF6]">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-bold text-[#F8FAFC]">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-semibold text-[#22D3EE] font-mono">
                        {exp.organization}
                        {exp.program && ` · ${exp.program}`}
                      </span>
                    </div>
                  </div>
                  {exp.badge && (
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold text-[#C4B5FD] bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 shrink-0">
                      {exp.badge}
                    </span>
                  )}
                </div>

                {/* Period */}
                <div className="pt-3 flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA]">
                  <Calendar className="w-3.5 h-3.5 text-[#71717A]" />
                  <span>{exp.period}</span>
                </div>

                {/* Bullets */}
                <div className="mt-4 pt-3 border-t border-[#231F3D]/60 space-y-2.5">
                  {exp.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F8FAFC] leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-3 border-t border-[#231F3D] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                <span>Verified Practical Training</span>
                <span>Documented in Official Resume</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
