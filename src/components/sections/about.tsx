import { Reveal, Section, SectionHeader } from "@/components/primitives";
import { profile } from "@/data/site";
import { RADIUS } from "@/config";

export function About() {
  return (
    <Section id="about">
      <SectionHeader index="01" kicker="Who is this guy" title={"Builder ×\nEngineer"} />
      <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="display-xl text-[clamp(1.4rem,3.2vw,2.4rem)] leading-[1.05]">
            Most engineers can&apos;t design.
            <br />
            Most designers can&apos;t ship.
            <br />
            <span className="text-lime">I do both.</span>
          </p>
          <p className="label-mono mt-8">— The short version</p>
        </Reveal>
        <Reveal delay={0.1} className="space-y-5 text-muted-foreground">
          <p className="leading-relaxed">
            Computer Science student at{" "}
            <span className="text-foreground">{profile.university}</span>, based in{" "}
            <span className="text-foreground">{profile.location}</span>. I work across the whole
            stack — training and deploying models, building the APIs behind them, and designing the
            interfaces people actually touch.
          </p>
          <p className="leading-relaxed">
            The other side: design and growth. UI/UX, brand systems and digital marketing — so the
            products I build don&apos;t just work, they get found and get used.
          </p>
<dl
            className="grid grid-cols-2 gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-4"
            style={{ borderRadius: RADIUS.md }}
          >
            {[
              ["6+", "Services"],
              ["3+", "Years building"],
              ["2026", "BSc expected"],
              ["2", "Languages"],
            ].map(([v, k]) => (
              <div key={k} className="bg-surface px-4 py-5">
                <dt className="display-xl text-2xl text-lime">{v}</dt>
                <dd className="label-mono mt-1">{k}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
