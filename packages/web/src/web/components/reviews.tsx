import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Laura M.",
    text: "La mejor pinsa que he probado en Tenerife. Masa ligera, ingredientes de calidad y el trato es súper cercano. Repetiremos seguro.",
  },
  {
    name: "Carlos R.",
    text: "Ambiente acogedor y auténtico sabor italiano. Se nota que hacen las cosas con cariño y respetan la tradición.",
  },
  {
    name: "Ainhoa S.",
    text: "Nos sentimos como en casa. Un sitio familiar, inclusivo y con una pizza margherita de otro nivel. ¡Volveremos!",
  },
];

export function Reviews() {
  return (
    <section id="resenas" className="bg-[var(--cream)] py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-body uppercase tracking-[0.2em] text-[var(--gold)] text-sm font-semibold mb-3">
            Reseñas
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--charcoal)] font-semibold">
            Lo que dicen <span className="italic text-[var(--tomato)]">nuestros clientes</span>
          </h2>
          <a
            href="https://www.google.com/maps/place/Pizza+%26+Pinsa+Pura+Passione"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-[var(--cream-2)] rounded-full px-5 py-2.5 border border-[var(--gold)]/30"
          >
            <div className="flex text-[var(--gold)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="font-body text-sm font-semibold text-[var(--charcoal)]">
              4,8 / 5 · 82 reseñas en Google
            </span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[var(--cream-2)] rounded-2xl p-8 border border-[var(--gold)]/20 relative"
            >
              <Quote className="text-[var(--gold)] mb-4" size={28} />
              <p className="font-display italic text-lg text-[var(--charcoal)] leading-relaxed mb-6">
                “{t.text}”
              </p>
              <div className="flex items-center justify-between">
                <p className="font-body font-semibold text-[var(--charcoal)]">{t.name}</p>
                <div className="flex text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, i2) => (
                    <Star key={i2} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
