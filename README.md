# News Aggregator (Frontend Technical Assessment)

A frontend-only news aggregator built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS**. Users can search and filter articles by keyword, date, category, and source, and personalize their feed by selecting preferred sources, categories, and authors.

This README is written for evaluators reviewing the project as part of a technical hiring assessment — it explains what was built, the architectural decisions behind it, how to run it, and known limitations/trade-offs made under the scope of the task.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data fetching / caching:** TanStack Query
- **HTTP client:** Axios
- **State management:** URL search params - URL as single source of truth
- **Package manager:** pnpm
- **Icons:** lucide icons library
- **Grok AI:** Design

---

## Getting Started

```bash
# install dependencies
pnpm install

# run the dev server
pnpm dev

# open
http://localhost:3000
```

### Environment Variables

Create a `.env.local` file in the project root:

```bash
# Third-party news provider (server-side only — never exposed to the client)
FREE_NEWS_API_KEY=your_key_here
NEXT_PUBLIC_BASE_URL=https://provider-base-url.example.com
```

API keys are only ever read inside `app/api/*` Route Handlers they are never prefixed with `NEXT_PUBLIC_` and never reach the client bundle.

---

## Features Implemented

### 1. Article Search & Filtering
- Keyword search
- Filter by date, category, author, and source
- Filter state is reflected in the URL (shareable/bookmarkable, and enables server-driven data fetching on initial load)
- Loading, empty, and error states for the feed

### 2. Personalized Feed
- **Preferred Sources**, **Preferred Categories**, **Preferred Authors** — each in its own section inside the "Personalize Your Feed" panel
- Local, in-panel filter over the downloaded category list (client-side filtering over already-cached data, no extra network requests)
- Info badge shown beneath Preferred Category and Preferred Author titles when a category or author is selected for better UX.

---

## Architecture & Key Decisions

This section calls out the decisions most relevant to evaluating frontend architecture judgment, since several of them were deliberately chosen over simpler-looking alternatives.

### API keys never reach the client
All third-party requests happen inside `src/app/api/*/route.ts` Route Handlers, which act as a thin **BFF (Backend-for-Frontend) proxy**. The client only ever calls same-origin endpoints (`/api/news`, `/api/topics`); the actual provider key is attached server-side. This was enforced with the `server-only` package so an accidental client-side import of the fetch module fails the build rather than silently leaking a key.

### URL as the source of truth for search/filter state
Search keyword, date, category, author and source filters live in `searchParams`, not in local component state which means filtered views are shareable and bookmarkable.

### TanStack Query for server state
Rather than reaching for Redux/Context for everything, state is split by **what kind of state it actually is**:

| State | Owner | Why |
|---|---|---|
| Article data from the API | TanStack Query (`useArticleFeed`, `useNewsQuery`) | Needs caching, dedup, retry, background refetch — not plain React state concerns |
| Search/date/category/author/sort by filters | URL (`searchParams`) | Shareable, drives server rendering, has natural "back button" semantics |
| Local filter text inside Preferred Categories list | Component-local `useState` + `useMemo` | Transient UI state scoped to one component; no other component needs to read it |


### Checkbox over radio for single-select toggles
The Preferred Sources/Categories/Authors selection needed "click to select, click again to deselect, only one active at a time." A native `<input type="radio">` fights this — radios can't be deselected by clicking them again without intercepting and blocking default browser behavior. A fully-controlled `<input type="checkbox">` (`checked` + `onChange`, with the store enforcing exclusivity) achieves the same UX without working against native input semantics or misleading assistive technology (a `radiogroup` with nothing checked reads ambiguously to screen readers; a checkbox `group` does not).

### Server vs Client Component boundaries
Default is Server Components; `"use client"` is used only where interactivity or browser APIs are required (search input, filter dropdowns, the Personalize Panel, toggle stores). Data-fetching for the initial feed is Server-Component-driven via `searchParams`; the client-driven refinements (personalization, in-panel filtering) use the TanStack Query hooks and external stores described above.

---

## Folder Structure

```
.
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
├── public
│   ├── empty.jpg
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── README.md
├── src
│   ├── api
│   │   ├── API.config.ts
│   │   ├── API.utils.ts
│   │   └── AxiosClient.ts
│   ├── app
│   │   ├── api
│   │   │   ├── news
│   │   │   │   └── route.ts
│   │   │   └── topics
│   │   │       └── route.ts
│   │   ├── ArticleFeedProvider.tsx
│   │   ├── error.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── hooks
│   │   │   └── useNewsQuery.ts
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   └── providers.tsx
│   ├── components
│   │   ├── feed
│   │   │   ├── ArticleFeed.tsx
│   │   │   ├── ArticleList.tsx
│   │   │   ├── components
│   │   │   │   ├── ArticleListCard.tsx
│   │   │   │   ├── ArticleListEmptyState.tsx
│   │   │   │   ├── ArticleListLoadingState.tsx
│   │   │   │   ├── ArticleListMeta.tsx
│   │   │   │   ├── ArticleListMetaAvatar.tsx
│   │   │   │   ├── ArticleListOrderByDropdown.tsx
│   │   │   │   └── ArticleListOrderByDropdownOptions.tsx
│   │   │   ├── data.ts
│   │   │   ├── hooks
│   │   │   │   ├── useArticleFeed.ts
│   │   │   │   └── useArticleListOrderByDropdown.ts
│   │   │   └── types.ts
│   │   ├── layout
│   │   │   ├── components
│   │   │   │   └── IsActiveLink.tsx
│   │   │   ├── data.ts
│   │   │   ├── NavBar.tsx
│   │   │   └── types.ts
│   │   ├── personalization
│   │   │   ├── components
│   │   │   │   ├── hooks
│   │   │   │   │   ├── usePersonalizePanelSelection.ts
│   │   │   │   │   ├── usePreferredAuthorSelection.tsx
│   │   │   │   │   ├── usePreferredCategorySelectionStore.ts
│   │   │   │   │   └── usePreferredSourceSelection.ts
│   │   │   │   ├── PersonalizePanelInfoBadge.tsx
│   │   │   │   ├── PersonalizePanelLabel.tsx
│   │   │   │   ├── PersonalizePanelTitles.tsx
│   │   │   │   ├── PersonalizePanelToggle.tsx
│   │   │   │   ├── PreferredAuthors
│   │   │   │   │   ├── PreferredAuthorItem.tsx
│   │   │   │   │   └── PreferredAuthorList.tsx
│   │   │   │   ├── PreferredCategories
│   │   │   │   │   ├── PreferredCategoryChip.tsx
│   │   │   │   │   ├── PreferredCategoryList.tsx
│   │   │   │   │   ├── PreferredCategoryListEmptyState.tsx
│   │   │   │   │   └── PreferredCategoryListLoadingState.tsx
│   │   │   │   ├── PreferredSources
│   │   │   │   │   ├── PreferredSourceItem.tsx
│   │   │   │   │   └── PreferredSourceList.tsx
│   │   │   │   └── types.ts
│   │   │   ├── data.ts
│   │   │   ├── hooks
│   │   │   │   ├── types.ts
│   │   │   │   ├── useLocalFilter.ts
│   │   │   │   ├── usePreferencesSave.ts
│   │   │   │   └── usePreferredCategories.ts
│   │   │   ├── PersonalizePanel.tsx
│   │   │   └── utils
│   │   │       └── index.ts
│   │   └── search
│   │       ├── FilterBar.tsx
│   │       └── hooks
│   │           └── useSearchByKeyword.ts
│   └── utils
│       └── index.ts
└── tsconfig.json
```

Naming follows a `[Domain][Role]` convention throughout (e.g. `ArticleListCard`, `PreferredSourceItem`, `PersonalizePanelToggle`) to keep components traceable to the data model and predictable to navigate.

---

## Known Limitations & Scope Trade-offs

Since this is explicitly a **frontend-only** exercise, a few things are intentionally out of scope or simplified, and are worth calling out rather than leaving implicit:

- **No navbar functionality.** The user shown in the navbar is static; there is no navigation to other pages upon clicking links.
- **One source for news is selected.** I only selected one source to receive list of news from multiple sources instead to implementing a backend service where this frontend sends request and the backend then do the heavy lifting to retrieve news from multiple sources. The single source I selected is what backend service could have achieved so implementation of such services was out of scope for this task.
- **Rate limit.** The selected news source API has a rate limit i.e. 2 requests per second. Due to this the search feature needs to be triggered only when "Enter" hit is pressed or "Search" button is pressed. Real time search was not an option due to rate limitations. And implementing rate limitation myself was out of the scope of this(frontend only) task.
- **One value per param.** The selected API only accept one value per param due to which only one source, category and author can be selected at a time.

## View It In Action
https://youtu.be/TdBeh2yrEQk

## Project On Github
https://github.com/zafar-saleem/news-aggregator