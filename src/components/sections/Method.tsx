"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Calendar, Activity, HeartPulse } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { useInView } from "framer-motion";
import { CLIENT } from "@/lib/client-data";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  fadeInRight,
  scaleOnHover,
  VIEWPORT_ONCE,
  imageSwap,
  EASE_OUT_EXPO,
} from "@/lib/design-system";

const pillars = [
  {
    number: "01",
    title: "Excelencia quirúrgica",
    description:
      "Técnicas laparoscópicas avanzadas con el más alto nivel de precisión y seguridad.",
  },
  {
    number: "02",
    title: "Acompañamiento integral",
    description:
      "Equipo multidisciplinario — cirugía, nutrición, psicología — presente en cada etapa.",
  },
  {
    number: "03",
    title: "Resultados sostenibles",
    description:
      "El proceso no termina en el quirófano. El seguimiento continuo garantiza cambios duraderos.",
  },
];

const differentials = [
  "Enfoque multidisciplinario real",
  "Tecnología mínimamente invasiva",
  "Seguimiento continuo postoperatorio",
  "Atención personalizada",
  "Equipo altamente especializado",
];

type Step = {
  step: string;
  title: string;
  description: string;
  image?: string;
};

const steps: Step[] = [
  {
    step: "1",
    title: "Evaluación inicial",
    description:
      "Consulta médica personalizada para conocer tu historia clínica, objetivos y condición actual.",
    image: "/images/paso-evaluacion-inicial.jpg",
  },
  {
    step: "2",
    title: "Estudios preoperatorios",
    description:
      "Exámenes de laboratorio e imagen necesarios para planificar el procedimiento de forma segura.",
    image: "/images/paso-cirugia.jpg",
  },
  {
    step: "3",
    title: "Evaluación multidisciplinaria",
    description:
      "Revisión conjunta con el equipo de nutrición, psicología y medicina interna.",
    image: "/images/paso-evaluacion-multi.jpg",
  },
  {
    step: "4",
    title: "Cirugía",
    description:
      "Intervención programada en clínica acreditada, con los más altos estándares de seguridad.",
    image: "/images/doctor-quirofano.jpg",
  },
  {
    step: "5",
    title: "Seguimiento postoperatorio",
    description:
      "Control continuo para asegurar tu recuperación y el mantenimiento de los resultados a largo plazo.",
    image: "/images/paso-seguimiento.jpg",
  },
];

/* ─── Step Card — horizontal layout with glass effect ─── */
function StepCard({ s, accent }: { s: Step; accent?: boolean }) {
  return (
    <div
      className="rounded-xl sm:rounded-2xl overflow-hidden shadow-sm"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.55)",
        backdropFilter: "blur(14px) saturate(160%)",
        WebkitBackdropFilter: "blur(14px) saturate(160%)",
        border: accent
          ? "1.5px solid rgba(180, 100, 120, 0.45)"
          : "1px solid var(--color-border)",
      }}
    >
      <div className="flex sm:flex-row flex-col">
        {/* Image */}
        {s.image && (
          <div className="relative h-20 sm:h-auto sm:min-h-[110px] sm:w-[38%] flex-shrink-0 overflow-hidden">
            <Image
              src={s.image}
              alt={s.title}
              fill
              sizes="(max-width: 640px) 50vw, 200px"
              className="object-cover"
            />
          </div>
        )}
        {/* Content */}
        <div className="p-2 sm:p-3 lg:p-3.5 flex-1 flex flex-col justify-center min-w-0">
          <h3
            className="font-serif text-[11px] sm:text-sm lg:text-base font-normal mb-0.5 sm:mb-1 leading-snug"
            style={{ color: "var(--color-primary)" }}
          >
            {s.title}
          </h3>
          <p
            className="text-[9px] sm:text-[11px] lg:text-xs leading-relaxed"
            style={{ color: "var(--color-warm-text)" }}
          >
            {s.description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Step 5 card — with icons row ─── */
function Step5Card({ s }: { s: Step }) {
  return (
    <div
      className="rounded-xl sm:rounded-2xl overflow-hidden shadow-sm"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.55)",
        backdropFilter: "blur(14px) saturate(160%)",
        WebkitBackdropFilter: "blur(14px) saturate(160%)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div className="flex sm:flex-row flex-col">
        {/* Image */}
        {s.image && (
          <div className="relative h-20 sm:h-auto sm:min-h-[110px] sm:w-[38%] flex-shrink-0 overflow-hidden">
            <Image
              src={s.image}
              alt={s.title}
              fill
              sizes="(max-width: 640px) 50vw, 200px"
              className="object-cover"
            />
          </div>
        )}
        {/* Content */}
        <div className="p-2 sm:p-3 lg:p-3.5 flex-1 flex flex-col justify-center min-w-0">
          <h3
            className="font-serif text-[11px] sm:text-sm lg:text-base font-normal mb-0.5 sm:mb-1 leading-snug"
            style={{ color: "var(--color-primary)" }}
          >
            {s.title}
          </h3>
          <p
            className="text-[9px] sm:text-[11px] lg:text-xs leading-relaxed mb-2 sm:mb-3"
            style={{ color: "var(--color-warm-text)" }}
          >
            {s.description}
          </p>
          {/* Icons row */}
          <div className="flex gap-2">
            <div
              className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-md"
              style={{ backgroundColor: "var(--color-lilac)" }}
            >
              <Activity className="h-3 w-3 sm:h-3.5 sm:w-3.5" style={{ color: "var(--color-primary)" }} />
            </div>
            <div
              className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-md"
              style={{ backgroundColor: "var(--color-lilac)" }}
            >
              <HeartPulse className="h-3 w-3 sm:h-3.5 sm:w-3.5" style={{ color: "var(--color-primary)" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Method() {
  return (
    <section
      id="proceso"
      aria-label="Método Exilus y proceso del paciente"
    >
      {/* Bloque 1 — Pilares y diferenciales (fondo morado invertido) */}
      <div
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Izquierda — Intro + pilares */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
            >
              <motion.p
                variants={staggerItem}
                className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-3"
                style={{ color: "rgba(245,235,220,0.60)" }}
              >
                Nuestro enfoque
              </motion.p>
              <motion.h2
                variants={staggerItem}
                className="font-serif text-4xl sm:text-5xl font-light leading-tight tracking-tight"
                style={{ color: "var(--color-cream)" }}
              >
                El método Exilus
              </motion.h2>
              <motion.p
                variants={staggerItem}
                className="mt-5 text-base leading-relaxed"
                style={{ color: "rgba(245,235,220,0.75)" }}
              >
                No somos un consultorio más. Somos un equipo especializado que te acompaña
                en cada paso del proceso, desde la evaluación inicial hasta el seguimiento
                a largo plazo.
              </motion.p>

              {/* 3 pilares */}
              <motion.div variants={staggerItem} className="mt-10 space-y-6">
                {pillars.map((p) => (
                  <div key={p.number} className="flex gap-5">
                    <span
                      className="font-serif text-sm font-light flex-shrink-0 mt-0.5"
                      style={{ color: "rgba(245,235,220,0.35)" }}
                    >
                      {p.number}
                    </span>
                    <div>
                      <p
                        className="font-serif text-lg font-normal mb-1"
                        style={{ color: "var(--color-cream)" }}
                      >
                        {p.title}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(245,235,220,0.70)" }}
                      >
                        {p.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Derecha — ¿Por qué Exilus? */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
            >
              <p
                className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-6"
                style={{ color: "rgba(245,235,220,0.60)" }}
              >
                ¿Por qué elegirnos?
              </p>
              <ul className="space-y-3">
                {differentials.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 rounded-xl px-6 py-4"
                    style={{ backgroundColor: "rgba(245,235,220,0.08)" }}
                  >
                    <span
                      className="font-serif text-lg font-light flex-shrink-0 w-6 text-right"
                      style={{ color: "rgba(245,235,220,0.30)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: "var(--color-cream)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          Bloque 2 — Ruta orgánica split-sticky editorial
          Diseño: split-screen sticky desktop, curva S SVG con pathLength
          scroll-driven, tarjetas glass con outline numbers XL, hover dim.
          ═══════════════════════════════════════════════════════════════ */}
      <ProcessJourney />
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   ProcessJourney — Bloque 2 refactorizado
   Extrae toda la lógica para mantener Method() limpio.
──────────────────────────────────────────────────────────────────────────────*/

/* Clip-path blob orgánico — SVG viewBox 100×100 */
const BLOB_CLIP =
  "polygon(8% 0%, 92% 3%, 100% 14%, 97% 82%, 88% 100%, 12% 97%, 0% 86%, 3% 18%)";

/* Step dot positions en el SVG 100-wide × 520-tall (5 puntos equidistantes) */
const DOT_Y = [52, 152, 252, 352, 452];

/* La curva S que conecta los 5 dots — path relativo en viewBox "0 0 100 520" */
const S_PATH =
  "M 50 52 C 80 100, 20 140, 50 152 C 80 164, 80 228, 50 252 C 20 276, 20 328, 50 352 C 80 376, 80 428, 50 452";

/* ── StepTrigger — detecta cuándo una tarjeta entra al viewport ── */
function StepTrigger({
  index,
  onActivate,
  children,
}: {
  index: number;
  onActivate: (i: number) => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { amount: 0.55 });

  // useEffect para evitar setState durante render (React warning)
  useEffect(() => {
    if (isInView) onActivate(index);
  }, [isInView, index, onActivate]);

  return <li ref={ref}>{children}</li>;
}

/* ── ProcessJourney — componente principal del Bloque 2 ── */
function ProcessJourney() {
  const shouldReduce = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  /* Estable para pasar a StepTrigger sin re-crear en cada render */
  const handleActivate = useCallback((i: number) => setActiveStep(i), []);

  /* Referencia a la sección para scroll tracking */
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  /* pathLength crece de 0 a 1 al scrollear dentro de la sección */
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={sectionRef}
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="text-center mb-16 lg:mb-20"
        >
          <p
            className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-3"
            style={{ color: "rgba(108,29,69,0.55)" }}
          >
            Paso a paso
          </p>
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Tu proceso, paso a paso
          </h2>
          <p
            className="mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--color-warm-text)" }}
          >
            Desde la primera consulta hasta tu seguimiento a largo plazo, cada etapa está
            pensada para que te sientas acompañado y seguro.
          </p>
        </motion.div>

        {/* ── Layout split: columna izquierda sticky + columna derecha scroll ── */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-24 items-start">

          {/* ── COLUMNA IZQUIERDA — imagen sticky (solo desktop) ── */}
          <div className="hidden lg:block lg:sticky lg:top-28 self-start">
            <div className="relative w-full aspect-[4/5] overflow-hidden"
              style={{ clipPath: BLOB_CLIP }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  variants={shouldReduce ? undefined : imageSwap}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <Image
                    src={steps[activeStep].image ?? "/images/paso-evaluacion-inicial.jpg"}
                    alt={steps[activeStep].title}
                    fill
                    sizes="50vw"
                    className="object-cover"
                    priority={activeStep === 0}
                  />
                  {/* Subtle vino overlay para unidad editorial */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(108,29,69,0.12) 0%, transparent 60%)",
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Step counter badge — float sobre imagen */}
              <div
                className="absolute bottom-6 left-6 z-10 flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  backgroundColor: "rgba(245,235,220,0.85)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(108,29,69,0.15)",
                }}
              >
                <span
                  className="font-serif text-lg font-light tabular-nums"
                  style={{ color: "var(--color-primary)" }}
                >
                  {String(activeStep + 1).padStart(2, "0")}
                </span>
                <span className="font-sans text-xs" style={{ color: "var(--color-warm-text)" }}>
                  / 05
                </span>
                <span
                  className="font-sans text-xs font-medium ml-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  {steps[activeStep].title}
                </span>
              </div>
            </div>
          </div>

          {/* ── COLUMNA DERECHA — tarjetas + curva S ── */}
          <div className="relative">

            {/* ── Curva S SVG — visible en todas las resoluciones ── */}
            <div
              className="absolute top-0 bottom-0 w-16 pointer-events-none select-none"
              style={{
                /* Mobile: a la izquierda; desktop: centrado entre cards */
                left: "0",
              }}
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 100 520"
                preserveAspectRatio="none"
                className="w-full h-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="stepGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6C1D45" />
                    <stop offset="100%" stopColor="#DFD0F1" />
                  </linearGradient>
                </defs>

                {/* Track (line estática background) */}
                <path
                  d={S_PATH}
                  stroke="rgba(108,29,69,0.12)"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Línea animada con pathLength */}
                {!shouldReduce && (
                  <motion.path
                    d={S_PATH}
                    stroke="url(#stepGradient)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                    style={{ pathLength }}
                  />
                )}
                {shouldReduce && (
                  <path
                    d={S_PATH}
                    stroke="url(#stepGradient)"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                )}

                {/* Step dots — CSS transition para compatibilidad SVG */}
                {DOT_Y.map((cy, i) => (
                  <circle
                    key={i}
                    cx="50"
                    cy={cy}
                    r={activeStep === i ? 10 : 6}
                    fill={activeStep === i ? "#6C1D45" : "#F5EBDC"}
                    stroke={activeStep === i ? "#6C1D45" : "rgba(108,29,69,0.35)"}
                    strokeWidth="1.5"
                    style={{
                      transition: shouldReduce
                        ? "none"
                        : "r 0.35s cubic-bezier(0.22,1,0.36,1), fill 0.35s cubic-bezier(0.22,1,0.36,1)",
                    }}
                  />
                ))}
              </svg>
            </div>

            {/* ── Lista de tarjetas ── */}
            <ol
              aria-label="Pasos del proceso"
              className="space-y-6 pl-20 lg:pl-20"
            >
              {steps.map((s, idx) => (
                <StepTrigger key={s.step} index={idx} onActivate={handleActivate}>

                  {/* ── Glass card + outline number ── */}
                  <motion.div
                    onHoverStart={() => setHoveredCard(idx)}
                    onHoverEnd={() => setHoveredCard(null)}
                    animate={
                      shouldReduce
                        ? undefined
                        : hoveredCard !== null && hoveredCard !== idx
                        ? { opacity: 0.35, filter: "saturate(0.85)" }
                        : { opacity: 1, filter: "saturate(1)" }
                    }
                    whileHover={shouldReduce ? undefined : { scale: 1.02 }}
                    transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                    className="relative overflow-hidden rounded-[1.25rem] cursor-default"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.55)",
                      backdropFilter: "blur(16px) saturate(170%)",
                      WebkitBackdropFilter: "blur(16px) saturate(170%)",
                      border: "1px solid rgba(108,29,69,0.12)",
                      boxShadow:
                        "inset 0 1px 0 rgba(255,255,255,0.5), 0 4px 24px rgba(108,29,69,0.06)",
                    }}
                  >
                    {/* Outline number XL — absolute behind title */}
                    <span
                      aria-hidden="true"
                      className="absolute font-serif select-none pointer-events-none"
                      style={{
                        top: "-0.5rem",
                        left: "1rem",
                        fontSize: "clamp(7rem, 12vw, 11rem)",
                        lineHeight: 0.85,
                        fontWeight: 400,
                        color: "transparent",
                        WebkitTextStroke: "1.5px var(--color-primary)",
                        opacity: 0.22,
                        zIndex: 0,
                      }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <div className="relative z-10 p-6 sm:p-8">
                      {/* Mobile-only image (aspect 4/3) con clip orgánico */}
                      {s.image && (
                        <div
                          className="lg:hidden relative w-full mb-5 overflow-hidden"
                          style={{
                            aspectRatio: "4/3",
                            clipPath: BLOB_CLIP,
                          }}
                        >
                          <Image
                            src={s.image}
                            alt={s.title}
                            fill
                            sizes="(max-width: 768px) 90vw, 50vw"
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}

                      {/* Header: título + línea quirúrgica */}
                      <div className="mb-3">
                        <h3
                          className="font-serif text-2xl lg:text-3xl font-light leading-snug"
                          style={{ color: "var(--color-primary)" }}
                        >
                          {s.title}
                        </h3>
                        {/* Línea quirúrgica + punto de enfoque */}
                        <div className="flex items-center gap-2 mt-2">
                          <div
                            className="h-px w-12 flex-shrink-0"
                            style={{ backgroundColor: "var(--color-primary)" }}
                          />
                          <div
                            className="h-1 w-1 rounded-full flex-shrink-0"
                            style={{ backgroundColor: "var(--color-lilac)" }}
                          />
                        </div>
                      </div>

                      {/* Cuerpo */}
                      <p
                        className="font-sans text-sm leading-relaxed"
                        style={{ color: "var(--color-warm-text)" }}
                      >
                        {s.description}
                      </p>

                      {/* Paso 5 — iconos extra (seguimiento) */}
                      {idx === 4 && (
                        <div className="flex gap-2 mt-4">
                          <div
                            className="flex h-7 w-7 items-center justify-center rounded-lg"
                            style={{ backgroundColor: "var(--color-lilac)" }}
                          >
                            <Activity
                              className="h-3.5 w-3.5"
                              style={{ color: "var(--color-primary)" }}
                            />
                          </div>
                          <div
                            className="flex h-7 w-7 items-center justify-center rounded-lg"
                            style={{ backgroundColor: "var(--color-lilac)" }}
                          >
                            <HeartPulse
                              className="h-3.5 w-3.5"
                              style={{ color: "var(--color-primary)" }}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </StepTrigger>
              ))}
            </ol>
          </div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-16 text-center"
        >
          <motion.a
            href={CLIENT.booking}
            target="_blank"
            rel="noopener noreferrer"
            {...scaleOnHover}
            className="inline-flex items-center gap-2 rounded-xl px-8 py-4 text-base font-semibold"
            style={{
              backgroundColor: "var(--color-cta)",
              color: "#1a3a0a",
              boxShadow: "0 8px 24px rgba(120,214,75,0.28)",
            }}
          >
            <Calendar className="h-5 w-5" aria-hidden="true" />
            Iniciar evaluación
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
