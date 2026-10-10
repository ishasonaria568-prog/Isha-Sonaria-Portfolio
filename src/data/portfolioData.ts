// Official Isha Sonaria Cybersecurity Portfolio Data
// Verified & aligned with Candidate Resume & Credentials

export interface PersonalProfile {
  name: string;
  headline: string;
  tagline: string;
  summary: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  tryhackme: string;
  educationSummary: string;
  status: string;
}

export interface PracticalExperience {
  id: string;
  role: string;
  organization: string;
  program?: string;
  period: string;
  badge?: string;
  points: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  keyHighlights: string[];
  githubUrl: string;
  liveUrl?: string;
  stats?: { label: string; value: string }[];
  caseStudy?: {
    overview: string;
    threatModel: string[];
    technicalArchitecture: string[];
    keyDecisions: string[];
    testingAndValidation: string[];
  };
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  honors?: string;
  verificationUrl: string;
  competencies: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  metric?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: string[];
}

export interface EducationInfo {
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  scale: string;
  academicHonor: string;
  coursework: string[];
}

export const personalProfile: PersonalProfile = {
  name: "Isha Sonaria",
  headline: "SOC Analyst | Cybersecurity | Network Security | Ethical Hacking",
  tagline: "Focused on SOC operations, threat detection, email header forensics, and security tooling.",
  summary: "BCA graduate with an 8.30/10 CGPA and hands-on training in SOC operations, network security, ethical hacking, digital forensics, and vulnerability assessment. Experienced with Wazuh SIEM, Wireshark, Nmap, Burp Suite, Nuclei, Nikto, and Kali Linux for security monitoring, network analysis, reconnaissance, and incident triage. Top 2% TryHackMe practitioner with 100+ completed labs and practical experience building security tools, including an ML-based phishing URL detector, email header forensics analyzer, reconnaissance CLI, and PDF security tool. Seeking an entry-level SOC Analyst or Cybersecurity Analyst role to apply practical security skills in real-world environments.",
  location: "Veraval, Gujarat, India",
  phone: "+91 7096495430",
  email: "ishasonaria568@gmail.com",
  github: "https://github.com/ishasonaria568-prog",
  linkedin: "https://linkedin.com/in/isha-sonaria",
  tryhackme: "https://tryhackme.com/p/CipherGhost24",
  educationSummary: "BCA · 8.30/10 CGPA · Sem 1 Rank 1",
  status: "Seeking Entry-Level SOC / Cybersecurity Analyst Role",
};

export const heroStats = [
  {
    label: "TryHackMe Global Rank",
    value: "Top 2%",
    description: "Worldwide competitive standing",
    badge: "Global Ranking",
  },
  {
    label: "Completed Security Labs",
    value: "100+",
    description: "Hands-on labs & SOC scenarios",
    badge: "Verified Practice",
  },
  {
    label: "BCA CGPA",
    value: "8.30/10",
    description: "Semester 1 Rank 1 Honors",
    badge: "Academic Merit",
  },
  {
    label: "Cybersecurity Projects",
    value: "4",
    description: "Open-source defensive tools",
    badge: "Engineered Tools",
  },
];

export const aboutCards = [
  {
    title: "Location",
    value: "Veraval, Gujarat, India",
    detail: "Available for remote & on-site positions",
    type: "location",
  },
  {
    title: "Education",
    value: "Bachelor of Computer Applications",
    detail: "Bhakta Kavi Narsinh Mehta University (8.30 CGPA)",
    type: "education",
  },
  {
    title: "Focus",
    value: "SOC Operations & Network Security",
    detail: "Threat monitoring, log triage, forensics, VAPT",
    type: "focus",
  },
  {
    title: "Career Goal",
    value: "Entry-Level Cybersecurity Analyst",
    detail: "Targeting SOC L1, Blue Team, and Defense roles",
    type: "goal",
  },
];

export const practicalExperiences: PracticalExperience[] = [
  {
    id: "vrsecurity-soc",
    role: "SOC Operations Trainee",
    organization: "VRSecurity",
    program: "Cyber Security Fundamentals Program",
    period: "April 2026 – September 2026",
    badge: "GRAND MASTER",
    points: [
      "Monitored security events in Wazuh SIEM and prioritized or escalated malicious network anomalies.",
      "Conducted reconnaissance using Nmap, Nikto, Nuclei, and Wireshark.",
      "Identified exposed ports and potentially vulnerable services.",
    ],
  },
  {
    id: "thm-practitioner",
    role: "Cybersecurity Lab Practitioner & CTF Competitor",
    organization: "TryHackMe",
    period: "Continuous Practice",
    badge: "Top 2% Globally",
    points: [
      "Top 2% globally on TryHackMe platform.",
      "Completed 100+ cybersecurity labs.",
      "Practiced SOC L1 alert triage, network exploitation, web security, and Linux privilege escalation.",
      "Rank 1 in Bronze, Silver, and Gold leagues.",
      "Earned 20+ badges and maintained a 100+ day streak.",
    ],
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "networking-security",
    category: "Networking & Security",
    description: "Layered architecture, fundamental transport protocols, address translation, and network perimeter mapping.",
    skills: [
      "TCP/IP",
      "OSI Model",
      "DNS",
      "DHCP",
      "HTTP/HTTPS",
      "SSH",
      "FTP",
      "Subnetting",
      "Port Scanning",
    ],
  },
  {
    id: "soc-threat-defense",
    category: "SOC & Threat Defense",
    description: "Real-time security telemetry monitoring, incident response workflows, event correlation, and digital forensics.",
    skills: [
      "Wazuh SIEM",
      "Alert Triage",
      "Incident Response",
      "Network Traffic Analysis",
      "Digital Forensics",
      "Email Forensics",
      "VAPT",
      "IOC Extraction",
      "OSINT",
    ],
  },
  {
    id: "security-tools",
    category: "Security Tools",
    description: "Industry-standard diagnostic, packet inspection, network discovery, and security testing toolkits.",
    skills: [
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "SQLmap",
      "Nikto",
      "Nuclei",
      "WPScan",
      "Hydra",
      "Kali Linux",
    ],
  },
  {
    id: "programming-scripting",
    category: "Programming & Scripting",
    description: "Defensive tool engineering, log analysis scripting, automated scanners, and high-performance parsers.",
    skills: [
      "Python",
      "Go",
      "Bash",
      "PowerShell",
      "C",
      "C++",
      "Java",
      "JavaScript",
      "PHP",
    ],
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: "phishguard-ml",
    name: "PhishGuard ML",
    category: "Machine Learning / Threat Detection",
    tagline: "Offline ML-based Phishing URL Detector",
    description: "Offline phishing URL detector using Random Forest and 16 static URL features. Classifies URLs as Safe, Suspicious, or Phishing; supports batch scans with CSV/JSON export and scan history. Built with FastAPI, React, SQLite, and Docker with zero external API dependencies.",
    technologies: ["Python", "FastAPI", "scikit-learn", "React", "SQLite", "Docker"],
    keyHighlights: [
      "Offline phishing URL detector using Random Forest and 16 static URL features",
      "Safe, Suspicious, or Phishing classification logic",
      "Batch scans with CSV/JSON export and historical scan auditing",
      "FastAPI + React app with SQLite storage and Docker support",
      "Zero external API keys required (fully self-contained inference)",
    ],
    githubUrl: "https://github.com/ishasonaria568-prog/phishguard-ml",
    liveUrl: "https://phishguard-ml-six.vercel.app",
    stats: [
      { label: "Features Extracted", value: "16 Static" },
      { label: "Inference Mode", value: "100% Offline" },
      { label: "Classifier", value: "Random Forest" },
    ],
    caseStudy: {
      overview: "PhishGuard was built to address zero-hour phishing attacks where domains are registered minutes before a campaign and do not yet appear in public threat feeds. By evaluating the structural anatomy of the URL string directly, analysts can triage links safely in isolated environments.",
      threatModel: [
        "Homoglyph attacks and character substitutions impersonating banking portals",
        "Excessive subdomain chaining masking true destination servers",
        "IP-based hostnames bypassing standard domain reputation services",
        "Encoded path parameters concealing malicious download payloads",
      ],
      technicalArchitecture: [
        "Lexical Extraction Engine: Computes string entropy, token counts, digit-to-letter ratios, and symbol frequencies.",
        "Machine Learning Pipeline: Random Forest ensemble model trained on verified legitimate and phishing corpus.",
        "FastAPI Service: High-speed async prediction endpoint returning numerical threat scores.",
        "Client UI: Responsive dashboard with interactive URL token breakdown and batch scanning.",
      ],
      keyDecisions: [
        "Chose Random Forest over complex deep learning for interpretability and zero GPU dependency in air-gapped environments.",
        "Enforced 100% offline static feature parsing to ensure sensitive URLs and internal intranet links are never leaked.",
        "Structured transparent risk indicators so SOC L1 analysts can immediately understand why a URL was flagged.",
      ],
      testingAndValidation: [
        "Benchmarked across mixed legitimate and malicious URL datasets with rapid sub-15ms response latency.",
        "Successfully flagged high-entropy typo-squatted banking URLs without false alarms on standard CDNs.",
      ],
    },
  },
  {
    id: "email-header-forensics",
    name: "Email Header Forensics",
    category: "Digital Forensics / Email Security",
    tagline: "Authentication & Transport Hop Forensic Analyzer",
    description: "Analyzes sender domains, email authentication, mail-routing hops, and Reply-To mismatches. Detects SPF, DKIM, and DMARC failures, classifies IPv4/IPv6 transit hops, calculates a 0–100 risk score, and exports structured JSON forensic reports.",
    technologies: ["Go", "JavaScript", "REST API"],
    keyHighlights: [
      "Go parser analyzing sender domains, email authentication, and transit hops",
      "Detects SPF, DKIM, DMARC failures and Return-Path / Reply-To mismatches",
      "Visualizes mail-routing hops chronologically from origin to destination",
      "0–100 risk score algorithm with comprehensive JSON report export",
      "Works locally for confidential security triage without external data transit",
    ],
    githubUrl: "https://github.com/ishasonaria568-prog/email-header-forensics",
    liveUrl: "https://email-header-forensics.vercel.app",
    stats: [
      { label: "Core Parser", value: "Go (Golang)" },
      { label: "Auth Checks", value: "SPF/DKIM/DMARC" },
      { label: "Scoring Metric", value: "0–100 Risk" },
    ],
    caseStudy: {
      overview: "Investigating business email compromise (BEC) and phishing requires precise tracking of intermediate mail transfer agents (MTAs). This tool delivers structured visibility into the message custody chain without requiring analysts to parse cryptic multi-hop headers manually.",
      threatModel: [
        "Display name spoofing and mismatch between 'From' and 'Reply-To' domains",
        "Authentication bypass via forged or missing SPF and DKIM signatures",
        "Open relay exploitation and suspicious IP transit through untrusted subnets",
        "Social engineering keywords in subject headers commonly associated with urgent wire transfers",
      ],
      technicalArchitecture: [
        "Go Backend Parser: High-performance regular expression and MIME scanner processing headers in sub-millisecond execution time.",
        "Authentication Module: Extracts Authentication-Results and Received-SPF clauses to evaluate pass, softfail, and fail statuses.",
        "Hop Visualizer: Interactive Canvas diagram rendering transmission sequence chronologically from sender to recipient.",
        "Threat Scoring Algorithm: Weighted penalty system compounding authentication failures, mismatched reply domains, and high-risk keywords.",
      ],
      keyDecisions: [
        "Built parsing core in Go for safe memory management and fast execution.",
        "Engineered an offline browser fallback mode so analysts can paste sensitive incident headers without transmitting data over a network.",
        "Explicitly labeled threat scores as heuristic leads to maintain investigative integrity and avoid false-positive dismissals.",
      ],
      testingAndValidation: [
        "Tested with raw headers from real phishing samples, DKIM-signed newsletters, and internal corporate transit records.",
        "Successfully highlighted spoofed return paths matching common executive wire-fraud indicators.",
      ],
    },
  },
  {
    id: "subscope",
    name: "SubScope",
    category: "Reconnaissance / Attack Surface",
    tagline: "Multithreaded Subdomain Enumeration & Service Probe",
    description: "Multithreaded command-line reconnaissance utility for subdomain enumeration, asynchronous DNS resolution, and active HTTP/HTTPS service verification. Generates structured CSV and terminal reports for attack-surface mapping.",
    technologies: ["Python", "Multithreading", "CLI"],
    keyHighlights: [
      "Multithreaded CLI for high-speed automated subdomain enumeration",
      "Asynchronous DNS resolution with wildcard record filtering",
      "HTTP/HTTPS service inspection, status code extraction, and title probing",
      "Clean CSV spreadsheet and terminal tabular attack surface reporting",
      "Zero heavyweight external dependencies for clean Kali Linux operation",
    ],
    githubUrl: "https://github.com/ishasonaria568-prog/SubScope",
    stats: [
      { label: "Concurrency", value: "Multithreaded" },
      { label: "Targeting", value: "DNS + HTTP(S)" },
      { label: "Output", value: "CSV & Terminal" },
    ],
    caseStudy: {
      overview: "SubScope bridges the gap between lightweight single-purpose DNS scripts and heavy, complex reconnaissance suites. It delivers fast, reliable, and false-positive-free attack surface mapping in both command-line environments and automated CI pipelines.",
      threatModel: [
        "Dangling CNAME records pointing to decommissioned external hosts (Subdomain Takeover)",
        "Unauthenticated staging and development portals exposing internal API endpoints",
        "Outdated legacy web applications residing on forgotten external perimeters",
        "Sensitive management portals exposed to public DNS without firewall ingress filtering",
      ],
      technicalArchitecture: [
        "Thread Pool Orchestrator: Dynamically manages worker threads with configurable concurrency limits and graceful exception handling.",
        "DNS Query Engine: Leverages dnspython with custom nameserver rotation to eliminate throttling and detect wildcard DNS configurations.",
        "Active Web Prober: Tests ports 80, 443, 8080, and 8443, extracting status codes, server headers, and HTML page titles.",
        "Export Engine: Produces formatted terminal tables, parseable JSON files, and clean CSV spreadsheets ready for vulnerability analysis.",
      ],
      keyDecisions: [
        "Implemented active wildcard DNS baseline testing to eliminate cascading false positives from wildcard records.",
        "Maintained zero heavy compiled dependencies to run out-of-the-box on Kali Linux, Debian, or Docker containers.",
        "Structured standard outputs so results can be directly piped into downstream security scanners like Nuclei or Nmap.",
      ],
      testingAndValidation: [
        "Tested against large candidate wordlists, resolving 5,000+ candidate hostnames in under 90 seconds in benchmark testing.",
        "Successfully uncovered live staging microservices and dangling CNAME records in authorized CTF lab environments.",
      ],
    },
  },
  {
    id: "pdf-fortress",
    name: "PDF Fortress",
    category: "Document Security & Cryptography",
    tagline: "PDF Security, Password Protection & Verification",
    description: "Defensive CLI and GUI utility for PDF password protection, document hardening, and output verification. Implements AES-256 encryption, scrubs sensitive author/EXIF metadata, and inspects object streams for dangerous actions.",
    technologies: ["Python", "CLI", "GUI"],
    keyHighlights: [
      "CLI and GUI tool for PDF security with password protection",
      "Verifies output to confirm PDFs are protected correctly",
      "Scans for malicious object streams (/JavaScript, /Launch actions)",
      "Scrubs author and EXIF metadata to prevent information leakage",
      "AES-256 standard cryptographic encryption with owner/user tiers",
    ],
    githubUrl: "https://github.com/ishasonaria568-prog/pdf-fortress",
    liveUrl: "https://pdf-fortress.vercel.app",
    stats: [
      { label: "Interfaces", value: "CLI & GUI" },
      { label: "Encryption", value: "AES-256" },
      { label: "Audit", value: "Stream & Metadata" },
    ],
    caseStudy: {
      overview: "PDF Fortress was engineered as a dual-mode defensive utility for security analysts and privacy-conscious users to safely inspect untrusted PDF attachments, purge information disclosures, and lock down confidential documents with robust cryptography.",
      threatModel: [
        "Spear-phishing attachments with obfuscated JavaScript streams and automatic launch triggers",
        "Information disclosure through leaked operating system paths, author names, and software build numbers in metadata",
        "Unauthorized document alteration, copying, or printing during untrusted transmission",
        "Cleartext transport of sensitive legal, financial, or academic records",
      ],
      technicalArchitecture: [
        "Object Stream Inspector: Traverses PDF cross-reference tables (XREF) to isolate compressed object streams and inspect for known attack primitives.",
        "Cryptographic Hardening Module: Applies standardized 256-bit AES encryption with granular permission bitmasks.",
        "Metadata Sanitizer: Strips PDF document information dictionaries (Title, Author, Subject, Creator, Producer) and XMP metadata streams.",
        "Dual Interface Orchestration: Seamless CLI script for automated batch pipelines and responsive desktop GUI for operator analysis.",
      ],
      keyDecisions: [
        "Separated analysis routines into read-only memory buffers to prevent arbitrary code execution from malicious PDF exploits.",
        "Implemented both Owner and User password tiers compliant with ISO 32000-1 PDF standard specifications.",
        "Designed comprehensive output verification reports highlighting cleaned metadata and encryption cipher modes.",
      ],
      testingAndValidation: [
        "Tested against benign and weaponized sample documents, successfully isolating embedded action triggers without rendering hazards.",
        "Verified encrypted outputs across Adobe Acrobat, Google Chrome, and Preview with zero format corruption.",
      ],
    },
  },
];

export const achievementsList: AchievementItem[] = [
  {
    id: "thm-top-2",
    title: "Top 2% Globally on TryHackMe",
    subtitle: "Demonstrated competitive percentile standing across global practitioners",
    category: "TryHackMe",
    metric: "Top 2%",
    highlight: true,
  },
  {
    id: "thm-100-labs",
    title: "100+ Completed Security Labs",
    subtitle: "Hands-on rooms in SOC L1 triage, network exploitation, and forensics",
    category: "Practical Labs",
    metric: "100+",
    highlight: true,
  },
  {
    id: "thm-badges",
    title: "20+ Badges Earned",
    subtitle: "Specialized badges covering defense, exploitation, forensics & OSINT",
    category: "Certifications",
    metric: "20+",
    highlight: false,
  },
  {
    id: "thm-streak",
    title: "100+ Day Learning Streak",
    subtitle: "Continuous daily hands-on solving and defensive methodology practice",
    category: "Dedication",
    metric: "100+ Days",
    highlight: true,
  },
  {
    id: "thm-leagues",
    title: "Rank 1 in Bronze, Silver, & Gold Leagues",
    subtitle: "Achieved 1st place in consecutive TryHackMe competitive league standings",
    category: "Competitions",
    metric: "Rank 1",
    highlight: true,
  },
  {
    id: "bca-rank-1",
    title: "BCA Semester 1 Rank 1",
    subtitle: "Top academic standing in undergraduate computer applications program",
    category: "Academics",
    metric: "Rank 1",
    highlight: true,
  },
];

export const certificationsList: Certification[] = [
  {
    id: "vrsecurity-csfp",
    title: "Cyber Security Fundamentals Program (CSFP)",
    issuer: "VRSecurity",
    date: "September 2026",
    credentialId: "ID-VRS-008",
    honors: "GRAND MASTER",
    verificationUrl: "https://www.vrsecurity.in/CERT/ID-VRS-008.pdf",
    competencies: [
      "Monitored security events in Wazuh SIEM",
      "Network reconnaissance with Nmap, Nikto, Nuclei & Wireshark",
      "Prioritized and escalated malicious network anomalies",
      "Identified exposed ports and potentially vulnerable services",
    ],
  },
  {
    id: "hackviser-core",
    title: "Certified Cybersecurity Foundations (CORE)",
    issuer: "Hackviser",
    date: "July 2026",
    credentialId: "HV-CORE-HO4ESOYZ",
    verificationUrl: "https://hackviser.com/verify/HV-CORE-HO4ESOYZ",
    competencies: [
      "Core cybersecurity terminology, concepts & architectural models",
      "Network security protocols, transport security & defense foundations",
      "Vulnerability assessment methodologies & attack vector categorization",
      "Defensive security operations & security monitoring principles",
    ],
  },
];

export const educationData: EducationInfo = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Bhakta Kavi Narsinh Mehta University",
  location: "Gujarat, India",
  period: "2023–2026",
  cgpa: "8.30",
  scale: "/ 10",
  academicHonor: "Semester 1 Rank 1",
  coursework: [
    "Computer Networks & Data Communications",
    "Operating Systems & Linux Architecture",
    "Relational Database Management Systems (RDBMS)",
    "Object-Oriented Programming (C++, Java, Python)",
    "Data Structures & Algorithms",
    "Web Technologies & Application Security",
  ],
};
