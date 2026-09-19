# Sarchnar Restaurant Website

Premium React + Vite + Tailwind CSS restaurant website for Sarchnar Restaurant, Newcastle upon Tyne.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Notes
- Menu prices are transcribed from the supplied restaurant menu photographs and should be reconfirmed before publishing.
- The canonical URL in `index.html` is a placeholder and should be replaced with the deployed domain.
- The location section uses a lightweight visual map treatment with the supplied Plus Code; the Get Directions CTA opens Google Maps.
- All supplied restaurant photography is stored in `public/images/` and served as optimized WebP assets.

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import the repository into Vercel.
3. Vercel detects Vite automatically.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Replace the placeholder canonical URL in `index.html`, `public/robots.txt`, and `public/sitemap.xml` with the real deployed domain.
