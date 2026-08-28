import { motion } from "motion/react";
import { Phone, Star, ShoppingBag } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] flex items-end md:items-center overflow-hidden pt-24 md:pt-32">
      <div className="absolute inset-0">
        <img
          src="/images/images.png"
          alt="Pizza margherita recién horneada de Pura Passione"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[var(--cream)] rounded-full px-4 py-2 mb-6 shadow-lg"
        >
          <div className="flex text-[var(--gold)]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span className="font-body text-sm font-semibold text-[var(--charcoal)]">4,8 · 82 reseñas en Google</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-white text-5xl sm:text-6xl md:text-7xl leading-[0.95] font-semibold max-w-2xl"
        >
          Pizza & Pinsa <span className="italic text-[var(--gold)]">Pura Passione</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-white/90 text-lg md:text-xl max-w-xl mt-6"
        >
          Auténtica tradición italiana horneada con leña en Candelaria, Tenerife. Masa madre, ingredientes
          de verdad y un ambiente cálido, familiar e inclusivo para todos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-9"
        >
          <a
            href="#pedir"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--tomato)] text-white px-7 py-3.5 font-body font-semibold hover:bg-[var(--tomato-dark)] transition-all hover:-translate-y-0.5 shadow-lg"
          >
            <ShoppingBag size={18} /> Pedir online
          </a>
          <a
            href="tel:+34681152609"
            className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--cream)] text-[var(--cream)] px-7 py-3.5 font-body font-semibold hover:bg-[var(--cream)] hover:text-[var(--charcoal)] transition-all hover:-translate-y-0.5"
          >
            <Phone size={18} /> Reservar / Llamar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
