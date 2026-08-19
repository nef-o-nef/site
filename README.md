# nefo.cc

Astro static site. Four sections: Projects (archive), Events, Diary, About.

## Run

    npm install
    npm run dev        # http://localhost:4321

## Content

Everything is markdown under `src/content/`. Filename becomes the URL. Every
file supports `draft: true` to hide it from the site while you work on it.

### Projects — `src/content/projects/`

    ---
    title: "Piece Name (2026)"
    year: 2026
    section: "Projects"
    summary: 'One line for search engines. Single quotes if it contains "quotes".'
    cover: "/images/piece/cover.jpg"
    gallery:
      - "/images/piece/00.jpg"
      - "/images/piece/01.mp4"
    ---

    Body text. Two trailing spaces make a hard line break.

Images go in `public/images/<slug>/`. Anything ending `.mp4` renders as a silent
autoplay loop; everything else as an image.

### Events — `src/content/events/`

    ---
    title: "Caves and Room Topology"
    date: 2026-09-14
    endDate: 2026-09-20      # optional, for runs
    venue: "De Bouwput"
    city: "Amsterdam"
    kind: "installation"     # optional
    with: "XiaoJia"          # optional
    link: "https://..."      # optional
    ---

No body needed. The page splits itself: anything whose date (or endDate) has
passed moves from Upcoming to Past automatically, and the three nearest dates
appear on the home page. Nothing to maintain by hand.

### Diary — `src/content/diary/`

    ---
    title: "Moving off the old site"
    date: 2026-08-19
    images: []
    ---

    Body text.

## Deploy

Push to `main`. Settings → Pages → Source: **GitHub Actions**. For nefo.cc: add
it under the same page, then four A records for the apex → 185.199.108–111.153,
and CNAME `www` → `USER.github.io`.

## Design notes

Palette sampled from the plasma and ion photographs in the work itself: violet
glow in a blue-black vacuum, with the warm arc that appears at the edge of a
discharge. Type scale derived from just ratios on a 16px 1/1. The project index
is a tuning dial — hovering a row fades that work's cover up behind the page.
