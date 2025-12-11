# UDK Digital – single page site (Next.js + Tailwind v4)

Apple-benzeri minimal tasarım, siyah zemin ve neon vurgularla UDK ekosistemini anlatan tek sayfa.

## Kurulum

```bash
cd newupdate
npm install
npm run dev   # http://localhost:3000
npm run build # prod paketi
```

## Yapı

- `src/app/layout.tsx` – global metadata, font, layout.
- `src/app/page.tsx` – tek sayfa içerik (UDK + 5 şirket bölümü, CTA).
- `src/app/globals.css` – temel tema, neon/glass efektleri, grid overlay.

## İçerik düzenleme

- Şirket kartları ve kopyalar: `src/app/page.tsx` içindeki `companies`, `services`, `milestones` dizileri.
- Form şu an demo; mail adresi metinde belirtiliyor.

## Tema

- Siyah arka plan + neon gradyanlar (`globals.css`).
- Font: Inter (SF uyumlu), `--font-sans` değişkeni üzerinden.

## Notlar

- Tailwind v4 (`@import "tailwindcss";` + inline `@theme`); ayrıca klasik sınıflar çalışır.
