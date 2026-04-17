# Hero Redesign — Cream Split Editorial

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reemplazar el hero fullbleed oscuro por un layout cream split editorial que en mobile muestra al doctor inmediatamente (foto arriba, contenido abajo) con animación kinetic de headline tipo Awwwards.

**Architecture:** Componente Hero.tsx reescrito con dos layouts: mobile (foto 50vh tope + contenido crema) y desktop (grid 55/45 — texto izquierda, foto derecha con rounded-l). Las animaciones usan delays explícitos en lugar de staggerContainer anidado, garantizando orden preciso. Credential card y badge visibles en ambos breakpoints.

**Tech Stack:** Next.js 15, Framer Motion 12, Tailwind CSS v4, TypeScript

---

## Files

| Acción | Archivo |
|--------|---------|
| Modify | `src/components/sections/Hero.tsx` |
| No cambios | `src/lib/design-system.ts`, `src/app/globals.css`, resto de secciones |

---

### Task 1: Reescribir Hero.tsx con cream split layout

**Files:**
- Modify: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Reemplazar el contenido completo de Hero.tsx**

Reemplazar todo el archivo con:

```tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";
import Image from "next/image";
import { CLIENT } from "@/lib/client-data";
import { scaleOnHover, EASE_OUT_EXPO } from "@/lib/design-system";

const trustItems = [
  "16 años de experiencia en cirugía abdominal",
  "10 años en cirugía bariátrica",
  "Pionero en el norte del Perú",
];

export default function Hero() {
  const photoRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: photoRef,
    offset: ["start start", "end start"],
  });

  // Parallax suave en desktop — la foto sube 40px al hacer scroll
  const photoY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduce ? [0, 0] : [0, -40]
  );

  return (
    <section id="inicio" aria-label="Sección principal" className="bg-cream">

      {/* ── MOBILE layout (oculto en lg+) ── */}
      <div className="lg:hidden">

        {/* Foto del doctor — tope, full-width */}
        <div className="relative w-full h-[50vh] overflow-hidden rounded-b-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="absolute inset-0"
          >
            <Image
              src="/images/doctor-terno.jpg"
              alt="Dr. Víctor Augusto Salazar Tantaleán, cirujano bariatra en Trujillo"
              fill
              priority
              sizes="100vw"
              className="object-cover object-top"
              quality={90}
            />
          </motion.div>

          {/* Credential card — overlay bottom-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: EASE_OUT_EXPO }}
            className="absolute bottom-3 right-3 z-10 rounded-xl p-3 max-w-[160px] shadow-lg"
            style={{ backgroundColor: "rgba(245,235,220,0.94)" }}
          >
            <p
              className="text-xs font-bold leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Dr. Víctor A. Salazar T.
            </p>
            <p
              className="text-[10px] mt-1 leading-snug"
              style={{ color: "var(--color-primary-dark)" }}
            >
              Cirujano Bariatra
              <br />
              Director HRDT
            </p>
            <div className="mt-1.5 flex items-center gap-1">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--color-cta)" }}
                aria-hidden="true"
              />
              <span
                className="text-[9px] font-semibold"
                style={{ color: "#1a4a0a" }}
              >
                Disponible · Trujillo
              </span>
            </div>
          </motion.div>

          {/* Badge +16 años — overlay top-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.86, ease: EASE_OUT_EXPO }}
            className="absolute top-3 left-3 z-10 h-14 w-14 flex flex-col items-center justify-center rounded-full shadow-lg"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            <span className="text-lg font-bold leading-none text-white">+16</span>
            <span className="text-[8px] font-semibold text-white/80 text-center leading-tight mt-0.5">
              años
            </span>
          </motion.div>
        </div>

        {/* Contenido — crema */}
        <div className="px-5 pt-8 pb-16">

          {/* Eyebrow pill */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05, ease: EASE_OUT_EXPO }}
          >
            <span
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase mb-6"
              style={{ backgroundColor: "var(--color-lilac)", color: "var(--color-primary)" }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--color-cta)" }}
                aria-hidden="true"
              />
              Cirugía Bariátrica · Trujillo, Perú
            </span>
          </motion.div>

          {/* H1 — kinetic reveal por línea */}
          <h1
            className="font-serif text-5xl font-light leading-[1.05] tracking-tight mb-6"
            style={{ color: "var(--color-primary)" }}
          >
            <span className="block overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, delay: 0.2, ease: EASE_OUT_EXPO }}
                className="block"
              >
                Transforma tu salud.
              </motion.span>
            </span>
            <span className="block overflow-hidden mt-1">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, delay: 0.32, ease: EASE_OUT_EXPO }}
                className="block italic"
              >
                Recupera tu vida.
              </motion.span>
            </span>
          </h1>

          {/* Subcopy */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.44, ease: EASE_OUT_EXPO }}
            className="text-base leading-relaxed mb-8"
            style={{ color: "var(--color-warm-text)" }}
          >
            Cirugía bariátrica y laparoscópica avanzada con un enfoque
            integral, seguro y personalizado.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.56, ease: EASE_OUT_EXPO }}
            className="flex flex-col gap-3 mb-9"
          >
            <motion.a
              href={CLIENT.booking}
              target="_blank"
              rel="noopener noreferrer"
              {...scaleOnHover}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold"
              style={{
                backgroundColor: "var(--color-cta)",
                color: "var(--color-cta-foreground)",
                boxShadow: "0 8px 24px rgba(120,214,75,0.30)",
              }}
            >
              <Calendar className="h-5 w-5" aria-hidden="true" />
              Agenda tu evaluación
            </motion.a>
            <motion.a
              href={CLIENT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              {...scaleOnHover}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 px-7 py-4 text-base font-semibold"
              style={{
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)",
                backgroundColor: "transparent",
              }}
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Escríbenos por WhatsApp
            </motion.a>
          </motion.div>

          {/* Trust items — stagger */}
          <motion.ul
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.68 } },
            }}
            className="space-y-2.5"
            aria-label="Credenciales del doctor"
          >
            {trustItems.map((item) => (
              <motion.li
                key={item}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
                  },
                }}
                className="flex items-center gap-3"
              >
                <span
                  className="h-1 w-6 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "var(--color-primary)" }}
                  aria-hidden="true"
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--color-warm-text)" }}
                >
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* ── DESKTOP layout (oculto en <lg) ── */}
      <div className="hidden lg:grid lg:grid-cols-[55fr_45fr] min-h-screen">

        {/* Columna izquierda — contenido sobre crema */}
        <div className="flex items-center pl-8 xl:pl-16 pr-8 pt-32 pb-24">
          <div className="max-w-xl">

            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05, ease: EASE_OUT_EXPO }}
            >
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase mb-8"
                style={{ backgroundColor: "var(--color-lilac)", color: "var(--color-primary)" }}
              >
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "var(--color-cta)" }}
                  aria-hidden="true"
                />
                Cirugía Bariátrica · Trujillo, Perú
              </span>
            </motion.div>

            {/* H1 — kinetic reveal */}
            <h1
              className="font-serif text-6xl xl:text-7xl font-light leading-[1.05] tracking-tight mb-8"
              style={{ color: "var(--color-primary)" }}
            >
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.65, delay: 0.2, ease: EASE_OUT_EXPO }}
                  className="block"
                >
                  Transforma tu salud.
                </motion.span>
              </span>
              <span className="block overflow-hidden mt-1">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.65, delay: 0.32, ease: EASE_OUT_EXPO }}
                  className="block italic"
                >
                  Recupera tu vida.
                </motion.span>
              </span>
            </h1>

            {/* Subcopy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44, ease: EASE_OUT_EXPO }}
              className="text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: "var(--color-warm-text)" }}
            >
              Cirugía bariátrica y laparoscópica avanzada con un enfoque
              integral, seguro y personalizado.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.56, ease: EASE_OUT_EXPO }}
              className="flex flex-row gap-3 mb-10"
            >
              <motion.a
                href={CLIENT.booking}
                target="_blank"
                rel="noopener noreferrer"
                {...scaleOnHover}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-4 text-base font-semibold"
                style={{
                  backgroundColor: "var(--color-cta)",
                  color: "var(--color-cta-foreground)",
                  boxShadow: "0 8px 24px rgba(120,214,75,0.30)",
                }}
              >
                <Calendar className="h-5 w-5" aria-hidden="true" />
                Agenda tu evaluación
              </motion.a>
              <motion.a
                href={CLIENT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                {...scaleOnHover}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 px-7 py-4 text-base font-semibold"
                style={{
                  borderColor: "var(--color-primary)",
                  color: "var(--color-primary)",
                  backgroundColor: "transparent",
                }}
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Escríbenos por WhatsApp
              </motion.a>
            </motion.div>

            {/* Trust items — stagger */}
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.68 } },
              }}
              className="space-y-2.5"
              aria-label="Credenciales del doctor"
            >
              {trustItems.map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    show: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5, ease: EASE_OUT_EXPO },
                    },
                  }}
                  className="flex items-center gap-3"
                >
                  <span
                    className="h-1 w-6 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "var(--color-primary)" }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--color-warm-text)" }}
                  >
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Columna derecha — foto con parallax */}
        <div ref={photoRef} className="relative overflow-hidden rounded-l-[2.5rem] my-6 mr-6">
          <motion.div
            style={{ y: photoY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="absolute inset-0 scale-[1.06]"
          >
            <Image
              src="/images/doctor-terno.jpg"
              alt="Dr. Víctor Augusto Salazar Tantaleán, cirujano bariatra en Trujillo"
              fill
              priority
              sizes="45vw"
              className="object-cover object-top"
              quality={90}
            />
          </motion.div>

          {/* Credential card — desktop, bottom-left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: EASE_OUT_EXPO }}
            className="absolute bottom-6 left-6 z-10 rounded-2xl p-4 max-w-[220px] shadow-2xl"
            style={{
              backgroundColor: "rgba(245,235,220,0.95)",
              backdropFilter: "blur(8px)",
            }}
          >
            <p
              className="text-xs font-bold leading-tight"
              style={{ color: "var(--color-primary)" }}
            >
              Dr. Víctor A. Salazar T.
            </p>
            <p
              className="text-[10px] mt-1 leading-snug"
              style={{ color: "var(--color-primary-dark)" }}
            >
              Cirujano Bariatra
              <br />
              Director Médico Exilus
              <br />
              Director HRDT
            </p>
            <div className="mt-2 flex items-center gap-1.5">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--color-cta)" }}
                aria-hidden="true"
              />
              <span
                className="text-[10px] font-semibold"
                style={{ color: "#1a4a0a" }}
              >
                Disponible en Trujillo
              </span>
            </div>
          </motion.div>

          {/* Badge +16 años — desktop, top-right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.86, ease: EASE_OUT_EXPO }}
            className="absolute top-6 right-6 z-10 h-[72px] w-[72px] flex flex-col items-center justify-center rounded-full shadow-xl"
            style={{
              backgroundColor: "var(--color-primary)",
              boxShadow: "0 8px 24px rgba(108,29,69,0.40)",
            }}
          >
            <span className="text-xl font-bold leading-none text-white">+16</span>
            <span className="text-[8px] font-semibold text-white/80 text-center leading-tight mt-0.5">
              años
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verificar que TypeScript compila**

```bash
cd /c/Users/danie/OneDrive/Escritorio/WEBS/exilus/v2-hero-fullbleed
npm run build 2>&1 | tail -20
```

Esperado: sin errores de tipo. Si hay error de `EASE_OUT_EXPO` no exportado, verificar que `src/lib/design-system.ts` lo exporta (ya lo hace en la línea 9).

---

### Task 2: Verificación visual en dev server

**Files:**
- No cambios de código

- [ ] **Step 1: Iniciar dev server**

```bash
cd /c/Users/danie/OneDrive/Escritorio/WEBS/exilus/v2-hero-fullbleed
npm run dev
```

- [ ] **Step 2: Verificar mobile (375px)**

Abrir http://localhost:3000 en Chrome DevTools → toggle device toolbar → iPhone SE (375px).

Checklist mobile:
- [ ] Foto del doctor visible inmediatamente al cargar (no hay que scrollear)
- [ ] Credential card visible sobre la foto (bottom-right)
- [ ] Badge +16 visible sobre la foto (top-left)
- [ ] Headline se revela línea por línea con efecto "sube desde abajo"
- [ ] CTAs en columna (no en fila)
- [ ] Fondo crema #F5EBDC, sin fondo oscuro
- [ ] Trust items aparecen en stagger

- [ ] **Step 3: Verificar desktop (1280px)**

Cambiar a 1280px en DevTools o abrir en ventana completa.

Checklist desktop:
- [ ] Grid 2 columnas — texto izquierda, foto derecha
- [ ] Foto con rounded-l-[2.5rem] y gap de 6px en top/right/bottom
- [ ] Credential card bottom-left sobre la foto
- [ ] Badge +16 top-right sobre la foto
- [ ] Headline kinetic igual que mobile
- [ ] CTAs en fila (no en columna)
- [ ] Al hacer scroll, la foto sube levemente (parallax)

- [ ] **Step 4: Verificar animación de entrada**

Recargar la página con throttling "Fast 3G" en DevTools para ver el stagger en slow motion.

Orden esperado: eyebrow → foto → línea 1 H1 → línea 2 H1 → subcopy → CTAs → trust items → cards.

---

### Task 3: Commit y push a GitHub

**Files:**
- Commit: `src/components/sections/Hero.tsx`, `docs/superpowers/`

- [ ] **Step 1: Verificar estado git**

```bash
cd /c/Users/danie/OneDrive/Escritorio/WEBS/exilus/v2-hero-fullbleed
git status
```

Esperado: Hero.tsx modified, docs/ untracked.

- [ ] **Step 2: Stage y commit**

```bash
git add src/components/sections/Hero.tsx docs/
git commit -m "redesign: hero cream split editorial — mobile-first

- Swap fullbleed dark overlay for cream split layout (55/45 desktop)
- Mobile: doctor photo 50vh top with credential card + badge overlay
- Kinetic H1 reveal: each line slides up from overflow-hidden mask
- Explicit delay chain: eyebrow→photo→H1 lines→subcopy→CTAs→trust→cards
- Parallax on desktop photo column (y: 0→-40px on scroll)
- Remove hidden sm:block — all trust elements visible on mobile

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

- [ ] **Step 3: Push a GitHub (auto-deploy Vercel)**

```bash
git push origin master
```

Esperado: push exitoso. Vercel detecta el push y despliega automáticamente.

- [ ] **Step 4: Confirmar deploy en Vercel**

En https://vercel.com/dashboard buscar el proyecto `exilus-v2`. Esperar que el deploy muestre "Ready". Abrir la URL de producción y repetir el checklist mobile del Task 2 Step 2.

---

## Self-Review

**Spec coverage:**
- ✅ Mobile: foto al tope h-[50vh] con rounded-b-3xl
- ✅ Credential card visible en mobile como overlay (no hidden sm:block)
- ✅ Badge +16 visible en mobile
- ✅ H1 revealByLine con overflow-hidden wrapper
- ✅ Delays exactos según spec (0.05, 0.10, 0.20, 0.32, 0.44, 0.56, 0.68, 0.80, 0.86)
- ✅ Imagen cambiada a doctor-terno.jpg
- ✅ Desktop 55/45 grid con rounded-l-[2.5rem] my-6 mr-6
- ✅ Parallax desktop (y: 0 → -40px)
- ✅ Fondo crema sin dark overlay

**Placeholders:** Ninguno. Todo el código está completo.

**Type consistency:** `EASE_OUT_EXPO` exportado desde design-system.ts línea 9. `scaleOnHover` exportado desde design-system.ts línea 84. `CLIENT.booking` y `CLIENT.whatsapp` en client-data.ts.
