"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Gestión de Instagram",
    desc: "Contenido estratégico, comunidad activa y crecimiento orgánico real.",
    icon: "◈",
  },
  {
    title: "Diseño para Redes Sociales",
    desc: "Piezas visuales premium que elevan tu marca en cada publicación.",
    icon: "◇",
  },
  {
    title: "Edición de Videos para Redes",
    desc: "Reels y videos cinematográficos que captan atención en segundos.",
    icon: "▣",
  },
  {
    title: "Desarrollo de Sitios Web",
    desc: "Webs rápidas, modernas y optimizadas para convertir visitantes.",
    icon: "⬡",
  },
  {
    title: "Branding Digital",
    desc: "Identidad visual coherente que transmite autoridad y confianza.",
    icon: "◎",
  },
  {
    title: "Estrategia de Marketing",
    desc: "Planes digitales orientados a resultados medibles y ventas.",
    icon: "✦",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.1,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="servicios" ref={sectionRef} className="section-padding relative bg-[#141414]">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm tracking-[0.3em] text-[#F2C94C] uppercase">Servicios</p>
        <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-4xl text-white md:text-6xl">
          TODO LO QUE TU MARCA NECESITA
        </h2>
        <p className="mt-4 max-w-xl text-[#A8A29E]">
          Soluciones integrales diseñadas para negocios ambiciosos en España.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="service-card glass group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#F2C94C]/60 hover:shadow-[0_0_50px_rgba(212,175,55,0.2)]"
              data-cursor
            >
              <span className="text-4xl text-[#F2C94C] transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_#F2C94C]">
                {s.icon}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A8A29E]">{s.desc}</p>
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-[#D4AF37]/10 blur-2xl transition-all group-hover:bg-[#D4AF37]/25" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
