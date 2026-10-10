import React, { useState } from 'react';
import { projectsData, ProjectItem } from '../data/portfolioData';
import {
  ExternalLink,
  Github,
  Layers,
  Shield,
  FileCode,
  CheckCircle2,
  Terminal,
  Lock,
  Mail,
  Activity,
  Cpu,
  ArrowUpRight,
  Info
} from 'lucide-react';
import { ProjectCaseModal } from './ProjectCaseModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Render project-specific clean CSS illustration / terminal preview
  const renderProjectVisual = (project: ProjectItem) => {
    switch (project.id) {
      case 'phishguard-ml':
        return (
          <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] p-4 font-mono text-xs select-none">
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] text-[11px] text-[#64748B]">
              <span className="flex items-center gap-1.5 font-semibold text-[#0F172A]">
                <Activity className="w-3.5 h-3.5 text-[#2563EB]" />
                PhishGuard ML · URL Analyzer
              </span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                100% Offline
              </span>
            </div>
            <div className="mt-2.5 space-y-1.5 text-[11px]">
              <div className="p-2 rounded bg-white border border-[#E2E8F0] text-[#0F172A] truncate">
                <span className="text-[#64748B]">Target URL: </span>
                https://login-verify-account.bank-update.xyz/auth
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[#64748B]">Classification:</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-50 text-red-700 border border-red-200">
                  Suspicious / Phishing (Score: 84/100)
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1 text-[10px] text-[#64748B]">
                <span className="bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">
                  16 Static Features
                </span>
                <span className="bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">
                  Entropy 4.82
                </span>
                <span className="bg-white px-2 py-0.5 rounded border border-[#E2E8F0]">
                  Random Forest
                </span>
              </div>
            </div>
          </div>
        );

      case 'email-header-forensics':
        return (
          <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] p-4 font-mono text-xs select-none">
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] text-[11px] text-[#64748B]">
              <span className="flex items-center gap-1.5 font-semibold text-[#0F172A]">
                <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                Email Forensics · MTA Routing
              </span>
              <span className="text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                Go Core Parser
              </span>
            </div>
            <div className="mt-2.5 space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between p-1.5 rounded bg-white border border-[#E2E8F0]">
                <span className="text-[#0F172A]">Hop 1: mail.origin-mta.com</span>
                <span className="text-emerald-700 font-semibold text-[10px]">SPF: PASS</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-white border border-[#E2E8F0]">
                <span className="text-[#0F172A]">Hop 2: mx.destination.corp</span>
                <span className="text-emerald-700 font-semibold text-[10px]">DKIM: PASS</span>
              </div>
              <div className="flex items-center justify-between pt-1 text-[10px]">
                <span className="text-[#64748B]">Authentication Verdict:</span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  DMARC Pass · Risk 12/100 (Safe)
                </span>
              </div>
            </div>
          </div>
        );

      case 'subscope':
        return (
          <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] p-4 font-mono text-xs select-none">
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] text-[11px] text-[#64748B]">
              <span className="flex items-center gap-1.5 font-semibold text-[#0F172A]">
                <Terminal className="w-3.5 h-3.5 text-[#2563EB]" />
                SubScope CLI · Surface Recon
              </span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Multithreaded
              </span>
            </div>
            <div className="mt-2.5 p-2 rounded bg-white border border-[#E2E8F0] space-y-1 text-[11px] text-[#0F172A]">
              <p className="text-[#64748B]">$ subscope scan -d target-domain.org -t 20</p>
              <p className="text-emerald-700 font-semibold">
                [+] Resolving DNS records with wildcard filter...
              </p>
              <p className="text-[#0F172A]">
                [✓] Active Host: api.target-domain.org (HTTP 200)
              </p>
              <p className="text-[#2563EB] text-[10px]">
                [✓] Exported: subscope_report.csv &amp; terminal table
              </p>
            </div>
          </div>
        );

      case 'pdf-fortress':
        return (
          <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] p-4 font-mono text-xs select-none">
            <div className="flex items-center justify-between pb-2 border-b border-[#E2E8F0] text-[11px] text-[#64748B]">
              <span className="flex items-center gap-1.5 font-semibold text-[#0F172A]">
                <Lock className="w-3.5 h-3.5 text-[#059669]" />
                PDF Fortress · Vault &amp; Stream Audit
              </span>
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                AES-256 Bit
              </span>
            </div>
            <div className="mt-2.5 space-y-1.5 text-[11px]">
              <div className="flex items-center justify-between p-1.5 rounded bg-white border border-[#E2E8F0]">
                <span className="text-[#0F172A]">Document: Security_Brief.pdf</span>
                <span className="text-emerald-700 font-semibold text-[10px]">Encrypted</span>
              </div>
              <div className="flex items-center justify-between p-1.5 rounded bg-white border border-[#E2E8F0]">
                <span className="text-[#0F172A]">EXIF &amp; Author Metadata</span>
                <span className="text-emerald-700 font-semibold text-[10px]">Scrubbed</span>
              </div>
              <div className="flex items-center justify-between pt-1 text-[10px]">
                <span className="text-[#64748B]">Malicious Stream Audit:</span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  /JavaScript &amp; /Launch Clean
                </span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider font-mono">
              Defensive Engineering
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-[#0F172A] tracking-tight">
              Featured Security Projects
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#64748B] max-w-2xl leading-relaxed">
              Practical open-source defensive security tools engineered for phishing detection, transport forensic analysis, automated surface mapping, and cryptographic document protection.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#64748B]">
            <span>Verified Repositories:</span>
            <a
              href="https://github.com/ishasonaria568-prog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] hover:underline flex items-center gap-1 font-semibold"
            >
              github.com/ishasonaria568-prog
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 4 Visually Consistent Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Visual CSS Illustration / Terminal Preview */}
                {renderProjectVisual(project)}

                {/* Card Content Area */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-mono font-semibold text-[#2563EB] uppercase tracking-wider block">
                        {project.category}
                      </span>
                      <h3 className="mt-1 text-xl font-display font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs text-[#64748B] font-medium mt-0.5">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Concise Description */}
                  <p className="mt-3.5 text-sm text-[#475569] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-[#F1F5F9] text-[#334155] border border-[#E2E8F0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  <div className="mt-5 pt-4 border-t border-[#E2E8F0] space-y-2">
                    {project.keyHighlights.slice(0, 3).map((hl, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-[#475569]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] hover:bg-[#F1F5F9] hover:border-[#CBD5E1] transition-all shadow-2xs"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all shadow-2xs"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] hover:underline cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Case Study</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Case Study Modal */}
      <ProjectCaseModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
