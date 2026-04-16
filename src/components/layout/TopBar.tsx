import { Phone, MapPin } from "lucide-react";
import { CLIENT } from "@/lib/client-data";

const IconInstagram = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3 w-3"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function TopBar() {
  return (
    <div
      className="h-10 flex items-center"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 flex items-center justify-between">
        {/* Teléfono */}
        <a
          href={CLIENT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs transition-opacity hover:opacity-80"
          style={{ color: "var(--color-cream)" }}
        >
          <Phone className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
          <span>{CLIENT.phone}</span>
        </a>

        {/* Dirección — hidden en mobile */}
        <span
          className="hidden lg:flex items-center gap-1.5 text-xs"
          style={{ color: "rgba(245,235,220,0.70)" }}
        >
          <MapPin className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
          Clínica Sanna Sánchez Ferrer · Trujillo, Perú
        </span>

        {/* Instagram */}
        <a
          href={CLIENT.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram de Exilus"
          className="flex items-center gap-1.5 text-xs transition-opacity hover:opacity-80"
          style={{ color: "var(--color-cream)" }}
        >
          <IconInstagram />
          <span>@exilus.pe</span>
        </a>
      </div>
    </div>
  );
}
