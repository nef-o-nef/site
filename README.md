# nefo.cc

Astro static site. Four sections: Projects, Events, Diary, About.
The 13 works recovered from the old PbootCMS install live in `projects/`.

## Run locally

    npm install
    npm run dev        # http://localhost:4321

Leave that terminal running. Use a second window for git.

## Publish

    git add -A
    git commit -m "what changed"
    git push

GitHub Actions rebuilds and republishes in about a minute. Check the Actions tab.

## IMPORTANT: base path

If the site lives at `USER.github.io/REPO`, `astro.config.mjs` must say:

    base: '/REPO'

With `base: '/'` the home page loads but every nav link 404s. Only use `base: '/'`
when a custom domain (nefo.cc) points at the repo, or the repo is literally named
`USER.github.io`.

## Adding content

One markdown file per entry. Filename becomes the URL. Fields are validated in
`src/content.config.ts`, so a typo fails the build instead of shipping broken.
Set `draft: true` to keep something out of the built site.

### A project — `src/content/projects/piece-name.md`

    ---
    title: "Piece Name (2026)"
    year: 2026
    section: "Projects"
    summary: "One line for search engines."
    cover: "/images/piece-name/cover.jpg"
    gallery:
      - "/images/piece-name/00.jpg"
      - "/images/piece-name/01.mp4"
    ---

    Body text. Two spaces at the end of a line force a hard break.

Images go in `public/images/<slug>/`. Anything ending `.mp4` renders as a silent
autoplay loop; everything else as an image. Resize to ~1600px before committing —
GitHub Pages has a 1 GB soft repo limit.

### An event — `src/content/events/2026-09-caves-bouwput.md`

    ---
    title: "Caves and Room Topology"
    date: 2026-09-14
    endDate: 2026-09-20     # optional, for runs
    venue: "De Bouwput"
    city: "Amsterdam"
    kind: "installation"    # optional
    with: "XiaoJia"         # optional
    link: "https://..."     # optional
    ---

Upcoming and past are split automatically by comparing against today's date —
nothing to move by hand. Name files `YYYY-MM-slug.md` so they sort in the folder.

### A diary entry — `src/content/diary/2026-08-19-title.md`

    ---
    title: "Moving off the old site"
    date: 2026-08-19
    images: []
    ---

    Short update, a few paragraphs.

## Design notes

Palette sampled from the plasma and ion photographs in the work itself: violet
glow in a blue-black vacuum, with the warm arc at the edge of a discharge. Type
scale derived from just ratios on a 16px 1/1 (9/8, 5/4, 3/2, 7/4, 2/1). The
project index is a tuning dial — hovering a row fades that work's cover up behind
the page rather than showing a thumbnail grid.

Edit the four colour variables at the top of `src/styles/global.css` to reskin
the whole site.
