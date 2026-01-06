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
company pages with a scalable, modular architecture.


================================================================================
                           FOLDER STRUCTURE
================================================================================

app/src/
│
├── app/                          # Next.js App Router (Pages & Routes)
│   ├── layout.tsx                # Root layout with Navbar & Footer
│   ├── page.tsx                  # Home page (/)
│   ├── globals.css               # Global styles
│   ├── sitemap.ts                # SEO sitemap generator
│   │
│   ├── products/                 # Product pages section
│   │   ├── page.tsx              # Products overview (/products)
│   │   ├── university-management/
│   │   │   └── page.tsx          # University & College Management
│   │   ├── alumni-management/
│   │   │   └── page.tsx          # Alumni Management System
│   │   ├── timetable-attendance/
│   │   │   └── page.tsx          # Timetable & Attendance
│   │   ├── transport-management/
│   │   │   └── page.tsx          # Transport & Vehicle Management
│   │   ├── inventory-management/
│   │   │   └── page.tsx          # Inventory & Asset Management
│   │   └── accreditation-compliance/
│   │       └── page.tsx          # Accreditation & Compliance
│   │
│   ├── services/                 # Services section
│   │   └── page.tsx              # Services overview (/services)
│   │   # TODO: Add sub-pages: implementation, support, training, consulting
│   │
│   ├── about/                    # About Us section
│   │   └── page.tsx              # About overview (/about)
│   │   # TODO: Add sub-pages: our-story, team, mission-vision, careers
│   │
│   ├── company/                  # Company section
│   │   └── page.tsx              # Company overview (/company)
│   │   # TODO: Add sub-pages: partners, clients, news, contact
│   │
│   └── contact/                  # Contact page
│       └── page.tsx              # Contact form (/contact)
│
├── components/                   # React Components
│   │
│   ├── layout/                   # Layout components (used in root layout)
│   │   └── Navbar.tsx            # Main navigation bar
│   │
│   ├── ui/                       # Reusable UI primitives
│   │   ├── Button.tsx            # Custom button component
│   │   ├── ChipView.tsx          # Chip/tag component
│   │   └── EditText.tsx          # Input component
│   │
│   ├── pages/                    # Page-specific components
│   │   │
│   │   ├── home/                 # Home page components
│   │   │   ├── index.ts          # Barrel export
│   │   │   ├── HomeHero.tsx      # Hero section for home
│   │   │   ├── HomeFeatures.tsx  # Features section for home
│   │   │   ├── HomeStudentLifecycle.tsx
│   │   │   └── HomeWhyChoose.tsx
│   │   │
│   │   └── products/             # Product page components
│   │       └── university-management/
│   │           ├── index.ts      # Barrel export
│   │           ├── UniversityHomePage.tsx  # Main container
│   │           ├── UniversityHero.tsx
│   │           ├── UniversityFeatures.tsx
│   │           ├── WhyUniversities.tsx
│   │           ├── KeyFeatures.tsx
│   │           ├── ScholarEdge.tsx
│   │           └── DigitalTransformation.tsx
│   │
│   └── Footer.tsx                # Main footer component
│
├── constants/                    # Application constants
│   └── routes.ts                 # All route path definitions
│
├── config/                       # Configuration files
│   └── navigation.ts             # Navigation menu structure & product list
│
├── types/                        # TypeScript type definitions
│   └── index.ts                  # Common types (FeatureCard, Product, etc.)
│
├── lib/                          # Utility functions
│   └── utils.ts                  # Helper functions (cn, etc.)
│
└── styles/                       # Additional styles
    ├── index.css                 # Main stylesheet imports
    └── tailwind.css              # Tailwind configuration


================================================================================
                           NAMING CONVENTIONS
================================================================================

COMPONENTS:
-----------
Components are PREFIXED by their page/section to avoid naming conflicts:

  ✅ HomeHero.tsx          - Hero for Home page
  ✅ UniversityHero.tsx    - Hero for University product page
  ✅ AlumniHero.tsx        - Hero for Alumni product page (if created)

  ❌ Hero.tsx              - Ambiguous, don't use
  ❌ HeroSection.tsx       - Old naming, don't use


ROUTES:
-------
All routes are defined in constants/routes.ts. Use these instead of hardcoding:

  ✅ import { ROUTES } from '@/constants/routes';
     <Link href={ROUTES.PRODUCTS.UNIVERSITY_MANAGEMENT}>

  ❌ <Link href="/products/university-management">


IMPORTS:
--------
Use barrel exports for cleaner imports:

  ✅ import { HomeHero, HomeFeatures } from '@/components/pages/home';
  ✅ import { UniversityHomePage } from '@/components/pages/products/university-management';

  ❌ import HomeHero from '@/components/pages/home/HomeHero';


================================================================================
                         HOW TO ADD A NEW PRODUCT
================================================================================

1. CREATE ROUTE PAGE:
   app/products/[your-product-slug]/page.tsx

2. ADD TO ROUTES (constants/routes.ts):
   PRODUCTS: {
     ...
     YOUR_PRODUCT: '/products/your-product-slug',
   }

3. ADD TO NAVIGATION (config/navigation.ts):
   - Add to mainNavigation products children
   - Add to allProducts array

4. (OPTIONAL) CREATE CUSTOM COMPONENTS:
   components/pages/products/your-product-slug/
   ├── index.ts
   ├── YourProductHomePage.tsx
   ├── YourProductHero.tsx
   └── ... other sections


================================================================================
                         HOW TO ADD A SUB-PAGE
================================================================================

Example: Adding /services/implementation

1. Create folder: app/services/implementation/
2. Create file: app/services/implementation/page.tsx
3. Add route to constants/routes.ts
4. Update navigation.ts if needed


================================================================================
                              KEY FILES
================================================================================

MUST-READ FILES FOR NEW DEVELOPERS:
- constants/routes.ts        → Understand all available routes
- config/navigation.ts       → Understand menu structure & products
- app/layout.tsx             → Root layout with Navbar/Footer
- components/pages/home/     → Example of page component structure


================================================================================
                              TECH STACK
================================================================================

- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- Lucide Icons


================================================================================
                              COMMANDS
================================================================================

npm run dev       → Start development server (http://localhost:3000)
npm run build     → Build for production
npm run start     → Start production server
npm run lint      → Run ESLint


================================================================================
                              TODO LIST
================================================================================

[ ] Create sub-pages for /services (implementation, support, training, consulting)
[ ] Create sub-pages for /about (our-story, team, mission-vision, careers)
[ ] Create sub-pages for /company (partners, clients, news)
[ ] Update Navbar.tsx to use routes from constants/routes.ts
[ ] Create shared product components (_shared/) for reuse
[ ] Add more product-specific components as designs are finalized


================================================================================
                         CONTACT / QUESTIONS
================================================================================

If you have questions about the project structure, refer to:
- This file (DEVELOPER_GUIDE.md)
- config/navigation.ts for product/menu structure
- constants/routes.ts for all routes

================================================================================
