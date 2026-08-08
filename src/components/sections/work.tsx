import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, Section, SectionHeader } from "@/components/primitives";
import { flagship, moreWork } from "@/data/site";
import { RADIUS, siteConfig } from "@/config";

export function Work() {
  return (
    <Section id="work">
      <SectionHeader index="07" kicker="Shipped & grown" title="Selected work" />

      <Reveal>
        <article className="card-surface relative overflow-hidden p-6 md:p-10">
          <div
            className="pointer-events-none absolute -top-32 -left-20 size-[420px] rounded-full opacity-15 blur-[100px]"
            style={{ background: "var(--lime)" }}
            aria-hidden
          />
          <span className="relative font-mono text-[0.62rem] tracking-[0.28em] text-lime">
            {flagship.tag}
          </span>
          <h3 className="display-xl relative mt-4 text-[clamp(1.8rem,5vw,3.5rem)]">
            {flagship.title}
          </h3>
          <div className="relative mt-6 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="leading-relaxed text-muted-foreground">{flagship.body}</p>
              <ul className="mt-6 space-y-2">
                {flagship.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-sm">
                    <span className="size-1.5 rounded-full bg-lime" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-1.5">
                {flagship.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-hairline px-2 py-1 font-mono text-[0.6rem] tracking-[0.15em] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
<ul
              className="grid gap-px self-start overflow-hidden border border-hairline bg-hairline"
              style={{ borderRadius: RADIUS.md }}
            >
              {flagship.features.map((f) => (
                <li
                  key={f}
                  className="bg-surface px-4 py-3 font-mono text-[0.65rem] tracking-[0.18em] text-muted-foreground"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </Reveal>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Reveal delay={0.05}>
          <article className="card-surface group flex h-full flex-col justify-between p-6">
            <div>
              <span className="font-mono text-[0.62rem] tracking-[0.25em] text-lime">DEV</span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Aqar-Go — Real Estate Platform
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                AI-powered real estate platform — smart search, financing tools and virtual tours.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1.5 font-mono text-[0.65rem] tracking-[0.2em] uppercase transition-colors group-hover:text-lime">
              <ArrowUpRight className="size-3" /> Full product build
            </span>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <article className="card-surface flex h-full flex-col justify-between border-dashed p-6">
            <div>
              <span className="font-mono text-[0.62rem] tracking-[0.25em] text-lime">
                NEXT SLOT OPEN
              </span>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                Your project could be the next case study.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Website, AI tool, or a growth push — let&apos;s talk about it.
              </p>
            </div>
<a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 self-start bg-lime font-mono text-primary-foreground uppercase"
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
              Start a project
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </article>
        </Reveal>
      </div>

      <p className="label-mono mt-14">$ more work</p>
      <ul className="mt-4 divide-y divide-hairline border-y border-hairline">
        {moreWork.map((w, i) => (
          <Reveal key={w.no} delay={i * 0.05}>
            <li className="group flex flex-col gap-2 py-5 transition-colors hover:bg-surface/50 md:flex-row md:items-center md:gap-8 md:px-4">
              <span className="font-mono text-[0.65rem] tracking-[0.25em] text-lime">{w.no}</span>
              <div className="flex-1">
                <h4 className="text-base font-medium transition-colors group-hover:text-lime">
                  {w.title}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">{w.text}</p>
              </div>
              <span className="font-mono text-[0.6rem] tracking-[0.2em] text-muted-foreground">
                {w.kind} ↗ {w.meta}
              </span>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
