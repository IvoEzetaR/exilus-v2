"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  staggerContainer,
  staggerItem,
  VIEWPORT_ONCE,
} from "@/lib/design-system";
import { SERVICES } from "@/lib/services-data";

function GlassServiceCard({ s }: { s: (typeof SERVICES)[0] }) {
  return (
    <motion.div variants={staggerItem} className="h-full">
      <Link href={`/servicios/${s.slug}`} className="group block h-full">
        <article className="relative overflow-hidden rounded-2xl sm:rounded-[28px] min-h-[360px] sm:min-h-[400px] flex flex-col justify-end h-full">
          {/* Background image with zoom on hover */}
          <div className="absolute inset-0 overflow-hidden rounded-[28px]">
            <div className="absolute inset-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
              <Image
                src={s.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0 rounded-[28px]"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.40) 50%, rgba(0,0,0,0.15) 100%)",
            }}
            aria-hidden="true"
          />

          {/* Number watermark */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-3 right-4 sm:top-6 sm:right-8 select-none font-serif font-light leading-none opacity-[0.12]"
            style={{
              fontSize: "clamp(4rem, 12vw, 8rem)",
              color: "#fff",
              letterSpacing: "-0.06em",
            }}
          >
            {s.number}
          </div>

          {/* Glass panel */}
          <div className="relative p-3 sm:p-5">
            <div
              className="rounded-xl sm:rounded-2xl p-3 sm:p-5 transition-all duration-500 group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
              style={{
                backgroundColor: "rgba(245, 235, 220, 0.10)",
                backdropFilter: "blur(20px) saturate(180%)",
                WebkitBackdropFilter: "blur(20px) saturate(180%)",
                border: "1px solid rgba(245, 235, 220, 0.15)",
              }}
            >
              {/* Eyebrow row */}
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/60">
                  {s.tag}
                </span>
                <span className="font-serif text-sm tabular-nums text-white/35">
                  — {s.number}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-serif text-lg sm:text-[22px] font-normal leading-[1.15] text-white mb-2"
                style={{ letterSpacing: "-0.015em" }}
              >
                {s.name}
              </h3>

              {/* Short description */}
              <p className="text-xs sm:text-[13px] leading-relaxed text-white/70 mb-3 line-clamp-2">
                {s.shortDescription}
              </p>

              {/* Procedure chips */}
              <div className="flex flex-wrap gap-1 mb-3.5">
                {s.steps
                  .slice(0, 3)
                  .map((step) => (
                    <span
                      key={step.title}
                      className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.10)",
                        color: "rgba(255, 255, 255, 0.80)",
                        border: "1px solid rgba(255, 255, 255, 0.10)",
                      }}
                    >
                      {step.title}
                    </span>
                  ))}
              </div>

              {/* CTA */}
              <span
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white transition-all duration-300 group-hover:gap-2.5"
                aria-label={`Conocer más sobre ${s.name}`}
              >
                Conocer más
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

export default function ServiceCardGrid() {
  return (
    <section
      className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT_ONCE}
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => (
            <GlassServiceCard key={service.slug} s={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
