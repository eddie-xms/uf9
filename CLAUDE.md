# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server
npm run build    # TypeScript check + Vite production build
npm run lint     # ESLint
npm run preview  # Preview production build
```

No test framework is configured.

## Architecture

**Stack:** Vite + React 19 + TypeScript + Tailwind CSS v4 (via `@tailwindcss/vite`) + Framer Motion + React Router DOM

**Path alias:** `@/` maps to `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`)

**Routing:** Two pages served via React Router:
- `/shareholders` — `ShareholdersPage` (default, `/` redirects here)
- `/platform` — `PlatformPage`

Both pages are wrapped in `LanguageProvider` → `ThemeProvider` → `Navbar` + `Footer` layout (see `App.tsx`).

**i18n:** Custom lightweight system (not react-i18next). `src/i18n/index.tsx` exports `LanguageProvider` and `useTranslation` hook with `t(key)`, `tArray(key)`, `locale`, `setLocale`. Translations live in `src/i18n/locales/{en,zh-CN}.json`. Constants use `labelKey`/`titleKey` patterns resolved via `t()` at render time.

**Theming:** Light/dark mode via `ThemeProvider` (`src/components/ThemeProvider.tsx`). Semantic CSS custom properties defined in `src/app.css` with `:root` (light) and `.dark` variants. Uses `@custom-variant dark (&:where(.dark, .dark *))`.

**UI utilities:** `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge). Button component uses class-variance-authority (CVA).

## Design Constraints

- **Red + white only** — no gold/yellow colors anywhere (text, borders, icons, buttons). Brand red: `#CC0000`–`#E60000`–`#FF3333`.
- Premium/luxury dark casino aesthetic for dark mode; warm neutral tones for light mode.
- Three font families: Noto Sans TC (CJK), Playfair Display (display headings), Inter (body).

## TypeScript

Strict mode enabled with `noUnusedLocals` and `noUnusedParameters`. Build will fail on unused variables.
