import { useEffect, useState } from "react";
import { Phone, Menu as MenuIcon, X } from "lucide-react";

const links = [
  { href: "#sobre-nosotros", label: "Nosotros" },
  { href: "#carta", label: "Carta" },
  { href: "#servicios", label: "Servicios" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[var(--cream)]/95 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto flex items-center justify-between px-6 md:px-10 h-16 md:h-20">
        <a href="#top" className="font-display italic text-xl md:text-2xl font-semibold text-[var(--tomato)]">
          Pura Passione
        </a>
        <nav className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-[var(--charcoal)]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--tomato)] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+34681152609"
            className="flex items-center gap-2 text-sm font-semibold text-[var(--charcoal)] hover:text-[var(--tomato)] transition-colors"
          >
            <Phone size={16} /> 681 15 26 09
          </a>
          <a
            href="#pedir"
            className="rounded-full bg-[var(--tomato)] text-[var(--cream)] px-5 py-2.5 text-sm font-semibold hover:bg-[var(--tomato-dark)] transition-colors shadow-sm"
          >
            Pedir online
          </a>
        </div>
        <button
          className="md:hidden text-[var(--charcoal)]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
        >
          {open ? <X size={26} /> : <MenuIcon size={26} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[var(--cream)] border-t border-[var(--gold)]/30 px-6 py-6 flex flex-col gap-4 font-body">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-[var(--charcoal)] font-medium">
              {l.label}
            </a>
          ))}
          <a href="tel:+34681152609" className="flex items-center gap-2 font-semibold text-[var(--charcoal)]">
            <Phone size={16} /> 681 15 26 09
          </a>
          <a
            href="#pedir"
            onClick={() => setOpen(false)}
            className="rounded-full bg-[var(--tomato)] text-[var(--cream)] px-5 py-3 text-center font-semibold"
          >
            Pedir online
          </a>
        </div>
      )}
    </header>
  );
}
