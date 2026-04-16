"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CLIENT } from "@/lib/client-data";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  VIEWPORT_ONCE,
} from "@/lib/design-system";

/* ─── Data ─── */
const services = [
  {
    number: "01",
    tag: "Bariátrica",
    title: "Cirugía Bariátrica y Metabólica",
    description:
      "Procedimientos quirúrgicos avanzados para el tratamiento de la obesidad y enfermedades metabólicas asociadas.",
    bgImage: "/images/doctor-quirofano.jpg",
    procedures: [
      "Manga gástrica",
      "Bypass gástrico",
      "Bipartición intestinal",
      "Cirugía revisional",
    ],
    forWhom:
      "Pacientes con obesidad, diabetes tipo 2, hipertensión o síndrome metabólico.",
  },
  {
    number: "02",
    tag: "Obesidad",
    title: "Manejo Integral del Sobrepeso y Obesidad",
    description:
      "Abordaje multidisciplinario personalizado que integra evaluación médica, nutricional y psicológica.",
    bgImage: "/images/doctor-consulta.jpg",
    procedures: [
      "Evaluación médica integral",
      "Soporte nutricional",
      "Acompañamiento psicológico",
      "Intervención quirúrgica (si aplica)",
    ],
    forWhom:
      "Quienes buscan un tratamiento completo y sostenido del sobrepeso.",
  },
  {
    number: "03",
    tag: "Laparoscópica",
    title: "Cirugía Laparoscópica Avanzada",
    description:
      "Técnicas mínimamente invasivas que reducen riesgos y aceleran la recuperación postoperatoria.",
    bgImage: "/images/doctor-scrubs.jpg",
    procedures: [
      "Colecistectomía (vesícula)",
      "Apendicectomía",
      "Hernias abdominales",
      "Cirugía de colon e intestino",
    ],
    forWhom:
      "Patologías abdominales que requieren intervención con mínima invasión.",
  },
  {
    number: "04",
    tag: "Digestiva",
    title: "Cirugía Digestiva Especializada",
    description:
      "Tratamiento de enfermedades del sistema digestivo con tecnología de última generación.",
    bgImage: "/images/doctor-scrubs-2.jpg",
    procedures: [
      "Reflujo gastroesofágico",
      "Enfermedades gástricas",
      "Patología hepática",
      "Cirugía pancreática",
    ],
    forWhom:
      "Pacientes con patologías del tracto digestivo superior e inferior.",
  },
  {
    number: "05",
    tag: "Proctología",
    title: "Proctología y Cirugía Anorrectal",
    description:
      "Diagnóstico y tratamiento especializado de enfermedades del colon, recto y ano.",
    bgImage: "/images/doctor-terno.jpg",
    procedures: [
      "Hemorroides",
      "Fisuras anales",
      "Fístulas",
      "Abscesos perianales",
    ],
    forWhom:
      "Enfermedades anorrectales que requieren evaluación o corrección quirúrgica.",
  },
];

/* ─── Glassmorphism Card ─── */
function GlassCard({ s }: { s: (typeof services)[0] }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group relative overflow-hidden rounded-2xl sm:rounded-[28px] min-h-[360px] sm:min-h-[420px] lg:min-h-[500px] cursor-default flex flex-col justify-end"
    >
      {/* Background image with zoom on hover */}
      <div className="absolute inset-0 overflow-hidden rounded-[28px]">
        <div className="absolute inset-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
          <Image
            src={s.bgImage}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 rounded-[28px]"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0.15) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Number watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-3 right-4 sm:top-6 sm:right-8 select-none font-serif font-light leading-none opacity-[0.12]"
        style={{ fontSize: "clamp(4rem, 12vw, 8rem)", color: "#fff", letterSpacing: "-0.06em" }}
      >
        {s.number}
      </div>

      {/* Glass panel */}
      <div className="relative p-3 sm:p-5 lg:p-7">
        <div
          className="rounded-xl sm:rounded-2xl p-3 sm:p-5 lg:p-6 transition-all duration-500 group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          style={{
            backgroundColor: "rgba(245, 235, 220, 0.10)",
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            border: "1px solid rgba(245, 235, 220, 0.15)",
          }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60">
              {s.tag}
            </span>
            <span className="font-serif text-sm tabular-nums text-white/35">
              — {s.number}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-serif text-lg sm:text-[22px] lg:text-[24px] font-normal leading-[1.15] text-white mb-1.5 sm:mb-2.5"
            style={{ letterSpacing: "-0.015em" }}
          >
            {s.title}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-[13px] leading-relaxed text-white/75 mb-3 sm:mb-4">
            {s.description}
          </p>

          {/* Procedure chips */}
          <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-3 sm:mb-4">
            {s.procedures.map((p) => (
              <span
                key={p}
                className="text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full transition-colors duration-300 hover:bg-white/20"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.10)",
                  color: "rgba(255, 255, 255, 0.88)",
                  border: "1px solid rgba(255, 255, 255, 0.10)",
                }}
              >
                {p}
              </span>
            ))}
          </div>

          {/* Ideal para */}
          <p className="text-[10px] sm:text-[11px] text-white/50 mb-3 sm:mb-4 leading-relaxed">
            <span className="font-semibold text-white/65 uppercase tracking-wider text-[9px] sm:text-[10px]">
              Ideal para:{" "}
            </span>
            {s.forWhom}
          </p>

          {/* CTA */}
          <a
            href={CLIENT.booking}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-semibold text-white transition-all duration-300 hover:gap-3"
            aria-label={`Agenda tu evaluación para ${s.title}`}
          >
            Agenda tu evaluación
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}

/* ─── Section ─── */
export default function Services() {
  return (
    <section
      id="servicios"
      className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--color-cream)" }}
      aria-label="Servicios de Exilus"
    >
      {/* Blob decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "var(--color-lilac)" }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="max-w-2xl mb-14 sm:mb-16"
        >
          <p
            className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-4 inline-flex items-center gap-2"
            style={{ color: "var(--color-primary)" }}
          >
            <span
              className="h-px w-6"
              style={{ backgroundColor: "var(--color-primary)" }}
              aria-hidden="true"
            />
            Especialidades
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.05] tracking-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Cinco especialidades.
            <br />
            <em
              className="italic"
              style={{ color: "var(--color-primary-dark)" }}
            >
              Un solo equipo.
            </em>
          </h2>
          <p
            className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl"
            style={{ color: "var(--color-warm-text)" }}
          >
            Atención quirúrgica especializada con tecnología de vanguardia y un
            equipo multidisciplinario comprometido con tu bienestar a largo
            plazo.
          </p>
        </motion.div>

        {/* Cards grid — 3 cols top, 2 centered bottom */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-6"
        >
          {services.map((s, idx) => (
            <div
              key={s.number}
              className={`lg:col-span-2 ${
                idx === 3 ? "lg:col-start-2" : ""
              }`}
            >
              <GlassCard s={s} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
