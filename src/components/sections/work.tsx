import { ArrowUpLeft, Check, Crosshair } from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/sections/section-ui";
import { flagship as sourceFlagship } from "@/data/site";
import { getLocalizedContent, useLanguage } from "@/i18n/language";

const arabicFeatures = [
  "كشف لحظي",
  "تتبّع الأجسام",
  "نماذج تنبؤ ذكية",
  "لوحة تحليلات",
  "صلاحيات حسب الدور",
  "REST API",
];

export function Work() {
  const { language, t } = useLanguage();
  const entries = getLocalizedContent(language).moreWork;
  const summary =
    language === "ar"
      ? {
          tag: "المشروع الرئيسي — منتج ذكاء اصطناعي",
          body: "منصة ذكاء اصطناعي تحوّل بث الكاميرات إلى رؤى منظمة قابلة للبحث، مع كشف وتتبع وتحليلات لحظية ضمن لوحة واحدة.",
          bullets: ["مسار استدلال لحظي", "من النموذج إلى لوحة التحكم", "تصميم وبناء فردي"],
        }
      : { tag: sourceFlagship.tag, body: sourceFlagship.body, bullets: sourceFlagship.bullets };
  return (
    <Section id="work" tone="dark" className="work-section">
      <SectionHeading index="07" kicker={t.work.kicker} title={t.work.title} />
      <Reveal className="flagship">
        <div className="flagship__visual" aria-hidden="true">
          <span className="flagship__label">
            {language === "ar" ? "رؤية حاسوبية" : "COMPUTER VISION"}
          </span>
          <div className="flagship__scan">
            <i />
            <i />
            <i />
            <i />
          </div>
          <Crosshair className="flagship__crosshair" size={29} aria-hidden="true" />
          <span className="flagship__id">NV—01</span>
        </div>
        <div className="flagship__copy">
          <p className="flagship__tag">{summary.tag}</p>
          <h3>{t.work.flagshipTitle}</h3>
          <p className="flagship__body">{summary.body}</p>
          <ul className="flagship__bullets">
            {summary.bullets.map((bullet) => (
              <li key={bullet}>
                <Check size={14} aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
          <div className="flagship__features">
            {sourceFlagship.features.map((feature, index) => (
              <span key={feature}>{language === "ar" ? arabicFeatures[index] : feature}</span>
            ))}
          </div>
          <div className="flagship__tech">
            {sourceFlagship.stack.map((name) => (
              <span key={name}>{name}</span>
            ))}
          </div>
        </div>
      </Reveal>
      <div className="more-work">
        {entries.map((entry, index) => (
          <Reveal key={entry.no} delay={index * 0.035} className="more-work__entry">
            <article>
              <span className="more-work__number">{entry.no}</span>
              <div>
                <p className="more-work__kind">
                  {entry.kind} <i>·</i> {entry.meta}
                </p>
                <h3>{entry.title}</h3>
                <p className="more-work__text">{entry.text}</p>
              </div>
              <ArrowUpLeft className="more-work__arrow" size={18} aria-hidden="true" />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
