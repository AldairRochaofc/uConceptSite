"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "@/img/img1uc.jpg";
import img2 from "@/img/img2uc.jpg";
import img3 from "@/img/img3uc.jpg";
import img4 from "@/img/img4uc.jpg";
import img5 from "@/img/img5uc.jpg";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Cond. Parque do Lago", category: "Entrega de Aço em Obras", gradient: "from-amber-900/40 to-[#D4AF37]/25", image: img1 },
  { title: "Cond. Alínea Reserva", category: "Produção de Reels Semanal", gradient: "from-neutral-900/50 to-[#F2C94C]/20", image: img2 },
  { title: "Praia das Cabeçudas", category: "Entrega de Casa", gradient: "from-zinc-900/50 to-amber-600/20", image: img3 },
  { title: "Rio do Meio", category: "Produção de Reels para Loteamentos", gradient: "from-stone-800/40 to-[#D4AF37]/20", image: img4 },
  { title: "Cond. Vila do Mar", category: "Concretagem", gradient: "from-black/50 to-[#F2C94C]/25", image: img5 },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      // Distância real de overflow do trilho — a mesma expressão é usada tanto
      // no destino do "x" quanto no comprimento do pin, para que o arraste
      // horizontal fique 1:1 com o scroll vertical (sem “sobra” nem “corte”).
      const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 80);

      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getDistance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="proyectos"
      ref={sectionRef}
      className="relative flex h-screen flex-col justify-center overflow-hidden bg-[#141414] px-6 py-10 md:px-10"
    >
      <div>
        <p className="text-sm tracking-[0.3em] text-[#F2C94C] uppercase">Portfolio</p>
        <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-4xl text-white md:text-6xl">
          CAPTAÇÕES RECENTES
        </h2>
      </div>

      <div ref={trackRef} className="mt-10 flex gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="project-card group relative h-[clamp(240px,50vh,420px)] w-[280px] shrink-0 overflow-hidden rounded-3xl md:w-[380px]"
            data-cursor
          >
            {p.image ? (
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(min-width: 768px) 380px, 280px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority={false}
              />
            ) : (
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
            )}
            <div className="absolute inset-0 bg-[#0A0A0A]/40 transition-colors duration-500 group-hover:bg-[#0A0A0A]/20" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <span className="text-xs tracking-[0.2em] text-[#F2C94C] uppercase">{p.category}</span>
              <h3 className="mt-2 font-[family-name:var(--font-bebas)] text-3xl text-white">{p.title}</h3>
              <p className="mt-4 translate-y-4 text-sm text-[#A8A29E] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                Ver estudo de caso →
              </p>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl border border-white/10 transition-colors group-hover:border-[#F2C94C]/50 group-hover:shadow-[0_0_60px_rgba(212,175,55,0.25)]" />
          </article>
        ))}
      </div>
    </section>
  );
}
