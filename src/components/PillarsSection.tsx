import React from 'react';
import { ShieldCheck, Cpu, Trophy, ArrowRight } from 'lucide-react';

interface PillarsSectionProps {
  onSelectTab: (sectionId: string) => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onSelectTab }) => {
  return (
    <section
      id="themen"
      className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#dfe3e8] dark:border-[#1e293b] transition-colors"
      aria-labelledby="themen-title"
    >
      {/* Header (matching pw.is section-head) */}
      <div className="mb-12 max-w-3xl">
        <p className="text-xs font-mono font-bold tracking-wider text-[#ff5a36] uppercase mb-2">
          Pillars &amp; Commitments // Core Values
        </p>
        <h2
          id="themen-title"
          className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0c1620] dark:text-white font-serif-pw leading-tight mb-3"
        >
          What Isha Sonaria Stands For
        </h2>
        <p className="text-base sm:text-lg text-[#3b4754] dark:text-[#94a3b8] leading-relaxed">
          Defensive operations executed with an attacker’s clarity, signal-to-noise reduction through automated tooling, and continuous hands-on laboratory mastery.
        </p>
      </div>

      {/* Promises Cards Grid (matching pw.is .promises) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {/* Promise 1 */}
        <article className="pw-card p-6 sm:p-8 bg-[#ffffff] dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b] flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#12355b]/10 dark:bg-[#0284c7]/20 text-[#12355b] dark:text-[#38bdf8] flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-normal text-[#0c1620] dark:text-white font-serif-pw mb-3 leading-snug">
              Defense from the Attacker’s Perspective
            </h3>
            <p className="text-xs sm:text-sm text-[#3b4754] dark:text-[#94a3b8] leading-relaxed mb-6">
              Knowing how threat actors execute reconnaissance and privilege escalation directly informs resilient SIEM alert correlation, Sysmon filtering, and zero-day containment.
            </p>
          </div>
          <button
            onClick={() => onSelectTab('projects')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff5a36] hover:underline self-start cursor-pointer"
          >
            <span>Explore Case Studies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </article>

        {/* Promise 2 */}
        <article className="pw-card p-6 sm:p-8 bg-[#ffffff] dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b] flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#12355b]/10 dark:bg-[#0284c7]/20 text-[#12355b] dark:text-[#38bdf8] flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-normal text-[#0c1620] dark:text-white font-serif-pw mb-3 leading-snug">
              Signal-to-Noise Reduction &amp; Automation
            </h3>
            <p className="text-xs sm:text-sm text-[#3b4754] dark:text-[#94a3b8] leading-relaxed mb-6">
              Analysts fatigue on redundant false alarms. Isha develops custom Python parsers, regex filters, and automated enrichment pipelines to streamline L1 triage workflows.
            </p>
          </div>
          <button
            onClick={() => onSelectTab('arsenal')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff5a36] hover:underline self-start cursor-pointer"
          >
            <span>Inspect Tool Arsenal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </article>

        {/* Promise 3 */}
        <article className="pw-card p-6 sm:p-8 bg-[#ffffff] dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b] flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#12355b]/10 dark:bg-[#0284c7]/20 text-[#12355b] dark:text-[#38bdf8] flex items-center justify-center mb-6">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-normal text-[#0c1620] dark:text-white font-serif-pw mb-3 leading-snug">
              Relentless Practical Lab Rigor
            </h3>
            <p className="text-xs sm:text-sm text-[#3b4754] dark:text-[#94a3b8] leading-relaxed mb-6">
              147 completed TryHackMe rooms, 105-day unbroken streak in the global Top 2%, Hackviser CORE certification, and continuous CTF analysis over passive theory.
            </p>
          </div>
          <button
            onClick={() => onSelectTab('credentials')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff5a36] hover:underline self-start cursor-pointer"
          >
            <span>Verified Credentials</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </article>
      </div>
    </section>
  );
};
