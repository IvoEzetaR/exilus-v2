import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import TopBar from "@/components/layout/TopBar";
import Footer from "@/components/layout/Footer";
import InnerPageHero from "@/components/layout/InnerPageHero";
import ServiceContent from "./ServiceContent";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.name} | Exilus — Cirugía Bariátrica Trujillo`,
    description: `${service.shortDescription} Dr. Víctor Augusto Salazar Tantaleán, cirujano bariatra y laparoscopista en Trujillo con más de 16 años de experiencia.`,
    openGraph: {
      title: `${service.name} — Exilus Cirugía Bariátrica`,
      description: service.shortDescription,
      url: `https://exilus.pe/servicios/${service.slug}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        name: `${service.name} — Exilus`,
        description: service.shortDescription,
        url: `https://exilus.pe/servicios/${service.slug}`,
        inLanguage: "es-PE",
        about: {
          "@type": "MedicalProcedure",
          name: service.name,
          procedureType: "https://schema.org/SurgicalProcedure",
          description: service.description[0],
          performedBy: {
            "@type": "Physician",
            name: "Dr. Víctor Augusto Salazar Tantaleán",
            jobTitle: "Cirujano Bariatra y Laparoscopista",
            worksFor: {
              "@type": "MedicalOrganization",
              name: "Exilus — Cirugía Bariátrica",
              url: "https://exilus.pe",
            },
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://exilus.pe",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Servicios",
            item: "https://exilus.pe/servicios",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.name,
            item: `https://exilus.pe/servicios/${service.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopBar />
      <Navbar />
      <main>
        <InnerPageHero
          eyebrow="Servicios especializados"
          title={service.name}
          subtitle={service.heroSubtitle}
          bgImage={service.image}
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Servicios", href: "/servicios" },
            { label: service.name },
          ]}
        />
        <ServiceContent service={service} />
      </main>
      <Footer />
    </>
  );
}
