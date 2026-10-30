import type { ReactNode } from "react";

export function Section({
  id,
  tone = "light",
  children,
  className = "",
}: {
  id: string;
  tone?: "light" | "dark" | "brown";
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`section section--${tone} ${className}`}>
      <div className="section__inner">{children}</div>
    </section>
  );
}

export function SectionHeading({
  index,
  kicker,
  title,
  description,
}: {
  index: string;
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="section-heading" data-entrance-group>
      <span
        className="section-heading__index"
        aria-hidden="true"
        data-entrance
        data-entrance-distance="10"
      >
        {index}
      </span>
      <div className="section-heading__copy">
        <p className="section-heading__kicker" data-entrance data-entrance-distance="10">
          {kicker}
        </p>
        <h2 className="section-heading__title" data-entrance data-entrance-delay="0.07">
          {title}
        </h2>
        {description ? (
          <p className="section-heading__description" data-entrance data-entrance-delay="0.14">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={className} data-entrance data-entrance-delay={delay}>
      {children}
    </div>
  );
}

/** Keep one continuous accessible sentence; animate only its visual words. */
export function RevealWords({ text }: { text: string }) {
  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" data-entrance-group key={text}>
        {text.split(/(\s+)/).map((word, index) =>
          /^\s+$/.test(word) ? (
            word
          ) : (
            <span
              className="entrance-word"
              key={index}
              data-entrance
              data-entrance-delay={Math.min(Math.floor(index / 2) * 0.15, 2.4)}
              data-entrance-duration="0.55"
              data-entrance-distance="10"
            >
              {word}
            </span>
          ),
        )}
      </span>
    </>
  );
}
