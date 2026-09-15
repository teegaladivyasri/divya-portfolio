export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  inDevelopment?: boolean;
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

export interface CertificateDocument {
  id: string;
  title: string;
  image: string;
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
      github: "https://github.com/teegaladivyasri",
      linkedin: "https://www.linkedin.com/in/divya-sri-teegala-8b168935b/",
      instagram: "https://www.instagram.com/divyasri_teegala/",
    }
  },

  projects: [
    {
      id: "hirelens-ai",
      title: "HireLens AI",
      category: "Career & Resume Utility",
      description: "A resume and job-description analysis tool that compares a resume with a job description and helps identify the match, skills present, missing skills, and areas for improvement.",
      technologies: ["React", "TypeScript", "Next.js", "AI Integration", "Web APIs"],
      liveUrl: "https://hirelens-ivory.vercel.app/",
    },
    {
      id: "hiresphere-ai",
      title: "HireSphere AI",
      category: "Candidate Evaluation Platform",
      description: "An AI-based platform for candidate evaluation and structured interview assessment.",
      technologies: ["React", "TypeScript", "Next.js", "REST APIs"],
      liveUrl: "https://hiresphereai.vercel.app/",
    },
    {
      id: "back2u",
      title: "Back2U",
      category: "Community Platform",
      description: "A lost-and-found platform that helps people report, find, and recover misplaced items.",
      technologies: ["React", "State Management", "Responsive UI"],
      liveUrl: "https://find-it-back2u.vercel.app",
    },
    {
      id: "assessment-generator",
      title: "Assessment Generator",
      category: "Educational Utility",
      description: "A web tool for creating assessments and question papers based on selected requirements.",
      technologies: ["React", "JavaScript", "Custom CSS"],
      liveUrl: "https://assessment-generator-gilt.vercel.app",
    },
    {
      id: "quantum-voting",
      title: "Quantum Secure Electronic Voting System",
      category: "Security Exploration",
      description: "A project exploring a more secure electronic voting system using modern security concepts.",
      technologies: ["Cybersecurity", "Blockchain Architecture", "Security Protocols"],
      inDevelopment: true,
      statusBadge: "In Development",
    },
    {
      id: "police-attendance",
      title: "Police Attendance Management System",
      category: "Practical Duty Management",
      description: "A simple attendance management system built to help manage police personnel attendance and daily records.",
      technologies: ["Web Application", "Database Management", "Responsive Layout"],
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

  certificateDocuments: [
    {
      id: "cert-01",
      title: "Certificate 01",
      image: "/certifications/cert_01.jpg",
    },
    {
      id: "cert-02",
      title: "Certificate 02",
      image: "/certifications/cert_02.jpg",
    },
    {
      id: "cert-03",
      title: "Certificate 03",
      image: "/certifications/cert_03.jpg",
    },
    {
      id: "cert-04",
      title: "Certificate 04",
      image: "/certifications/cert_04.jpg",
    },
    {
      id: "cert-05",
      title: "Certificate 05",
      image: "/certifications/cert_05.jpg",
    },
    {
      id: "cert-06",
      title: "Certificate 06",
      image: "/certifications/cert_06.jpg",
    },
  ] as CertificateDocument[],

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

  singlePhoto: {
    file: "/photos/divya.jpg",
    alt: "Divya Sri Teegala",
  }
};
