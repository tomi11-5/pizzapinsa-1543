import { motion } from "motion/react";
import { UtensilsCrossed, ShoppingBag, Bike, Smartphone } from "lucide-react";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Comer allí",
    text: "Disfruta en nuestra sala con ambiente cálido y familiar, perfecta para compartir.",
    cta: "Ver ubicación",
    href: "#ubicacion",
  },
  {
    icon: ShoppingBag,
    title: "Para llevar",
    text: "Recoge tu pizza o pinsa recién horneada y disfrútala donde quieras.",
    cta: "Llamar para pedir",
    href: "tel:+34681152609",
  },
  {
    icon: Bike,
    title: "A domicilio",
    text: "Te lo llevamos calentito hasta tu puerta en Candelaria y alrededores.",
    cta: "Pedir a domicilio",
    href: "#pedir",
  },
  {
    icon: Smartphone,
    title: "Pedido en línea",
    text: "Haz tu pedido desde el móvil en pocos clics, sin esperas ni llamadas.",
    cta: "Pedir online",
    href: "#pedir",
  },
];

export function Services() {
  return (
    <section id="servicios" className="bg-[var(--cream-2)] py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-body uppercase tracking-[0.2em] text-[var(--gold)] text-sm font-semibold mb-3">
            Servicios
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--charcoal)] font-semibold">
            Como tú prefieras <span className="italic text-[var(--tomato)]">disfrutarlo</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[var(--cream)] rounded-2xl p-7 border border-[var(--gold)]/20 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--olive)] text-[var(--cream)] flex items-center justify-center mb-5">
                <s.icon size={24} />
              </div>
              <h3 className="font-display text-2xl text-[var(--charcoal)] font-semibold mb-2">{s.title}</h3>
              <p className="font-body text-[var(--charcoal)]/70 text-sm leading-relaxed mb-5">{s.text}</p>
              <a
                href={s.href}
                className="font-body text-sm font-semibold text-[var(--tomato)] hover:text-[var(--tomato-dark)] inline-flex items-center gap-1"
              >
                {s.cta} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
