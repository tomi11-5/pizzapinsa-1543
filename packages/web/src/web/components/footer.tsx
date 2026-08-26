import { Instagram, Facebook, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-[var(--cream)]/80 pt-14 pb-28 md:pb-14">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-8 border-b border-[var(--cream)]/10">
          <div>
            <p className="font-display italic text-2xl text-[var(--cream)]">Pura Passione</p>
            <p className="font-body text-sm mt-2 max-w-sm">
              Pizza & Pinsa auténtica en Candelaria, Tenerife. Tradición italiana, servida con pasión.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="w-11 h-11 rounded-full bg-[var(--cream)]/10 flex items-center justify-center hover:bg-[var(--tomato)] hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-11 h-11 rounded-full bg-[var(--cream)]/10 flex items-center justify-center hover:bg-[var(--tomato)] hover:text-white transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 font-body text-sm">
          <p className="inline-flex items-center gap-2">
            <Heart size={14} className="text-[var(--tomato)]" fill="currentColor" />
            Negocio amigable con la comunidad LGBTQ+ — todas las personas son bienvenidas
          </p>
          <p>© {new Date().getFullYear()} Pizza & Pinsa Pura Passione. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
