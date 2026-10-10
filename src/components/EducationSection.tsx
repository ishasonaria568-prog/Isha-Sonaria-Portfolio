import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-24 border-b border-[#231F3D] bg-[#0E0C1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider font-mono">
            Academic Background
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight">
            Education &amp; Foundations
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Formal undergraduate education in computer applications, core networking protocols, Linux systems, and database engineering.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="sec-card p-6 sm:p-9 bg-[#121024]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Degree & Institution */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#17142E] border border-[#231F3D] flex items-center justify-center text-[#8B5CF6]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#22D3EE] font-semibold uppercase tracking-wider">
                    Degree Program
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-[#F8FAFC]">
                    {educationData.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-sm text-[#A1A1AA] pt-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-[#F8FAFC]">{educationData.institution}</span>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-[#71717A]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {educationData.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {educationData.location}
                  </span>
                </div>
              </div>

              {/* Academic Honor Box */}
              <div className="p-4 rounded-xl bg-[#17142E] border border-[#2B254E] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#A1A1AA] uppercase">
                    Cumulative CGPA
                  </span>
                  <span className="text-lg font-display font-bold text-[#F8FAFC] tabular-nums">
                    {educationData.cgpa} {educationData.scale}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#22D3EE] font-medium pt-1 border-t border-[#231F3D]">
                  <Award className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>{educationData.academicHonor}</span>
                </div>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="lg:col-span-7 space-y-4 border-t lg:border-t-0 lg:border-l border-[#231F3D] pt-6 lg:pt-0 lg:pl-8">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#A1A1AA] tracking-wider font-semibold">
                <BookOpen className="w-4 h-4 text-[#8B5CF6]" />
                <span>Relevant Coursework &amp; Core Disciplines</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {educationData.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#0E0C1A] border border-[#231F3D] flex items-start gap-2.5 text-xs text-[#F8FAFC]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#A1A1AA] leading-relaxed pt-3">
                Academic foundation provided extensive grounding in operating system fundamentals, TCP/IP stack mechanisms, packet framing, and relational query structures applied directly during security investigations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
