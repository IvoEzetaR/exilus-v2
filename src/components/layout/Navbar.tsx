"use client";

import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { CLIENT } from "@/lib/client-data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hybrid links: anchor on home, absolute path elsewhere
  const links = [
    { label: "Inicio", href: isHome ? "#inicio" : "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Proceso", href: isHome ? "#proceso" : "/#proceso" },
    { label: "Testimonios", href: isHome ? "#testimonios" : "/#testimonios" },
    { label: "FAQ", href: isHome ? "#faq" : "/#faq" },
    { label: "Contacto", href: isHome ? "#contacto" : "/#contacto" },
  ];

  const textColor = scrolled
    ? "var(--color-warm-text)"
    : "rgba(245,235,220,0.85)";
  const underlineColor = scrolled ? "var(--color-primary)" : "#F5EBDC";

  return (
    <nav
      className={`fixed left-0 right-0 z-40 top-10 transition-all duration-300 ${
        scrolled ? "shadow-sm border-b" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "var(--color-cream)" : "transparent",
        borderColor: scrolled ? "var(--color-border)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Exilus — inicio">
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
            className="ml-2 font-serif text-lg font-medium tracking-tight transition-colors duration-300"
            style={{ color: scrolled ? "var(--color-primary)" : "#F5EBDC" }}
          >
            Exilus
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => {
            const isAnchor = l.href.startsWith("#");
            const isActive =
              l.href === "/servicios" && pathname.startsWith("/servicios");
            return isAnchor ? (
              <a
                key={l.label}
                href={l.href}
                className="relative text-sm font-medium transition-colors duration-300 group"
                style={{ color: textColor }}
              >
                {l.label}
                <span
                  className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: underlineColor }}
                />
              </a>
            ) : (
              <Link
                key={l.label}
                href={l.href}
                className="relative text-sm font-medium transition-colors duration-300 group"
                style={{
                  color: isActive
                    ? scrolled
                      ? "var(--color-primary)"
                      : "#F5EBDC"
                    : textColor,
                }}
              >
                {l.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  style={{ backgroundColor: underlineColor }}
                />
              </Link>
            );
          })}

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
          className="md:hidden p-2 rounded-lg transition-colors"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          style={{
            color: scrolled || open ? "var(--color-primary)" : "#F5EBDC",
          }}
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
            {links.map((l) => {
              const isAnchor = l.href.startsWith("#");
              return isAnchor ? (
                <a
                  key={l.label}
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
              ) : (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium border-b transition-colors hover:opacity-70"
                  style={{
                    color: "var(--color-warm-text)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
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
