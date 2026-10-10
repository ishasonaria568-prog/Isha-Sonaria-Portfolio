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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#121024] border border-[#2B254E] rounded-2xl shadow-2xl shadow-black/90 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#17142E] border-b border-[#231F3D] flex items-center justify-between sticky top-0 z-10">
          <div>
            <span className="text-xs font-mono text-[#22D3EE] font-semibold uppercase tracking-wider">
              {project.category}
            </span>
            <h2 id="modal-title" className="text-xl font-display font-bold text-[#F8FAFC]">
              {project.name} — Technical Architecture
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-[#231F3D] text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
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
              <h3 className="text-xs font-mono uppercase text-[#A1A1AA] tracking-wider font-semibold">
                Project Overview &amp; Motivation
              </h3>
              <p className="text-sm text-[#F8FAFC] leading-relaxed">
                {project.caseStudy.overview}
              </p>
            </div>
          )}

          {/* Threat Model */}
          {project.caseStudy?.threatModel && (
            <div className="p-5 rounded-xl bg-[#161329] border border-[#231F3D] space-y-3">
              <h3 className="text-xs font-mono uppercase text-[#8B5CF6] tracking-wider font-semibold flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#8B5CF6]" />
                Threat Model Addressed
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#A1A1AA]">
                {project.caseStudy.threatModel.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#8B5CF6] font-bold">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technical Architecture */}
          {project.caseStudy?.technicalArchitecture && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase text-[#22D3EE] tracking-wider font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#22D3EE]" />
                Technical Implementation Details
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {project.caseStudy.technicalArchitecture.map((item, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-[#0E0C1A] border border-[#231F3D] text-xs sm:text-sm text-[#F8FAFC]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Engineering Decisions */}
          {project.caseStudy?.keyDecisions && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase text-[#A1A1AA] tracking-wider font-semibold">
                Defensive Design Decisions
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#A1A1AA]">
                {project.caseStudy.keyDecisions.map((decision, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Testing & Validation */}
          {project.caseStudy?.testingAndValidation && (
            <div className="p-4 rounded-xl bg-[#161329] border border-[#231F3D] space-y-2">
              <h3 className="text-xs font-mono uppercase text-[#22D3EE] tracking-wider font-semibold">
                Testing &amp; Empirical Validation
              </h3>
              <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
                {project.caseStudy.testingAndValidation.map((test, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#22D3EE] font-bold">✓</span>
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 py-4 bg-[#17142E] border-t border-[#231F3D] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium text-[#F8FAFC] bg-[#121024] border border-[#231F3D] hover:border-[#8B5CF6]/50 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium text-[#A1A1AA] hover:text-[#F8FAFC] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
