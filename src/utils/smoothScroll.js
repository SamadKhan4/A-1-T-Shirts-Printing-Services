import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export function smoothScrollTo(event, target, onComplete) {
  event?.preventDefault();

  gsap.to(window, {
    duration: 1.05,
    ease: "power3.inOut",
    scrollTo: {
      y: target,
      offsetY: 72,
      autoKill: true,
    },
    onComplete,
  });
}
