import { motion, useReducedMotion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { Reveal, Section, SectionHeader } from "@/components/primitives";
import { projects } from "@/data/site";
import { RADIUS } from "@/config";

/**
 * ── MY PROJECTS ───────────────────────────────────────────────
 * Reusable showcase cards driven by the `projects` array in
 * `src/data/site.ts`. To add a project, add one more object with
 * { title, description, image, websiteUrl, technologies }.
 *
 * Whole card is an anchor — image, title and link all open the
 * project in a new tab. Hover lifts the card, zooms the image,
 * adds a brand-green glow and animates the CTA arrow.
 */
export function Projects() {
  const reduce = useReducedMotion();

  const cardVariants = {
    rest: { y: 0 },
    hover: { y: reduce ? 0 : -8 },
  };

  const glowVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 1 },
  };

  const ctaVariants = {
    rest: { x: 0, color: "var(--muted-foreground)" },
    hover: { x: 4, color: "var(--lime)" },
  };

  return (
    <Section id="projects">
      <SectionHeader index="05" kicker="Featured Projects" title={"My projects"} />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <motion.a
              href={p.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              initial="rest"
              whileHover="hover"
              whileTap="rest"
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="card-surface group relative block h-full cursor-pointer overflow-hidden p-4"
              style={{
                border: "1px solid var(--hairline)",
                borderRadius: RADIUS["2xl"],
                boxShadow: "0 0 0 1px transparent, 0 0 0 transparent",
              }}
            >
              {/* brand-green glow on hover */}
              <motion.span
                aria-hidden
                variants={glowVariants}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="pointer-events-none absolute -top-24 -right-16 z-0 size-56 rounded-full blur-3xl"
                style={{ background: "var(--lime)", opacity: 0.12 }}
              />

              {/* project image — 16:9 */}
              <div
                className="relative z-10 overflow-hidden rounded-2xl"
                style={{ borderRadius: RADIUS.lg }}
              >
                <motion.img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="block aspect-video w-full object-cover"
                  style={{ borderRadius: RADIUS.lg }}
                  variants={{
                    rest: { scale: 1 },
                    hover: { scale: reduce ? 1 : 1.03 },
                  }}
                  initial="rest"
                  whileHover="hover"
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
                <span
                  className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5"
                  style={{ borderRadius: RADIUS.lg }}
                  aria-hidden
                />
              </div>

              {/* content */}
              <div className="relative z-10 mt-5">
                <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-lime">
                  {p.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                {/* tech badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-hairline px-2 py-1 font-mono text-[0.58rem] tracking-[0.12em] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* live website CTA */}
                <motion.span
                  variants={ctaVariants}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="mt-5 block font-mono text-[0.65rem] tracking-[0.2em] uppercase"
                >
                  <span className="inline-flex items-center gap-1.5">
                    Visit Website
                    <ExternalLink className="size-3" />
                  </span>
                </motion.span>
              </div>
            </motion.a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
