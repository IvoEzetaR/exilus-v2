"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, accordionContent, accordionChevron, VIEWPORT_ONCE } from "@/lib/design-system";

// Preguntas del brief (sección 12) — solo datos confirmados
const faqs = [
  {
    question: "¿Soy candidato para cirugía bariátrica?",
    answer:
      "Generalmente, son candidatos los pacientes con IMC ≥ 30 con comorbilidades o IMC ≥ 35 con o sin enfermedades asociadas. Sin embargo, cada caso se evalúa de forma personalizada en consulta con el Dr. Salazar para determinar la mejor alternativa según tu situación médica e historia clínica.",
  },
  {
    question: "¿Cuánto peso se pierde después de la cirugía?",
    answer:
      "Los resultados dependen del procedimiento realizado y del compromiso del paciente con el seguimiento multidisciplinario. En promedio, se pierde entre el 60% y 80% del exceso de peso. El acompañamiento integral — nutrición, psicología y control médico — es clave para mantener los resultados a largo plazo.",
  },
  {
    question: "¿La cirugía es riesgosa?",
    answer:
      "La cirugía bariátrica es un procedimiento seguro cuando es realizado por un equipo especializado y en un centro acreditado. En Exilus utilizamos técnicas laparoscópicas avanzadas que reducen significativamente los riesgos quirúrgicos y aceleran la recuperación postoperatoria.",
  },
  {
    question: "¿Qué seguimiento se realiza después de la cirugía?",
    answer:
      "El tratamiento incluye un seguimiento multidisciplinario continuo con cirugía, nutrición, psicología y control médico. El proceso no termina en el quirófano — el acompañamiento postoperatorio es parte integral de nuestro método y es fundamental para sostener los resultados.",
  },
  {
    question: "¿Cuánto cuesta la cirugía?",
    answer:
      "El costo varía según cada caso clínico. La inversión incluye la evaluación integral preoperatoria, el procedimiento y el seguimiento. Contáctanos para una evaluación personalizada donde podremos orientarte sobre las opciones que mejor se adaptan a tu situación.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="border-b last:border-b-0"
      style={{ borderColor: "rgba(108,29,69,0.15)" }}
    >
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-6 text-left transition-opacity hover:opacity-70"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span
          className="font-serif text-lg font-normal leading-snug"
          style={{ color: "var(--color-primary)" }}
        >
          {question}
        </span>

        {/* Chevron con rotación animada */}
        <motion.span
          variants={accordionChevron}
          animate={isOpen ? "expanded" : "collapsed"}
          className="flex-shrink-0 mt-1"
          aria-hidden="true"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            style={{ color: "var(--color-primary)" }}
          >
            <path
              d="M3 6L8 11L13 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </button>

      {/* Respuesta con altura animada */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            key="content"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={accordionContent}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-6 text-base leading-relaxed"
              style={{ color: "var(--color-warm-text)" }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-cream)" }}
      aria-label="Preguntas frecuentes"
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="text-center mb-12"
        >
          <p
            className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-3"
            style={{ color: "var(--color-primary)" }}
          >
            Preguntas frecuentes
          </p>
          <h2
            className="font-serif text-4xl sm:text-5xl font-light leading-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Resolvemos tus dudas
          </h2>
          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "var(--color-warm-text)" }}
          >
            Las preguntas que más recibimos de pacientes antes de su primera consulta.
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="rounded-2xl border overflow-hidden px-6 sm:px-8"
          style={{
            backgroundColor: "white",
            borderColor: "var(--color-border)",
            boxShadow: "0 8px 32px rgba(108,29,69,0.06)",
          }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
              index={i}
            />
          ))}
        </motion.div>

        {/* Nota final */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="mt-8 text-center text-sm leading-relaxed"
          style={{ color: "var(--color-muted-foreground)" }}
        >
          ¿Tienes otra pregunta?{" "}
          <a
            href="https://wa.me/51972652353"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 transition-opacity hover:opacity-70"
            style={{ color: "var(--color-primary)" }}
          >
            Escríbenos por WhatsApp
          </a>{" "}
          y te respondemos.
        </motion.p>
      </div>
    </section>
  );
}
