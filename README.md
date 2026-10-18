# Ritvik Patra — Portfolio

Personal portfolio website built with [Astro](https://astro.build), GSAP, and
custom CSS. The site presents selected projects, experience, education, and
about information in an interactive timeline-style layout.

## Development

Requirements:

- Node.js `22.22.0` or newer
- npm

Install dependencies and start the local development server:

```sh
npm install
npm run dev
```

The site is available at `http://localhost:4321`.

## Commands

| Command | Action |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production site in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run astro -- --help` | Show Astro CLI help |

## Project Structure

```text
/
├── public/              # Static images and icons
├── src/
│   ├── components/      # Portfolio sections
│   ├── data/            # Projects, timeline, and social links
│   ├── layouts/         # Shared page layout
│   ├── pages/           # Astro routes
│   └── styles/          # Global styles
└── package.json
```
