# Portfolio

Bilingual (EN / VI) personal portfolio — Next.js App Router, Tailwind CSS v4, Motion, next-intl. Deploy target: Cloudflare Workers via OpenNext.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — proxy redirects to `/en` or `/vi`.

## Content

- Copy: `messages/en.json`, `messages/vi.json`
- Links / email: `src/content/site.ts`
- Drop a PDF at `public/resume.pdf` when ready

## Deploy (Cloudflare)

1. Set `name` in `wrangler.jsonc` if needed
2. `npm run deploy` (requires `wrangler` login)
3. Attach your domain in the Cloudflare dashboard

Preview locally: `npm run preview`
