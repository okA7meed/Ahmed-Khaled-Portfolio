import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { nav, profile } from "@/data/site";
import { NAVBAR } from "@/config";
import { useTheme } from "@/hooks/use-theme";

/**
 * ── NAVBAR ────────────────────────────────────────────────────
 * All visual dimensions come from `@/config/navbar.ts` (NAVBAR).
 * Colors come from the active theme via CSS variables. To restyle
 * the navbar, edit src/config/navbar.ts only.
 */
const pillStyle: React.CSSProperties = {
  width: NAVBAR.widthMobile,
  height: NAVBAR.heightMobile,
  maxWidth: NAVBAR.maxWidth,
  borderRadius: NAVBAR.borderRadius,
  paddingInline: NAVBAR.horizontalPadding,
  paddingBlock: NAVBAR.verticalPadding,
  background: NAVBAR.backgroundCss,
  backdropFilter: `blur(${NAVBAR.blur})`,
  WebkitBackdropFilter: `blur(${NAVBAR.blur})`,
  border: `${NAVBAR.borderWidth} solid ${NAVBAR.borderColorCss}`,
  boxShadow: NAVBAR.shadowCss,
};

type LenisLike = { scrollTo: (target: HTMLElement | number, opts?: { offset?: number }) => void };

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
  if (lenis) lenis.scrollTo(el, { offset: -112 });
  else el.scrollIntoView({ behavior: "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

export function Nav() {
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 240 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    scrollToId(id);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: hidden ? -120 : 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 z-50 flex flex-col items-center px-3 sm:px-4"
      style={{ top: NAVBAR.top }}
    >
      <div
        className={`flex items-center justify-between ${scrolled ? "nav-pill-scrolled" : ""}`}
        style={{
          ...pillStyle,
          width: NAVBAR.widthMobile,
          ["@media (min-width: 640px)" as string]: {
            width: NAVBAR.widthTablet,
            height: NAVBAR.heightTablet,
          },
          ["@media (min-width: 1024px)" as string]: {
            width: NAVBAR.widthDesktop,
            height: NAVBAR.heightDesktop,
          },
        }}
      >
        <a
          href="#top"
          onClick={(e) => go(e, "top")}
          className="flex shrink-0 items-center whitespace-nowrap font-mono focus-visible:ring-2 focus-visible:ring-lime focus-visible:outline-none"
          style={{
            width: NAVBAR.logoAreaWidth,
            fontSize: NAVBAR.logoFontSize,
            fontWeight: NAVBAR.logoFontWeight,
            lineHeight: NAVBAR.heightDesktop,
          }}
          aria-label="Back to top"
        >
          <span style={{ color: NAVBAR.logoColorNameCss }}>Ahmed Khaled</span>
        </a>

        <nav
          className="hidden flex-1 items-center justify-center lg:flex"
          aria-label="Primary"
          style={{ gap: NAVBAR.navGap }}
        >
          {nav.map((n) => {
            const isActive = active === n.id;
            return (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={(e) => go(e, n.id)}
                aria-current={isActive ? "true" : undefined}
                className="relative whitespace-nowrap font-mono uppercase transition-colors focus-visible:ring-2 focus-visible:ring-lime focus-visible:outline-none"
                style={{
                  fontSize: NAVBAR.navFontSize,
                  fontWeight: NAVBAR.navFontWeight,
                  letterSpacing: NAVBAR.navLetterSpacing,
                  color: isActive ? NAVBAR.navColorActiveCss : NAVBAR.navColorCss,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = NAVBAR.navColorHoverCss;
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = NAVBAR.navColorCss;
                }}
              >
                {n.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-x-0 -bottom-1 h-px bg-lime"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center" style={{ gap: NAVBAR.rightGap }}>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="grid place-items-center rounded-full transition-[transform,color,background-color,border-color] duration-300 ease-out hover:scale-105 focus-visible:ring-2 focus-visible:ring-lime focus-visible:outline-none"
            style={{
              width: NAVBAR.toggleSize,
              height: NAVBAR.toggleSize,
              background: NAVBAR.toggleBackgroundCss,
              border: `${NAVBAR.borderWidth} solid ${NAVBAR.toggleBorderColorCss}`,
            }}
          >
{isDark ? (
              <Sun
                style={{ width: NAVBAR.toggleIconSize, height: NAVBAR.toggleIconSize, color: NAVBAR.iconColorCss }}
                className="hover:text-lime"
              />
            ) : (
              <Moon
                style={{ width: NAVBAR.toggleIconSize, height: NAVBAR.toggleIconSize, color: NAVBAR.iconColorCss }}
                className="hover:text-lime"
              />
            )}
          </button>
          <a
            href="#contact"
            onClick={(e) => go(e, "contact")}
            className="hidden items-center rounded-full border border-lime font-mono uppercase transition-all hover:bg-transparent hover:text-lime focus-visible:ring-2 focus-visible:ring-lime focus-visible:outline-none sm:flex"
            style={{
              height: NAVBAR.buttonHeight,
              paddingInline: NAVBAR.buttonHorizontalPadding,
              fontSize: NAVBAR.buttonFontSize,
              fontWeight: NAVBAR.buttonFontWeight,
              background: "var(--lime)",
              color: "var(--primary-foreground)",
            }}
          >
            Hire me
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid shrink-0 place-items-center rounded-full transition-[transform,background-color,border-color] duration-300 ease-out hover:scale-105 focus-visible:ring-2 focus-visible:ring-lime focus-visible:outline-none lg:hidden"
            style={{
              width: NAVBAR.hamburgerSize,
              height: NAVBAR.hamburgerSize,
              background: NAVBAR.hamburgerBackgroundCss,
              border: `${NAVBAR.borderWidth} solid ${NAVBAR.hamburgerBorderColorCss}`,
            }}
          >
{open ? (
              <X
                style={{ width: NAVBAR.hamburgerIconSize, height: NAVBAR.hamburgerIconSize, color: NAVBAR.iconColorCss }}
              />
            ) : (
              <Menu
                style={{ width: NAVBAR.hamburgerIconSize, height: NAVBAR.hamburgerIconSize, color: NAVBAR.iconColorCss }}
              />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile"
            className="nav-dropdown mt-3 rounded-3xl lg:hidden"
            style={{
              width: NAVBAR.widthMobile,
              maxWidth: NAVBAR.maxWidth,
            }}
          >
            <div className="grid gap-1 px-2 py-3">
              {nav.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={(e) => go(e, n.id)}
                  aria-current={active === n.id ? "true" : undefined}
className="nav-mobile-link flex items-baseline gap-3 rounded-xl px-3 py-3 font-mono text-xs tracking-[0.2em] uppercase"
                >
                  <span className="text-lime opacity-70">{n.index}</span>
                  {n.label}
                </a>
              ))}
            </div>
            <div className="px-2 pb-3">
              <a
                href={`mailto:${profile.email}`}
                className="block rounded-full bg-lime px-4 py-3 text-center font-mono text-[0.7rem] tracking-[0.2em] text-primary-foreground uppercase transition-transform hover:scale-[1.02]"
              >
                {profile.email}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
