import React, { useState } from 'react';
import { certificationData, educationData, tryHackMeMetrics, thmAchievements } from '../data/portfolioData';
import { Award, ExternalLink, CheckCircle2, GraduationCap, ShieldCheck, Trophy, Sparkles } from 'lucide-react';

interface CertificationSectionProps {
  onOpenResume?: () => void;
}

export const CertificationSection: React.FC<CertificationSectionProps> = ({ onOpenResume }) => {
  const [activeCertTab, setActiveCertTab] = useState<'all' | 'certs' | 'thm' | 'education'>('all');

  return (
    <section
      id="credentials"
      className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#dfe3e8] dark:border-[#1e293b] transition-colors"
      aria-labelledby="credentials-title"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#dfe3e8] dark:border-[#1e293b]">
        <div>
          <p className="text-xs font-mono font-bold tracking-wider text-[#ff5a36] uppercase mb-2">
            Verified Credentials // Accreditation
          </p>
          <h2
            id="credentials-title"
            className="text-3xl sm:text-5xl font-normal text-[#0c1620] dark:text-white font-serif-pw leading-tight"
          >
            Certifications, Track Record &amp; Education
          </h2>
          <p className="text-sm sm:text-base text-[#3b4754] dark:text-[#94a3b8] max-w-2xl mt-2 leading-relaxed">
            Verified industry credentials, global competitive TryHackMe rankings, and undergraduate computer science academic honors.
          </p>
        </div>

        {onOpenResume && (
          <button
            onClick={onOpenResume}
            className="px-4 py-2 rounded-full text-xs font-semibold bg-[#12355b] hover:bg-[#0b2644] text-white dark:bg-[#0284c7] dark:hover:bg-[#0369a1] transition-all cursor-pointer self-start md:self-end"
          >
            Download Verified Dossier / CV
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Official Hackviser Certification (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="pw-card p-6 sm:p-8 bg-[#ffffff] dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b]">
            <div className="flex items-center justify-between text-xs font-mono mb-4 pb-3 border-b border-[#dfe3e8] dark:border-[#1e293b]">
              <span className="text-[#10b981] font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                VERIFIED CREDENTIAL
              </span>
              <span className="text-[#6b7785] dark:text-[#94a3b8]">
                ISSUED: {certificationData.date}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-[#ff5a36] font-semibold block uppercase">
                  {certificationData.issuer}
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-[#0c1620] dark:text-white font-serif-pw leading-tight mt-1">
                  {certificationData.title}
                </h3>
                <span className="text-xs font-mono text-[#12355b] dark:text-[#38bdf8] block mt-1">
                  Credential ID: {certificationData.credentialId}
                </span>
              </div>

              <a
                href={certificationData.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#12355b]/10 dark:bg-[#0284c7]/20 text-[#12355b] dark:text-[#38bdf8] hover:bg-[#12355b] hover:text-white dark:hover:bg-[#0284c7] transition-all self-start"
              >
                <span>Verify Online</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-[#3b4754] dark:text-[#94a3b8] leading-relaxed mb-6">
              Industry foundations accreditation validating core competencies in network security architecture, vulnerability assessment methodologies, threat modeling, and defensive response workflows.
            </p>

            {/* Competencies */}
            <div className="space-y-2 pt-2 border-t border-[#dfe3e8] dark:border-[#1e293b]">
              <span className="text-[11px] font-mono text-[#6b7785] dark:text-[#94a3b8] uppercase block">
                VERIFIED COMPETENCIES:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {certificationData.competencies.map((comp, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[#3b4754] dark:text-[#cbd5e1]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10b981] shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Education Card */}
          <div className="pw-card p-6 sm:p-8 bg-[#ffffff] dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b]">
            <div className="flex items-center justify-between text-xs font-mono mb-3">
              <span className="text-[#12355b] dark:text-[#38bdf8] font-semibold">
                FORMAL HIGHER EDUCATION
              </span>
              <span className="text-[#ff5a36] font-bold">
                8.30 CGPA
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-normal text-[#0c1620] dark:text-white font-serif-pw mb-1">
              {educationData.degree}
            </h3>
            <p className="text-xs text-[#6b7785] dark:text-[#94a3b8] mb-3">
              {educationData.institution} • {educationData.period}
            </p>

            <div className="p-3 rounded-xl bg-[#10b981]/10 border border-[#10b981]/20 text-[#065f46] dark:text-[#34d399] text-xs font-medium mb-4 flex items-center gap-2">
              <Trophy className="w-4 h-4 text-[#10b981]" />
              <span>{educationData.achievement} ({educationData.cgpa} CGPA)</span>
            </div>

            <div className="space-y-1.5">
              <span className="text-[11px] font-mono text-[#6b7785] dark:text-[#94a3b8] uppercase block">
                CORE COURSEWORK:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {educationData.coursework.map((course, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#f4f5f7] dark:bg-[#1e293b] text-[#3b4754] dark:text-[#cbd5e1] border border-[#dfe3e8] dark:border-[#334155]"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: TryHackMe Metrics & Badges (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="pw-card p-6 sm:p-7 bg-[#ffffff] dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b]">
            <div className="flex items-center justify-between text-xs font-mono mb-4 pb-3 border-b border-[#dfe3e8] dark:border-[#1e293b]">
              <span className="text-[#10b981] font-bold">TRYHACKME GLOBAL PROFILE</span>
              <span className="text-[#ff5a36] font-semibold">{tryHackMeMetrics.globalRankPercent}</span>
            </div>

            {/* Quick Metrics 2x2 */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-xl bg-[#f4f5f7] dark:bg-[#1e293b] border border-[#dfe3e8] dark:border-[#334155] text-center">
                <span className="text-2xl font-extrabold text-[#12355b] dark:text-[#38bdf8] font-mono block">
                  {tryHackMeMetrics.roomsCompleted}
                </span>
                <span className="text-[11px] font-mono text-[#6b7785] dark:text-[#94a3b8] uppercase">
                  Rooms Solved
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#f4f5f7] dark:bg-[#1e293b] border border-[#dfe3e8] dark:border-[#334155] text-center">
                <span className="text-2xl font-extrabold text-[#ff5a36] font-mono block">
                  {tryHackMeMetrics.currentStreakDays}d
                </span>
                <span className="text-[11px] font-mono text-[#6b7785] dark:text-[#94a3b8] uppercase">
                  Unbroken Streak
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#f4f5f7] dark:bg-[#1e293b] border border-[#dfe3e8] dark:border-[#334155] text-center">
                <span className="text-2xl font-extrabold text-[#10b981] font-mono block">
                  {tryHackMeMetrics.badgesEarned}
                </span>
                <span className="text-[11px] font-mono text-[#6b7785] dark:text-[#94a3b8] uppercase">
                  Skill Badges
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#f4f5f7] dark:bg-[#1e293b] border border-[#dfe3e8] dark:border-[#334155] text-center">
                <span className="text-2xl font-extrabold text-[#0c1620] dark:text-white font-mono block">
                  1st
                </span>
                <span className="text-[11px] font-mono text-[#6b7785] dark:text-[#94a3b8] uppercase">
                  Gold League
                </span>
              </div>
            </div>

            {/* League & Room Badges List */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-mono text-[#6b7785] dark:text-[#94a3b8] uppercase block">
                COMPETITIVE BADGES:
              </span>
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {thmAchievements.map((badge, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#f4f5f7] dark:bg-[#1e293b] border border-[#dfe3e8] dark:border-[#334155] flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-semibold text-[#0c1620] dark:text-white block">
                        {badge.name}
                      </span>
                      <span className="text-[11px] text-[#6b7785] dark:text-[#94a3b8]">
                        {badge.description}
                      </span>
                    </div>
                    {badge.metric && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#ff5a36]/10 text-[#ff5a36] font-bold shrink-0 ml-2">
                        {badge.metric}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
