import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { menu } from "../lib/menu-data";

export function MenuSection() {
  const [active, setActive] = useState(menu[0].id);
  const current = menu.find((c) => c.id === active)!;

  return (
    <section id="carta" className="bg-[var(--charcoal)] py-20 md:py-32 relative">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-body uppercase tracking-[0.2em] text-[var(--gold)] text-sm font-semibold mb-3">
            La Carta
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--cream)] font-semibold">
            Pizzas, pinsas <span className="italic text-[var(--gold)]">y mucho más</span>
          </h2>
          <p className="font-body text-[var(--cream)]/70 mt-4">
            Precios orientativos entre 10 € y 20 € por persona.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menu.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`font-body text-sm font-semibold px-5 py-2.5 rounded-full transition-all border ${
                active === cat.id
                  ? "bg-[var(--tomato)] border-[var(--tomato)] text-white"
                  : "border-[var(--cream)]/25 text-[var(--cream)]/80 hover:border-[var(--gold)] hover:text-[var(--gold)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto"
          >
            {current.items.map((item) => (
              <div key={item.name} className="flex items-baseline gap-3 py-2">
                <div className="flex-1">
                  <p className="font-display text-xl text-[var(--cream)] font-medium">{item.name}</p>
                  <p className="font-body text-sm text-[var(--cream)]/55 mt-1">{item.desc}</p>
                </div>
                <div className="flex-1 border-b border-dotted border-[var(--cream)]/25 relative -top-2" />
                <p className="font-display text-lg text-[var(--gold)] font-semibold whitespace-nowrap">
                  {item.price}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
