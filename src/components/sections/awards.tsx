import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { getLocalizedContent, useLanguage } from "@/i18n/language";
import { Reveal, Section, SectionHeading } from "@/components/sections/section-ui";

const fallback = "/certificates/placeholder.webp";

export function Awards() {
  const { language, t } = useLanguage();
  const { certificates } = getLocalizedContent(language);
  const [active, setActive] = useState<number | null>(null);
  const gallery = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const close = useCallback(() => setActive(null), []);
  const move = useCallback(
    (step: number) => {
      setActive((current) =>
        current === null ? current : (current + step + certificates.length) % certificates.length,
      );
    },
    [certificates.length],
  );

  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") move(language === "ar" ? 1 : -1);
      if (event.key === "ArrowRight") move(language === "ar" ? -1 : 1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, language, move]);

  const cert = active === null ? null : certificates[active];
  return (
    <Section id="awards" tone="light" className="awards-section">
      <SectionHeading index="06" kicker={t.awards.kicker} title={t.awards.title} />
      <p className="awards__label">
        {t.awards.label}
        <span>{String(certificates.length).padStart(2, "0")}</span>
      </p>
      <div className="certificate-gallery-controls">
        <button
          type="button"
          aria-label={language === "ar" ? "الشهادات السابقة" : "Previous certificates"}
          onClick={() =>
            gallery.current?.scrollBy({ left: language === "ar" ? 360 : -360, behavior: "smooth" })
          }
        >
          <ArrowLeft size={18} />
        </button>
        <button
          type="button"
          aria-label={language === "ar" ? "الشهادات التالية" : "Next certificates"}
          onClick={() =>
            gallery.current?.scrollBy({ left: language === "ar" ? -360 : 360, behavior: "smooth" })
          }
        >
          <ArrowRight size={18} />
        </button>
      </div>
      <div className="certificate-grid" ref={gallery} dir={language === "ar" ? "rtl" : "ltr"}>
        {certificates.map((item, index) => (
          <Reveal
            key={`certificate-${index}`}
            delay={index * 0.02}
            className="certificate-card-wrap"
          >
            <button
              type="button"
              className="certificate-card"
              onClick={() => setActive(index)}
              aria-label={`${t.awards.view}: ${item.title}`}
            >
              <span className="certificate-card__image">
                <img
                  draggable={false}
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.src = fallback;
                  }}
                />
              </span>
              <span className="certificate-card__body">
                <span className="certificate-card__issuer">{item.org}</span>
                <span className="certificate-card__title">{item.title}</span>
                <span className="certificate-card__view">
                  {t.awards.view} <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      <AnimatePresence>
        {cert ? (
          <motion.div
            className="certificate-modal"
            role="dialog"
            aria-modal="true"
            aria-label={cert.title}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? {} : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            onClick={close}
          >
            <button
              className="certificate-modal__close"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                close();
              }}
              aria-label={t.awards.close}
            >
              <X size={20} />
            </button>
            <button
              className="certificate-modal__previous"
              type="button"
              aria-label={t.awards.previous}
              onClick={(event) => {
                event.stopPropagation();
                move(language === "ar" ? 1 : -1);
              }}
            >
              <ArrowLeft size={21} />
            </button>
            <figure
              className="certificate-modal__figure"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                draggable={false}
                src={cert.image}
                alt={cert.title}
                onError={(event) => {
                  event.currentTarget.src = fallback;
                }}
              />
              <figcaption>
                <strong>{cert.title}</strong>
                <span>{cert.org}</span>
              </figcaption>
            </figure>
            <button
              className="certificate-modal__next"
              type="button"
              aria-label={t.awards.next}
              onClick={(event) => {
                event.stopPropagation();
                move(language === "ar" ? -1 : 1);
              }}
            >
              <ArrowRight size={21} />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  );
}
