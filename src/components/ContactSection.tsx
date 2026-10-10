import React, { useState } from 'react';
import { personalProfile } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  ExternalLink,
  Send,
  MessageSquare,
  Shield,
  Clock
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
    // Build mailto URI
    const mailtoUri = `mailto:${personalProfile.email}?subject=${encodeURIComponent(
      subject || `Cybersecurity Opportunity - Inquiry from ${name}`
    )}&body=${encodeURIComponent(
      `Hello Isha,\n\n${message}\n\nFrom: ${name} (${email})`
    )}`;
    window.location.href = mailtoUri;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 border-b border-[#231F3D] bg-[#0B0A14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider font-mono">
            Get In Touch
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight">
            Connect for SOC &amp; Cybersecurity Opportunities
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            I am actively seeking SOC Analyst L1, Blue Team, and Defensive Cybersecurity roles. Feel free to reach out directly via email or connect through my profiles below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="sec-card p-6 bg-[#121024]">
              <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider">
                Direct Email Inquiries
              </span>
              <div className="mt-3 flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#17142E] border border-[#231F3D]">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="w-5 h-5 text-[#8B5CF6] shrink-0" />
                  <a
                    href={`mailto:${personalProfile.email}`}
                    className="text-sm font-semibold text-[#F8FAFC] hover:text-[#8B5CF6] truncate"
                  >
                    {personalProfile.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#121024] hover:bg-[#201C3D] text-[#A1A1AA] hover:text-white transition-colors cursor-pointer shrink-0 border border-[#231F3D]"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#10B981]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {copied && (
                <p className="text-xs text-[#10B981] mt-2 font-mono flex items-center gap-1.5 animate-in fade-in">
                  <Check className="w-3.5 h-3.5" />
                  Email address copied to clipboard!
                </p>
              )}

              <div className="mt-4 pt-4 border-t border-[#231F3D] flex items-center gap-2 text-xs text-[#A1A1AA]">
                <Clock className="w-3.5 h-3.5 text-[#22D3EE]" />
                <span>Typical response window: within 24 hours</span>
              </div>
            </div>

            {/* Social & Verification Profiles */}
            <div className="sec-card p-6 bg-[#121024] space-y-3">
              <span className="text-xs font-mono text-[#A1A1AA] uppercase tracking-wider block">
                Professional &amp; Lab Profiles
              </span>

              {/* GitHub */}
              <a
                href={personalProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#17142E] border border-[#231F3D] hover:border-[#8B5CF6]/50 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#121024] flex items-center justify-center text-[#F8FAFC]">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-[#F8FAFC]">
                      GitHub Repositories
                    </span>
                    <span className="block text-xs text-[#A1A1AA]">
                      github.com/ishasonaria568-prog
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#71717A] group-hover:text-[#F8FAFC]" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalProfile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#17142E] border border-[#231F3D] hover:border-[#8B5CF6]/50 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#121024] flex items-center justify-center text-[#0EA5E9]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-[#F8FAFC]">
                      LinkedIn Profile
                    </span>
                    <span className="block text-xs text-[#A1A1AA]">
                      linkedin.com/in/isha-sonaria
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#71717A] group-hover:text-[#F8FAFC]" />
              </a>

              {/* TryHackMe */}
              <a
                href={personalProfile.tryhackme}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-[#17142E] border border-[#231F3D] hover:border-[#8B5CF6]/50 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#121024] flex items-center justify-center text-[#EF4444] font-mono font-bold text-xs">
                    THM
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-[#F8FAFC]">
                      TryHackMe Profile
                    </span>
                    <span className="block text-xs text-[#A1A1AA]">
                      CipherGhost24 · Top 2%
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#71717A] group-hover:text-[#F8FAFC]" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="sec-card p-6 sm:p-8 bg-[#121024]">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-5 h-5 text-[#8B5CF6]" />
                <h3 className="text-lg font-display font-bold text-[#F8FAFC]">
                  Send a Direct Message
                </h3>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-[#17142E] border border-[#10B981]/30 text-center space-y-3">
                  <Check className="w-8 h-8 text-[#10B981] mx-auto" />
                  <h4 className="text-base font-bold text-[#F8FAFC]">
                    Email Client Launched
                  </h4>
                  <p className="text-xs text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
                    If your email client did not open automatically, you can always write directly to <span className="text-[#F8FAFC] font-mono">{personalProfile.email}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 text-xs text-[#8B5CF6] hover:underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#A1A1AA] uppercase mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Recruiter or Team Lead"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0E0C1A] border border-[#231F3D] text-sm text-[#F8FAFC] focus:border-[#8B5CF6] focus:outline-none placeholder-[#71717A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#A1A1AA] uppercase mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0E0C1A] border border-[#231F3D] text-sm text-[#F8FAFC] focus:border-[#8B5CF6] focus:outline-none placeholder-[#71717A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A1A1AA] uppercase mb-1.5">
                      Subject / Role Title
                    </label>
                    <input
                      type="text"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. SOC Analyst L1 Opportunity / Security Inquiry"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0E0C1A] border border-[#231F3D] text-sm text-[#F8FAFC] focus:border-[#8B5CF6] focus:outline-none placeholder-[#71717A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#A1A1AA] uppercase mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your team, role scope, or security challenge..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0E0C1A] border border-[#231F3D] text-sm text-[#F8FAFC] focus:border-[#8B5CF6] focus:outline-none placeholder-[#71717A] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl text-sm font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-[#8B5CF6]/20"
                  >
                    <span>Send Message via Email</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
