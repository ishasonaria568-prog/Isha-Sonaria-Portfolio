import React from 'react';
import { ProjectItem } from '../data/portfolioData';
import { X, ExternalLink, Github, FileText, CheckCircle2, ShieldCheck, ArrowRight, Layers, AlertTriangle, Lock } from 'lucide-react';

interface ProjectCaseModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectCaseModal: React.FC<ProjectCaseModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0B172E] border border-[#16335C] rounded-xl shadow-2xl shadow-black/90 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-4 bg-[#060E1F] border-b border-[#16335C] flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded font-mono font-bold text-xs bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-blue-400">
              DOSSIER // CASE_{project.projectNumber}
            </span>
            <span className="text-xs font-mono text-[#94A3B8] hidden sm:inline">
              CONFIDENTIAL_SPECIFICATION // VERIFIED
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-[#1f1d38] text-[#94A3B8] hover:text-white transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 space-y-6 overflow-y-auto">
          {/* Top Title & Links */}
          <div className="space-y-2 border-b border-[#16335C] pb-5">
            <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider block">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
              {project.name}
            </h2>
            <p className="text-sm font-mono text-[#94A3B8]">
              {project.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-mono font-semibold bg-[#060E1F] border border-[#16335C] hover:border-[#38BDF8]/50 text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-blue-400" />
                <span>GITHUB REPOSITORY</span>
                <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded text-xs font-mono font-semibold bg-[#38BDF8]/15 border border-[#38BDF8]/40 text-[#38BDF8] hover:bg-[#38BDF8]/25 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>LIVE APPLICATION</span>
                </a>
              )}
            </div>
          </div>

          {/* Case File Overview */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#94A3B8] flex items-center gap-2">
              <FileText className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>CASE FILE OVERVIEW</span>
            </h3>
            <p className="text-sm text-white leading-relaxed font-sans">
              {project.caseStudy.overview}
            </p>
          </div>

          {/* Problem vs Security Relevance Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#040814] border border-[#16335C] space-y-2">
              <span className="text-xs font-mono uppercase text-blue-400 font-bold block flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-blue-400" />
                PROBLEM STATEMENT
              </span>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#040814] border border-[#16335C] space-y-2">
              <span className="text-xs font-mono uppercase text-[#34D399] font-bold block flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
                SECURITY RELEVANCE & DEFENSE
              </span>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-sans">
                {project.securityRelevance}
              </p>
            </div>
          </div>

          {/* Execution Pipeline Architecture */}
          <div className="p-4 rounded-lg bg-[#040814] border border-[#16335C] space-y-3">
            <span className="text-xs font-mono uppercase text-[#38BDF8] font-bold block flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#38BDF8]" />
              EXECUTION PIPELINE ARCHITECTURE
            </span>
            <div className="flex flex-wrap items-center gap-2 py-1">
              {project.architecture.steps.map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="px-3 py-1 rounded bg-[#060E1F] border border-[#16335C] text-xs font-mono font-medium text-white">
                    {step}
                  </div>
                  {idx < project.architecture.steps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
            <p className="text-xs text-[#94A3B8] font-sans">
              {project.architecture.description}
            </p>
          </div>

          {/* Technical Highlights & Defensive Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-[#040814] border border-[#16335C] space-y-2">
              <span className="text-xs font-mono uppercase text-white font-bold block">
                ENGINEERING HIGHLIGHTS
              </span>
              <ul className="space-y-1.5 text-xs text-[#94A3B8] font-sans">
                {(project.caseStudy.technicalHighlights || project.caseStudy.technicalArchitecture || project.features.slice(0, 4)).map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-[#040814] border border-[#16335C] space-y-2">
              <span className="text-xs font-mono uppercase text-[#34D399] font-bold block">
                DEFENSIVE OUTCOME
              </span>
              <p className="text-xs text-[#94A3B8] leading-relaxed font-sans">
                {project.caseStudy.defensiveOutcome}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="pt-2 border-t border-[#16335C] flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-[#94A3B8] mr-2">TECH_STACK:</span>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-[#060E1F] border border-[#16335C] text-xs font-mono text-blue-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-[#060E1F] border-t border-[#16335C] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
          <span>VERIFIED ON GITHUB: branch /{project.githubBranch}</span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded bg-[#0B172E] hover:bg-[#2A2640] text-white transition-colors cursor-pointer"
          >
            CLOSE CASE FILE
          </button>
        </div>
      </div>
    </div>
  );
};
