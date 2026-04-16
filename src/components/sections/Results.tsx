"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  staggerContainer,
  staggerItem,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  VIEWPORT_ONCE,
} from "@/lib/design-system";

/* ─── Count-up hook ─── */
function useCountUp(target: number, duration = 1800, inView = false) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return count;
}

/* ─── Data ─── */
const stats = [
  {
    prefix: "+",
    target: 16,
    suffix: "",
    unit: "años",
    label: "de experiencia quirúrgica",
    note: "Cirugía abdominal laparoscópica avanzada",
  },
  {
    prefix: "+",
    target: 10,
    suffix: "",
    unit: "años",
    label: "en cirugía bariátrica",
    note: "Especialización exclusiva en obesidad y metabolismo",
  },
  {
    prefix: "",
    target: 1,
    suffix: "°",
    unit: "Norte",
    label: "Pionero en el norte del Perú",
    note: "Primera clínica de cirugía bariátrica en la región",
  },
];

const marqueeImages = [
  { src: "/images/doctor-terno.jpg", alt: "Dr. Salazar" },
  { src: "/images/paso-evaluacion-inicial.jpg", alt: "Evaluación inicial" },
  { src: "/images/doctor-quirofano.jpg", alt: "En quirófano" },
  { src: "/images/paso-evaluacion-multi.jpg", alt: "Equipo multidisciplinario" },
  { src: "/images/doctor-consulta.jpg", alt: "Consulta personalizada" },
  { src: "/images/paso-cirugia.jpg", alt: "Cirugía laparoscópica" },
  { src: "/images/doctor-scrubs.jpg", alt: "Dr. Salazar en hospital" },
  { src: "/images/paso-seguimiento.jpg", alt: "Seguimiento postoperatorio" },
];

/* ─── Glass Stat Card ─── */
function StatCard({
  prefix, target, suffix, unit, label, note, inView, index,
}: {
  prefix: string; target: number; suffix: string; unit: string;
  label: string; note: string; inView: boolean; index: number;
}) {
  const count = useCountUp(target, 1600, inView);

  return (
    <motion.div
      variants={staggerItem}
      className="rounded-2xl p-5 sm:p-6 relative overflow-hidden group"
      style={{
        backgroundColor: "rgba(245, 235, 220, 0.08)",
        backdropFilter: "blur(16px) saturate(160%)",
        WebkitBackdropFilter: "blur(16px) saturate(160%)",
        border: "1px solid rgba(245, 235, 220, 0.12)",
      }}
    >
      {/* Decorative number watermark */}
      <span
        aria-hidden="true"
        className="absolute -top-4 -right-2 font-serif font-light opacity-[0.06] leading-none select-none pointer-events-none"
        style={{ fontSize: "7rem", color: "#F5EBDC" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative">
        {/* Number + unit */}
        <div className="flex items-baseline gap-1.5">
          <p
            className="font-serif text-5xl sm:text-6xl font-light leading-none tabular-nums"
            style={{ color: "var(--color-cream)" }}
          >
            {prefix}{count.toLocaleString()}{suffix}
          </p>
          <span
            className="font-serif text-lg sm:text-xl font-light"
            style={{ color: "rgba(245, 235, 220, 0.6)" }}
          >
            {unit}
          </span>
        </div>

        {/* Label */}
        <p
          className="mt-3 font-serif text-base sm:text-lg font-normal leading-snug"
          style={{ color: "var(--color-cream)" }}
        >
          {label}
        </p>

        {/* Divider */}
        <div
          className="mt-3 mb-3 h-px w-10"
          style={{ backgroundColor: "rgba(245, 235, 220, 0.2)" }}
          aria-hidden="true"
        />

        {/* Note */}
        <p
          className="text-xs sm:text-[13px] leading-relaxed"
          style={{ color: "rgba(245, 235, 220, 0.55)" }}
        >
          {note}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Photo Mosaic ─── */
function PhotoMosaic() {
  return (
    <div className="relative h-full min-h-[400px] sm:min-h-[480px]">
      {/* Main large image */}
      <motion.div
        variants={fadeInLeft}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT_ONCE}
        className="absolute top-0 left-0 w-[65%] h-[62%] rounded-2xl overflow-hidden shadow-2xl"
      >
        <Image
          src="/images/doctor-quirofano.jpg"
          alt="Dr. Salazar en quirófano"
          fill
          sizes="(max-width: 1024px) 60vw, 350px"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(108,29,69,0.3) 0%, transparent 50%)" }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Top-right image */}
      <motion.div
        variants={fadeInRight}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT_ONCE}
        className="absolute top-4 right-0 w-[42%] h-[45%] rounded-2xl overflow-hidden shadow-xl"
      >
        <Image
          src="/images/doctor-consulta.jpg"
          alt="Consulta personalizada"
          fill
          sizes="(max-width: 1024px) 40vw, 240px"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(108,29,69,0.25) 0%, transparent 50%)" }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Bottom-right image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 right-[5%] w-[50%] h-[42%] rounded-2xl overflow-hidden shadow-xl"
      >
        <Image
          src="/images/paso-evaluacion-multi.jpg"
          alt="Equipo multidisciplinario"
          fill
          sizes="(max-width: 1024px) 45vw, 280px"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(108,29,69,0.25) 0%, transparent 50%)" }}
          aria-hidden="true"
        />
      </motion.div>

      {/* Small accent image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="absolute bottom-[8%] left-[2%] w-[30%] h-[30%] rounded-xl overflow-hidden shadow-lg border-2"
        style={{ borderColor: "rgba(245, 235, 220, 0.2)" }}
      >
        <Image
          src="/images/doctor-scrubs-2.jpg"
          alt="Equipo médico"
          fill
          sizes="160px"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}

/* ─── Infinite Marquee ─── */
function PhotoMarquee() {
  const doubled = [...marqueeImages, ...marqueeImages];

  return (
    <div className="mt-14 sm:mt-16 overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
      <motion.p
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT_ONCE}
        className="text-center mb-5"
      >
        <span
          className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ color: "rgba(245, 235, 220, 0.4)" }}
        >
          Nuestro día a día
        </span>
      </motion.p>

      <div
        className="flex gap-3 sm:gap-4"
        style={{
          animation: "marquee 35s linear infinite",
          width: "max-content",
        }}
      >
        {doubled.map((img, idx) => (
          <div
            key={`${img.src}-${idx}`}
            className="relative flex-shrink-0 w-40 sm:w-52 h-28 sm:h-36 rounded-xl overflow-hidden group"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="220px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function Results() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ backgroundColor: "var(--color-primary)" }}
      aria-label="Trayectoria y experiencia"
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "var(--color-lilac)" }}
      />

      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="text-center mb-12 sm:mb-14"
          >
            <p
              className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "rgba(245, 235, 220, 0.5)" }}
            >
              Trayectoria
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight"
              style={{ color: "var(--color-cream)" }}
            >
              Años de experiencia,<br className="hidden sm:block" /> vidas transformadas
            </h2>
            <p
              className="mt-4 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
              style={{ color: "rgba(245, 235, 220, 0.6)" }}
            >
              Una trayectoria construida con centenares de pacientes acompañados
              y una alta tasa de éxito clínico sostenido en el tiempo.
            </p>
          </motion.div>

          {/* Two-column: Mosaic + Stats */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left — Photo Mosaic */}
            <div className="order-2 lg:order-1">
              <PhotoMosaic />
            </div>

            {/* Right — Stat Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={VIEWPORT_ONCE}
              className="order-1 lg:order-2 space-y-3 sm:space-y-4"
            >
              {stats.map((s, idx) => (
                <StatCard
                  key={s.label}
                  prefix={s.prefix}
                  target={s.target}
                  suffix={s.suffix}
                  unit={s.unit}
                  label={s.label}
                  note={s.note}
                  inView={inView}
                  index={idx}
                />
              ))}

              {/* Qualitative note */}
              <p
                className="text-[11px] sm:text-xs leading-relaxed pt-2"
                style={{ color: "rgba(245, 235, 220, 0.35)" }}
              >
                Mejoría significativa en enfermedades metabólicas como diabetes tipo 2 e
                hipertensión arterial documentada en la mayoría de pacientes operados.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Marquee photo strip */}
        <PhotoMarquee />
      </div>
    </section>
  );
}
