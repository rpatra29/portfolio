# Ritvik Patra Portfolio

Personal portfolio website built with [Astro](https://astro.build), GSAP, and
custom CSS. The site presents selected projects, experience, education, and
about information in an interactive timeline-style layout. Hosted on Cloudflare Pages.

Live site: [ritvikpatra.dev](https://ritvikpatra.dev)

## Development

Requirements:

- Node.js `22.22.0` or newer
- npm

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

Build and preview the production build locally:

```sh
npm run build
npm run preview
```

## Deploy

On a new machine, run `npx wrangler login` once before `npx wrangler deploy`.

Build the site, then publish the static assets in `./dist` (`wrangler.jsonc`):

```sh
npm run build
npx wrangler deploy
```
