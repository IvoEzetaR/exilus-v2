"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  TrendingDown,
  HeartPulse,
  Minimize2,
  Utensils,
  ShieldCheck,
  Clock,
  Activity,
  Award,
  Shield,
  RotateCcw,
  Zap,
  BookOpen,
  RefreshCw,
  Search,
  Wrench,
  Eye,
  Users,
  Settings,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  cardHover,
  scaleOnHover,
  accordionContent,
  accordionChevron,
  VIEWPORT_ONCE,
} from "@/lib/design-system";
import { CLIENT } from "@/lib/client-data";
import type { ServiceData } from "@/lib/services-data";
import { getOtherServices } from "@/lib/services-data";

const iconMap: Record<string, React.ElementType> = {
  TrendingDown,
  HeartPulse,
  Minimize2,
  Utensils,
  ShieldCheck,
  Clock,
  Activity,
  Award,
  Shield,
  RotateCcw,
  Zap,
  BookOpen,
  RefreshCw,
  Search,
  Wrench,
  Eye,
  Users,
  Settings,
};

/* ─── FAQ Item ─── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border-b"
      style={{ borderColor: "rgba(245, 235, 220, 0.15)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span
          className="font-serif text-lg font-medium pr-4 leading-snug"
          style={{ color: "var(--color-cream)" }}
        >
          {question}
        </span>
        <motion.span
          variants={accordionChevron}
          animate={open ? "expanded" : "collapsed"}
          className="flex-shrink-0"
        >
          <ChevronDown
            className="h-5 w-5"
            style={{ color: "rgba(245,235,220,0.60)" }}
          />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            variants={accordionContent}
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-base leading-relaxed"
              style={{ color: "rgba(245,235,220,0.70)" }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Main Component ─── */
export default function ServiceContent({ service }: { service: ServiceData }) {
  const otherServices = getOtherServices(service.slug);

  return (
    <>
      {/* ── Sección 1: Descripción + Stats ── */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="grid lg:grid-cols-[60fr_40fr] gap-12 lg:gap-16 items-start"
          >
            {/* Description */}
            <motion.div variants={fadeInLeft}>
              <h2
                className="font-serif text-3xl sm:text-4xl font-light leading-tight"
                style={{ color: "var(--color-primary)" }}
              >
                ¿Qué es {service.name}?
              </h2>
              <div className="mt-6 space-y-4">
                {service.description.map((p, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed"
                    style={{ color: "var(--color-warm-text)" }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Stats card — glassmorphism style */}
            <motion.div variants={fadeInRight}>
              <div
                className="rounded-2xl overflow-hidden relative"
                style={{
                  backgroundColor: "var(--color-primary)",
                  border: "1px solid rgba(245, 235, 220, 0.08)",
                }}
              >
                {/* Subtle blob */}
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: "var(--color-lilac)" }}
                  aria-hidden="true"
                />
                <div className="relative p-6">
                  <h3
                    className="font-serif text-xl font-medium mb-5"
                    style={{ color: "var(--color-cream)" }}
                  >
                    Datos clave
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {service.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl p-3"
                        style={{
                          backgroundColor: "rgba(245, 235, 220, 0.06)",
                          border: "1px solid rgba(245, 235, 220, 0.10)",
                        }}
                      >
                        <p
                          className="font-serif text-xl sm:text-2xl font-semibold leading-tight"
                          style={{ color: "var(--color-cta)" }}
                        >
                          {stat.value}
                        </p>
                        <p
                          className="text-xs mt-1 leading-snug"
                          style={{ color: "rgba(245,235,220,0.55)" }}
                        >
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Sección 2: Perfil del candidato ── */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <p
              className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "rgba(245,235,220,0.50)" }}
            >
              Candidato ideal
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl font-light"
              style={{ color: "var(--color-cream)" }}
            >
              ¿Para quién es este procedimiento?
            </h2>
          </motion.div>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="space-y-3"
          >
            {service.candidateProfile.map((item) => (
              <motion.li
                key={item}
                variants={staggerItem}
                className="flex items-start gap-3 rounded-xl p-4"
                style={{
                  backgroundColor: "rgba(245, 235, 220, 0.06)",
                  border: "1px solid rgba(245, 235, 220, 0.10)",
                }}
              >
                <CheckCircle
                  className="h-5 w-5 flex-shrink-0 mt-0.5"
                  style={{ color: "var(--color-cta)" }}
                  aria-hidden="true"
                />
                <span
                  className="text-base leading-relaxed"
                  style={{ color: "rgba(245,235,220,0.85)" }}
                >
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── Sección 3: Beneficios ── */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p
              className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Por qué elegirnos
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl font-light"
              style={{ color: "var(--color-primary)" }}
            >
              Beneficios del procedimiento
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {service.benefits.map((benefit) => {
              const Icon = iconMap[benefit.icon] || ShieldCheck;
              return (
                <motion.div
                  key={benefit.title}
                  variants={staggerItem}
                  {...cardHover}
                  className="rounded-2xl overflow-hidden relative group"
                  style={{
                    backgroundColor: "var(--color-primary)",
                    border: "1px solid rgba(245, 235, 220, 0.08)",
                  }}
                >
                  <div className="p-6">
                    {/* Icon with glassmorphism pill */}
                    <div
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl mb-4 transition-colors duration-300"
                      style={{
                        backgroundColor: "rgba(245, 235, 220, 0.10)",
                        border: "1px solid rgba(245, 235, 220, 0.15)",
                      }}
                    >
                      <Icon
                        className="h-5 w-5"
                        style={{ color: "var(--color-cta)" }}
                        aria-hidden="true"
                      />
                    </div>
                    <h3
                      className="font-serif text-lg font-medium leading-snug"
                      style={{ color: "var(--color-cream)" }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className="mt-2 text-sm leading-relaxed"
                      style={{ color: "rgba(245,235,220,0.65)" }}
                    >
                      {benefit.description}
                    </p>
                  </div>
                  {/* Subtle hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 20%, rgba(245,235,220,0.04) 0%, transparent 70%)",
                    }}
                    aria-hidden="true"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Sección 4: Pasos del procedimiento ── */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-primary-dark)" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p
              className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "rgba(245,235,220,0.40)" }}
            >
              El proceso
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl font-light"
              style={{ color: "var(--color-cream)" }}
            >
              El procedimiento paso a paso
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="space-y-5"
          >
            {service.steps.map((step, idx) => (
              <motion.div
                key={step.step}
                variants={staggerItem}
                className="flex gap-5 items-start rounded-2xl p-5"
                style={{
                  backgroundColor: "rgba(245, 235, 220, 0.04)",
                  border: "1px solid rgba(245, 235, 220, 0.08)",
                }}
              >
                {/* Step number circle */}
                <div
                  className="flex-shrink-0 flex h-11 w-11 items-center justify-center rounded-full font-serif text-lg font-semibold"
                  style={{
                    backgroundColor: "var(--color-cta)",
                    color: "#1a3a0a",
                  }}
                >
                  {step.step}
                </div>
                <div>
                  <h3
                    className="font-serif text-lg font-medium"
                    style={{ color: "var(--color-cream)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mt-1 text-sm leading-relaxed"
                    style={{ color: "rgba(245,235,220,0.65)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Sección 5: Recuperación ── */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
            className="text-center mb-12"
          >
            <p
              className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Posoperatorio
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl font-light"
              style={{ color: "var(--color-primary)" }}
            >
              Recuperación
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {service.recovery.map((phase, i) => (
              <motion.div
                key={phase.phase}
                variants={staggerItem}
                {...cardHover}
                className="rounded-2xl overflow-hidden relative"
                style={{
                  backgroundColor: "var(--color-primary)",
                  border: "1px solid rgba(245, 235, 220, 0.08)",
                }}
              >
                <div className="p-5">
                  {/* Timeframe pill */}
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold mb-3"
                    style={{
                      backgroundColor: "rgba(245, 235, 220, 0.10)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(245, 235, 220, 0.15)",
                      color: "var(--color-cta)",
                    }}
                  >
                    {phase.timeframe}
                  </span>
                  <h3
                    className="font-serif text-base font-medium mb-2"
                    style={{ color: "var(--color-cream)" }}
                  >
                    {phase.phase}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(245,235,220,0.60)" }}
                  >
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Sección 6: FAQ ── */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <p
              className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "rgba(245,235,220,0.40)" }}
            >
              Preguntas frecuentes
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl font-light"
              style={{ color: "var(--color-cream)" }}
            >
              Resolvemos tus dudas
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
          >
            {service.faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Sección 7: CTA ── */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-cream)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="font-serif text-3xl sm:text-4xl font-light leading-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Da el primer paso
          </h2>
          <p
            className="mt-4 text-lg leading-relaxed"
            style={{ color: "var(--color-warm-text)" }}
          >
            Agenda una evaluación personalizada con el Dr. Salazar para
            determinar si {service.name.toLowerCase()} es la mejor opción
            para tu caso.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
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
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 px-7 py-4 text-base font-semibold"
              style={{
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)",
              }}
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Escríbenos por WhatsApp
            </motion.a>
          </div>
        </div>
      </section>

      {/* ── Sección 8: Otros servicios ── */}
      <section
        className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
        style={{ backgroundColor: "var(--color-primary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            variants={fadeInUp}
            className="mb-10"
          >
            <p
              className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase mb-3"
              style={{ color: "rgba(245,235,220,0.40)" }}
            >
              Seguir explorando
            </p>
            <h2
              className="font-serif text-3xl sm:text-4xl font-light"
              style={{ color: "var(--color-cream)" }}
            >
              Otras especialidades
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {otherServices.map((s) => (
              <motion.div key={s.slug} variants={staggerItem}>
                <Link href={`/servicios/${s.slug}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl min-h-[180px] flex flex-col justify-end">
                    {/* Background image */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
                        <Image
                          src={s.image}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    {/* Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.30) 60%, transparent 100%)",
                      }}
                      aria-hidden="true"
                    />
                    {/* Content */}
                    <div className="relative p-4">
                      <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-white/50 block mb-1">
                        {s.tag}
                      </span>
                      <h3
                        className="font-serif text-base font-normal leading-snug text-white mb-2"
                        style={{ letterSpacing: "-0.01em" }}
                      >
                        {s.name}
                      </h3>
                      <span
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-white/70 transition-all duration-300 group-hover:text-white group-hover:gap-1.5"
                      >
                        Conocer más{" "}
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
