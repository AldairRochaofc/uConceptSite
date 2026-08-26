"use client";

import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 3, prefix: "+", suffix: "k", label: "em economia gerados p/ mês" },
  { value: 100, suffix: "%", label: "satisfação" },
  { value: 24, suffix: "h", label: "disponibilidade" },
  { value: 60, prefix: "+", suffix: "", label: "reels p/ mês" },
];

function AnimatedStat({
  value,
  prefix = "",
  suffix,
  label,
}: {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
      },
    });
  }, [value, prefix, suffix]);

  return (
    <div className="stat-item glass rounded-2xl p-6 text-center">
      <span
        ref={numRef}
        className="font-[family-name:var(--font-bebas)] text-5xl text-[#F2C94C] md:text-6xl"
      >
        {prefix}0{suffix}
      </span>
      <p className="mt-2 text-sm tracking-wider text-[#A8A29E] uppercase">{label}</p>
    </div>
  );
}

export function WhyUconcept() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".why-content", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".growth-bar", {
        scrollTrigger: { trigger: ".dashboard-panel", start: "top 80%" },
        scaleX: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        transformOrigin: "left",
      });
    },
    { scope: sectionRef }
  );

  const bars = [67, 98, 95, 82, 54, 48];
  const areas = ["Brusque", "Camboriú", "Baln. Camboriú", "Itajaí", "Itapema", "Porto Belo"];

  return (
    <section id="por-que" ref={sectionRef} className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <div className="why-content grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm tracking-[0.3em] text-[#F2C94C] uppercase">Por que a Uconcept</p>
            <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-4xl leading-tight text-white md:text-5xl">
              Sem Inteligência = Sem Persona
            </h2>
            <p className="mt-6 text-lg text-[#A8A29E]">
              Estratégias personalizadas para cada modelo de negócio, trazemos a nossa experiência em atingir a sua persona de forma impactante pelo canal de comunicação ideal.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Especialização em planejamento Comercial com Marketing",
                "Acompanhamento presencial frequente",
                "Maior velocidade na adaptação das estratégias",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[#F8F7F2]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D4AF37]/30 text-xs text-[#F2C94C]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="dashboard-panel glass rounded-3xl p-8 glow-gold">
            <p className="mb-6 text-xs tracking-[0.2em] text-[#A8A29E] uppercase">
              Áreas atendidas (presencialmente)
            </p>
            {areas.map((label, i) => (
              <div key={label} className="mb-5">
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-[#A8A29E]">{label}</span>
                  <span className="text-[#F2C94C]">{bars[i]}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="growth-bar h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F2C94C]"
                    style={{ width: `${bars[i]}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s) => (
            <AnimatedStat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
