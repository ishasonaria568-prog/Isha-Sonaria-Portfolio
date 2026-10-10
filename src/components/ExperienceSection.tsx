import React from 'react';
import { practicalExperiences } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Award,
  ShieldCheck,
  Terminal,
  Trophy
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider font-mono">
            Practical Security Training &amp; Roles
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-[#0F172A] tracking-tight">
            Experience and Training
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            Practical security operations, telemetry triage, network anomaly prioritization, and adversarial problem-solving across structured industry programs and competitive platforms.
          </p>
        </div>

        {/* Vertical Professional Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practicalExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Info */}
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#2563EB] shrink-0 shadow-xs">
                      {exp.id.includes('soc') ? (
                        <ShieldCheck className="w-6 h-6 text-[#2563EB]" />
                      ) : (
                        <Trophy className="w-6 h-6 text-[#059669]" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-display font-bold text-[#0F172A]">
                        {exp.role}
                      </h3>
                      <div className="text-xs sm:text-sm font-semibold text-[#2563EB] mt-0.5">
                        {exp.organization}
                        {exp.program && (
                          <span className="text-[#64748B] font-normal">
                            {' '}
                            · {exp.program}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {exp.badge && (
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 shrink-0">
                      {exp.badge}
                    </span>
                  )}
                </div>

                {/* Period Date Tag */}
                <div className="pt-4 flex items-center gap-1.5 text-xs font-mono text-[#64748B]">
                  <Calendar className="w-3.5 h-3.5 text-[#94A3B8]" />
                  <span>{exp.period}</span>
                </div>

                {/* Bullet Points with Green Achievement Indicators */}
                <div className="mt-4 pt-3 border-t border-[#E2E8F0] space-y-3">
                  {exp.points.map((pt, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-[#334155] leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#64748B]">
                <span className="inline-flex items-center gap-1.5 text-emerald-700 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Verified Hands-on Track
                </span>
                <span>Documented in Official Resume</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
