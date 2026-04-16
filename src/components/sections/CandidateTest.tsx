"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Calendar } from "lucide-react";
import { CLIENT } from "@/lib/client-data";
import { calcularIMC, evaluarCandidatura } from "@/lib/imc-logic";
import { fadeInUp, scaleOnHover, VIEWPORT_ONCE } from "@/lib/design-system";

const comorbilidades = [
  { value: "diabetes", label: "Diabetes tipo 2" },
  { value: "hipertension", label: "Hipertensión arterial" },
  { value: "apnea", label: "Apnea del sueño" },
];

// Mapeo nivel → colores
const resultColors: Record<string, { bg: string; text: string; pill: string }> = {
  "no-candidato": {
    bg: "var(--color-cream)",
    text: "var(--color-warm-text)",
    pill: "var(--color-border)",
  },
  candidato: {
    bg: "var(--color-lilac)",
    text: "var(--color-primary)",
    pill: "var(--color-primary)",
  },
  "candidato-imc": {
    bg: "var(--color-lilac)",
    text: "var(--color-primary)",
    pill: "var(--color-primary)",
  },
  "fuerte-candidato": {
    bg: "var(--color-primary)",
    text: "var(--color-cream)",
    pill: "var(--color-cta)",
  },
};

export default function CandidateTest() {
  const [peso, setPeso] = useState("");
  const [talla, setTalla] = useState("");
  const [morbilidades, setMorbilidades] = useState<string[]>([]);
  const [intentos, setIntentos] = useState<boolean | null>(null);
  const [resultado, setResultado] = useState<ReturnType<typeof evaluarCandidatura> | null>(null);
  const [showResult, setShowResult] = useState(false);

  const toggleMorbilidad = (val: string) => {
    setMorbilidades((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
    setShowResult(false);
  };

  const handleCalcular = () => {
    const pesoNum = parseFloat(peso);
    const tallaNum = parseFloat(talla);
    if (!pesoNum || !tallaNum) return;
    const res = evaluarCandidatura(pesoNum, tallaNum, morbilidades, intentos ?? false);
    setResultado(res);
    setShowResult(true);
  };

  const imcActual = peso && talla
    ? calcularIMC(parseFloat(peso), parseFloat(talla))
    : null;

  const colors = resultado ? resultColors[resultado.nivel] : null;

  return (
    <section
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-cream)" }}
      aria-label="Test de candidatura bariátrica"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* Contexto — izquierda */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
          >
            <p
              className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-3"
              style={{ color: "var(--color-primary)" }}
            >
              Test orientativo
            </p>
            <h2
              className="font-serif text-4xl sm:text-5xl font-light leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              ¿Podrías ser candidato a cirugía bariátrica?
            </h2>
            <p
              className="mt-5 text-base leading-relaxed"
              style={{ color: "var(--color-warm-text)" }}
            >
              Responde 3 preguntas simples. Te daremos una orientación inicial — no
              reemplaza la evaluación médica, pero te ayuda a saber si tiene sentido
              dar el siguiente paso.
            </p>

            {/* Criterios informativos */}
            <div
              className="mt-8 rounded-2xl p-6 border space-y-4"
              style={{
                backgroundColor: "var(--color-lilac)",
                borderColor: "transparent",
              }}
            >
              <p
                className="font-serif text-lg font-normal"
                style={{ color: "var(--color-primary)" }}
              >
                Criterios generales de candidatura
              </p>
              <ul className="space-y-2.5">
                {[
                  "IMC ≥ 35 (con o sin enfermedades asociadas)",
                  "IMC ≥ 30 con comorbilidades como diabetes o hipertensión",
                  "Intentos previos de pérdida de peso sin resultados sostenidos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span
                      className="mt-2 h-1 w-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "var(--color-primary)" }}
                      aria-hidden="true"
                    />
                    <span style={{ color: "var(--color-warm-text)" }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p
                className="text-xs italic leading-relaxed pt-1"
                style={{ color: "var(--color-muted-foreground)" }}
              >
                Cada caso se evalúa de forma personalizada.
              </p>
            </div>
          </motion.div>

          {/* Formulario — derecha */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT_ONCE}
            transition={{ delay: 0.1 }}
          >
            {/* Card formulario */}
            <div
              className="rounded-2xl border p-7 sm:p-8"
              style={{
                backgroundColor: "white",
                borderColor: "var(--color-border)",
                boxShadow: "0 8px 32px rgba(108,29,69,0.08)",
              }}
            >
              {/* Peso y talla */}
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="peso"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Peso (kg)
                  </label>
                  <input
                    id="peso"
                    type="number"
                    value={peso}
                    onChange={(e) => { setPeso(e.target.value); setShowResult(false); }}
                    placeholder="Ej: 90"
                    min="30"
                    max="300"
                    className="w-full border-b-2 bg-transparent pb-2 text-lg font-medium placeholder:opacity-30 focus:outline-none transition-colors"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-warm-text)",
                    }}
                    aria-label="Ingresa tu peso en kilogramos"
                  />
                </div>
                <div>
                  <label
                    htmlFor="talla"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "var(--color-primary)" }}
                  >
                    Talla (cm o m)
                  </label>
                  <input
                    id="talla"
                    type="number"
                    value={talla}
                    onChange={(e) => { setTalla(e.target.value); setShowResult(false); }}
                    placeholder="Ej: 165 o 1.65"
                    min="1"
                    max="250"
                    className="w-full border-b-2 bg-transparent pb-2 text-lg font-medium placeholder:opacity-30 focus:outline-none transition-colors"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-warm-text)",
                    }}
                    aria-label="Ingresa tu talla en centímetros o metros"
                  />
                </div>
              </div>

              {/* IMC en tiempo real */}
              <AnimatePresence>
                {imcActual !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 rounded-xl px-5 py-3 flex items-center justify-between"
                    style={{ backgroundColor: "var(--color-lilac)" }}
                  >
                    <span className="text-xs font-medium" style={{ color: "var(--color-warm-text)" }}>
                      Tu IMC estimado
                    </span>
                    <span
                      className="font-serif text-2xl font-light"
                      style={{ color: "var(--color-primary)" }}
                    >
                      {imcActual.toFixed(1)}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Comorbilidades */}
              <fieldset className="mb-6">
                <legend
                  className="text-sm font-semibold mb-3"
                  style={{ color: "var(--color-primary)" }}
                >
                  Enfermedades preexistentes
                </legend>
                <div className="flex flex-wrap gap-2.5">
                  {comorbilidades.map((c) => (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => toggleMorbilidad(c.value)}
                      className="rounded-full border px-4 py-2 text-sm font-medium transition-all"
                      style={{
                        backgroundColor: morbilidades.includes(c.value)
                          ? "var(--color-primary)"
                          : "transparent",
                        borderColor: morbilidades.includes(c.value)
                          ? "var(--color-primary)"
                          : "var(--color-border)",
                        color: morbilidades.includes(c.value)
                          ? "var(--color-cream)"
                          : "var(--color-warm-text)",
                      }}
                      aria-pressed={morbilidades.includes(c.value)}
                    >
                      {c.label}
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => { setMorbilidades([]); setShowResult(false); }}
                    className="rounded-full border px-4 py-2 text-sm font-medium transition-all"
                    style={{
                      backgroundColor: morbilidades.length === 0
                        ? "var(--color-primary)"
                        : "transparent",
                      borderColor: morbilidades.length === 0
                        ? "var(--color-primary)"
                        : "var(--color-border)",
                      color: morbilidades.length === 0
                        ? "var(--color-cream)"
                        : "var(--color-warm-text)",
                    }}
                    aria-pressed={morbilidades.length === 0}
                  >
                    Ninguna
                  </button>
                </div>
              </fieldset>

              {/* Intentos previos */}
              <fieldset className="mb-8">
                <legend
                  className="text-sm font-semibold mb-3"
                  style={{ color: "var(--color-primary)" }}
                >
                  ¿Ha intentado perder peso sin éxito sostenido?
                </legend>
                <div className="flex gap-3">
                  {[
                    { val: true, label: "Sí" },
                    { val: false, label: "No" },
                  ].map(({ val, label }) => (
                    <button
                      key={label}
                      type="button"
                      onClick={() => { setIntentos(val); setShowResult(false); }}
                      className="rounded-full border px-6 py-2 text-sm font-medium transition-all"
                      style={{
                        backgroundColor: intentos === val
                          ? "var(--color-primary)"
                          : "transparent",
                        borderColor: intentos === val
                          ? "var(--color-primary)"
                          : "var(--color-border)",
                        color: intentos === val
                          ? "var(--color-cream)"
                          : "var(--color-warm-text)",
                      }}
                      aria-pressed={intentos === val}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* Botón calcular */}
              <motion.button
                type="button"
                onClick={handleCalcular}
                disabled={!peso || !talla}
                {...scaleOnHover}
                className="w-full flex items-center justify-center gap-2 rounded-xl py-4 text-base font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "var(--color-cta)",
                  color: "#1a3a0a",
                  boxShadow: "0 6px 20px rgba(120,214,75,0.25)",
                }}
              >
                <Calculator className="h-5 w-5" aria-hidden="true" />
                Calcular mi candidatura
              </motion.button>
            </div>

            {/* Resultado */}
            <AnimatePresence>
              {showResult && resultado && colors && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-4 rounded-2xl p-6 border"
                  style={{
                    backgroundColor: colors.bg,
                    borderColor: "transparent",
                    boxShadow: "0 8px 24px rgba(108,29,69,0.10)",
                  }}
                  role="alert"
                  aria-live="polite"
                >
                  {/* IMC pill */}
                  <div className="mb-4">
                    <span
                      className="inline-block rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        backgroundColor: "var(--color-lilac)",
                        color: "var(--color-primary)",
                      }}
                    >
                      IMC calculado: {resultado.imc.toFixed(1)}
                    </span>
                  </div>

                  {/* Mensaje */}
                  <p
                    className="font-serif text-lg font-normal leading-snug mb-4"
                    style={{ color: colors.text }}
                  >
                    {resultado.mensaje}
                  </p>

                  {resultado.showCTA && (
                    <motion.a
                      href={CLIENT.booking}
                      target="_blank"
                      rel="noopener noreferrer"
                      {...scaleOnHover}
                      className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold mb-4"
                      style={{
                        backgroundColor: "var(--color-cta)",
                        color: "#1a3a0a",
                        boxShadow: "0 4px 14px rgba(120,214,75,0.25)",
                      }}
                    >
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      Agenda tu evaluación
                    </motion.a>
                  )}

                  <p
                    className="text-xs leading-relaxed"
                    style={{ color: colors.text, opacity: 0.65 }}
                  >
                    Este test es orientativo. La evaluación médica personalizada es indispensable.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
