import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Section, SectionHeader } from "@/components/primitives";
import { certifications, certificates } from "@/data/site";

const PLACEHOLDER = "/certificates/placeholder.webp";

type Certificate = (typeof certificates)[number];

/** Cache of preloaded image URLs so re-opening the viewer never reloads. */
const preloadCache = new Set<string>();

function preload(url: string) {
  if (!url || preloadCache.has(url)) return;
  preloadCache.add(url);
  const img = new Image();
  img.src = url;
}

function CertificateCard({
  cert,
  onOpen,
}: {
  cert: Certificate;
  onOpen: (cert: Certificate) => void;
}) {
  const [src, setSrc] = useState<string>(cert.image);

  const handleError = () => {
    if (src !== PLACEHOLDER) setSrc(PLACEHOLDER);
  };

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label={`View ${cert.title}`}
      title={cert.title}
      onClick={() => onOpen(cert)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(cert);
        }
      }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative block aspect-[4/3] w-[280px] shrink-0 cursor-pointer select-none overflow-hidden rounded-[16px] border border-hairline bg-surface transition-[border-color,box-shadow] duration-300 will-change-transform hover:border-lime/60 hover:shadow-[0_0_0_1px_rgba(132,204,22,0.35),0_0_42px_-8px_rgba(132,204,22,0.55)]"
    >
      <img
        src={src}
        alt={cert.title}
        loading="lazy"
        decoding="async"
        draggable={false}
        onError={handleError}
        onContextMenu={(e) => e.preventDefault()}
        className="pointer-events-none h-full w-full object-cover"
      />

      {/* Glassmorphism action bar — slides up on hover */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        animate={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between rounded-b-[16px] border-t border-white/10 bg-black/50 px-4 py-2.5 backdrop-blur-md"
      >
        <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-lime">
          View
        </span>
        <ArrowUpRight className="size-4 text-lime" />
      </motion.div>
    </motion.div>
  );
}

function CertificateLightbox({
  index,
  onClose,
  onNavigate,
}: {
  index: number;
  onClose: () => void;
  onNavigate: (dir: 1 | -1) => void;
}) {
  const touchStartX = useRef<number | null>(null);
  // `index` is guaranteed to be a valid array index while the lightbox is open.
  const cert = certificates[index]!;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate(1);
      if (e.key === "ArrowLeft") onNavigate(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onNavigate]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label={cert.title}
      onClick={onClose}
      onTouchStart={(e) => {
        const t = e.touches[0];
        if (t) touchStartX.current = t.clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const t = e.changedTouches[0];
        if (!t) return;
        const dx = t.clientX - touchStartX.current;
        if (Math.abs(dx) > 40) onNavigate(dx < 0 ? 1 : -1);
        touchStartX.current = null;
      }}
    >
      {/* Dark blurred backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />

      {/* Close button */}
      <button
        aria-label="Close viewer"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute right-4 top-4 z-20 flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur-md transition-colors hover:border-lime/50 hover:text-lime"
      >
        <X className="size-5" />
      </button>

      {/* Prev / Next desktop buttons */}
      <button
        aria-label="Previous certificate"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(-1);
        }}
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 p-3 text-white/80 backdrop-blur-md transition-colors hover:border-lime/50 hover:text-lime sm:flex"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        aria-label="Next certificate"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(1);
        }}
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 p-3 text-white/80 backdrop-blur-md transition-colors hover:border-lime/50 hover:text-lime sm:flex"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Certificate content */}
      <motion.div
        key={cert.id}
        className="relative z-10 w-full max-w-[900px] sm:max-w-[1000px]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden rounded-2xl border border-hairline shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
          <img
            src={cert.image}
            alt={cert.title}
            loading="eager"
            decoding="async"
            draggable={false}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = PLACEHOLDER;
            }}
            className="h-auto max-h-[70vh] w-full object-contain"
          />
        </div>

        <div className="mt-5 flex flex-col items-center gap-1 text-center">
          <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            {cert.title}
          </h3>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-lime">{cert.org}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Awards() {
  const [active, setActive] = useState<number | null>(null);

  const open = useCallback((cert: Certificate) => {
    const idx = certificates.findIndex((c) => c.id === cert.id);
    setActive(idx);
    // Preload neighbors for smooth navigation.
    const next = certificates[(idx + 1) % certificates.length];
    const prev = certificates[(idx - 1 + certificates.length) % certificates.length];
    if (next) preload(next.image);
    if (prev) preload(prev.image);
  }, []);

  const close = useCallback(() => setActive(null), []);

  const navigate = useCallback((dir: 1 | -1) => {
    setActive((prev) => {
      if (prev === null) return prev;
      return (prev + dir + certificates.length) % certificates.length;
    });
  }, []);

  // Lock body scroll while the lightbox is open.
  useEffect(() => {
    if (active === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <Section id="awards">
      <SectionHeader index="06" kicker="Awards & proof" title={"Stamped &\ncertified"} />

      <div className="mt-12">
        <p className="label-mono">Certificates — hover to pause</p>
        <div className="group marquee-edge-fade relative mt-4 overflow-hidden border-y border-hairline py-5">
          <div
            className="marquee-track flex w-max gap-4 group-hover:[animation-play-state:paused]"
            style={{ "--marquee-duration": "28s" } as React.CSSProperties}
          >
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0 gap-4" aria-hidden={k === 1}>
                {certificates.map((c) => (
                  <CertificateCard key={`${k}-${c.id}`} cert={c} onOpen={open} />
                ))}
              </div>
            ))}
          </div>

          {/* Fallback edge fades for browsers without CSS mask support */}
          <div className="marquee-fade-overlay marquee-fade-overlay-left" aria-hidden="true" />
          <div className="marquee-fade-overlay marquee-fade-overlay-right" aria-hidden="true" />
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <CertificateLightbox index={active} onClose={close} onNavigate={navigate} />
        )}
      </AnimatePresence>
    </Section>
  );
}
