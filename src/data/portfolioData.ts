// Verified Isha Sonaria Cybersecurity Portfolio Data — Aligned with Official Resume

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
  image?: string;
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

export interface ThmAchievement {
  name: string;
  category: string;
  description: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  skills: {
    name: string;
    role: string;
    proficiency: 'Practical' | 'Working Knowledge';
  }[];
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
  linkedin: "https://www.linkedin.com/in/isha-sonaria",
  tryhackme: "https://tryhackme.com/p/CipherGhost24",
  educationSummary: "BCA · 8.30/10 CGPA · Sem 1 Rank 1",
  status: "Seeking Entry-Level SOC / Cybersecurity Analyst Role",
};

export const practicalExperiences: PracticalExperience[] = [
  {
    id: "vrsecurity-soc",
    role: "SOC Operations Trainee",
    organization: "VRSecurity",
    program: "Cyber Security Fundamentals Program",
    period: "Apr 2026 – Sep 2026",
    badge: "GRAND MASTER",
    points: [
      "Monitored security events in Wazuh SIEM; prioritized and escalated malicious network anomalies.",
      "Ran reconnaissance with Nmap, Nikto, Nuclei, and Wireshark to find exposed ports and vulnerable services.",
    ],
  },
  {
    id: "thm-practitioner",
    role: "Cybersecurity Lab Practitioner & CTF Competitor",
    organization: "TryHackMe",
    period: "Continuous Practice",
    badge: "Top 2% Globally",
    points: [
      "Completed 100+ labs: SOC L1 alert triage, network exploitation, web security, Linux privilege escalation.",
      "Rank 1 in Bronze, Silver, Gold leagues; 20+ badges, 100+ day streak.",
    ],
  },
];

export const tryHackMeData = {
  profileUrl: "https://tryhackme.com/p/CipherGhost24",
  username: "CipherGhost24",
  roomsCompleted: 147,
  badgesEarned: 23,
  streakDays: 105,
  globalRank: "Top 2%",
  leagues: [
    { title: "Bronze League", position: "Rank 1", note: "Promoted to Silver" },
    { title: "Silver League", position: "Rank 1", note: "Promoted to Gold" },
    { title: "Gold League", position: "Rank 1", note: "Competitive league winner" },
  ],
  verifiedAchievements: [
    { name: "Bronze League — 1st Place", category: "Leagues", description: "Finished 1st place in TryHackMe weekly competitive Bronze League.", highlight: true },
    { name: "Silver League — 1st Place", category: "Leagues", description: "Finished 1st place in TryHackMe weekly competitive Silver League.", highlight: true },
    { name: "Gold League — 1st Place", category: "Leagues", description: "Promoted and took 1st place in TryHackMe competitive Gold League.", highlight: true },
    { name: "105-Day Active Streak", category: "Dedication", description: "Maintained continuous daily hands-on problem-solving in security labs.", highlight: true },
    { name: "100% True Positive Rate", category: "SOC & Defense", description: "Accurately triaged detection alerts without missing malicious indicators.", highlight: true },
    { name: "First Alert Closed", category: "SOC & Defense", description: "Completed investigation and closed initial security alert in SOC lab scenario.", highlight: true },
    { name: "Logging Legend", category: "SOC & Defense", description: "Analyzed security event logs, syslogs, and Windows event IDs for anomaly detection.", highlight: false },
    { name: "OWASP Top 10", category: "Web Security", description: "Demonstrated practical exploitation and remediation of core web vulnerabilities.", highlight: true },
    { name: "OhSINT", category: "OSINT", description: "Executed open-source intelligence gathering to trace threat actor footprints.", highlight: false },
  ],
  focusAreas: [
    "SOC L1 Alert Triage & Incident Workflow",
    "Deep Packet Inspection & Network Forensics",
    "Endpoint & Syslog Anomaly Investigation",
    "OWASP Web Security Testing & Remediation",
  ],
};

export const projectsData: ProjectItem[] = [
  {
    id: "phishguard-ml",
    name: "PhishGuard ML",
    category: "Machine Learning / Phishing Detection",
    tagline: "Offline ML-based Phishing URL Detection & Feature Anatomy Engine",
    description: "Offline phishing URL detector using Random Forest and 16 static URL features. Classifies URLs as Safe, Suspicious, or Phishing; batch scans with CSV/JSON export and scan history. FastAPI + React app with SQLite storage and Docker support; no external API keys needed.",
    image: "/src/assets/images/phishguard_ml_preview_1791611822868.jpg",
    technologies: ["Python", "FastAPI", "scikit-learn", "React", "SQLite", "Docker"],
    keyHighlights: [
      "Offline phishing URL detector using Random Forest and 16 static URL features",
      "Classifies URLs as Safe, Suspicious, or Phishing",
      "Batch scans with CSV/JSON export and local scan history",
      "FastAPI + React app with SQLite storage and Docker support",
      "Zero external API keys needed (fully offline inference)",
    ],
    githubUrl: "https://github.com/ishasonaria568-prog/phishguard-ml",
    liveUrl: "https://phishguard-ml-six.vercel.app/",
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
        "Benchmarked across mixed legitimate and malicious URL datasets, achieving 86.7% baseline accuracy on unseen samples.",
        "Successfully flagged high-entropy typo-squatted banking URLs with under 15ms response latency.",
      ],
    },
  },
  {
    id: "email-header-forensics",
    name: "Email Header Forensics",
    category: "Digital Forensics / Email Security",
    tagline: "Two-Tier Email Transport & Authentication Forensic Investigator",
    description: "Go parser that extracts authentication records, sender domains, and mail-routing hops. Detects SPF, DKIM, DMARC failures and Reply-To mismatches; classifies IPv4/IPv6 hops. 0–100 risk score with JSON report export; works offline for local analysis.",
    image: "/src/assets/images/email_header_preview_1791611835172.jpg",
    technologies: ["Go", "JavaScript", "REST API", "HTML", "CSS", "Canvas"],
    keyHighlights: [
      "Go parser that extracts authentication records, sender domains, and mail-routing hops",
      "Detects SPF, DKIM, DMARC failures and Reply-To mismatches",
      "Classifies IPv4/IPv6 hops and flags relay anomalies",
      "0–100 risk score with JSON report export",
      "Works offline in-browser for confidential local triage",
    ],
    githubUrl: "https://github.com/ishasonaria568-prog/email-header-forensics",
    liveUrl: "https://email-header-forensics.vercel.app/",
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
    tagline: "Automated Multithreaded Subdomain Enumeration & Surface Scanner",
    description: "Multithreaded CLI for subdomain enumeration, DNS resolution, and HTTP/HTTPS verification. CSV and terminal reports for attack-surface mapping.",
    technologies: ["Python", "Multithreading", "CLI", "DNS Resolver", "Requests"],
    keyHighlights: [
      "Multithreaded CLI for automated subdomain enumeration",
      "Asynchronous DNS resolution with wildcard filtering",
      "HTTP/HTTPS service inspection & status probing",
      "CSV and terminal reports for attack-surface mapping",
      "High performance across large wordlists",
    ],
    githubUrl: "https://github.com/ishasonaria568-prog/SubScope",
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
    category: "Document Security / Forensics",
    tagline: "Defensive PDF Analysis, Cryptographic Password Protection & Verification",
    description: "CLI and GUI tool for PDF security with password protection. Verifies output to confirm PDFs are protected correctly, strips metadata, and analyzes streams.",
    image: "/src/assets/images/pdf_fortress_preview_1791611847045.jpg",
    technologies: ["Python", "CLI", "GUI", "PyMuPDF", "Cryptography"],
    keyHighlights: [
      "CLI and GUI tool for PDF security with password protection",
      "Verifies output to confirm PDFs are protected correctly",
      "Scans for malicious object streams (/JavaScript, /Launch)",
      "Scrubs author and EXIF metadata leakage",
      "AES-256 standard cryptographic encryption",
    ],
    githubUrl: "https://github.com/ishasonaria568-prog/pdf-fortress",
    liveUrl: "https://pdf-fortress.vercel.app/",
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

export const certificationsList: Certification[] = [
  {
    id: "vrsecurity-csfp",
    title: "Cyber Security Fundamentals Program (CSFP)",
    issuer: "VRSecurity",
    date: "Sep 2026",
    credentialId: "ID-VRS-008",
    honors: "GRAND MASTER",
    verificationUrl: "https://www.vrsecurity.in/CERT/ID-VRS-008.pdf",
    competencies: [
      "SOC event monitoring in Wazuh SIEM",
      "Network reconnaissance with Nmap, Nikto, Nuclei & Wireshark",
      "Malicious network anomaly prioritization & escalation",
      "Exposed port & vulnerable service enumeration",
    ],
  },
  {
    id: "hackviser-core",
    title: "Certified Cybersecurity Foundations (CORE)",
    issuer: "Hackviser",
    date: "Jul 2026",
    credentialId: "HV-CORE-HO4ESOYZ",
    verificationUrl: "https://hackviser.com/verify/HV-CORE-HO4ESOYZ",
    competencies: [
      "Core Cybersecurity Terminology & Architecture",
      "Network Security & Protocol Fundamentals",
      "Vulnerability Analysis & Attack Vectors",
      "Security Operations & Defensive Mechanisms",
      "Cryptography & Identity Protection Basics",
    ],
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    id: "networking-security",
    category: "Networking & Security",
    description: "Core protocols, packet framing, and network infrastructure fundamentals.",
    skills: [
      { name: "TCP/IP & OSI Model", role: "Layered architecture, packet lifecycle, and handshake analysis", proficiency: "Practical" },
      { name: "DNS & DHCP", role: "Domain resolution, record analysis, and IP allocation", proficiency: "Practical" },
      { name: "HTTP / HTTPS", role: "Web application transport, TLS inspection, and header analysis", proficiency: "Practical" },
      { name: "SSH & FTP", role: "Secure remote administration and transport protocols", proficiency: "Practical" },
      { name: "Subnetting & Port Scanning", role: "IPv4/IPv6 address segmentation and service discovery", proficiency: "Practical" },
    ],
  },
  {
    id: "soc-threat-defense",
    category: "SOC & Threat Defense",
    description: "Security operations, event monitoring, alert triage, and incident response.",
    skills: [
      { name: "Wazuh SIEM", role: "Security event surveillance, rule matches, and agent telemetry", proficiency: "Practical" },
      { name: "Alert Triage", role: "Prioritizing and escalating verified network anomalies", proficiency: "Practical" },
      { name: "Incident Response", role: "Containment logic, evidence triage, and escalation procedures", proficiency: "Practical" },
      { name: "Network Traffic Analysis", role: "PCAP inspection, protocol anomaly detection, stream following", proficiency: "Practical" },
      { name: "Digital & Email Forensics", role: "MIME transit reconstruction, SPF/DKIM validation, artifact analysis", proficiency: "Practical" },
      { name: "VAPT & IOC Extraction", role: "Vulnerability assessment and Indicator of Compromise extraction", proficiency: "Practical" },
      { name: "OSINT", role: "Open-source intelligence gathering and threat reconnaissance", proficiency: "Practical" },
    ],
  },
  {
    id: "security-tools",
    category: "Security Tools",
    description: "Industry-standard diagnostic and auditing utilities.",
    skills: [
      { name: "Wireshark", role: "Deep packet inspection and protocol decoding", proficiency: "Practical" },
      { name: "Nmap", role: "Network discovery, port scanning, and NSE scripts", proficiency: "Practical" },
      { name: "Burp Suite", role: "Web proxy interception and application security testing", proficiency: "Practical" },
      { name: "Metasploit", role: "Auxiliary modules and controlled exploit verification", proficiency: "Practical" },
      { name: "SQLmap", role: "Automated SQL injection testing and validation", proficiency: "Practical" },
      { name: "Nikto & Nuclei", role: "Web server misconfiguration and template vulnerability scanning", proficiency: "Practical" },
      { name: "WPScan & Hydra", role: "CMS vulnerability scanning and logon security testing", proficiency: "Practical" },
      { name: "Kali Linux CLI", role: "Primary Linux offensive and defensive testing environment", proficiency: "Practical" },
    ],
  },
  {
    id: "programming-scripting",
    category: "Programming & Scripting",
    description: "Languages used for defensive tooling, parsers, and automation.",
    skills: [
      { name: "Python", role: "Security scripts, CLI tools, ML models, and FastAPI backends", proficiency: "Practical" },
      { name: "Go (Golang)", role: "High-performance MIME parsers and concurrent network utilities", proficiency: "Practical" },
      { name: "Bash & PowerShell", role: "Linux and Windows automation, log triage, and scripting", proficiency: "Practical" },
      { name: "C & C++", role: "System-level concepts, memory management, and socket basics", proficiency: "Working Knowledge" },
      { name: "Java & JavaScript", role: "Application development, REST APIs, and forensic visualizations", proficiency: "Practical" },
      { name: "PHP & SQL", role: "Web application backend testing, database queries, and hardening", proficiency: "Practical" },
    ],
  },
];

export const educationData: EducationInfo = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Bhakta Kavi Narsinh Mehta University",
  location: "Gujarat, India",
  period: "2023 – 2026",
  cgpa: "8.30",
  scale: "/ 10",
  academicHonor: "Sem 1 Rank 1",
  coursework: [
    "Computer Networks & Data Communications",
    "Operating Systems & Linux Architecture",
    "Relational Database Management Systems (RDBMS)",
    "Object-Oriented Programming (C++, Java, Python)",
    "Data Structures & Algorithms",
    "Web Technologies & Application Security",
  ],
};
