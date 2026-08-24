"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const mockups = [
  { label: "Instagram", icon: "📱", delay: 0 },
  { label: "Sites", icon: "🌐", delay: 0.15 },
  { label: "Reels", icon: "🎬", delay: 0.3 },
  { label: "Analytics", icon: "📊", delay: 0.45 },
];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-logo", { opacity: 0, y: 30, duration: 1 })
        .from(".hero-headline .line", { opacity: 0, y: 80, duration: 1.1, stagger: 0.12 }, "-=0.5")
        .from(".hero-sub", { opacity: 0, y: 40, duration: 0.9 }, "-=0.6")
        .from(".hero-cta", { opacity: 0, y: 30, duration: 0.8, stagger: 0.1 }, "-=0.5")
        .from(".hero-mockup", { opacity: 0, y: 60, scale: 0.9, duration: 1, stagger: 0.12 }, "-=0.7");

      gsap.to(".hero-glow", {
        opacity: 0.6,
        scale: 1.05,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero-mockup", {
        y: "+=12",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.4 },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 pb-20"
    >
      <div className="hero-glow pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#D4AF37]/20 blur-[120px] opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <p className="hero-logo mb-6 inline-flex items-center gap-2 rounded-full border border-[#F2C94C]/30 bg-white/5 px-5 py-2 text-xs tracking-[0.25em] text-[#F2C94C] uppercase backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F2C94C]" />
          Marketing Digital Premium
        </p>

        <h1 className="hero-headline font-[family-name:var(--font-bebas)] text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] tracking-wide text-white">
          <span className="line block glow-text">MARKETING DIGITAL</span>
          <span className="line block bg-gradient-to-r from-white via-[#F8F7F2] to-[#F2C94C] bg-clip-text text-transparent">
            QUE FAZ SUA MARCA CRESCER
          </span>
        </h1>

        <p className="hero-sub mx-auto mt-6 max-w-2xl text-lg text-[#A8A29E] md:text-xl">
          Design, estratégia e tecnologia para negócios que querem se destacar de verdade.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="#contacto" className="hero-cta btn-primary" data-cursor>
            Solicitar Orçamento
          </a>
          <a href="#proyectos" className="hero-cta btn-secondary" data-cursor>
            Ver Projetos
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {mockups.map((m) => (
            <div
              key={m.label}
              data-parallax
              className="hero-mockup glass group relative rounded-2xl p-6 transition-all duration-500 hover:border-[#F2C94C]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]"
              data-cursor
            >
              <span className="text-3xl">{m.icon}</span>
              <p className="mt-3 text-sm font-medium text-white">{m.label}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4AF37]/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>

      <a
        href="#servicios"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#A8A29E]"
        aria-label="Rolar"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="flex h-10 w-6 justify-center rounded-full border border-[#F2C94C]/40 p-1">
          <span className="h-2 w-1 animate-bounce rounded-full bg-[#F2C94C]" />
        </span>
      </a>
    </section>
  );
}
