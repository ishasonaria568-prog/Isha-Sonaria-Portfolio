import React from 'react';
import { certificationsList } from '../data/portfolioData';
import { Award, ExternalLink, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';

interface CertificationSectionProps {
  onOpenResume?: () => void;
}

export const CertificationSection: React.FC<CertificationSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="certifications" className="py-16 sm:py-24 border-b border-[#231F3D] bg-[#0B0A14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider font-mono">
              Credentials &amp; Validation
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight">
              Verified Certifications
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-2xl leading-relaxed">
              Official cybersecurity certifications and specialized technical programmes with public verification links and credential IDs.
            </p>
          </div>
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-[#F8FAFC] bg-[#161329] border border-[#231F3D] hover:border-[#8B5CF6]/50 transition-all cursor-pointer self-start md:self-auto"
            >
              <FileText className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Full Credentials Summary</span>
            </button>
          )}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsList.map((cert) => (
            <div
              key={cert.id}
              className="sec-card p-6 sm:p-8 flex flex-col justify-between hover:border-[#8B5CF6]/50 transition-all group"
            >
              <div>
                {/* Header with Issuer and Verification Badge */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#231F3D]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#17142E] border border-[#231F3D] flex items-center justify-center text-[#8B5CF6]">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider font-mono text-[#22D3EE]">
                        {cert.issuer}
                      </span>
                      <span className="block text-[11px] text-[#A1A1AA]">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded-md border border-[#10B981]/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                {/* Certificate Title & ID */}
                <div className="pt-5">
                  <h3 className="text-xl font-display font-bold text-[#F8FAFC] group-hover:text-[#C4B5FD] transition-colors">
                    {cert.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                    <span>Credential ID:</span>
                    <span className="text-[#F8FAFC] bg-[#161329] px-2 py-0.5 rounded border border-[#231F3D]">
                      {cert.credentialId}
                    </span>
                    {cert.honors && (
                      <span className="text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-0.5 rounded border border-[#F59E0B]/20 font-bold">
                        {cert.honors}
                      </span>
                    )}
                  </div>
                </div>

                {/* Competencies Verified */}
                <div className="mt-6 pt-4 border-t border-[#231F3D] space-y-2">
                  <span className="text-xs font-mono uppercase text-[#A1A1AA] tracking-wider block font-medium">
                    Verified Competency Areas
                  </span>
                  <div className="grid grid-cols-1 gap-1.5">
                    {cert.competencies.map((comp, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                        <span>{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* View Certificate Action Link */}
              <div className="mt-8 pt-4 border-t border-[#231F3D] flex items-center justify-between">
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors"
                >
                  <span>View Official Certificate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-xs font-mono text-[#71717A]">
                  Authentic Issuer Record
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
