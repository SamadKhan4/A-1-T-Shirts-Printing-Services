import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const nativeScrollSelector = "input, textarea, select, [data-native-scroll]";

function shouldUseNativeScroll(event) {
  return event.ctrlKey || event.metaKey || event.target.closest(nativeScrollSelector);
}

function getMaxScroll() {
  return document.documentElement.scrollHeight - window.innerHeight;
}

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return undefined;

    let targetY = window.scrollY;
    let touchY = 0;

    const scrollToTarget = () => {
      gsap.to(window, {
        duration: 0.75,
        ease: "power3.out",
        overwrite: "auto",
        scrollTo: {
          y: targetY,
          autoKill: false,
        },
      });
    };

    const updateTarget = (delta) => {
      targetY = Math.max(0, Math.min(getMaxScroll(), targetY + delta));
      scrollToTarget();
    };

    const handleWheel = (event) => {
      if (shouldUseNativeScroll(event)) return;

      event.preventDefault();
      updateTarget(event.deltaY);
    };

    const handleTouchStart = (event) => {
      touchY = event.touches[0].clientY;
      targetY = window.scrollY;
    };

    const handleTouchMove = (event) => {
      if (shouldUseNativeScroll(event)) return;

      const currentY = event.touches[0].clientY;
      const delta = touchY - currentY;
      touchY = currentY;
      event.preventDefault();
      updateTarget(delta * 1.35);
    };

    const syncTarget = () => {
      targetY = window.scrollY;
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("resize", syncTarget);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", syncTarget);
      gsap.killTweensOf(window);
    };
  }, []);

  return null;
}
