import {
  ArrowUpLeft,
  BrainCircuit,
  Code2,
  Globe2,
  Palette,
  PenTool,
  TrendingUp,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/sections/section-ui";
import { useLanguage, getLocalizedContent } from "@/i18n/language";

const icons = [BrainCircuit, Code2, Globe2, Palette, PenTool, TrendingUp];

export function Services() {
  const { language, t } = useLanguage();
  const services = getLocalizedContent(language).services;
  return (
    <Section id="services" tone="dark" className="services-section">
      <SectionHeading
        index="03"
        kicker={t.services.kicker}
        title={t.services.title}
        description={t.services.intro}
      />
      <div className="service-list">
        {services.map((service, index) => {
          const Icon = icons[index] ?? Code2;
          return (
            <div key={service.no} className="service-list__item" data-entrance-group>
              <article className="service-row">
                <span
                  className="service-row__icon"
                  data-entrance
                  data-entrance-delay={(index % 3) * 0.06}
                  data-entrance-distance="14"
                >
                  <Icon size={29} strokeWidth={1.65} aria-hidden="true" />
                </span>
                <span className="service-row__number" data-entrance data-entrance-delay="0.06">
                  {service.no}
                </span>
                <div
                  className="service-row__main"
                  data-entrance
                  data-entrance-delay={0.12 + (index % 3) * 0.06}
                >
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <ul>
                    {service.points.slice(0, 2).map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-row__stack" data-entrance data-entrance-delay="0.24">
                  {service.stack.slice(0, 3).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <ArrowUpLeft className="service-row__arrow" size={18} aria-hidden="true" />
              </article>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
