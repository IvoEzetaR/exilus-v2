"use client";

import { motion } from "framer-motion";
import { fadeInUp, headings, maxWidth, sectionPadding } from "@/lib/design-system";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Mas de X anos de experiencia",
  "Atencion personalizada",
  "Resultados comprobados",
  "Equipo profesional certificado",
];

export default function About() {
  return (
    <section id="nosotros" className={sectionPadding}>
      <div className={`${maxWidth} grid gap-12 lg:grid-cols-2 items-center`}>
        <motion.div {...fadeInUp}>
          <h2 className={headings.h2}>Por que elegirnos</h2>
          <p className={`mt-4 ${headings.body}`}>
            Descripcion de la empresa, su mision, y que la diferencia de la
            competencia. Enfocar en beneficios para el cliente.
          </p>
          <ul className="mt-6 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...fadeInUp} className="relative aspect-video rounded-2xl bg-muted overflow-hidden">
          {/* TODO: Replace with client image */}
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
            Imagen del negocio
          </div>
        </motion.div>
      </div>
    </section>
  );
}
