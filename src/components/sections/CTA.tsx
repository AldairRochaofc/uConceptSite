"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".cta-content", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.to(".cta-glow", {
        scale: 1.2,
        opacity: 0.5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="contacto" ref={sectionRef} className="section-padding relative overflow-hidden">
      <div className="cta-glow pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[600px] rounded-full bg-[#D4AF37]/30 blur-[150px]" />
      </div>

      <div className="cta-content relative z-10 mx-auto max-w-4xl rounded-3xl border border-[#F2C94C]/30 bg-[#141414]/80 p-12 text-center backdrop-blur-xl md:p-20 glow-gold">
        <h2 className="font-[family-name:var(--font-bebas)] text-4xl leading-tight text-white md:text-6xl glow-text">
          Tu negocio merece una presencia digital de otro nivel.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-[#A8A29E]">
          Cuéntanos tu proyecto y recibe una propuesta personalizada en menos de 24 horas.
        </p>
        <a
          href="https://wa.me/34600000000"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-10 inline-flex text-lg"
          data-cursor
        >
          Solicitar Presupuesto Ahora
        </a>
        <p className="mt-6 text-sm text-[#A8A29E]">
          Sin compromiso · Respuesta en 24h · Clientes en toda España
        </p>
      </div>

      <div className="pointer-events-none absolute top-20 left-10 h-20 w-20 rounded-full border border-[#F2C94C]/20 opacity-40" />
      <div className="pointer-events-none absolute right-16 bottom-20 h-32 w-32 rounded-full border border-[#F2C94C]/15 opacity-30" />
    </section>
  );
}
