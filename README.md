# VisualsByDML — Cinematic Videographer Portfolio

A mobile-first React + Vite + Tailwind CSS portfolio for a filmmaker, with Home, About, Portfolio, and Contact pages.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Customize the site

- **Business details and project data:** `src/data/site.js`
- **Homepage:** `src/pages/Home.jsx`
- **About:** `src/pages/About.jsx`
- **Portfolio projects and categories:** `src/pages/Portfolio.jsx` and `src/data/site.js`
- **Contact form:** `src/pages/Contact.jsx`
- **Design system / responsive styling:** `src/index.css`

### Important demo-mode notes

- Portfolio imagery and the hero video are remote placeholder media. Replace these with licensed footage and real work before publishing commercially.
- The portfolio projects are explicitly illustrative placeholders. No client endorsements are fabricated; the testimonials area asks for genuine feedback.
- The inquiry form validates required fields, then opens WhatsApp with a pre-filled message. It does **not** send or store form data on a backend. The visitor must press Send in WhatsApp. For server-side inquiries, connect a form provider or your own API.
- Update the YouTube and TikTok URLs in `src/data/site.js` to the actual profile URLs before launch.

## Deployment

Works with GitHub and common Vite hosts such as Netlify or Vercel. Set the build command to `npm run build` and publish directory to `dist`.
