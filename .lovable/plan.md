
# Maskote and More — Website Plan

## Overview
A fun, colorful, professional single-page-style website (with route sections) for **Maskote and More** — a Zagreb-based entertainment rental service offering Stitch mascot hire, SubSoccer table hire, and custom mascot creation. The site targets parents, event organizers, schools, and companies. Language: **Croatian**.

---

## Color Palette & Style
- Inspired by the kids&coevents reference site: bright, playful colors — sky blue primary, coral/pink accents, white backgrounds, rounded corners
- Fun, friendly typography with bold headings
- Colorful gradients and soft shadows for cards
- The uploaded images will be used throughout as real photos for hero, services, and gallery

---

## Pages & Sections

### 1. Početna (Home) — Single scrollable page
**Header (sticky)**
- Logo: "Maskote and More" text logo
- Navigation: Početna · Ponuda · Galerija · Kontakt
- CTA button: "Rezerviraj termin" (links to WhatsApp or contact section)
- Transparent on hero → solid background on scroll

**Hero Section**
- Large headline: "Učini poseban trenutak još posebnijim"
- Subheadline: "Zabava koja dolazi na vaš događaj — maskote, SubSoccer i više!"
- CTA buttons: "Rezerviraj sada" + "Pošalji upit"
- Background: uploaded mascot/party image with colorful overlay

**Zašto baš mi? (Why us)**
- 3-4 feature cards with icons: Pouzdani, Brza rezervacija, Točan dolazak, Zabava za sve generacije

**Što nudimo (What we offer) — Preview cards**
- 3 cards linking to Ponuda section: Najam Stitch maskote, Najam SubSoccer stola, Izrada maskote po narudžbi
- Each with photo, short description, and CTA

**Za koga je (Who it's for)**
- Visual badges/icons: Rođendani, Proslave, Poslovni eventi, Škole i vrtići

**Upit za cijenu (Pricing CTA)**
- Banner section: "Cijena ovisi o lokaciji i trajanju — nazovite nas za brzu ponudu"
- Buttons: Nazovite nas (tel link) + WhatsApp poruka

---

### 2. Ponuda (Services) — `/ponuda`
Three detailed service sections:

**Najam Stitch maskote**
- Photo gallery from uploads, description, bullet points (dolazak na lokaciju, interakcija s djecom, fotografiranje)
- CTA: Rezerviraj maskotu

**Najam SubSoccer stola**
- Photos including dimensions image, description, bullet points (zabava za sve uzraste, brza instalacija)
- CTA: Rezerviraj SubSoccer

**Izrada maskote po narudžbi**
- Description, custom design info, bullet points
- CTA: Pošalji upit

---

### 3. Galerija (Gallery) — `/galerija`
- Title: "Galerija zabave"
- Filter tabs: Sve · Maskote · SubSoccer · Rođendani · Eventi
- Photo grid using all uploaded images
- Lightbox on click for full-size viewing

---

### 4. Kontakt (Contact) — `/kontakt`
- Contact info: Phone (+385 91 941 9053), WhatsApp, Email (kovadario628@gmail.com), Location (Zagreb)
- Contact form with fields: Ime i prezime, Email/Telefon, Tema (dropdown: Rezervacija/Upit/Ostalo), Poruka
- Submit button: "Pošalji upit za događaj"
- Floating WhatsApp button visible on all pages

---

### 5. Footer (all pages)
- Quick links to all sections
- Social media icons
- Phone & WhatsApp
- Copyright / legal text

---

## Interactions & Animations
- Smooth scroll navigation between sections
- Active nav highlighting on scroll
- Fade-in animations on scroll for cards, gallery items, and sections
- Hover scale effects on service cards and gallery images
- Sticky header: transparent over hero → solid on scroll

---

## Technical Notes
- No backend needed — this is a static/brochure website
- Contact form will open WhatsApp or mailto (no server-side form processing)
- All uploaded photos embedded directly as site assets
- Fully responsive (mobile-first)
- Croatian language throughout
