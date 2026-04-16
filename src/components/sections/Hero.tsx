"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import Image from "next/image";
import { CLIENT } from "@/lib/client-data";
import {
  staggerContainer,
  staggerItem,
  scaleOnHover,
  PARALLAX_RANGE,
  PARALLAX_OUTPUT,
} from "@/lib/design-system";

// Alternativa editorial comentada para revisión del CEO:
// "Una decisión que cambia el resto de tu vida."
// Default del brief: "Transforma tu salud. Recupera tu vida."

const trustItems = [
  "16 años de experiencia en cirugía abdominal",
  "10 años en cirugía bariátrica",
  "Pionero en el norte del Perú",
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Patrón 5: parallax foto del doctor
  const imageY = useTransform(
    scrollYProgress,
    PARALLAX_RANGE,
    shouldReduce ? [0, 0] : PARALLAX_OUTPUT
  );

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative flex items-center min-h-screen overflow-hidden"
      style={{
        backgroundColor: "var(--color-cream)",
        paddingTop: "calc(40px + 64px + 2rem)", // TopBar 40 + Navbar 64 + aire 32 = 136px
        paddingBottom: "5rem",
      }}
      aria-label="Sección principal"
    >
      {/* Decorativo — blob fondo sutil */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "var(--color-lilac)" }}
        />
        <div
          className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "var(--color-primary)" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6">
        {/* Patrón 1: Page load stagger — eyebrow → h1 → subcopy → CTAs → trust */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center"
        >
          {/* Columna izquierda — texto */}
          <div>
            {/* Eyebrow pill */}
            <motion.div variants={staggerItem}>
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase mb-6"
                style={{
                  backgroundColor: "var(--color-lilac)",
                  color: "var(--color-primary)",
                }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
                Cirugía Bariátrica · Trujillo, Perú
              </span>
            </motion.div>

            {/* H1 — del brief */}
            <motion.h1
              variants={staggerItem}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Transforma tu salud.{" "}
              <span className="italic">Recupera tu vida.</span>
            </motion.h1>

            {/* Subcopy */}
            <motion.p
              variants={staggerItem}
              className="mt-6 text-lg leading-relaxed max-w-lg"
              style={{ color: "var(--color-warm-text)" }}
            >
              Cirugía bariátrica y laparoscópica avanzada con un enfoque
              integral, seguro y personalizado.
            </motion.p>

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
                  boxShadow: "0 8px 24px rgba(120,214,75,0.30)",
                }}
              >
                <Calendar className="h-5 w-5" aria-hidden="true" />
                Agenda tu evaluación
              </motion.a>

              <motion.a
                href={CLIENT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                {...scaleOnHover}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 px-7 py-4 text-base font-semibold transition-colors"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                  backgroundColor: "transparent",
                }}
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Escríbenos por WhatsApp
              </motion.a>
            </motion.div>

            {/* Trust items */}
            <motion.ul
              variants={staggerItem}
              className="mt-9 space-y-2.5"
              aria-label="Credenciales del doctor"
            >
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className="h-1 w-6 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium" style={{ color: "var(--color-warm-text)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Columna derecha — foto con parallax */}
          <motion.div
            variants={staggerItem}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Foto principal con parallax */}
              <motion.div
                style={{ y: shouldReduce ? 0 : imageY }}
                className="relative w-72 sm:w-80 lg:w-[540px] aspect-[4/3] rounded-3xl overflow-hidden"
              >
                <Image
                  src="/images/doctor-quirofano.jpg"
                  alt="Dr. Víctor Augusto Salazar Tantaleán en quirófano con equipo laparoscópico de última generación, Trujillo"
                  fill
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 400px"
                  className="object-cover object-center"
                />
                {/* Overlay gradiente vino sutil */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(108,29,69,0.35) 0%, transparent 50%)",
                  }}
                  aria-hidden="true"
                />
              </motion.div>

              {/* Card flotante — credencial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-5 -left-5 rounded-2xl p-4 shadow-2xl max-w-[200px]"
                style={{ backgroundColor: "var(--color-cream)", border: "1px solid var(--color-border)" }}
              >
                <p className="text-xs font-bold leading-tight" style={{ color: "var(--color-primary)" }}>
                  Dr. Víctor A. Salazar T.
                </p>
                <p className="text-[10px] mt-1 leading-snug" style={{ color: "var(--color-warm-text)" }}>
                  Cirujano Bariatra<br />Director Médico Exilus<br />Director HRDT
                </p>
                <div className="mt-2 flex items-center gap-1.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: "var(--color-cta)" }}
                    aria-hidden="true"
                  />
                  <span className="text-[10px] font-semibold" style={{ color: "var(--color-cta-foreground, #1a3a0a)" }}>
                    Disponible en Trujillo
                  </span>
                </div>
              </motion.div>

              {/* Badge años */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -top-4 -right-4 flex h-[68px] w-[68px] flex-col items-center justify-center rounded-full shadow-xl"
                style={{
                  backgroundColor: "var(--color-accent)",
                  boxShadow: "0 8px 24px rgba(155,58,92,0.35)",
                }}
              >
                <span className="text-xl font-bold leading-none text-white">+16</span>
                <span className="text-[8px] font-semibold text-white/80 text-center leading-tight mt-0.5">
                  años
                </span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
