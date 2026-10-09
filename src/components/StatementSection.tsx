import React from 'react';
import { ShieldCheck, Lock } from 'lucide-react';

export const StatementSection: React.FC = () => {
  return (
    <section
      className="py-12 sm:py-16 border-y border-[#dfe3e8] dark:border-[#1e293b] bg-[#f4f5f7] dark:bg-[#0f172a] transition-colors"
      aria-label="Core Statement & Verification Guarantee"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xl sm:text-2xl md:text-3xl text-[#0c1620] dark:text-[#f1f5f9] font-normal leading-relaxed font-serif-pw">
          The interactive security dossier
          <span
            className="pill-icon is-brand"
            aria-hidden="true"
            title="Verified Security Credentials"
          >
            <ShieldCheck className="w-4 h-4 text-white" />
          </span>
          answers exclusively with verified data on Isha Sonaria. Zero tracking, zero third-party telemetry, and your inquiry
          <span
            className="pill-icon is-accent"
            aria-hidden="true"
            title="Zero Third-Party Tracking"
          >
            <Lock className="w-4 h-4 text-white" />
          </span>
          never leaves your browser.
        </p>
      </div>
    </section>
  );
};
