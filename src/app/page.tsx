import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Authority from "@/components/sections/Authority";
import Services from "@/components/sections/Services";
import Method from "@/components/sections/Method";
import Results from "@/components/sections/Results";
import CandidateTest from "@/components/sections/CandidateTest";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1 — Hero editorial */}
        <Hero />

        {/* 2 — Authority: Dr. Salazar, credenciales */}
        <Authority />

        {/* 3 — Services: 5 especialidades */}
        <Services />

        {/* 4 — Method: pilares + diferenciales + proceso 5 pasos */}
        <Method />

        {/* 5 — Results: stats confirmados con count-up */}
        <Results />

        {/* 6 — CandidateTest: quiz IMC interactivo */}
        <CandidateTest />

        {/* 7 — Testimonials: 3 slots placeholder */}
        <Testimonials />

        {/* 8 — FAQ: accordion con 5 preguntas del brief */}
        <FAQ />

        {/* 9 — FinalCTA: sección invertida morado */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
