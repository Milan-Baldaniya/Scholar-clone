/**
 * Centralized route definitions for the Scholar Clone application
 * Use these constants to avoid hardcoding paths throughout the codebase
 */

export const ROUTES = {
    HOME: '/',

    // Products
    PRODUCTS: {
        ROOT: '/products',
        UNIVERSITY_MANAGEMENT: '/products/university-management',
        ALUMNI_MANAGEMENT: '/products/alumni-management',
        TIMETABLE_ATTENDANCE: '/products/timetable-attendance',
        TRANSPORT_MANAGEMENT: '/products/transport-management',
        INVENTORY_MANAGEMENT: '/products/inventory-management',
        ACCREDITATION_COMPLIANCE: '/products/accreditation-compliance',
    },

    // Services
    SERVICES: {
        ROOT: '/services',
        IMPLEMENTATION: '/services/implementation',
        SUPPORT: '/services/support',
        TRAINING: '/services/training',
        CONSULTING: '/services/consulting',
    },

    // About
    ABOUT: {
        ROOT: '/about',
        OUR_STORY: '/about/our-story',
        TEAM: '/about/team',
        MISSION_VISION: '/about/mission-vision',
        CAREERS: '/about/careers',
    },

    // Company
    COMPANY: {
        ROOT: '/company',
        PARTNERS: '/company/partners',
        CLIENTS: '/company/clients',
        NEWS: '/company/news',
        CONTACT: '/company/contact',
    },

    // Standalone pages
    CONTACT: '/contact',
} as const;

// Type for route values
export type RouteValue = string;

// Product slug to route mapping
export const PRODUCT_SLUGS = {
    'university-management': ROUTES.PRODUCTS.UNIVERSITY_MANAGEMENT,
    'alumni-management': ROUTES.PRODUCTS.ALUMNI_MANAGEMENT,
    'timetable-attendance': ROUTES.PRODUCTS.TIMETABLE_ATTENDANCE,
    'transport-management': ROUTES.PRODUCTS.TRANSPORT_MANAGEMENT,
    'inventory-management': ROUTES.PRODUCTS.INVENTORY_MANAGEMENT,
    'accreditation-compliance': ROUTES.PRODUCTS.ACCREDITATION_COMPLIANCE,
} as const;
