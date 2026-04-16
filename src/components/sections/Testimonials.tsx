"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp, VIEWPORT_ONCE } from "@/lib/design-system";

{/* TODO cliente: enviar testimonios reales con autorización de pacientes para publicación */}

const testimonialSlots = [
  { id: "A" },
  { id: "B" },
  { id: "C" },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-cream)" }}
      aria-label="Testimonios de pacientes"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="text-center mb-14"
        >
          <p
            className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            Testimonios
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl font-light leading-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Lo que dicen nuestros pacientes
          </h2>
          <p
            className="mt-4 text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: "var(--color-warm-text)" }}
          >
            Historias reales de transformación que van más allá del peso — calidad de
            vida, salud recuperada y confianza renovada.
          </p>
        </motion.div>

        {/* Cards placeholder estilo pull-quote editorial */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="grid gap-6 sm:grid-cols-3"
          aria-label="Testimonios pendientes de autorización"
        >
          {testimonialSlots.map((t) => (
            <motion.div
              key={t.id}
              variants={staggerItem}
              className="rounded-2xl border flex flex-col p-8"
              style={{
                backgroundColor: "var(--color-lilac)",
                borderColor: "transparent",
              }}
            >
              {/* Comilla tipográfica */}
              <span
                className="font-serif text-6xl font-light leading-none mb-4"
                style={{ color: "rgba(108,29,69,0.20)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Texto placeholder pull-quote */}
              {/* TODO cliente: enviar testimonio real con autorización */}
              <p
                className="font-serif text-lg font-light italic leading-relaxed flex-1"
                style={{ color: "var(--color-primary)", opacity: 0.45 }}
              >
                Testimonio pendiente de autorización del paciente.
                Formato editorial pull-quote.
              </p>

              {/* Separador */}
              <div
                className="my-6 h-px"
                style={{ backgroundColor: "rgba(108,29,69,0.15)" }}
                aria-hidden="true"
              />

              {/* Autor placeholder */}
              <div>
                <p
                  className="font-sans text-sm font-semibold"
                  style={{ color: "var(--color-primary)", opacity: 0.45 }}
                >
                  Paciente Exilus
                </p>
                <p
                  className="font-sans text-xs mt-0.5"
                  style={{ color: "var(--color-muted-foreground)", opacity: 0.45 }}
                >
                  Cirugía bariátrica · Trujillo
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
