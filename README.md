# Ritvik Patra Portfolio

Personal portfolio website built with [Astro](https://astro.build), GSAP, and
custom CSS. The site presents selected projects, experience, education, and
about information in an interactive timeline-style layout. Hosted on Cloudflare Pages.

Live site: [ritvikpatra.dev](https://ritvikpatra.dev)

## Development

Requirements:

- Node.js `22.22.0` or newer
- npm

Clone the repository and enter its directory:

```sh
git clone https://github.com/rpatra29/portfolio.git
cd portfolio
```

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

For a clean install using the exact versions in `package-lock.json`, run
`npm ci` instead of `npm install`. This removes any existing `node_modules`
directory before installing.

Build and preview the production build locally:

```sh
npm run build
npm run preview
```

## Project structure

- `src/pages/index.astro` — main page
- `src/layouts/Base.astro` — shared page layout
- `src/components/` — Hero and Journey components
- `src/data/` — checkpoints, projects, road, and social data
- `src/styles/global.css` — global styles

The `site` value in `astro.config.mjs` sets the base URL used by the shared
layout for canonical and Open Graph URLs. Update it if the production domain
changes.

## Deploy

On a new machine, run `npx wrangler login` once before `npx wrangler deploy`.

Build the site, then publish the static assets in `./dist` (`wrangler.jsonc`):

```sh
npm run build
npx wrangler deploy
```
