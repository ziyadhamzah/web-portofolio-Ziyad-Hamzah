# ZiyadHamzah — Portfolio Website

Portfolio pribadi dibangun dengan **Next.js 14 (App Router)**, **React 18**, **TypeScript**, dan **Tailwind CSS**.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000 di browser.

## Build untuk production

```bash
npm run build
npm start
```

Atau deploy langsung ke **Vercel** (upload folder ini / hubungkan ke repo Git, Vercel akan otomatis mendeteksi Next.js).

## Struktur folder

```
app/
  layout.tsx      -> root layout, font, metadata
  page.tsx        -> merangkai semua section
  globals.css     -> base styles + reveal animation
components/
  Navbar.tsx
  ScrollNav.tsx       -> tombol panah kanan
  Landing.tsx         -> welcome screen
  Hero.tsx            -> section Home + lanyard card
  About.tsx           -> section About + stat cards
  Portfolio.tsx        -> tabs Projects / Certificates / Tech Stack
  ProjectDetail.tsx     -> overlay detail project
  Contact.tsx          -> form pesan + komentar
  Footer.tsx
  Icons.tsx            -> semua ikon SVG inline
lib/
  data.ts          -> SEMUA data (profil, project, tech stack, sertifikat) — edit di sini
  useReveal.ts     -> hook animasi scroll-reveal
```

## Cara mengedit konten

Hampir semua data (nama, deskripsi, project, tech stack, sertifikat, link sosial media, CV)
ada di **satu file**: `lib/data.ts`. Tidak perlu menyentuh komponen untuk update konten.

### Menambahkan foto profil
Ganti placeholder `<PersonIcon />` di `components/Hero.tsx` dan `components/About.tsx`
dengan komponen `next/image`, misalnya:

```tsx
import Image from "next/image";

<Image src="/profile.jpg" alt="ZiyadHamzah" width={230} height={290} className="grayscale" />
```

Taruh file gambar di folder `public/`.

### Menambahkan CV
Taruh file PDF di `public/cv.pdf`, lalu ubah `cvLink: null` menjadi `cvLink: "/cv.pdf"` di `lib/data.ts`.

### Menambahkan sertifikat
Isi array `certificates` di `lib/data.ts` — jangan tambahkan data yang belum benar-benar ada.

### Menghubungkan link sosial media
Isi object `profile.socials` di `lib/data.ts` (github, linkedin, instagram, tiktok).

### Menghubungkan form Contact ke email sungguhan
Form saat ini hanya validasi + feedback visual di sisi client (belum terhubung ke backend/email).
Untuk mengaktifkan pengiriman sungguhan, sambungkan `handleSendMessage` di `components/Contact.tsx`
ke API route Next.js (`app/api/contact/route.ts`) atau layanan seperti Resend / EmailJS / Formspree.
