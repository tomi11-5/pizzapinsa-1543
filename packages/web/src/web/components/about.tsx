import { motion } from "motion/react";
import { Heart, Wheat, Users } from "lucide-react";

export function About() {
  return (
    <section id="sobre-nosotros" className="relative bg-[var(--cream)] py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <img
            src="/images/dough.jpg"
            alt="Masa de pizza estirada a mano artesanalmente"
            className="rounded-[2rem] w-full h-[420px] md:h-[520px] object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-[var(--olive)] text-[var(--cream)] rounded-2xl px-6 py-5 shadow-lg hidden sm:block">
            <p className="font-display italic text-2xl">Masa madre</p>
            <p className="font-body text-sm text-[var(--cream)]/85">fermentada 72 horas</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="font-body uppercase tracking-[0.2em] text-[var(--gold)] text-sm font-semibold mb-3">
            Sobre nosotros
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--charcoal)] font-semibold leading-tight">
            Una pasión italiana, <span className="italic text-[var(--tomato)]">hecha en Tenerife</span>
          </h2>
          <p className="font-body text-[var(--charcoal)]/80 text-lg mt-6 leading-relaxed">
            Nacimos en Candelaria con un sueño sencillo: traer la auténtica pizza y pinsa
            romana a la costa de Tenerife, respetando cada paso de la tradición italiana. Masa madre,
            harinas seleccionadas, horno de leña e ingredientes frescos son nuestra receta de siempre.
          </p>
          <p className="font-body text-[var(--charcoal)]/80 text-lg mt-4 leading-relaxed">
            Pero Pura Passione es también un lugar de encuentro: una casa abierta, familiar e inclusiva,
            donde cada persona sin importar quién sea o a quién ame es bienvenida a nuestra mesa.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="text-center">
              <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-[var(--olive)]/15 flex items-center justify-center text-[var(--olive)]">
                <Wheat size={22} />
              </div>
              <p className="font-body text-sm font-semibold text-[var(--charcoal)]">Ingredientes reales</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-[var(--tomato)]/12 flex items-center justify-center text-[var(--tomato)]">
                <Heart size={22} />
              </div>
              <p className="font-body text-sm font-semibold text-[var(--charcoal)]">Hecho con amor</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-2 w-12 h-12 rounded-full bg-[var(--gold)]/15 flex items-center justify-center text-[var(--gold)]">
                <Users size={22} />
              </div>
              <p className="font-body text-sm font-semibold text-[var(--charcoal)]">Ambiente inclusivo</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
