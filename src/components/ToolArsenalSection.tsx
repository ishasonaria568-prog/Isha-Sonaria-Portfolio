import React, { useState } from 'react';
import { toolArsenalData } from '../data/portfolioData';
import { Terminal, Copy, Check, Shield, Search } from 'lucide-react';

export const ToolArsenalSection: React.FC = () => {
  const [selectedCategoryName, setSelectedCategoryName] = useState<string>(
    toolArsenalData[0]?.category || 'RECONNAISSANCE'
  );
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  const currentCategory =
    toolArsenalData.find((c) => c.category === selectedCategoryName) || toolArsenalData[0];

  const handleCopyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedCommand(cmd);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  return (
    <section
      id="arsenal"
      className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#dfe3e8] dark:border-[#1e293b] transition-colors"
      aria-labelledby="arsenal-title"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#dfe3e8] dark:border-[#1e293b]">
        <div>
          <p className="text-xs font-mono font-bold tracking-wider text-[#ff5a36] uppercase mb-2">
            Tool Arsenal // Operational Capabilities
          </p>
          <h2
            id="arsenal-title"
            className="text-3xl sm:text-5xl font-normal text-[#0c1620] dark:text-white font-serif-pw leading-tight"
          >
            Security Toolkit &amp; Active Stack
          </h2>
          <p className="text-sm sm:text-base text-[#3b4754] dark:text-[#94a3b8] max-w-2xl mt-2 leading-relaxed">
            Direct command-line utilities, network analyzers, and SIEM platforms leveraged across daily lab triage and security investigations.
          </p>
        </div>

        {/* Category Selector Chips */}
        <div className="flex flex-wrap gap-1.5 self-start md:self-end">
          {toolArsenalData.map((cat) => {
            const isSelected = cat.category === selectedCategoryName;
            return (
              <button
                key={cat.category}
                onClick={() => setSelectedCategoryName(cat.category)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#12355b] text-white dark:bg-[#0284c7] shadow-sm'
                    : 'bg-[#f4f5f7] dark:bg-[#1e293b] text-[#3b4754] dark:text-[#94a3b8] hover:text-[#0c1620] dark:hover:text-white border border-[#dfe3e8] dark:border-[#334155]'
                }`}
              >
                {cat.category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Purpose Banner */}
      <div className="mb-8 p-4 rounded-2xl bg-[#f4f5f7] dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b] flex items-center justify-between flex-wrap gap-2 text-xs">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#ff5a36]" />
          <span className="font-mono font-semibold text-[#0c1620] dark:text-white">
            CATEGORY PURPOSE:
          </span>
          <span className="text-[#3b4754] dark:text-[#94a3b8]">
            {currentCategory.purpose}
          </span>
        </div>
        <span className="font-mono text-[#6b7785] dark:text-[#94a3b8] text-[11px]">
          {currentCategory.tools.length} VERIFIED TOOLS
        </span>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCategory.tools.map((tool) => (
          <div
            key={tool.name}
            className="pw-card p-6 bg-[#ffffff] dark:bg-[#0f172a] border border-[#dfe3e8] dark:border-[#1e293b] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#6b7785] dark:text-[#94a3b8] mb-3">
                <span className="text-[#12355b] dark:text-[#38bdf8] font-semibold">
                  OPERATIONAL TOOL
                </span>
                <span className="text-[#10b981]">ACTIVE</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-normal text-[#0c1620] dark:text-white font-serif-pw mb-1.5">
                {tool.name}
              </h3>

              <span className="text-xs font-mono text-[#ff5a36] block mb-3">
                {tool.practicalRole}
              </span>

              {tool.description && (
                <p className="text-xs text-[#3b4754] dark:text-[#94a3b8] leading-relaxed mb-4">
                  {tool.description}
                </p>
              )}
            </div>

            {/* Terminal Command Snippet */}
            <div className="pt-3 border-t border-[#dfe3e8] dark:border-[#1e293b]">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#6b7785] dark:text-[#94a3b8] mb-1.5">
                <span>TYPICAL SYNTAX</span>
                <button
                  onClick={() => handleCopyCommand(tool.typicalCommand)}
                  className="flex items-center gap-1 text-[#ff5a36] hover:underline cursor-pointer"
                  title="Copy command"
                >
                  {copiedCommand === tool.typicalCommand ? (
                    <>
                      <Check className="w-3 h-3 text-[#10b981]" />
                      <span className="text-[#10b981]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-2.5 rounded-lg bg-[#090e17] text-slate-200 font-mono text-[11px] overflow-x-auto select-all border border-slate-800">
                <code>{tool.typicalCommand}</code>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
