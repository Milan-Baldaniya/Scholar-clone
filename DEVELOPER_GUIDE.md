================================================================================
                    SCHOLAR CLONE - PROJECT STRUCTURE GUIDE
                         For Developers & Contributors
================================================================================

Last Updated: January 2026

--------------------------------------------------------------------------------
                              QUICK OVERVIEW
--------------------------------------------------------------------------------

This is a Next.js 14+ application using the App Router for a Higher Education
ERP website. The project supports multiple products, services, about, and
company pages with a scalable, modular architecture, focused on high performance
and rich interactivity.

================================================================================
                           FOLDER STRUCTURE
================================================================================

================================================================================
                           FOLDER STRUCTURE
================================================================================

app/src/
│
├── app/                          # Next.js App Router (Pages & Routes)
│   ├── about/                    # About Us page
│   ├── company/                  # Company sub-pages (Careers, Partners, etc.)
│   │   ├── careers/              # /company/careers
│   │   └── partners/             # /company/partners
│   ├── contact/                  # Contact page
│   ├── products/                 # Product landing pages
│   │   ├── university-management/
│   │   ├── alumni-management/
│   │   ├── timetable-attendance/
│   │   ├── transport-management/
│   │   ├── inventory-management/
│   │   └── ...
│   ├── services/                 # Service offering pages
│   ├── globals.css               # Global styles & Tailwind directives
│   ├── layout.tsx                # Root layout (GlobalLoader, Navbar, Footer)
│   ├── loading.tsx               # Next.js default loading UI
│   ├── page.tsx                  # Home page (/)
│   └── sitemap.ts                # Dynamic SEO sitemap generator
│
├── components/                   # React Components
│   ├── layout/                   # Global layout components
│   │   ├── Navbar.tsx            # Main Navigation
│   │   └── ...
│   ├── pages/                    # Page-specific components
│   │   ├── home/                 # Home page widgets
│   │   ├── company/              # Company page widgets
│   │   ├── products/             # Product page widgets
│   │   ├── inventory/            # Inventory page widgets
│   │   └── ...
│   ├── ui/                       # Reusable UI primitives
│   │   ├── GlobalLoader.tsx      # Route transition manager
│   │   ├── Loader.tsx            # Lottie Animation Loader
│   │   ├── Button.tsx            # Standard Button
│   │   ├── ChipView.tsx          # Tag/Chip component
│   │   └── EditText.tsx          # Form Input
│   ├── utils/                    # Utility components
│   │   └── ScrollToTop.tsx       # Scroll handler
│   └── Footer.tsx                # Global Footer
│
├── config/                       # App Configuration
│   └── navigation.ts             # Menu structure & Product configuration
│
├── constants/                    # Constants & Static Data
│   ├── routes.ts                 # Route path definitions
│   └── data.ts                   # Static content (Partners, Roles, etc.)
│
├── lib/                          # Libraries & Utilities
│   ├── utils.ts                  # Helper functions (clsx, twMerge)
│   └── ...
│
├── styles/                       # Additional Styles
│   ├── index.css                 # Base styles
│   └── tailwind.css              # Custom Tailwind configs
│
└── types/                        # TypeScript Definitions
    └── index.ts                  # Shared interfaces

================================================================================
                          PERFORMANCE & BEST PRACTICES
================================================================================

1. IMAGE OPTIMIZATION (LCP):
   - All "Hero" images (above the fold) MUST have the `priority` prop.
   - Example:
     <Image src="..." fill priority className="object-cover" />
   - Use `sizes` prop for responsive images to prevent downloading 4k images on mobile.

2. GLOBAL LOADER & TRANSITIONS:
   - The app uses a custom `GlobalLoader` in `layout.tsx`.
   - It listens for route changes via `usePathname` and triggers a smooth transition.
   - DO NOT remove `GlobalLoader` from the root layout.

3. ANIMATIONS:
   - Use `framer-motion` for scroll-triggered animations (fade-ins, slides).
   - Use `lottie-react` for complex vector animations (Loader, Illustrations).
   - Ensure `suppressHydrationWarning` is used on interactive elements if browser extensions cause mismatch errors.

4. RESPONSIVENESS:
   - Mobile First approach.
   - Standard Grid: `grid-cols-1` (Mobile) -> `grid-cols-2` (Tablet) -> `grid-cols-3/4` (Desktop).
   - Use fluid typography (e.g., `text-3xl md:text-5xl`) to prevent overflow.

5. GLOBAL SCALING & LAYOUT STANDARDS:
   - **Global Zoom**: The application enforces a global `zoom: 0.8` in `globals.css` to align with design requirements.
   - **Layout Containers**: 
     - ❌ DO NOT use custom undefined classes like `max-w-scaled`, `w-scaled-xs`, `min-h-scaled-lg`.
     - ✅ USE standard Tailwind classes:
       - Page Container: `max-w-7xl`
       - Card Widths: `w-[250px]`, `w-[350px]` (or relative percentages)
       - Min Heights: `min-h-[400px]`, etc.
   - All layout components must be tested at this 0.8 scale to ensure proper spacing and alignment.

================================================================================
                           NAMING CONVENTIONS
================================================================================

COMPONENTS:
-----------
Components are PREFIXED by their page/section:
  ✅ CareerHero.tsx
  ✅ PartnerGrid.tsx
  ❌ Hero.tsx (Ambiguous)

IMPORTS:
--------
Use absolute imports `@/...`:
  ✅ import Navbar from '@/components/layout/Navbar';
  ❌ import Navbar from '../../components/layout/Navbar';

================================================================================
                               TECH STACK
================================================================================

- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- Framer Motion (Animations)
- Lottie React (Vector Animations)
- Lucide React (Icons)

================================================================================
                               TODO LIST
================================================================================

[x] Create Career page components
[x] Create Partner page components
[x] Implement Global Preloader & Page Transitions
[x] Optimize Hero images (LCP)
[x] Verify Global Responsiveness
[ ] Create sub-pages for remaining /services
[ ] Integrate backend API for Contact Form
[ ] Add SEO metadata for all product pages

================================================================================
                          CONTACT / QUESTIONS
================================================================================

Refer to `constants/routes.ts` for route definitions and `config/navigation.ts`
for menu structure.
