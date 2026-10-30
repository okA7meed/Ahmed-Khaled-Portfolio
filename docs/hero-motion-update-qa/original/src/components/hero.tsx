import { ArrowDownLeft, ArrowUpLeft, Download, Github, Linkedin, Mouse } from "lucide-react";
import { OPENING } from "@/config/opening";
import { profilePortraitSrc, profilePortraitAlt } from "@/config/portrait";
import { HeroSignature } from "@/components/hero-signature";
import { profile } from "@/data/site";
import { useLanguage } from "@/i18n/language";

export function Hero() {
  const { language, dir, t } = useLanguage();
  const isArabic = language === "ar";
  return (
    <section id="top" className="hero" aria-labelledby="hero-title" data-entrance-group="hero">
      <div className="hero__texture" aria-hidden="true" />
      <div className="hero__horizon" aria-hidden="true">
        <span />
      </div>
      <div className="hero__inner" data-language={language} dir={dir}>
        <div className="hero__portrait-composition">
          <div
            className="hero__portrait-scene"
            data-entrance
            data-entrance-owner="opening"
            data-entrance-delay={OPENING.portrait}
            data-entrance-duration="0.65"
            data-entrance-distance="16"
          >
            <span className="hero__orbit" aria-hidden="true" />
            <div className="hero__portrait-frame">
              <img
                className="hero__portrait"
                src={profilePortraitSrc}
                alt={isArabic ? "أحمد خالد" : profilePortraitAlt}
                width={1024}
                height={1024}
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <span className="hero__planet hero__planet--one" aria-hidden="true" />
            <span className="hero__planet hero__planet--two" aria-hidden="true" />
          </div>
          <HeroSignature />
        </div>
        <div className="hero__copy">
          <p
            className="hero__eyebrow"
            data-entrance
            data-entrance-owner="opening"
            data-entrance-delay={OPENING.availability}
            data-entrance-duration="0.4"
            data-entrance-distance="-12"
          >
            <span className="hero__status-dot" />
            {t.hero.eyebrow}
          </p>
          <h1
            id="hero-title"
            className="hero__title"
            data-entrance
            data-entrance-owner="opening"
            data-entrance-delay={OPENING.title}
            data-entrance-duration="0.5"
          >
            {t.hero.name}
          </h1>
          <p
            className="hero__role"
            data-entrance
            data-entrance-owner="opening"
            data-entrance-delay={OPENING.role}
            data-entrance-duration="0.36"
          >
            {t.hero.role}
          </p>
          <p
            className="hero__intro"
            data-entrance
            data-entrance-owner="opening"
            data-entrance-delay={OPENING.description}
            data-entrance-duration="0.4"
          >
            {t.hero.intro}
          </p>
          <div className="hero__actions">
            <a
              className="button button--ink"
              href="#projects"
              data-entrance
              data-entrance-owner="opening"
              data-entrance-delay={OPENING.primary}
              data-entrance-duration="0.3"
            >
              {t.hero.primary}
              <ArrowDownLeft size={18} aria-hidden="true" />
            </a>
            <a
              className="button button--outline"
              href="#contact"
              data-entrance
              data-entrance-owner="opening"
              data-entrance-delay={OPENING.secondary}
              data-entrance-duration="0.3"
            >
              {t.hero.secondary}
              <ArrowUpLeft size={17} aria-hidden="true" />
            </a>
            <a
              className="hero__cv"
              href="/Ahmed_Khaled_Hussain_CV.pdf"
              download="Ahmed-Khaled-Hussain-CV.pdf"
              data-entrance
              data-entrance-owner="opening"
              data-entrance-delay={OPENING.cv}
              data-entrance-duration="0.3"
            >
              <Download size={14} />
              {t.hero.cv}
            </a>
          </div>
          <div
            className="hero__socials"
            aria-label={isArabic ? "روابط التواصل" : "Social links"}
            data-entrance
            data-entrance-owner="opening"
            data-entrance-delay={OPENING.socials}
            data-entrance-duration="0.3"
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
        data-entrance-owner="opening"
        data-entrance-delay={OPENING.socials}
        data-entrance-duration="0.3"
        data-entrance-distance="8"
      >
        <Mouse size={20} aria-hidden="true" />
        <span>{t.hero.scroll}</span>
      </a>
      <span
        className="hero__number"
        aria-hidden="true"
        data-entrance
        data-entrance-owner="opening"
        data-entrance-delay={OPENING.socials}
        data-entrance-duration="0.3"
        data-entrance-distance="8"
      >
        PORTFOLIO / 2026
      </span>
    </section>
  );
}
