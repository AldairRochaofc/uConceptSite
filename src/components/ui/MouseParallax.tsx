"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export function MouseParallax() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const layers = document.querySelectorAll("[data-parallax]");
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      layers.forEach((el, i) => {
        const depth = (i + 1) * 8;
        gsap.to(el, { x: x * depth, y: y * depth, duration: 0.8, ease: "power2.out" });
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return null;
}
