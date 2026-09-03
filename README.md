# Dua Fatima — Frontend Developer Portfolio

Built with Next.js (App Router), JavaScript, Tailwind CSS v4, Motion,
React Hook Form, React Hot Toast, and Nodemailer.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your real SMTP values
npm run dev
```

Open http://localhost:3000.

## Setting up the contact form email (Nodemailer + Gmail)

The contact form sends mail through `app/api/contact/route.js` using
Nodemailer, and delivers to `duaf3292@gmail.com`. To make it work:

1. Turn on 2-Step Verification on the Gmail account, if it isn't already:
   https://myaccount.google.com/security
2. Create an App Password: https://myaccount.google.com/apppasswords
3. Copy `.env.example` to `.env.local` and fill in:
   - `SMTP_HOST=smtp.gmail.com`
   - `SMTP_PORT=465`
   - `SMTP_USER=duaf3292@gmail.com`
   - `SMTP_PASSWORD=` the app password from step 2 (not the regular
     Gmail password)
   - `CONTACT_EMAIL=duaf3292@gmail.com`
4. Restart the dev server after editing `.env.local`.

`.env.local` is already in `.gitignore` — never commit real
credentials.

## What still needs your input

- `public/images/dua-fatima.png` — your photo is already in place here.
- `data/projects.js` — one real project (AI Content Hub) is filled in;
  the rest are placeholders marked `PLACEHOLDER` — swap in your real
  projects and screenshots (drop images into `public/images/projects/`
  and point `image` at them, or leave the built-in placeholder tile).
- `data/experience.js` — replace the `EDIT ME` periods with real dates.
- `data/social.js` — GitHub and LinkedIn links are filled in from your
  profile; update if they change.
- `NEXT_PUBLIC_SITE_URL` in `.env.local` — set this once you have a
  live domain, so metadata, Open Graph tags, and the sitemap point to
  the right place.

## Project structure

```
app/            Routes (App Router): home, about, projects, services, contact
                + app/api/contact/route.js (Nodemailer endpoint)
components/     Reusable UI (Navbar, Footer, Button, ContactForm, etc.)
sections/       Page-level sections composed inside app/ routes
data/           Editable content: projects, skills, services, experience, social
public/images/  Your photo and project images
```

## Notes

- Server Components are used by default; only the theme toggle, mobile
  menu, toast portal, scroll-reveal wrapper, and contact form are
  Client Components — each is as small as possible.
- Tailwind CSS v4 is configured CSS-first in `app/globals.css` — there
  is no `tailwind.config.js`.
- The light/dark theme is applied via a `data-theme` attribute on
  `<html>`, set before paint to avoid a flash, and persisted in
  `localStorage`.
