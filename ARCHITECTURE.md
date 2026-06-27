# ONE PIECE FAN WIKI — ARCHITECTURAL MASTER PLAN & SPECIFICATION
**"The Ultimate Fan Encyclopedia of the Grand Line"**

---

## 1. PROJECT EXECUTIVE SUMMARY & SYSTEM ANALYSIS
The **One Piece Fan Wiki** is a mission-critical, enterprise-grade web application designed to be the definitive, immersive digital encyclopedia for the One Piece universe. Built to handle massive global fan traffic, intense rich-media interactions, and complex relational universe lore, the application fuses high-fidelity 3D and 2D visual storytelling with rigorous web performance standards (Lighthouse 95+).

### System Characteristics & Business Drivers:
* **Immersive Visual Design:** High-end anime aesthetic paired with ancient maritime navigation styling (treasure maps, dynamic lighting, animated oceans, gold accents, parchment textures, wooden navigation UI).
* **Massive Relational Domain Model:** Full entity tracking across Characters, Pirate Crews, Marines, Yonko, Revolutionaries, Cross Guild, Devil Fruits, Haki, Weapons, Ships, Islands, Episodes, Manga Chapters, Movies, Bounties, News, and Organizations.
* **Special Advanced Tools:** A professional, Canva-grade **Bounty Poster Generator** supporting advanced layer manipulation (drag, resize, rotate, crop, undo/redo, custom filters, burn effects, torn paper edges, custom crew/marine watermarks) with multi-format high-resolution export (PNG, JPG, PDF, SVG).
* **Enterprise User Social Layer:** Custom Profiles, Reading & Watch Trackers, Achievement Trees, Nested Comments, Live Polls, Advanced Discussion Boards, and Community Ratings.
* **Enterprise Operations:** Comprehensive Admin Dashboard, fully offline-capable PWA support, robust SEO meta-architecture, and highly optimized edge-routing.

---

## 2. SYSTEM ARCHITECTURE & TECH STACK DESIGN
The system leverages a highly modern, edge-optimized, and strongly typed architecture:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                          CLIENT LAYER (BROWSER / PWA)                   │
│  ┌──────────────────────────┐  ┌─────────────────────────────────────┐  │
│  │ React 19 + Tailwind CSS  │  │ React Three Fiber / Three.js / GSAP │  │
│  └──────────────────────────┘  └─────────────────────────────────────┘  │
│  ┌──────────────────────────┐  ┌─────────────────────────────────────┐  │
│  │   Zustand (Client State) │  │    React Query / TanStack Query     │  │
│  └──────────────────────────┘  └─────────────────────────────────────┘  │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ HTTP/2 / Server Actions / React Streams
┌────────────────────────────────────▼────────────────────────────────────┐
│                   SERVER TIER (NEXT.JS 15 APP ROUTER)                   │
│  ┌──────────────────────────┐  ┌─────────────────────────────────────┐  │
│  │ Server Components (RSC)  │  │ NextAuth / Auth.js (Edge Auth)      │  │
│  └──────────────────────────┘  └─────────────────────────────────────┘  │
│  ┌──────────────────────────┐  ┌─────────────────────────────────────┐  │
│  │ Route Handlers (REST API)│  │ Zod Validation & Rate Limiting      │  │
│  └──────────────────────────┘  └─────────────────────────────────────┘  │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ TCP / SSL Connection Pooling
┌────────────────────────────────────▼────────────────────────────────────┐
│                        DATA & STORAGE TIER                              │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │ Drizzle ORM (Type-safe SQL query generation)                      │  │
│  └─────────────────────────────────┬─────────────────────────────────┘  │
│  ┌─────────────────────────────────▼─────────────────────────────────┐  │
│  │ PostgreSQL Database (Neon Serverless Pool / Relational Core)      │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

* **Core Framework:** Next.js 15 App Router utilizing React 19 Server Components (RSC) for zero-bundle-size static data delivery and ultra-fast initial page loads.
* **Styling & Theming:** Tailwind CSS combined with `shadcn/ui` components for highly customizable, accessible design patterns. Dual-mode support (Pirate Gold Dark Mode / Parchment Light Mode).
* **Motion & Immersive Media:** 
  * `Framer Motion` for layout transitions, gestures, and UI micro-interactions.
  * `GSAP` for premium scroll-triggered parallax sections and timeline-based storytelling sequences.
  * `React Three Fiber` & `Three.js` for the interactive 3D World Map of the Grand Line and 3D Ship previews.
* **State Management:** `Zustand` for global client UI state (Theme, Audio player, Bounty Generator canvas layers, Tracker state) and `React Query` for client-side asynchronous data caching, infinite scrolling, and optimistic updates.
* **Database & Persistence:** `PostgreSQL` managed via `Drizzle ORM` for supreme type safety, ultra-fast queries, and seamless migrations.
* **Authentication & Authorization:** `NextAuth / Auth.js` supporting OAuth providers, Magic Links, and role-based access control (Fans, Super-Fans, Admirals, Gorosei/Admin).
* **Media Optimization:** `Sharp` for high-performance image processing, watermark generation, and dynamic rasterization for the Bounty Poster engine.

---

## 3. DETAILED PROJECT ROADMAP & EXECUTION PLAN
To ensure absolute production quality with zero placeholders, the project is strictly segmented into 12 self-contained, fully fleshed-out modules.

* **[MODULE 1] Core Data Models, Database Schema & ORM Initialization** (Current Module)
  * Setup Drizzle ORM schema for all 35+ entities.
  * Setup database client pooling and connection configurations.
  * Build Zod validation schemas for API boundary validation.
* **[MODULE 2] Global Layout, Navigation & Theming Architecture**
  * Design Maritime Wooden Navigation Bar & Sidebar.
  * Implement Dynamic Lighting Theme Switcher (Dark Gold / Light Parchment).
  * Establish Global Audio/Ambiance controller (ocean waves, wooden creaks).
  * Develop responsive Footer and mobile navigation drawer.
* **[MODULE 3] Immersive Homepage & Cinematic Storytelling**
  * Hero section with animated CSS/WebGL ocean waves, moving clouds, and flying gulls.
  * Compass navigation widget & Quick link tiles with gold foil hover effects.
  * Featured character carousel, latest manga/anime updates, and live news ticker.
* **[MODULE 4] Encyclopedia Core Entities (Factions & Characters)**
  * Full listing, search, filtering, and detail pages for Characters, Pirate Crews, Marines, Yonko, Revolutionaries, and Cross Guild.
  * Complex stat radar charts, relationship graphs, and animated tab interfaces.
* **[MODULE 5] Lore, Combat Systems & Equipment Core**
  * Advanced indices and detail visualizers for Devil Fruits (Paramecia, Zoan, Logia), Haki (Conqueror's, Armament, Observation), Weapons (Meito grades), and Ships.
  * 3D model integration placeholders / viewports for legendary ships.
* **[MODULE 6] Interactive 3D World Map of the Grand Line**
  * React Three Fiber interactive globe / plane of the Four Blues, Grand Line, Red Line, and New World.
  * Point-of-interest markers, island weather overlays (Log Pose integration), and rich informational popovers.
* **[MODULE 7] Media, Timeline & Release Tracking**
  * Comprehensive database for Anime Episodes, Manga Chapters, Movies, and Special Releases.
  * Spoiler-toggle protection filters, release calendars, and discussion thread integration.
* **[MODULE 8] Enterprise Auth & User Profiles**
  * NextAuth integration, custom onboarding, customizable user profile pages (banners, avatars, faction allegiances).
  * Community reputation system and level progression based on site participation.
* **[MODULE 9] Personal Trackers & Achievement System**
  * Reading Tracker (Manga) & Watch Tracker (Anime) with sync capabilities, custom lists, and bookmarking.
  * Fully automated gamified Achievement unlocking system with visual badge showcases.
* **[MODULE 10] Community Social Layer (Comments, Polls & Boards)**
  * Nested comment threads with rich text formatting, upvoting, and moderation tools.
  * Interactive live community polls with real-time percentages and analytics.
  * Discussion Boards categorized by Lore, Theories, Episode Discussions, and General Fanout.
* **[MODULE 11] Advanced Special Feature: Canva-Quality Bounty Poster Generator**
  * Multi-layer canvas editor supporting drag, resize, rotate, crop, undo/redo stacks.
  * High-fidelity filters: burn effects, ancient paper texturing, torn edges, marine/pirate logo overlays.
  * Real-time preview and client/server multi-format export engine (PNG, JPG, PDF, SVG).
* **[MODULE 12] Admin Dashboard, Analytics, SEO & PWA Production Polish**
  * Gorosei Admin Management Dashboard (CMS for news, entity updates, user management, moderation).
  * Next-PWA manifest, service worker caching, fully offline fallback pages.
  * Advanced OpenGraph SEO metadata injection, dynamic sitemap generation, and performance audits.

---

## 4. DATABASE SCHEMA DESIGN
The relational structure represents the deep complexities of the One Piece world and user community interaction. All tables are strictly typed in Drizzle ORM.

### Entity Relationship Groups:
1. **System & Users:** `users`, `accounts`, `sessions`, `verification_tokens`, `profiles`, `achievements`, `user_achievements`, `user_bookmarks`.
2. **Trackers:** `reading_tracker`, `watch_tracker`.
3. **Primary Lore Entities:** `characters`, `crews`, `factions` (Marines, Yonko, Revs, Cross Guild, Organizations), `devil_fruits`, `haki_types`, `weapons`, `ships`, `islands`.
4. **Relations & Lore Linking:** `character_relationships`, `crew_members`, `faction_members`.
5. **Media & Publications:** `manga_chapters`, `anime_episodes`, `movies`, `news_articles`.
6. **Community:** `comments`, `discussion_threads`, `discussion_posts`, `polls`, `poll_options`, `poll_votes`, `ratings`.
7. **Bounty Engine:** `bounties`, `bounty_templates`, `user_custom_bounties`.

---

## 5. DESIGN & FOLDER STRUCTURE
```
one-piece-wiki/
├── public/
│   ├── images/         # Static character, faction, and background assets
│   ├── textures/       # Ancient paper, wood, ocean, gold foil texture maps
│   ├── audio/          # Wave ambiance, page turn clicks, menu wooden thuds
│   ├── models/         # 3D glTF/GLB models for ships and world map
│   └── icons/          # Manifest and PWA assets
├── src/
│   ├── app/
│   │   ├── api/        # Next.js Route Handlers (REST endpoints)
│   │   ├── (auth)/     # Authentication routing group
│   │   ├── (dashboard)/# Admin & Management dashboard routing group
│   │   ├── (wiki)/     # Core encyclopedia content routing group
│   │   └── (interactive)/ # World Map & Bounty Generator routing group
│   ├── components/
│   │   ├── ui/         # Reusable atomic shadcn/ui components
│   │   ├── layout/     # Navigation, Headers, Footers, Sidebars
│   │   ├── three/      # React Three Fiber canvas, lights, models, map
│   │   ├── bounty/     # Advanced Canvas editor components & toolbars
│   │   ├── wiki/       # Article cards, stat charts, entity displays
│   │   ├── navigation/ # Compass widgets, breadcrumbs, table of contents
│   │   └── charts/     # D3 / Recharts / Canvas data visualizers
│   ├── db/
│   │   ├── index.ts    # Drizzle client configuration & pool setup
│   │   └── schema.ts   # Absolute complete production schema definition
│   ├── lib/
│   │   └── validations/# Comprehensive Zod validation schemas
│   ├── hooks/          # Custom React hooks (useLocalStorage, useDebounce, etc.)
│   ├── store/          # Zustand global stores (useBountyStore, useAudioStore, etc.)
│   ├── types/          # Core TypeScript type definitions & Drizzle infers
│   ├── utils/          # Formatting, helpers, math, image export routines
│   └── server/         # Server actions & background service functions
├── package.json
└── tsconfig.json
```

---

## 6. COMPLETE PAGE REGISTER
1. `/` — Home / Portal of the Grand Line
2. `/auth/signin` — User Login / Magic Link / OAuth
3. `/auth/signup` — User Registration & Faction Selection
4. `/auth/error` — Auth Error Recovery
5. `/characters` — Universal Character Index & Grid
6. `/characters/[slug]` — Deep Character Biome & Lore Vault
7. `/crews` — Pirate Crews Encyclopedia
8. `/crews/[slug]` — Crew Fleet, Members & Jolly Roger Showcase
9. `/marines` — Marine Hierarchy (Fleet Admiral to Chore Boy)
10. `/marines/[slug]` — Marine Base / Division / Officer Spotlight
11. `/yonko` — The Four Emperors Faction Hub
12. `/yonko/[slug]` — Emperor Territory & Executive Fleet
13. `/revolutionaries` — Revolutionary Army Commanders & Ideology
14. `/revolutionaries/[slug]` — Revolutionary Squad / Commander Profile
15. `/cross-guild` — Cross Guild Operations & Bounty on Marines
16. `/cross-guild/[slug]` — Cross Guild Operative Profile
17. `/devil-fruits` — The Encyclopedia of Cursed Fruits
18. `/devil-fruits/[slug]` — Fruit Awakening, Lineage & Abilities
19. `/haki` — The Three Colors of Haki Guide
20. `/haki/[slug]` — Advanced Application & Legendary Users
21. `/weapons` — Meito & Legendary Armaments Registry
22. `/weapons/[slug]` — Weapon Origin, Grade & Wielder Lore
23. `/ships` — Iconic Vessels of the Seas
24. `/ships/[slug]` — Ship Blueprint, 3D Preview & Arsenal
25. `/islands` — Gazetteer of Islands & Lands
26. `/islands/[slug]` — Log Pose Data, Climate & History
27. `/world-map` — Immersive Interactive 3D World Map
28. `/episodes` — Anime Episode Vault & Watch Guide
29. `/episodes/[slug]` — Episode Detail, Trivia & Community Ratings
30. `/chapters` — Manga Chapter Chronology & Reading Index
31. `/chapters/[slug]` — Chapter Summaries, Cover Stories & Discussions
32. `/movies` — One Piece Theatrical Motion Pictures Hub
33. `/movies/[slug]` — Movie Synopsis, Cast & Original Character Guides
34. `/organizations` — World Government, Cipher Pol, Germa 66, Baroque Works
35. `/organizations/[slug]` — Organization Structure & Operations
36. `/bounties` — Historical & Active Bounty Ledger
37. `/bounties/generator` — The Ultimate Bounty Poster Generator (Canva Studio)
38. `/search` — Advanced Universal Search Engine (Filters, Sorting)
39. `/news` — Grand Line News Ticker & Announcements
40. `/news/[slug]` — Full News Article & Editorial
41. `/profile/[username]` — Public User Profile & Faction Badge Display
42. `/profile/[username]/bookmarks` — Private Bookmarks Vault
43. `/profile/[username]/favorites` — Hall of Favorites
44. `/profile/[username]/tracker/reading` — Manga Reading Vault & History
45. `/profile/[username]/tracker/watch` — Anime Watch History & Queue
46. `/profile/[username]/achievements` — Gamified Trophy Room
47. `/community/boards` — Discussion Categories & Theory Crafting
48. `/community/boards/[slug]` — Active Discussion Thread & Replies
49. `/community/polls` — Universal Fan Polls & Real-time Vote Charts
50. `/admin/dashboard` — Gorosei System Overview & System Metrics
51. `/admin/content` — CMS Management (Entities, Bounties, Media)
52. `/admin/users` — User Fleet Management & Moderation
53. `/offline` — PWA Dedicated Offline Fallback Guide

---

## 7. COMPLETE API ENDPOINT DIRECTORY
### Entity REST & GraphQL-like Route Handlers:
* `GET /api/characters`, `GET /api/characters/[slug]`
* `GET /api/crews`, `GET /api/crews/[slug]`
* `GET /api/factions`, `GET /api/factions/[slug]`
* `GET /api/devil-fruits`, `GET /api/devil-fruits/[slug]`
* `GET /api/haki`, `GET /api/haki/[slug]`
* `GET /api/weapons`, `GET /api/weapons/[slug]`
* `GET /api/ships`, `GET /api/ships/[slug]`
* `GET /api/islands`, `GET /api/islands/[slug]`
* `GET /api/episodes`, `GET /api/episodes/[slug]`
* `GET /api/chapters`, `GET /api/chapters/[slug]`
* `GET /api/movies`, `GET /api/movies/[slug]`
* `GET /api/organizations`, `GET /api/organizations/[slug]`
* `GET /api/bounties`, `GET /api/bounties/[slug]`
* `GET /api/news`, `GET /api/news/[slug]`

### Feature & Social API Handlers:
* `GET /api/search` — Unified advanced searching with Lucene-like param parsing.
* `POST /api/bounties/generate` — Server-side high-fidelity rendering for exported posters.
* `GET|POST|PUT|DELETE /api/user/profile` — User identity updates.
* `GET|POST|DELETE /api/user/bookmarks` — Bookmark lifecycle management.
* `GET|POST|DELETE /api/user/favorites` — Favorites collection management.
* `GET|POST|PUT /api/user/tracker/reading` — Manga tracker synchronization.
* `GET|POST|PUT /api/user/tracker/watch` — Anime tracker synchronization.
* `GET|POST /api/user/achievements` — Achievement validation and unlocking checks.
* `GET|POST|PUT|DELETE /api/comments` — Comment threads operations.
* `GET|POST /api/polls`, `POST /api/polls/vote` — Poll management and atomic vote counting.
* `GET|POST|PUT|DELETE /api/discussion` — Forum thread and reply operations.
* `GET|POST /api/ratings` — Community star/numeral rating submissions.
* `GET|POST|PUT|DELETE /api/admin/*` — Protected Gorosei CRUD routes.

---

## 8. REUSABLE COMPONENT INVENTORY
* **UI Foundation (`shadcn/ui` custom modified):** Button, Input, Select, Dialog, Sheet, Popover, DropdownMenu, Avatar, Badge, Card, Progress, Slider, Tabs, Toast, Toggle, Skeleton, Accordion, Checkbox.
* **Specialized Layout & Maritime UI:**
  * `WoodenNavbar`: Ancient timber textured header with brass rivets and dynamic lighting speculars.
  * `CompassMenu`: Interactive rotating golden compass for secondary visual navigation.
  * `ScrollToTopDendDenMushi`: Floating action button stylized as a transponder snail.
  * `ParchmentCard`: Rich content container with burnt edges and paper background styling.
  * `BountyRibbon`: Elegant angled ribbon showing active or legacy bounty numbers.
  * `SpoilerGuard`: Interactive blurred overlay preventing unwanted story spoilers until clicked.
  * `LoreBreadcrumb`: Maritime themed breadcrumb trailer indicating position in the Grand Line.
* **Data Visualization & Media:**
  * `StatRadarChart`: Polygon radar showcasing strength, speed, haki, stamina, and devil fruit mastery.
  * `RelationshipWeb`: SVG/Canvas force-directed graph linking allies, enemies, and crew mates.
  * `ThreeShipViewer`: OrbitControls enabled 3D viewports for ship glTF models.
  * `InfiniteWikiGrid`: Highly optimized virtualized grid view for entity cards with intersection observers.
* **Bounty Studio Dedicated Components:**
  * `CanvasWorkspace`: Main zoomable, pan-able interactive poster layout staging ground.
  * `LayerManager`: Sidebar list supporting drag-and-drop layer reordering, lock/unlock, and visibility toggle.
  * `AssetToolbox`: Palettes for Marine seals, Jolly Rogers, torn paper overlays, and burn mark decals.
  * `FilterSliders`: Precision range controls for sepia, grain, contrast, scratch intensity, and brightness.

---

## 9. ANIMATION & INTERACTION REGISTER
1. **Ocean Wave Geometry Simulation:** Custom WebGL / Three.js vertex shader displacement creating gentle rhythmic ocean swells on the homepage hero.
2. **Moving Volumetric Clouds:** Multi-layered CSS/Canvas cloud layers sliding horizontally with subtle opacity breathing.
3. **Flock of News Coo / Gulls:** Procedural SVG/Canvas flocking birds flying across the upper screen space on initial load.
4. **Compass Spinning Needle:** Framer Motion physics-based spring rotation that reacts to mouse movement and page scroll velocity.
5. **Parchment Unrolling Transition:** GSAP timeline simulating an ancient scroll unfurling vertically when opening article details.
6. **Gold Foil Specular Shimmer:** CSS custom property / mouse-tracking radial gradient simulating reflecting light off metallic gold trim on cards.
7. **Jolly Roger Flag Waving:** SVG turbulence filter / Canvas warp animation simulating a pirate flag flapping in a fierce sea breeze.
8. **Bounty Stamp Impact:** Sudden explosive scale-down animation with screen shake and dust particle explosion when applying "DEAD OR ALIVE" stamps in the generator.
9. **Spoiler Smoke Dissolve:** Canvas particle effect dissolving the spoiler blur mask like dispersing smoke when clicked.
10. **Tracker Progress Fill:** Liquid filling wave animation inside a glass bottle representation when updating watch/read percentages.
11. **Page Transition Haki Burst:** Subtly dramatic radial shockwave transition between major faction pages simulating Conqueror's Haki.

---

## 10. TOTAL PROJECT SIZE ESTIMATE & PERFORMANCE BUDGET
* **Component Count:** ~150 individual modular components and variants.
* **Page Route Files:** ~55 distinct routing files across the Next.js App Router layout structure.
* **Codebase Lines of Code (LOC):** Estimated 45,000 – 60,000 lines of fully typed, production-ready TypeScript/TSX code.
* **Static Assets Budget:** ~45 MB (Optimized WOFF2 typography, WebP images, compressed glTF 3D models, sound effects).
* **Target Performance Metrics (Lighthouse 95+ Budget):**
  * **First Contentful Paint (FCP):** < 0.8s
  * **Largest Contentful Paint (LCP):** < 1.4s (via advanced next/image preloading and RSC static rendering).
  * **Cumulative Layout Shift (CLS):** 0.00 (Hardcoded aspect-ratios and fixed skeleton bounds).
  * **Total Blocking Time (TBT):** < 100ms (Heavy 3D initialization deferred via React `lazy` and Next.js `dynamic` with ssr disabled).
  * **PWA Caching:** Hard caching of core CSS/JS bundles and static shell assets via Service Worker.

---
*End of Master Architecture Specification.*
