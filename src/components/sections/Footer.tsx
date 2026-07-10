const quickLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

const socials = [
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://tiktok.com", label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-[#2D7DFF]/10 bg-[#050816] px-6 py-16 md:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#2D7DFF]/40 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-[family-name:var(--font-bebas)] text-3xl tracking-[0.15em] text-white">
            MAVRIENZA
          </p>
          <p className="mt-2 text-sm text-[#AAB3C5]">Soluciones Digitales</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#AAB3C5]">
            Agencia digital premium en España. Diseño, estrategia y tecnología para marcas que
            quieren destacar.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Enlaces</p>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-[#AAB3C5] transition-colors hover:text-[#2D7DFF]">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-white">Contacto</p>
          <ul className="mt-4 space-y-3 text-sm text-[#AAB3C5]">
            <li>
              <a href="mailto:hola@mavrienza.com" className="hover:text-[#2D7DFF]">
                hola@mavrienza.com
              </a>
            </li>
            <li>
              <a href="https://wa.me/34600000000" className="hover:text-[#2D7DFF]">
                WhatsApp
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-wider text-[#AAB3C5] uppercase transition-colors hover:text-[#2D7DFF]"
                data-cursor
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-7xl border-t border-white/5 pt-8 text-center text-xs text-[#AAB3C5]">
        © {new Date().getFullYear()} Mavrienza Soluciones Digitales. Todos los derechos reservados.
      </p>
    </footer>
  );
}
