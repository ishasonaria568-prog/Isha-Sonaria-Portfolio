import React, { useState, useEffect, useRef } from 'react';
import { personalProfile, tryHackMeMetrics, projectsData, certificationData } from '../data/portfolioData';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Play, CornerDownLeft } from 'lucide-react';

interface InteractiveTerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminalModal: React.FC<InteractiveTerminalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'init',
      output: (
        <div className="space-y-1 text-xs">
          <div className="text-[#34D399]">ISHΛ SECURITY LAB // SHELL v2.4 (x86_64-soc-linux)</div>
          <div className="text-[#A9A5BD]">
            Type <span className="text-[#22D3EE] font-bold">help</span> to view available security commands or click quick action buttons.
          </div>
        </div>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    const cmdLower = trimmed.toLowerCase();
    let response: React.ReactNode = null;

    if (cmdLower === 'help') {
      response = (
        <div className="space-y-1 text-xs font-mono text-[#A9A5BD]">
          <div className="text-[#22D3EE] font-bold">AVAILABLE COMMANDS:</div>
          <div>• <span className="text-[#F5F3FF]">whoami</span> - Display operator identity &amp; target objective</div>
          <div>• <span className="text-[#F5F3FF]">thm / stats</span> - Fetch real TryHackMe metrics &amp; streak telemetry</div>
          <div>• <span className="text-[#F5F3FF]">projects</span> - List verified security engineering case files</div>
          <div>• <span className="text-[#F5F3FF]">nmap</span> - Simulate network enumeration scan on security lab</div>
          <div>• <span className="text-[#F5F3FF]">skills</span> - Display 8 operational cybersecurity domains</div>
          <div>• <span className="text-[#F5F3FF]">cert</span> - Show Hackviser CORE verification details</div>
          <div>• <span className="text-[#F5F3FF]">contact</span> - Display direct encrypted channels</div>
          <div>• <span className="text-[#F5F3FF]">clear</span> - Clear terminal scrollback</div>
        </div>
      );
    } else if (cmdLower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (cmdLower === 'whoami') {
      response = (
        <div className="space-y-1 text-xs font-mono">
          <div className="text-[#34D399] font-bold">NAME: {personalProfile.name}</div>
          <div className="text-[#22D3EE]">ROLE: {personalProfile.objective}</div>
          <div className="text-[#F5F3FF]">ACADEMICS: BCA — BKNM University (8.30 CGPA, 1st Ranker Sem 1)</div>
          <div className="text-[#A9A5BD]">LOCATION: {personalProfile.location}</div>
          <div className="text-[#7DD3FC]">{personalProfile.intro}</div>
        </div>
      );
    } else if (cmdLower === 'thm' || cmdLower === 'stats' || cmdLower === 'tryhackme') {
      response = (
        <div className="space-y-1 text-xs font-mono">
          <div className="text-[#22D3EE] font-bold">TRYHACKME TELEMETRY [USER: CipherGhost24]:</div>
          <div>• COMPLETED ROOMS: <span className="text-[#34D399] font-bold">{tryHackMeMetrics.roomsCompleted}</span></div>
          <div>• VERIFIED BADGES: <span className="text-[#22D3EE] font-bold">{tryHackMeMetrics.badgesEarned}</span></div>
          <div>• ACTIVE DAILY STREAK: <span className="text-[#7DD3FC] font-bold">{tryHackMeMetrics.currentStreakDays} Days Unbroken</span></div>
          <div>• GLOBAL COMPETITIVE RANK: <span className="text-[#F5F3FF] font-bold">{tryHackMeMetrics.globalRankPercent}</span></div>
          <div className="text-[#F0B27A]">🏆 1st Place Champion: Bronze, Silver &amp; Gold Leagues</div>
        </div>
      );
    } else if (cmdLower === 'projects') {
      response = (
        <div className="space-y-1.5 text-xs font-mono">
          <div className="text-[#22D3EE] font-bold">VERIFIED PRODUCTION CASE FILES:</div>
          {projectsData.map((p) => (
            <div key={p.projectNumber} className="border-l-2 border-[#38BDF8] pl-2 text-xs">
              <div className="text-[#F5F3FF] font-bold">{p.projectNumber}. {p.name} [{p.category}]</div>
              <div className="text-[#A9A5BD]">{p.tagline}</div>
              <div className="text-[#22D3EE]">Repo: {p.githubUrl}</div>
            </div>
          ))}
        </div>
      );
    } else if (cmdLower.startsWith('nmap')) {
      response = (
        <div className="space-y-1 text-xs font-mono text-[#A9A5BD]">
          <div className="text-[#22D3EE]">Starting Nmap 7.94 ( https://nmap.org ) at 2026-10-08 05:40 UTC</div>
          <div>Nmap scan report for isha-security-lab.lan (10.10.14.88)</div>
          <div>Host is up (0.0042s latency).</div>
          <div className="text-[#F5F3FF] font-bold pt-1">PORT     STATE SERVICE       VERSION</div>
          <div>22/tcp   open  ssh           OpenSSH 9.2p1 (ED25519 authenticated)</div>
          <div>80/tcp   open  http          PhishGuard FastApi ML Engine v2.1</div>
          <div>443/tcp  open  ssl/https     RFC 5322 Email Forensics Pipeline</div>
          <div>1514/tcp open  wazuh-agent   Wazuh SIEM Security Monitor Daemon</div>
          <div className="text-[#34D399] pt-1">Nmap done: 1 IP address (1 host up) scanned in 1.48 seconds</div>
        </div>
      );
    } else if (cmdLower === 'skills') {
      response = (
        <div className="space-y-1 text-xs font-mono text-[#A9A5BD]">
          <div className="text-[#22D3EE] font-bold">PRACTICAL CYBERSECURITY DOMAINS:</div>
          <div>1. SOC &amp; Threat Detection [Wazuh SIEM, Wireshark, Triage Playbooks]</div>
          <div>2. Ethical Hacking &amp; VAPT [Nmap, Metasploit, Burp Suite, Hydra]</div>
          <div>3. Packet Analysis &amp; Networking [TCP/IP, Wireshark, Subnetting, DNS]</div>
          <div>4. Digital Forensics &amp; DFIR [Volatility, Autopsy, Memory Dumps]</div>
          <div>5. Email Forensics &amp; Phishing [SPF, DKIM, DMARC, RFC 5322 Parsing]</div>
          <div>6. Security Automation [Python, Go, Bash, scikit-learn ML]</div>
          <div>7. Open Source Intelligence [OSINT, Reconnaissance, Maltego]</div>
          <div>8. Web Security [OWASP Top 10, Injection, Auth Bypass]</div>
        </div>
      );
    } else if (cmdLower === 'cert') {
      response = (
        <div className="space-y-1 text-xs font-mono">
          <div className="text-[#34D399] font-bold">CERTIFICATION CREDENTIAL:</div>
          <div className="text-[#F5F3FF]">{certificationData.title}</div>
          <div className="text-[#A9A5BD]">Issuer: {certificationData.issuer} | Date: {certificationData.date}</div>
          <div className="text-[#22D3EE]">ID: {certificationData.credentialId}</div>
          <div className="text-[#7DD3FC]">Verify URL: {certificationData.verificationUrl}</div>
        </div>
      );
    } else if (cmdLower === 'subscope') {
      response = (
        <div className="space-y-1 text-xs font-mono">
          <div className="text-[#22D3EE] font-bold">SUBSCOPE // RECONNAISSANCE ENGINE</div>
          <div className="text-[#F5F3FF]">Python multithreaded subdomain enumeration CLI tool.</div>
          <div className="text-[#34D399]">• DNS Resolvers: 16 concurrent worker threads with wildcard detection</div>
          <div className="text-[#34D399]">• Probing: HTTP/HTTPS status, titles, SSL certificates</div>
          <div className="text-[#7DD3FC]">• Repo: https://github.com/ishasonaria568-prog/SubScope</div>
        </div>
      );
    } else if (cmdLower === 'pdf-fortress' || cmdLower === 'pdffortress' || cmdLower === 'fortress') {
      response = (
        <div className="space-y-1 text-xs font-mono">
          <div className="text-[#7DD3FC] font-bold">PDF-FORTRESS // FORENSIC TRIAGE & HARDENING</div>
          <div className="text-[#F5F3FF]">Python & TypeScript PDF security platform with CLI and GUI interfaces.</div>
          <div className="text-[#34D399]">• Analysis: Suspicious /JavaScript and stream exploit isolation</div>
          <div className="text-[#34D399]">• Defense: Metadata stripping & AES-256 cryptographic permissions</div>
          <div className="text-[#22D3EE]">• Repo: https://github.com/ishasonaria568-prog/pdf-fortress</div>
        </div>
      );
    } else if (cmdLower === 'github' || cmdLower === 'deploy' || cmdLower === 'git') {
      response = (
        <div className="space-y-1 text-xs font-mono">
          <div className="text-[#38BDF8] font-bold">GIT REPOSITORY STATUS // INITIALIZED:</div>
          <div className="text-white">• Branch: <span className="text-[#34D399]">main</span> (Initial commit staged &amp; committed)</div>
          <div className="text-white">• Repo URL: https://github.com/ishasonaria568-prog/cybersecurity-portfolio.git</div>
          <div className="text-[#94A3B8] pt-1">TO PUSH CODE TO YOUR GITHUB ACCOUNT:</div>
          <div className="p-2 rounded bg-[#040814] text-[#34D399] border border-[#16335C]">
            git remote add origin https://github.com/ishasonaria568-prog/cybersecurity-portfolio.git<br />
            git branch -M main<br />
            git push -u origin main
          </div>
        </div>
      );
    } else if (cmdLower === 'contact') {
      response = (
        <div className="space-y-1 text-xs font-mono">
          <div className="text-[#22D3EE] font-bold">DIRECT COMMUNICATIONS:</div>
          <div>• Email: <span className="text-[#F5F3FF]">{personalProfile.links.email}</span></div>
          <div>• LinkedIn: <span className="text-[#7DD3FC]">{personalProfile.links.linkedin}</span></div>
          <div>• GitHub: <span className="text-[#34D399]">{personalProfile.links.github}</span></div>
          <div>• TryHackMe: <span className="text-[#F0B27A]">{personalProfile.links.tryhackme}</span></div>
        </div>
      );
    } else {
      response = (
        <div className="text-xs font-mono text-[#F87171]">
          Command not recognized: &quot;{trimmed}&quot;. Type <span className="text-[#22D3EE] underline">help</span> for command list.
        </div>
      );
    }

    setHistory((prev) => [...prev, { command: trimmed, output: response }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  const quickCommands = ['whoami', 'thm', 'projects', 'subscope', 'pdf-fortress', 'nmap', 'skills', 'cert', 'contact'];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl bg-[#0B0A14] border border-[#2A2640] rounded-xl shadow-2xl shadow-black/95 overflow-hidden flex flex-col h-[520px] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Window Header Bar */}
        <div className="px-4 py-2.5 bg-[#121020] border-b border-[#2A2640] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="text-xs font-mono text-[#A9A5BD] ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-[#22D3EE]" />
              <span>operator@isha-lab:~</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30 hidden sm:inline">
              LIVE SHELL
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded text-[#A9A5BD] hover:text-[#F5F3FF] hover:bg-[#1f1d38] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Click Buttons */}
        <div className="px-4 py-2 bg-[#17152A]/80 border-b border-[#2A2640] flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
          <span className="text-[#A9A5BD] shrink-0 mr-1">QUICK:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-[#0B0A14] border border-[#2A2640] hover:border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE]/10 transition-colors shrink-0 cursor-pointer"
            >
              ${cmd}
            </button>
          ))}
          <button
            onClick={() => handleCommand('clear')}
            className="px-2 py-0.5 rounded bg-[#0B0A14] border border-[#2A2640] hover:border-red-400 text-red-400 transition-colors shrink-0 cursor-pointer ml-auto"
          >
            clear
          </button>
        </div>

        {/* Scrollable Command Output History */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs select-text">
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              {item.command !== 'init' && (
                <div className="flex items-center gap-2 text-[#38BDF8]">
                  <span className="text-[#34D399]">isha@security-lab:~$</span>
                  <span className="text-[#F5F3FF]">{item.command}</span>
                </div>
              )}
              <div className="pl-2">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Prompt */}
        <div className="p-3 bg-[#121020] border-t border-[#2A2640] flex items-center gap-2 font-mono text-xs">
          <span className="text-[#34D399] font-bold shrink-0">isha@security-lab:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command ('help', 'whoami', 'thm', 'projects', 'nmap')..."
            className="flex-1 bg-transparent text-[#F5F3FF] focus:outline-none placeholder:text-[#4A4760]"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1 rounded text-[#22D3EE] hover:bg-[#1f1d38] cursor-pointer"
            title="Execute command"
          >
            <CornerDownLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
