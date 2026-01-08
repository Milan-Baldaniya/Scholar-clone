export const MAIN_NAVIGATION = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTS", href: "#products", hasDropdown: true },
    { name: "SERVICES", href: "/services" },
    { name: "ABOUT US", href: "/about" },
    { name: "COMPANY", href: "#company", hasDropdown: true },
];

export const FOOTER_LINKS = {
    home: [
        { name: "Home", href: "#" },
        { name: "About Us", href: "#" },
        { name: "Why We Serve", href: "#" },
        { name: "Changes and Benefits", href: "#" },
        { name: "Blogs and broachers", href: "#" },
        { name: "Contact", href: "/contact" },
        { name: "Request a free demo", href: "#" },
    ],
    k12: [
        { name: "Home", href: "#" },
        { name: "About Us", href: "#" },
        { name: "Products", href: "#" },
        { name: "Services", href: "#" },
        { name: "Resources & Blogs", href: "#" },
        { name: "Contact", href: "/contact" },
        { name: "Book Demo", href: "#" },
    ],
    higherEd: [
        { name: "Home", href: "#" },
        { name: "About Us", href: "#" },
        { name: "Products", href: "#" },
        { name: "Services", href: "#" },
        { name: "Resources & Blogs", href: "#" },
        { name: "Contact", href: "/contact" },
        { name: "Book Demo", href: "#" },
    ],
    corporate: [
        { name: "Home", href: "#" },
        { name: "About Us", href: "#" },
        { name: "Products", href: "#" },
        { name: "Services", href: "#" },
        { name: "Resources & Blogs", href: "#" },
        { name: "Contact", href: "/contact" },
        { name: "Book Demo", href: "#" },
    ],
};

export const PARTNERS_DATA = [
    {
        id: 1,
        category: "School",
        title: "School Partners",
        description: "Empowering K-12 schools with modern management and learning tools.",
        image: "/assets/partner_school.png"
    },
    {
        id: 2,
        category: "Product",
        title: "Higher Education Partners",
        description: "Streamlining operations and enhancing learning experiences for colleges and universities.",
        image: "/assets/partner_university.png"
    },
    {
        id: 3,
        category: "Software Engineering",
        title: "Corporate Partners",
        description: "Providing cutting-edge training and HRMS solutions for corporate growth.",
        image: "/assets/partner_corporate.png"
    },
    {
        id: 4,
        category: "Sales",
        title: "Channel Partners",
        description: "Collaborating to expand Scholar Clone's reach and impact globally.",
        image: "/assets/partner_channel.png"
    },
    // Repeats for grid to look full as per original design
    {
        id: 5,
        category: "School",
        title: "School Partners",
        description: "Empowering K-12 schools with modern management and learning tools.",
        image: "/assets/partner_school.png"
    },
    {
        id: 6,
        category: "Product",
        title: "Higher Education Partners",
        description: "Streamlining operations and enhancing learning experiences for colleges and universities.",
        image: "/assets/partner_university.png"
    },
    {
        id: 7,
        category: "Software Engineering",
        title: "Corporate Partners",
        description: "Providing cutting-edge training and HRMS solutions for corporate growth.",
        image: "/assets/partner_corporate.png"
    },
    {
        id: 8,
        category: "Sales",
        title: "Channel Partners",
        description: "Collaborating to expand Scholar Clone's reach and impact globally.",
        image: "/assets/partner_channel.png"
    },
    {
        id: 9,
        category: "School",
        title: "School Partners",
        description: "Empowering K-12 schools with modern management and learning tools.",
        image: "/assets/partner_school.png"
    },
    {
        id: 10,
        category: "Product",
        title: "Higher Education Partners",
        description: "Streamlining operations and enhancing learning experiences for colleges and universities.",
        image: "/assets/partner_university.png"
    },
    {
        id: 11,
        category: "Software Engineering",
        title: "Corporate Partners",
        description: "Providing cutting-edge training and HRMS solutions for corporate growth.",
        image: "/assets/partner_corporate.png"
    },
    {
        id: 12,
        category: "Sales",
        title: "Channel Partners",
        description: "Collaborating to expand Scholar Clone's reach and impact globally.",
        image: "/assets/partner_channel.png"
    }
];

export const CAREER_ROLES_DATA = [
    {
        title: "Full Stack Developers",
        location: "Onsite/Remote",
        experience: "2-6 years",
        iconKey: "code"
    },
    {
        title: "UI/UX Designer",
        location: "Remote / Onsite",
        experience: "1-4 years",
        iconKey: "monitor"
    },
    {
        title: "Product Manager",
        location: "Remote / Hybrid",
        experience: "3-7 years",
        iconKey: "briefcase"
    }
];

export const EMPLOYEE_BENEFITS_DATA = [
    "Competitive Salary & Performance-Based Growth",
    "Flexible Work Arrangements (Hybrid & Remote Work Options)",
    "Medical & Wellness Benefits (Health insurance, mental well-being programs)",
    "Learning & Upskilling Programs (Certifications, AI training, workshops)",
    "Hackathons, Innovation Challenges & Tech Events",
    "Annual Team Retreats, Offsite Events & Celebrations"
];

export const PRODUCTS_DROPDOWN_DATA = [
    {
        category: "Administrative Management Systems",
        description: "Streamline campus operations with automated tools.",
        icon: "Building2", // Using string keys for Lucide icons
        products: [
            { name: "Transport & Vehicle Management System", href: "/products/transport-management", icon: "Bus" },
            { name: "Inventory, Purchase & Asset Management", href: "/products/inventory-management", icon: "Package" },
            { name: "Event & Guest House Booking Management", href: "#", icon: "CalendarCheck" },
            { name: "Website Management System", href: "#", icon: "Globe" }
        ]
    },
    {
        category: "Student Lifecycle & Academic Management",
        description: "Manage the entire student journey from admission to alumni.",
        icon: "GraduationCap",
        products: [
            { name: "University & College Management System", href: "/products/university-management", icon: "School" },
            { name: "Timetable & Attendance Management", href: "/products/timetable-attendance", icon: "Clock" },
            { name: "Student Lifecycle Management", href: "#", icon: "UserCheck" }
        ]
    },
    {
        category: "Examination & Assessment Solutions",
        description: "Secure and efficient exam management tools.",
        icon: "ClipboardCheck",
        products: [
            { name: "Examination Management System", href: "#", icon: "FileText" },
            { name: "Lapses & Grievance Management", href: "#", icon: "AlertCircle" },
            { name: "Accreditation & Compliance Management", href: "#", icon: "ShieldCheck" }
        ]
    },
    {
        category: "Learning & Teaching Platforms",
        description: "Empower educators and enhance student engagement.",
        icon: "BookOpen",
        products: [
            { name: "Learning Management System (LMS)", href: "#", icon: "Laptop" },
            { name: "Library Management System", href: "#", icon: "Book" },
            { name: "360° Feedback System", href: "#", icon: "MessageSquare" }
        ]
    },
    {
        category: "Research & Institutional Growth",
        description: "Foster collaboration and track institutional progress.",
        icon: "TrendingUp",
        products: [
            { name: "Alumni Management System", href: "/products/alumni-management", icon: "Users" },
            { name: "Convocation Management System", href: "#", icon: "Award" },
            { name: "National & International Linkages", href: "#", icon: "Globe2" },
            { name: "Affiliation & Licensing Module", href: "#", icon: "BadgeCheck" }
        ]
    },
    {
        category: "Finance & HR Solutions",
        description: "Integrated financial and human resource management.",
        icon: "Banknote",
        products: [
            { name: "Finance & Accounting", href: "#", icon: "Calculator" },
            { name: "Human Resource Management (HRMS)", href: "#", icon: "Users2" },
            { name: "Payroll Management", href: "#", icon: "Wallet" },
            { name: "Application/Document Tracking", href: "#", icon: "FileSearch" } // Moved here as it fits admin/HR workflows
        ]
    }
];
