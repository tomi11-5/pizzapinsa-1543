# Pura Passione – Pizza & Pinsa — Design System

## Concept
Trattoria italiana moderna en Tenerife: cálida, familiar, orgullosa de su tradición pero con un
toque contemporáneo y abierta a todo el mundo (LGBTQ+ friendly). Fotografía grande y apetitosa,
tipografía serif con carácter italiano, mucho contraste rojo tomate / verde oliva / crema.

## Colors
- `--tomato`: #C13D2E (rojo tomate profundo, color de marca / CTAs)
- `--tomato-dark`: #8F2A1F (hover / acentos oscuros)
- `--olive`: #5C6B3F (verde oliva, secundario)
- `--olive-dark`: #3E4A2A
- `--cream`: #FBF4E7 (fondo principal, blanco crema cálido)
- `--cream-2`: #F3E7D3 (fondo alterno / cards)
- `--charcoal`: #2A211B (texto principal, casi negro cálido)
- `--gold`: #C9A24B (detalles dorados, líneas divisorias, iconos)
- `--wood`: #6B4A34 (acentos madera, footer)

## Typography
- Display / Headings: "Fraunces" (serif elegante, con personalidad italiana, variable weight) — 600/700
- Body: "Manrope" (sans-serif limpia y cálida) — 400/500/600
- Hero headline: 3.5–5rem, tight leading, italic accents on key words.
- Section eyebrows: uppercase, letter-spacing 0.15em, gold color, small size.

## Layout & Spacing
- Max width 1240px content container, generous side padding (24px mobile, 64px+ desktop).
- Mobile-first single column; desktop introduces asymmetric 2-col split (image bleed + text).
- Section spacing: 96–140px vertical rhythm on desktop, 56–72px mobile.
- Torn-paper / wave dividers between sections using SVG clip-paths for a hand-made trattoria feel.
- Cards: soft shadows, thin gold hairline border, no heavy rounded-corner sameness — mix rounded
  photo blobs with straight-edged text blocks.

## Imagery
Local images in `packages/web/public/images/`: hero-pizza.jpg, pinsa.jpg, interior.jpg,
ingredients.jpg, oven.jpg, cheese-pull.jpg, dough.jpg. Large, high-contrast food photography,
warm color grading overlay (subtle tomato/gold gradient scrims behind text on images).

## Components
- Buttons: pill-shaped, tomato solid primary ("Pedir online"), outline gold/cream secondary
  ("Llamar" / "Cómo llegar"). Icon + label, hover lift + shadow.
- Rating badge: gold star cluster + "4,8★ (82 reseñas)" pill, cream bg, used in hero & reviews.
- Service cards: icon in circle (olive bg), title, short text, CTA link — 4 across desktop, stack mobile.
- Menu: tabbed or accordion categories (Pizzas clásicas, Pinsas, Entrantes, Bebidas, Postres),
  each item row = name + short description + price, dotted leader line between name and price
  (classic menu style).
- Testimonial cards: quote mark in gold, italic serif quote, author name, star row.
- Sticky mobile bottom bar: call + order buttons always reachable.

## Motion
- Fade/slide-up stagger on hero load (headline, subhead, badges, CTAs).
- Scroll-reveal fade-up for section headers and cards (Motion/framer-motion, subtle, once).

## Tone of voice
Cálido, cercano, orgulloso ("hecho con amor", "auténtica pasión italiana"), inclusivo.
