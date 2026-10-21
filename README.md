# sumedhhindupur.github.io

Personal research site, built with [Astro 4](https://v4.docs.astro.build) and deployed to GitHub Pages.

## Run locally

```bash
npm install        # first time only
npm run dev        # http://localhost:4321, reloads as you edit
npm run build      # production build into dist/
```

## Pages

- `/`: **The Hindupur Gazette**, the homepage styled as an old broadsheet newspaper (`src/pages/index.astro`). The headlines, motto, profile wording and classifieds are written in that file; everything else comes from the data files below.
- `/plain/`: the **plain edition**, the earlier homepage restyled as a 1990s page, with a visitor counter (`src/pages/plain.astro`; its look is the `body.plain` block at the end of `src/styles/global.css`).
- `/writing/`: the Gazette's "Writing Desk", currently a coming-soon notice (`src/pages/writing/index.astro`).

## Editing content (no HTML needed)

| What | File |
|---|---|
| Name, photo, links | `src/data/site.ts` (`site`) |
| Affiliation row | `src/data/site.ts` (`affiliations`) |
| Tagline, keywords and position | `src/data/site.ts` (`tagline`, `keywords`, `position`) |
| Interests sentence (icons inline) | `src/data/site.ts` (`interests`) |
| Leadership and Organization section | `src/data/site.ts` (`leadership`) |
| News | `src/data/news.ts`, newest first; `visibleCount` sets how many show before "Older news" |
| Research projects and themes | `src/data/research.ts` |
| CV | replace `public/cv.pdf` |
| Blog posts | `src/content/writing/*.md` |

The footer's "Last updated" date is set automatically each time the site is built (every push).

**Email:** stored as two parts (`email.user`, `email.domain`) in `site.ts`, so the full address never appears in the page source or this repo. The footer shows it as `name [at] gmail [dot] com`, and email links build the `mailto:` only when clicked.

**Links and icons:** each entry in `links` has an `icon`: `scholar`, `github`, `linkedin`, `x`, `bluesky` or `cv`; interests take a list of `icons` from `running`, `tennis`, `books`, `guitar`, `music`.

**Photo:** save it in `public/` (currently `photo-talk.jpg`, cropped to 4:3), then set `photo` in `site.ts`.

**Project visuals:** put files in `public/media/` and set `media: '/media/name.mp4'` (or `.png`/`.jpg`) in `research.ts`. Videos autoplay muted on a loop. Use a 4:3 aspect ratio and keep videos under ~3 MB (e.g. `ffmpeg -i in.mov -vf scale=800:-2 -an -crf 28 out.mp4`).

Add `credit: { text: '© ...', url: '...' }` to a project to show a small credit line under its visual.

**Blog posts:** copy `src/content/writing/example-post.md`. The file name becomes the URL (`/writing/<file-name>/`). Front matter:
- `category: research` or `personal` picks the tab.
- `draft: true` hides the post from the live site but shows it in `npm run dev`.
- Math uses `$...$` and `$$...$$` (KaTeX).

**Changing the font:** edit the Google Fonts `<link>` in `src/layouts/Base.astro` and `--font-sans` / `--font-mono` at the top of `src/styles/global.css`. Colors (the "Navy & Autumn" palette: `--navy`, `--amber`, `--rust`, `--green`) and widths are variables in the same place. Research themes take their color from their position (1st navy, 2nd amber, 3rd rust); news tags are colored by type.

## Visitor stats

Private, cookie-free stats via GoatCounter: https://sumedhhindupur.goatcounter.com (the script is in `src/layouts/Base.astro`). Visits from `localhost` aren't counted.

## Deploying

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. One-time setup: repo **Settings → Pages → Source: GitHub Actions**.

If you move to a custom domain, update `site` in `astro.config.mjs` and add the domain under Settings → Pages.

## How the code works

- `astro.config.mjs`: site URL; enables math (`remark-math` parses `$...$`, `rehype-katex` renders it) and the light code-highlighting theme.
- `src/styles/global.css`: design tokens (fonts, colors, width) and shared styles: `.container` centers content, `.mono` is the small grey monospace style for dates and venues, and `h2.section` is the small uppercase section label.
- `src/layouts/Base.astro`: the shell for every page: `<head>` (title, description, fonts, KaTeX CSS only on posts via the `math` prop), top nav and footer.
- `src/pages/index.astro`: the homepage. Reads the three data files and renders the hero, affiliation row, news (first `visibleCount` items, the rest inside a `<details>` toggle), and research groups. `boldMe` bolds your name in author lists; `isVideo` picks `<video>` vs `<img>` by file extension; projects with `media: null` show a dotted placeholder. On screens under 640px everything stacks into one column.
- `src/components/Icon.astro`: inline SVG icons (brand logos from Simple Icons, mail/CV from Lucide), sized to the surrounding text and colored with `currentColor`.
- Email protection: links with class `js-email` carry the address split across `data-u` / `data-d`; a small script in `Base.astro` joins them into a `mailto:` on click.
- `src/content/config.ts`: the schema for blog posts (title, date, category, description, draft). Astro validates every post's front matter against it at build time.
- `src/pages/index.astro` (Gazette): `headlines` maps each paper to its newspaper headline; the profile, "The Story So Far" timeline, bulletins (5 shown, rest folded), research articles, Society Pages and Classifieds follow. Photos are greyscale with a dot screen and turn colour on hover.
- `src/pages/plain.astro`: the earlier homepage markup rendered with `<Base plain>`; the counter fetches the public total from GoatCounter and stays hidden if that fails.
- `src/pages/writing/index.astro`: standalone Gazette-styled coming-soon page.
- Link previews: `public/og.png` (1200×630) is referenced by the `og:image` tags on every page.
- `src/pages/writing/[...slug].astro`: one page per post. `getStaticPaths` builds a page for every non-draft post; the page renders the Markdown with post typography (wider line height, figure captions, code blocks).
- `.github/workflows/deploy.yml`: the build-and-deploy job using the official `withastro/action` and `actions/deploy-pages`.

Note: this uses Astro 4 because the local Node is v21. Astro's latest versions need Node 22+, so after `brew upgrade node` you can move to the current Astro.
