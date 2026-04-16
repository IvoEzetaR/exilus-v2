# {NOMBRE_NEGOCIO} - Proyecto Web IDE Agency

## Cliente
- **Negocio**: {NOMBRE_NEGOCIO}
- **Industria**: {INDUSTRIA}
- **Paquete**: {PAQUETE}
- **Deadline**: {DEADLINE}

## Tech Stack
- Next.js 15 + TypeScript + App Router
- Tailwind CSS con CSS variables (theming en globals.css)
- Framer Motion (animaciones)
- Lucide React (iconos)
- Vercel (hosting)

## Comandos
- `npm run dev` — desarrollo local (http://localhost:3000)
- `npm run build` — build de produccion
- `npm run lint` — linter

## Estructura
```
src/
├── app/           # Paginas (App Router)
├── components/
│   ├── layout/    # Navbar, Footer
│   ├── sections/  # Hero, Services, About, CTA, etc.
│   └── ui/        # Button, WhatsAppButton, Card
└── lib/
    ├── utils.ts           # cn() helper
    └── design-system.ts   # Animaciones, spacing, headings
```

## Colores de marca
Editar CSS variables en `src/app/globals.css`:
- `--primary`: Color principal de la marca
- `--accent`: Color de acento
- `--background`: Fondo principal
- Los colores usan formato HSL sin "hsl()": `262 83% 58%`

## Standards de calidad
- Mobile-first (375px base)
- Lighthouse >90 en 4 metricas
- Copy estilo Apple: headlines 4-8 palabras, beneficio primero
- WCAG AA contraste minimo
- Todas las imagenes con Next.js Image + alt descriptivo
- Schema markup en layout.tsx

## Deploy
1. Push a GitHub: `IvoEzetaR/{slug}`
2. Conectar repo en Vercel
3. Deploy automatico en cada push
