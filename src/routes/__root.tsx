import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  HeadContent,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { siteConfig } from "@/config";
import { ThemeProvider } from "@/hooks/use-theme";
import { initThemeScript } from "@/lib/theme";

function NotFoundComponent() {
  return (
    <main className="error-page" dir="rtl" lang="ar">
      <p className="error-page__eyebrow">404</p>
      <h1>الصفحة غير موجودة</h1>
      <p>الرابط الذي فتحته غير متاح أو تم نقله.</p>
      <Link to="/">العودة إلى الصفحة الرئيسية</Link>
    </main>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <main className="error-page" dir="rtl" lang="ar">
      <p className="error-page__eyebrow">تعذر التحميل</p>
      <h1>حدث خطأ في الصفحة</h1>
      <p>يمكنك تحديث الصفحة أو العودة إلى الصفحة الرئيسية.</p>
      <div className="error-page__actions">
        <button
          type="button"
          onClick={() => {
            router.invalidate();
            reset();
          }}
        >
          حاول مرة أخرى
        </button>
        <Link to="/">الصفحة الرئيسية</Link>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${siteConfig.name} — ${siteConfig.role}` },
      {
        name: "description",
        content: "Ahmed Khaled Hussain — AI Engineer and Full Stack Developer in Cairo, Egypt.",
      },
      { name: "author", content: siteConfig.name },
      { property: "og:title", content: `${siteConfig.name} — ${siteConfig.role}` },
      {
        property: "og:description",
        content: "AI Engineer and Full Stack Developer in Cairo, Egypt.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preload",
        href: "/fonts/thmanyah/thmanyah-400.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        href: "/fonts/thmanyah/thmanyah-700.woff2",
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "apple-touch-icon", type: "image/png", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" data-theme="dark" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initThemeScript() }} />
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(()=>{const h=document.documentElement;h.dataset.entranceBoot="pending";setTimeout(()=>{if(h.dataset.entranceBoot==="pending")h.dataset.entranceBoot="expired"},2000)})()',
          }}
        />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
