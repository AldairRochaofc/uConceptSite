"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Carlos Mendoza",
    role: "Dono, Restaurante La Brasa",
    text: "A Uconcept transformou nossa presença digital. Em três meses duplicamos as reservas pelo Instagram.",
    initials: "CM",
  },
  {
    name: "Elena Ruiz",
    role: "Coach de vida",
    text: "Profissionalismo absoluto. Minha marca pessoal agora transmite exatamente a autoridade que eu buscava.",
    initials: "ER",
  },
  {
    name: "Pastor David G.",
    role: "Igreja Vida Nova",
    text: "A equipe entendeu nossa visão e a expressou com elegância. Comunicação impecável em todos os momentos.",
    initials: "DG",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      gsap.from(".testimonial-section", {
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: sectionRef }
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[active];

  return (
    <section ref={sectionRef} className="section-padding testimonial-section relative">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm tracking-[0.3em] text-[#F2C94C] uppercase">Depoimentos</p>
        <h2 className="mt-4 font-[family-name:var(--font-bebas)] text-4xl text-white md:text-5xl">
          O QUE DIZEM NOSSOS CLIENTES
        </h2>

        <div className="relative mt-16 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.article
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass mx-auto max-w-2xl rounded-3xl p-10 md:p-14"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F2C94C] text-xl font-bold text-[#0A0A0A]">
                {t.initials}
              </div>
              <p className="text-lg leading-relaxed text-[#F8F7F2] md:text-xl">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-6 font-semibold text-white">{t.name}</p>
              <p className="text-sm text-[#A8A29E]">{t.role}</p>
              <div className="mt-4 flex justify-center gap-1 text-[#F2C94C]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-8 bg-[#F2C94C]" : "w-2 bg-white/20"
              }`}
              aria-label={`Depoimento ${i + 1}`}
              data-cursor
            />
          ))}
        </div>
      </div>
    </section>
  );
}
