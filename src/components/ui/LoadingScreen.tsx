"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function LoadingScreen() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const overlay = overlayRef.current;
    const progress = progressRef.current;
    const text = textRef.current;
    if (!overlay || !progress || !text) return;

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: () => setDone(true),
        });
      },
    });

    tl.to(progress, { width: "100%", duration: 1.6, ease: "power2.inOut" })
      .to(text, { opacity: 1, duration: 0.4 }, 0.2)
      .to(text, { opacity: 0, duration: 0.3 }, 1.4);

    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100000] flex flex-col items-center justify-center bg-[#0A0A0A]"
    >
      <div className="mb-8 text-center">
        <span className="font-[family-name:var(--font-bebas)] text-5xl tracking-[0.2em] text-white md:text-7xl glow-text">
          UCONCEPT
        </span>
        <p ref={textRef} className="mt-2 text-sm tracking-[0.35em] text-[#A8A29E] opacity-0">
          MARKETING DIGITAL
        </p>
      </div>
      <div className="h-[2px] w-64 overflow-hidden rounded-full bg-white/10 md:w-80">
        <div
          ref={progressRef}
          className="h-full w-0 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F2C94C]"
          style={{ boxShadow: "0 0 20px #F2C94C" }}
        />
      </div>
    </div>
  );
}
