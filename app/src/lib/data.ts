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
        category: "Analytics & Reporting Tools",
        description: "Turn data into actionable intelligence.",
        icon: "BarChart3",
        href: "/products/analytics-reporting",
        products: [
            { name: "Institutional Analytics Platform", href: "#", icon: "LayoutDashboard", description: "Unified command center." },
            { name: "Academic Reporting Software", href: "#", icon: "FileText", description: "Compliance and internal reports." },
            { name: "AI Insights & Prediction", href: "#", icon: "Brain", description: "Forecast trends and risks." },
            { name: "Performance Analytics", href: "#", icon: "LineChart", description: "Track institutional KPIs." },
            { name: "Student Performance Analytics", href: "#", icon: "GraduationCap", description: "Monitor academic outcomes." },
            { name: "Teacher Performance Analytics", href: "#", icon: "UserCheck", description: "Evaluate faculty effectiveness." },
            { name: "Stakeholder Dashboards", href: "#", icon: "PieChart", description: "Role-specific views." },
            { name: "Reports Engine", href: "#", icon: "FileBarChart", description: "Customizable reporting tool." },
            { name: "Predictive Analytics", href: "#", icon: "TrendingUp", description: "Future trend forecasting." },
            { name: "Admission Prediction", href: "#", icon: "UserPlus", description: "Enrollment forecasting models." }
        ]
    },
    {
        category: "Administrative Management Systems",
        description: "Core institutional operations & compliance management.",
        icon: "Building2",
        href: "/products/university-management",
        products: [
            { name: "University & College Management", href: "#", icon: "LayoutDashboard", description: "Centralized digital platform." },
            { name: "Alumni Management System", href: "#", icon: "UsersRound", description: "Alumni engagement & networking." },
            { name: "Timetable & Attendance", href: "#", icon: "CalendarClock", description: "Automated scheduling & tracking." },
            { name: "Transport & Vehicle Management", href: "#", icon: "Truck", description: "Fleet routing & safety." },
            { name: "Inventory & Asset Management", href: "#", icon: "Boxes", description: "Procurement & lifecycle tracking." },
            { name: "Accreditation & Compliance", href: "#", icon: "ShieldCheck", description: "NAAC, NBA, NIRF readiness." },
            { name: "Affiliation & Licensing", href: "#", icon: "FileBadge", description: "Manage statutory approvals." },
            { name: "Website Management System", href: "#", icon: "Globe", description: "CMS for institutional web." },
            { name: "Lapses & Grievance Management", href: "#", icon: "MessageCircleWarning", description: "Redressal & tracking." },
            { name: "360° Feedback System", href: "#", icon: "MessagesSquare", description: "Multi-stakeholder feedback." },
            { name: "Doc Tracking & Journey", href: "#", icon: "FileSearch", description: "File movement monitoring." },
            { name: "Guest House & Hall Booking", href: "#", icon: "Hotel", description: "Facility reservation system." },
            { name: "Event Management Program", href: "#", icon: "CalendarHeart", description: "Plan & execute events." },
            { name: "Convocation Management", href: "#", icon: "PartyPopper", description: "Degree award ceremonies." },
            { name: "National & Int. Linkages", href: "#", icon: "Link", description: "Collaborations & MoUs." },
            { name: "Communication System", href: "#", icon: "Megaphone", description: "Centralized alerts & msgs." },
            { name: "Email/SMS/Chatbot", href: "#", icon: "MessageSquareText", description: "Multi-channel support." },
            { name: "Workflow Management", href: "#", icon: "GitMerge", description: "Approval process automation." },
            { name: "Campus Security (Visitor)", href: "#", icon: "ShieldAlert", description: "Entry & safety tracking." },
            { name: "Impact Study Management", href: "#", icon: "Target", description: "Measure institutional outcomes." }
        ]
    },
    {
        category: "Student Lifecycle & Academic Management",
        description: "From admission to graduation, complete student journey.",
        icon: "UserSquare2",
        href: "/products/transport-management",
        products: [
            { name: "Education CRM", href: "#", icon: "Megaphone", description: "Lead & inquiry management." },
            { name: "Online Entrance Exam", href: "#", icon: "Laptop", description: "Secure entrance testing." },
            { name: "Pre-Registration & Eligibility", href: "#", icon: "FileCheck", description: "Applicant verification." },
            { name: "Student Information System", href: "#", icon: "Users", description: "Centralized student data." },
            { name: "Admission & Migration", href: "#", icon: "UserPlus", description: "Enrollment workflows." },
            { name: "Academic Data Configuration", href: "#", icon: "Settings", description: "Program & course setup." },
            { name: "Attendance Tracking", href: "#", icon: "Clock", description: "Real-time monitoring." },
            { name: "Hostel & Accommodation", href: "#", icon: "Home", description: "Room allocation billing." },
            { name: "Extracurricular Management", href: "#", icon: "Trophy", description: "Sports & club activities." },
            { name: "Career Counseling", href: "#", icon: "Briefcase", description: "Placement readiness." },
            { name: "Student Portal", href: "#", icon: "Layout", description: "Self-service access." },
            { name: "Mobile App", href: "#", icon: "Smartphone", description: "On-the-go access." },
            { name: "Club Management", href: "#", icon: "Users", description: "Student organizations." },
            { name: "Student Transfer/Migration", href: "#", icon: "ArrowRightLeft", description: "Inter-institute movement." }
        ]
    },
    {
        category: "Examination & Assessment Solutions",
        description: "AI-driven, secure & digital exam processing.",
        icon: "FileCheck2",
        href: "/products/alumni-management",
        products: [
            { name: "Online Exam Form & Admit Card", href: "#", icon: "FileText", description: "Digital applications." },
            { name: "Pre, On & Post Exam Auto", href: "#", icon: "Workflow", description: "Complete lifecycle." },
            { name: "Exam Centre Management", href: "#", icon: "MapPin", description: "Logistics & seating." },
            { name: "Digital Question Bank", href: "#", icon: "Database", description: "Secure paper generation." },
            { name: "On-Screen Evaluation", href: "#", icon: "MonitorCheck", description: "Digital script marking." },
            { name: "Internal Assessment Marks", href: "#", icon: "ClipboardList", description: "Continuous evaluation." },
            { name: "Result Processing", href: "#", icon: "Calculator", description: "Grades & marksheets." },
            { name: "Rechecking & Reassessment", href: "#", icon: "RefreshCw", description: "Grievance handling." }
        ]
    },
    {
        category: "Learning & Teaching Platforms",
        description: "Advanced education technology for smart learning.",
        icon: "Presentation",
        href: "/products/inventory-management",
        products: [
            { name: "Learning Management System", href: "#", icon: "MonitorPlay", description: "LMS & eLearning." },
            { name: "Academic & Lesson Planning", href: "#", icon: "Calendar", description: "Structured delivery." },
            { name: "Course & Content Creation", href: "#", icon: "PenTool", description: "Digital resources." },
            { name: "Assessment & Rubrics", href: "#", icon: "CheckSquare", description: "Standardized evaluation." },
            { name: "Curriculum Management", href: "#", icon: "Book", description: "Syllabus governance." },
            { name: "Outcome-Based Education", href: "#", icon: "Target", description: "OBE frameworks." },
            { name: "Choice-Based Credit (CBCS)", href: "#", icon: "Layers", description: "Flexible academics." },
            { name: "Personalized Adaptive Learning", href: "#", icon: "BrainCircuit", description: "AI-driven paths." },
            { name: "Feedback Management", href: "#", icon: "MessageCircle", description: "Course & faculty feedback." },
            { name: "Digital Library & KRC", href: "#", icon: "Library", description: "E-resources access." },
            { name: "Internship & Placement", href: "#", icon: "Briefcase", description: "Industrial training." }
        ]
    },
    {
        category: "Finance & HR Solutions",
        description: "Seamless financial operations & workforce management.",
        icon: "Landmark",
        href: "/products/timetable-attendance",
        products: [
            { name: "Fee Management", href: "#", icon: "Receipt", description: "Collections & dues." },
            { name: "Govt. Scholarship Mgmt", href: "#", icon: "Award", description: "Fund disbursement." },
            { name: "Payroll & Salary", href: "#", icon: "Coins", description: "Automated processing." },
            { name: "Employee Records & Info", href: "#", icon: "Contact", description: "Centralized database." },
            { name: "Leave & Workflow", href: "#", icon: "CalendarX", description: "Approvals & tracking." },
            { name: "Recruitment & Onboarding", href: "#", icon: "UserPlus", description: "Hiring lifecycle." },
            { name: "Financial Accounting", href: "#", icon: "BookOpen", description: "Ledgers & balance sheets." },
            { name: "Contingency Fund Mgmt", href: "#", icon: "PiggyBank", description: "Emergency reserves." },
            { name: "Budget Module", href: "#", icon: "PieChart", description: "Planning & allocation." },
            { name: "Appraisal & Performance", href: "#", icon: "TrendingUp", description: "Employee evaluation." },
            { name: "Org Structure Mgmt", href: "#", icon: "Network", description: "Hierarchy definition." },
            { name: "Compliance Management", href: "#", icon: "Shield", description: "Regulatory adherence." },
            { name: "Committee Management", href: "#", icon: "Users", description: "Meetings & minutes." },
            { name: "Institute Handbook", href: "#", icon: "Book", description: "Policy documentation." }
        ]
    },
    {
        category: "Research, Collaboration & Institutional Growth",
        description: "Data-driven decision-making & academic excellence.",
        icon: "Rocket",
        href: "/products/research-collaboration",
        products: [
            { name: "Ph.D. Lifecycle Module", href: "#", icon: "GraduationCap", description: "Registration to degree award." },
            { name: "Research & Collaboration", href: "#", icon: "Network", description: "Grant and project tracking." },
            { name: "Institutional Analytics", href: "#", icon: "BarChart3", description: "AI-driven strategic insights." },
            { name: "App & Database Security", href: "#", icon: "Lock", description: "Cloud-based protection." }
        ]
    },

];
