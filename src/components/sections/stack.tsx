import { useState } from "react";
import { Reveal, Section, SectionHeader } from "@/components/primitives";
import { stacks } from "@/data/site";
import { RADIUS } from "@/config";

const keys = ["builder", "design", "growth", "graphics"] as const;
type Key = (typeof keys)[number];

export function Stack() {
  const [active, setActive] = useState<Key>("builder");
  const current = stacks[active];

  return (
    <Section id="stack">
      <SectionHeader index="03" kicker="Dual arsenal" title={"Three stacks,\none head"} />
      <div className="card-surface overflow-hidden">
        <div className="flex flex-wrap gap-1 border-b border-hairline bg-surface-2/40 p-2">
          {keys.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => setActive(k)}
              className={`rounded-sm px-4 py-2 font-mono text-[0.68rem] tracking-[0.2em] transition-colors ${
                active === k
                  ? "bg-lime text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {stacks[k].file}
            </button>
          ))}
        </div>
        <div className="p-6 md:p-8">
          <p className="font-mono text-xs text-lime">{current.line}</p>
<ul
            className="mt-6 grid gap-px overflow-hidden border border-hairline bg-hairline sm:grid-cols-2"
            style={{ borderRadius: RADIUS.md }}
          >
            {current.items.map((it, i) => (
              <Reveal key={it.name} delay={i * 0.03}>
                <li className="group flex items-center justify-between gap-4 bg-surface px-4 py-4 transition-colors hover:bg-surface-2">
                  <span className="flex items-center gap-3 text-sm">
                    <span className="size-1.5 rounded-full bg-lime opacity-60 transition-opacity group-hover:opacity-100" />
                    {it.name}
                  </span>
                  <span className="font-mono text-[0.6rem] tracking-[0.18em] text-muted-foreground">
                    {it.level}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
