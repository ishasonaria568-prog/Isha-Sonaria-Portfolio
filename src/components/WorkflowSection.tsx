import React, { useState } from 'react';
import { workflowSteps, journeyMilestones } from '../data/portfolioData';
import { TabId } from './Header';
import {
  GitBranch,
  CheckCircle2,
  ChevronRight,
  Terminal,
  Shield,
  ArrowRight,
  ArrowLeft,
  History,
  Activity,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';

interface WorkflowSectionProps {
  onSelectTab?: (tab: TabId) => void;
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ onSelectTab }) => {
  const [subView, setSubView] = useState<'playbook' | 'timeline'>('playbook');
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = workflowSteps[activeStepIndex] || workflowSteps[0];

  return (
    <section id="workflow" className="py-16 md:py-24 relative border-b border-[#16335C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-5 border-b border-[#16335C] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#38BDF8] mb-2 font-semibold">
              <GitBranch className="w-4 h-4" />
              <span>METHODOLOGY // INVESTIGATION_WORKFLOW // INCIDENT_RESPONSE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-mono text-white uppercase tracking-tight">
              HOW I SOLVE A SECURITY PROBLEM
            </h2>
            <p className="text-sm text-[#94A3B8] mt-1 max-w-2xl font-sans">
              Structured, reproducible 6-stage lifecycle for defensive detection, alert triage, artifact correlation, and system hardening.
            </p>
          </div>
          <div className="font-mono text-xs text-[#7DD3FC] flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B172E] border border-[#16335C]">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            <span>SOC L1 / INCIDENT RESPONSE PLAYBOOK</span>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-2 mb-8">
          <button
            onClick={() => setSubView('playbook')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide flex items-center gap-2 transition-all cursor-pointer ${
              subView === 'playbook'
                ? 'bg-[#38BDF8] text-[#040814] font-bold shadow-md shadow-[#38BDF8]/25 scale-[1.02]'
                : 'bg-[#0B172E] text-[#94A3B8] border border-[#16335C] hover:border-[#38BDF8]/50 hover:text-white'
            }`}
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>01 // 6-Stage Incident Response Lifecycle</span>
          </button>

          <button
            onClick={() => setSubView('timeline')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wide flex items-center gap-2 transition-all cursor-pointer ${
              subView === 'timeline'
                ? 'bg-[#38BDF8] text-[#040814] font-bold shadow-md shadow-[#38BDF8]/25 scale-[1.02]'
                : 'bg-[#0B172E] text-[#94A3B8] border border-[#16335C] hover:border-[#38BDF8]/50 hover:text-white'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>02 // Investigation Timeline Log (Journey)</span>
          </button>
        </div>

        {/* SUBVIEW 1: 6-STAGE INCIDENT RESPONSE LIFECYCLE */}
        {subView === 'playbook' && (
          <div className="space-y-6 animate-view-in">
            {/* Step Indicator Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              {workflowSteps.map((step, index) => {
                const isSelected = index === activeStepIndex;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStepIndex(index)}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? 'bg-[#0B172E] border-[#38BDF8] shadow-lg shadow-[#38BDF8]/20 scale-[1.02]'
                        : 'bg-[#0B172E]/70 border-[#16335C] hover:border-[#38BDF8]/50 text-[#94A3B8]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span
                        className={`text-[10px] font-mono font-bold ${
                          isSelected ? 'text-[#38BDF8]' : 'text-[#7DD3FC]'
                        }`}
                      >
                        PHASE {step.step}
                      </span>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />}
                    </div>
                    <div
                      className={`text-xs font-mono font-bold truncate ${
                        isSelected ? 'text-white' : 'text-[#94A3B8]'
                      }`}
                    >
                      {step.title}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Current Step Detailed Interactive View */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#0B172E] border border-[#16335C] shadow-2xl relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#16335C]">
                <div>
                  <div className="text-xs font-mono text-[#38BDF8] mb-1 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping" />
                    <span>LIFECYCLE PHASE {currentStep.step} OF 06</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-mono text-white">
                    {currentStep.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30">
                    STATUS: ACTIVE DISSECTION
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h4 className="text-xs font-mono uppercase text-[#7DD3FC] mb-2 font-semibold">
                      OPERATIONAL OBJECTIVE:
                    </h4>
                    <p className="text-sm text-[#94A3B8] font-sans leading-relaxed">
                      {currentStep.objective}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase text-[#7DD3FC] mb-2 font-semibold">
                      PRACTICAL ACTION &amp; INVESTIGATION METHOD:
                    </h4>
                    <div className="p-4 rounded-xl bg-[#040814] border border-[#16335C] text-xs font-sans text-white leading-relaxed flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                      <span>{currentStep.practicalAction}</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#040814] border border-[#16335C]">
                    <div className="text-[10px] font-mono text-[#34D399] mb-1 uppercase font-semibold">
                      VERIFIABLE DEFENSIVE DELIVERABLE:
                    </div>
                    <p className="text-xs text-[#94A3B8] font-sans">
                      {currentStep.deliverable}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  {/* Phase Summary card */}
                  <div className="p-5 rounded-xl bg-[#040814] border border-[#16335C] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-[#38BDF8] font-semibold">
                        PHASE TRIAGE CHECKPOINT
                      </span>
                      <Terminal className="w-3.5 h-3.5 text-[#38BDF8]" />
                    </div>
                    <p className="text-xs text-[#94A3B8] font-sans leading-relaxed">
                      Every finding is documented with hashes, time offsets, and PCAP stream pointers before moving to containment.
                    </p>
                    <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#7DD3FC] border-t border-[#16335C]">
                      <span>REPRODUCIBLE: YES</span>
                      <span className="text-[#34D399]">IOC SIGNED</span>
                    </div>
                  </div>

                  {/* Typical Forensic Evidence Output */}
                  <div className="p-4 rounded-xl bg-[#040814] border border-[#38BDF8]/30 font-mono text-xs space-y-2">
                    <div className="flex items-center justify-between text-[#7DD3FC] pb-2 border-b border-[#16335C]">
                      <span>ARTIFACT STREAM // LIVE INSPECTION</span>
                      <span className="text-[#34D399]">VERIFIED</span>
                    </div>
                    <p className="text-[#94A3B8] text-[11px] leading-relaxed">
                      Captured IOC timestamp: 2026-10-09T01:30:00Z | Protocol: RFC-5322 &amp; PCAP Stream #42 | SHA-256 matches rule set.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBVIEW 2: CHRONOLOGICAL INVESTIGATION TIMELINE LOG */}
        {subView === 'timeline' && (
          <div className="relative border-l border-[#16335C] ml-4 md:ml-6 space-y-8 pl-6 md:pl-8 animate-view-in">
            {journeyMilestones.map((item, idx) => (
              <div key={`${item.year}-${idx}`} className="relative group">
                {/* Timeline Indicator Dot */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#040814] border-2 border-[#38BDF8] group-hover:border-[#7DD3FC] group-hover:scale-125 transition-all flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                </div>

                {/* Milestone Card */}
                <div className="p-5 sm:p-6 rounded-xl bg-[#0B172E] border border-[#16335C] hover:border-[#38BDF8] transition-all shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded font-mono font-bold text-xs bg-[#38BDF8]/20 border border-[#38BDF8]/40 text-[#7DD3FC]">
                        {item.year}
                      </span>
                      <span className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#34D399] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{item.status}</span>
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold font-mono text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] font-sans leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Evidence Artifact */}
                  <div className="p-3 rounded-lg bg-[#040814] border border-[#16335C] mb-3 text-xs font-mono text-[#34D399]">
                    <span className="text-[#94A3B8] mr-1.5">VERIFIED RECORD:</span>
                    <span>{item.evidence}</span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#040814] border border-[#16335C] text-[#94A3B8]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
