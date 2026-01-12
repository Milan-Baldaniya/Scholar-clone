import { ROUTES } from '@/constants/routes';
import { NavItem, ProductCategory, Product } from '@/types';

/**
 * Navigation configuration for the application
 * Used by Navbar and other navigation components
 */

// Main navigation items
export const mainNavigation: NavItem[] = [
    { name: 'HOME', href: ROUTES.HOME },
    {
        name: 'PRODUCTS',
        href: ROUTES.PRODUCTS.ROOT,
        children: [
            {
                name: 'Higher Education Institute Management System',
                href: ROUTES.PRODUCTS.UNIVERSITY_MANAGEMENT,
                icon: '🏛️',
                description: 'AI-driven higher education ERP system'
            },
            {
                name: 'Alumni Management System',
                href: ROUTES.PRODUCTS.ALUMNI_MANAGEMENT,
                icon: '👥',
                description: 'Connect and engage with alumni network'
            },
            {
                name: 'Timetable & Attendance Management',
                href: ROUTES.PRODUCTS.TIMETABLE_ATTENDANCE,
                icon: '📅',
                description: 'Smart scheduling and attendance tracking'
            },
            {
                name: 'Transport & Vehicle Management',
                href: ROUTES.PRODUCTS.TRANSPORT_MANAGEMENT,
                icon: '🚌',
                description: 'Fleet management and route optimization'
            },
            {
                name: 'Inventory & Asset Management',
                href: ROUTES.PRODUCTS.INVENTORY_MANAGEMENT,
                icon: '📦',
                description: 'Track and manage institutional assets'
            },
            {
                name: 'Accreditation & Compliance',
                href: ROUTES.PRODUCTS.ACCREDITATION_COMPLIANCE,
                icon: '📋',
                description: 'NAAC, NBA, and regulatory compliance'
            },
        ]
    },
    {
        name: 'SERVICES',
        href: ROUTES.SERVICES.ROOT,
        children: [
            {
                name: 'Implementation',
                href: ROUTES.SERVICES.IMPLEMENTATION,
                description: 'End-to-end system implementation'
            },
            {
                name: 'Support',
                href: ROUTES.SERVICES.SUPPORT,
                description: '24/7 technical support'
            },
            {
                name: 'Training',
                href: ROUTES.SERVICES.TRAINING,
                description: 'Staff and faculty training programs'
            },
            {
                name: 'Consulting',
                href: ROUTES.SERVICES.CONSULTING,
                description: 'Digital transformation consulting'
            },
        ]
    },
    {
        name: 'ABOUT US',
        href: ROUTES.ABOUT.ROOT,
        children: [
            { name: 'Our Story', href: ROUTES.ABOUT.OUR_STORY },
            { name: 'Team', href: ROUTES.ABOUT.TEAM },
            { name: 'Mission & Vision', href: ROUTES.ABOUT.MISSION_VISION },
            { name: 'Careers', href: ROUTES.ABOUT.CAREERS },
        ]
    },
    {
        name: 'COMPANY',
        href: ROUTES.COMPANY.ROOT,
        children: [
            { name: 'Partners', href: ROUTES.COMPANY.PARTNERS },
            { name: 'Clients', href: ROUTES.COMPANY.CLIENTS },
            { name: 'News & Updates', href: ROUTES.COMPANY.NEWS },
            { name: 'Contact', href: ROUTES.COMPANY.CONTACT },
        ]
    },
];

// Product categories for mega menu
export const productCategories: ProductCategory[] = [
    {
        name: 'Administrative Management Systems',
        category: 'Administrative Management Systems', // Added for type compatibility
        icon: '🏢',
        href: ROUTES.PRODUCTS.ROOT, // Added for type compatibility
        products: [], // Added for type compatibility - or refactor type to be optional
        items: [
            { name: 'University & College Management System', href: ROUTES.PRODUCTS.UNIVERSITY_MANAGEMENT },
            { name: 'Inventory, Purchase & Asset Management', href: ROUTES.PRODUCTS.INVENTORY_MANAGEMENT },
        ]
    },
    {
        name: 'Student Lifecycle & Academic Management',
        category: 'Student Lifecycle & Academic Management',
        icon: '👩‍🎓',
        href: ROUTES.PRODUCTS.ROOT,
        products: [],
        items: [
            { name: 'Alumni Management System', href: ROUTES.PRODUCTS.ALUMNI_MANAGEMENT },
            { name: 'Timetable & Attendance Management', href: ROUTES.PRODUCTS.TIMETABLE_ATTENDANCE },
        ]
    },
    {
        name: 'Operations & Compliance',
        category: 'Operations & Compliance',
        icon: '⚙️',
        href: ROUTES.PRODUCTS.ROOT,
        products: [],
        items: [
            { name: 'Transport & Vehicle Management', href: ROUTES.PRODUCTS.TRANSPORT_MANAGEMENT },
            { name: 'Accreditation & Compliance Management', href: ROUTES.PRODUCTS.ACCREDITATION_COMPLIANCE },
        ]
    },
];

// All products list for listing pages
export const allProducts: Product[] = [
    {
        slug: 'university-management',
        name: 'University & College Management System',
        shortName: 'University Management',
        description: 'AI-driven comprehensive ERP solution for higher education institutions',
        icon: '🏛️',
        href: ROUTES.PRODUCTS.UNIVERSITY_MANAGEMENT,
        features: ['Student Lifecycle', 'Faculty Management', 'Smart Classrooms', 'Analytics'],
    },
    {
        slug: 'alumni-management',
        name: 'Alumni Management System',
        shortName: 'Alumni Management',
        description: 'Connect, engage, and grow your alumni network effectively',
        icon: '👥',
        href: ROUTES.PRODUCTS.ALUMNI_MANAGEMENT,
        features: ['Alumni Directory', 'Events', 'Fundraising', 'Mentorship'],
    },
    {
        slug: 'timetable-attendance',
        name: 'Timetable & Attendance Management System',
        shortName: 'Timetable & Attendance',
        description: 'Smart scheduling and real-time attendance tracking',
        icon: '📅',
        href: ROUTES.PRODUCTS.TIMETABLE_ATTENDANCE,
        features: ['Auto Scheduling', 'Biometric Integration', 'Reports', 'Notifications'],
    },
    {
        slug: 'transport-management',
        name: 'Transport & Vehicle Management System',
        shortName: 'Transport Management',
        description: 'Complete fleet management and route optimization',
        icon: '🚌',
        href: ROUTES.PRODUCTS.TRANSPORT_MANAGEMENT,
        features: ['GPS Tracking', 'Route Planning', 'Driver Management', 'Safety'],
    },
    {
        slug: 'inventory-management',
        name: 'Inventory, Purchase & Asset Management',
        shortName: 'Inventory Management',
        description: 'Track and manage all institutional assets efficiently',
        icon: '📦',
        href: ROUTES.PRODUCTS.INVENTORY_MANAGEMENT,
        features: ['Asset Tracking', 'Purchase Orders', 'Vendor Management', 'Reporting'],
    },
    {
        slug: 'accreditation-compliance',
        name: 'Accreditation & Compliance Management',
        shortName: 'Accreditation & Compliance',
        description: 'Streamline NAAC, NBA, and regulatory compliance processes',
        icon: '📋',
        href: ROUTES.PRODUCTS.ACCREDITATION_COMPLIANCE,
        features: ['Document Management', 'Self-Assessment', 'Audit Trail', 'Reports'],
    },
];
