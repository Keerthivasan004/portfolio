# Keerthivasan R V — DevOps & Cloud Portfolio (React + Node.js)

Professional portfolio rebuilt as a full-stack app. Legacy single-file site is preserved as `index.html`.

## Stack
- **Frontend:** React 18 + Vite, Framer Motion, Lucide icons, custom design system (`client/`)
- **Backend:** Node.js + Express API with contact form, rate-limiting, resume endpoint (`server/`)
- **Content source:** `client/src/data/portfolio.js` (mirrored by API) — built from resume + LinkedIn: https://www.linkedin.com/in/keerthivasan-r-v-6238a622a/

## Quick start
```powershell
# install everything
npm run install:all

# terminal 1 — API (http://localhost:5000)
npm run dev:server

# terminal 2 — UI (http://localhost:5173)
npm run dev:client
```

## Production
```powershell
npm run build   # builds client/dist
npm start       # serves API + static React build on :5000
```

API: `GET /api/health`, `GET /api/profile`, `GET /api/projects`, `GET /api/resume`, `POST /api/contact`

## Structure
```
client/  → React app (src/components, src/data, src/hooks, public/profile.png, resume pdf)
server/  → Express API (src/index.js, data/messages.json)
index.html → legacy static portfolio (kept as backup)
```

## Notes
- LinkedIn blocks scraping (HTTP 999), so content was sourced from your resume PDF + existing site, linked prominently in Hero/Contact.
- Contact form POSTs to `/api/contact` (saved to `server/data/messages.json`); falls back to `mailto:` when API is offline.
- Update content in one place: `client/src/data/portfolio.js`.
