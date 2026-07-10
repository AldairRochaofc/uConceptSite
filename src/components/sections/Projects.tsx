"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Restaurante La Brasa", category: "Restaurantes", gradient: "from-amber-900/40 to-orange-600/20" },
  { title: "Coach María López", category: "Marcas personales", gradient: "from-purple-900/40 to-pink-600/20" },
  { title: "Iglesia Vida Nueva", category: "Iglesias", gradient: "from-blue-900/40 to-indigo-600/20" },
  { title: "Ferretería El Maestro", category: "Negocios locales", gradient: "from-slate-800/40 to-blue-600/20" },
  { title: "Boutique Élite Moda", category: "Ecommerce", gradient: "from-rose-900/40 to-red-600/20" },
  { title: "Clínica Dental Sonrisa", category: "Negocios locales", gradient: "from-cyan-900/40 to-teal-600/20" },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 80),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="proyectos" ref={sectionRef} className="relative overflow-hidden bg-[#0A1023] py-24">
      <div className="section-padding pb-0">
        <p className="text-sm tracking-[0.3em] text-[#2D7DFF] uppercase">Portfolio</p>
        <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-4xl text-white md:text-6xl">
          PROYECTOS QUE HABLAN POR SÍ SOLOS
        </h2>
      </div>

      <div ref={trackRef} className="mt-12 flex gap-6 px-6 md:px-10">
        {projects.map((p) => (
          <article
            key={p.title}
            className="project-card group relative h-[420px] w-[320px] shrink-0 overflow-hidden rounded-3xl md:w-[380px]"
            data-cursor
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
            <div className="absolute inset-0 bg-[#050816]/40 transition-colors duration-500 group-hover:bg-[#050816]/20" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <span className="text-xs tracking-[0.2em] text-[#2D7DFF] uppercase">{p.category}</span>
              <h3 className="mt-2 font-[family-name:var(--font-bebas)] text-3xl text-white">{p.title}</h3>
              <p className="mt-4 translate-y-4 text-sm text-[#AAB3C5] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Ver caso de estudio →
              </p>
            </div>
            <div className="absolute inset-0 scale-100 transition-transform duration-700 group-hover:scale-105" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10 transition-colors group-hover:border-[#2D7DFF]/50 group-hover:shadow-[0_0_60px_rgba(0,87,255,0.25)]" />
          </article>
        ))}
      </div>
    </section>
  );
}
