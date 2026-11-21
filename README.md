# Skyvero Hidayatullah Pardi — Rekam Arsip Akademik

Portofolio & rekam arsip akademik berbasis React, TypeScript, Tailwind CSS v4, dan Vite, yang telah dikonfigurasi untuk deployment statis di **Vercel**.

## Pengembangan Lokal

```bash
npm install
npm run dev
```

## Build Produksi

```bash
npm run build
```

Output hasil build berada di folder `dist/`.

## Publish ke Vercel

### Melalui GitHub + Vercel Dashboard
1. Push repositori ini ke GitHub.
2. Buka [Vercel Dashboard](https://vercel.com/new) dan pilih repositori.
3. Pengaturan berikut otomatis terbaca dari `vercel.json`:
   - **Framework Preset**: `Vite`
   - **Install Command**: `npm install`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Klik **Deploy**.

### Melalui Vercel CLI
```bash
npx vercel --prod
```
