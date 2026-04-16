"use client";

import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CLIENT } from "@/lib/client-data";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "top-0 shadow-sm border-b"
          : "top-10"
      }`}
      style={{
        backgroundColor: "var(--color-cream)",
        borderColor: scrolled ? "var(--color-border)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <a href="#inicio" className="flex items-center" aria-label="Exilus — inicio">
          <div className="relative h-10 w-10">
            <Image
              src="/images/exilus-logo.png"
              alt="Exilus — Cirugía Bariátrica Trujillo"
              fill
              sizes="40px"
              priority
              className="object-contain"
            />
          </div>
          <span
            className="ml-2 font-serif text-lg font-medium tracking-tight"
            style={{ color: "var(--color-primary)" }}
          >
            Exilus
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium transition-colors group"
              style={{ color: "var(--color-warm-text)" }}
            >
              {l.label}
              {/* Underline animado */}
              <span
                className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
            </a>
          ))}

          {/* CTA verde */}
          <motion.a
            href={CLIENT.booking}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold shadow-lg transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "var(--color-cta)",
              color: "#1a3a0a",
              boxShadow: "0 4px 16px rgba(120, 214, 75, 0.30)",
            }}
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Agenda tu evaluación
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg transition-colors hover:bg-primary/5"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          style={{ color: "var(--color-primary)" }}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t px-4 py-4 md:hidden"
            style={{
              backgroundColor: "var(--color-cream)",
              borderColor: "var(--color-border)",
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium border-b transition-colors hover:opacity-70"
                style={{
                  color: "var(--color-warm-text)",
                  borderColor: "var(--color-border)",
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href={CLIENT.booking}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold"
              style={{ backgroundColor: "var(--color-cta)", color: "#1a3a0a" }}
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Agenda tu evaluación
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
