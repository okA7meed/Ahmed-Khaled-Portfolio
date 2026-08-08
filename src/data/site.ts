export const profile = {
  name: "Ahmed Khaled Hussain",
  role: "AI Engineer | Full Stack Developer",
  university: "Arab Open University",
  major: "Computer Science",
  location: "Shorouk City, Cairo — Egypt",
  languages: ["Arabic", "English"],
  email: "Ahmed.khaaledh@gmail.com",
  phone: "01206411015",
  whatsapp: "01206411015",
  github: { handle: "okA7meed", url: "https://github.com/okA7meed" },
  linkedin: {
    handle: "in/ahmed-khaled-h",
    url: "https://www.linkedin.com/in/ahmed-khaled-h-197649349",
  },
  instagram: { handle: "@enga7mmed", url: "https://www.instagram.com/enga7mmed" },
  facebook: { handle: "ahmed.khaled", url: "https://www.facebook.com/share/1FtG2M2pSg" },
};

export const nav = [
  { id: "about", index: "01", label: "About" },
  { id: "services", index: "02", label: "Services" },
  { id: "stack", index: "03", label: "Stack" },
  { id: "timeline", index: "04", label: "Timeline" },
  { id: "projects", index: "05", label: "Projects" },
  { id: "awards", index: "06", label: "Awards" },
  { id: "work", index: "07", label: "Work" },
  { id: "contact", index: "08", label: "Contact" },
];

export const marquee = [
  "AI ENGINEERING",
  "FULL STACK",
  "WEB DEVELOPMENT",
  "UI/UX DESIGN",
  "GRAPHIC DESIGN",
  "DIGITAL MARKETING",
];

export const services = [
  {
    no: "01",
    tag: "MOST BOOKED",
    title: "AI Development",
    body: "Real AI products — models that ship, not notebooks that sit.",
    points: [
      "Computer vision & ML models",
      "AI tools & smart automations",
      "Idea to working product",
    ],
    stack: ["PYTHON", "MACHINE LEARNING", "COMPUTER VISION"],
  },
  {
    no: "02",
    tag: null,
    title: "Full Stack Development",
    body: "End-to-end products — typed APIs, real databases, clean deploys.",
    points: ["Next.js & React 19 apps", "APIs, auth & databases", "CI-ready, deployed on Vercel"],
    stack: ["NEXT.JS", "TYPESCRIPT", "POSTGRES"],
  },
  {
    no: "03",
    tag: null,
    title: "Web Development",
    body: "Fast, modern websites that look sharp and load quick.",
    points: ["Landing pages & full sites", "Responsive & SEO-ready", "Easy to update"],
    stack: ["REACT", "TAILWIND V4", "DEPLOYMENT"],
  },
  {
    no: "04",
    tag: null,
    title: "UI/UX Design",
    body: "Interfaces designed around flow, hierarchy and intent.",
    points: ["Design systems & tokens", "Prototyping & user flows", "Accessible by default"],
    stack: ["FIGMA", "DESIGN SYSTEMS", "PROTOTYPING"],
  },
  {
    no: "05",
    tag: null,
    title: "Graphic Design",
    body: "Brand visuals with a technical edge — identity that holds up.",
    points: ["Brand identity & logos", "Social & campaign creatives", "Print-ready assets"],
    stack: ["IDENTITY", "TYPOGRAPHY", "MOTION"],
  },
  {
    no: "06",
    tag: null,
    title: "Digital Marketing",
    body: "Growth built on data — not guesses.",
    points: ["Meta & TikTok campaigns", "Content strategy & SEO", "Clear performance reports"],
    stack: ["META ADS", "SEO", "ANALYTICS"],
  },
];

export const stacks = {
  builder: {
    file: "./builder.exe",
    line: "$ The engineering side — building things that work.",
    items: [
      { name: "Python", level: "CORE" },
      { name: "TypeScript", level: "CORE" },
      { name: "React 19 / Next.js 15", level: "DAILY" },
      { name: "Machine Learning", level: "APPLIED" },
      { name: "Computer Vision — OpenCV · YOLO", level: "HANDS-ON" },
      { name: "Node & APIs", level: "WORKING" },
      { name: "PostgreSQL", level: "WORKING" },
      { name: "Git / GitHub", level: "DAILY" },
    ],
  },
  design: {
    file: "./design.exe",
    line: "$ The craft side — how it looks, feels and moves.",
    items: [
      { name: "Tailwind CSS v4", level: "CORE" },
      { name: "Framer Motion / GSAP", level: "APPLIED" },
      { name: "Three.js / R3F", level: "LEARNING" },
      { name: "Figma & Design Systems", level: "DAILY" },
      { name: "Shadcn · Magic · Aceternity", level: "HANDS-ON" },
      { name: "Graphic Design", level: "CORE" },
    ],
  },
  growth: {
    file: "./growth.exe",
    line: "$ The distribution side — making the product get found.",
    items: [
      { name: "SEO & Technical SEO", level: "APPLIED" },
      { name: "Meta Ads", level: "WORKING" },
      { name: "TikTok Ads", level: "WORKING" },
      { name: "Content Strategy", level: "APPLIED" },
      { name: "Analytics & Reporting", level: "HANDS-ON" },
    ],
  },
  graphics: {
    file: "./graphics.exe",
    line: "$ The visual side — branding, creativity and communication.",
    items: [
      { name: "Adobe Photoshop", level: "EXPERT" },
      { name: "Adobe Illustrator", level: "EXPERT" },
      { name: "Photo Manipulation", level: "EXPERT" },
      { name: "Brand Identity Design", level: "CORE" },
      { name: "Logo Design", level: "EXPERT" },
      { name: "Social Media Creatives", level: "DAILY" },
    ],
  },
};

export const gitlog = [
  { year: "2022", text: "First lines of code — self-taught" },
  { year: "2023", text: "Began BSc Computer Science — AOU" },
  { year: "2024", text: "Python, ML & computer vision" },
  { year: "2025", text: "Full stack builds shipped to production" },
  { year: "2026", text: "AI engineering · open to opportunities" },
];

export const experience = [
  {
    period: "2025 — PRESENT",
    head: "HEAD → NOW",
    title: "AI Engineer & Full Stack Developer",
    org: "@ Freelance — Cairo, Egypt",
    points: [
      "Design and build end-to-end AI products: data pipeline, model, API and interface.",
      "Ship full stack applications with Next.js 15, React 19, TypeScript and PostgreSQL.",
      "Own delivery from first wireframe to deployed, monitored production app.",
    ],
  },
  {
    period: "2024 — PRESENT",
    head: "HEAD → NOW",
    title: "Web Developer & Digital Designer",
    org: "@ Independent clients",
    points: [
      "Built responsive, SEO-ready websites and landing pages for brands and creators.",
      "Designed UI/UX systems and brand visuals used across web and social.",
      "Ran Meta and TikTok campaigns optimized on real performance data.",
    ],
  },
  {
    period: "→ 2026",
    head: "HEAD → NOW",
    title: "Computer Science Student",
    org: "@ Arab Open University",
    points: [
      "BSc in Computer Science — Arab Open University, Cairo.",
      "Focus on artificial intelligence, algorithms and software engineering.",
      "Built a real-time object detection system with Python, OpenCV and YOLO.",
    ],
  },
];

export const projects = [
  {
    title: "BRGHR Restaurant Website",
description:
      "Modern restaurant ordering platform with real-time order tracking and admin dashboard.",
    image: "/images/projects/project-brghr.png",
    websiteUrl: "https://brghr.vercel.app",
    technologies: ["React", "TypeScript", "MongoDB", "Tailwind"],
  },
  {
  title: "AOU Computer Science Study Planner",
description: "Academic progress tracking dashboard and smart study roadmap for Arab Open University students.",
  image: "/images/projects/project-aou-planner.png",
  websiteUrl: "https://aou-planner.vercel.app",
  technologies: ["Next.js", "TypeScript", "Tailwind", "CSS", "JavaScript"]
  },
 {
  title: "Scented Realms",
description: "A production-ready luxury perfume e-commerce website with interactive 3D elements and modern animations.",
  image: "/images/projects/project-scented-realms.png",
  websiteUrl: "https://scented-realms.vercel.app",
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Three.js",
    "Framer Motion",
    "GSAP",
    "Shadcn/UI"
  ]
}
];

export const certifications = [
  { title: "Introduction to AI with Python", org: "Online Program" },
  { title: "Machine Learning Foundations", org: "Coursera" },
  { title: "Full Stack Web Development", org: "Meta / Coursera" },
  { title: "Responsive Web Design", org: "freeCodeCamp" },
  { title: "UI/UX Design Fundamentals", org: "Google" },
  { title: "Digital Marketing Fundamentals", org: "Google Digital Garage" },
  { title: "Meta Ads Certification", org: "Meta Blueprint" },
  { title: "Git & GitHub Essentials", org: "GitHub" },
];

/**
 * Reusable certificate gallery data.
 * `image` points to the file in public/certificates/ (.jpg/.jpeg/.png/.webp).
 * If a file is missing, the component falls back to /certificates/placeholder.webp.
 * `url` is optional and may hold a link to the source/issuer page.
 * Adding a new certificate requires adding one object here.
 */
export const certificates = [
  {
    id: "cert-1",
    title: "CS50x: Introduction to Computer Science",
    org: "Harvard University / CS50",
    image: "/certificates/certificate-1.jpg",
    url: null,
  },
  {
    id: "cert-2",
    title: "Full-Stack Development (Nodejs)",
    org: "MTEC – Modern Technology",
    image: "/certificates/certificate-2.png",
    url: null,
  },
  {
    id: "cert-3",
    title: "Intermediate English Language Level",
    org: "Arab Open University - Egypt",
    image: "/certificates/certificate-3.png",
    url: null,
  },
  {
    id: "cert-4",
    title: "Responsive Web Design",
    org: "freeCodeCamp",
    image: "/certificates/certificate-4.jpg",
    url: null,
  },
  {
    id: "cert-5",
    title: "Fundamentals and Applications in Artificial Intelligence",
    org: "The British University in Egypt (BUE) - SCE",
    image: "/certificates/certificate-5.png",
    url: null,
  },
  {
    id: "cert-6",
    title: "1 Million Prompters - Prompt Engineering",
    org: "Dubai Future Foundation / Dubai Centre for Artificial Intelligence",
    image: "/certificates/certificate-6.jpg",
    url: null,
  },
  {
    id: "cert-7",
    title: "Cybersecurity For All",
    org: "Mahara-Tech (ITI Platform) & EG CERT",
    image: "/certificates/certificate-7.jpg",
    url: null,
  },
  {
    id: "cert-8",
    title: "Modern JavaScript: ES6 and beyond",
    org: "Mahara-Tech (Information Technology Institute)",
    image: "/certificates/certificate-8.png",
    url: null,
  },
   {
    id: "cert-8",
    title: "English Language Course Level",
org: "The American University in Cairo (AUC)",
    image: "/certificates/certificate-9.jpg",
    url: null,
  },
];

export const flagship = {
  tag: "FLAGSHIP — AI PRODUCT",
  title: "Neural Vision Suite",
  body: "An AI platform that turns raw camera feeds into structured, searchable insight — real-time detection, tracking and analytics behind one clean dashboard. Designed, built and deployed solo.",
  bullets: [
    "Real-time inference pipeline",
    "Full stack — model to dashboard",
    "Solo design & build",
  ],
  features: [
    "REAL-TIME DETECTION",
    "OBJECT TRACKING",
    "AI PREDICTION MODELS",
    "ANALYTICS DASHBOARD",
    "ROLE-BASED ACCESS",
    "REST API",
  ],
  stack: ["PYTHON", "YOLO", "FASTAPI", "POSTGRESQL", "NEXT.JS", "TAILWIND"],
};

export const moreWork = [
  {
    no: "01",
    title: "Real-Time Object Detection",
    text: "Live video detection & tracking — Python, OpenCV, YOLO.",
    kind: "DEV",
    meta: "Computer vision",
  },
  {
    no: "02",
    title: "Full Stack Commerce Dashboard",
    text: "Typed API, auth, payments and an admin panel that non-devs can use.",
    kind: "DEV",
    meta: "Next.js · Postgres",
  },
  {
    no: "03",
    title: "Brand Identity Systems",
    text: "Logo, type scale and creative kit for early-stage brands.",
    kind: "DESIGN",
    meta: "Identity",
  },
  {
    no: "04",
    title: "SEO & Paid Growth Sprints",
    text: "On-page SEO plus Meta/TikTok acquisition with weekly optimization.",
    kind: "GROWTH",
    meta: "Ranking gains",
  },
];
