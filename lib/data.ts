export type ProjectFilter = "all" | "mern" | "dotnet" | "vue-quasar" | "realtime";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  filters: Exclude<ProjectFilter, "all">[];
  featured: boolean;
  backend: string[];
  uiState: string[];
  dataFlow: string[];
};

export const profile = {
  name: "Fardin Abu Ubaid",
  firstName: "Fardin",
  headline: "Full-Stack System Engineer & Software Architect",
  location: "Dhaka, Bangladesh",
  email: "fardin1.codezzi@gmail.com",
  phone: "+8801770366022",
  linkedin: "https://www.linkedin.com/in/fardin-abu-ubaid-29447b42b/",
  github: "https://github.com/FardinCodezzi1",
  remoteAvailable: true,
  photo: "/assets/FARDIN ABU UBAID.png",
  resumePath: "/assets/resume.pdf",
  summary:
    "Strategic Full-Stack System Engineer specializing in software architecture, end-to-end system design, and AI-integrated web applications.",
} as const;

export const heroPhrases = [
  "I build real-time systems.",
  "I architect UI component trees.",
  "I integrate AI into production workflows.",
  "I ship full-stack systems end to end.",
] as const;

export const impactStats = [
  { label: "~1.5 yrs experience", value: "1.5+" },
  { label: "Production systems shipped", value: "8+" },
  { label: "Peer-reviewed AI publication", value: "1" },
  { label: "Real-time systems at scale", value: "Live" },
] as const;

export const projectFilters: { id: ProjectFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "mern", label: "MERN" },
  { id: "dotnet", label: ".NET" },
  { id: "vue-quasar", label: "Vue / Quasar" },
  { id: "realtime", label: "Real-time" },
];

export const projects: Project[] = [
  {
    id: "skychat-skysms",
    title: "SkyChat & SkySMS",
    subtitle: "Real-time messaging & queue orchestration",
    summary:
      "Real-time message handling and queue orchestration designed for heavy concurrent load across chat and SMS delivery paths.",
    filters: ["mern", "realtime"],
    featured: true,
    backend: [
      "WebSocket-backed real-time message handling",
      "Queue orchestration for high-concurrency delivery",
      "REST API boundaries for messaging services",
    ],
    uiState: [
      "Live conversation and delivery state models",
      "Component trees for chat/SMS operator surfaces",
      "Responsive UI architecture for concurrent session views",
    ],
    dataFlow: [
      "Client events → real-time channel → queue workers",
      "Persisted message state synchronized across sessions",
      "Status feedback loop from queue outcomes to UI",
    ],
  },
  {
    id: "jonosheba",
    title: "Jonosheba",
    subtitle: "Civic management portal",
    summary:
      "Civic portal with complex multi-step forms and disciplined state management across citizen-facing workflows.",
    filters: ["mern", "vue-quasar"],
    featured: true,
    backend: [
      "Multi-tier civic management system architecture",
      "API design for multi-step workflow submissions",
      "Backend integrations supporting form validation and persistence",
    ],
    uiState: [
      "Complex multi-step form state machines",
      "Modular UI component layers for workflow stages",
      "Decoupled state management across long-running flows",
    ],
    dataFlow: [
      "Step data collected → validated → submitted via APIs",
      "Draft and progress state retained across sessions",
      "Admin/CMS surfaces consume the same domain models",
    ],
  },
  {
    id: "pcnd-pbeh",
    title: "PCND / PBEH",
    subtitle: "Full-stack multi-tier CMS platforms",
    summary:
      "End-to-end multi-tier architectures spanning backend, CMS, and web for enterprise client platforms including PCND and PBEH.",
    filters: ["mern", "dotnet"],
    featured: true,
    backend: [
      "Multi-tier Backend / CMS / Frontend system design",
      "Scalable backend integrations across MERN and .NET stacks",
      "API design for content and domain services",
    ],
    uiState: [
      "Design-token-driven UI component frameworks",
      "Modular frontend trees for CMS and public web",
      "Standardized component libraries across products",
    ],
    dataFlow: [
      "CMS content → domain APIs → web surfaces",
      "Shared data models across admin and public tiers",
      "End-to-end deployment of Backend, CMS, and Web layers",
    ],
  },
  {
    id: "pbgs-pbf",
    title: "PBGS & PBF",
    subtitle: "Enterprise multi-tier systems",
    summary:
      "Architected and deployed end-to-end multi-tier systems (Backend, CMS, Frontend Web) for PBGS and PBF platforms.",
    filters: ["mern", "dotnet"],
    featured: false,
    backend: [
      "End-to-end multi-tier system architecture",
      "Backend and CMS service boundaries",
      "Scalable integrations across client products",
    ],
    uiState: [
      "Reusable UI component frameworks",
      "Design tokens and modular frontend trees",
      "High-performance UI delivery patterns",
    ],
    dataFlow: [
      "Domain services → CMS → public web consumption",
      "Shared architectural patterns across sibling products",
      "Governed system modularity from prototype to production",
    ],
  },
  {
    id: "codezzi-platform",
    title: "Codezzi Platform",
    subtitle: "Corporate site & design system",
    summary:
      "Custom dark-themed corporate platform with bespoke UI animations and sleek layout architecture for Codezzi.",
    filters: ["mern"],
    featured: false,
    backend: [
      "Corporate platform content and service integrations",
      "Architecture aligned with in-house product standards",
    ],
    uiState: [
      "Bespoke UI animation and layout architecture",
      "Dark-themed design system and component trees",
      "Design-token-driven visual language",
    ],
    dataFlow: [
      "Content and marketing surfaces driven by platform architecture",
      "Shared UI foundations reused across Codezzi products",
    ],
  },
  {
    id: "proficient-boilerplate",
    title: "Enterprise Boilerplate Platform",
    subtitle: "Vue 3 + Quasar foundations",
    summary:
      "Modular feature architecture and foundational codebases for an enterprise boilerplate platform at Proficient Information Systems.",
    filters: ["vue-quasar"],
    featured: false,
    backend: [
      "Reusable API integration layers for client onboarding",
      "Decoupled service contracts for feature modules",
    ],
    uiState: [
      "Vue 3 + Quasar modular UI component layers",
      "Foundational boilerplate for rapid feature delivery",
      "Decoupled UI architecture to shorten delivery cycles",
    ],
    dataFlow: [
      "Feature modules → shared API integrations → client apps",
      "Boilerplate foundations accelerate system onboarding",
    ],
  },
];

export const competencies = [
  {
    id: "system-engineering",
    title: "System Engineering",
    description:
      "Databases, API design, queue orchestration, and multi-tier Backend/CMS/Web architectures across MERN and .NET.",
    icon: "server" as const,
  },
  {
    id: "ui-architecture",
    title: "UI Component Architecture",
    description:
      "Design tokens, Tailwind systems, modular component trees, and production-grade state management architecture.",
    icon: "layout" as const,
  },
  {
    id: "ai-engineering",
    title: "AI Engineering",
    description:
      "AI-assisted development workflows, LLM API integrations, and peer-reviewed healthcare AI research.",
    icon: "sparkles" as const,
  },
] as const;

export const research = {
  venue: "Journal of Medical Artificial Intelligence (JMAI)",
  role: "Co-Author",
  title: "Peer-reviewed research on applied artificial intelligence in healthcare",
  year: "2026",
  url: "https://jmai.amegroups.org/article/view/11322",
} as const;

export const education = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    org: "American International University-Bangladesh (AIUB)",
    detail: "Graduated 2025",
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    org: "Cisco Systems",
    detail: "Certification",
  },
] as const;

export const experience = [
  {
    id: "codezzi",
    role: "Associate Software Engineer L2",
    company: "Codezzi",
    location: "Dhaka, Bangladesh",
    period: "February 2026 – Present",
    highlights: [
      "Design and govern core system architectures and UI component frameworks across client and in-house products.",
      "Architected end-to-end multi-tier systems including SkyChat, SkySMS, Jonosheba, PBGS, PCND, PBF, PBEH, and the Codezzi Platform.",
      "Integrated AI-driven developer workflows to accelerate architectural prototyping and enforce clean system design.",
    ],
  },
  {
    id: "proficient",
    role: "Frontend Developer (Intern to Junior)",
    company: "Proficient Information Systems",
    location: "Dhaka, Bangladesh",
    period: "2024 – January 2026",
    highlights: [
      "Engineered modular feature architecture and foundational codebases using Vue 3 and Quasar Framework.",
      "Designed decoupled UI component layers and reusable API integrations to streamline client onboarding.",
      "Shortened system delivery cycles through reusable boilerplate foundations.",
    ],
  },
] as const;

export const techStack = [
  "React",
  "TypeScript",
  "Vue 3",
  "Quasar",
  "Angular",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  ".NET Core",
  "WebSockets",
  "REST APIs",
  "Git",
  "Vite",
] as const;

export const navLinks = [
  { href: "#architecture", label: "Architecture" },
  { href: "#competencies", label: "Competencies" },
  { href: "#research", label: "Research" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;
