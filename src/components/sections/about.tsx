import { BookOpen, Languages, MapPin } from "lucide-react";
import { profile } from "@/data/site";
import { useLanguage } from "@/i18n/language";
import { Reveal, RevealWords, Section, SectionHeading } from "@/components/sections/section-ui";

export function About() {
  const { language, t } = useLanguage();
  const languages = language === "ar" ? "العربية · الإنجليزية" : profile.languages.join(" · ");
  return (
    <Section id="about" tone="light" className="about-section">
      <SectionHeading index="02" kicker={t.about.kicker} title={t.about.title} />
      <div className="about__layout">
        <div className="about__lead-wrap">
          <p className="about__lead">
            <RevealWords text={t.about.lead} />
          </p>
          <p className="about__short" data-entrance data-entrance-delay="0.25">
            — {t.about.short}
          </p>
        </div>
        <Reveal className="about__body" delay={0.08}>
          <p>{t.about.bodyOne}</p>
          <p>{t.about.bodyTwo}</p>
          <dl className="about__facts">
            <div>
              <dt>
                <BookOpen size={15} aria-hidden="true" />
                {language === "ar" ? "الدراسة" : "Studies"}
              </dt>
              <dd>
                {t.about.university} · {profile.major}
              </dd>
            </div>
            <div>
              <dt>
                <MapPin size={15} aria-hidden="true" />
                {language === "ar" ? "الموقع" : "Location"}
              </dt>
              <dd>{t.about.location}</dd>
            </div>
            <div>
              <dt>
                <Languages size={15} aria-hidden="true" />
                {language === "ar" ? "اللغات" : "Languages"}
              </dt>
              <dd>{languages}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
