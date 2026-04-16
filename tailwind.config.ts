// Tailwind v4: la configuración de colores y tema se define en globals.css via @theme
// Este archivo existe para compatibilidad con tooling que espera tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
};

export default config;
