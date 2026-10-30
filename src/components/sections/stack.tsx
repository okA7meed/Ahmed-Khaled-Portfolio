import { useState } from "react";
import { StackLogos } from "./stack-logos";
import { Reveal, Section, SectionHeading } from "@/components/sections/section-ui";
import { useLanguage, getLocalizedContent } from "@/i18n/language";

const groupKeys = ["builder", "design", "growth", "graphics"] as const;
type GroupKey = (typeof groupKeys)[number];
export function Stack() {
  const { language, t } = useLanguage();
  const groups = getLocalizedContent(language).stacks;
  const [active, setActive] = useState<GroupKey>("builder");
  const current = groups[active];
  const labels: Record<GroupKey, string> = {
    builder: t.stack.builder,
    design: t.stack.design,
    growth: t.stack.growth,
    graphics: t.stack.graphics,
  };
  return (
    <Section id="stack" tone="dark" className="stack-section">
      <SectionHeading
        index="04"
        kicker={t.stack.kicker}
        title={t.stack.title}
        description={t.stack.intro}
      />
      <div className="stack-tabs" role="tablist" aria-label={t.stack.title}>
        {groupKeys.map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={active === key}
            aria-controls="stack-content"
            onClick={() => setActive(key)}
          >
            {labels[key]}
          </button>
        ))}
      </div>
      <div id="stack-content" className="stack-content" role="tabpanel" tabIndex={0}>
        <p className="stack-content__line">{current.line}</p>
        <div className="stack-content__items">
          {current.items.map((item, index) => {
            return (
              <Reveal delay={index * 0.035} key={`${active}-${item.name}`} className="stack-item">
                <div className="stack-item__tile" title={`${item.name} — ${item.level}`}>
                  <StackLogos name={item.name} />
                  <strong className="stack-item__name">{item.name}</strong>
                  <span className="stack-item__level">{item.level}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
