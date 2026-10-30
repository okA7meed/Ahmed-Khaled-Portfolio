import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Stack } from "@/components/sections/stack";
import { Timeline } from "@/components/sections/timeline";
import { PortfolioFolders } from "@/components/sections/portfolio-folders";
import { Awards } from "@/components/sections/awards";
import { Work } from "@/components/sections/work";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { profile } from "@/data/site";
import { LanguageProvider, useLanguage } from "@/i18n/language";
import { useEntrance } from "@/lib/entrance";
import { useImageProtection } from "@/hooks/use-image-protection";

const title = "Ahmed Khaled Hussain — AI Engineer | Full Stack Developer";
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
      {
  property: "og:image",
  content: "https://ahmed-khaled-portfolio-ten.vercel.app/images/og-preview.png",
},
{
  name: "twitter:image",
  content: "https://ahmed-khaled-portfolio-ten.vercel.app/images/og-preview.png",
},
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          email: profile.email,
          address: { "@type": "PostalAddress", addressLocality: "Cairo", addressCountry: "EG" },
          description,
          sameAs: [
            profile.github.url,
            profile.linkedin.url,
            profile.instagram.url,
            profile.facebook.url,
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  );
}

function Portfolio() {
  const { language } = useLanguage();
  const entranceRef = useEntrance();
  useImageProtection();
  return (
    <div className="portfolio" data-language={language} ref={entranceRef}>
      <a className="skip-link" href="#main">
        {language === "ar" ? "تخطي إلى المحتوى" : "Skip to content"}
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <PortfolioFolders language={language} />
        <About />
        <Services />
        <Stack />
        <Timeline />
        <Awards />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
