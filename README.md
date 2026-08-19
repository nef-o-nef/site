# nefo.cc

Astro static site. Content migrated out of the old PbootCMS install.

## Run

    npm install
    npm run dev        # http://localhost:4321

## Add or edit a work

One markdown file per work in `src/content/works/`. Filename becomes the URL.

    ---
    title: "Piece Name (2026)"
    year: 2026
    section: "Projects"        # Atom / Projects / Planet Roaming
    summary: "One line for search engines."
    cover: "/images/piece/cover.jpg"
    gallery:
      - "/images/piece/00.jpg"
      - "/images/piece/01.mp4"
    ---

    Body text. Two spaces at the end of a line make a hard break.

Fields are validated in `src/content.config.ts` — a typo fails the build instead
of shipping a broken page. Images go in `public/images/<slug>/`. Anything ending
in `.mp4` renders as a silent autoplay loop; everything else as an image.

## Deploy

1. Push to GitHub, branch `main`.
2. Settings → Pages → Source: **GitHub Actions**.
3. Custom domain under the same page, then at your registrar: four A records for
   the apex → 185.199.108–111.153, and CNAME `www` → `USER.github.io`.

## Migration notes

- 13 works recovered from the CMS database, with titles, body texts, covers and
  galleries. Years were read from the titles where present; `becoming-of-being`
  and `quantum-of-light` fell back to the CMS record date (2018) — check those.
- 174 media files reduced from 385 MB to 16 MB: images capped at 1600px wide,
  JPEG q80; the eight animated GIFs on *Quantum of Light* became mp4 loops
  (79 MB → 336 KB).
- Not carried over: a 32 MB mp4 and ten PDFs from the old uploads folder. Put
  video on Vimeo and link it rather than committing it.

## Design notes

Palette is sampled from the plasma and ion photographs in the work itself —
violet glow in a blue-black vacuum, with the warm arc that appears at the edge of
a discharge. Type scale is derived from just ratios on a 16px 1/1 (9/8, 5/4, 3/2,
7/4, 2/1). The index is a tuning dial: hovering a row fades that work's cover up
behind the page instead of showing a thumbnail grid.
