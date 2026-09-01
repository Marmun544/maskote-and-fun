# Centralizirani sadržaj stranice (jedan izvor teksta)

Dokument sa sadržajem nije stigao do mene (upload je prazan u ovoj poruci). Zato plan pripremam tako da se sav tekst stranice premjesti na **jedno mjesto**, pa kad pošalješ dokument, sadržaj se unosi samo tamo — bez diranja dizajna i rasporeda.

## Što se radi

1. **Nova datoteka sa svim tekstom** (`src/content/site.ts`) — naslovi, podnaslovi, opisi usluga, cijene, popisi "što je uključeno", tekst galerije i kontakta, SEO naslov/opis.
2. **Komponente čitaju tekst iz te datoteke**, umjesto da im je upisan direktno:
   - Hero (naslov, podnaslov, natpisi na slici, gumbi)
   - Što nudimo (5 kartica na početnoj)
   - Nogometna kombinacija
   - Ponuda (Maskote, SubSoccer, Penalty Challenge, Kombinacija, Kupnja SubSoccera, Naruči maskotu)
   - Zašto mi / Za koga / Poziv na rezervaciju
   - Galerija (naslov, opisi kategorija)
   - Kontakt (naslov, tekst, radno vrijeme ako ga dokument navodi)
   - Kalkulacija (naslov, opisi opcija)
   - `index.html` — SEO title, meta description, Open Graph
3. **Slike i cijene ostaju kakve jesu** osim ako dokument navodi drukčije.

## Kad pošalješ dokument

- Pročitam ga, izvučem tekst po sekcijama i popunim `src/content/site.ts`.
- Gdje dokument ima tekst za sekciju koja ne postoji, predložim gdje je dodati (ne dodajem novu sekciju bez tvoje potvrde).
- Gdje dokument nema tekst za postojeću sekciju, zadržavam trenutni tekst i javim ti popis takvih mjesta.
- Ako dokument mijenja cijene ili nazive usluga, primjenjujem ga kao izvor istine i izlistam sve promjene.

## Tehnički detalji

- `src/content/site.ts` izvozi tipizirane objekte po sekciji; komponente samo mapiraju podatke u postojeći JSX.
- Bez promjena u dizajn tokenima, Tailwind konfiguraciji ili strukturi ruta.
- Jezik ostaje hrvatski; WhatsApp poruke i mailto linkovi ostaju u istoj datoteci da se lako mijenjaju.

## Sljedeći korak

Pošalji dokument (PDF, DOCX ili tekst u chatu) i odmah ga unosim u sadržaj stranice.
