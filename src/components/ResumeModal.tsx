import React, { useState, useEffect } from 'react';
import {
  X,
  Download,
  Copy,
  Check,
  FileText,
  ExternalLink,
  Eye,
  CheckCircle2,
  Award,
  GraduationCap,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { personalProfile, practicalExperiences, projectsData, certificationsList, educationData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'document' | 'pdf'>('document');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const resumeText = `ISHA SONARIA
SOC Analyst | Cybersecurity | Network Security | Ethical Hacking
Veraval, Gujarat, India | +91 7096495430 | ishasonaria568@gmail.com
LinkedIn: linkedin.com/in/isha-sonaria | GitHub: github.com/ishasonaria568-prog
TryHackMe: tryhackme.com/p/CipherGhost24

PROFESSIONAL SUMMARY
BCA graduate with an 8.30/10 CGPA and hands-on training in SOC operations, network security, ethical hacking, digital forensics, and vulnerability assessment. Experienced with Wazuh SIEM, Wireshark, Nmap, Burp Suite, Nuclei, Nikto, and Kali Linux for security monitoring, network analysis, reconnaissance, and incident triage. Top 2% TryHackMe practitioner with 100+ completed labs and practical experience building security tools, including an ML-based phishing URL detector, email header forensics analyzer, reconnaissance CLI, and PDF security tool. Seeking an entry-level SOC Analyst or Cybersecurity Analyst role to apply practical security skills in real-world environments.

TECHNICAL SKILLS
Networking & Security: TCP/IP, OSI Model, DNS, DHCP, HTTP/HTTPS, SSH, FTP, Subnetting, Port Scanning
SOC & Threat Defense: Wazuh SIEM, Alert Triage, Incident Response, Network Traffic Analysis, Digital Forensics, Email Forensics, VAPT, IOC Extraction, OSINT
Security Tools: Wireshark, Nmap, Burp Suite, Metasploit, SQLmap, Nikto, Nuclei, WPScan, Hydra, Kali Linux
Programming & Scripting: Python, Go, Bash, PowerShell, C, C++, Java, JavaScript, PHP

PRACTICAL SECURITY EXPERIENCE / TRAINING
SOC Operations Trainee — VRSecurity (Cyber Security Fundamentals Program)       Apr 2026 – Sep 2026
• Monitored security events in Wazuh SIEM; prioritized and escalated malicious network anomalies.
• Ran reconnaissance with Nmap, Nikto, Nuclei, and Wireshark to find exposed ports and vulnerable services.

Cybersecurity Lab Practitioner & CTF Competitor — TryHackMe                     Top 2% Globally
• Completed 100+ labs: SOC L1 alert triage, network exploitation, web security, Linux privilege escalation.
• Rank 1 in Bronze, Silver, Gold leagues; 20+ badges, 100+ day streak.

PROJECTS
PhishGuard ML | Python, FastAPI, scikit-learn, React, SQLite, Docker
GitHub: github.com/ishasonaria568-prog/phishguard-ml   Live: phishguard-ml-six.vercel.app
• Offline phishing URL detector using Random Forest and 16 static URL features.
• Classifies URLs as Safe, Suspicious, or Phishing; batch scans with CSV/JSON export and scan history.
• FastAPI + React app with SQLite storage and Docker support; no external API keys needed.

Email Header Forensics | Go, JavaScript, REST API
GitHub: github.com/ishasonaria568-prog/email-header-forensics   Live: email-header-forensics.vercel.app
• Go parser that extracts authentication records, sender domains, and mail-routing hops.
• Detects SPF, DKIM, DMARC failures and Reply-To mismatches; classifies IPv4/IPv6 hops.
• 0–100 risk score with JSON report export; works offline for local analysis.

SubScope | Python, Multithreading, CLI
GitHub: github.com/ishasonaria568-prog/SubScope
• Multithreaded CLI for subdomain enumeration, DNS resolution, and HTTP/HTTPS verification.
• CSV and terminal reports for attack-surface mapping.

PDF Fortress | Python, CLI, GUI
GitHub: github.com/ishasonaria568-prog/pdf-fortress   Live: pdf-fortress.vercel.app
• CLI and GUI tool for PDF security with password protection.
• Verifies output to confirm PDFs are protected correctly.

EDUCATION & CERTIFICATIONS
BCA — Bhakta Kavi Narsinh Mehta University | CGPA 8.30/10 | Sem 1 Rank 1                2023 – 2026
Cyber Security Fundamentals Program (CSFP) — VRSecurity | GRAND MASTER | ID-VRS-008     Sep 2026
Certified Cybersecurity Foundations (CORE) — Hackviser | HV-CORE-HO4ESOYZ               Jul 2026`;

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-white border border-[#E2E8F0] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Action Bar */}
        <div className="px-6 py-4 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#2563EB] shadow-2xs">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-display font-bold text-[#0F172A]">
                Candidate Resume Dossier
              </h2>
              <span className="text-xs text-[#64748B]">
                Isha Sonaria · SOC Analyst &amp; Defensive Cybersecurity
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Switcher */}
            <div className="hidden sm:flex items-center p-1 rounded-lg bg-white border border-[#E2E8F0] text-xs">
              <button
                onClick={() => setViewMode('document')}
                className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                  viewMode === 'document'
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                Structured Dossier
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                  viewMode === 'pdf'
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#0F172A]'
                }`}
              >
                PDF View
              </button>
            </div>

            {/* Direct PDF Download */}
            <a
              href="/Isha_Sonaria_Resume.pdf"
              download="Isha_Sonaria_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#64748B] hover:text-[#0F172A] hover:bg-[#E2E8F0] transition-colors cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {viewMode === 'pdf' ? (
            <div className="w-full h-[70vh] rounded-xl overflow-hidden border border-[#E2E8F0] bg-[#F8FAFC]">
              <iframe
                src="/Isha_Sonaria_Resume.pdf#view=FitH"
                title="Isha Sonaria Official Resume"
                className="w-full h-full border-none"
              />
            </div>
          ) : (
            <div className="space-y-6 text-[#0F172A]">
              {/* Header Details */}
              <div className="p-6 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h1 className="text-2xl font-display font-bold text-[#0F172A]">
                    {personalProfile.name}
                  </h1>
                  <span className="text-xs font-mono font-semibold text-[#2563EB] bg-[#EFF6FF] px-2.5 py-1 rounded border border-[#BFDBFE]">
                    Verified SOC Candidate
                  </span>
                </div>
                <h2 className="text-sm font-semibold text-[#2563EB]">
                  {personalProfile.headline}
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#64748B] pt-1">
                  <span>{personalProfile.location}</span>
                  <span>•</span>
                  <span>{personalProfile.email}</span>
                  <span>•</span>
                  <span>{personalProfile.phone}</span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono uppercase text-[#64748B] font-semibold tracking-wider">
                  Professional Summary
                </h3>
                <p className="text-sm text-[#334155] leading-relaxed p-4 rounded-xl bg-white border border-[#E2E8F0]">
                  {personalProfile.summary}
                </p>
              </div>

              {/* Experience */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase text-[#64748B] font-semibold tracking-wider flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#2563EB]" />
                  Practical Experience &amp; Training
                </h3>
                <div className="space-y-3">
                  {practicalExperiences.map((exp) => (
                    <div
                      key={exp.id}
                      className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-bold text-sm text-[#0F172A]">{exp.role}</div>
                          <div className="text-xs text-[#2563EB] font-medium">
                            {exp.organization} {exp.program && `· ${exp.program}`}
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[#64748B]">{exp.period}</span>
                      </div>
                      <ul className="space-y-1 text-xs text-[#475569] pt-1">
                        {exp.points.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#059669]">✓</span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono uppercase text-[#64748B] font-semibold tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#059669]" />
                  Defensive Engineering Projects
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projectsData.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5"
                    >
                      <div className="font-bold text-sm text-[#0F172A]">{proj.name}</div>
                      <p className="text-xs text-[#64748B]">{proj.description}</p>
                      <div className="text-[11px] font-mono text-[#2563EB] pt-1">
                        Tech: {proj.technologies.slice(0, 4).join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Certs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                  <span className="text-xs font-mono text-[#64748B] font-semibold uppercase block">
                    Education
                  </span>
                  <div className="font-bold text-sm text-[#0F172A]">{educationData.degree}</div>
                  <div className="text-xs text-[#475569]">{educationData.institution}</div>
                  <div className="text-xs text-emerald-700 font-semibold font-mono">
                    CGPA: {educationData.cgpa} {educationData.scale} · {educationData.academicHonor}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1.5">
                  <span className="text-xs font-mono text-[#64748B] font-semibold uppercase block">
                    Verified Certifications
                  </span>
                  <div className="text-xs text-[#0F172A] space-y-1">
                    {certificationsList.map((c) => (
                      <div key={c.id}>
                        <span className="font-semibold">{c.issuer}: </span>
                        <span>{c.title} ({c.credentialId})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="px-6 py-3.5 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between">
          <button
            onClick={handleCopyText}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] hover:bg-[#F1F5F9] transition-all cursor-pointer shadow-2xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#059669]" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#64748B]" />
                <span>Copy Plaintext Resume</span>
              </>
            )}
          </button>

          <a
            href="/Isha_Sonaria_Resume.pdf"
            download="Isha_Sonaria_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all cursor-pointer shadow-xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Official PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};
