import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen, Marquee, MouseGlow, SmoothScroll } from "@/components/fx";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Stack } from "@/components/sections/stack";
import { Timeline } from "@/components/sections/timeline";
import { Projects } from "@/components/sections/projects";
import { Awards } from "@/components/sections/awards";
import { Work } from "@/components/sections/work";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { marquee } from "@/data/site";
import { siteConfig } from "@/config";

const title = `${siteConfig.name} — ${siteConfig.role}`;
const description =
  "AI Engineer and Full Stack Developer in Cairo, Egypt. Computer Science at Arab Open University — AI products, full stack apps, UI/UX and digital marketing.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ahmed Khaled Hussain",
          jobTitle: "AI Engineer & Full Stack Developer",
          address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
          description,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <LoadingScreen />
      <SmoothScroll />
      <MouseGlow />
      <a
        href="#about"
        className="sr-only rounded-sm bg-lime px-4 py-2 font-mono text-xs text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80]"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee items={marquee} />
        <About />
        <Services />
        <Stack />
        <Timeline />
        <Projects />
        <Awards />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
