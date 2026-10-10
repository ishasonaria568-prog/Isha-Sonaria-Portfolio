import React, { useState, useEffect } from 'react';
import {
  X,
  Download,
  Copy,
  Check,
  FileText,
  ExternalLink,
  Eye,
  FileCheck
} from 'lucide-react';

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
• Rank 1 in Bronze ,Silver ,Gold leagues; 20+ badges, 100+ day streak.

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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-4xl bg-[#121024] border border-[#2B254E] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="px-4 sm:px-6 py-3.5 bg-[#17142E] border-b border-[#231F3D] flex flex-wrap items-center justify-between gap-3 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/20 border border-[#8B5CF6]/40 flex items-center justify-center text-[#C4B5FD]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-display font-bold text-[#F8FAFC]">
                Isha Sonaria — Resume
              </h2>
              <span className="text-[11px] font-mono text-[#A1A1AA] hidden sm:inline">
                Verified 1-Page Cybersecurity &amp; SOC Resume (A4)
              </span>
            </div>
          </div>

          {/* View Toggle + Actions */}
          <div className="flex items-center gap-2">
            {/* View Switcher Tabs */}
            <div className="flex items-center bg-[#0B0A14] p-0.5 rounded-lg border border-[#231F3D] text-xs">
              <button
                onClick={() => setViewMode('document')}
                className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'document'
                    ? 'bg-[#1F1B3C] text-white font-medium shadow-sm'
                    : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Document</span>
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'pdf'
                    ? 'bg-[#1F1B3C] text-white font-medium shadow-sm'
                    : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                <FileCheck className="w-3.5 h-3.5" />
                <span>PDF Frame</span>
              </button>
            </div>

            {/* Direct PDF Download Button */}
            <a
              href="/Isha_Sonaria_Resume.pdf"
              download="Isha_Sonaria_Resume.pdf"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] flex items-center gap-1.5 transition-colors shadow-sm"
              title="Download official PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>

            {/* Open in New Window */}
            <a
              href="/Isha_Sonaria_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#231F3D] transition-colors border border-[#231F3D]"
              title="Open raw PDF in new browser tab"
              aria-label="Open PDF in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {/* Copy Text */}
            <button
              onClick={handleCopyText}
              className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#231F3D] transition-colors border border-[#231F3D] cursor-pointer"
              title="Copy resume text to clipboard"
              aria-label="Copy resume text"
            >
              {copied ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#A1A1AA] hover:text-white hover:bg-[#231F3D] transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-3 sm:p-6 overflow-y-auto bg-[#090812] flex justify-center items-start">
          {viewMode === 'pdf' ? (
            /* Direct PDF Frame View */
            <div className="w-full h-[78vh] rounded-lg overflow-hidden border border-[#231F3D] bg-white">
              <iframe
                src="/Isha_Sonaria_Resume.pdf#toolbar=1&navpanes=0"
                title="Isha Sonaria Official PDF Resume"
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            /* 1:1 Same-to-Same Document View matching the uploaded PDF screenshot */
            <div
              className="w-full max-w-[780px] bg-white text-black p-6 sm:p-10 shadow-2xl rounded-sm border border-gray-300 font-serif leading-[1.38] text-[12.5px] sm:text-[13px] select-text"
              style={{
                fontFamily: '"Times New Roman", Times, Georgia, serif',
              }}
            >
              {/* Header Title */}
              <div className="text-center pb-2">
                <h1 className="text-xl sm:text-2xl font-bold tracking-normal uppercase text-black font-serif">
                  ISHA SONARIA
                </h1>
                <p className="font-bold text-[12px] sm:text-[13px] text-black mt-1">
                  SOC Analyst | Cybersecurity | Network Security | Ethical Hacking
                </p>
                <p className="text-[11.5px] sm:text-[12px] text-black mt-1">
                  Veraval, Gujarat, India | +91 7096495430 |{' '}
                  <a href="mailto:ishasonaria568@gmail.com" className="text-blue-700 hover:underline">
                    ishasonaria568@gmail.com
                  </a>
                </p>
                <p className="text-[11.5px] sm:text-[12px] text-black mt-0.5">
                  LinkedIn:{' '}
                  <a
                    href="https://linkedin.com/in/isha-sonaria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    linkedin.com/in/isha-sonaria
                  </a>{' '}
                  | GitHub:{' '}
                  <a
                    href="https://github.com/ishasonaria568-prog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    github.com/ishasonaria568-prog
                  </a>
                </p>
                <p className="text-[11.5px] sm:text-[12px] text-black mt-0.5">
                  TryHackMe:{' '}
                  <a
                    href="https://tryhackme.com/p/CipherGhost24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline"
                  >
                    tryhackme.com/p/CipherGhost24
                  </a>
                </p>
              </div>

              {/* 1. PROFESSIONAL SUMMARY */}
              <div className="mt-3">
                <h2 className="font-bold text-[11.5px] sm:text-[12px] uppercase text-black tracking-wider">
                  PROFESSIONAL SUMMARY
                </h2>
                <div className="w-full h-[0.75px] bg-black mt-0.5 mb-1.5" />
                <p className="text-black text-justify text-[11.5px] sm:text-[12px] leading-relaxed">
                  BCA graduate with an 8.30/10 CGPA and hands-on training in SOC operations, network security, ethical hacking, digital forensics, and vulnerability assessment. Experienced with Wazuh SIEM, Wireshark, Nmap, Burp Suite, Nuclei, Nikto, and Kali Linux for security monitoring, network analysis, reconnaissance, and incident triage. Top 2% TryHackMe practitioner with 100+ completed labs and practical experience building security tools, including an ML-based phishing URL detector, email header forensics analyzer, reconnaissance CLI, and PDF security tool. Seeking an entry-level SOC Analyst or Cybersecurity Analyst role to apply practical security skills in real-world environments.
                </p>
              </div>

              {/* 2. TECHNICAL SKILLS */}
              <div className="mt-3">
                <h2 className="font-bold text-[11.5px] sm:text-[12px] uppercase text-black tracking-wider">
                  TECHNICAL SKILLS
                </h2>
                <div className="w-full h-[0.75px] bg-black mt-0.5 mb-1.5" />
                <div className="space-y-0.5 text-[11.5px] sm:text-[12px]">
                  <p>
                    <span className="font-bold">Networking &amp; Security: </span>
                    TCP/IP, OSI Model, DNS, DHCP, HTTP/HTTPS, SSH, FTP, Subnetting, Port Scanning
                  </p>
                  <p>
                    <span className="font-bold">SOC &amp; Threat Defense: </span>
                    Wazuh SIEM, Alert Triage, Incident Response, Network Traffic Analysis, Digital Forensics, Email Forensics, VAPT, IOC Extraction, OSINT
                  </p>
                  <p>
                    <span className="font-bold">Security Tools: </span>
                    Wireshark, Nmap, Burp Suite, Metasploit, SQLmap, Nikto, Nuclei, WPScan, Hydra, Kali Linux
                  </p>
                  <p>
                    <span className="font-bold">Programming &amp; Scripting: </span>
                    Python, Go, Bash, PowerShell, C, C++, Java, JavaScript, PHP
                  </p>
                </div>
              </div>

              {/* 3. PRACTICAL SECURITY EXPERIENCE / TRAINING */}
              <div className="mt-3">
                <h2 className="font-bold text-[11.5px] sm:text-[12px] uppercase text-black tracking-wider">
                  PRACTICAL SECURITY EXPERIENCE / TRAINING
                </h2>
                <div className="w-full h-[0.75px] bg-black mt-0.5 mb-1.5" />
                
                {/* Exp 1 */}
                <div className="mb-2 text-[11.5px] sm:text-[12px]">
                  <div className="flex justify-between items-baseline font-bold">
                    <span>SOC Operations Trainee — VRSecurity (Cyber Security Fundamentals Program)</span>
                    <span className="font-normal text-right">Apr 2026 – Sep 2026</span>
                  </div>
                  <ul className="list-disc ml-5 space-y-0.5 mt-0.5">
                    <li>Monitored security events in Wazuh SIEM; prioritized and escalated malicious network anomalies.</li>
                    <li>Ran reconnaissance with Nmap, Nikto, Nuclei, and Wireshark to find exposed ports and vulnerable services.</li>
                  </ul>
                </div>

                {/* Exp 2 */}
                <div className="text-[11.5px] sm:text-[12px]">
                  <div className="flex justify-between items-baseline font-bold">
                    <span>Cybersecurity Lab Practitioner &amp; CTF Competitor — TryHackMe</span>
                    <span className="font-bold text-right">Top 2% Globally</span>
                  </div>
                  <ul className="list-disc ml-5 space-y-0.5 mt-0.5">
                    <li>Completed 100+ labs: SOC L1 alert triage, network exploitation, web security, Linux privilege escalation.</li>
                    <li>Rank 1 in Bronze ,Silver ,Gold leagues; 20+ badges, 100+ day streak.</li>
                  </ul>
                </div>
              </div>

              {/* 4. PROJECTS */}
              <div className="mt-3">
                <h2 className="font-bold text-[11.5px] sm:text-[12px] uppercase text-black tracking-wider">
                  PROJECTS
                </h2>
                <div className="w-full h-[0.75px] bg-black mt-0.5 mb-1.5" />

                {/* Project 1: PhishGuard */}
                <div className="mb-2 text-[11.5px] sm:text-[12px]">
                  <p className="font-bold">
                    PhishGuard ML <span className="font-normal">| Python, FastAPI, scikit-learn, React, SQLite, Docker</span>
                  </p>
                  <p className="text-[11px] sm:text-[11.5px] mt-0.5">
                    GitHub:{' '}
                    <a
                      href="https://github.com/ishasonaria568-prog/phishguard-ml"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      github.com/ishasonaria568-prog/phishguard-ml
                    </a>{' '}
                    &nbsp;&nbsp;Live:{' '}
                    <a
                      href="https://phishguard-ml-six.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      phishguard-ml-six.vercel.app
                    </a>
                  </p>
                  <ul className="list-disc ml-5 space-y-0.5 mt-0.5">
                    <li>Offline phishing URL detector using Random Forest and 16 static URL features.</li>
                    <li>Classifies URLs as Safe, Suspicious, or Phishing; batch scans with CSV/JSON export and scan history.</li>
                    <li>FastAPI + React app with SQLite storage and Docker support; no external API keys needed.</li>
                  </ul>
                </div>

                {/* Project 2: Email Header Forensics */}
                <div className="mb-2 text-[11.5px] sm:text-[12px]">
                  <p className="font-bold">
                    Email Header Forensics <span className="font-normal">| Go, JavaScript, REST API</span>
                  </p>
                  <p className="text-[11px] sm:text-[11.5px] mt-0.5">
                    GitHub:{' '}
                    <a
                      href="https://github.com/ishasonaria568-prog/email-header-forensics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      github.com/ishasonaria568-prog/email-header-forensics
                    </a>{' '}
                    &nbsp;&nbsp;Live:{' '}
                    <a
                      href="https://email-header-forensics.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      email-header-forensics.vercel.app
                    </a>
                  </p>
                  <ul className="list-disc ml-5 space-y-0.5 mt-0.5">
                    <li>Go parser that extracts authentication records, sender domains, and mail-routing hops.</li>
                    <li>Detects SPF, DKIM, DMARC failures and Reply-To mismatches; classifies IPv4/IPv6 hops.</li>
                    <li>0–100 risk score with JSON report export; works offline for local analysis.</li>
                  </ul>
                </div>

                {/* Project 3: SubScope */}
                <div className="mb-2 text-[11.5px] sm:text-[12px]">
                  <p className="font-bold">
                    SubScope <span className="font-normal">| Python, Multithreading, CLI</span>
                  </p>
                  <p className="text-[11px] sm:text-[11.5px] mt-0.5">
                    GitHub:{' '}
                    <a
                      href="https://github.com/ishasonaria568-prog/SubScope"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      github.com/ishasonaria568-prog/SubScope
                    </a>
                  </p>
                  <ul className="list-disc ml-5 space-y-0.5 mt-0.5">
                    <li>Multithreaded CLI for subdomain enumeration, DNS resolution, and HTTP/HTTPS verification.</li>
                    <li>CSV and terminal reports for attack-surface mapping.</li>
                  </ul>
                </div>

                {/* Project 4: PDF Fortress */}
                <div className="text-[11.5px] sm:text-[12px]">
                  <p className="font-bold">
                    PDF Fortress <span className="font-normal">| Python, CLI, GUI</span>
                  </p>
                  <p className="text-[11px] sm:text-[11.5px] mt-0.5">
                    GitHub:{' '}
                    <a
                      href="https://github.com/ishasonaria568-prog/pdf-fortress"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      github.com/ishasonaria568-prog/pdf-fortress
                    </a>{' '}
                    &nbsp;&nbsp;Live:{' '}
                    <a
                      href="https://pdf-fortress.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:underline"
                    >
                      pdf-fortress.vercel.app
                    </a>
                  </p>
                  <ul className="list-disc ml-5 space-y-0.5 mt-0.5">
                    <li>CLI and GUI tool for PDF security with password protection.</li>
                    <li>Verifies output to confirm PDFs are protected correctly.</li>
                  </ul>
                </div>
              </div>

              {/* 5. EDUCATION & CERTIFICATIONS */}
              <div className="mt-3">
                <h2 className="font-bold text-[11.5px] sm:text-[12px] uppercase text-black tracking-wider">
                  EDUCATION &amp; CERTIFICATIONS
                </h2>
                <div className="w-full h-[0.75px] bg-black mt-0.5 mb-1.5" />
                <div className="space-y-1 text-[11.5px] sm:text-[12px]">
                  <div className="flex justify-between items-baseline font-bold">
                    <span>
                      BCA — Bhakta Kavi Narsinh Mehta University | CGPA 8.30/10 | Sem 1 Rank 1
                    </span>
                    <span className="font-normal text-right">2023 – 2026</span>
                  </div>
                  <div className="flex justify-between items-baseline font-bold">
                    <span>
                      Cyber Security Fundamentals Program (CSFP) — VRSecurity | GRAND MASTER | ID-VRS-008
                    </span>
                    <span className="font-normal text-right">Sep 2026</span>
                  </div>
                  <div className="flex justify-between items-baseline font-bold">
                    <span>
                      Certified Cybersecurity Foundations (CORE) — Hackviser | HV-CORE-HO4ESOYZ
                    </span>
                    <span className="font-normal text-right">Jul 2026</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
