import { type FormEvent, useState } from "react";
import {
  ArrowUpLeft,
  CheckCircle2,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Reveal, Section, SectionHeading } from "@/components/sections/section-ui";
import { profile } from "@/data/site";
import { buildWhatsAppMessage, buildWhatsAppUrl } from "@/lib/whatsapp";
import { useLanguage } from "@/i18n/language";

type FormState = { name: string; email: string; message: string };

export function Contact() {
  const { language, t } = useLanguage();
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const channels = [
    {
      label: t.contact.channels.email,
      value: profile.email,
      href: `mailto:${profile.email}`,
      Icon: Mail,
    },
    {
      label: t.contact.channels.phone,
      value: profile.phone,
      href: `https://wa.me/2${profile.whatsapp}`,
      Icon: Phone,
    },
    {
      label: t.contact.channels.github,
      value: profile.github.handle,
      href: profile.github.url,
      Icon: Github,
    },
    {
      label: t.contact.channels.linkedin,
      value: profile.linkedin.handle,
      href: profile.linkedin.url,
      Icon: Linkedin,
    },
    {
      label: t.contact.channels.instagram,
      value: profile.instagram.handle,
      href: profile.instagram.url,
      Icon: Instagram,
    },
    {
      label: t.contact.channels.facebook,
      value: profile.facebook.handle,
      href: profile.facebook.url,
      Icon: Facebook,
    },
  ];

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    if (!name || !email || !message) return;
    const url = buildWhatsAppUrl(buildWhatsAppMessage({ name, email, message }));
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const update = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    if (sent) setSent(false);
  };
  return (
    <Section id="contact" tone="light" className="contact-section">
      <SectionHeading
        index="08"
        kicker={t.contact.kicker}
        title={t.contact.title}
        description={t.contact.intro}
      />
      <div className="contact__layout">
        <Reveal className="contact__details">
          <p className="contact__hello">
            {language === "ar"
              ? "يسعدني دائمًا التعرف على أفكار جديدة وفرص مناسبة."
              : "Always glad to hear about thoughtful ideas and good opportunities."}
          </p>
          <ul className="contact__channels">
            {channels.map(({ label, value, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                >
                  <Icon size={17} aria-hidden="true" />
                  <span>
                    <small>{label}</small>
                    <strong
                      dir={
                        label === t.contact.channels.email || label === t.contact.channels.phone
                          ? "ltr"
                          : undefined
                      }
                    >
                      {value}
                    </strong>
                  </span>
                  <ArrowUpLeft size={15} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="contact-form-wrap" delay={0.08}>
          <form
            className="contact-form"
            onSubmit={onSubmit}
            dir={language === "ar" ? "rtl" : "ltr"}
          >
            <label htmlFor="contact-name">
              {t.contact.name}
              <input
                id="contact-name"
                name="name"
                required
                autoComplete="name"
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                placeholder={t.contact.namePlaceholder}
              />
            </label>
            <label htmlFor="contact-email">
              {t.contact.email}
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                dir="ltr"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                placeholder={t.contact.emailPlaceholder}
              />
            </label>
            <label htmlFor="contact-message">
              {t.contact.message}
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={(event) => update("message", event.target.value)}
                placeholder={t.contact.messagePlaceholder}
              />
            </label>
            <button className="button button--ink contact-form__submit" type="submit">
              {t.contact.submit}
              <ArrowUpLeft size={16} aria-hidden="true" />
            </button>
            {sent ? (
              <p className="contact-form__status" role="status">
                <CheckCircle2 size={16} aria-hidden="true" />
                {t.contact.success}
              </p>
            ) : (
              <p className="contact-form__note">{t.contact.note}</p>
            )}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
