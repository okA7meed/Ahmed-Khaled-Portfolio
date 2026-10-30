import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ANIMATIONS } from "@/config";

export function MouseGlow() {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const onMove = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[60] transition-opacity duration-500"
      style={{
        background: `radial-gradient(340px circle at ${pos.x}px ${pos.y}px, color-mix(in oklab, var(--lime) 9%, transparent), transparent 70%)`,
      }}
    />
  );
}

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPct(100);
      setDone(true);
      return;
    }
    document.body.style.overflow = "hidden";
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(100, ((t - start) / ANIMATIONS.loadingTotal) * 100);
      setPct(Math.round(p));
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 320);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = "";
  }, [done]);

  return (
    <motion.div
      aria-hidden
      initial={{ opacity: 1 }}
      animate={{
        opacity: done ? 0 : 1,
        y: done ? "-100%" : 0,
        pointerEvents: done ? "none" : "auto",
      }}
      transition={{ duration: ANIMATIONS.loadingDuration, ease: ANIMATIONS.loadingEase }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background px-6"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="display-xl text-center text-[clamp(2rem,8.5vw,7rem)]"
      >
        Ahmed Khaled
      </motion.h1>

      <div className="mt-5 h-[3px] w-40 overflow-hidden bg-hairline/60 md:w-56">
        <div
          className="h-full bg-lime transition-[width] duration-150 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="mt-5 text-center font-mono text-[0.62rem] tracking-[0.42em] text-muted-foreground uppercase md:text-[0.7rem]"
      >
        AI Engineer × Full Stack Developer
      </motion.p>

      <div className="absolute bottom-8 font-mono text-[0.65rem] tracking-[0.3em] text-lime">
        {String(pct).padStart(3, "0")}%
      </div>
    </motion.div>
  );
}

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let raf = 0;
    let cancelled = false;

    import("lenis").then(({ default: Lenis }) => {
      if (cancelled) return;
      const instance = new Lenis({ lerp: 0.09, wheelMultiplier: 1 });
      lenis = instance;
      (window as unknown as { __lenis?: unknown }).__lenis = instance;
      const loop = (t: number) => {
        instance.raf(t);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      lenis?.destroy();
    };
  }, []);
  return null;
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-hairline bg-surface/40 py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {[0, 1].map((k) => (
          <div key={k} className="flex gap-10">
            {row.map((item, i) => (
              <span
                key={`${k}-${i}`}
                className="flex items-center gap-10 font-mono text-xs tracking-[0.3em] text-muted-foreground"
              >
                {item}
                <span className="text-lime">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
