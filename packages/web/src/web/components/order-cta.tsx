import { motion } from "motion/react";

const platforms = [
  { name: "Glovo", href: "https://glovoapp.com", color: "#FFC244" },
  { name: "Just Eat", href: "https://www.just-eat.es", color: "#FF8000" },
];

export function OrderCta() {
  return (
    <section id="pedir" className="relative bg-[var(--tomato)] py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/images/ingredients.jpg')] bg-cover bg-center" />
      <div className="relative max-w-[900px] mx-auto px-6 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-white font-semibold mb-4">
            ¿Se te antoja una pizza? <span className="italic text-[var(--gold)]">Pide ahora</span>
          </h2>
          <p className="font-body text-white/85 text-lg mb-10">
            Elige tu plataforma favorita para pedido a domicilio, o llámanos directamente.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-7 py-3.5 font-body font-bold text-[var(--charcoal)] hover:-translate-y-0.5 transition-transform shadow-lg"
              >
                {p.name}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
