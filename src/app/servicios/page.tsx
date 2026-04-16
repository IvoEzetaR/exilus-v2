import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import InnerPageHero from "@/components/layout/InnerPageHero";
import ServiceCardGrid from "./ServiceCardGrid";
import { CLIENT } from "@/lib/client-data";

export const metadata: Metadata = {
  title: "Servicios Especializados | Exilus — Cirugía Bariátrica Trujillo",
  description:
    "Cinco especialidades quirúrgicas en Trujillo: cirugía bariátrica y metabólica, manejo integral de obesidad, cirugía laparoscópica, cirugía digestiva y proctología. Dr. Augusto Salazar.",
  openGraph: {
    title: "Servicios Especializados — Exilus Cirugía Bariátrica",
    description:
      "Atención quirúrgica especializada con tecnología de vanguardia y un equipo multidisciplinario en Trujillo, Perú.",
    url: "https://exilus.pe/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <InnerPageHero
          eyebrow="Nuestras especialidades"
          title="Servicios Especializados"
          subtitle="Cinco especialidades quirúrgicas. Un solo equipo comprometido con tu bienestar."
          bgImage="/images/doctor-quirofano.jpg"
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Servicios" },
          ]}
        />

        <ServiceCardGrid />

        {/* CTA Section */}
        <section
          className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="font-serif text-3xl sm:text-4xl font-light leading-tight"
              style={{ color: "var(--color-cream)" }}
            >
              ¿No sabes cuál procedimiento es para ti?
            </h2>
            <p
              className="mt-4 text-lg leading-relaxed"
              style={{ color: "rgba(245,235,220,0.75)" }}
            >
              Agenda una evaluación con el Dr. Salazar. En la consulta inicial
              evaluaremos tu caso y te recomendaremos la mejor opción.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={CLIENT.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold transition-opacity hover:opacity-90"
                style={{
                  backgroundColor: "var(--color-cta)",
                  color: "#1a3a0a",
                  boxShadow: "0 8px 24px rgba(120,214,75,0.30)",
                }}
              >
                <Calendar className="h-5 w-5" aria-hidden="true" />
                Agenda tu evaluación
              </a>
              <a
                href={CLIENT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 px-7 py-4 text-base font-semibold transition-colors"
                style={{
                  borderColor: "rgba(245,235,220,0.30)",
                  color: "var(--color-cream)",
                }}
              >
                Escríbenos por WhatsApp
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
