import React, { useState } from 'react';
import { personalProfile } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  ExternalLink,
  MapPin,
  Send,
  MessageSquare,
  Shield,
  Clock,
  Sparkles
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalProfile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = subject || `Cybersecurity Opportunity - Inquiry from ${name || 'Recruiter'}`;
    const mailBody = `Hello Isha,\n\n${message || 'I would like to discuss an opportunity regarding SOC operations and cybersecurity analysis.'}\n\nFrom: ${name || 'Visitor'}\nEmail: ${email || 'Not specified'}`;

    const mailtoUri = `mailto:${personalProfile.email}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;

    window.location.href = mailtoUri;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative border-b border-[#E2E8F0]">
      {/* Subtle light-blue ambient background accent */}
      <div
        className="absolute inset-0 bg-radial-[at_top_right] from-blue-50/50 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider font-mono">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-[#0F172A] tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748B] leading-relaxed">
            I am interested in entry-level opportunities in SOC operations, cybersecurity analysis, network security, and defensive security. Feel free to connect to discuss my projects and cybersecurity interests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 shadow-xs">
              <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider font-semibold">
                Direct Email Inquiries
              </span>

              <div className="mt-3 flex items-center justify-between gap-3 p-4 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#2563EB]" />
                  </div>
                  <a
                    href={`mailto:${personalProfile.email}`}
                    className="text-sm font-semibold text-[#0F172A] hover:text-[#2563EB] truncate"
                  >
                    {personalProfile.email}
                  </a>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#F8FAFC] hover:bg-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer shrink-0 border border-[#E2E8F0]"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#059669]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copied && (
                <p className="text-xs text-emerald-700 mt-2 font-mono flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  Email copied to clipboard!
                </p>
              )}

              <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs text-[#64748B]">
                <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>Typical response window: within 24 hours</span>
              </div>
            </div>

            {/* Candidate Details & Online Profiles */}
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 shadow-xs space-y-4">
              <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider font-semibold">
                Location &amp; Professional Profiles
              </span>

              {/* Location */}
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E2E8F0]">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#059669]" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#64748B] block">Current Location</span>
                  <span className="text-sm font-semibold text-[#0F172A]">
                    {personalProfile.location}
                  </span>
                </div>
              </div>

              {/* LinkedIn */}
              <a
                href={personalProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-2xs transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#64748B] block">LinkedIn Profile</span>
                    <span className="text-sm font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                      linkedin.com/in/isha-sonaria
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-[#2563EB]" />
              </a>

              {/* GitHub */}
              <a
                href={personalProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#2563EB] hover:shadow-2xs transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#F1F5F9] flex items-center justify-center shrink-0">
                    <Github className="w-5 h-5 text-[#0F172A]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#64748B] block">GitHub Repositories</span>
                    <span className="text-sm font-semibold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                      github.com/ishasonaria568-prog
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-[#2563EB]" />
              </a>

              {/* TryHackMe */}
              <a
                href={personalProfile.tryhackme}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#EF4444] hover:shadow-2xs transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#64748B] block">TryHackMe Profile</span>
                    <span className="text-sm font-semibold text-[#0F172A] group-hover:text-[#DC2626] transition-colors">
                      tryhackme.com/p/CipherGhost24
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#94A3B8] group-hover:text-[#DC2626]" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Email Dispatch Helper */}
          <div className="lg:col-span-7">
            <div className="bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs">
              <div className="pb-4 border-b border-[#E2E8F0]">
                <h3 className="text-xl font-display font-bold text-[#0F172A]">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-[#64748B] mt-1">
                  Draft an inquiry below. Clicking send will open your default email program pre-addressed to Isha.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#334155] mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#334155] mb-1">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. SOC Analyst L1 Opportunity / Technical Discussion"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#334155] mb-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the opportunity, role requirements, or questions regarding my projects and certifications..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-sm text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="text-[11px] text-[#64748B]">
                    Opens system default mail application (<code className="font-mono text-[#0F172A]">mailto:</code>)
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all cursor-pointer shadow-xs"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via Email Client</span>
                  </button>
                </div>
              </form>

              {submitted && (
                <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Your email client should have opened with the drafted message. If it didn't, you can copy the address directly above or write to <strong>{personalProfile.email}</strong>.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
