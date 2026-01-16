import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

export type IconName = keyof typeof Icons;

export interface NavItem {
    name: string;
    href: string;
    description?: string;
    icon?: string | IconName;
    hasDropdown?: boolean;
    children?: NavItem[];
}

export interface Product {
    name: string;
    href: string;
    icon: IconName | string; // Allow string for flexibility, but prefer IconName
    description: string;
    slug?: string;
    features?: string[];
    shortName?: string;
    benefits?: string[];
    whyChooseUs?: string[];
}

export interface ProductCategory {
    category: string; // Used in Dropdown
    name?: string; // Used in navigation.ts
    description?: string;
    image?: string; // Image for dropdown preview
    icon: IconName | string;
    href: string;
    products: Product[] | NavItem[]; // Allow flexibility for now to support both structures
    items?: NavItem[]; // navigation.ts uses 'items'
}

export interface Partner {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
}

export interface CareerRole {
    title: string;
    location: string;
    experience: string;
    iconKey: string;
}

export interface FooterSection {
    home: NavItem[];
    k12: NavItem[];
    higherEd: NavItem[];
    corporate: NavItem[];
    [key: string]: NavItem[];
}

export interface CompanyCategory {
    id: string;
    name: string;
    icon: LucideIcon;
    description: string;
    href: string;
}
