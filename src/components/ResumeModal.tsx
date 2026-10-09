import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import { personalProfile, educationData, certificationData, projectsData, tryHackMeMetrics } from '../data/portfolioData';
import { X, Download, Copy, Check, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const generatePDF = () => {
    setDownloading(true);
    try {
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pageWidth = doc.internal.pageSize.getWidth();
      const margin = 14;
      const contentWidth = pageWidth - margin * 2;
      let y = 14;

      // Header Name
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.setTextColor(20, 24, 33);
      doc.text(personalProfile.name, pageWidth / 2, y, { align: 'center' });
      y += 5.5;

      // Subtitle
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(30, 41, 59);
      doc.text('Networking | Cybersecurity | SOC | Ethical Hacking', pageWidth / 2, y, { align: 'center' });
      y += 4.5;

      // Contact info line
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.2);
      doc.setTextColor(71, 85, 105);
      doc.text(
        'Veraval, Gujarat, India  •  +91 7096495430  •  ishasonaria568@gmail.com',
        pageWidth / 2,
        y,
        { align: 'center' }
      );
      y += 3.8;

      doc.text(
        `LinkedIn: linkedin.com/in/isha-sonaria  •  GitHub: github.com/ishasonaria568-prog  •  TryHackMe: tryhackme.com/p/CipherGhost24`,
        pageWidth / 2,
        y,
        { align: 'center' }
      );
      y += 5.5;

      const addSectionHeader = (title: string) => {
        if (y > 260) {
          doc.addPage();
          y = 14;
        }
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9.5);
        doc.setTextColor(15, 23, 42);
        doc.text(title, margin, y);
        y += 1.8;
        doc.setDrawColor(20, 24, 33);
        doc.setLineWidth(0.5);
        doc.line(margin, y, margin + contentWidth, y);
        y += 3.8;
      };

      // Professional Summary
      addSectionHeader('PROFESSIONAL SUMMARY');
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.2);
      doc.setTextColor(30, 41, 59);
      const summaryLines = doc.splitTextToSize(personalProfile.summary, contentWidth);
      doc.text(summaryLines, margin, y);
      y += summaryLines.length * 3.6 + 3.2;

      // Technical Skills
      addSectionHeader('TECHNICAL SKILLS');
      const skillGroups = [
        {
          label: '• Networking & Protocols: ',
          text: 'TCP/IP Suite, OSI Model, Subnetting (IPv4/IPv6), Packet Inspection (Wireshark), DNS, DHCP, HTTP/HTTPS, SSH, FTP, Port Scanning, Routing & Switching fundamentals.',
        },
        {
          label: '• SOC & Threat Defense: ',
          text: 'Network Traffic Analysis, SIEM Log Monitoring (Wazuh), Incident Response, Email Forensics, Vulnerability Assessment (VAPT), OSINT, Steganography, Basic Malware Triage.',
        },
        {
          label: '• Security & Network Tools: ',
          text: 'Wireshark, Nmap, Burp Suite, Metasploit, SQLmap, Nikto, Nuclei, WPScan, Hydra, Exiftool, Steghide, Kali Linux CLI.',
        },
        {
          label: '• Programming & Databases: ',
          text: 'Python, Go (Golang), C, C++, Java, JavaScript, PHP, SQL (MySQL, SQLite), PowerShell, Bash Scripting, HTML5/CSS3.',
        },
      ];

      for (const sg of skillGroups) {
        if (y > 270) {
          doc.addPage();
          y = 14;
        }
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8);
        doc.setTextColor(15, 23, 42);
        doc.text(sg.label, margin, y);
        const labelWidth = doc.getTextWidth(sg.label);

        doc.setFont('helvetica', 'normal');
        doc.setTextColor(51, 65, 85);
        const textLines = doc.splitTextToSize(sg.text, contentWidth - labelWidth);
        doc.text(textLines, margin + labelWidth, y);
        y += textLines.length * 3.4 + 1.2;
      }
      y += 2.5;

      // Practical Security Projects
      addSectionHeader('PRACTICAL SECURITY ENGINEERING PROJECTS');
      for (const proj of projectsData) {
        if (y > 260) {
          doc.addPage();
          y = 14;
        }
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(8.5);
        doc.setTextColor(15, 23, 42);
        doc.text(`${proj.name} — ${proj.tagline}`, margin, y);
        y += 3.5;

        doc.setFont('helvetica', 'normal');
        doc.setFontSize(7.8);
        doc.setTextColor(51, 65, 85);
        const descLines = doc.splitTextToSize(
          `• Architecture: ${proj.whatIBuilt} Tech Stack: ${proj.technologies.join(', ')}.`,
          contentWidth
        );
        doc.text(descLines, margin, y);
        y += descLines.length * 3.3 + 2;
      }

      // Certifications & Labs
      addSectionHeader('VERIFIED CERTIFICATIONS & LAB TELEMETRY');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.2);
      doc.setTextColor(15, 23, 42);
      doc.text(
        `• ${certificationData.title} — ${certificationData.issuer} (ID: ${certificationData.credentialId})`,
        margin,
        y
      );
      y += 3.8;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.8);
      doc.setTextColor(51, 65, 85);
      doc.text(
        `• TryHackMe: ${tryHackMeMetrics.roomsCompleted} Rooms Completed | ${tryHackMeMetrics.globalRankPercent} Globally | 1st Place Bronze, Silver & Gold Leagues | 105-Day Active Streak.`,
        margin,
        y
      );
      y += 5.5;

      // Education
      addSectionHeader('EDUCATION');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.2);
      doc.setTextColor(15, 23, 42);
      doc.text(
        `${educationData.degree} — ${educationData.institution}`,
        margin,
        y
      );
      y += 3.6;
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.8);
      doc.setTextColor(51, 65, 85);
      doc.text(
        `Period: ${educationData.period} | CGPA: ${educationData.cgpa}/10.0 | Honors: ${educationData.achievement}`,
        margin,
        y
      );

      doc.save('Isha_Sonaria_Cybersecurity_Resume.pdf');
    } catch (err) {
      console.error('PDF export error:', err);
    } finally {
      setTimeout(() => setDownloading(false), 800);
    }
  };

  const handleCopyText = () => {
    const resumeText = `ISHA SONARIA
Networking | Cybersecurity | SOC | Ethical Hacking
Veraval, Gujarat, India • +91 7096495430 • ishasonaria568@gmail.com
LinkedIn: ${personalProfile.links.linkedin} • GitHub: ${personalProfile.links.github} • TryHackMe: ${personalProfile.links.tryhackme}

PROFESSIONAL SUMMARY:
${personalProfile.summary}

TECHNICAL SKILLS:
• Networking & Protocols: TCP/IP Suite, OSI Model, Subnetting (IPv4/IPv6), Packet Inspection (Wireshark), DNS, DHCP, HTTP/HTTPS, SSH, FTP, Port Scanning, Routing & Switching.
• SOC & Threat Defense: Network Traffic Analysis, SIEM Log Monitoring (Wazuh), Incident Response, Email Forensics, Vulnerability Assessment (VAPT), OSINT, Steganography, Basic Malware Triage.
• Security & Network Tools: Wireshark, Nmap, Burp Suite, Metasploit, SQLmap, Nikto, Nuclei, WPScan, Hydra, Exiftool, Steghide, Kali Linux CLI.
• Programming: Python, Go (Golang), C, C++, Java, JavaScript, PHP, SQL, Bash.

CERTIFICATIONS & MILESTONES:
• ${certificationData.title} - ${certificationData.issuer} (ID: ${certificationData.credentialId})
• TryHackMe: ${tryHackMeMetrics.roomsCompleted} Rooms Completed | Global Rank: ${tryHackMeMetrics.globalRankPercent} | ${tryHackMeMetrics.currentStreakDays}-Day Streak | 1st Place Bronze, Silver, Gold Leagues.

EDUCATION:
• ${educationData.degree} - ${educationData.institution} (${educationData.period})
  CGPA: ${educationData.cgpa} / 10.0 | ${educationData.achievement}
`;
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#17152A] border border-[#2A2640] rounded-xl shadow-2xl shadow-black/95 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Action Bar */}
        <div className="px-5 py-3.5 bg-[#121020] border-b border-[#2A2640] flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#22D3EE]" />
            <span className="text-xs font-mono font-bold text-[#F5F3FF]">
              ISHA_SONARIA_RESUME // OFFICIAL_DOSSIER
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={generatePDF}
              disabled={downloading}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-semibold bg-[#38BDF8] hover:bg-[#0284C7] text-[#F5F3FF] transition-all cursor-pointer shadow-sm active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloading ? 'GENERATING PDF...' : 'DOWNLOAD OFFICIAL PDF'}</span>
            </button>

            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono border border-[#2A2640] hover:border-[#22D3EE] text-[#A9A5BD] hover:text-[#F5F3FF] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#34D399]" />
                  <span className="text-[#34D399]">COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>COPY TEXT</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-[#1f1d38] text-[#A9A5BD] hover:text-[#F5F3FF] transition-colors cursor-pointer ml-2"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-[#0F0E1C] text-[#E2E8F0] space-y-6 text-sm font-sans">
          {/* Header */}
          <div className="text-center border-b border-[#2A2640] pb-5 space-y-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold font-mono text-[#F5F3FF] tracking-tight">
              {personalProfile.name}
            </h1>
            <p className="text-xs sm:text-sm font-mono text-[#22D3EE] font-semibold">
              Networking | Cybersecurity | SOC | Ethical Hacking
            </p>
            <p className="text-xs text-[#94A3B8] font-mono">
              Veraval, Gujarat, India • +91 7096495430 • {personalProfile.links.email}
            </p>
            <p className="text-xs text-[#94A3B8] font-mono pt-0.5">
              LinkedIn: /in/isha-sonaria • GitHub: /ishasonaria568-prog • TryHackMe: /p/CipherGhost24
            </p>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#7DD3FC] font-bold border-b border-[#2A2640] pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              {personalProfile.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#7DD3FC] font-bold border-b border-[#2A2640] pb-1">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs text-[#CBD5E1]">
              <p>
                <strong className="text-[#F5F3FF] font-mono">• Networking &amp; Protocols:</strong> TCP/IP Suite, OSI Model, Subnetting (IPv4/IPv6), Packet Inspection (Wireshark), DNS, DHCP, HTTP/HTTPS, SSH, FTP, Port Scanning, Routing &amp; Switching fundamentals.
              </p>
              <p>
                <strong className="text-[#F5F3FF] font-mono">• SOC &amp; Threat Defense:</strong> Network Traffic Analysis, SIEM Log Monitoring (Wazuh), Incident Response, Email Forensics, Vulnerability Assessment (VAPT), OSINT, Steganography, Basic Malware Triage.
              </p>
              <p>
                <strong className="text-[#F5F3FF] font-mono">• Security &amp; Network Tools:</strong> Wireshark, Nmap, Burp Suite, Metasploit, SQLmap, Nikto, Nuclei, WPScan, Hydra, Exiftool, Steghide, Kali Linux CLI.
              </p>
              <p>
                <strong className="text-[#F5F3FF] font-mono">• Programming &amp; Databases:</strong> Python, Go (Golang), C, C++, Java, JavaScript, PHP, SQL (MySQL, SQLite), PowerShell, Bash Scripting, HTML5/CSS3.
              </p>
            </div>
          </div>

          {/* Practical Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#7DD3FC] font-bold border-b border-[#2A2640] pb-1">
              SECURITY PROJECTS &amp; DEFENSIVE TOOLING
            </h2>
            {projectsData.map((p) => (
              <div key={p.projectNumber} className="space-y-1 text-xs">
                <div className="flex flex-wrap items-center justify-between font-mono">
                  <span className="font-bold text-[#F5F3FF]">{p.name} — {p.tagline}</span>
                  <span className="text-[#22D3EE]">{p.category}</span>
                </div>
                <p className="text-[#94A3B8]">{p.whatIBuilt}</p>
                <p className="text-[#7DD3FC] font-mono text-[11px]">
                  Stack: {p.technologies.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications & Badges */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#7DD3FC] font-bold border-b border-[#2A2640] pb-1">
              VERIFIED CERTIFICATIONS &amp; PLATFORM TELEMETRY
            </h2>
            <div className="space-y-1.5 text-xs text-[#CBD5E1]">
              <p>
                <strong className="text-[#F5F3FF] font-mono">• {certificationData.title}:</strong> Issued by {certificationData.issuer} (Credential ID: {certificationData.credentialId}) — Verified active foundations in network defense and threat vectors.
              </p>
              <p>
                <strong className="text-[#F5F3FF] font-mono">• TryHackMe Top 2% Practitioner:</strong> {tryHackMeMetrics.roomsCompleted} Rooms Completed | {tryHackMeMetrics.currentStreakDays}-Day Continuous Daily Practice Streak | 1st Place Champion in Bronze, Silver, and Gold Competitive Leagues.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono uppercase tracking-wider text-[#7DD3FC] font-bold border-b border-[#2A2640] pb-1">
              FORMAL EDUCATION
            </h2>
            <div className="flex flex-wrap items-center justify-between text-xs font-mono">
              <span className="font-bold text-[#F5F3FF]">{educationData.degree}</span>
              <span className="text-[#94A3B8]">{educationData.period}</span>
            </div>
            <p className="text-xs text-[#94A3B8]">
              {educationData.institution} • {educationData.location}
            </p>
            <p className="text-xs text-[#34D399] font-mono">
              Cumulative CGPA: {educationData.cgpa} / 10.0 • {educationData.achievement}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
