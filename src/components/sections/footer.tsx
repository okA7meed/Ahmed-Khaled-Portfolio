import { ArrowUp, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/site";
import { SPACING } from "@/config";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-hairline">
      <div
        className="mx-auto"
        style={{
          maxWidth: SPACING.containerWidth,
          paddingLeft: SPACING.containerPX,
          paddingRight: SPACING.containerPX,
          paddingTop: SPACING.footerPaddingY,
          paddingBottom: SPACING.footerPaddingY,
          ["@media (min-width: 768px)" as string]: {
            paddingLeft: SPACING.containerPXDesktop,
            paddingRight: SPACING.containerPXDesktop,
            paddingTop: SPACING.footerPaddingYDesktop,
            paddingBottom: SPACING.footerPaddingYDesktop,
          },
        }}
      >
        <p className="label-mono">Talk</p>
        <a
          href="#contact"
          className="display-xl mt-3 block text-[clamp(2rem,8vw,6rem)] transition-colors hover:text-lime"
        >
          Got a project in mind? Let&apos;s make it grow ↗
        </a>

        <div className="mt-16 grid gap-8 border-t border-hairline pt-10 sm:grid-cols-3">
          <div>
            <p className="label-mono">Contact</p>
            <a href={`mailto:${profile.email}`} className="mt-3 block text-sm hover:text-lime">
              {profile.email}
            </a>
            <a href={`tel:${profile.phone}`} className="mt-1 block text-sm hover:text-lime">
              {profile.phone}
            </a>
          </div>
          <div>
            <p className="label-mono">Social</p>
            <div className="mt-3 space-y-1">
              {[
                ["GitHub", profile.github.url],
                ["LinkedIn", profile.linkedin.url],
                ["Instagram", profile.instagram.url],
                ["Facebook", profile.facebook.url],
              ].map(([label, url]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-sm hover:text-lime"
                >
                  {label} <ArrowUpRight className="size-3" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="label-mono">Status</p>
            <p className="mt-3 flex items-center gap-2 text-sm">
              <span className="pulse-dot size-2 rounded-full bg-lime" /> Open to work & freelance
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{profile.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-8">
          <p className="font-mono text-[0.62rem] tracking-[0.18em] text-muted-foreground">
            © 2026 {profile.name} — designed &amp; built with code, no template
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 font-mono text-[0.62rem] tracking-[0.2em] uppercase hover:text-lime"
          >
            Back to top <ArrowUp className="size-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
