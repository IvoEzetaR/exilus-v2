"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar, MessageCircle, MapPin, ChevronDown } from "lucide-react";
import { CLIENT } from "@/lib/client-data";
import { EASE_OUT_EXPO } from "@/lib/design-system";

// ─── Animation variants ──────────────────────────────────────────────────────

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.15 },
  },
};

const itemFade = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE_OUT_EXPO } },
};

const lineReveal = {
  hidden: { y: "105%" },
  show: { y: 0, transition: { duration: 0.75, ease: EASE_OUT_EXPO } },
};

const credentialSlide = {
  hidden: { opacity: 0, x: 24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 1.1, ease: EASE_OUT_EXPO },
  },
};

const scrollHintAnim = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, delay: 1.5, ease: EASE_OUT_EXPO },
  },
};

// ─── Component ──────────────────────────────────────────────────────────────

export default function Hero() {
  const shouldReduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Pause video when user prefers reduced motion
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (shouldReduce) {
      el.pause();
    } else {
      el.play().catch(() => {
        // Autoplay blocked — still display fallback background
      });
    }
  }, [shouldReduce]);

  const motionProps = shouldReduce
    ? { initial: "show", animate: "show" }
    : { initial: "hidden", animate: "show" };

  return (
    <section
      id="inicio"
      aria-label="Sección principal"
      className="relative min-h-screen flex flex-col overflow-hidden"
      // Fallback background: solid wine in case video never loads
      style={{ backgroundColor: "#6C1D45" }}
    >
      {/* ── Video full-bleed background ─────────────────────────────────── */}
      <video
        ref={videoRef}
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setVideoLoaded(true)}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          opacity: videoLoaded ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <source
          src="https://res.cloudinary.com/dd0hiqfsf/video/upload/q_auto/f_auto/v1776436288/WhatsApp_Video_2026-04-17_at_9.31.00_AM_i6xapq.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── Multi-layer overlay for legibility ──────────────────────────── */}
      {/* Bottom-to-top gradient in wine — text area is darker at bottom */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(108,29,69,0.55) 0%, rgba(108,29,69,0.35) 35%, rgba(108,29,69,0.50) 65%, rgba(108,29,69,0.82) 100%)",
        }}
      />
      {/* Additional dark vignette at top-left where headline lives */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 55%, rgba(30,5,18,0.28) 0%, transparent 70%)",
        }}
      />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col min-h-screen px-4 sm:px-6 lg:px-8">

        {/* Spacer for fixed Navbar (h-16 + top-10 = ~96px) */}
        <div className="h-24 sm:h-28 shrink-0" />

        {/* Main copy — vertically centered in remaining space */}
        <motion.div
          variants={container}
          {...motionProps}
          className="flex-1 flex flex-col justify-center max-w-7xl w-full mx-auto"
        >
          {/* Eyebrow pill */}
          <motion.div variants={itemFade} className="mb-6 lg:mb-8">
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold tracking-[0.15em] uppercase backdrop-blur-sm"
              style={{
                backgroundColor: "rgba(223,208,241,0.18)",
                color: "rgba(245,235,220,0.95)",
                border: "1px solid rgba(245,235,220,0.22)",
              }}
            >
              <MapPin className="h-3 w-3" aria-hidden="true" />
              Cirugía Bariátrica · Trujillo, Perú
            </span>
          </motion.div>

          {/* H1 — kinetic line-by-line reveal */}
          <h1 className="font-serif text-[2.8rem] sm:text-6xl lg:text-[5.2rem] xl:text-[6rem] font-light leading-[1.02] tracking-tight text-white mb-6 lg:mb-8">
            <span className="block overflow-hidden">
              <motion.span
                variants={shouldReduce ? itemFade : lineReveal}
                {...motionProps}
                style={
                  shouldReduce
                    ? {}
                    : {
                        display: "block",
                        transition: `transform 0.75s cubic-bezier(${EASE_OUT_EXPO.join(",")}) 0.28s`,
                      }
                }
                className="block"
              >
                Transforma tu salud.
              </motion.span>
            </span>
            <span className="block overflow-hidden mt-1">
              <motion.span
                variants={shouldReduce ? itemFade : lineReveal}
                {...motionProps}
                className="block italic"
                style={{ color: "rgba(245,235,220,0.85)", transitionDelay: "0.42s" }}
              >
                Recupera tu vida.
              </motion.span>
            </span>
          </h1>

          {/* Subcopy */}
          <motion.p
            variants={itemFade}
            className="text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed mb-8 lg:mb-10"
            style={{ color: "rgba(245,235,220,0.80)" }}
          >
            Cirugía bariátrica y laparoscópica avanzada con un enfoque integral,
            seguro y personalizado. Pionero en el norte del Perú con +10 años de
            experiencia en cirugía metabólica.
          </motion.p>

          {/* CTA pair */}
          <motion.div
            variants={itemFade}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            {/* Primary — green glow */}
            <motion.a
              href={CLIENT.booking}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={
                shouldReduce
                  ? {}
                  : {
                      scale: 1.04,
                      boxShadow: "0 0 36px rgba(120,214,75,0.50), 0 0 72px rgba(120,214,75,0.22)",
                    }
              }
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-7 py-4 text-sm font-semibold"
              style={{
                backgroundColor: "var(--color-cta)",
                color: "#1a3a0a",
                boxShadow: "0 8px 24px rgba(120,214,75,0.30)",
              }}
            >
              {/* Shine sweep on hover */}
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
              <Calendar className="relative z-10 h-4 w-4" aria-hidden="true" />
              <span className="relative z-10">Agenda tu evaluación</span>
            </motion.a>

            {/* Secondary — outline cream with text swap */}
            <motion.a
              href={CLIENT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduce ? {} : { scale: 1.03 }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group relative inline-flex h-[54px] items-center justify-center gap-2 overflow-hidden rounded-xl px-7 text-sm font-semibold backdrop-blur-sm"
              style={{
                border: "1.5px solid rgba(245,235,220,0.55)",
                color: "rgba(245,235,220,0.95)",
                backgroundColor: "rgba(245,235,220,0.08)",
              }}
            >
              <span className="relative flex items-center gap-2 h-full overflow-hidden">
                {/* Text swap — two spans stacked */}
                <span className="flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </span>
                <span className="absolute inset-0 flex items-center gap-2 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Consultar ahora →
                </span>
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ── Stats bar — bottom strip above scroll hint ─────────────────── */}
        <motion.div
          variants={itemFade}
          {...motionProps}
          className="max-w-7xl w-full mx-auto pb-20 sm:pb-24"
        >
          <div
            className="inline-flex flex-wrap gap-x-8 gap-y-3 rounded-2xl px-6 py-4 backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(108,29,69,0.45)",
              border: "1px solid rgba(245,235,220,0.15)",
            }}
          >
            {[
              { stat: "+16", label: "años en cirugía\nabdominal" },
              { stat: "+10", label: "años en cirugía\nbariátrica" },
              { stat: "24h", label: "respuesta a tu\nconsulta" },
            ].map(({ stat, label }) => (
              <div key={stat} className="flex items-center gap-3">
                <span
                  className="font-serif text-3xl font-light leading-none"
                  style={{ color: "var(--color-cta)" }}
                >
                  {stat}
                </span>
                <span
                  className="text-[11px] font-medium leading-snug whitespace-pre-line"
                  style={{ color: "rgba(245,235,220,0.75)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Spacer bottom */}
        <div className="h-0 shrink-0" />
      </div>

      {/* ── Credential badge — bottom right ─────────────────────────────── */}
      <motion.div
        variants={credentialSlide}
        {...motionProps}
        className="absolute bottom-16 right-4 sm:right-8 z-20 max-w-[220px] sm:max-w-[240px]"
      >
        <div
          className="rounded-2xl p-4 backdrop-blur-md"
          style={{
            backgroundColor: "rgba(108,29,69,0.70)",
            border: "1px solid rgba(245,235,220,0.22)",
          }}
        >
          <div
            className="mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
            style={{ backgroundColor: "rgba(120,214,75,0.18)" }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "var(--color-cta)" }}
              aria-hidden="true"
            />
            <span
              className="text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--color-cta)" }}
            >
              Disponible · Consulta 24h
            </span>
          </div>
          <p className="text-white font-bold text-sm leading-tight">
            Dr. Víctor A. Salazar T.
          </p>
          <p
            className="text-xs mt-0.5 leading-snug"
            style={{ color: "rgba(245,235,220,0.75)" }}
          >
            Cirujano Bariatra · Director HRDT
            <br />
            Clínica Sanna Sánchez Ferrer
          </p>
        </div>
      </motion.div>

      {/* ── Scroll hint ─────────────────────────────────────────────────── */}
      <motion.div
        variants={scrollHintAnim}
        initial="hidden"
        animate="show"
        aria-hidden="true"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        style={{ color: "rgba(245,235,220,0.45)" }}
      >
        <span className="text-[10px] font-medium uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown
          className="h-4 w-4 animate-bounce"
          aria-hidden="true"
        />
      </motion.div>
    </section>
  );
}
