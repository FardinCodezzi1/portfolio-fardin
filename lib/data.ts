export type ProjectType = "websites" | "applications";

export type TechId =
  | "nextjs"
  | "nestjs"
  | "react"
  | "angular"
  | "dotnet"
  | "tailwind"
  | "typescript"
  | "javascript"
  | "html"
  | "css"
  | "scss"
  | "framer"
  | "quasar"
  | "postgres"
  | "mysql"
  | "mssql"
  | "plsql"
  | "csharp"
  | "cpp"
  | "node";

export type WebsiteStacks = {
  backend: TechId[];
  websiteSpa: TechId[];
  cmsSpa: TechId[];
};

export type ApplicationStacks = {
  frontendSpa: TechId[];
  backend: TechId[];
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  type: ProjectType;
  order: number;
  featured: boolean;
  techTags: TechId[];
  imageDir: string;
  previewImages: string[];
  backend: string[];
  uiState: string[];
  dataFlow: string[];
  stacks: WebsiteStacks | ApplicationStacks;
};

export const profile = {
  name: "Fardin Abu Ubaid",
  firstName: "Fardin",
  headline: "Full-Stack System Engineer & Software Architect",
  location: "Dhaka, Bangladesh",
  email: "fardin1.codezzi@gmail.com",
  linkedin: "https://www.linkedin.com/in/fardin-abu-ubaid-29447b42b/",
  github: "https://github.com/FardinCodezzi1",
  remoteAvailable: true,
  photo: "/assets/FARDIN ABU UBAID.png",
  resumePath: "/assets/resume.pdf",
  worldMap: "/assets/WorldMap/world.svg",
  summary:
    "Strategic Full-Stack System Engineer specializing in software architecture, end-to-end system design, and AI-integrated web applications.",
} as const;

export const heroPhrases = [
  "real-time systems",
  "UI component trees",
  "AI production workflows",
  "full-stack systems",
] as const;

export const impactStats = [
  { label: "~1.5 yrs experience", value: "1.5+" },
  { label: "Production systems shipped", value: "8+" },
  { label: "Peer-reviewed AI publication", value: "1" },
  { label: "Real-time systems at scale", value: "Live" },
] as const;

export const projectTypeTabs: { id: ProjectType | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "websites", label: "Websites" },
  { id: "applications", label: "Applications" },
];

function imgs(type: "Websites" | "Applications", folder: string) {
  const dir = `/assets/projects/${type}/${folder}`;
  return {
    imageDir: dir,
    previewImages: [`${dir}/1.png`, `${dir}/2.png`, `${dir}/3.png`],
  };
}

export const projects: Project[] = [
  {
    id: "codezzi",
    slug: "Codezzi",
    title: "Codezzi",
    subtitle: "Company website",
    summary:
      "Official Codezzi corporate website — Next.js + NestJS. Designer, UI owner, and one of the frontend developers.",
    role: "Designer / UI · Frontend",
    type: "websites",
    order: 1,
    featured: true,
    techTags: ["nextjs", "nestjs", "react", "tailwind"],
    ...imgs("Websites", "Codezzi"),
    backend: [
      "NestJS service layer for content and site APIs",
      "REST boundaries for marketing and CMS-driven pages",
    ],
    uiState: [
      "Custom dark-themed layout architecture",
      "Design system and component trees owned end-to-end",
      "Bespoke UI motion and visual language",
    ],
    dataFlow: [
      "CMS / Nest APIs → Next.js surfaces",
      "Shared design tokens across marketing pages",
    ],
    stacks: {
      backend: ["nestjs", "node"],
      websiteSpa: ["nextjs", "react", "typescript", "tailwind"],
      cmsSpa: ["nextjs", "react"],
    },
  },
  {
    id: "pbf",
    slug: "PrimeBankFoundation(PBF)",
    title: "Prime Bank Foundation",
    subtitle: "Official foundation website",
    summary:
      "Official Prime Bank Foundation website with CMS and backend — NestJS + Next.js.",
    role: "Full-stack architecture",
    type: "websites",
    order: 2,
    featured: false,
    techTags: ["nextjs", "nestjs"],
    ...imgs("Websites", "PrimeBankFoundation(PBF)"),
    backend: [
      "NestJS backend for content and domain APIs",
      "CMS-backed multi-tier architecture",
    ],
    uiState: [
      "Next.js public website SPA",
      "CMS SPA for content editors",
      "Shared design-token UI layers",
    ],
    dataFlow: [
      "CMS edits → Nest APIs → Next.js website",
      "Shared models across admin and public tiers",
    ],
    stacks: {
      backend: ["nestjs", "node"],
      websiteSpa: ["nextjs", "react", "typescript", "tailwind"],
      cmsSpa: ["nextjs", "react", "typescript"],
    },
  },
  {
    id: "pbgs",
    slug: "PrimeBankGrammerSchool(PBGS)",
    title: "Prime Bank Grammar School",
    subtitle: "School website",
    summary:
      "Prime Bank Grammar School website with CMS and backend — NestJS + Next.js. Project lead.",
    role: "Lead",
    type: "websites",
    order: 3,
    featured: false,
    techTags: ["nextjs", "nestjs"],
    ...imgs("Websites", "PrimeBankGrammerSchool(PBGS)"),
    backend: [
      "NestJS backend and content services",
      "CMS + public web multi-tier delivery",
    ],
    uiState: [
      "Led UI architecture for public site",
      "CMS SPA for school content operations",
    ],
    dataFlow: [
      "CMS → Nest → Next.js school website",
      "Governed component system across pages",
    ],
    stacks: {
      backend: ["nestjs", "node"],
      websiteSpa: ["nextjs", "react", "typescript", "tailwind"],
      cmsSpa: ["nextjs", "react"],
    },
  },
  {
    id: "pcnd",
    slug: "PrimeCollegeOfNursingDhaka(PCND)",
    title: "Prime College of Nursing, Dhaka",
    subtitle: "Nursing college website",
    summary:
      "Prime College of Nursing Dhaka website with CMS and backend — NestJS + Next.js. Shadow lead.",
    role: "Shadow lead",
    type: "websites",
    order: 4,
    featured: false,
    techTags: ["nextjs", "nestjs"],
    ...imgs("Websites", "PrimeCollegeOfNursingDhaka(PCND)"),
    backend: [
      "NestJS APIs for institutional content",
      "CMS-backed publishing pipeline",
    ],
    uiState: [
      "Next.js public website architecture",
      "CMS SPA for administrative content",
    ],
    dataFlow: [
      "CMS → Nest → Next.js public site",
      "Shared UI foundations with sibling Prime properties",
    ],
    stacks: {
      backend: ["nestjs", "node"],
      websiteSpa: ["nextjs", "react", "typescript", "tailwind"],
      cmsSpa: ["nextjs", "react"],
    },
  },
  {
    id: "baf",
    slug: "BangladeshAthleticFederation(BAF)",
    title: "Bangladesh Athletic Federation",
    subtitle: "Federation website",
    summary:
      "Bangladesh Athletic Federation website — Next.js + .NET. One of the frontend developers.",
    role: "Frontend",
    type: "websites",
    order: 5,
    featured: false,
    techTags: ["nextjs", "dotnet"],
    ...imgs("Websites", "BangladeshAthleticFederation(BAF)"),
    backend: [
      ".NET backend services for federation content",
      "API integration for public web delivery",
    ],
    uiState: [
      "Next.js frontend surfaces",
      "Responsive UI for federation communications",
    ],
    dataFlow: [
      ".NET APIs → Next.js website",
      "Content models consumed by public pages",
    ],
    stacks: {
      backend: ["dotnet", "csharp"],
      websiteSpa: ["nextjs", "react", "typescript", "tailwind"],
      cmsSpa: ["nextjs", "react"],
    },
  },
  {
    id: "sky-sms",
    slug: "SkySMS",
    title: "SkySMS",
    subtitle: "BTRC / BTCL bulk SMS platform",
    summary:
      "Bulk SMS web application for BTRC / BTCL — Next.js + NestJS. UI and one of the frontend developers.",
    role: "UI · Frontend",
    type: "applications",
    order: 1,
    featured: true,
    techTags: ["nextjs", "nestjs"],
    ...imgs("Applications", "SkySMS"),
    backend: [
      "NestJS queue and messaging orchestration",
      "Bulk delivery APIs under concurrent load",
    ],
    uiState: [
      "Operator UI for campaigns and delivery status",
      "Next.js SPA for high-volume SMS workflows",
    ],
    dataFlow: [
      "UI events → Nest workers → SMS providers",
      "Delivery status feedback into the SPA",
    ],
    stacks: {
      frontendSpa: ["nextjs", "react", "typescript", "tailwind"],
      backend: ["nestjs", "node"],
    },
  },
  {
    id: "sky-chat",
    slug: "SkyChat",
    title: "SkyChat",
    subtitle: "Real-time messaging application",
    summary:
      "Real-time chat web application — React + NestJS. Frontend developer and UI responsible.",
    role: "UI · Frontend",
    type: "applications",
    order: 2,
    featured: false,
    techTags: ["react", "nestjs"],
    ...imgs("Applications", "SkyChat"),
    backend: [
      "NestJS real-time messaging services",
      "WebSocket-backed conversation channels",
    ],
    uiState: [
      "React SPA conversation surfaces",
      "UI ownership for chat operator flows",
    ],
    dataFlow: [
      "Client events → Nest real-time layer → persistence",
      "Live session sync across concurrent clients",
    ],
    stacks: {
      frontendSpa: ["react", "typescript", "tailwind"],
      backend: ["nestjs", "node"],
    },
  },
  {
    id: "jonosheba",
    slug: "Jonosheba",
    title: "Jonosheba",
    subtitle: "Government complaint portal",
    summary:
      "Govt. complaint portal web application — Angular + .NET.",
    role: "Full-stack UI architecture",
    type: "applications",
    order: 3,
    featured: false,
    techTags: ["angular", "dotnet"],
    ...imgs("Applications", "Jonosheba"),
    backend: [
      ".NET services for complaint workflows",
      "API design for multi-step civic submissions",
    ],
    uiState: [
      "Angular SPA with complex multi-step forms",
      "State management across long-running complaint flows",
    ],
    dataFlow: [
      "Form steps → .NET APIs → case persistence",
      "Admin and citizen surfaces on shared domain models",
    ],
    stacks: {
      frontendSpa: ["angular", "typescript"],
      backend: ["dotnet", "csharp"],
    },
  },
  {
    id: "sky-vat",
    slug: "SkyVat",
    title: "SkyVat",
    subtitle: "VAT calculation software",
    summary:
      "VAT calculation web application — .NET + Angular. UI and one of the frontend developers.",
    role: "UI · Frontend",
    type: "applications",
    order: 4,
    featured: false,
    techTags: ["angular", "dotnet"],
    ...imgs("Applications", "SkyVat"),
    backend: [
      ".NET services for VAT calculation rules",
      "API contracts for fiscal workflows",
    ],
    uiState: [
      "Angular SPA for VAT operators",
      "UI architecture for calculation and reporting views",
    ],
    dataFlow: [
      "UI inputs → .NET calculation engine → results",
      "Persisted fiscal state consumed by Angular views",
    ],
    stacks: {
      frontendSpa: ["angular", "typescript"],
      backend: ["dotnet", "csharp"],
    },
  },
];

export const competencies = [
  {
    id: "system-engineering",
    title: "System Engineering",
    description:
      "Databases, API design, queue orchestration, and multi-tier Backend/CMS/Web architectures across Nest, .NET, and Node.",
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
  title:
    "A data driven analysis of maternal health risk indicators using machine learning techniques.",
  year: "2026",
  url: "https://jmai.amegroups.org/article/view/11322",
} as const;

export const education = [
  {
    title: "B.Sc. in Computer Science & Engineering",
    org: "American International University-Bangladesh (AIUB)",
    detail: "Graduated 2025",
    kind: "degree" as const,
  },
  {
    title: "Cisco Certified Network Associate (CCNA)",
    org: "Cisco Systems",
    detail: "Certification",
    kind: "cert" as const,
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
      "Architected end-to-end systems including SkyChat, SkySMS, SkyVat, Jonosheba, PBGS, PCND, PBF, BAF, and Codezzi.",
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

export type ExpertiseGroup = {
  id: string;
  label: string;
  items: { id: TechId; name: string }[];
};

export const expertiseGroups: ExpertiseGroup[] = [
  {
    id: "frontend",
    label: "Frontend & UI",
    items: [
      { id: "nextjs", name: "Next.js" },
      { id: "react", name: "React" },
      { id: "angular", name: "Angular" },
      { id: "quasar", name: "Quasar" },
      { id: "tailwind", name: "Tailwind CSS" },
      { id: "framer", name: "Framer Motion" },
      { id: "html", name: "HTML" },
      { id: "css", name: "CSS" },
      { id: "scss", name: "SCSS" },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    items: [
      { id: "nestjs", name: "NestJS" },
      { id: "dotnet", name: ".NET" },
      { id: "csharp", name: "C#" },
      { id: "node", name: "Node.js" },
    ],
  },
  {
    id: "languages",
    label: "Languages",
    items: [
      { id: "typescript", name: "TypeScript" },
      { id: "javascript", name: "JavaScript" },
      { id: "cpp", name: "C++" },
    ],
  },
  {
    id: "data",
    label: "Data & SQL",
    items: [
      { id: "postgres", name: "PostgreSQL" },
      { id: "mysql", name: "MySQL" },
      { id: "mssql", name: "MSSQL" },
      { id: "plsql", name: "PL/SQL" },
    ],
  },
];

export const navLinks = [
  { href: "#architecture", label: "Architecture" },
  { href: "#competencies", label: "Competencies" },
  { href: "#research", label: "Research" },
  { href: "#expertise", label: "Expertise" },
  { href: "#contact", label: "Contact" },
] as const;

export const workflowCommands = [
  "cursor open --architect portfolio-system",
  "npm run design:tokens",
  "npx scaffold multi-tier --backend --cms --web",
  "git ship --clean-architecture",
] as const;

export const workflowOutputs: Record<number, string[]> = {
  0: [
    "✔ Loaded system architecture context",
    "✔ UI component tree mapped",
    "✔ Ready for AI-assisted prototyping",
  ],
  1: ["✔ Design tokens validated", "✔ Tailwind systems synced"],
  2: [
    "✔ Backend / CMS / Web tiers scaffolded",
    "✔ Queue + REST boundaries defined",
  ],
  3: ["✔ Clean architecture checks passed", "✔ Production path ready"],
};
