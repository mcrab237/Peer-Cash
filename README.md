# PeerCash

A peer-to-peer payments app: send money to friends, track spending and pay across borders. This repo is a monorepo with one folder per app.

**Live landing page:** https://peer-cash-landing-page.vercel.app

## Apps

| Folder | What it is | Stack |
|---|---|---|
| [`apps/landing`](apps/landing) | Marketing site: hero, spending insights, international transfers, metrics, FAQ | Next.js, TypeScript, Tailwind CSS, Framer Motion |
| [`apps/web`](apps/web) | Web app: sign up, log in (email or Google) and a protected dashboard | Next.js, TypeScript, Firebase Auth |
| [`apps/admin`](apps/admin) | Admin console (scaffolded) | Next.js, TypeScript |
| [`apps/mobile`](apps/mobile) | Mobile app (scaffolded) | Expo, React Native, TypeScript |

## Run an app locally

Each app installs and runs on its own:

```bash
cd apps/landing   # or apps/web, apps/admin
npm install
npm run dev
```

The mobile app uses Expo:

```bash
cd apps/mobile
npm install
npx expo start
```

`apps/web` connects to Firebase using the config in `apps/web/lib/firebase.ts`. To use your own Firebase project, replace that config.

## Status

The landing page and web authentication are done. The wallet, transfers and admin views are in progress.
