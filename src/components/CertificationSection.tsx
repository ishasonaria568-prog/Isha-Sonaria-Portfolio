import React from 'react';
import { certificationsList, educationData } from '../data/portfolioData';
import {
  Award,
  ExternalLink,
  CheckCircle2,
  ShieldCheck,
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  FileText
} from 'lucide-react';

interface CertificationSectionProps {
  onOpenResume?: () => void;
}

export const CertificationSection: React.FC<CertificationSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="certifications" className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider font-mono">
              Academic &amp; Professional Credentials
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-[#0F172A] tracking-tight">
              Education &amp; Certifications
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl leading-relaxed">
              Formal undergraduate computer science education combined with verified industry security credentials and hands-on program honors.
            </p>
          </div>
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#0F172A] bg-[#F1F5F9] border border-[#E2E8F0] hover:bg-[#E2E8F0] transition-all cursor-pointer self-start md:self-auto"
            >
              <FileText className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Full Credentials Dossier</span>
            </button>
          )}
        </div>

        {/* Part 1: Education Card */}
        <div className="mb-10 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Degree Details */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#2563EB] shadow-xs">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#2563EB] uppercase tracking-wider">
                    Undergraduate Degree
                  </span>
                  <h3 className="text-xl font-display font-bold text-[#0F172A]">
                    {educationData.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-1.5 text-sm text-[#475569] pt-1">
                <div className="font-semibold text-[#0F172A]">
                  {educationData.institution}
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-[#64748B]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#94A3B8]" />
                    {educationData.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#94A3B8]" />
                    {educationData.location}
                  </span>
                </div>
              </div>

              {/* CGPA & Honors Pill */}
              <div className="p-4 rounded-xl bg-white border border-[#E2E8F0] space-y-2 shadow-2xs">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#64748B] uppercase">
                    Cumulative CGPA
                  </span>
                  <span className="text-lg font-display font-bold text-[#0F172A]">
                    {educationData.cgpa} {educationData.scale}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold pt-1 border-t border-[#E2E8F0]">
                  <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  <span>{educationData.academicHonor}</span>
                </div>
              </div>
            </div>

            {/* Coursework */}
            <div className="lg:col-span-7 space-y-4 border-t lg:border-t-0 lg:border-l border-[#E2E8F0] pt-6 lg:pt-0 lg:pl-8">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#64748B] font-semibold tracking-wider">
                <BookOpen className="w-4 h-4 text-[#2563EB]" />
                <span>Foundational Coursework &amp; Core Disciplines</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {educationData.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-white border border-[#E2E8F0] flex items-center gap-2.5 text-xs font-medium text-[#334155] shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[#64748B] leading-relaxed pt-2">
                Undergraduate coursework built comprehensive fundamentals in packet transmission, TCP/IP stack protocols, Linux process architecture, and database querying used directly during security triage.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: Verified Professional Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Issuer and Verification Badge */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#2563EB] shadow-xs">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider font-mono text-[#2563EB]">
                        {cert.issuer}
                      </span>
                      <span className="block text-xs text-[#64748B]">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                {/* Title & Credential ID */}
                <div className="pt-5">
                  <h3 className="text-xl font-display font-bold text-[#0F172A]">
                    {cert.title}
                  </h3>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2 text-xs font-mono text-[#64748B]">
                    <span>Credential ID:</span>
                    <span className="text-[#0F172A] bg-white px-2 py-0.5 rounded border border-[#E2E8F0] font-semibold">
                      {cert.credentialId}
                    </span>
                    {cert.honors && (
                      <span className="text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 font-bold">
                        {cert.honors}
                      </span>
                    )}
                  </div>
                </div>

                {/* Verified Competencies */}
                <div className="mt-6 pt-4 border-t border-[#E2E8F0] space-y-2">
                  <span className="text-xs font-mono uppercase text-[#64748B] tracking-wider block font-semibold">
                    Verified Competencies
                  </span>
                  <div className="space-y-1.5">
                    {cert.competencies.map((comp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#475569]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Certificate Action Link */}
              <div className="mt-8 pt-4 border-t border-[#E2E8F0]">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] hover:bg-[#F1F5F9] hover:border-[#CBD5E1] transition-all shadow-2xs"
                >
                  <span>Verify Credential Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#2563EB]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
