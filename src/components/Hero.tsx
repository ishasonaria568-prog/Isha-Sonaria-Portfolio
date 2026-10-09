import React, { useState, useRef, useEffect } from 'react';
import { personalProfile, tryHackMeMetrics, certificationData } from '../data/portfolioData';
import {
  Send,
  Sparkles,
  ShieldCheck,
  Award,
  Terminal,
  Activity,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  FileText,
  Lock,
} from 'lucide-react';

interface HeroProps {
  onSelectTab: (sectionId: string) => void;
  onOpenResume?: () => void;
  onOpenTerminal?: () => void;
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  isHtml?: boolean;
}

// Knowledge base modeled after pw.is content.js
const KNOWLEDGE_BASE: { keywords: string[]; answer: string }[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'start', 'greetings', 'help'],
    answer: `Hi! I am the verified interactive portfolio dossier of <b>Isha Sonaria</b>. 👋<br><br>
You can ask me anything regarding her background, technical skills, or defensive operations:<br>
• 👤 <b>Profile:</b> Who is Isha?<br>
• 🛡️ <b>SOC Operations:</b> What does she do in a SOC?<br>
• ⚙️ <b>Tools:</b> Which security tools does she master?<br>
• 🚀 <b>Projects:</b> What are her key defensive projects?<br>
• 🏆 <b>Rank & Certs:</b> What are her certifications & TryHackMe achievements?<br>
• 📬 <b>Contact:</b> How to get in touch?<br><br>
What would you like to explore?`,
  },
  {
    keywords: ['who', 'wer', 'profile', 'bio', 'about', 'background', 'education', 'isha', 'bca'],
    answer: `<b>Isha Sonaria</b> is a dedicated cybersecurity analyst and SOC specialist based in Gujarat, India, actively preparing for SOC L1 and cybersecurity roles.<br><br>
• 🎓 <b>Academic Background:</b> Bachelor of Computer Applications (BCA) at Bhakta Kavi Narsinh Mehta University with an <b>8.30 CGPA</b> (Academic 1st Ranker in Semester 1).<br>
• 🎯 <b>Core Focus:</b> Defensive SOC operations, packet-level forensics, SIEM log analysis, and incident mitigation.<br>
• 🌐 <b>Mobility:</b> Open to full-time remote opportunities and on-site roles worldwide.`,
  },
  {
    keywords: ['soc', 'what', 'job', 'work', 'triage', 'incident', 'siem', 'defensive', 'blue'],
    answer: `In SOC operations, Isha focuses on <b>signal-to-noise reduction</b> and systematic incident investigation:<br><br>
• 🔍 <b>Alert Triage:</b> Investigates endpoint & network anomalies, correlating syslogs, Windows Event IDs (e.g., 4624/4625), and web server logs.<br>
• 🛡️ <b>SIEM & IDS:</b> Hands-on deployment and rule correlation with <b>Wazuh SIEM</b> and <b>Suricata</b>.<br>
• 🎯 <b>Investigation Methodology:</b> Follows an authoritative 6-stage lifecycle (Observe → Enumerate → Analyze → Validate → Document → Learn) to ensure zero false dismissals.`,
  },
  {
    keywords: ['tool', 'tools', 'arsenal', 'tech', 'stack', 'software', 'nmap', 'wireshark', 'burp', 'python'],
    answer: `Isha's verified security toolkit spans both defensive and assessment technologies:<br><br>
• 📡 <b>Network & Traffic:</b> Wireshark (deep packet inspection, TCP stream reconstruction), Nmap (host enumeration, NSE scripting).<br>
• 🛡️ <b>SIEM & Forensics:</b> Wazuh SIEM, ExifTool (metadata extraction), Steghide, Volatility.<br>
• 🌐 <b>Application Security:</b> Burp Suite (Repeater, Proxy intercept), SQLmap, Nuclei, Nikto.<br>
• 💻 <b>Development & Automation:</b> Python (FastAPI, Scikit-Learn ML classifiers), Go (high-speed MIME parsing), Bash scripting.`,
  },
  {
    keywords: ['project', 'projects', 'phishguard', 'email', 'voting', 'subscope', 'pdf', 'built'],
    answer: `Isha has engineered 5 distinctive open-source defensive projects:<br><br>
1. 🛡️ <b>PhishGuard:</b> Offline Random Forest ML URL classifier (16 static features, &lt;15ms latency, zero DNS leakage).<br>
2. ✉️ <b>Email Header Forensics:</b> Go & Canvas engine parsing multi-hop MIME routes, SPF/DKIM/DMARC policies, and 0-100 heuristic risk scoring.<br>
3. 🗳️ <b>College Voting Portal:</b> Tamper-resistant electoral application with atomic database transaction locks & SHA-256 receipts.<br>
4. 🛰️ <b>SubScope:</b> Multithreaded Python CLI reconnaissance scanner with async DNS resolution & wildcard filtering.<br>
5. 📄 <b>PDF Fortress:</b> Stream inspection, metadata scrubber, and AES-256 encryption suite.<br><br>
Check the <i>Projects Series</i> section below for complete architecture diagrams!`,
  },
  {
    keywords: ['cert', 'certification', 'tryhackme', 'rank', 'badge', 'streak', 'thm', 'credential', 'hackviser'],
    answer: `Here are Isha's verified achievements & credentials:<br><br>
• 🏆 <b>TryHackMe Global Top 2%:</b> 147 completed security labs, 23 earned skill badges, 105-day unbroken streak.<br>
• 🥇 <b>League Championships:</b> Took 1st place in Bronze, Silver, and Gold TryHackMe competitive leagues.<br>
• 📜 <b>Hackviser CORE:</b> Certified Cybersecurity Foundations (<a href="${certificationData.verificationUrl}" target="_blank" rel="noopener noreferrer" class="underline font-mono text-[#ff5a36]">HV-CORE-HO4ESOYZ</a>).<br>
• 🎓 <b>Academic Honors:</b> 1st Ranker in Semester 1 (BCA) with 8.30 CGPA.`,
  },
  {
    keywords: ['contact', 'email', 'hire', 'reach', 'linkedin', 'github', 'social', 'phone'],
    answer: `You can connect directly with Isha through the following channels:<br><br>
• 📧 <b>Email:</b> <a href="mailto:${personalProfile.links.email}" class="underline text-[#ff5a36]">${personalProfile.links.email}</a><br>
• 💼 <b>LinkedIn:</b> <a href="${personalProfile.links.linkedin}" target="_blank" rel="noopener noreferrer" class="underline">linkedin.com/in/isha-sonaria</a><br>
• 🐙 <b>GitHub:</b> <a href="${personalProfile.links.github}" target="_blank" rel="noopener noreferrer" class="underline">github.com/ishasonaria568-prog</a><br>
• 🚩 <b>TryHackMe:</b> <a href="${personalProfile.links.tryhackme}" target="_blank" rel="noopener noreferrer" class="underline">CipherGhost24</a><br><br>
Inquiries typically receive a response within 24 hours!`,
  },
];

const PROMPT_CHIPS = [
  'Who is Isha?',
  'What does she do in SOC?',
  'What tools does she master?',
  'Top projects & playbooks?',
  'What are her certifications?',
  'How to get in touch?',
];

export const Hero: React.FC<HeroProps> = ({ onSelectTab, onOpenResume, onOpenTerminal }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'ai',
      text: `Hello, I'm Isha's official interactive portfolio dossier. 👋<br><br>What would you like to know about her cybersecurity projects, SOC L1 experience, tools, or TryHackMe credentials? Ask below or pick a prompt:`,
      isHtml: true,
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const handleAsk = (query: string) => {
    if (!query.trim() || isTyping) return;
    const cleanQuery = query.trim();

    // Add user message
    const userMsg: Message = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: cleanQuery,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Find response
    const lower = cleanQuery.toLowerCase();
    let bestAnswer = KNOWLEDGE_BASE[0].answer;
    let found = false;

    for (const item of KNOWLEDGE_BASE) {
      if (item.keywords.some((kw) => lower.includes(kw))) {
        bestAnswer = item.answer;
        found = true;
        break;
      }
    }

    if (!found) {
      bestAnswer = `Isha focuses on <b>Cybersecurity, SOC Incident Triage, and Threat Detection</b>.<br><br>
You can ask about her <b>projects</b> (like PhishGuard or Email Forensics), <b>tools</b> (Wireshark, Wazuh, Python), <b>TryHackMe Top 2% track record</b>, or direct <b>contact</b> info.<br><br>
What would you like to know next?`;
    }

    // Typing latency simulation like pw.is
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: bestAnswer,
          isHtml: true,
        },
      ]);
    }, 450);
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="relative overflow-hidden">
      {/* Hero Inner Container (matching pw.is hero-inner) */}
      <section
        id="profile"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-12 sm:pb-16"
        aria-labelledby="hero-title"
      >
        {/* Top Eyebrow Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#12355b]/10 dark:bg-[#0284c7]/20 text-[#12355b] dark:text-[#38bdf8] border border-[#12355b]/20 dark:border-[#0284c7]/30">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            CYBERSECURITY &amp; SOC OPERATOR
          </span>
          <span className="text-xs font-mono text-[#6b7785] dark:text-[#94a3b8] hidden sm:inline">
            // TOP 2% TRYHACKME
          </span>
        </div>

        {/* Large Editorial Headline (Instrument Serif, matching pw.is) */}
        <h1
          id="hero-title"
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#0c1620] dark:text-white leading-[1.05] mb-4 font-serif-pw"
        >
          Hi, I&apos;m Isha.
        </h1>

        {/* Hero Lead Paragraph (matching pw.is hero-lead) */}
        <p className="text-lg sm:text-xl md:text-2xl text-[#3b4754] dark:text-[#94a3b8] max-w-3xl leading-relaxed mb-8 font-sans-pw">
          What you want to know about Isha Sonaria, incident playbooks, or defensive capabilities — just ask her interactive dossier below.
        </p>

        {/* The Ask Widget (matching pw.is #ask container) */}
        <div
          id="ask"
          className="pw-card p-4 sm:p-6 mb-8 bg-[#ffffff] dark:bg-[#0f172a] shadow-lg border border-[#dfe3e8] dark:border-[#1e293b] rounded-[24px]"
        >
          {/* Ask Header */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#dfe3e8] dark:border-[#1e293b]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-wider text-[#0c1620] dark:text-white uppercase">
                Interactive AI Dossier // Isha Sonaria
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#6b7785] dark:text-[#94a3b8]">
              Local Browser Triage
            </span>
          </div>

          {/* Ask Thread Messages */}
          <div
            id="ask-thread"
            role="log"
            aria-live="polite"
            className="max-h-72 overflow-y-auto space-y-3.5 pr-1 mb-4 text-sm"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[88%] sm:max-w-[78%] rounded-2xl px-4 py-3 leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#12355b] text-white dark:bg-[#0284c7] font-medium shadow-sm'
                      : 'bg-[#f4f5f7] dark:bg-[#1e293b] text-[#0c1620] dark:text-[#f1f5f9] border border-[#dfe3e8] dark:border-[#334155]'
                  }`}
                >
                  {m.isHtml ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: m.text }}
                      className="space-y-1.5 [&_a]:text-[#ff5a36] [&_a]:underline"
                    />
                  ) : (
                    <span>{m.text}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator (matching pw.is typing dots) */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-[#f4f5f7] dark:bg-[#1e293b] border border-[#dfe3e8] dark:border-[#334155]">
                  <span className="w-2 h-2 rounded-full bg-[#6b7785] dark:bg-[#94a3b8] typing-dot" />
                  <span className="w-2 h-2 rounded-full bg-[#6b7785] dark:bg-[#94a3b8] typing-dot" />
                  <span className="w-2 h-2 rounded-full bg-[#6b7785] dark:bg-[#94a3b8] typing-dot" />
                </div>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Ask Form Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAsk(inputText);
            }}
            className="relative flex items-center mb-4"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask anything about Isha's background, SOC experience, projects..."
              className="w-full px-4 py-3 sm:py-3.5 pr-12 rounded-full bg-[#f4f5f7] dark:bg-[#1e293b] text-sm text-[#0c1620] dark:text-white border border-[#dfe3e8] dark:border-[#334155] focus:outline-none focus:border-[#12355b] dark:focus:border-[#0284c7] transition-all"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="absolute right-2 p-2 rounded-full bg-[#12355b] hover:bg-[#0b2644] dark:bg-[#0284c7] dark:hover:bg-[#0369a1] text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
              aria-label="Send question"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Chips (matching pw.is prompt chips) */}
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono text-[#6b7785] dark:text-[#94a3b8] block">
              SUGGESTED INQUIRIES:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {PROMPT_CHIPS.map((chip, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleAsk(chip)}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#f4f5f7] dark:bg-[#1e293b] hover:bg-[#eceef1] dark:hover:bg-[#334155] text-[#3b4754] dark:text-[#cbd5e1] border border-[#dfe3e8] dark:border-[#334155] transition-all cursor-pointer flex items-center gap-1.5 text-left"
                >
                  <span className="text-[10px] text-[#ff5a36] font-mono">Try</span>
                  <span>{chip}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Photo Strip / Visual Dossier Cards (matching pw.is photo-strip) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: SOC Command Deck */}
          <div className="pw-card p-5 bg-[#ffffff] dark:bg-[#0f172a] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#6b7785] dark:text-[#94a3b8] mb-2">
                <span>TELEMETRY DECK</span>
                <span className="text-[#10b981]">LIVE SIM</span>
              </div>
              <h3 className="text-xl font-normal text-[#0c1620] dark:text-white font-serif-pw mb-1">
                Wazuh SIEM &amp; Suricata
              </h3>
              <p className="text-xs text-[#3b4754] dark:text-[#94a3b8] leading-relaxed mb-4">
                Full-spectrum endpoint &amp; network IDS telemetry correlation, Sysmon parsing, and sub-minute alert triage.
              </p>
            </div>
            <div className="pt-3 border-t border-[#dfe3e8] dark:border-[#1e293b] flex items-center justify-between text-xs">
              <span className="font-mono text-[#12355b] dark:text-[#38bdf8] font-semibold">15,000+ Events/Day</span>
              <button
                onClick={() => onSelectTab('projects')}
                className="text-[#ff5a36] hover:underline font-medium inline-flex items-center gap-0.5 cursor-pointer"
              >
                <span>View Lab</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 2: Forensics & Investigation */}
          <div className="pw-card p-5 bg-[#ffffff] dark:bg-[#0f172a] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#6b7785] dark:text-[#94a3b8] mb-2">
                <span>DFIR WORKSTATION</span>
                <span className="text-[#38bdf8]">PCAP &amp; MIME</span>
              </div>
              <h3 className="text-xl font-normal text-[#0c1620] dark:text-white font-serif-pw mb-1">
                Traffic &amp; Email Forensics
              </h3>
              <p className="text-xs text-[#3b4754] dark:text-[#94a3b8] leading-relaxed mb-4">
                Wireshark TCP reassembly, suspicious hop detection, SPF/DKIM/DMARC analysis, and artifact extraction.
              </p>
            </div>
            <div className="pt-3 border-t border-[#dfe3e8] dark:border-[#1e293b] flex items-center justify-between text-xs">
              <span className="font-mono text-[#12355b] dark:text-[#38bdf8] font-semibold">100% True Positive Rate</span>
              <button
                onClick={() => onSelectTab('arsenal')}
                className="text-[#ff5a36] hover:underline font-medium inline-flex items-center gap-0.5 cursor-pointer"
              >
                <span>Arsenal</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Card 3: TryHackMe Top 2% Track Record */}
          <div className="pw-card p-5 bg-[#ffffff] dark:bg-[#0f172a] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-[#6b7785] dark:text-[#94a3b8] mb-2">
                <span>TRYHACKME GLOBAL</span>
                <span className="text-[#10b981]">TOP 2%</span>
              </div>
              <h3 className="text-xl font-normal text-[#0c1620] dark:text-white font-serif-pw mb-1">
                147 Completed Labs
              </h3>
              <p className="text-xs text-[#3b4754] dark:text-[#94a3b8] leading-relaxed mb-4">
                105-day unbroken streak, 1st place in Bronze, Silver &amp; Gold leagues, and Hackviser CORE verified credentials.
              </p>
            </div>
            <div className="pt-3 border-t border-[#dfe3e8] dark:border-[#1e293b] flex items-center justify-between text-xs">
              <span className="font-mono text-[#12355b] dark:text-[#38bdf8] font-semibold">105-Day Streak</span>
              <button
                onClick={() => onSelectTab('credentials')}
                className="text-[#ff5a36] hover:underline font-medium inline-flex items-center gap-0.5 cursor-pointer"
              >
                <span>Credentials</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
