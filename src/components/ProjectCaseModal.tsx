import React, { useEffect } from 'react';
import { ProjectItem } from '../data/portfolioData';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  ShieldAlert,
  Layers,
  Cpu,
  FileText
} from 'lucide-react';

interface ProjectCaseModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectCaseModal: React.FC<ProjectCaseModalProps> = ({ project, onClose }) => {
  // ESC key listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/60 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-[#E2E8F0] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#F8FAFC] border-b border-[#E2E8F0] flex items-center justify-between sticky top-0 z-10">
          <div>
            <span className="text-xs font-mono text-[#2563EB] font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <h2 id="modal-title" className="text-xl font-display font-bold text-[#0F172A]">
              {project.name} — Technical Architecture
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#E2E8F0] text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Overview */}
          {project.caseStudy?.overview && (
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase text-[#64748B] tracking-wider font-semibold">
                Project Overview &amp; Motivation
              </h3>
              <p className="text-sm text-[#334155] leading-relaxed">
                {project.caseStudy.overview}
              </p>
            </div>
          )}

          {/* Threat Model */}
          {project.caseStudy?.threatModel && (
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3">
              <h3 className="text-xs font-mono uppercase text-[#0F172A] tracking-wider font-semibold flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#2563EB]" />
                Threat Model Addressed
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                {project.caseStudy.threatModel.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#2563EB] font-bold">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Architecture */}
          {project.caseStudy?.technicalArchitecture && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase text-[#0F172A] tracking-wider font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#059669]" />
                Technical Implementation Details
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.caseStudy.technicalArchitecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#334155] flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Decisions */}
          {project.caseStudy?.keyDecisions && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase text-[#0F172A] tracking-wider font-semibold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#2563EB]" />
                Engineering Trade-Offs &amp; Decisions
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#475569]">
                {project.caseStudy.keyDecisions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#059669] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Testing and Validation */}
          {project.caseStudy?.testingAndValidation && (
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-2">
              <span className="text-xs font-mono uppercase text-emerald-800 tracking-wider font-semibold block">
                Verification &amp; Benchmarks
              </span>
              <ul className="space-y-1.5 text-xs text-emerald-900">
                {project.caseStudy.testingAndValidation.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer Links */}
        <div className="px-6 py-4 bg-[#F8FAFC] border-t border-[#E2E8F0] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-[#0F172A] bg-white border border-[#E2E8F0] hover:bg-[#F1F5F9] transition-all shadow-2xs"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View GitHub Code</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white bg-[#2563EB] hover:bg-[#1D4ED8] transition-all shadow-2xs"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-[#64748B] hover:text-[#0F172A] hover:bg-[#E2E8F0] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
