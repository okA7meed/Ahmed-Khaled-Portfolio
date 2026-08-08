import { ArrowRight, Check } from "lucide-react";
import { Reveal, Section, SectionHeader } from "@/components/primitives";
import { services } from "@/data/site";

export function Services() {
  return (
    <Section id="services">
      <SectionHeader index="02" kicker="Hire me for" title="What I do" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.no} delay={i * 0.06}>
            <article className="card-surface group relative flex h-full flex-col p-6 transition-all duration-500 hover:-translate-y-1 hover:border-lime/50">
              <div
                className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(420px circle at 50% 0%, color-mix(in oklab, var(--lime) 10%, transparent), transparent 70%)",
                }}
                aria-hidden
              />
              <div className="relative flex items-center justify-between">
                <span className="font-mono text-[0.7rem] tracking-[0.3em] text-lime">{s.no}</span>
                {s.tag && (
                  <span className="rounded-full border border-lime/40 px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.2em] text-lime">
                    {s.tag}
                  </span>
                )}
              </div>
              <h3 className="relative mt-6 text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
              <ul className="relative mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="mt-0.5 size-3.5 shrink-0 text-lime" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="relative mt-6 flex flex-wrap gap-1.5">
                {s.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-sm border border-hairline px-2 py-1 font-mono text-[0.6rem] tracking-[0.15em] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#contact"
                className="relative mt-7 inline-flex items-center gap-2 border-t border-hairline pt-4 font-mono text-[0.68rem] tracking-[0.2em] uppercase transition-colors group-hover:text-lime"
              >
                Start a project
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
