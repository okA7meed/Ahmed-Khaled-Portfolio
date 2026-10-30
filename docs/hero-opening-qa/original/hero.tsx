import { ArrowDownLeft, ArrowUpLeft, Download, Github, Linkedin, Mouse } from "lucide-react";
import { profile } from "@/data/site";
import { useLanguage } from "@/i18n/language";

export function Hero() {
  const { language, dir, t } = useLanguage();
  const isArabic = language === "ar";
  return (
    <section id="top" className="hero" aria-labelledby="hero-title" data-entrance-group="hero">
      <div className="hero__texture" aria-hidden="true" />
      <div
        className="hero__horizon"
        aria-hidden="true"
        data-entrance
        data-entrance-distance="12"
        data-entrance-duration="1"
      >
        <span />
      </div>
      <div className="hero__inner" data-language={language} dir={dir}>
        <div className="hero__copy">
          <p className="hero__eyebrow" data-entrance data-entrance-distance="10">
            <span className="hero__status-dot" />
            {t.hero.eyebrow}
          </p>
          <h1 id="hero-title" className="hero__title" data-entrance data-entrance-delay="0.06">
            {t.hero.name}
          </h1>
          <p className="hero__role" data-entrance data-entrance-delay="0.13">
            {t.hero.role}
          </p>
          <p className="hero__intro" data-entrance data-entrance-delay="0.21">
            {t.hero.intro}
          </p>
          <div className="hero__actions">
            <a
              className="button button--ink"
              href="#projects"
              data-entrance
              data-entrance-delay="0.28"
            >
              {t.hero.primary}
              <ArrowDownLeft size={18} aria-hidden="true" />
            </a>
            <a
              className="button button--outline"
              href="#contact"
              data-entrance
              data-entrance-delay="0.35"
            >
              {t.hero.secondary}
              <ArrowUpLeft size={17} aria-hidden="true" />
            </a>
            <a
              className="hero__cv"
              href="/Ahmed_Khaled_Hussain_CV.pdf"
              download="Ahmed-Khaled-Hussain-CV.pdf"
              data-entrance
              data-entrance-delay="0.42"
            >
              <Download size={14} />
              {t.hero.cv}
            </a>
          </div>
          <div
            className="hero__socials"
            aria-label={isArabic ? "روابط التواصل" : "Social links"}
            data-entrance
            data-entrance-delay="0.42"
          >
            <a href={profile.github.url} target="_blank" rel="noreferrer">
              <Github size={15} aria-hidden="true" /> GitHub
            </a>
            <a href={profile.linkedin.url} target="_blank" rel="noreferrer">
              <Linkedin size={15} aria-hidden="true" /> LinkedIn
            </a>
            <span>{t.hero.location}</span>
          </div>
        </div>
      </div>
      <a
        className="hero__scroll"
        href="#projects"
        data-entrance
        data-entrance-delay="0.4"
        data-entrance-distance="8"
      >
        <Mouse size={20} aria-hidden="true" />
        <span>{t.hero.scroll}</span>
      </a>
      <span
        className="hero__number"
        aria-hidden="true"
        data-entrance
        data-entrance-delay="0.4"
        data-entrance-distance="8"
      >
        PORTFOLIO / 2026
      </span>
    </section>
  );
}
