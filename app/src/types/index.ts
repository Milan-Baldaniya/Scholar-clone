/**
 * Common type definitions for the Scholar Clone application
 */

// Feature card type used across product pages
export interface FeatureCard {
    id: number;
    title: string;
    description: string;
    image?: string;
    icon?: string;
}

// Key feature type for numbered feature lists
export interface KeyFeature {
    id: number;
    number: string;
    title: string;
    description: string;
}

// Product definition
export interface Product {
    slug: string;
    name: string;
    shortName: string;
    description: string;
    icon: string;
    href: string;
    features: string[];
    heroImage?: string;
}

// Service definition
export interface Service {
    slug: string;
    name: string;
    description: string;
    icon: string;
    href: string;
    features: string[];
}

// Team member
export interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string;
    bio?: string;
    linkedin?: string;
}

// Testimonial
export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    image?: string;
    rating?: number;
}

// Statistics
export interface Statistic {
    id: number;
    value: string;
    label: string;
    suffix?: string;
}

// SEO Metadata
export interface PageMeta {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
}
