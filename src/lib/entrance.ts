import { useLayoutEffect, useRef } from "react";

const selector = "[data-entrance]";

/** Progressive enhancement: server-rendered content stays visible without JS/IO. */
export function observeEntrances(root: HTMLElement) {
  if (!("IntersectionObserver" in window) || !window.matchMedia) {
    document.documentElement.dataset["entranceBoot"] = "ready";
    return () => {};
  }

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const compact = window.matchMedia("(max-width: 840px)");
  const groups = new Map<HTMLElement, Set<HTMLElement>>();
  const owners = new Map<HTMLElement, HTMLElement>();
  const timers = new Map<HTMLElement, ReturnType<typeof setTimeout>>();
  const seen = new WeakSet<HTMLElement>();
  const bootExpired = document.documentElement.dataset["entranceBoot"] === "expired";
  let initialCollection = true;

  const finish = (target: HTMLElement) => {
    clearTimeout(timers.get(target));
    timers.delete(target);
    target.dataset["entranceState"] = "done";
  };
  const finishGroup = (group: HTMLElement) => {
    groups.get(group)?.forEach(finish);
    observer.unobserve(group);
  };
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const group = entry.target as HTMLElement;
        for (const target of groups.get(group) ?? []) {
          if (target.dataset["entranceState"] !== "waiting") continue;
          target.dataset["entranceState"] = "entering";
          // Also release the animation if its end event is lost (background tab, CSS reload).
          const seconds = Number(target.dataset["entranceDuration"] ?? 0.7);
          const delay = Number(target.style.getPropertyValue("--entrance-delay").replace("s", ""));
          timers.set(
            target,
            setTimeout(() => finish(target), (seconds + delay) * 1000 + 100),
          );
        }
        observer.unobserve(group);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -4% 0px" },
  );

  const collect = () => {
    // Discard detached tab/panel items so they cannot retain timers or observers.
    for (const [target, group] of owners) {
      if (root.contains(target)) continue;
      clearTimeout(timers.get(target));
      timers.delete(target);
      owners.delete(target);
      const members = groups.get(group);
      members?.delete(target);
      if (!members?.size) {
        observer.unobserve(group);
        groups.delete(group);
      }
    }
    for (const target of root.querySelectorAll<HTMLElement>(selector)) {
      if (seen.has(target)) continue;
      seen.add(target);
      if (
        reduced.matches ||
        document.visibilityState === "hidden" ||
        (bootExpired && initialCollection)
      ) {
        finish(target);
        continue;
      }
      const ownerName = target.dataset["entranceOwner"];
      const explicitOwner = ownerName
        ? [...root.querySelectorAll<HTMLElement>("[data-entrance-group]")].find(
            (node) => node.dataset["entranceGroup"] === ownerName,
          )
        : undefined;
      const group =
        (compact.matches ? target.closest<HTMLElement>("[data-entrance-mobile-group]") : null) ??
        explicitOwner ??
        target.closest<HTMLElement>("[data-entrance-group]") ??
        target;
      const delay = Number(target.dataset["entranceDelay"] ?? 0);
      const independentCard = compact.matches && target.hasAttribute("data-entrance-mobile-group");
      target.style.setProperty(
        "--entrance-delay",
        `${independentCard ? Math.min(delay, 0.12) : delay}s`,
      );
      target.style.setProperty(
        "--entrance-duration",
        `${target.dataset["entranceDuration"] ?? 0.7}s`,
      );
      target.style.setProperty(
        "--entrance-distance",
        `${target.dataset["entranceDistance"] ?? 22}px`,
      );
      target.dataset["entranceState"] = "waiting";
      owners.set(target, group);
      if (!groups.has(group)) groups.set(group, new Set());
      groups.get(group)?.add(target);
      observer.observe(group);
    }
  };

  const revealInteraction = (node: EventTarget | null) => {
    if (!(node instanceof Element)) return;
    for (const [target, group] of owners) {
      if (target.contains(node) && target.dataset["entranceState"] !== "done") finishGroup(group);
    }
  };
  const interact = (event: Event) => revealInteraction(event.target);
  const end = (event: AnimationEvent) => {
    if (
      ["portfolio-enter", "portfolio-signature"].includes(event.animationName) &&
      event.target instanceof HTMLElement
    )
      finish(event.target);
  };
  const showAll = () => {
    if (!reduced.matches && document.visibilityState !== "hidden") return;
    owners.forEach((group, target) => {
      finish(target);
      observer.unobserve(group);
    });
  };
  const regroup = () => {
    for (const [target, group] of owners) {
      if (target.dataset["entranceState"] !== "waiting") continue;
      observer.unobserve(group);
      groups.get(group)?.delete(target);
      owners.delete(target);
      seen.delete(target);
    }
    collect();
  };
  collect();
  initialCollection = false;
  document.documentElement.dataset["entranceBoot"] = "ready";
  if (root.contains(document.activeElement)) revealInteraction(document.activeElement);
  const mutations = new MutationObserver(collect);
  mutations.observe(root, { childList: true, subtree: true });
  root.addEventListener("focusin", interact);
  root.addEventListener("pointerdown", interact, true);
  root.addEventListener("animationend", end);
  reduced.addEventListener("change", showAll);
  compact.addEventListener("change", regroup);
  document.addEventListener("visibilitychange", showAll);

  return () => {
    mutations.disconnect();
    observer.disconnect();
    timers.forEach(clearTimeout);
    owners.forEach((_group, target) => finish(target));
    root.removeEventListener("focusin", interact);
    root.removeEventListener("pointerdown", interact, true);
    root.removeEventListener("animationend", end);
    reduced.removeEventListener("change", showAll);
    compact.removeEventListener("change", regroup);
    document.removeEventListener("visibilitychange", showAll);
  };
}

export function useEntrance() {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (root.current) return observeEntrances(root.current);
    return undefined;
  }, []);
  return root;
}
