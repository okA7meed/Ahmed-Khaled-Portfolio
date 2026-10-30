import type { CSSProperties } from "react";
import { ChartNoAxesCombined, FileText, Search, Sparkles } from "lucide-react";
import {
  siFigma,
  siFramer,
  siGit,
  siGithub,
  siGsap,
  siMeta,
  siNextdotjs,
  siNodedotjs,
  siOpencv,
  siPostgresql,
  siPython,
  siReact,
  siShadcnui,
  siTailwindcss,
  siThreedotjs,
  siTiktok,
  siTypescript,
  siYolo,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";

type Mark = {
  name: string;
  slug: string;
  hex: string;
  matches: RegExp;
} & ({ kind: "vector"; icon: SimpleIcon } | { kind: "asset"; asset: string });

const brand = (icon: SimpleIcon, matches: RegExp): Mark => ({
  kind: "vector",
  name: icon.title,
  slug: icon.slug,
  hex: icon.hex,
  icon,
  matches,
});

// Resolve by the tool or skill itself, never by a card's position in the grid.
// Design skills use the two applications already named in this portfolio.
const marks: Mark[] = [
  {
    kind: "asset",
    name: "Adobe Photoshop",
    slug: "adobephotoshop",
    hex: "31A8FF",
    asset: "/images/tools/adobe-photoshop.svg",
    matches: /Photoshop|Photo Manipulation|Graphic Design|Social Media Creatives/i,
  },
  {
    kind: "asset",
    name: "Adobe Illustrator",
    slug: "adobeillustrator",
    hex: "FF9A00",
    asset: "/images/tools/adobe-illustrator.svg",
    matches: /Illustrator|Brand Identity|Logo Design|Graphic Design|Social Media Creatives/i,
  },
  brand(siPython, /Python|Machine Learning/i),
  brand(siTypescript, /TypeScript/i),
  brand(siReact, /React|R3F/i),
  brand(siNextdotjs, /Next\.js/i),
  brand(siOpencv, /OpenCV/i),
  brand(siYolo, /YOLO/i),
  brand(siNodedotjs, /Node/i),
  brand(siPostgresql, /PostgreSQL/i),
  brand(siGit, /\bGit\b/i),
  brand(siGithub, /GitHub/i),
  brand(siTailwindcss, /Tailwind/i),
  brand(siFramer, /Framer Motion/i),
  brand(siGsap, /GSAP/i),
  brand(siThreedotjs, /Three\.js/i),
  brand(siFigma, /Figma/i),
  brand(siShadcnui, /Shadcn/i),
  brand(siMeta, /Meta Ads/i),
  brand(siTiktok, /TikTok/i),
];

const monochrome = new Set(["nextdotjs", "github", "threedotjs", "shadcnui", "tiktok"]);

export function StackLogos({ name }: { name: string }) {
  const tools = marks.filter((mark) => mark.matches.test(name));
  // These are disciplines without a named application. Keep meaningful symbols
  // rather than attributing an unlisted product to the portfolio owner.
  const Concept = /SEO/i.test(name)
    ? Search
    : /Analytics|Reporting/i.test(name)
      ? ChartNoAxesCombined
      : /Content/i.test(name)
        ? FileText
        : Sparkles;

  return (
    <div className="stack-item__logos">
      {tools.length ? (
        tools.map((mark) => (
          <span
            className="stack-item__logo"
            key={mark.slug}
            data-brand={mark.slug}
            data-monochrome={monochrome.has(mark.slug) || undefined}
            style={{ "--brand-color": `#${mark.hex}` } as CSSProperties}
            role="img"
            aria-label={mark.name}
            title={mark.name}
          >
            {mark.kind === "asset" ? (
              <img
                draggable={false}
                src={mark.asset}
                alt=""
                width={40}
                height={40}
                loading="lazy"
              />
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d={mark.icon.path} />
              </svg>
            )}
          </span>
        ))
      ) : (
        <span className="stack-item__logo" role="img" aria-label={name}>
          <Concept size={29} strokeWidth={1.6} aria-hidden="true" />
        </span>
      )}
    </div>
  );
}
