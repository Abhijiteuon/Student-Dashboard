# Next-Gen Learning Dashboard

A futuristic, highly animated "Student Dashboard" prototype.

## Features
- Bento Grid Layout with Dark Mode UI
- Server-side data fetching using Supabase and Next.js App Router (RSC)
- Staggered animations and hover states via Framer Motion
- Responsive design with a collapsible sidebar

## Architecture & Tech Choices
- **Next.js (App Router)**: Enables mixing Server Components for initial secure data fetching with Client Components for animations.
- **Supabase**: Server-side client implemented using `@supabase/ssr` to query the PostgreSQL database.
- **Framer Motion**: Handles staggered bento tile appearances, layout-based highlights in the sidebar, and physics-based card hover micro-interactions. No layout shifts occur, maintaining 60fps smoothness.
- **Suspense & Skeletons**: Handled via `loading.tsx` and React `<Suspense>` boundary. A fallback UI displays pulsing skeletons until the DB completes its response.

## Setup Instructions
1. Install Node.js
2. Run `npm install`
3. Setup a `.env.local` file with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
4. Create the Supabase `courses` table using the provided `supabase_setup.sql`.
5. Run `npm run dev` to start the app.
