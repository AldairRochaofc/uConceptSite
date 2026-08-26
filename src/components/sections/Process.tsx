"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Onboarding Inicial",
    desc: "Reunião para definição de objetivos e apresentação do plano comercial, levando em conta estrutura comercial atual e equipe.",
  },
  {
    num: "02",
    title: "CRM",
    desc: "Definição do sistema de CRM ideal para o cliente, assim seguimos com a configuração e apresentação dele.",
  },
  {
    num: "03",
    title: "Treinamento Inicial",
    desc: "Reunião On e Off para treinamentos individuais e em grupo para a equipe (foco nas práticas de uso do CRM e estratégias comerciais).",
  },
  {
    num: "04",
    title: "SDR",
    desc: "Início da implementação e treinamento de um SDR com foco em alimentação em massa do CRM implantado.",
  },
  {
    num: "05",
    title: "Gestão",
    desc: "Reuniões comerciais semanais e acompanhamento de perto junto com a Gestão Comercial, apresentando resultados, fazendo melhorias do sistema e ajustando estratégias para prospecções.",
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".process-step", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        opacity: 0,
        x: -40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".process-line", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        scaleY: 0,
        duration: 1.5,
        ease: "power2.out",
        transformOrigin: "top",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="proceso" ref={sectionRef} className="section-padding relative bg-[#141414]">
      <div className="mx-auto max-w-4xl">
        <p className="text-center text-sm tracking-[0.3em] text-[#F2C94C] uppercase">Como funciona</p>
        <h2 className="mt-4 text-center font-[family-name:var(--font-bebas)] text-4xl text-white md:text-6xl">
          INTELIGÊNCIA DE MERCADO
        </h2>

        <div className="relative mt-20">
          <div className="process-line absolute top-0 left-[27px] h-full w-px bg-gradient-to-b from-[#D4AF37]/25 via-[#F2C94C]/25 to-transparent md:left-1/2 md:-translate-x-px" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`process-step relative mb-12 flex gap-8 md:mb-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#F2C94C]/50 bg-[#0A0A0A] font-[family-name:var(--font-bebas)] text-xl text-[#F2C94C] shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                {step.num}
              </div>
              <div className={`glass flex-1 rounded-2xl p-6 md:max-w-md ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-[#A8A29E]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
