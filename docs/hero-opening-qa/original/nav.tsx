import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpLeft, Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useLanguage } from "@/i18n/language";
import { useTheme } from "@/hooks/use-theme";

const ids = [
  "projects",
  "about",
  "services",
  "stack",
  "timeline",
  "awards",
  "work",
  "contact",
] as const;
type NavId = (typeof ids)[number];

export function Nav() {
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const languageLabel = language === "ar" ? "التبديل إلى الإنجليزية" : "Switch to Arabic";
  const themeLabel =
    language === "ar"
      ? isDark
        ? "تفعيل الوضع الفاتح"
        : "تفعيل الوضع الداكن"
      : isDark
        ? "Switch to light theme"
        : "Switch to dark theme";
  const reduce = useReducedMotion();
  const [active, setActive] = useState<NavId>("projects");
  const [open, setOpen] = useState(false);
  const navItems = ids.map((id) => ({ id, label: t.nav[id] }));

  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    if (!targets.length || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as NavId);
      },
      { rootMargin: "-32% 0px -56% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  const goTo = useCallback((event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
    history.replaceState(null, "", `#${id}`);
  }, []);

  return (
    <header className="site-nav" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="site-nav__bar" data-entrance-group="navigation">
        <a
          className="site-nav__brand"
          data-entrance
          data-entrance-duration="0.5"
          data-entrance-distance="6"
          href="#top"
          onClick={(event) => goTo(event, "top")}
          aria-label={
            language === "ar" ? "أحمد خالد — العودة إلى البداية" : "Ahmed Khaled — back to top"
          }
        >
          <img
            className="site-nav__logo site-nav__logo--dark"
            src="/images/logos/logo-ak.png"
            alt=""
            width={56}
            height={28}
            fetchPriority="high"
            decoding="async"
          />
          <img
            className="site-nav__logo site-nav__logo--light"
            src="/images/logos/logo-ak-Dark.png"
            alt=""
            width={56}
            height={28}
            decoding="async"
          />
        </a>
        <nav className="site-nav__links" aria-label={t.nav.primary}>
          {navItems.map(({ id, label }, index) => (
            <a
              key={id}
              data-entrance
              data-entrance-delay={0.06 + index * 0.075}
              data-entrance-duration="0.5"
              data-entrance-distance="8"
              href={`#${id}`}
              onClick={(event) => goTo(event, id)}
              aria-current={active === id ? "location" : undefined}
              className={active === id ? "is-active" : ""}
            >
              {label}
            </a>
          ))}
        </nav>
        <div
          className="site-nav__actions"
          data-entrance
          data-entrance-delay="0.15"
          data-entrance-duration="0.5"
          data-entrance-distance="6"
        >
          <button
            className="language-toggle"
            type="button"
            onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
            aria-label={languageLabel}
            title={languageLabel}
          >
            <Languages size={18} aria-hidden="true" />
          </button>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={themeLabel}
            title={themeLabel}
          >
            <Sun className="theme-toggle__sun" size={18} aria-hidden="true" />
            <Moon className="theme-toggle__moon" size={18} aria-hidden="true" />
          </button>
          <a className="site-nav__cta" href="#contact" onClick={(event) => goTo(event, "contact")}>
            {t.nav.hire}
            <ArrowUpLeft size={14} aria-hidden="true" />
          </a>
          <button
            className="site-nav__menu"
            type="button"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            className="site-nav__mobile"
            aria-label={t.nav.mobile}
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? {} : { opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0 : 0.22, ease: "easeOut" }}
          >
            {navItems.map(({ id, label }, index) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => goTo(event, id)}
                aria-current={active === id ? "location" : undefined}
              >
                <span className="site-nav__mobile-index">0{index + 1}</span>
                {label}
              </a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
