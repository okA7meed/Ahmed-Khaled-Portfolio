import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { ANIMATIONS, SPACING, TYPOGRAPHY } from "@/config";

export function Reveal({
  children,
  delay = 0,
  y = ANIMATIONS.revealY,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y, filter: `blur(${ANIMATIONS.revealBlur})` }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: ANIMATIONS.revealDuration, delay, ease: ANIMATIONS.revealEase }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <div className="mb-10 md:mb-16">
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[0.7rem] tracking-[0.4em] text-lime">{index}</span>
          <span className="h-px flex-1 bg-hairline" />
          <span className="label-mono">{kicker}</span>
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="display-xl mt-6 whitespace-pre-line text-[clamp(2.2rem,7vw,5.5rem)]">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full scroll-mt-24 ${className}`}
      style={{
        maxWidth: SPACING.containerWidth,
        paddingLeft: SPACING.sectionPaddingX,
        paddingRight: SPACING.sectionPaddingX,
        paddingTop: SPACING.sectionY,
        paddingBottom: SPACING.sectionY,
        ["@media (min-width: 768px)" as string]: {
          paddingLeft: SPACING.sectionPaddingXDesktop,
          paddingRight: SPACING.sectionPaddingXDesktop,
          paddingTop: SPACING.sectionYDesktop,
          paddingBottom: SPACING.sectionYDesktop,
        },
      }}
    >
      {children}
    </section>
  );
}

export const TYPO = TYPOGRAPHY;
