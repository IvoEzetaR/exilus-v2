"use client";

import { motion } from "framer-motion";
import { fadeInUp, headings, maxWidth, sectionPadding } from "@/lib/design-system";
import { Button } from "@/components/ui/Button";
import { Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="contacto" className={`${sectionPadding} bg-card`}>
      <div className={maxWidth}>
        <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto">
          <h2 className={headings.h2}>
            Listo para empezar?
          </h2>
          <p className={`mt-4 ${headings.bodyMuted}`}>
            Contactanos hoy y recibe una consulta gratuita. Sin compromiso.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Escribenos por WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+51999999999">Llamar ahora</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
