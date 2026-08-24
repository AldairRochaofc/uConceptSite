"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { href: "#servicios", label: "Serviços" },
  { href: "#por-que", label: "Por que" },
  { href: "#proyectos", label: "Projetos" },
  { href: "#proceso", label: "Processo" },
  { href: "#contacto", label: "Contato" },
];

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    ScrollTrigger.create({
      start: "top -80",
      onUpdate: (self) => {
        gsap.to(nav, {
          backgroundColor:
            self.progress > 0
              ? "rgba(10, 10, 10, 0.85)"
              : "rgba(10, 10, 10, 0)",
          backdropFilter: self.progress > 0 ? "blur(20px)" : "blur(0px)",
          borderColor: self.progress > 0 ? "rgba(242, 201, 76,0.15)" : "transparent",
          duration: 0.3,
        });
      },
    });
  }, []);

  return (
    <header
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-transparent transition-colors"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="group flex items-center gap-2" data-cursor>
          <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-[0.15em] text-white transition-all group-hover:text-[#F2C94C] md:text-3xl">
            UCONCEPT
          </span>
          <span className="hidden h-2 w-2 rounded-full bg-[#F2C94C] shadow-[0_0_12px_#F2C94C] sm:block" />
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[#A8A29E] transition-colors hover:text-white"
                data-cursor
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contacto" className="btn-primary hidden text-sm lg:inline-flex" data-cursor>
          Solicitar Orçamento
        </a>
      </nav>
    </header>
  );
}
