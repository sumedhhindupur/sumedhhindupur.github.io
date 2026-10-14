# sumedhhindupur.github.io

Personal research site, built with [Astro 4](https://v4.docs.astro.build) and deployed to GitHub Pages.

## Run locally

```bash
npm install        # first time only
npm run dev        # http://localhost:4321, reloads as you edit
npm run build      # production build into dist/
```

## Editing content (no HTML needed)

| What | File |
|---|---|
| Name, photo, intro, links | `src/data/site.ts` (`site`) |
| Affiliation row | `src/data/site.ts` (`affiliations`) |
| News | `src/data/news.ts`, newest first; `visibleCount` sets how many show before "Older news" |
| Research projects and themes | `src/data/research.ts` |
| CV | replace `public/cv.pdf` |
| Blog posts | `src/content/writing/*.md` |

**Photo:** save as `public/photo.jpg`, then set `photo: '/photo.jpg'` in `site.ts`.

**Project visuals:** put files in `public/media/` and set `media: '/media/name.mp4'` (or `.png`/`.jpg`) in `research.ts`. Videos autoplay muted on a loop. Use a 4:3 aspect ratio and keep videos under ~3 MB (e.g. `ffmpeg -i in.mov -vf scale=800:-2 -an -crf 28 out.mp4`).

**Blog posts:** copy `src/content/writing/example-post.md`. The file name becomes the URL (`/writing/<file-name>/`). Front matter:
- `category: research` or `personal` picks the tab.
- `draft: true` hides the post from the live site but shows it in `npm run dev`.
- Math uses `$...$` and `$$...$$` (KaTeX).

**Changing the font:** edit the Google Fonts `<link>` in `src/layouts/Base.astro` and `--font-sans` / `--font-mono` at the top of `src/styles/global.css`. Colors and widths are variables in the same place.

## Deploying

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. One-time setup: repo **Settings → Pages → Source: GitHub Actions**.

If you move to a custom domain, update `site` in `astro.config.mjs` and add the domain under Settings → Pages.

## How the code works

- `astro.config.mjs`: site URL; enables math (`remark-math` parses `$...$`, `rehype-katex` renders it) and the light code-highlighting theme.
- `src/styles/global.css`: design tokens (fonts, colors, width) and shared styles: `.container` centers content, `.mono` is the small grey monospace style for dates and venues, and `h2.section` is the small uppercase section label.
- `src/layouts/Base.astro`: the shell for every page: `<head>` (title, description, fonts, KaTeX CSS only on posts via the `math` prop), top nav and footer.
- `src/pages/index.astro`: the homepage. Reads the three data files and renders the hero, affiliation row, news (first `visibleCount` items, the rest inside a `<details>` toggle), and research groups. `boldMe` bolds your name in author lists; `isVideo` picks `<video>` vs `<img>` by file extension; projects with `media: null` show a dotted placeholder. On screens under 640px everything stacks into one column.
- `src/content/config.ts`: the schema for blog posts (title, date, category, description, draft). Astro validates every post's front matter against it at build time.
- `src/components/PostList.astro`: the Writing page. Takes a `category`, loads the matching posts (drafts only in dev), sorts them newest first, and renders the Research | Personal tabs plus the list.
- `src/pages/writing/index.astro` and `personal.astro`: the two tabs. Each renders `PostList` with its category.
- `src/pages/writing/[...slug].astro`: one page per post. `getStaticPaths` builds a page for every non-draft post; the page renders the Markdown with post typography (wider line height, figure captions, code blocks).
- `.github/workflows/deploy.yml`: the build-and-deploy job using the official `withastro/action` and `actions/deploy-pages`.

Note: this uses Astro 4 because the local Node is v21. Astro's latest versions need Node 22+, so after `brew upgrade node` you can move to the current Astro.
