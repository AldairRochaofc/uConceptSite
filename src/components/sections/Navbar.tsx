"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que", label: "Por qué" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
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
              ? "rgba(5, 8, 22, 0.85)"
              : "rgba(5, 8, 22, 0)",
          backdropFilter: self.progress > 0 ? "blur(20px)" : "blur(0px)",
          borderColor: self.progress > 0 ? "rgba(45,125,255,0.15)" : "transparent",
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
          <span className="font-[family-name:var(--font-bebas)] text-2xl tracking-[0.15em] text-white transition-all group-hover:text-[#2D7DFF] md:text-3xl">
            MAVRIENZA
          </span>
          <span className="hidden h-2 w-2 rounded-full bg-[#2D7DFF] shadow-[0_0_12px_#2D7DFF] sm:block" />
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-[#AAB3C5] transition-colors hover:text-white"
                data-cursor
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contacto" className="btn-primary hidden text-sm lg:inline-flex" data-cursor>
          Solicitar Presupuesto
        </a>
      </nav>
    </header>
  );
}
