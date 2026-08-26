import { Fragment } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const hours = [
  { day: "Lunes", time: "Cerrado" },
  { day: "Martes", time: "Cerrado" },
  { day: "Miércoles", time: "13:00 – 23:00" },
  { day: "Jueves", time: "13:00 – 23:00" },
  { day: "Viernes", time: "13:00 – 23:00" },
  { day: "Sábado", time: "13:00 – 23:00" },
  { day: "Domingo", time: "13:00 – 23:00" },
];

export function Location() {
  return (
    <section id="ubicacion" className="bg-[var(--wood)] py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body uppercase tracking-[0.2em] text-[var(--gold)] text-sm font-semibold mb-3">
            Ubicación y contacto
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-[var(--cream)] font-semibold mb-8">
            Te esperamos <span className="italic text-[var(--gold)]">en Candelaria</span>
          </h2>

          <div className="space-y-5 font-body text-[var(--cream)]">
            <div className="flex items-start gap-3">
              <MapPin className="text-[var(--gold)] shrink-0 mt-1" size={20} />
              <div>
                <p className="font-semibold">Av. Marítima, 29, 38530 Candelaria, Santa Cruz de Tenerife</p>
                <p className="text-[var(--cream)]/60 text-sm mt-1">Código Plus: J8P+86 Candelaria</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[var(--gold)] shrink-0" size={20} />
              <a href="tel:+34681152609" className="font-semibold hover:text-[var(--gold)] transition-colors">
                681 15 26 09
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="text-[var(--gold)] shrink-0 mt-1" size={20} />
              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm">
                {hours.map((h) => (
                  <Fragment key={h.day}>
                    <span className="text-[var(--cream)]/70">{h.day}</span>
                    <span className={h.time === "Cerrado" ? "text-[var(--cream)]/45 italic" : "text-[var(--cream)]"}>
                      {h.time}
                    </span>
                  </Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-9">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Av.+Mar%C3%ADtima+29+38530+Candelaria+Santa+Cruz+de+Tenerife"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--tomato)] text-white px-6 py-3 font-semibold hover:bg-[var(--tomato-dark)] transition-colors"
            >
              <Navigation size={18} /> Cómo llegar
            </a>
            <a
              href="tel:+34681152609"
              className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--cream)] text-[var(--cream)] px-6 py-3 font-semibold hover:bg-[var(--cream)] hover:text-[var(--wood)] transition-colors"
            >
              <Phone size={18} /> Llamar ahora
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--cream)]/10 h-[420px] lg:h-full min-h-[420px]"
        >
          <iframe
            title="Ubicación Pura Passione en Google Maps"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps?q=Av.+Mar%C3%ADtima+29+38530+Candelaria+Santa+Cruz+de+Tenerife&output=embed"
          />
        </motion.div>
      </div>
    </section>
  );
}
