import React, { useState } from 'react';
import { BookOpen, ChevronRight, X, Clock, ShieldAlert } from 'lucide-react';

interface FieldNote {
  id: string;
  category: string;
  readTime: string;
  title: string;
  summary: string;
  content: string[];
}

const FIELD_NOTES: FieldNote[] = [
  {
    id: 'fn-1',
    category: 'NETWORK DEFENSE',
    readTime: '3 MIN READ',
    title: 'Why Blocking IP Addresses Alone Fails Against Modern Fast-Flux Networks',
    summary: 'Adversaries rotate bulletproof hosting and residential proxy egress within minutes. Why perimeter defenders must pivot to ASN, JA3 TLS fingerprints, and behavioural anomalies.',
    content: [
      'Static IP reputation lists remain the most commonly configured defensive rule in entry-level firewalls, yet they have the shortest halflife against sophisticated threats.',
      'Modern adversary infrastructure leverages automated DNS fast-flux networks and compromised residential proxies. An attacker sending spear-phishing probes or brute-forcing SSH keys can switch egress nodes in sub-minute intervals.',
      'Blue Team Solution: Shift detection logic up the Pyramid of Pain. Correlate JA3/JA3S TLS client hellos, inspect HTTP user-agent header anomalies, evaluate ASN reputation, and alert on authentication attempt velocity rather than isolated IP strings.',
    ],
  },
  {
    id: 'fn-2',
    category: 'DIGITAL FORENSICS',
    readTime: '4 MIN READ',
    title: 'Extracting Weaponized Payloads from MIME Multipart Email Headers',
    summary: 'A step-by-step walkthrough of dissecting suspicious Received-SPF clauses, DKIM canonicalization failures, and boundary anomalies in raw .eml artifacts.',
    content: [
      'Email remains the primary initial access vector for enterprise intrusions. When a suspicious email arrives, standard mail clients render only the display headers, masking critical transit details.',
      'By inspecting raw MIME transport hops, SOC analysts trace the message custody chain backwards from the final delivery MTA to the originating sender MTA.',
      'Watch for Return-Path mismatches with display "From" headers, softfail SPF verdicts paired with forged envelope domains, and base64-encoded attachment payloads lurking inside boundary tags.',
    ],
  },
  {
    id: 'fn-3',
    category: 'SOC LOG CORRELATION',
    readTime: '3 MIN READ',
    title: 'Decoding Windows Event ID 4624 & 4625 for True-Positive Brute Force Triage',
    summary: 'Separating normal workstation password expirations from targeted pass-the-hash and Kerberoasting attacks across Active Directory audit logs.',
    content: [
      'Log ID 4625 records failed logons, but high volumes of 4625 events are often caused by cached Outlook credentials or scheduled backup tasks rather than attackers.',
      'To verify true malicious intent, filter for Logon Type 3 (Network logon) versus Logon Type 10 (Remote Desktop), and inspect SubStatus code 0xC000006A (incorrect password) versus 0xC0000072 (disabled account).',
      'Correlate successive 4625 events immediately followed by a 4624 (successful logon) on high-privilege service accounts to detect completed credential guessing.',
    ],
  },
  {
    id: 'fn-4',
    category: 'SECURE ENGINEERING',
    readTime: '4 MIN READ',
    title: 'The 5 Dimensions of Concurrency & Atomic Database Locks in Web Portals',
    summary: 'How race conditions allow duplicate ballot submissions or fund withdrawals, and how to neutralize them using ACID isolation and tokenized receipts.',
    content: [
      'In high-throughput portals like institutional voting or checkout engines, parallel HTTP requests sent within the same millisecond can query the database simultaneously before a "has_voted" flag is written.',
      'Application-level checks (if !user.hasVoted) fail completely under concurrent load. The database will return false to both requests, causing a classic Time-of-Check to Time-of-Use (TOCTOU) vulnerability.',
      'Defensive Fix: Enforce database-level SELECT FOR UPDATE row locks or unique composite constraints. The entire submission must succeed or rollback as a single atomic transaction.',
    ],
  },
];

export const FieldNotesSection: React.FC = () => {
  const [activeNote, setActiveNote] = useState<FieldNote | null>(null);

  return (
    <section
      className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#dfe3e8] dark:border-[#1e293b] transition-colors"
      aria-labelledby="upcoming-title"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#dfe3e8] dark:border-[#1e293b]">
        <div>
          <p className="text-xs font-mono font-bold tracking-wider text-[#ff5a36] uppercase mb-2">
            Field Notes // SOC &amp; Security Engineering
          </p>
          <h2
            id="upcoming-title"
            className="text-3xl sm:text-5xl font-normal text-[#0c1620] dark:text-white font-serif-pw leading-tight"
          >
            Digital Defense To-Go — Practical Field Notes
          </h2>
          <p className="text-sm sm:text-base text-[#3b4754] dark:text-[#94a3b8] max-w-xl mt-2">
            Structured analysis from live telemetry, incident triage simulations, and attack-surface defense.
          </p>
        </div>

        <span className="text-xs font-mono text-[#6b7785] dark:text-[#94a3b8] self-start md:self-end">
          4 PRACTICAL GUIDES
        </span>
      </div>

      {/* Grid of 4 Field Notes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FIELD_NOTES.map((note) => (
          <div
            key={note.id}
            onClick={() => setActiveNote(note)}
            className="pw-card p-6 bg-[#ffffff] dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b] cursor-pointer hover:border-[#12355b] dark:hover:border-[#0284c7] transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#6b7785] dark:text-[#94a3b8] mb-3">
                <span className="text-[#12355b] dark:text-[#38bdf8] font-semibold">
                  {note.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#ff5a36]" />
                  {note.readTime}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-normal text-[#0c1620] dark:text-white font-serif-pw leading-snug mb-3 group-hover:text-[#12355b] dark:group-hover:text-[#38bdf8] transition-colors">
                {note.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#3b4754] dark:text-[#94a3b8] leading-relaxed mb-4">
                {note.summary}
              </p>
            </div>

            <div className="pt-3 border-t border-[#dfe3e8] dark:border-[#1e293b] flex items-center justify-between text-xs font-medium text-[#ff5a36]">
              <span>Read Full Field Note</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      {/* Field Note Modal */}
      {activeNote && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setActiveNote(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#dfe3e8] dark:border-[#1e293b] mb-6">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-[#ff5a36] font-bold">{activeNote.category}</span>
                <span className="text-[#94a3b8]">•</span>
                <span className="text-[#6b7785] dark:text-[#94a3b8]">{activeNote.readTime}</span>
              </div>
              <button
                onClick={() => setActiveNote(null)}
                className="p-1 rounded-lg hover:bg-[#f4f5f7] dark:hover:bg-[#1e293b] text-[#6b7785] hover:text-[#0c1620] dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h2 className="text-2xl sm:text-3xl font-normal text-[#0c1620] dark:text-white font-serif-pw leading-tight mb-4">
              {activeNote.title}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#3b4754] dark:text-[#cbd5e1] leading-relaxed">
              {activeNote.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#dfe3e8] dark:border-[#1e293b] flex items-center justify-between">
              <span className="text-xs font-mono text-[#6b7785] dark:text-[#94a3b8]">
                Author: Isha Sonaria // SOC Specialist
              </span>
              <button
                onClick={() => setActiveNote(null)}
                className="px-4 py-2 rounded-full text-xs font-semibold bg-[#12355b] hover:bg-[#0b2644] text-white dark:bg-[#0284c7] cursor-pointer"
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
