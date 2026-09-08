export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  inDevelopment?: boolean;
  isModestPersonal?: boolean;
  visualPreviewType: 'browser-hiresphere' | 'browser-back2u' | 'browser-assessment' | 'schematic-voting' | 'editorial-police';
  statusBadge?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  domain: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  specialization: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialNote: string;
  skillsCovered: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Divya Sri Teegala",
    title: "Computer Science & Engineering",
    institution: "MVGR College of Engineering",
    tagline: "Exploring distributed architectures, secure systems, and thoughtful interfaces.",
    introLead: "B.Tech Computer Science student with a dedicated focus on IoT, Cybersecurity, and Blockchain technologies.",
    location: "Vizianagaram, Andhra Pradesh",
    academics: {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "MVGR College of Engineering",
      period: "2023–2027",
      cgpa: "8.12",
      specialization: "IoT, Cybersecurity & Blockchain",
    },
    contact: {
      email: "teegaladivyasri@gmail.com",
      github: "https://github.com/",
      linkedin: "https://linkedin.com/in/",
      instagram: "https://instagram.com/",
    }
  },

  projects: [
    {
      id: "hiresphere-ai",
      title: "HireSphere AI",
      category: "Full-Stack Intelligent System",
      tagline: "Streamlined candidate evaluation & intelligent interview assessment workflow.",
      description: "A unified platform built to modernize talent evaluation. It enables automated candidate assessment workflows, structured scoring rubrics, and real-time response analysis in an intuitive interface.",
      highlights: [
        "Interactive evaluation dashboard with dynamic interview scoring rubrics",
        "Responsive candidate workflow from submission to assessment report",
        "Refined user experience prioritizing clarity and unhurried review"
      ],
      technologies: ["React", "TypeScript", "Next.js", "REST APIs", "Modern CSS"],
      liveUrl: "https://hiresphereai.vercel.app/",
      visualPreviewType: "browser-hiresphere",
    },
    {
      id: "back2u",
      title: "Back2U",
      category: "Community Platform",
      tagline: "A purposeful bridge for lost items and their rightful owners.",
      description: "An intuitive lost-and-found reunion platform engineered to make reporting, identifying, and reclaiming misplaced belongings safe, prompt, and structured.",
      highlights: [
        "Structured claim verification flow to prevent fraudulent ownership claims",
        "Categorized item catalog with geo-aware campus/community filters",
        "Direct communication channel between finder and claimant"
      ],
      technologies: ["React", "Web Technologies", "State Management", "Responsive UI"],
      liveUrl: "https://find-it-back2u.vercel.app",
      visualPreviewType: "browser-back2u",
    },
    {
      id: "assessment-generator",
      title: "Assessment Generator",
      category: "Educational Utility",
      tagline: "Automated test creation and structured syllabus-to-evaluation pipeline.",
      description: "A focused web utility designed to compose balanced examination papers and topic assessments with configurable difficulty curves, question distributions, and answer key generation.",
      highlights: [
        "Configurable parameter presets for quick assessment formatting",
        "Instant document preview and clean print/export styling",
        "Structured modular questions handling multiple assessment tiers"
      ],
      technologies: ["React", "JavaScript", "Document DOM API", "Custom CSS"],
      liveUrl: "https://assessment-generator-gilt.vercel.app",
      visualPreviewType: "browser-assessment",
    },
    {
      id: "quantum-voting",
      title: "Quantum Secure Electronic Voting System",
      category: "Research & Systems",
      tagline: "Post-quantum cryptographic concepts applied to decentralized ballot integrity.",
      description: "An active research-driven project designing a tamper-evident voting protocol resistant to quantum computational attacks. Leverages cryptographic hash chains and lattice-based key principles for unalterable tallying.",
      highlights: [
        "Voter anonymity preservation paired with individual verifiable receipts",
        "Lattice-based encryption exploration for quantum resistance",
        "Decentralized ledger consensus preventing central authority ballot manipulation"
      ],
      technologies: ["Cybersecurity Protocols", "Post-Quantum Cryptography", "Blockchain Architecture", "Consensus Algorithms"],
      inDevelopment: true,
      statusBadge: "IN DEVELOPMENT",
      visualPreviewType: "schematic-voting",
    },
    {
      id: "police-attendance",
      title: "Police Attendance Management System",
      category: "Practical Duty Management",
      tagline: "A reliable daily muster roll and duty tracker built for departmental personnel.",
      description: "A practical, modest system built specifically for her father to modernize shift tracking, personnel attendance logs, and daily station roll-calls with clear accountability and zero unnecessary complexity.",
      highlights: [
        "Straightforward duty roll-call interface tailored for practical daily usage",
        "Personnel shift logging and attendance record preservation",
        "Built with purpose to solve an everyday departmental need"
      ],
      technologies: ["Web Technologies", "Database Management", "Form Validation", "Responsive Layout"],
      isModestPersonal: true,
      visualPreviewType: "editorial-police",
    }
  ] as Project[],

  experience: [
    {
      role: "Technology Officer",
      company: "NetMaxin Group",
      period: "Nov 2024 – Present",
      responsibilities: [
        "User Interface & Bug Fixing across core digital properties and client-facing interfaces",
        "Rigorous AI tools testing, verifying behavioral consistency and edge-case reliability",
        "Integration testing to ensure cross-service interoperability and stable release pipelines"
      ],
      domain: "Quality Assurance & Systems Engineering",
    }
  ] as ExperienceItem[],

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "MVGR College of Engineering",
      period: "2023–2027",
      cgpa: "8.12",
      specialization: "IoT, Cybersecurity & Blockchain",
    }
  ] as EducationItem[],

  certifications: [
    {
      id: "cert-iot-security",
      title: "Internet of Things & Embedded Systems Security",
      issuer: "MVGR Academic & Technical Specialization",
      year: "2024",
      credentialNote: "Core domain coursework covering device authentication, sensor mesh protocols, and hardware boundary security.",
      skillsCovered: ["IoT Protocols", "Device Security", "Network Edge"]
    },
    {
      id: "cert-cyber-foundations",
      title: "Foundations of Cybersecurity & Cryptographic Systems",
      issuer: "Academic Specialization Track",
      year: "2024",
      credentialNote: "In-depth study of asymmetric key exchange, symmetric ciphers, threat modeling, and defensive architecture.",
      skillsCovered: ["Cryptography", "Network Defense", "Threat Analysis"]
    },
    {
      id: "cert-blockchain-consensus",
      title: "Blockchain Architecture & Distributed Ledgers",
      issuer: "Specialization Curriculum",
      year: "2024",
      credentialNote: "Decentralized consensus mechanisms, smart contract lifecycle principles, and tamper-evident data structures.",
      skillsCovered: ["Distributed Ledgers", "Consensus Models", "Data Integrity"]
    },
    {
      id: "cert-software-testing",
      title: "Integration & Web Systems Verification",
      issuer: "NetMaxin Group Practicum",
      year: "2024–Present",
      credentialNote: "Applied testing standards, regression validation, UI stability audits, and systematic bug isolation.",
      skillsCovered: ["Integration Testing", "UI Verification", "Bug Tracking"]
    }
  ] as CertificationItem[],

  skillCategories: [
    {
      category: "Foundations & Languages",
      description: "Core programming and algorithmic problem solving",
      skills: ["C", "Python", "JavaScript / TypeScript", "SQL", "Data Structures & Algorithms"]
    },
    {
      category: "Web & Interface Architecture",
      description: "Building responsive, intentional web experiences",
      skills: ["HTML5 / Modern CSS", "React", "Next.js", "Component Design", "REST APIs", "Client State"]
    },
    {
      category: "Security, IoT & Blockchain",
      description: "Academic specialization and research areas",
      skills: ["Cryptographic Principles", "Network Security", "IoT Sensor Systems", "Blockchain Fundamentals", "Decentralized Consensus"]
    },
    {
      category: "Verification & Workflow",
      description: "Practiced during NetMaxin Group tenure and personal builds",
      skills: ["UI Bug Diagnosis", "Integration Testing", "AI Tools Quality Audits", "Git & GitHub", "Vercel Deployment"]
    }
  ] as SkillCategory[],

  photoPlaceholders: [
    { id: "photo-01", file: "/photos/divya_01.jpg", label: "01" },
    { id: "photo-02", file: "/photos/divya_02.jpg", label: "02" },
    { id: "photo-03", file: "/photos/divya_03.jpg", label: "03" },
    { id: "photo-04", file: "/photos/divya_04.jpg", label: "04" },
    { id: "photo-05", file: "/photos/divya_05.jpg", label: "05" },
  ]
};
