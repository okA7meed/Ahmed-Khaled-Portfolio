import { useEffect } from "react";

/** Discourage direct image saving without breaking links, galleries or scrolling.
 * Displayed images remain retrievable through browser tools or screenshots.
 */
export function useImageProtection() {
  useEffect(() => {
    const guardImageAction = (event: Event) => {
      if (!(event.target instanceof Element)) return;
      if (event.target.closest("img, picture, [data-protected-image]")) event.preventDefault();
    };
    // Document capture also covers image previews added later, including portals.
    document.addEventListener("contextmenu", guardImageAction, true);
    document.addEventListener("dragstart", guardImageAction, true);
    return () => {
      document.removeEventListener("contextmenu", guardImageAction, true);
      document.removeEventListener("dragstart", guardImageAction, true);
    };
  }, []);
}
