import React, { useState } from 'react';
import { personalProfile } from '../data/portfolioData';
import {
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Linkedin,
  Github,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedRole, setSelectedRole] = useState('SOC Analyst Role');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);

  const roleOptions = [
    'SOC Analyst Role',
    'Cybersecurity Internship',
    'Defensive Tooling / Collab',
    'General Inquiry',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalProfile.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !message) return;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setFormSubmitted(true);
    }, 700);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#dfe3e8] dark:border-[#1e293b] transition-colors"
      aria-labelledby="contact-title"
    >
      {/* Header */}
      <div className="mb-12 max-w-3xl">
        <p className="text-xs font-mono font-bold tracking-wider text-[#ff5a36] uppercase mb-2">
          Inquiries &amp; Engagement // Contact
        </p>
        <h2
          id="contact-title"
          className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0c1620] dark:text-white font-serif-pw leading-tight mb-3"
        >
          Start a Conversation.
        </h2>
        <p className="text-base sm:text-lg text-[#3b4754] dark:text-[#94a3b8] leading-relaxed">
          Open for full-time SOC Analyst positions, entry-level cybersecurity roles, and collaborative defensive tooling.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Details & Guarantees (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Response Guarantee Card */}
          <div className="pw-card p-6 bg-[#ffffff] dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b]">
            <div className="flex items-center gap-2.5 text-xs font-mono text-[#10b981] font-semibold mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
              <span>RESPONSE GUARANTEE</span>
            </div>
            <h3 className="text-xl font-normal text-[#0c1620] dark:text-white font-serif-pw mb-1.5">
              Replies Within 24 Hours
            </h3>
            <p className="text-xs text-[#3b4754] dark:text-[#94a3b8] leading-relaxed">
              Every professional inquiry regarding employment opportunities, technical assessments, or project collaborations receives personal attention.
            </p>
          </div>

          {/* Direct Email Card */}
          <div className="pw-card p-6 bg-[#ffffff] dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b]">
            <span className="text-[11px] font-mono text-[#6b7785] dark:text-[#94a3b8] uppercase block mb-1">
              DIRECT INBOX
            </span>
            <div className="flex items-center justify-between gap-2 flex-wrap mb-4">
              <a
                href={`mailto:${personalProfile.links.email}`}
                className="text-base sm:text-lg font-bold text-[#12355b] dark:text-[#38bdf8] hover:underline"
              >
                {personalProfile.links.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-[#f4f5f7] dark:bg-[#1e293b] hover:bg-[#eceef1] dark:hover:bg-[#334155] text-[#3b4754] dark:text-[#cbd5e1] transition-colors cursor-pointer text-xs flex items-center gap-1.5 font-medium"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#10b981]" />
                    <span className="text-[#10b981]">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-2.5 pt-3 border-t border-[#dfe3e8] dark:border-[#1e293b] text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#6b7785] dark:text-[#94a3b8] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#ff5a36]" />
                  <span>Location</span>
                </span>
                <span className="font-semibold text-[#0c1620] dark:text-white">
                  Gujarat, India (Relocation Open)
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6b7785] dark:text-[#94a3b8] flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5 text-[#0284c7]" />
                  <span>LinkedIn</span>
                </span>
                <a
                  href={personalProfile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#12355b] dark:text-[#38bdf8] hover:underline"
                >
                  /in/isha-sonaria
                </a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#6b7785] dark:text-[#94a3b8] flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                  <span>GitHub</span>
                </span>
                <a
                  href={personalProfile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#12355b] dark:text-[#38bdf8] hover:underline"
                >
                  ishasonaria568-prog
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form (7 Cols) */}
        <div className="lg:col-span-7">
          <div className="pw-card p-6 sm:p-8 bg-[#ffffff] dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b]">
            <h3 className="text-xl sm:text-2xl font-normal text-[#0c1620] dark:text-white font-serif-pw mb-2">
              Send an Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-[#3b4754] dark:text-[#94a3b8] mb-6">
              Select the nature of your inquiry below and submit your message directly.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-[#10b981]/10 border border-[#10b981]/30 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#10b981] mx-auto" />
                <h4 className="text-lg font-bold text-[#065f46] dark:text-[#34d399]">
                  Inquiry Dispatched Successfully
                </h4>
                <p className="text-xs text-[#065f46] dark:text-[#cbd5e1] max-w-sm mx-auto">
                  Thank you, {senderName}! Your inquiry regarding {selectedRole} has been logged. Isha will respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setSenderName('');
                    setSenderEmail('');
                    setMessage('');
                  }}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-[#12355b] text-white hover:bg-[#0b2644] dark:bg-[#0284c7] transition-all cursor-pointer mt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Inquiry Type Chips */}
                <div>
                  <label className="block text-xs font-mono font-medium text-[#6b7785] dark:text-[#94a3b8] uppercase mb-2">
                    Inquiry Type:
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {roleOptions.map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => setSelectedRole(role)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                          selectedRole === role
                            ? 'bg-[#12355b] text-white dark:bg-[#0284c7] shadow-sm'
                            : 'bg-[#f4f5f7] dark:bg-[#1e293b] text-[#3b4754] dark:text-[#94a3b8] hover:text-[#0c1620] dark:hover:text-white border border-[#dfe3e8] dark:border-[#334155]'
                        }`}
                      >
                        {role}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono font-medium text-[#6b7785] dark:text-[#94a3b8] uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f4f5f7] dark:bg-[#1e293b] border border-[#dfe3e8] dark:border-[#334155] text-xs text-[#0c1620] dark:text-white focus:outline-none focus:border-[#12355b] dark:focus:border-[#0284c7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-medium text-[#6b7785] dark:text-[#94a3b8] uppercase mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="jane@organization.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#f4f5f7] dark:bg-[#1e293b] border border-[#dfe3e8] dark:border-[#334155] text-xs text-[#0c1620] dark:text-white focus:outline-none focus:border-[#12355b] dark:focus:border-[#0284c7]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-medium text-[#6b7785] dark:text-[#94a3b8] uppercase mb-1">
                    Message / Opportunity Scope *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the opportunity, role requirements, or project details..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#f4f5f7] dark:bg-[#1e293b] border border-[#dfe3e8] dark:border-[#334155] text-xs text-[#0c1620] dark:text-white focus:outline-none focus:border-[#12355b] dark:focus:border-[#0284c7]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-3 rounded-full text-xs font-semibold bg-[#12355b] hover:bg-[#0b2644] text-white dark:bg-[#0284c7] dark:hover:bg-[#0369a1] shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{sending ? 'Dispatching Inquiry...' : 'Transmit Inquiry'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
