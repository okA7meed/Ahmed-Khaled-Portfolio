import { type FormEvent, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Reveal, Section, SectionHeader } from "@/components/primitives";
import { profile } from "@/data/site";
import { siteConfig } from "@/config";
import { buildWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

const channels = [
  { label: "EMAIL", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  {
    label: "WHATSAPP / PHONE",
    value: profile.phone,
    href: `https://wa.me/2${profile.phone}`,
    Icon: Phone,
  },
  { label: "GITHUB", value: profile.github.handle, href: profile.github.url, Icon: Github },
  { label: "LINKEDIN", value: profile.linkedin.handle, href: profile.linkedin.url, Icon: Linkedin },
  {
    label: "INSTAGRAM",
    value: profile.instagram.handle,
    href: profile.instagram.url,
    Icon: Instagram,
  },
  { label: "FACEBOOK", value: profile.facebook.handle, href: profile.facebook.url, Icon: Facebook },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    // Validate all fields are filled before opening WhatsApp.
    if (!name || !email || !message) return;

    const text = buildWhatsAppMessage({ name, email, message });
    const url = buildWhatsAppUrl(text);

    window.open(url, "_blank", "noopener,noreferrer");

    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  const isSuccess = status === "success";

  const field =
    "w-full border border-hairline bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-lime";
  const fieldStyle = { borderRadius: siteConfig.button.radius };

  return (
    <Section id="contact">
      <SectionHeader index="08" kicker="Final CTA" title={"Let's build\nsomething"} />
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            Need someone who can design it, build it and make it grow? That&apos;s the whole point
            of me. Reach out — I answer fast.
          </p>
          <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 py-4 transition-colors hover:text-lime"
                >
                  <Icon className="size-4 text-lime" />
                  <span className="flex-1">
                    <span className="block font-mono text-[0.6rem] tracking-[0.22em] text-muted-foreground">
                      {label}
                    </span>
                    <span className="text-sm">{value}</span>
                  </span>
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="card-surface space-y-4 p-6 md:p-8">
            <div>
              <label htmlFor="name" className="label-mono">
                Your name
              </label>
              <input
                id="name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={`${field} mt-2`}
                style={fieldStyle}
                placeholder="Ahmed…"
              />
            </div>
            <div>
              <label htmlFor="email" className="label-mono">
                Your email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`${field} mt-2`}
                style={fieldStyle}
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="label-mono">
                Tell me about the project…
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${field} mt-2 resize-none`}
                style={fieldStyle}
                placeholder="What are we building?"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 bg-lime font-mono text-primary-foreground uppercase transition-transform hover:-translate-y-0.5"
              style={{
                borderRadius: siteConfig.button.radius,
                paddingLeft: siteConfig.button.paddingX,
                paddingRight: siteConfig.button.paddingX,
                paddingTop: siteConfig.button.paddingY,
                paddingBottom: siteConfig.button.paddingY,
                fontSize: siteConfig.button.fontSize,
                fontWeight: siteConfig.button.fontWeight,
                letterSpacing: siteConfig.button.letterSpacing,
              }}
            >
              <>
                Send message
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </>
            </button>
            {isSuccess ? (
              <p className="flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.15em] text-lime">
                <CheckCircle2 className="size-3.5 shrink-0" />
                WhatsApp opened — just press Send to deliver your message.
              </p>
            ) : (
              <p className="font-mono text-[0.6rem] tracking-[0.15em] text-muted-foreground">
                Delivered straight to my WhatsApp — no data stored anywhere.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
