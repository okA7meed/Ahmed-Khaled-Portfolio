import { Reveal, Section, SectionHeading } from "@/components/sections/section-ui";
import { getLocalizedContent, useLanguage } from "@/i18n/language";
import { ArrowRight } from "lucide-react";

export function Timeline() {
  const { language, t } = useLanguage();
  const { gitlog, experience } = getLocalizedContent(language);
  return (
    <Section id="timeline" tone="dark" className="timeline-section">
      <SectionHeading index="05" kicker={t.timeline.kicker} title={t.timeline.title} />
      <div className="milestones" aria-label={t.timeline.history}>
        {gitlog.map((item, index) => (
          <Reveal key={item.year} delay={index * 0.025} className="milestone">
            <span className="milestone__year">{item.year}</span>
            <span className="milestone__dot" aria-hidden="true" />
            <span className="milestone__text">{item.text}</span>
          </Reveal>
        ))}
      </div>
      <h3 className="timeline__subhead">{t.timeline.experience}</h3>
      <div className="experience-list">
        {experience.map((entry, index) => (
          <Reveal
            key={`${entry.title}-${entry.period}`}
            delay={index * 0.045}
            className="experience-entry"
          >
            <article>
              <div className="experience-entry__period">
                {entry.period.startsWith("→") ? (
                  <>
                    <ArrowRight className="timeline-period__arrow" aria-hidden="true" />
                    {entry.period.slice(1).trimStart()}
                  </>
                ) : (
                  entry.period
                )}
              </div>
              <div className="experience-entry__content">
                <span className="experience-entry__status">
                  {language === "ar" ? "خبرة وتعليم" : "EXPERIENCE & EDUCATION"}
                </span>
                <h4>{entry.title}</h4>
                <p className="experience-entry__org">{entry.org.replace(/^@\s*/, "")}</p>
                <ul>
                  {entry.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
