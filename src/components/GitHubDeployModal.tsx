import React, { useState } from 'react';
import { personalProfile } from '../data/portfolioData';
import { Github, Copy, Check, ExternalLink, X, Shield, Download } from 'lucide-react';

interface GitHubDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubDeployModal: React.FC<GitHubDeployModalProps> = ({ isOpen, onClose }) => {
  const [repoName, setRepoName] = useState('cybersecurity-portfolio');
  const [accountName, setAccountName] = useState('ishasonaria568-prog');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const targetRepoUrl = `https://github.com/${accountName}/${repoName}.git`;
  const newRepoUrl = `https://github.com/new?name=${repoName}&description=Isha+Sonaria+Cybersecurity+SOC+Portfolio`;

  const commands = [
    {
      title: 'Step 1: Create a new repository on your GitHub account',
      cmd: `Open GitHub New Repo: ${newRepoUrl}`,
      isLink: true,
      url: newRepoUrl,
    },
    {
      title: 'Step 2: Link local repository to your GitHub remote',
      cmd: `git remote add origin ${targetRepoUrl}`,
    },
    {
      title: 'Step 3: Ensure main branch is active',
      cmd: 'git branch -M main',
    },
    {
      title: 'Step 4: Push all code, assets & commits to GitHub',
      cmd: 'git push -u origin main',
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const allCommandsBlock = `# 1. Link remote repository
git remote add origin ${targetRepoUrl}

# 2. Set default branch to main
git branch -M main

# 3. Push code to your GitHub account
git push -u origin main`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0B172E] border border-[#16335C] rounded-xl shadow-2xl shadow-black/90 overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-5 py-4 bg-[#060E1F] border-b border-[#16335C] flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2.5">
            <Github className="w-5 h-5 text-white" />
            <h3 className="text-sm font-bold font-mono text-white">
              PUSH PORTFOLIO TO GITHUB // REPO MANAGER
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-[#94A3B8] hover:text-white hover:bg-[#111A38] transition-colors cursor-pointer"
            aria-label="Close GitHub modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 overflow-y-auto font-sans text-xs sm:text-sm">
          {/* Info Banner */}
          <div className="p-4 rounded-lg bg-[#0E1530] border border-[#16335C] flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <p className="text-white font-semibold">
                Local Git Repository Ready with Initial Commit!
              </p>
              <p className="text-[#94A3B8]">
                All files, projects (<strong className="text-white">SubScope</strong>, <strong className="text-white">pdf-fortress</strong>, <strong className="text-white">PhishGuard</strong>), assets, and README.md are staged and committed on branch <code className="text-[#38BDF8]">main</code>.
              </p>
            </div>
          </div>

          {/* Account Configuration Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div>
              <label className="text-[#94A3B8] block mb-1">GITHUB ACCOUNT USERNAME:</label>
              <input
                type="text"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
                placeholder="e.g. ishasonaria568-prog"
                className="w-full px-3 py-2 rounded-lg bg-[#040814] border border-[#16335C] text-white focus:outline-none focus:border-[#38BDF8]"
              />
            </div>
            <div>
              <label className="text-[#94A3B8] block mb-1">TARGET REPOSITORY NAME:</label>
              <input
                type="text"
                value={repoName}
                onChange={(e) => setRepoName(e.target.value)}
                placeholder="cybersecurity-portfolio"
                className="w-full px-3 py-2 rounded-lg bg-[#040814] border border-[#16335C] text-white focus:outline-none focus:border-[#38BDF8]"
              />
            </div>
          </div>

          {/* Step 1 Quick Link */}
          <div className="p-4 rounded-lg bg-[#040814] border border-[#16335C] space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-[#38BDF8]">
                STEP 1: CREATE REPO ON GITHUB
              </span>
              <a
                href={newRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-mono text-xs font-semibold transition-colors"
              >
                <span>Open github.com/new</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
            <p className="text-xs text-[#94A3B8]">
              Create an empty repository named <strong className="text-white">{repoName}</strong> on your account <strong className="text-white">{accountName}</strong> (do not add a README, license, or .gitignore since we already have them).
            </p>
          </div>

          {/* Step 2 Copy Push Commands */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white font-bold">
                STEP 2: RUN PUSH COMMANDS IN TERMINAL
              </span>
              <button
                onClick={() => handleCopy(allCommandsBlock, 99)}
                className="text-[#38BDF8] hover:underline flex items-center gap-1 cursor-pointer"
              >
                {copiedIndex === 99 ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#34D399]" />
                    <span className="text-[#34D399]">COPIED ALL</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY ALL COMMANDS</span>
                  </>
                )}
              </button>
            </div>

            <div className="p-3.5 rounded-lg bg-[#040814] border border-[#16335C] font-mono text-xs text-[#34D399] space-y-1.5 overflow-x-auto select-all">
              <div className="text-[#94A3B8]"># Add remote origin:</div>
              <div className="text-white">git remote add origin {targetRepoUrl}</div>
              <div className="text-[#94A3B8] pt-1"># Push main branch:</div>
              <div className="text-white">git branch -M main</div>
              <div className="text-white">git push -u origin main</div>
            </div>
          </div>

          {/* Alternative: Direct ZIP Download */}
          <div className="p-3 rounded-lg bg-[#0E1530] border border-[#16335C] flex items-center justify-between text-xs">
            <span className="text-[#94A3B8]">
              Or upload code manually via GitHub web interface:
            </span>
            <a
              href="/isha-sonaria-cybersecurity-portfolio.zip"
              download="isha-sonaria-cybersecurity-portfolio.zip"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0B172E] border border-[#16335C] hover:border-[#38BDF8] text-[#38BDF8] font-mono font-semibold"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download ZIP (756 KB)</span>
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3 bg-[#060E1F] border-t border-[#16335C] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
          <span>BRANCH: main // COMMITS: 1 ROOT COMMIT</span>
          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded bg-[#0B172E] hover:bg-[#111A38] text-white border border-[#16335C] transition-colors cursor-pointer"
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
