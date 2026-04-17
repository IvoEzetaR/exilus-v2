# Hero Redesign — Cream Split Editorial
**Fecha:** 2026-04-17  
**Proyecto:** Exilus v2 (v2-hero-fullbleed)  
**Archivo objetivo:** `src/components/sections/Hero.tsx`

---

## Problema

El hero actual usa fullbleed oscuro (foto con overlay negro + gradiente vino). En mobile, los elementos flotantes (credential card, badge +16) están ocultos (`hidden sm:block`), resultando en texto genérico sobre fondo oscuro — sin gancho visual en el primer segundo.

---

## Solución: Cream Split Editorial

### Layout Mobile (375px base)
- Foto del doctor ocupa el tope: `w-full h-[50vh]`, `object-cover object-top`, `rounded-b-3xl`
- Sobre la foto: credential card (overlay bottom-right, versión compacta) + badge +16 (overlay top-right)
- Debajo de la foto: fondo crema `#F5EBDC`, padding `px-5 pt-8 pb-16`
- Secuencia vertical: eyebrow → H1 → subcopy → CTAs → trust items

### Layout Desktop (lg: 1024px+)
- Grid 2 columnas: `55% texto / 45% foto`
- Columna izquierda: fondo crema, centrado verticalmente, `pl-8 xl:pl-16`
- Columna derecha: foto full-height del contenedor (`min-h-screen`), `rounded-l-[2.5rem]`, sin dark overlay
- Credential card: flotante sobre la foto, bottom-left
- Badge +16: flotante sobre la foto, top-right

### Imagen
- Cambio de `doctor-quirofano.jpg` → `doctor-terno.jpg`
- Más cálido y profesional sobre fondo crema; el quirófano es válido para dark heroes, no para editorial cream

### Animación de entrada (kinetic typography)
Orden estricto con delays acumulados:

| Elemento | Tipo | Delay |
|---|---|---|
| Eyebrow pill | `fadeInUp` | 0.05s |
| Foto | fade opacity 0→1 | 0.10s |
| H1 línea 1 | `revealByLine` (mask reveal) | 0.20s |
| H1 línea 2 | `revealByLine` | 0.32s |
| Subcopy | `fadeInUp` | 0.44s |
| CTA primario | `fadeInUp` | 0.56s |
| CTA secundario | `fadeInUp` | 0.62s |
| Trust items | stagger 0.08s/item | 0.68s |
| Credential card | `scaleIn` | 0.80s |
| Badge +16 | `scaleIn` | 0.86s |

`revealByLine`: cada línea del H1 tiene wrapper `overflow-hidden`, el texto hace `y: "100%" → y: 0` — efecto "sale de debajo de una línea invisible", estilo editorial Awwwards.

### Paleta (sin cambios al sistema de diseño)
- Background: `var(--color-cream)` — `#F5EBDC`
- H1: `var(--color-primary)` — `#6C1D45` (vino, visible sobre crema)
- Eyebrow pill: bg `var(--color-lilac)` — `#DFD0F1`, texto `var(--color-primary)`
- CTA primario: `var(--color-cta)` — `#78D64B`
- Trust items: `var(--color-primary)` con opacidad

### Parallax
- En desktop: la foto hace `useTransform(scrollYProgress, [0,1], [0, -40])` — sube suavemente al scroll
- En mobile: sin parallax (performance)

### Credential card en mobile
- Tamaño reducido: `max-w-[160px]`, `p-3`, texto más pequeño
- Overlay sobre la foto: `absolute bottom-3 right-3 z-10`
- Background: `rgba(245,235,220,0.92)` — crema semi-opaco (legible sobre la foto sin necesidad de blur agresivo)
- Texto: vino oscuro sobre crema — sin necesidad de glassmorphism oscuro

### Badge en mobile
- `h-[56px] w-[56px]` (vs 72px en desktop)
- `absolute top-3 right-3 z-10`
- Background vino `var(--color-primary)` sólido (sin transparencia, más legible)

---

## Archivos afectados
- `src/components/sections/Hero.tsx` — reescritura completa del componente
- `src/lib/design-system.ts` — sin cambios (ya tiene todos los primitivos necesarios)
- `src/app/globals.css` — sin cambios

## Archivos NO afectados
- Resto de secciones (About, Services, CTA, etc.)
- Navbar, Footer
- Sistema de diseño global

---

## Self-review
- Sin placeholders ni TBDs
- Consistente con paleta y tokens existentes en `design-system.ts`
- Scope acotado: un solo componente
- Requisito mobile-first cumplido: el doctor es visible inmediatamente sin scroll
- Animación `revealByLine` ya existe en `design-system.ts`
