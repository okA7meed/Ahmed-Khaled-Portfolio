import { ArrowUpLeft, Github, Instagram, Linkedin } from "lucide-react";
import { profile } from "@/data/site";
import { useLanguage } from "@/i18n/language";

export function Footer() {
  const { language, t } = useLanguage();
  return (
    <footer className="site-footer" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="site-footer__inner">
        <a className="site-footer__brand" href="#top" aria-label={t.footer.top}>
          <span className="site-footer__mark">AK</span>
          <span>
            <strong>Ahmed Khaled</strong>
            <small>{t.footer.note}</small>
          </span>
        </a>
        <div className="site-footer__socials">
          <a href={profile.github.url} target="_blank" rel="noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={profile.linkedin.url} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href={profile.instagram.url} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={17} />
          </a>
        </div>
        <a className="site-footer__top" href="#top">
          {t.footer.top}
          <ArrowUpLeft size={15} aria-hidden="true" />
        </a>
      </div>
      <div className="site-footer__bottom">
        <span>
          © {new Date().getFullYear()} Ahmed Khaled Hussain · {t.footer.copyright}
        </span>
        <span>{t.footer.openToWork}</span>
      </div>
    </footer>
  );
}
