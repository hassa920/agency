# DomyAIO Portfolio (Next.js)

Marketing site for [domyaio.com](https://www.domyaio.com/) — services, portfolio, about, and contact with MongoDB + Resend integrations.

## Local development

```bash
npm install
cp .env.example .env.local
# Edit .env.local with your MongoDB URI and Resend API key
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production deploy (Vercel recommended)

1. Push the repo to GitHub and import the project in [Vercel](https://vercel.com).
2. Set **Environment Variables** (Production + Preview):
   - `MONGODB_URI` — MongoDB connection string (database name: `agency`)
   - `RESEND_API_KEY` — from [Resend](https://resend.com)
3. Verify your sending domain in Resend (`domyaio.com`) so `from` addresses work.
4. Run a production build locally before shipping:

   ```bash
   npm run build
   npm start
   ```

5. Point your domain DNS to Vercel and enable HTTPS.

## Required assets (add before go-live)

Place these under `public/images/`:

| File | Used for |
|------|----------|
| **`logo.png`** | Header, footer, home orbit & trust section |

Optional (replace temporary fallbacks when you have final art):

| File | Used for |
|------|----------|
| `snake.jpg`, `next.jpg`, `precision.jpg`, `prime.jpg`, `urban.jpg` | Home carousel & portfolio case studies |

## Custom font

`app/layout.jsx` loads:

`app/assets/fonts/FormaDJRText-Regular-Testing.otf`

Add that file or update the font path in `layout.jsx`. Without it, the build may fail or fall back to system fonts.

## API routes

| Route | Purpose |
|-------|---------|
| `POST /api/contact` | Contact forms (saves to MongoDB, sends Resend emails) |
| `POST /api/newsletter` | Footer newsletter signup |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Run production server |
| `npm run lint` | ESLint |

## Pre-launch checklist

- [ ] `logo.png` in `public/images/`
- [ ] Font file in `app/assets/fonts/`
- [ ] `MONGODB_URI` and `RESEND_API_KEY` set on host
- [ ] `npm run build` passes
- [ ] Test contact form, services form, newsletter, header popup
- [ ] Update social links to your real Facebook / LinkedIn / Instagram URLs
- [ ] Replace portfolio/carousel images with final branded assets if using fallbacks
