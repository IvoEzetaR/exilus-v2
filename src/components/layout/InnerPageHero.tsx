"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/design-system";
import Breadcrumb from "@/components/ui/Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface InnerPageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  bgImage?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function InnerPageHero({
  eyebrow,
  title,
  subtitle,
  bgImage,
  breadcrumbs,
}: InnerPageHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "calc(40px + 64px + 3rem)",
        paddingBottom: "5rem",
        minHeight: "420px",
      }}
    >
      {/* Background image with dark overlay */}
      {bgImage ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={bgImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
              aria-hidden="true"
            />
          </div>
          {/* Dark gradient overlay — same style as GlassCard in Services */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.30) 100%)",
            }}
            aria-hidden="true"
          />
          {/* Extra bottom gradient for legibility */}
          <div
            className="absolute inset-x-0 bottom-0 h-32"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.40) 0%, transparent 100%)",
            }}
            aria-hidden="true"
          />
        </>
      ) : (
        /* Fallback solid dark primary background */
        <>
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "var(--color-primary)" }}
          />
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div
              className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
              style={{ backgroundColor: "var(--color-lilac)" }}
            />
            <div
              className="absolute bottom-0 -left-20 w-[300px] h-[300px] rounded-full opacity-8 blur-3xl"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
          </div>
        </>
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {eyebrow && (
            <motion.div variants={staggerItem} className="mb-4">
              {/* Glassmorphism pill for eyebrow */}
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase"
                style={{
                  backgroundColor: "rgba(245, 235, 220, 0.12)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(245, 235, 220, 0.20)",
                  color: "rgba(245,235,220,0.80)",
                }}
              >
                <span
                  className="h-1 w-1 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "var(--color-cta)" }}
                  aria-hidden="true"
                />
                {eyebrow}
              </span>
            </motion.div>
          )}

          <motion.h1
            variants={staggerItem}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light leading-tight tracking-tight max-w-3xl"
            style={{ color: "var(--color-cream)" }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={staggerItem}
              className="mt-4 text-lg max-w-2xl leading-relaxed"
              style={{ color: "rgba(245,235,220,0.75)" }}
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div variants={staggerItem}>
            <Breadcrumb items={breadcrumbs} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
