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
public/logo.png          Logo with transparent background (favicon)
src/assets/logo.png      Same logo, imported by components
src/content.js           All copy in English and Arabic, plus contact links
src/styles.css           Global styles (design tokens, layout, RTL overrides)
src/App.jsx              Language state; keeps <html lang/dir> in sync
src/components/          Nav, Hero, About, Products, Business, Contact, Footer
```

## Editing content

Change text, phone number or social links in `src/content.js`. Each string has an `en` and an `ar` version.

## Deploying to GitHub Pages

Set the base path to the repository name when building:

```bash
VITE_BASE=/<repo-name>/ npm run build
```

## To do

- Replace the hero placeholder and product tiles with real photography
- Replace the map placeholder with a real embedded map of the Jenin location
