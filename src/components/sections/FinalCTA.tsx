"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Calendar, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { CLIENT } from "@/lib/client-data";
import { staggerContainer, staggerItem, scaleOnHover, PARALLAX_RANGE } from "@/lib/design-system";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Patrón parallax — foto derecha
  const imageY = useTransform(
    scrollYProgress,
    PARALLAX_RANGE,
    shouldReduce ? [0, 0] : [-30, 30]
  );

  return (
    <section
      ref={sectionRef}
      id="contacto"
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
      aria-label="Llamada a la acción final"
    >
      {/* Decorativo blob */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "var(--color-lilac)" }}
        />
        <div
          className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-15 blur-2xl"
          style={{ backgroundColor: "var(--color-cta)" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">

          {/* Texto — izquierda */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.p
              variants={staggerItem}
              className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-4"
              style={{ color: "rgba(245,235,220,0.55)" }}
            >
              Da el primer paso
            </motion.p>

            <motion.h2
              variants={staggerItem}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight"
              style={{ color: "var(--color-cream)" }}
            >
              ¿Listo para cambiar tu vida?
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="mt-6 text-lg leading-relaxed max-w-xl"
              style={{ color: "rgba(245,235,220,0.75)" }}
            >
              La evaluación no compromete nada. La consulta es médica, no comercial.
              El Dr. Salazar y su equipo están listos para acompañarte en cada paso.
            </motion.p>

            {/* Localización */}
            <motion.div
              variants={staggerItem}
              className="mt-7 rounded-xl px-5 py-4 border inline-block"
              style={{
                backgroundColor: "rgba(245,235,220,0.08)",
                borderColor: "rgba(245,235,220,0.12)",
              }}
            >
              <p
                className="text-sm font-medium"
                style={{ color: "rgba(245,235,220,0.80)" }}
              >
                Infraestructura segura y de alta calidad
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "rgba(245,235,220,0.55)" }}
              >
                Clínica Sanna Sánchez Ferrer · Trujillo, Perú
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={staggerItem}
              className="mt-9 flex flex-col sm:flex-row gap-3"
            >
              <motion.a
                href={CLIENT.booking}
                target="_blank"
                rel="noopener noreferrer"
                {...scaleOnHover}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold"
                style={{
                  backgroundColor: "var(--color-cta)",
                  color: "#1a3a0a",
                  boxShadow: "0 8px 28px rgba(120,214,75,0.30)",
                }}
              >
                <Calendar className="h-5 w-5" aria-hidden="true" />
                Agenda tu evaluación hoy
              </motion.a>

              <motion.a
                href={CLIENT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                {...scaleOnHover}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 px-7 py-4 text-base font-semibold transition-colors"
                style={{
                  borderColor: "rgba(245,235,220,0.40)",
                  color: "var(--color-cream)",
                  backgroundColor: "transparent",
                }}
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Escríbenos por WhatsApp
              </motion.a>
            </motion.div>

            {/* Teléfono */}
            <motion.a
              variants={staggerItem}
              href={`tel:${CLIENT.phone.replace(/\s/g, "")}`}
              className="mt-5 inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: "rgba(245,235,220,0.55)" }}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {CLIENT.phone}
            </motion.a>
          </motion.div>

          {/* Foto — derecha con parallax */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-end"
          >
            <div className="relative">
              <motion.div
                style={{ y: imageY }}
                className="relative w-80 xl:w-96 aspect-[4/5] rounded-3xl overflow-hidden"
              >
                <Image
                  src="/images/doctor-scrubs.jpg"
                  alt="Dr. Víctor Augusto Salazar Tantaleán, cirujano bariatra en Trujillo, en pabellón quirúrgico"
                  fill
                  sizes="(max-width: 1280px) 320px, 384px"
                  className="object-cover object-center"
                  priority
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(108,29,69,0.55) 0%, transparent 60%)",
                  }}
                  aria-hidden="true"
                />
              </motion.div>

              {/* Badge flotante */}
              <div
                className="absolute -bottom-5 -left-5 rounded-2xl px-5 py-3 shadow-2xl"
                style={{
                  backgroundColor: "var(--color-cream)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <p className="text-xs font-bold" style={{ color: "var(--color-primary)" }}>
                  {CLIENT.doctor}
                </p>
                <p className="text-[10px] mt-0.5" style={{ color: "var(--color-warm-text)" }}>
                  Director Médico · Exilus
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
