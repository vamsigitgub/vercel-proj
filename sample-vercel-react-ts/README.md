# Sample Vercel React + TypeScript App

A complete starter application built with:

- React
- TypeScript
- Vite
- React Router
- ESLint
- Vercel

## Requirements

- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

### Option 1 — Vercel CLI

Install the CLI:

```bash
npm install -g vercel
```

From the project directory:

```bash
vercel
```

For a production deployment:

```bash
vercel --prod
```

### Option 2 — GitHub

1. Create a GitHub repository.
2. Push this project to the repository.
3. Import the repository into Vercel.
4. Vercel will detect Vite automatically.
5. Use the default build settings.
6. Deploy.

The included `vercel.json` rewrites requests to `index.html`, which keeps React Router routes working after deployment.

## Project structure

```text
sample-vercel-react-ts/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   ├── pages/
│   │   ├── About.tsx
│   │   ├── Counter.tsx
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
├── vite.config.ts
└── README.md
```

## Available routes

- `/` — Home
- `/about` — About
- `/counter` — Interactive TypeScript counter
- Any unknown path — 404 page

## Customize it

Start by editing:

```text
src/pages/Home.tsx
src/pages/About.tsx
src/pages/Counter.tsx
src/components/Header.tsx
src/styles.css
```

You can then add API calls, authentication, a database, forms, dashboards, or other application features as needed.

## Vercel settings

If Vercel shows `404: NOT_FOUND`, make sure the Vercel project is deploying the folder that contains `package.json`.

Use these settings:

- **Framework Preset:** Vite
- **Root Directory:** the project root containing `package.json`
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

After changing settings, redeploy.

The included `vercel.json` enables deep linking for React Router paths such as `/about` and `/counter`.
