# Al Sheikh Al Sareesi | محلات الشيخ السيريسي

Website for a family business in Jenin, Palestine, trading in coffee, spices, nuts and food products since 1950.
Built with React and Vite. Bilingual (English / Arabic) with full RTL support.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  main.jsx                     Entry point (imports global.css)
  App.jsx                      Language state; keeps <html lang/dir> and body.ar in sync
  content/content.js           All copy (en + ar) and contact links
  styles/global.css            Design tokens (:root vars), reset, body font. Nothing component-specific
  assets/logo.png              Logo imported by components
  components/
    layout/                    Page chrome:   Nav, Footer
    sections/                  Page sections, in page order: Hero, About, Products, Business, Contact
    ui/                        Shared building blocks: Container, Section, SectionKicker,
                               SectionTitle, Button, Actions, Lines
```

Every component lives in its own folder with a co-located CSS module:

```
components/sections/Hero/Hero.jsx
components/sections/Hero/Hero.module.css
```

- Edit a component's look in its own `.module.css`; class names are scoped, so nothing leaks.
- Arabic/RTL tweaks sit at the bottom of each module under `:global(body.ar)`, next to the responsive `@media` rules.
- Colors and radius are shared via CSS variables in `styles/global.css`.
- Imports use the `@/` alias for `src/` (configured in `vite.config.js`).

## Editing content

Change text, phone number or social links in `src/content.js`. Each string has an `en` and an `ar` version.

## Deploying to GitHub Pages

Set the base path to the repository name when building:

```bash
VITE_BASE=/<repo-name>/ npm run build
```

## To do

- Replace the hero placeholder and product tiles with real photography
