import { initThemeScript } from "@/lib/theme";

export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en" data-theme="dark" class="dark">
  <head>
    <meta charset="utf-8" />
    <script>${initThemeScript()}</script>
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      @font-face { font-family: "Thmanyah"; src: url("/fonts/thmanyah/thmanyah-400.woff2") format("woff2"); font-weight: 400; font-display: swap; }
      @font-face { font-family: "Thmanyah"; src: url("/fonts/thmanyah/thmanyah-700.woff2") format("woff2"); font-weight: 700; font-display: swap; }
      body { font: 15px/1.5 "Thmanyah"; font-feature-settings: "ss01" 1; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
      html { color-scheme: dark; }
      body { background: #080a0d; color: #f6f7f8; }
      p { color: #b6bec8; }
      .primary { background: #f6f7f8; color: #152736; }
      .secondary { background: #18232d; color: #edf2f6; border-color: #617789; }
      html[data-theme="light"] { color-scheme: light; }
      html[data-theme="light"] body { background: #f7f8fa; color: #203e54; }
      html[data-theme="light"] p { color: #526575; }
      html[data-theme="light"] .primary { background: #203e54; color: #fff; }
      html[data-theme="light"] .secondary { background: #fff; color: #203e54; border-color: #8198aa; }
      :focus-visible { outline: 2px solid #718fa4; outline-offset: 4px; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
