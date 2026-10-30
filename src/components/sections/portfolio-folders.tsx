import { useEffect, useRef, useState } from "react";
import type { CSSProperties, MouseEvent } from "react";
import {
  siFigma,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siTypescript,
} from "simple-icons";
import { projects } from "@/data/site";
import "./portfolio-folders.css";

type Language = "ar" | "en";

const toolboxIcons = [
  { name: "Python", icon: siPython },
  { name: "React", icon: siReact },
  { name: "TypeScript", icon: siTypescript },
  { name: "Next.js", icon: siNextdotjs },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "Figma", icon: siFigma },
  { name: "Node.js", icon: siNodedotjs },
];

const arabicDescriptions: Record<string, string> = {
  "BRGHR Restaurant Website": "منصة حديثة لطلبات المطاعم مع تتبع فوري ولوحة تحكم إدارية.",
  "AOU Computer Science Study Planner":
    "لوحة لمتابعة التقدم الأكاديمي وخارطة دراسة ذكية لطلاب الجامعة.",
  "Scented Realms": "متجر إلكتروني فاخر للعطور بتجربة تفاعلية وحركات عصرية.",
};
const projectKinds = [
  { ar: "منصة مطعم مميز", en: "RESTAURANT PLATFORM" },
  { ar: "مخطط دراسي جامعي", en: "STUDY PLANNER" },
  { ar: "متجر إلكتروني للعطور", en: "LUXURY E-COMMERCE" },
];
const iconForeground = (hex: string) => {
  const red = Number.parseInt(hex.slice(0, 2), 16);
  const green = Number.parseInt(hex.slice(2, 4), 16);
  const blue = Number.parseInt(hex.slice(4, 6), 16);
  return 0.299 * red + 0.587 * green + 0.114 * blue > 155 ? "#13191d" : "#fff";
};

export function PortfolioFolders({ language }: { language: Language }) {
  const isArabic = language === "ar";
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);
  const [focusedTool, setFocusedTool] = useState<string | null>(null);
  const [hoveredFolder, setHoveredFolder] = useState<number | null>(null);
  const [focusedFolder, setFocusedFolder] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const pointerType = useRef<string>("mouse");
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [openedFolder, setOpenedFolder] = useState<number | null>(null);
  const activeTool = hoveredTool ?? focusedTool ?? selectedTool;
  const activeFolder = hoveredFolder ?? focusedFolder ?? openedFolder;

  const closeFolders = () => {
    setOpenedFolder(null);
    setHoveredFolder(null);
    setFocusedFolder(null);
  };

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !sectionRef.current?.contains(event.target)) {
        setOpenedFolder(null);
        setHoveredFolder(null);
        setFocusedFolder(null);
        setSelectedTool(null);
        setHoveredTool(null);
        setFocusedTool(null);
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);

  // On touch screens: the first tap exposes the papers, the next opens the actual project.
  const projectClick = (event: MouseEvent<HTMLAnchorElement>, index: number) => {
    if (
      event.detail !== 0 &&
      (pointerType.current === "touch" || window.matchMedia("(hover: none)").matches) &&
      openedFolder !== index
    ) {
      event.preventDefault();
      setOpenedFolder(index);
    }
  };

  return (
    <section
      className="pf-section"
      id="projects"
      aria-labelledby="pf-heading"
      ref={sectionRef}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeFolders();
          setHoveredTool(null);
          setFocusedTool(null);
          setSelectedTool(null);
        }
      }}
    >
      <div className="pf-content">
        <div className="pf-folder-row" dir="ltr">
          <aside
            className="pf-toolbox"
            aria-label={isArabic ? "مجلد الأدوات" : "Tools folder"}
            data-entrance
            data-entrance-owner="folders"
            data-entrance-mobile-group
          >
            <div className="pf-tool-stage">
              <div className="pf-tool-icons" onPointerLeave={() => setHoveredTool(null)}>
                {toolboxIcons.map(({ name, icon }, index) => (
                  <button
                    className={`pf-tool-icon${activeTool === name ? " is-active" : ""}`}
                    data-tool={name}
                    data-entrance
                    data-entrance-owner="folders"
                    data-entrance-delay={0.2 + index * 0.055}
                    data-entrance-duration="0.5"
                    data-entrance-distance="16"
                    type="button"
                    key={name}
                    aria-label={`${isArabic ? "تقنية" : "Technology"}: ${name}`}
                    aria-pressed={selectedTool === name}
                    onPointerEnter={(event) => {
                      if (event.pointerType !== "touch") setHoveredTool(name);
                    }}
                    onPointerLeave={() => setHoveredTool(null)}
                    onFocus={() => setFocusedTool(name)}
                    onBlur={() => setFocusedTool(null)}
                    onClick={() => setSelectedTool((value) => (value === name ? null : name))}
                    style={
                      {
                        "--pf-icon-bg": `#${icon.hex}`,
                        "--pf-icon-mark": iconForeground(icon.hex),
                      } as CSSProperties
                    }
                  >
                    <span className="pf-tool-card">
                      <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                        <path d={icon.path} />
                      </svg>
                    </span>
                  </button>
                ))}
              </div>
              <div className="pf-tool-folder" dir={isArabic ? "rtl" : "ltr"}>
                <span className="pf-tool-top" aria-hidden="true" />
                <span className="pf-tool-fog" aria-hidden="true" />
                <span className="pf-tool-face">
                  <span className="pf-tool-folder-title">
                    {isArabic ? "مجلد الأدوات" : "Tools collection"}
                  </span>
                  <span className="pf-tool-folder-hint">
                    {isArabic
                      ? "مزيج قوي من التقنيات التي أستخدمها في تطوير المشاريع"
                      : "The tools and technologies behind my work"}
                  </span>
                  <span className="pf-tool-index">
                    {toolboxIcons.slice(0, 5).map(({ name }) => (
                      <button
                        className="pf-tool-trigger"
                        key={name}
                        type="button"
                        aria-pressed={selectedTool === name}
                        onPointerEnter={() => setHoveredTool(name)}
                        onPointerLeave={() =>
                          setHoveredTool((value) => (value === name ? null : value))
                        }
                        onFocus={() => setFocusedTool(name)}
                        onBlur={() => setFocusedTool(null)}
                        onClick={() => setSelectedTool((value) => (value === name ? null : name))}
                      >
                        {name}
                      </button>
                    ))}
                  </span>
                  <span className="pf-tool-mini-icons" aria-hidden="true">
                    {toolboxIcons.slice(0, 6).map(({ name, icon }) => (
                      <span
                        className="pf-tool-mini"
                        key={name}
                        style={{ "--pf-mini-color": `#${icon.hex}` } as CSSProperties}
                      >
                        <svg viewBox="0 0 24 24">
                          <path d={icon.path} />
                        </svg>
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            </div>
          </aside>

          <div className="pf-project-grid" data-entrance-group="folders">
            {projects.map((project, index) => {
              const description = isArabic
                ? (arabicDescriptions[project.title] ?? project.description)
                : project.description;
              return (
                <a
                  key={project.title}
                  className={`pf-project-link${activeFolder === index ? " is-open" : ""}`}
                  data-entrance
                  data-entrance-mobile-group
                  data-entrance-delay={0.05 + index * 0.15}
                  data-entrance-distance="24"
                  style={
                    {
                      "--pf-tint": ["187 199 212", "192 205 215", "193 205 218"][index % 3],
                    } as CSSProperties
                  }
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onPointerDown={(event) => {
                    pointerType.current = event.pointerType;
                  }}
                  onPointerEnter={(event) => {
                    if (event.pointerType !== "touch") setHoveredFolder(index);
                  }}
                  onPointerLeave={() => setHoveredFolder(null)}
                  onFocus={() => setFocusedFolder(index)}
                  onBlur={() => {
                    setFocusedFolder(null);
                    setOpenedFolder(null);
                  }}
                  onKeyDown={() => {
                    pointerType.current = "keyboard";
                  }}
                  onClick={(event) => projectClick(event, index)}
                  aria-expanded={activeFolder === index}
                  aria-describedby="pf-interaction-hint"
                  dir={isArabic ? "rtl" : "ltr"}
                  aria-label={`${isArabic ? "افتح المشروع" : "Open project"}: ${project.title}`}
                >
                  <span className="pf-project-folder">
                    <span className="pf-project-back" aria-hidden="true" />
                    <span className="pf-project-mouth" aria-hidden="true" />
                    <span className="pf-project-aperture" aria-hidden="true" />
                    <span className="pf-project-atmosphere" aria-hidden="true" />
                    {[0, 1, 2].map((layer) => (
                      <span
                        className={`pf-project-sheet pf-project-sheet--${layer + 1}${layer === 2 ? " pf-project-sheet--preview" : ""}`}
                        key={layer}
                        aria-hidden="true"
                      >
                        {layer === 2 ? (
                          <img draggable={false} src={project.image} alt="" loading="lazy" />
                        ) : (
                          <span className="pf-paper-document">
                            <span className="pf-paper-caption">
                              {layer === 0 ? `0${index + 1} / PROJECT` : "PROJECT OVERVIEW"}
                            </span>
                            <span className="pf-paper-heading">{project.title}</span>
                            <span className="pf-paper-rule pf-paper-rule--full" />
                            <span className="pf-paper-rule" />
                            <span className="pf-paper-rule pf-paper-rule--short" />
                            <span className="pf-paper-rule pf-paper-rule--faint" />
                          </span>
                        )}
                      </span>
                    ))}
                    <span className="pf-project-face">
                      <span className="pf-project-face-glass" aria-hidden="true" />
                      <span className="pf-project-hinge-light" aria-hidden="true" />
                      <span className="pf-project-rim" aria-hidden="true" />
                      <span className="pf-project-face-top">
                        <span className="pf-project-index">0{index + 1}</span>
                        <span className="pf-project-kind">
                          {projectKinds[index]?.[isArabic ? "ar" : "en"] ??
                            (isArabic ? "مشروع رقمي" : "DIGITAL PROJECT")}
                        </span>
                      </span>
                      <span className="pf-project-copy">
                        <strong className="pf-project-title" dir="ltr">
                          {project.title}
                        </strong>
                        <span className="pf-project-description">{description}</span>
                      </span>
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          <header className="pf-heading" dir={isArabic ? "rtl" : "ltr"} data-entrance-group>
            <p className="pf-kicker" data-entrance data-entrance-distance="10">
              {isArabic ? "مختارات" : "SELECTED WORK"}
            </p>
            <h2 id="pf-heading" data-entrance data-entrance-delay="0.07">
              {isArabic ? "مشاريعي" : "Projects"}
            </h2>
            <p className="pf-intro" data-entrance data-entrance-delay="0.14">
              {isArabic
                ? "مجموعة من المشاريع التي تجمع بين التصميم والتطوير."
                : "Projects that bring together design and development."}
            </p>
            <p className="pf-touch-hint" id="pf-interaction-hint">
              {isArabic
                ? "المس لعرض الأوراق ثم المس مرة أخرى لزيارة المشروع. اضغط Escape للإغلاق."
                : "Tap to reveal the papers, then tap again to visit the project. Press Escape to close."}
            </p>
            <span className="pf-heading-mark" aria-hidden="true">
              03 / 03
            </span>
          </header>
        </div>
      </div>
    </section>
  );
}
