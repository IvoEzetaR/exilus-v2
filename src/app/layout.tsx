import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import TopBar from "@/components/layout/TopBar";
import { CLIENT } from "@/lib/client-data";

// ─── Tipografía ────────────────────────────────────────────────────────────
const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: "variable",       // variable font — activa opsz y wdth
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

// ─── Metadata ─────────────────────────────────────────────────────────────
const siteUrl = "https://exilus.pe";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Exilus | Cirugía Bariátrica Trujillo — Dr. Augusto Salazar",
    template: "%s | Exilus Cirugía Bariátrica",
  },
  description:
    "Cirugía bariátrica y laparoscópica avanzada en Trujillo. Dr. Augusto Salazar, 16 años de experiencia, pionero en el norte del Perú. Agenda tu evaluación.",
  keywords: [
    "cirugía bariátrica trujillo",
    "manga gástrica trujillo",
    "bypass gástrico trujillo",
    "cirugía laparoscópica trujillo",
    "obesidad tratamiento trujillo",
    "dr augusto salazar trujillo",
    "exilus cirugía bariátrica",
    "cirujano bariatra norte peru",
    "cirugía bariátrica la libertad",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: siteUrl,
    siteName: CLIENT.fullName,
    title: "Exilus — Cirugía Bariátrica en Trujillo | Dr. Augusto Salazar",
    description:
      "16 años de experiencia. Pionero en cirugía bariátrica en el norte del Perú. Manga gástrica, bypass y más — con acompañamiento integral.",
    images: [
      {
        url: "/images/doctor-terno.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Víctor Augusto Salazar Tantaleán — Cirujano Bariatra, Trujillo Perú",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exilus — Cirugía Bariátrica en Trujillo",
    description:
      "16 años de experiencia en cirugía abdominal. Pionero bariátrico en el norte del Perú.",
    images: ["/images/doctor-terno.jpg"],
  },
};

// ─── JSON-LD Schema ────────────────────────────────────────────────────────
const medicalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${siteUrl}/#organization`,
      name: CLIENT.fullName,
      url: siteUrl,
      telephone: CLIENT.phone,
      email: CLIENT.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Calle Los Laureles 436, Of. 403, Urb. California",
        addressLocality: "Trujillo",
        addressRegion: "La Libertad",
        addressCountry: "PE",
        postalCode: "13001",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "-8.1116",
        longitude: "-79.0287",
      },
      medicalSpecialty: [
        "http://schema.org/BariatricSurgery",
        "http://schema.org/SurgicalProcedure",
      ],
      description:
        "Centro especializado en cirugía bariátrica y laparoscópica avanzada en Trujillo, Perú. Pioneros en el norte del país.",
      areaServed: {
        "@type": "City",
        name: "Trujillo",
        containedInPlace: {
          "@type": "State",
          name: "La Libertad",
          containedInPlace: { "@type": "Country", name: "Perú" },
        },
      },
      sameAs: [
        CLIENT.social.instagram,
        CLIENT.social.facebook,
        CLIENT.social.tiktok,
      ],
    },
    {
      "@type": "Physician",
      "@id": `${siteUrl}/#physician`,
      name: CLIENT.doctor,
      jobTitle: "Cirujano Bariatra y Laparoscopista",
      description:
        "Cirujano Bariatra y Laparoscopista con más de 16 años de experiencia en cirugía abdominal y 10 años en cirugía bariátrica. Director del Hospital Regional Docente de Trujillo y Director Médico de Exilus. Pionero en cirugía bariátrica en el norte del Perú.",
      worksFor: [
        { "@id": `${siteUrl}/#organization` },
        {
          "@type": "Hospital",
          name: "Hospital Regional Docente de Trujillo",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Trujillo",
            addressCountry: "PE",
          },
        },
      ],
      medicalSpecialty: "http://schema.org/BariatricSurgery",
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", name: "Cirujano Bariatra y Laparoscopista" },
      ],
      knowsAbout: [
        "Cirugía bariátrica",
        "Manga gástrica",
        "Bypass gástrico",
        "Cirugía laparoscópica",
        "Cirugía digestiva",
        "Manejo de obesidad",
      ],
    },
  ],
};

// ─── Root Layout ───────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-PE" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }}
        />
      </head>
      <body className="font-sans bg-cream text-warm-text antialiased">
        <TopBar />
        {children}
        <WhatsAppButton phoneNumber={CLIENT.phone} />
      </body>
    </html>
  );
}
