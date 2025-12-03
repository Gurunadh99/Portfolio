# Gurunadh Kothuru — Portfolio (Next.js + Tailwind)

This repository is an export-ready portfolio website generated from the user's resume.
It includes a Next.js + Tailwind scaffold with components, pages, styles, and a public resume PDF.

## Quick start (locally)
1. Install dependencies:
```bash
npm install
```

2. Run the dev server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
npm start
```

## Deploy
Recommended: Vercel. Import the repo from GitHub and deploy (Vercel detects Next.js automatically).

Static export (limited features):
```bash
npm run build
npm run export
# files appear in the `out/` directory
```

## Notes
- This scaffold assumes the resume PDF is copied to `public/resume.pdf`.
- Replace placeholder content (images, social links, publication links) with your real data.
- Contact form is a frontend form; add a serverless function or third-party form handler to receive messages.
