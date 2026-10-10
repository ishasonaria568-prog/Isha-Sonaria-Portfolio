import React, { useState } from 'react';
import { projectsData, ProjectItem } from '../data/portfolioData';
import {
  ExternalLink,
  Github,
  Layers,
  Shield,
  Info,
  CheckCircle2,
  Terminal,
  ArrowUpRight
} from 'lucide-react';
import { ProjectCaseModal } from './ProjectCaseModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-[#231F3D] bg-[#0E0C1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider font-mono">
              Defensive Engineering
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-[#F8FAFC] tracking-tight">
              Featured Security Projects
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A1A1AA] max-w-2xl leading-relaxed">
              Open-source security tools engineered to address concrete challenges in threat detection, email forensics, document security, and access control.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
            <span>Verified Repositories:</span>
            <a
              href="https://github.com/ishasonaria568-prog"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22D3EE] hover:underline flex items-center gap-1"
            >
              github.com/ishasonaria568-prog
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Responsive Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="sec-card flex flex-col justify-between overflow-hidden group hover:border-[#8B5CF6]/50 transition-all duration-200"
            >
              <div>
                {/* Visual Preview Screenshot / Thumbnail Container */}
                {project.image ? (
                  <div className="relative aspect-video w-full overflow-hidden bg-[#161329] border-b border-[#231F3D]">
                    <img
                      src={project.image}
                      alt={`${project.name} application preview`}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B0A14]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#231F3D] text-[11px] font-mono text-[#22D3EE]">
                      {project.category}
                    </div>
                  </div>
                ) : (
                  <div className="relative aspect-video w-full bg-[#141126] border-b border-[#231F3D] flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-[#1A1630] border border-[#231F3D] flex items-center justify-center text-[#8B5CF6] mb-3">
                      <Terminal className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-[#22D3EE] uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="mt-1 font-display font-semibold text-sm text-[#F8FAFC]">
                      {project.name} CLI Architecture
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6">
                  {/* Name and Tagline */}
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-display font-bold text-[#F8FAFC] group-hover:text-[#C4B5FD] transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs font-medium text-[#A1A1AA] mt-1">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-3.5 text-sm text-[#A1A1AA] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-4 pt-4 border-t border-[#231F3D] space-y-1.5">
                    {project.keyHighlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Stack Tags */}
                  <div className="mt-4 pt-3 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono text-[#A1A1AA] bg-[#17142E] border border-[#231F3D]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#231F3D] pt-4">
                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#8B5CF6] hover:bg-[#7C3AED] transition-colors"
                    >
                      <span>View Live Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#F8FAFC] bg-[#161329] border border-[#231F3D] hover:border-[#8B5CF6]/50 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>View Source</span>
                    </a>
                  )}
                </div>

                {project.caseStudy && (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-[#22D3EE] hover:text-[#67E8F9] hover:underline cursor-pointer"
                  >
                    <span>Architecture Deep Dive</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectCaseModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
