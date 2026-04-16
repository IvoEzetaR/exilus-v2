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
} from "@/lib/design-system";

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

  // Subtle scale parallax on background image
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduce ? [1, 1] : [1, 1.08]
  );

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative flex items-center min-h-screen overflow-hidden"
      aria-label="Sección principal"
    >
      {/* Full-viewport background image with parallax scale */}
      <motion.div
        style={{ scale: shouldReduce ? 1 : imageScale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/doctor-terno.jpg"
          alt="Dr. Víctor Augusto Salazar Tantaleán, cirujano bariatra en Trujillo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
          quality={90}
        />
      </motion.div>

      {/* Dark overlay — left-heavy for text readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: `
            linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.52) 45%, rgba(0,0,0,0.22) 100%),
            linear-gradient(to top, rgba(108,29,69,0.50) 0%, transparent 40%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6"
        style={{
          paddingTop: "calc(40px + 64px + 3rem)",
          paddingBottom: "5rem",
        }}
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          {/* Eyebrow pill — glassmorphism */}
          <motion.div variants={staggerItem}>
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase mb-6"
              style={{
                backgroundColor: "rgba(223,208,241,0.15)",
                color: "#F5EBDC",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(245,235,220,0.12)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--color-cta)" }}
              />
              Cirugía Bariátrica · Trujillo, Perú
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={staggerItem}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-white"
          >
            Transforma tu salud.{" "}
            <span className="italic" style={{ color: "var(--color-cream)" }}>
              Recupera tu vida.
            </span>
          </motion.h1>

          {/* Subcopy */}
          <motion.p
            variants={staggerItem}
            className="mt-6 text-lg leading-relaxed max-w-lg"
            style={{ color: "rgba(245,235,220,0.85)" }}
          >
            Cirugía bariátrica y laparoscópica avanzada con un enfoque
            integral, seguro y personalizado.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            {/* Primary CTA — green */}
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

            {/* Secondary CTA — cream outlined for dark bg */}
            <motion.a
              href={CLIENT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              {...scaleOnHover}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 px-7 py-4 text-base font-semibold transition-colors"
              style={{
                borderColor: "rgba(245,235,220,0.40)",
                color: "#F5EBDC",
                backgroundColor: "rgba(245,235,220,0.06)",
                backdropFilter: "blur(4px)",
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
                  style={{ backgroundColor: "var(--color-cta)" }}
                  aria-hidden="true"
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "rgba(245,235,220,0.80)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Floating credential card — glassmorphism, bottom-right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-12 right-4 sm:right-6 lg:right-8 rounded-2xl p-4 shadow-2xl max-w-[220px] hidden sm:block"
          style={{
            backgroundColor: "rgba(245,235,220,0.10)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(245,235,220,0.15)",
          }}
        >
          <p className="text-xs font-bold leading-tight text-white">
            Dr. Víctor A. Salazar T.
          </p>
          <p
            className="text-[10px] mt-1 leading-snug"
            style={{ color: "rgba(245,235,220,0.65)" }}
          >
            Cirujano Bariatra
            <br />
            Director Médico Exilus
            <br />
            Director HRDT
          </p>
          <div className="mt-2 flex items-center gap-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: "var(--color-cta)" }}
              aria-hidden="true"
            />
            <span
              className="text-[10px] font-semibold"
              style={{ color: "var(--color-cta)" }}
            >
              Disponible en Trujillo
            </span>
          </div>
        </motion.div>

        {/* Badge años — top-right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-[calc(40px+64px+2rem)] right-4 sm:right-6 lg:right-8 flex h-[72px] w-[72px] flex-col items-center justify-center rounded-full shadow-xl hidden sm:flex"
          style={{
            backgroundColor: "rgba(155,58,92,0.80)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 8px 24px rgba(155,58,92,0.40)",
          }}
        >
          <span className="text-xl font-bold leading-none text-white">+16</span>
          <span className="text-[8px] font-semibold text-white/80 text-center leading-tight mt-0.5">
            años
          </span>
        </motion.div>
      </div>
    </section>
  );
}
