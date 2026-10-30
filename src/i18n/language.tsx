import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  certificates as sourceCertificates,
  experience as sourceExperience,
  gitlog as sourceGitlog,
  moreWork as sourceMoreWork,
  projects as sourceProjects,
  services as sourceServices,
  stacks as sourceStacks,
} from "@/data/site";

export type Language = "ar" | "en";

const dictionaries = {
  ar: {
    nav: {
      about: "نبذة",
      services: "الخدمات",
      stack: "الأدوات",
      timeline: "المسار",
      projects: "المشاريع",
      awards: "الشهادات",
      work: "أعمال أخرى",
      contact: "تواصل",
      hire: "ابدأ مشروعك",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
      primary: "التنقل الرئيسي",
      mobile: "التنقل على الهاتف",
      switchToEnglish: "Switch to English",
    },
    hero: {
      eyebrow: "متاح لفرص مناسبة · القاهرة، مصر",
      name: "أحمــد خالــد",
      role: "مهندس ذكاء اصطناعي × مطور Full Stack",
      intro:
        "أبني أنظمة ذكية ومنتجات رقمية متكاملة. أدرس علوم الحاسب في الجامعة العربية المفتوحة، وأعمل بين الذكاء الاصطناعي وتطوير الويب والتصميم.",
      primary: "شاهد المشاريع",
      secondary: "تواصل معي",
      cv: "حمّل السيرة الذاتية",
      scroll: "مرّر للاكتشاف",
      signature: "من الفكرة إلى منتج يعمل.",
      location: "الشروق، القاهرة — مصر",
    },
    marquee: [
      "هندسة الذكاء الاصطناعي",
      "تطوير Full Stack",
      "تطوير الويب",
      "تصميم التجربة",
      "التصميم الجرافيكي",
      "التسويق الرقمي",
    ],
    about: {
      kicker: "نبذة عني",
      title: "أبني وأهندس",
      lead: "ليس كل مهندس يصمم، وليس كل مصمم يبني. أعمل على الجانبين.",
      short: "باختصار",
      bodyOne:
        "أدرس علوم الحاسب في الجامعة العربية المفتوحة، وأقيم في مدينة الشروق بالقاهرة. أعمل عبر طبقات المنتج: من تدريب نماذج الذكاء الاصطناعي ونشرها، إلى بناء واجهات وتجارب يستخدمها الناس.",
      bodyTwo:
        "وأهتم أيضًا بالتصميم والنمو؛ من تجربة المستخدم وأنظمة الهوية إلى التسويق الرقمي، حتى لا يكتفي المنتج بالعمل، بل يصل إلى جمهوره.",
      university: "الجامعة العربية المفتوحة",
      location: "الشروق، القاهرة، مصر",
      focus: "الذكاء الاصطناعي والبرمجيات",
    },
    services: {
      kicker: "ما الذي أقدّمه",
      title: "من الفكـــرة إلـى الإطـــلاق",
      intro: "أجمع بين البناء التقني والتصميم والنمو بحسب احتياج كل مشروع.",
      items: [
        {
          title: "تطوير الذكاء الاصطناعي",
          body: "منتجات ونماذج ذكاء اصطناعي تنتقل من التجربة إلى الاستخدام.",
          points: [
            "نماذج الرؤية الحاسوبية والتعلّم الآلي",
            "أدوات ذكية وأتمتة",
            "من الفكـــرة إلى منتج يعمل",
          ],
        },
        {
          title: "تطوير Full Stack",
          body: "منتجات متكاملة بواجهات واضحة وواجهات برمجية وقواعد بيانات.",
          points: [
            "تطبيقات Next.js وReact",
            "واجهات API والمصادقة وقواعد البيانات",
            "تجهيز للنشر على Vercel",
          ],
        },
        {
          title: "تطوير الويب",
          body: "مواقع سريعة وعصرية تعمل جيدًا على مختلف الشاشات.",
          points: ["صفحات هبوط ومواقع كاملة", "متجاوبة ومهيأة لمحركات البحث", "سهلة التحديث"],
        },
        {
          title: "تصميم UI/UX",
          body: "واجهات ترتب المعلومات حول وضوح التجربة وسهولة الاستخدام.",
          points: ["أنظمة تصميم ومكونات", "نماذج أولية وتدفقات استخدام", "إتاحة واضحة من البداية"],
        },
        {
          title: "التصميم الجرافيكي",
          body: "هويات ومواد بصرية تجمع بين الشخصية والدقة التقنية.",
          points: ["هوية وشعارات", "تصميمات الحملات والاجتماعي", "ملفات جاهزة للطباعة"],
        },
        {
          title: "التسويق الرقمي",
          body: "نمو يعتمد على بيانات وقياس مستمر، لا على التخمين.",
          points: ["حملات Meta وTikTok", "استراتيجية محتوى وSEO", "تقارير أداء واضحة"],
        },
      ],
    },
    stack: {
      kicker: "الأدوات والتقنيات",
      title: "مجموعــــة الأدوات",
      intro: "تقنيات أستخدمها في البناء والتصميم والنمو.",
      builder: "الهندسة والتطوير",
      design: "التصميم والحركة",
      growth: "النمو والتوزيع",
      graphics: "الهوية والتصميم البصري",
      level: "الممارسة",
    },
    timeline: {
      kicker: "سجل العمل والتعلّم",
      title: "المســــار",
      history: "محطات التعلّم والبناء",
      experience: "الخبرة والتعليم",
      entries: [
        {
          title: "مهندس ذكاء اصطناعي ومطور Full Stack",
          org: "عمل حر — القاهرة، مصر",
          points: [
            "تصميم وبناء منتجات ذكاء اصطناعي متكاملة: من مسارات البيانات والنموذج إلى الواجهة والـAPI.",
            "تطوير تطبيقات Full Stack باستخدام Next.js وReact وTypeScript وPostgreSQL.",
            "متابعة تسليم المنتج من المخطط الأولي إلى النشر والاستخدام.",
          ],
        },
        {
          title: "مطور ويب ومصمم رقمي",
          org: "عملاء مستقلون",
          points: [
            "بناء مواقع وصفحات هبوط متجاوبة ومهيأة لمحركات البحث.",
            "تصميم أنظمة UI/UX وهويات بصرية للويب ومنصات التواصل.",
            "إدارة حملات Meta وTikTok وتحسينها اعتمادًا على بيانات الأداء.",
          ],
        },
        {
          title: "طالب علوم الحاسب",
          org: "الجامعة العربية المفتوحة",
          points: [
            "دراسة علوم الحاسب في الجامعة العربية المفتوحة، القاهرة.",
            "التركيز على الذكاء الاصطناعي والخوارزميات وهندسة البرمجيات.",
            "بناء نظام كشف أجسام لحظي باستخدام Python وOpenCV وYOLO.",
          ],
        },
      ],
      milestones: [
        "أول أسطر برمجية — تعلّم ذاتي",
        "بدء دراسة علوم الحاسب في AOU",
        "Python والتعلّم الآلي والرؤية الحاسوبية",
        "نشر تطبيقات Full Stack",
        "هندسة الذكاء الاصطناعي · متاح للفرص",
      ],
      now: "حتى الآن",
    },
    projects: {
      kicker: "مختارات من عملي",
      title: "المشاريع",
      intro: "منتجات رقمية بنيتها من الفكرة إلى التجربة النهائية.",
      descriptions: [
        "منصة طلب مطاعم حديثة مع تتبع مباشر للطلبات ولوحة إدارة.",
        "لوحة لمتابعة التقدم الأكاديمي وخطة دراسة ذكية لطلاب الجامعة العربية المفتوحة.",
        "متجر عطور فاخر جاهز للإنتاج، بعناصر ثلاثية الأبعاد وحركة تفاعلية.",
      ],
      visit: "عرض المشروع",
      tools: "الأدوات التي أستخدمها",
      toolHint: "اضغط أو مرّر لرؤية التقنيات",
    },
    awards: {
      kicker: "التعلّم والشهادات",
      title: "شهـــادات موثّـــقة",
      label: "شهادات أحمد",
      view: "عرض",
      close: "إغلاق المعاينة",
      previous: "الشهادة السابقة",
      next: "الشهادة التالية",
      entries: [
        { title: "CS50x: مقدمة في علوم الحاسب", org: "جامعة هارفارد / CS50" },
        { title: "تطوير Full Stack باستخدام Node.js", org: "MTEC – Modern Technology" },
        { title: "المستوى المتوسط في اللغة الإنجليزية", org: "الجامعة العربية المفتوحة — مصر" },
        { title: "تصميم ويب متجاوب", org: "freeCodeCamp" },
        { title: "أساسيات وتطبيقات الذكاء الاصطناعي", org: "الجامعة البريطانية في مصر — SCE" },
        {
          title: "مليون مُلهِم — هندسة الأوامر",
          org: "مؤسسة دبي للمستقبل / مركز دبي للذكاء الاصطناعي",
        },
        { title: "الأمن السيبراني للجميع", org: "Mahara-Tech وEG CERT" },
        { title: "JavaScript حديث: ES6 وما بعده", org: "معهد تكنولوجيا المعلومات — Mahara-Tech" },
        { title: "مقرر اللغة الإنجليزية", org: "الجامعة الأمريكية بالقاهرة" },
      ],
    },
    work: {
      kicker: "مشاريع إضافية",
      title: "أعمـــال أخـــرى",
      flagshipTag: "مشروع ذكاء اصطناعي",
      flagshipTitle: "Neural Vision Suite",
      flagshipBody:
        "منصة ذكاء اصطناعي تحوّل بث الكاميرات إلى رؤى منظمة قابلة للبحث، مع كشف وتتبع لحظي وتحليلات ضمن لوحة واحدة.",
      flagshipBullets: ["مسار استدلال لحظي", "من النموذج إلى لوحة التحكم", "تصميم وبناء فردي"],
      entries: [
        {
          title: "كشف الأجسام في الوقت الفعلي",
          text: "كشف وتتبع حي للفيديو باستخدام Python وOpenCV وYOLO.",
          kind: "تطوير",
          meta: "رؤية حاسوبية",
        },
        {
          title: "لوحة تجارة إلكترونية متكاملة",
          text: "واجهات API ومصادقة ومدفوعات ولوحة إدارة مبسطة.",
          kind: "تطوير",
          meta: "Next.js · Postgres",
        },
        {
          title: "أنظمة هوية العلامة التجارية",
          text: "شعار ومقياس طباعي وأدوات بصرية للعلامات الناشئة.",
          kind: "تصميم",
          meta: "هوية بصرية",
        },
        {
          title: "تحسين محركات البحث وحملات النمو",
          text: "SEO وحملات Meta وTikTok مع تحسين أسبوعي.",
          kind: "نمو",
          meta: "تسويق رقمي",
        },
      ],
    },
    contact: {
      kicker: "لنتحدث",
      title: "لنبنِ شيئًا معًا",
      intro: "هل تحتاج إلى شخص يصمم الفكرة ويبنيها ويساعدها على النمو؟ راسلني وسأعود إليك.",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      message: "أخبرني عن المشروع",
      namePlaceholder: "أحمد…",
      emailPlaceholder: "you@company.com",
      messagePlaceholder: "ما الذي نعمل على بنائه؟",
      submit: "أرسل عبر واتساب",
      success: "تم فتح واتساب — اضغط إرسال لإيصال رسالتك.",
      note: "تُفتح رسالة جاهزة في واتساب؛ لا تُخزَّن بيانات النموذج هنا.",
      channels: {
        email: "البريد الإلكتروني",
        phone: "واتساب / الهاتف",
        github: "GitHub",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        facebook: "Facebook",
      },
      required: "يرجى ملء جميع الحقول.",
    },
    footer: {
      note: "أبني أنظمة ذكية ومنتجات رقمية متكاملة.",
      top: "العودة إلى الأعلى",
      copyright: "جميع الحقوق محفوظة",
      openToWork: "متاح لفرص مناسبة",
    },
  },
  en: {
    nav: {
      about: "About",
      services: "Services",
      stack: "Toolkit",
      timeline: "Journey",
      projects: "Projects",
      awards: "Certificates",
      work: "More work",
      contact: "Contact",
      hire: "Start a project",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      primary: "Primary navigation",
      mobile: "Mobile navigation",
      switchToEnglish: "Switch to Arabic",
    },
    hero: {
      eyebrow: "Open to meaningful work · Cairo, Egypt",
      name: "Ahmed Khaled",
      role: "AI Engineer × Full Stack Developer",
      intro:
        "I build intelligent systems and complete digital products. I study Computer Science at Arab Open University and work across AI, web development, and design.",
      primary: "Explore projects",
      secondary: "Get in touch",
      cv: "Download résumé",
      scroll: "Scroll to explore",
      signature: "From an idea to a working product.",
      location: "Shorouk City, Cairo — Egypt",
    },
    marquee: [
      "AI ENGINEERING",
      "FULL STACK DEVELOPMENT",
      "WEB DEVELOPMENT",
      "EXPERIENCE DESIGN",
      "GRAPHIC DESIGN",
      "DIGITAL MARKETING",
    ],
    about: {
      kicker: "A little about me",
      title: "Builder × Engineer",
      lead: "Not every engineer designs, and not every designer builds. I work across both.",
      short: "The short version",
      bodyOne:
        "I study Computer Science at Arab Open University and live in Shorouk City, Cairo. I work across the product stack — from training and deploying AI models to building interfaces and experiences people use.",
      bodyTwo:
        "I also care about design and growth: user experience, brand systems, and digital marketing, so a product does more than work — it reaches its audience.",
      university: "Arab Open University",
      location: "Shorouk City, Cairo — Egypt",
      focus: "AI & software engineering",
    },
    services: {
      kicker: "What I do",
      title: "From idea to launch",
      intro: "I bring engineering, design, and growth together around each project’s needs.",
      items: [
        {
          title: "AI Development",
          body: "AI products and models that move beyond experiments into real use.",
          points: [
            "Computer vision & machine learning",
            "Smart tools and automation",
            "Idea to working product",
          ],
        },
        {
          title: "Full Stack Development",
          body: "Complete products with clear interfaces, APIs, and databases.",
          points: [
            "Next.js & React applications",
            "APIs, auth, and databases",
            "Ready to deploy on Vercel",
          ],
        },
        {
          title: "Web Development",
          body: "Fast, modern websites that work across screen sizes.",
          points: ["Landing pages and full sites", "Responsive and SEO-ready", "Easy to update"],
        },
        {
          title: "UI/UX Design",
          body: "Interfaces organized around clarity and ease of use.",
          points: [
            "Design systems and components",
            "Prototypes and user flows",
            "Accessibility from the start",
          ],
        },
        {
          title: "Graphic Design",
          body: "Visual identities and assets with personality and technical precision.",
          points: ["Brand identity and logos", "Campaign and social designs", "Print-ready assets"],
        },
        {
          title: "Digital Marketing",
          body: "Growth informed by data and continuous measurement, not guesswork.",
          points: [
            "Meta and TikTok campaigns",
            "Content strategy and SEO",
            "Clear performance reports",
          ],
        },
      ],
    },
    stack: {
      kicker: "Tools & technology",
      title: "My toolkit",
      intro: "Technologies I use across engineering, design, and growth.",
      builder: "Engineering & development",
      design: "Design & motion",
      growth: "Growth & distribution",
      graphics: "Brand & visual design",
      level: "Practice",
    },
    timeline: {
      kicker: "Work & learning log",
      title: "The journey",
      history: "Learning and building milestones",
      experience: "Experience & education",
      entries: [
        {
          title: "AI Engineer & Full Stack Developer",
          org: "Freelance — Cairo, Egypt",
          points: [
            "Design and build end-to-end AI products, from data pipelines and models to APIs and interfaces.",
            "Ship full-stack applications with Next.js, React, TypeScript, and PostgreSQL.",
            "Own delivery from initial wireframes through deployment and production use.",
          ],
        },
        {
          title: "Web Developer & Digital Designer",
          org: "Independent clients",
          points: [
            "Build responsive, SEO-ready websites and landing pages.",
            "Design UI/UX systems and brand visuals for web and social.",
            "Run Meta and TikTok campaigns and optimize using performance data.",
          ],
        },
        {
          title: "Computer Science Student",
          org: "Arab Open University",
          points: [
            "Study Computer Science at Arab Open University in Cairo.",
            "Focus on artificial intelligence, algorithms, and software engineering.",
            "Built a real-time object detection system with Python, OpenCV, and YOLO.",
          ],
        },
      ],
      milestones: [
        "First lines of code — self-taught",
        "Started Computer Science at AOU",
        "Python, ML & computer vision",
        "Full-stack apps shipped",
        "AI engineering · open to opportunities",
      ],
      now: "Present",
    },
    projects: {
      kicker: "Selected work",
      title: "Projects",
      intro: "Digital products built from the first idea to the finished experience.",
      descriptions: [
        "Modern restaurant ordering platform with real-time order tracking and an admin dashboard.",
        "Academic progress dashboard and study roadmap for Arab Open University students.",
        "Production-ready luxury perfume store with interactive 3D details and modern motion.",
      ],
      visit: "View project",
      tools: "Tools I work with",
      toolHint: "Hover or tap to explore technologies",
    },
    awards: {
      kicker: "Learning & certificates",
      title: "Verified learning",
      label: "Ahmed’s certificates",
      view: "View",
      close: "Close preview",
      previous: "Previous certificate",
      next: "Next certificate",
      entries: [
        { title: "CS50x: Introduction to Computer Science", org: "Harvard University / CS50" },
        { title: "Full-Stack Development (Node.js)", org: "MTEC – Modern Technology" },
        { title: "Intermediate English Language Level", org: "Arab Open University — Egypt" },
        { title: "Responsive Web Design", org: "freeCodeCamp" },
        {
          title: "Fundamentals and Applications in Artificial Intelligence",
          org: "The British University in Egypt — SCE",
        },
        {
          title: "1 Million Prompters — Prompt Engineering",
          org: "Dubai Future Foundation / Dubai Centre for Artificial Intelligence",
        },
        { title: "Cybersecurity For All", org: "Mahara-Tech & EG CERT" },
        {
          title: "Modern JavaScript: ES6 and beyond",
          org: "Information Technology Institute — Mahara-Tech",
        },
        { title: "English Language Course Level", org: "The American University in Cairo" },
      ],
    },
    work: {
      kicker: "Beyond the featured projects",
      title: "More work",
      flagshipTag: "AI PRODUCT",
      flagshipTitle: "Neural Vision Suite",
      flagshipBody:
        "An AI platform that turns camera feeds into structured, searchable insight, with real-time detection, tracking, and analytics in one dashboard.",
      flagshipBullets: [
        "Real-time inference pipeline",
        "Model to dashboard",
        "Designed and built solo",
      ],
      entries: [
        {
          title: "Real-Time Object Detection",
          text: "Live video detection and tracking with Python, OpenCV, and YOLO.",
          kind: "DEV",
          meta: "Computer vision",
        },
        {
          title: "Full Stack Commerce Dashboard",
          text: "Typed APIs, auth, payments, and an approachable admin panel.",
          kind: "DEV",
          meta: "Next.js · Postgres",
        },
        {
          title: "Brand Identity Systems",
          text: "Logo, type scale, and visual kit for early-stage brands.",
          kind: "DESIGN",
          meta: "Identity",
        },
        {
          title: "SEO & Paid Growth Sprints",
          text: "On-page SEO plus Meta/TikTok acquisition with weekly optimization.",
          kind: "GROWTH",
          meta: "Digital marketing",
        },
      ],
    },
    contact: {
      kicker: "Let’s talk",
      title: "Let’s build something together",
      intro:
        "Need someone who can design the idea, build it, and help it grow? Reach out and I’ll get back to you.",
      name: "Your name",
      email: "Your email",
      message: "Tell me about the project",
      namePlaceholder: "Ahmed…",
      emailPlaceholder: "you@company.com",
      messagePlaceholder: "What are we building?",
      submit: "Continue in WhatsApp",
      success: "WhatsApp is open — press Send to deliver your message.",
      note: "A pre-filled WhatsApp message opens; this form does not store your data.",
      channels: {
        email: "Email",
        phone: "WhatsApp / phone",
        github: "GitHub",
        linkedin: "LinkedIn",
        instagram: "Instagram",
        facebook: "Facebook",
      },
      required: "Please complete all fields.",
    },
    footer: {
      note: "Building intelligent systems and complete digital products.",
      top: "Back to top",
      copyright: "All rights reserved",
      openToWork: "Open to meaningful work",
    },
  },
} as const;

export type LocaleCopy = (typeof dictionaries)[Language];

const arabicServiceNames = dictionaries.ar.services.items;
const arabicTimelineEntries = dictionaries.ar.timeline.entries;

function localizedStack(language: Language) {
  if (language === "en") return sourceStacks;
  return {
    builder: {
      ...sourceStacks.builder,
      line: "$ الجانب الهندسي — بناء أنظمة تعمل.",
      items: sourceStacks.builder.items,
    },
    design: {
      ...sourceStacks.design,
      line: "$ جانب الصنعة — الشكل والإحساس والحركة.",
      items: sourceStacks.design.items,
    },
    growth: {
      ...sourceStacks.growth,
      line: "$ جانب الانتشار — الوصول إلى الجمهور المناسب.",
      items: sourceStacks.growth.items,
    },
    graphics: {
      ...sourceStacks.graphics,
      line: "$ الجانب البصري — الهوية والتواصل الإبداعي.",
      items: sourceStacks.graphics.items,
    },
  };
}

export function getLocalizedContent(language: Language) {
  return {
    services: sourceServices.map((item, index) =>
      language === "ar" ? { ...item, ...arabicServiceNames[index] } : item,
    ),
    stacks: localizedStack(language),
    experience: sourceExperience.map((item, index) =>
      language === "ar"
        ? {
            ...item,
            ...arabicTimelineEntries[index],
            period: item.period.replace("PRESENT", "حتى الآن"),
          }
        : item,
    ),
    gitlog: sourceGitlog.map((item, index) =>
      language === "ar"
        ? { ...item, text: dictionaries.ar.timeline.milestones[index] ?? item.text }
        : item,
    ),
    projects: sourceProjects.map((item, index) =>
      language === "ar"
        ? { ...item, description: dictionaries.ar.projects.descriptions[index] ?? item.description }
        : item,
    ),
    certificates: sourceCertificates.map((item, index) =>
      language === "ar" ? { ...item, ...dictionaries.ar.awards.entries[index] } : item,
    ),
    moreWork: sourceMoreWork.map((item, index) =>
      language === "ar" ? { ...item, ...dictionaries.ar.work.entries[index] } : item,
    ),
  };
}

interface LanguageContextValue {
  language: Language;
  dir: "rtl" | "ltr";
  setLanguage: (language: Language) => void;
  t: LocaleCopy;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("lang");
    let saved: string | null = requested;
    if (requested !== "ar" && requested !== "en") {
      try {
        saved = window.localStorage.getItem("ahmed-portfolio-language");
      } catch {
        saved = null;
      }
    }
    if (saved === "ar" || saved === "en") setLanguageState(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    const dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    document.documentElement.dataset["language"] = language;
    if (ready) {
      try {
        window.localStorage.setItem("ahmed-portfolio-language", language);
      } catch {
        // Language switching remains available when storage is blocked.
      }
    }
  }, [language, ready]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      dir: language === "ar" ? "rtl" : "ltr",
      setLanguage: setLanguageState,
      t: dictionaries[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}
