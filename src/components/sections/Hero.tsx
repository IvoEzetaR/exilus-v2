"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle, MapPin, Award, Sparkles } from "lucide-react";
import Image from "next/image";
import { CLIENT } from "@/lib/client-data";
import { scaleOnHover, EASE_OUT_EXPO } from "@/lib/design-system";

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Sección principal"
      className="bg-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-12 lg:pb-20">

        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease: EASE_OUT_EXPO }}
          className="mb-5 lg:mb-6"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase"
            style={{
              backgroundColor: "var(--color-lilac)",
              color: "var(--color-primary)",
            }}
          >
            <MapPin className="h-3 w-3" aria-hidden="true" />
            Cirugía Bariátrica · Trujillo, Perú
          </span>
        </motion.div>

        {/* BENTO GRID — 12 cols, 3 rows en desktop */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4">

          {/* Tile 1 — H1 hero card (cream deep, cols 1-8, row 1) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_EXPO }}
            className="col-span-12 lg:col-span-8 lg:col-start-1 lg:row-start-1 rounded-3xl p-7 sm:p-10 lg:p-12 relative overflow-hidden"
            style={{ backgroundColor: "#FDF7F0" }}
          >
            {/* Decorative corner accent */}
            <div
              className="absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-25 blur-2xl"
              style={{ backgroundColor: "var(--color-lilac)" }}
              aria-hidden="true"
            />

            <h1
              className="relative font-serif text-[2.6rem] sm:text-6xl lg:text-[4.4rem] xl:text-[5rem] font-light leading-[1.02] tracking-tight"
              style={{ color: "var(--color-primary)" }}
            >
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.28, ease: EASE_OUT_EXPO }}
                  className="block"
                >
                  Transforma tu salud.
                </motion.span>
              </span>
              <span className="block overflow-hidden mt-1">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.42, ease: EASE_OUT_EXPO }}
                  className="block italic"
                  style={{ color: "var(--color-accent)" }}
                >
                  Recupera tu vida.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: EASE_OUT_EXPO }}
              className="relative mt-6 lg:mt-8 text-base lg:text-lg max-w-md leading-relaxed"
              style={{ color: "var(--color-warm-text)" }}
            >
              Cirugía bariátrica y laparoscópica avanzada con un enfoque
              integral, seguro y personalizado.
            </motion.p>
          </motion.div>

          {/* Tile 2 — Photo (wine bg, cols 9-12, row-span 3) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.22, ease: EASE_OUT_EXPO }}
            className="col-span-12 lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:row-span-3 rounded-3xl overflow-hidden relative min-h-[380px] sm:min-h-[440px] lg:min-h-[640px]"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            <Image
              src="/images/doctor-terno.jpg"
              alt="Dr. Víctor Augusto Salazar Tantaleán, cirujano bariatra en Trujillo"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover object-top"
              quality={90}
            />

            {/* Wine gradient para legibilidad de credential */}
            <div
              className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(108,29,69,0.92) 0%, rgba(108,29,69,0.55) 40%, transparent 100%)",
              }}
              aria-hidden="true"
            />

            {/* Credential overlay */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85, ease: EASE_OUT_EXPO }}
              className="absolute bottom-5 left-5 right-5 z-10"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 mb-3"
                style={{ backgroundColor: "rgba(245,235,220,0.18)", backdropFilter: "blur(6px)" }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "var(--color-cta)" }}
                  aria-hidden="true"
                />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-white/90">
                  Disponible · Consulta 24h
                </span>
              </div>
              <p className="text-white font-bold text-base leading-tight">
                Dr. Víctor A. Salazar T.
              </p>
              <p className="text-white/80 text-xs mt-0.5 leading-snug">
                Cirujano Bariatra · Director HRDT
                <br />
                Clínica Sanna Sánchez Ferrer
              </p>
            </motion.div>
          </motion.div>

          {/* Tile 3 — Stat +16 años (lilac, cols 1-4, row 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE_OUT_EXPO }}
            className="col-span-6 lg:col-span-4 lg:col-start-1 lg:row-start-2 rounded-3xl p-6 lg:p-8 flex flex-col justify-between min-h-[180px] lg:min-h-[220px]"
            style={{ backgroundColor: "var(--color-lilac)" }}
          >
            <Award
              className="h-6 w-6"
              style={{ color: "var(--color-primary)" }}
              aria-hidden="true"
            />
            <div>
              <p
                className="font-serif text-5xl sm:text-6xl lg:text-[4.5rem] font-light leading-none tracking-tight"
                style={{ color: "var(--color-primary)" }}
              >
                +16
              </p>
              <p
                className="mt-2 text-xs sm:text-sm font-medium leading-snug"
                style={{ color: "var(--color-primary-dark)" }}
              >
                años en cirugía
                <br />
                abdominal avanzada
              </p>
            </div>
          </motion.div>

          {/* Tile 4 — Pioneer card (wine/vino, cols 5-8, row 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.52, ease: EASE_OUT_EXPO }}
            className="col-span-6 lg:col-span-4 lg:col-start-5 lg:row-start-2 rounded-3xl p-6 lg:p-8 flex flex-col justify-between min-h-[180px] lg:min-h-[220px] relative overflow-hidden"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            <Sparkles className="h-6 w-6 text-white/90" aria-hidden="true" />
            <div>
              <p className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-light leading-[1.05] tracking-tight text-white">
                Pionero
                <span className="block italic text-white/70 text-xl sm:text-2xl lg:text-[1.5rem] mt-1">
                  en el norte del Perú
                </span>
              </p>
              <p className="mt-3 text-xs sm:text-sm text-white/70 leading-snug">
                10 años en cirugía bariátrica y metabólica
              </p>
            </div>
          </motion.div>

          {/* Tile 5 — CTA card (green, cols 1-8, row 3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.64, ease: EASE_OUT_EXPO }}
            className="col-span-12 lg:col-span-8 lg:col-start-1 lg:row-start-3 rounded-3xl p-6 lg:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
            style={{ backgroundColor: "var(--color-cta)" }}
          >
            <div className="flex-1">
              <p
                className="font-serif text-2xl lg:text-3xl font-normal leading-tight"
                style={{ color: "#0f2e07" }}
              >
                Agenda tu evaluación
              </p>
              <p
                className="mt-1.5 text-sm font-medium"
                style={{ color: "#1a4a0a" }}
              >
                Presencial en Trujillo o virtual · Respuesta en menos de 24h
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <motion.a
                href={CLIENT.booking}
                target="_blank"
                rel="noopener noreferrer"
                {...scaleOnHover}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "white",
                  boxShadow: "0 8px 20px rgba(108,29,69,0.25)",
                }}
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Reservar ahora
              </motion.a>
              <motion.a
                href={CLIENT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                {...scaleOnHover}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold border-2"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                  backgroundColor: "transparent",
                }}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
