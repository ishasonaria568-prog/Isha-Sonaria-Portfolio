import React, { useState } from 'react';
import { projectsData, ProjectItem } from '../data/portfolioData';
import { ProjectCaseModal } from './ProjectCaseModal';
import {
  ExternalLink,
  Github,
  Play,
  RotateCcw,
  ArrowRight,
  ShieldAlert,
  Terminal,
  Layers,
  FileText,
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [subscopeRunning, setSubscopeRunning] = useState(false);
  const [subscopeLogs, setSubscopeLogs] = useState<string[]>([]);

  const filterCategories = [
    { label: 'All Projects (5)', value: 'ALL' },
    { label: 'Machine Learning', value: 'Machine Learning' },
    { label: 'Digital Forensics', value: 'Forensics' },
    { label: 'Reconnaissance', value: 'Reconnaissance' },
    { label: 'Secure Web', value: 'Secure Web' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedFilter === 'ALL') return true;
    return project.category.toLowerCase().includes(selectedFilter.toLowerCase());
  });

  const leadProject = projectsData[0]; // PhishGuard
  const secondaryProjects = filteredProjects.filter((p) => p.projectNumber !== '01');

  const handleRunSubscope = () => {
    setSubscopeRunning(true);
    setSubscopeLogs(['[INIT] SubScope v1.2 concurrent resolver starting...']);

    const steps = [
      '[DNS] Resolving target: enterprise-network.lab (threads: 16)',
      '[+] [HTTP 200] api.enterprise-network.lab -> 104.21.32.18',
      '[!] [HTTP 404] dev.enterprise-network.lab -> CNAME s3.aws.com [TAKEOVER RISK]',
      '[+] [HTTP 403] admin-portal.enterprise-network.lab -> Internal IP',
      '[DONE] Scanned 2,400 permutations: 3 live hosts identified | JSON exported',
    ];

    steps.forEach((log, index) => {
      setTimeout(() => {
        setSubscopeLogs((prev) => [...prev, log]);
        if (index === steps.length - 1) {
          setSubscopeRunning(false);
        }
      }, (index + 1) * 350);
    });
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#dfe3e8] dark:border-[#1e293b] transition-colors"
      aria-labelledby="projects-title"
    >
      {/* Section Header (matching pw.is section-head) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#dfe3e8] dark:border-[#1e293b]">
        <div>
          <p className="text-xs font-mono font-bold tracking-wider text-[#ff5a36] uppercase mb-2">
            Investigation Series // Defensive Systems
          </p>
          <h2
            id="projects-title"
            className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#0c1620] dark:text-white font-serif-pw leading-tight"
          >
            5 Defensive Projects. One Mindset.
          </h2>
          <p className="text-base sm:text-lg text-[#3b4754] dark:text-[#94a3b8] max-w-2xl mt-2 leading-relaxed">
            How adversaries think, and how blue teams construct resilient telemetry, air-gapped machine learning, and automated verification.
          </p>
        </div>

        {/* Filter Pills (matching pw.is chips) */}
        <div className="flex flex-wrap gap-1.5 self-start md:self-end">
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedFilter(cat.value)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedFilter === cat.value
                  ? 'bg-[#12355b] text-white dark:bg-[#0284c7] shadow-sm'
                  : 'bg-[#f4f5f7] dark:bg-[#1e293b] text-[#3b4754] dark:text-[#94a3b8] hover:text-[#0c1620] dark:hover:text-white border border-[#dfe3e8] dark:border-[#334155]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Lead Project (matching pw.is series-card is-lead) */}
      {(selectedFilter === 'ALL' || selectedFilter === 'Machine Learning') && (
        <div className="mb-10">
          <div className="pw-card p-6 sm:p-8 md:p-10 bg-[#ffffff] dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b] hover:border-[#12355b] dark:hover:border-[#0284c7] transition-all">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="space-y-4 max-w-3xl">
                {/* Meta Bar */}
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#ff5a36]/10 text-[#ff5a36] font-semibold">
                    FEATURED LEAD STUDY // CASE 01
                  </span>
                  <span className="text-[#6b7785] dark:text-[#94a3b8]">
                    March 2026 Release
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-normal text-[#0c1620] dark:text-white font-serif-pw leading-tight">
                  {leadProject.name}: {leadProject.tagline}
                </h3>

                <p className="text-sm sm:text-base text-[#3b4754] dark:text-[#94a3b8] leading-relaxed">
                  {leadProject.description} Designed to eliminate DNS query leakage by extracting 16 static lexical markers and classifying zero-hour phishing campaigns in sub-15ms without external API dependencies.
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {leadProject.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#f4f5f7] dark:bg-[#1e293b] text-[#12355b] dark:text-[#38bdf8] border border-[#dfe3e8] dark:border-[#334155]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions & Live Links */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 lg:min-w-[200px]">
                <button
                  onClick={() => setActiveModalProject(leadProject)}
                  className="px-4 py-2.5 rounded-full text-xs font-semibold bg-[#12355b] hover:bg-[#0b2644] text-white dark:bg-[#0284c7] dark:hover:bg-[#0369a1] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open Full Case Study</span>
                </button>

                {leadProject.liveUrl && (
                  <a
                    href={leadProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full text-xs font-semibold border border-[#dfe3e8] dark:border-[#334155] text-[#0c1620] dark:text-white hover:bg-[#f4f5f7] dark:hover:bg-[#1e293b] transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <span>Live Web Demo</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#ff5a36]" />
                  </a>
                )}

                <a
                  href={leadProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-full text-xs font-mono text-[#6b7785] dark:text-[#94a3b8] hover:text-[#0c1620] dark:hover:text-white hover:bg-[#f4f5f7] dark:hover:bg-[#1e293b] transition-all flex items-center justify-center gap-1.5"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Other Projects (matching pw.is series-grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {secondaryProjects.map((project) => (
          <div
            key={project.projectNumber}
            className="pw-card p-6 sm:p-7 bg-[#ffffff] dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b] flex flex-col justify-between"
          >
            <div>
              {/* Card Meta */}
              <div className="flex items-center justify-between text-xs font-mono text-[#6b7785] dark:text-[#94a3b8] mb-3">
                <span className="text-[#12355b] dark:text-[#38bdf8] font-semibold">
                  CASE {project.projectNumber} // {project.category}
                </span>
                <span>Active Spec</span>
              </div>

              {/* Title in Instrument Serif */}
              <h3 className="text-xl sm:text-2xl font-normal text-[#0c1620] dark:text-white font-serif-pw leading-snug mb-2">
                {project.name}
              </h3>

              <p className="text-xs sm:text-sm text-[#3b4754] dark:text-[#94a3b8] leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Special interactive live simulation for SubScope */}
              {project.projectNumber === '04' && (
                <div className="mb-4 p-3 rounded-xl bg-[#090e17] text-slate-200 border border-slate-700 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-[11px] pb-1 border-b border-slate-800">
                    <span className="text-[#38bdf8]">SubScope CLI Engine // v1.2</span>
                    <button
                      onClick={handleRunSubscope}
                      disabled={subscopeRunning}
                      className="px-2 py-0.5 rounded bg-[#0284c7] hover:bg-[#0369a1] text-white text-[10px] font-sans flex items-center gap-1 cursor-pointer disabled:opacity-50"
                    >
                      <Play className="w-3 h-3" />
                      <span>{subscopeRunning ? 'Scanning...' : 'Test Run'}</span>
                    </button>
                  </div>
                  <div className="text-[11px] space-y-1 h-20 overflow-y-auto">
                    {subscopeLogs.length === 0 ? (
                      <span className="text-slate-400">Click &apos;Test Run&apos; to simulate multithreaded DNS discovery...</span>
                    ) : (
                      subscopeLogs.map((l, i) => (
                        <div key={i} className="text-emerald-400 leading-tight">
                          {l}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.slice(0, 4).map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#f4f5f7] dark:bg-[#1e293b] text-[#3b4754] dark:text-[#cbd5e1] border border-[#dfe3e8] dark:border-[#334155]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-[#dfe3e8] dark:border-[#1e293b] flex items-center justify-between">
              <button
                onClick={() => setActiveModalProject(project)}
                className="text-xs font-semibold text-[#12355b] dark:text-[#38bdf8] hover:text-[#ff5a36] inline-flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#6b7785] dark:text-[#94a3b8] hover:text-[#0c1620] dark:hover:text-white inline-flex items-center gap-1"
                  >
                    <span>Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-[#6b7785] dark:text-[#94a3b8] hover:text-[#0c1620] dark:hover:text-white inline-flex items-center gap-1"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      {activeModalProject && (
        <ProjectCaseModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </section>
  );
};
