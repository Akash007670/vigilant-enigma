import Lenis from "lenis";

let lenis: Lenis | null = null;
let rafId = 0;

export function initLenis(): Lenis | null {
  if (lenis) return lenis;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    return null;
  lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
  const raf = (time: number) => {
    lenis?.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);
  return lenis;
}

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { offset: -72, duration: 1.4 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export function setScrollLocked(locked: boolean) {
  if (locked) {
    lenis?.stop();
    document.body.style.overflow = "hidden";
  } else {
    lenis?.start();
    document.body.style.overflow = "";
  }
}

export function destroyLenis() {
  cancelAnimationFrame(rafId);
  lenis?.destroy();
  lenis = null;
}
