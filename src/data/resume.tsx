import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, File } from "lucide-react";

export const DATA = {
  name: "Kanam Ramu",
  initials: "KR",
  url: "https://nowscripts.in",
  location: "India",
  locationLink: "https://www.google.com/maps/place/India",
  description:
    "ServiceNow Developer and AI & Full-Stack Enthusiast",
  summary:
    "I am a Computer Science and Engineering undergraduate passionate about ServiceNow development, ITSM, AI-powered automation, and full-stack technologies. I enjoy building practical projects and exploring new technologies. I am also building NowScripts, a free ServiceNow learning platform designed to help aspiring developers learn ServiceNow, prepare for certifications, and improve their technical skills.",
  avatarUrl: "/ramu.png",
  skillsByCategory: [
    {
      title: "ServiceNow Development",
      skills: [
        "Client Scripts",
        "Business Rules",
        "UI Policies",
        "UI Actions",
        "Script Includes",
        "GlideRecord",
        "Flow Designer",
        "Service Portal",
        "REST API Integrations",
      ],
    },
    {
      title: "Programming",
      skills: ["Java", "JavaScript", "Python", "SQL"],
    },
    {
      title: "Full-Stack Development",
      skills: ["HTML", "CSS", "React", "Spring Boot"],
    },
    {
      title: "Databases and Tools",
      skills: ["MySQL", "MongoDB", "Git", "GitHub", "VS Code"],
    },
    {
      title: "AI and Automation",
      skills: [
        "Generative AI",
        "LLMs",
        "Retrieval-Augmented Generation (RAG)",
        "AI-Powered Incident Summarization",
        "Workflow Automation",
      ],
    },
  ],
  skills: [
    "Client Scripts",
    "Business Rules",
    "UI Policies",
    "UI Actions",
    "Script Includes",
    "GlideRecord",
    "Flow Designer",
    "Service Portal",
    "REST API Integrations",
    "Java",
    "JavaScript",
    "Python",
    "SQL",
    "HTML",
    "CSS",
    "React",
    "Spring Boot",
    "MySQL",
    "MongoDB",
    "Git",
    "GitHub",
    "VS Code",
    "Generative AI",
    "LLMs",
    "Retrieval-Augmented Generation (RAG)",
    "AI-Powered Incident Summarization",
    "Workflow Automation",
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "mailto:kanamram@gmail.com",
      icon: File,
      label: "Resume",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ],
  contact: {
    email: "kanamram@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/kRamu81",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kanamramu581/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:kanamram@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  education: [
    {
      school: "K.S.R.M. College of Engineering",
      href: "#",
      degree: "B.Tech – Computer Science and Engineering",
      logoUrl: "/ksrm.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Sri Chaitanya Junior College",
      href: "#",
      degree: "Class XII – MPC",
      logoUrl: "/ajc.jpg",
      start: "2021",
      end: "2023",
    },
    {
      school: "The Nandyal Public School",
      href: "#",
      degree: "Class X",
      logoUrl: "/nandyal.png",
      start: "2019",
      end: "2021",
    },
  ],
  experience: [
    {
      company: "Java Full Stack Developer",
      href: "#",
      role: "",
      logoUrl: "/dev-icon.svg",
      start: "December 2025",
      end: "March 2026",
      description:
        "Focused on Java Full Stack Development, building practical skills in backend development, frontend technologies, database management, and web application development.",
      responsibilities: [
        "Develop backend applications using Core Java and Spring Boot.",
        "Build responsive user interfaces using HTML, CSS, and JavaScript.",
        "Work with SQL and databases to manage and retrieve application data.",
        "Understand REST API development and frontend-backend integration.",
        "Apply object-oriented programming principles and software development best practices.",
      ],
    },
  ],
  projects: [
    {
      title: "NowScripts",
      href: "https://nowscripts.in",
      dates: "Featured Project",
      active: true,
      description:
        "NowScripts is a free ServiceNow learning platform that helps aspiring developers learn ServiceNow fundamentals, explore CSA and CAD preparation resources, follow ITSM and development roadmaps, and practice interview questions.",
      technologies: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://nowscripts.in",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nowscripts-preview.png",
      video: "",
    },
    {
      title: "Facial Authentication Attendance System Using ServiceNow",
      href: "#",
      dates: "Project",
      active: true,
      description:
        "A smart attendance management project concept combining facial authentication with ServiceNow to streamline attendance recording and management workflows.",
      technologies: [
        "ServiceNow",
        "JavaScript",
        "REST APIs",
        "Facial Recognition",
      ],
      links: [],
      image: "/face-attendance-preview.jpg",
      video: "",
    },
    {
      title: "MediTrack",
      href: "https://github.com/kRamu81/MedTrack_Application",
      dates: "Project",
      active: true,
      description:
        "A healthcare-related tracking application focused on organizing relevant information and simplifying tracking workflows.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Java",
        "Spring Boot",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/kRamu81/MedTrack_Application",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/meditrack-preview.png",
      video: "",
    },
  ],

  certificate: [
    {
      title: "ServiceNow Certified Application Developer (CAD)",
      dates: "July 2026",
      description:
        "Validates technical expertise to design, develop, and implement custom ServiceNow applications.",
      image: "/servicenow.png",
      links: [
        {
          title: "View Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.credly.com/badges/423e625f-cdad-4368-9682-5c6c6620433c/public_url",
        },
      ],
    },
    {
      title: "ServiceNow Certified System Administrator (CSA)",
      dates: "June 2026",
      description:
        "Validates knowledge and skills to manage, configure, and maintain the ServiceNow platform.",
      image: "/servicenow.png",
      links: [
        {
          title: "View Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.credly.com/badges/db6282b7-d79a-4866-8786-062d325b29c4/public_url",
        },
      ],
    },
    {
      title: "GitHub Foundations",
      dates: "July 2026",
      description:
        "Demonstrates foundational proficiency in Git version control and GitHub collaboration features.",
      image: "/github-cert.png",
      links: [
        {
          title: "View Credential",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://learn.microsoft.com/api/credentials/share/en-us/KRamu581/C199A1784A699A4E",
        },
      ],
    },
  ],
} as const;
