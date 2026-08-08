import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { profile } from "@/data/site";
import { ANIMATIONS, SPACING, TYPOGRAPHY, siteConfig } from "@/config";

const headline = "AHMED";
const typed = "Building intelligent systems that ship.";

function Typewriter({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? text.length : 0);

  useEffect(() => {
    if (reduce) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) clearInterval(id);
    }, ANIMATIONS.typewriterInterval);
    return () => clearInterval(id);
  }, [text, reduce]);

  return (
    <p className="mt-6 font-mono text-xs text-muted-foreground md:text-sm">
      <span className="text-lime">{"> "}</span>
      {text.slice(0, n)}
      <span className="ml-0.5 inline-block h-[1em] w-[0.5ch] translate-y-[0.15em] bg-lime align-middle motion-safe:animate-pulse" />
    </p>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
<section
      id="top"
      className="noise relative overflow-hidden"
style={{
        paddingTop: SPACING.heroPaddingTop,
        paddingBottom: SPACING.heroPaddingBottom,
        ["@media (min-width: 768px)" as string]: {
          paddingTop: SPACING.heroPaddingTopDesktop,
          paddingBottom: SPACING.heroPaddingBottomDesktop,
        },
      }}
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-25"
        style={{ background: "var(--lime)", filter: `blur(${ANIMATIONS.blurGlow})` }}
        aria-hidden
      />

<motion.div
        style={
          reduce
            ? { maxWidth: SPACING.containerWidth }
            : {
                y,
                opacity,
                maxWidth: SPACING.containerWidth,
                paddingLeft: SPACING.containerPX,
                paddingRight: SPACING.containerPX,
                ["@media (min-width: 768px)" as string]: {
                  paddingLeft: SPACING.containerPXDesktop,
                  paddingRight: SPACING.containerPXDesktop,
                },
              }
        }
        className="relative mx-auto"
      >
        <div className="flex items-center gap-3">
          <span className="pulse-dot size-2 rounded-full bg-lime" />
          <span className="label-mono">Open to work · Cairo, Egypt</span>
        </div>

<h1 className="display-xl mt-7" style={{ fontSize: TYPOGRAPHY.hero }}>
          {headline.split(" ").map((word, wi) => (
            <span key={wi} className="mr-[0.18em] inline-block">
              {word.split("").map((ch, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={reduce ? false : { y: "0.6em", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
transition={{
                    delay: ANIMATIONS.heroLetterDelay + (wi * 6 + i) * ANIMATIONS.heroLetterStep,
                    duration: ANIMATIONS.heroLetterDuration,
                    ease: ANIMATIONS.heroLetterEase,
                  }}
                >
                  {ch}
                </motion.span>
              ))}
            </span>
          ))}
          <span className="block text-lime">KHALED</span>
        </h1>

        <Typewriter text={typed} />

        <div className="mt-8 grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="font-mono text-xs tracking-[0.28em] text-lime uppercase">
              {profile.role}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I build intelligent systems and the products around them. Computer Science at{" "}
              <span className="text-foreground">{profile.university}</span> — shipping AI models,
              full stack apps and the design and growth work that makes them land.
            </p>

<div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-lime font-mono text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
                style={{
                  borderRadius: siteConfig.button.radius,
                  paddingLeft: siteConfig.button.paddingX,
                  paddingRight: siteConfig.button.paddingX,
                  paddingTop: siteConfig.button.paddingY,
                  paddingBottom: siteConfig.button.paddingY,
                  fontSize: siteConfig.button.fontSize,
                  fontWeight: siteConfig.button.fontWeight,
                  letterSpacing: siteConfig.button.letterSpacing,
                }}
              >
                View work
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/Ahmed_Khaled_Hussain_CV.pdf"
                download="Ahmed-Khaled-Hussain-CV.pdf"
                className="group inline-flex items-center gap-2 border border-hairline font-mono uppercase transition-colors hover:border-lime hover:text-lime"
                style={{
                  borderRadius: siteConfig.button.radius,
                  paddingLeft: siteConfig.button.paddingX,
                  paddingRight: siteConfig.button.paddingX,
                  paddingTop: siteConfig.button.paddingY,
                  paddingBottom: siteConfig.button.paddingY,
                  fontSize: siteConfig.button.fontSize,
                  fontWeight: siteConfig.button.fontWeight,
                  letterSpacing: siteConfig.button.letterSpacing,
                }}
              >
                Download CV
                <Download className="size-3.5" />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={profile.github.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase hover:text-lime"
              >
                <Github className="size-3.5" /> GitHub <ArrowUpRight className="size-3" />
              </a>
              <a
                href={profile.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase hover:text-lime"
              >
                <Linkedin className="size-3.5" /> LinkedIn <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>

          <div className="card-surface float-y relative p-5">
            <div className="flex items-center gap-2 border-b border-hairline pb-3">
              <span className="size-2 rounded-full bg-destructive/70" />
              <span className="size-2 rounded-full bg-lime/40" />
              <span className="size-2 rounded-full bg-hairline" />
              <span className="ml-2 font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground">
                whoami.sh
              </span>
            </div>
            <dl className="mt-4 space-y-2.5 font-mono text-[0.72rem]">
              {[
                ["role", "Full Stack / Graphic Design"],
                ["study", `${profile.major} — AOU`],
                ["base", profile.location],
                ["lang", profile.languages.join(" · ")],
                ["status", "Available for work"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-right text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
