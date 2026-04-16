// === IDE Agency Design System — Exilus v2 Editorial Wine-Medical ===
// Todos los presets de animación Framer Motion se consumen desde aquí.
// NO inline variants en componentes.

import type { Variants, Transition, TargetAndTransition } from "framer-motion";

// ─── Easing ──────────────────────────────────────────────────────────────────
// easeOutExpo: se siente premium, no rebota
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

// ─── Patrón 1: Page load stagger (hero entry) ─────────────────────────────
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
};

// ─── Patrón 2: Scroll reveal por sección (fadeInUp) ───────────────────────
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

// Variante alternativa — del lado
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

// ─── Patrón 3: Kinetic typography — reveal por línea ──────────────────────
// Aplica overflow-hidden al span padre para efecto "mask reveal"
export const revealByLine: Variants = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT_EXPO },
  },
};

// Container para stagger de líneas
export const revealLineContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

// ─── Patrón 4: Hover micro-interactions ──────────────────────────────────
const springFast: Transition = { type: "spring", stiffness: 400, damping: 20 };
const springMedium: Transition = { type: "spring", stiffness: 300, damping: 20 };

export const scaleOnHover: {
  whileHover: TargetAndTransition;
  whileTap: TargetAndTransition;
} = {
  whileHover: { scale: 1.03, transition: springFast },
  whileTap: { scale: 0.97 },
};

export const cardHover: { whileHover: TargetAndTransition } = {
  whileHover: {
    y: -4,
    boxShadow: "0 20px 40px rgba(108, 29, 69, 0.12)",
    transition: springMedium,
  },
};

// ─── Parallax foto (scroll) ───────────────────────────────────────────────
// Usar con useScroll + useTransform en el componente
// export const parallaxFoto: input range [0,1] → output [-60px, 60px]
export const PARALLAX_RANGE: [number, number] = [0, 1];
export const PARALLAX_OUTPUT: [number, number] = [-60, 60];

// ─── Accordion (FAQ) ──────────────────────────────────────────────────────
export const accordionContent: Variants = {
  collapsed: { height: 0, opacity: 0, transition: { duration: 0.35, ease: EASE_OUT_EXPO } },
  expanded: { height: "auto", opacity: 1, transition: { duration: 0.4, ease: EASE_OUT_EXPO } },
};

export const accordionChevron: Variants = {
  collapsed: { rotate: 0 },
  expanded: { rotate: 180, transition: { duration: 0.35, ease: EASE_OUT_EXPO } },
};

// ─── Scale entrada (badges, pills) ───────────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
};

// ─── Viewport defaults ────────────────────────────────────────────────────
export const VIEWPORT_ONCE = { once: true, margin: "-80px" } as const;

// ─── Layout helpers ───────────────────────────────────────────────────────
export const sectionPadding = "px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24";
export const maxWidth = "max-w-7xl mx-auto";

// ─── Heading hierarchy (tipografía editorial) ─────────────────────────────
export const headings = {
  h1: "font-serif text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight text-primary",
  h2: "font-serif text-4xl sm:text-5xl font-light leading-tight tracking-tight text-primary",
  h3: "font-serif text-2xl sm:text-3xl font-normal leading-snug text-primary",
  eyebrow: "font-sans text-xs font-semibold tracking-[0.15em] uppercase text-primary/70",
  body: "font-sans text-base text-warm-text leading-relaxed",
  bodyMuted: "font-sans text-base text-muted-foreground leading-relaxed",
};

// ─── Transition defaults ─────────────────────────────────────────────────
export const springTransition: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 25,
};
