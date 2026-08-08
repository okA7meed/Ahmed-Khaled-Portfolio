import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import { Reveal, Section, SectionHeader } from "@/components/primitives";
import { experience, gitlog } from "@/data/site";

function Milestone({
  progress,
  threshold,
  children,
}: {
  progress: MotionValue<number>;
  threshold: number;
  children: React.ReactNode;
}) {
  const [active, setActive] = useState(false);

  useMotionValueEvent(progress, "change", (v) => setActive(v >= threshold));

  return (
    <div className="relative" data-milestone>
      <motion.span
        aria-hidden
        animate={{
          scale: active ? 1.5 : 1,
          backgroundColor: active ? "var(--lime)" : "var(--background)",
          boxShadow: active
            ? "0 0 0 1px color-mix(in oklab, var(--lime) 40%, transparent), 0 0 20px -6px color-mix(in oklab, var(--lime) 70%, transparent)"
            : "0 0 0 0 transparent",
        }}
        transition={{ type: "spring", stiffness: 320, damping: 22, mass: 0.6 }}
        className="absolute top-7 -left-[1.85rem] size-2.5 rounded-full border border-lime md:-left-[2.85rem]"
      />
      {children}
    </div>
  );
}

export function Timeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [thresholds, setThresholds] = useState<number[]>([]);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const items = track.querySelectorAll<HTMLElement>("[data-milestone]");
    const trackRect = track.getBoundingClientRect();
    const next: number[] = [];
    items.forEach((el) => {
      const elRect = el.getBoundingClientRect();
      const top = elRect.top - trackRect.top;
      next.push(track.offsetHeight > 0 ? top / track.offsetHeight : 0);
    });
    setThresholds(next);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "end 0.35"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.4,
  });

  return (
    <Section id="timeline">
      <SectionHeader index="04" kicker="git log" title="Track record" />

      <div className="mb-14 flex snap-x gap-3 overflow-x-auto pb-2">
        {gitlog.map((g, i) => (
          <Reveal key={g.year} delay={i * 0.05}>
            <div className="card-surface w-[220px] shrink-0 snap-start p-4">
              <div className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-lime" />
                <span className="font-mono text-[0.7rem] tracking-[0.25em] text-lime">
                  {g.year}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{g.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div
        ref={trackRef}
        className="relative space-y-4 border-l border-hairline pl-6 md:pl-10"
      >
        {/* Brand-green progress line filling the existing gray timeline */}
        <motion.div
          aria-hidden
          style={{ scaleY: progress, transformOrigin: "top" }}
          className="absolute top-0 left-0 h-full w-[2px] -translate-x-1/2 rounded-full bg-lime lime-glow"
        />

        {experience.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.08}>
            <Milestone progress={progress} threshold={thresholds[i] ?? 0}>
              <article className="card-surface p-6 transition-colors hover:border-lime/40 md:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[0.65rem] tracking-[0.22em] text-lime">
                    {e.period}
                  </span>
                  <span className="rounded-full border border-hairline px-2 py-0.5 font-mono text-[0.58rem] tracking-[0.2em] text-muted-foreground">
                    {e.head}
                  </span>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight md:text-2xl">
                  {e.title}
                </h3>
                <p className="font-mono text-[0.7rem] tracking-[0.15em] text-muted-foreground">
                  {e.org}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {e.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-lime" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Milestone>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
