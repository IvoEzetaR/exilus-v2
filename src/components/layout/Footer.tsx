import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { CLIENT } from "@/lib/client-data";

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const IconTikTok = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.78a8.18 8.18 0 004.78 1.52V6.85a4.85 4.85 0 01-1.01-.16z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "var(--color-primary-dark)" }}
      aria-label="Pie de página"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="relative h-14 w-14">
                <Image
                  src="/images/exilus-logo.png"
                  alt="Exilus — Cirugía Bariátrica Trujillo"
                  fill
                  sizes="56px"
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span
                className="font-serif text-2xl font-medium tracking-tight"
                style={{ color: "var(--color-cream)" }}
              >
                Exilus
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(245,235,220,0.70)" }}>
              Cirugía bariátrica y laparoscópica avanzada con excelencia médica,
              enfoque humano y resultados sostenibles en Trujillo, Perú.
            </p>

            {/* Redes sociales */}
            <div className="mt-6 flex gap-3">
              <a
                href={CLIENT.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Exilus"
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:border-cream/50 hover:opacity-80"
                style={{ borderColor: "rgba(245,235,220,0.20)", color: "rgba(245,235,220,0.70)" }}
              >
                <IconInstagram />
              </a>
              <a
                href={CLIENT.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Exilus"
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:border-cream/50 hover:opacity-80"
                style={{ borderColor: "rgba(245,235,220,0.20)", color: "rgba(245,235,220,0.70)" }}
              >
                <IconFacebook />
              </a>
              <a
                href={CLIENT.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok del Dr. Salazar"
                className="flex h-9 w-9 items-center justify-center rounded-full border transition-colors hover:border-cream/50 hover:opacity-80"
                style={{ borderColor: "rgba(245,235,220,0.20)", color: "rgba(245,235,220,0.70)" }}
              >
                <IconTikTok />
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4
              className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: "var(--color-cream)" }}
            >
              Contacto
            </h4>
            <div className="space-y-3 text-sm" style={{ color: "rgba(245,235,220,0.70)" }}>
              <a
                href={CLIENT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-opacity hover:opacity-80"
              >
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                {CLIENT.phone}
              </a>
              <a
                href={`mailto:${CLIENT.email}`}
                className="flex items-start gap-3 transition-opacity hover:opacity-80"
              >
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                {CLIENT.email}
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  Calle Los Laureles 436, Of. 403<br />
                  Urb. California<br />
                  Clínica Sanna Sánchez Ferrer<br />
                  Trujillo, Perú
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4
              className="font-sans text-xs font-semibold tracking-[0.15em] uppercase mb-5"
              style={{ color: "var(--color-cream)" }}
            >
              ¿Listo para dar el primer paso?
            </h4>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: "rgba(245,235,220,0.70)" }}>
              Agenda tu evaluación médica personalizada con el Dr. Salazar.
              Sin compromiso, sin presión.
            </p>
            <a
              href={CLIENT.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "var(--color-cta)",
                color: "#1a3a0a",
                boxShadow: "0 4px 16px rgba(120,214,75,0.25)",
              }}
            >
              Agenda tu evaluación
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-12 border-t pt-8 space-y-2 text-center"
          style={{ borderColor: "rgba(245,235,220,0.10)" }}
        >
          <p className="text-xs max-w-2xl mx-auto" style={{ color: "rgba(245,235,220,0.50)" }}>
            La evaluación médica personalizada es indispensable. Los resultados pueden variar según cada paciente.
          </p>
          <p className="text-xs" style={{ color: "rgba(245,235,220,0.35)" }}>
            © 2026 Exilus — Cirugía Bariátrica. Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: "rgba(245,235,220,0.25)" }}>
            Sitio web por{" "}
            <a
              href="https://www.ideagency.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-60"
            >
              IDE Agency
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
