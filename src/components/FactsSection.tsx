import React from 'react';
import { personalProfile, tryHackMeMetrics, educationData, certificationData } from '../data/portfolioData';
import { ExternalLink, CheckCircle2, ChevronDown } from 'lucide-react';

export const FactsSection: React.FC = () => {
  return (
    <section
      id="facts"
      className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#dfe3e8] dark:border-[#1e293b] transition-colors"
      aria-labelledby="facts-title"
    >
      {/* The Facts Card (matching pw.is facts-card) */}
      <div className="pw-card p-6 sm:p-10 bg-[#ffffff] dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b] rounded-[32px]">
        {/* Facts Meta Bar (matching pw.is facts-meta) */}
        <div className="flex items-center gap-4 text-xs font-mono text-[#6b7785] dark:text-[#94a3b8] pb-6 mb-8 border-b border-[#dfe3e8] dark:border-[#1e293b] flex-wrap">
          <span className="flex items-center gap-1.5 text-[#10b981] font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            Status: Active Security Professional
          </span>
          <span>•</span>
          <span>Created: 2026-01-10</span>
          <span>•</span>
          <span>Updated: 2026-10-09</span>
          <span>•</span>
          <span className="text-[#12355b] dark:text-[#38bdf8] font-bold">ID: is.security</span>
        </div>

        {/* Facts 2-Column Layout (matching pw.is facts-layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Left Column: Entity Summary & Expertise (5 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-xs font-mono font-bold tracking-wider text-[#ff5a36] uppercase mb-2">
                Entity Summary // Professional Dossier
              </p>
              <h2
                id="facts-title"
                className="text-3xl sm:text-5xl font-normal text-[#0c1620] dark:text-white font-serif-pw leading-tight mb-4"
              >
                Facts on Isha Sonaria
              </h2>
              <p className="text-base sm:text-lg text-[#3b4754] dark:text-[#94a3b8] leading-relaxed">
                A disciplined cybersecurity analyst and SOC specialist defending digital infrastructure through proactive telemetry, deep packet triage, and automated incident tooling.
              </p>
            </div>

            {/* Expertise List (matching pw.is ul.expertise) */}
            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#f4f5f7] dark:bg-[#1e293b] border border-[#dfe3e8] dark:border-[#334155]">
                <strong className="block text-sm font-semibold text-[#0c1620] dark:text-white mb-1">
                  🛡️ Cybersecurity &amp; SOC L1
                </strong>
                <p className="text-xs text-[#3b4754] dark:text-[#94a3b8] leading-relaxed">
                  Log ingestion, alert triage, SIEM rule tuning, and incident escalation. Specializes in dissecting complex intrusion vectors and eliminating false alarms before escalation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f4f5f7] dark:bg-[#1e293b] border border-[#dfe3e8] dark:border-[#334155]">
                <strong className="block text-sm font-semibold text-[#0c1620] dark:text-white mb-1">
                  📡 Network Analysis &amp; Packet Forensics
                </strong>
                <p className="text-xs text-[#3b4754] dark:text-[#94a3b8] leading-relaxed">
                  Deep packet inspection with Wireshark. Reconstructing TCP streams, detecting DNS tunneling, and auditing cleartext credential exposures across PCAP captures.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f4f5f7] dark:bg-[#1e293b] border border-[#dfe3e8] dark:border-[#334155]">
                <strong className="block text-sm font-semibold text-[#0c1620] dark:text-white mb-1">
                  ⚙️ Defensive Engineering &amp; Automation
                </strong>
                <p className="text-xs text-[#3b4754] dark:text-[#94a3b8] leading-relaxed">
                  Engineering practical standalone utilities in Python, Go, and FastAPI. Creator of PhishGuard (ML URL classifier) and Email Header Forensics.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f4f5f7] dark:bg-[#1e293b] border border-[#dfe3e8] dark:border-[#334155]">
                <strong className="block text-sm font-semibold text-[#0c1620] dark:text-white mb-1">
                  🏆 Continuous Laboratory Training
                </strong>
                <p className="text-xs text-[#3b4754] dark:text-[#94a3b8] leading-relaxed">
                  Ranked in the <strong>Top 2% globally on TryHackMe</strong> across 147 completed practical security rooms, with a 105-day unbroken challenge streak.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Facts DL & FAQ Accordion (6 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Core Entity Data (matching pw.is fact-list dl) */}
            <div>
              <p className="text-xs font-mono font-bold tracking-wider text-[#12355b] dark:text-[#38bdf8] uppercase mb-4">
                Core Entity Data // Verified Specifications
              </p>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 text-xs sm:text-sm border-t border-[#dfe3e8] dark:border-[#1e293b] pt-4">
                <div>
                  <dt className="text-[#6b7785] dark:text-[#94a3b8] font-mono text-[11px] uppercase">
                    Full Name
                  </dt>
                  <dd className="font-semibold text-[#0c1620] dark:text-white mt-0.5">
                    {personalProfile.displayName}
                  </dd>
                </div>

                <div>
                  <dt className="text-[#6b7785] dark:text-[#94a3b8] font-mono text-[11px] uppercase">
                    Primary Domain / GitHub
                  </dt>
                  <dd className="font-semibold text-[#12355b] dark:text-[#38bdf8] mt-0.5">
                    <a
                      href={personalProfile.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/ishasonaria568-prog
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-[#6b7785] dark:text-[#94a3b8] font-mono text-[11px] uppercase">
                    Professional Designation
                  </dt>
                  <dd className="font-semibold text-[#0c1620] dark:text-white mt-0.5">
                    SOC Analyst L1 &amp; Defensive Specialist
                  </dd>
                </div>

                <div>
                  <dt className="text-[#6b7785] dark:text-[#94a3b8] font-mono text-[11px] uppercase">
                    Location &amp; Mobility
                  </dt>
                  <dd className="font-semibold text-[#0c1620] dark:text-white mt-0.5">
                    Gujarat, India (Remote &amp; Relocation Open)
                  </dd>
                </div>

                <div>
                  <dt className="text-[#6b7785] dark:text-[#94a3b8] font-mono text-[11px] uppercase">
                    Academic Degree
                  </dt>
                  <dd className="font-semibold text-[#0c1620] dark:text-white mt-0.5">
                    BCA ({educationData.cgpa} CGPA • 1st Ranker Sem 1)
                  </dd>
                </div>

                <div>
                  <dt className="text-[#6b7785] dark:text-[#94a3b8] font-mono text-[11px] uppercase">
                    TryHackMe Standing
                  </dt>
                  <dd className="font-semibold text-[#10b981] mt-0.5">
                    Top 2% Worldwide • 105-Day Streak
                  </dd>
                </div>

                <div>
                  <dt className="text-[#6b7785] dark:text-[#94a3b8] font-mono text-[11px] uppercase">
                    Official Certification
                  </dt>
                  <dd className="font-semibold text-[#ff5a36] mt-0.5">
                    <a
                      href={certificationData.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      Hackviser CORE ({certificationData.credentialId})
                    </a>
                  </dd>
                </div>

                <div>
                  <dt className="text-[#6b7785] dark:text-[#94a3b8] font-mono text-[11px] uppercase">
                    Languages
                  </dt>
                  <dd className="font-semibold text-[#0c1620] dark:text-white mt-0.5">
                    English (Fluent), Gujarati (Native), Hindi (Professional)
                  </dd>
                </div>
              </dl>
            </div>

            {/* FAQ Accordion (matching pw.is .faq #faq) */}
            <div id="faq" className="pt-4 border-t border-[#dfe3e8] dark:border-[#1e293b]">
              <p className="text-xs font-mono font-bold tracking-wider text-[#ff5a36] uppercase mb-4">
                Frequently Asked Questions // FAQ
              </p>

              <div className="space-y-3">
                <details className="group pw-card p-4 bg-[#f4f5f7] dark:bg-[#1e293b] border border-[#dfe3e8] dark:border-[#334155] rounded-xl cursor-pointer">
                  <summary className="font-semibold text-xs sm:text-sm text-[#0c1620] dark:text-white flex items-center justify-between list-none">
                    <span>What is Isha&apos;s primary workflow in a SOC environment?</span>
                    <ChevronDown className="w-4 h-4 text-[#6b7785] group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-xs sm:text-sm text-[#3b4754] dark:text-[#cbd5e1] mt-3 pt-3 border-t border-[#dfe3e8] dark:border-[#334155] leading-relaxed">
                    She follows a rigorous 6-stage investigation methodology (Observe, Enumerate, Analyze, Validate, Document, Learn) ensuring alerts are thoroughly correlated against MITRE ATT&amp;CK tactics before escalation, minimizing false positives.
                  </p>
                </details>

                <details className="group pw-card p-4 bg-[#f4f5f7] dark:bg-[#1e293b] border border-[#dfe3e8] dark:border-[#334155] rounded-xl cursor-pointer">
                  <summary className="font-semibold text-xs sm:text-sm text-[#0c1620] dark:text-white flex items-center justify-between list-none">
                    <span>Which SIEM &amp; IDS platforms does she have hands-on experience with?</span>
                    <ChevronDown className="w-4 h-4 text-[#6b7785] group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-xs sm:text-sm text-[#3b4754] dark:text-[#cbd5e1] mt-3 pt-3 border-t border-[#dfe3e8] dark:border-[#334155] leading-relaxed">
                    She has deployed and tuned Wazuh SIEM agents, written custom decoders and rules for SSH brute-force and file integrity monitoring (FIM), and configured Suricata IDS for network-level signature alerting.
                  </p>
                </details>

                <details className="group pw-card p-4 bg-[#f4f5f7] dark:bg-[#1e293b] border border-[#dfe3e8] dark:border-[#334155] rounded-xl cursor-pointer">
                  <summary className="font-semibold text-xs sm:text-sm text-[#0c1620] dark:text-white flex items-center justify-between list-none">
                    <span>Is she available for immediate full-time employment or internships?</span>
                    <ChevronDown className="w-4 h-4 text-[#6b7785] group-open:rotate-180 transition-transform" />
                  </summary>
                  <p className="text-xs sm:text-sm text-[#3b4754] dark:text-[#cbd5e1] mt-3 pt-3 border-t border-[#dfe3e8] dark:border-[#334155] leading-relaxed">
                    Yes. Isha is actively interviewing for entry-level SOC Analyst L1, Junior Cybersecurity Analyst, and Security Operations roles across remote setups and on-site locations.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
