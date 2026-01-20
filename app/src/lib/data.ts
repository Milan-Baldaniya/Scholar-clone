import { NavItem, FooterSection, Partner, CareerRole, ProductCategory } from "@/types";

export const MAIN_NAVIGATION: NavItem[] = [
    { name: "HOME", href: "/" },
    { name: "PRODUCTS", href: "#products", hasDropdown: true },
    { name: "SERVICES", href: "/services" },
    { name: "ABOUT US", href: "/about" },
    { name: "COMPANY", href: "#company", hasDropdown: true },
];

export const FOOTER_LINKS: FooterSection = {
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

export const PARTNERS_DATA: Partner[] = [
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
        description: "Streamlining operations and enhancing learning experiences for Higher Education Institutes.",
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
        description: "Streamlining operations and enhancing learning experiences for Higher Education Institutes.",
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
        description: "Streamlining operations and enhancing learning experiences for Higher Education Institutes.",
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

export const CAREER_ROLES_DATA: CareerRole[] = [
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

export const EMPLOYEE_BENEFITS_DATA: string[] = [
    "Competitive Salary & Performance-Based Growth",
    "Flexible Work Arrangements (Hybrid & Remote Work Options)",
    "Medical & Wellness Benefits (Health insurance, mental well-being programs)",
    "Learning & Upskilling Programs (Certifications, AI training, workshops)",
    "Hackathons, Innovation Challenges & Tech Events",
    "Annual Team Retreats, Offsite Events & Celebrations"
];

export const PRODUCTS_DROPDOWN_DATA: ProductCategory[] = [
    {
        category: "Analytics & Reporting Tools",
        description: "Turn data into actionable intelligence.",
        icon: "BarChart3",
        href: "/products/analytics-reporting",
        image: "/assets/analytics_preview.png",
        products: [
            {
                name: "Institutional Analytics Platform",
                href: "#",
                icon: "LayoutDashboard",
                image: "/assets/institutional_analytics_dashboard.png",
                description: "A centralized command center consolidating data from all departments into a single source of truth for institutional oversight.",
                benefits: [
                    "Unified view of campus operations.",
                    "Real-time data synchronization.",
                    "Cross-departmental correlation analysis.",
                    "Customizable executive dashboards."
                ],
                whyChooseUs: [
                    "Eliminates data silos.",
                    "Accelerates decision-making."
                ]
            },
            {
                name: "Academic Reporting Software",
                href: "#",
                icon: "FileText",
                image: "/assets/academic_reporting_dashboard.png",
                description: "Comprehensive reporting engine for academic tracking, form attendance and marks to syllabus coverage and learning outcomes.",
                benefits: [
                    "Automated grade and transcript generation.",
                    "Attendance compliance reports.",
                    "Curriculum delivery tracking.",
                    "Student progression analysis."
                ],
                whyChooseUs: [
                    "Reduces manual administrative load.",
                    "Ensures academic accountability."
                ]
            },
            {
                name: "AI Insights & Prediction",
                href: "#",
                icon: "BrainCircuit",
                image: "/assets/ai_insights_prediction_dashboard.png",
                description: "Advanced AI algorithms that analyze historical data to forecast trends and identify potential risks before they occur.",
                benefits: [
                    "Early warning systems for at-risk students.",
                    "Enrollment trend forecasting.",
                    "Resource utilization predictions.",
                    "Dropout probability scoring."
                ],
                whyChooseUs: [
                    "Proactive rather than reactive management.",
                    "Data-driven strategic planning."
                ]
            },
            {
                name: "Performance Analytics",
                href: "#",
                icon: "Activity",
                image: "/assets/performance_analytics_dashboard.png",
                description: "Granular analysis of institutional performance metrics against set KPIs and accreditation standards.",
                benefits: [
                    "KPI tracking and visualization.",
                    "Accreditation compliance monitoring.",
                    "Departmental performance benchmarking.",
                    "Strategic goal alignment measurement."
                ],
                whyChooseUs: [
                    "Simplifies accreditation cycles.",
                    "Clear visualization of success metrics."
                ]
            },
            {
                name: "Student Performance Analytics",
                href: "#",
                icon: "GraduationCap",
                image: "/assets/student_performance_analytics_dashboard.png",
                description: "Deep-dive analytics into individual and cohort student performance to personalize learning paths and support mechanisms.",
                benefits: [
                    "Individual learning gap identification.",
                    "Cohort performance comparison.",
                    "Outcome attainment measurement.",
                    "Personalized intervention suggestions."
                ],
                whyChooseUs: [
                    "Improves student success rates.",
                    "Enables personalized education."
                ]
            },
            {
                name: "Teacher Performance Analytics",
                href: "#",
                icon: "Users",
                image: "/assets/teacher_performance_analytics_dashboard.png",
                description: "Evaluation tools to assess teaching effectiveness, research output, and student feedback for faculty development.",
                benefits: [
                    "Teaching effectiveness scores.",
                    "Research output tracking.",
                    "Student feedback analysis.",
                    "Professional development tracking."
                ],
                whyChooseUs: [
                    "Empowers faculty growth.",
                    "Enhances educational quality."
                ]
            },
            {
                name: "Stakeholder Dashboards",
                href: "#",
                icon: "PieChart",
                image: "/assets/stakeholder_dashboards.png",
                description: "Tailored analytical views for different stakeholders—Students, Parsent, Faculty, Management, and Administrators.",
                benefits: [
                    "Role-specific data visualization.",
                    "Secure access permissions.",
                    "Relevant insights only.",
                    "Improved stakeholder engagement."
                ],
                whyChooseUs: [
                    "Relevance for every user.",
                    "Enhanced transparency."
                ]
            },
            {
                name: "Reports Engine",
                href: "#",
                icon: "ScrollText",
                image: "/assets/reports_engine_dashboard.png",
                description: "Flexible, custom report builder allowing institutions to generate specific statutory and internal reports on demand.",
                benefits: [
                    "Drag-and-drop report builder.",
                    "Scheduled automated reporting.",
                    "Multiple export formats (PDF, Excel).",
                    "Regulatory compliance templates."
                ],
                whyChooseUs: [
                    "Unlimited reporting flexibility.",
                    "Saves hours of manual reporting."
                ]
            },
            {
                name: "Predictive Analytics",
                href: "#",
                icon: "TrendingUp",
                image: "/assets/predictive_analytics_dashboard.png",
                description: "Forward-looking models that use regression and machine learning to map out future institutional scenarios.",
                benefits: [
                    "Budget forecasting models.",
                    "Infrastructure need analysis.",
                    "Long-term strategic outcome mapping.",
                    "Risk mitigation planning."
                ],
                whyChooseUs: [
                    "Future-proofs the institution.",
                    "Minimizes uncertainty."
                ]
            },
            {
                name: "Admission Prediction",
                href: "#",
                icon: "UserCheck",
                image: "/assets/admission_prediction_dashboard.png",
                description: "Specialized tools to analyze admission inquiries, conversion rates, and demographic trends to optimize enrollment.",
                benefits: [
                    "Lead conversion probability.",
                    "Demographic trend analysis.",
                    "Marketing channel ROI analysis.",
                    "Seat filling probability forecasting."
                ],
                whyChooseUs: [
                    "Optimizes admission strategies.",
                    "Maximizes enrollment quality."
                ]
            }
        ]
    },
    {
        category: "Administrative Management Systems",
        description: "Core institutional operations & compliance management.",
        icon: "Building2",
        href: "/products/administrative-management",
        image: "/assets/admin_preview.png",
        products: [
            {
                name: "Higher Education Institute Management",
                href: "#",
                icon: "LayoutDashboard",
                image: "/assets/University Management Dashboard.png",
                description: "A centralized digital platform that serves as the backbone of your institution. It integrates every department, campus, and stakeholder into a single, unified ecosystem, ensuring that academic planning, student services, finance, and governance operate in perfect synchronization.",
                benefits: [
                    "Seamless integration of all academic and admin departments.",
                    "Real-time dashboards for data-driven decision making.",
                    "Role-based access ensuring bank-grade data security.",
                    "Automated workflows reducing manual paperwork by 70%."
                ],
                whyChooseUs: [
                    "Scalable architecture that grows with your institution.",
                    "End-to-end digitalization from admission to alumni."
                ]
            },
            {
                name: "Alumni Management System",
                href: "#",
                icon: "UsersRound",
                image: "/assets/alumni_management_dashboard.png",
                description: "Build and maintain lifelong relationships with your alumni network. This module helps track engagement, manage contributions, and foster a vibrant community that supports the institution's growth and branding.",
                benefits: [
                    "Comprehensive alumni profiling and career tracking.",
                    "Tools for managing reunions, events, and fundraising.",
                    "Job portals and networking opportunities for graduates.",
                    "Analytics to measure alumni engagement impact."
                ],
                whyChooseUs: [
                    "Turn your alumni into your strongest brand ambassadors.",
                    "Secure platform protecting sensitive personal data."
                ]
            },
            {
                name: "Timetable & Attendance",
                href: "#",
                icon: "CalendarClock",
                image: "/assets/timetable_attendance_dashboard.png",
                description: "Automate the complex scheduling of classes and tracking of attendance using advanced technologies like RFID, Biometrics, and Mobile QR. Ensure compliance and improve punctuality effortlessly.",
                benefits: [
                    "Zero-conflict automated timetable scheduling.",
                    "Real-time attendance tracking via multiple biometric modes.",
                    "Instant notifications to parents for absenteeism.",
                    "Integration with academic records for eligibility checks."
                ],
                whyChooseUs: [
                    "Eliminate proxy attendance and manual errors.",
                    "Optimize resource utilization (classrooms, labs)."
                ]
            },
            {
                name: "Transport & Vehicle Management",
                href: "#",
                icon: "Truck",
                image: "/assets/transport_vehicle_dashboard.png",
                description: "Manage your entire fleet of vehicles with precision. From route optimization and fuel tracking to student safety and driver performance, this system handles the logistics so you don't have to.",
                benefits: [
                    "GPS-enabled real-time vehicle tracking.",
                    "Automated route optimization to save fuel costs.",
                    "Maintenance alerts and insurance renewal tracking.",
                    "Student safety apps for pick-up/drop-off status."
                ],
                whyChooseUs: [
                    "Ensure student safety with live monitoring.",
                    "Reduce operational transport costs by up to 20%."
                ]
            },
            {
                name: "Inventory & Asset Management",
                href: "#",
                icon: "Boxes",
                image: "/assets/inventory_asset_dashboard.png",
                description: "Digitize your procurement and asset management lifecycle. Track every item from purchase request to disposal, ensuring accountability, preventing loss, and optimizing inventory levels.",
                benefits: [
                    "Centralized vendor management and purchase history.",
                    "Barcode/QR tagging for effortless asset audits.",
                    "Automated depreciation calculations for finance.",
                    "Real-time stock alerts to prevent shortages."
                ],
                whyChooseUs: [
                    "Total visibility into institutional assets and spending.",
                    "Prevent pilferage and misuse of resources."
                ]
            },
            {
                name: "Accreditation & Compliance",
                href: "#",
                icon: "ShieldCheck",
                image: "/assets/accreditation_compliance_dashboard.png",
                description: "Stay audit-ready 24/7. This system streamlines the preparation for NAAC, NBA, NIRF, and other regulatory bodies by centralizing data collection and evidence management.",
                benefits: [
                    "Central repository for all compliance-related documents.",
                    "Automated data mapping to specific accreditation criteria.",
                    "Gap analysis tools to identify improvement areas.",
                    "One-click report generation for inspection teams."
                ],
                whyChooseUs: [
                    "Reduce the stress and chaos of accreditation visits.",
                    "Ensure continuous compliance, not just episodic readiness."
                ]
            },
            {
                name: "Affiliation & Licensing",
                href: "#",
                icon: "FileBadge",
                image: "/assets/affiliation_licensing_dashboard.png",
                description: "Navigate the complex landscape of statutory compliances effortlessly. Manage affiliations, track license renewals, and ensure your institution never misses a critical regulatory deadline.",
                benefits: [
                    "Automated reminders for license and affiliation renewals.",
                    "Digital checklist for LIC/AAA committee inspections.",
                    "Secure storage for statutory documents and approvals.",
                    "Workflow-based scrutiny for new course applications."
                ],
                whyChooseUs: [
                    "Zero penalties due to missed deadlines.",
                    "Maintain impeccable standing with regulatory bodies."
                ]
            },
            {
                name: "Website Management System",
                href: "#",
                icon: "Globe",
                image: "/assets/University Management Interface.png",
                description: "Empower non-technical staff to keep the institutional website dynamic and up-to-date. Manage news, events, faculty profiles, and notifications centrally without writing a single line of code.",
                benefits: [
                    "User-friendly CMS designed for educational content.",
                    "SEO-optimized structure to improve online visibility.",
                    "Role-based publishing workflow (Draft -> Approve -> Publish).",
                    "Responsive designs that look great on any device."
                ],
                whyChooseUs: [
                    "Keep stakeholders informed in real-time.",
                    "Reduce dependency on IT teams for basic updates."
                ]
            },
            {
                name: "Lapses & Grievance Management",
                href: "#",
                icon: "MessageCircleWarning",
                image: "/assets/admin_preview.png",
                description: "Foster a transparent and trust-based environment with a confidential grievance redressal mechanism. Ensure that every voice is heard and every issue is resolved within a defined timeline.",
                benefits: [
                    "Multi-channel complaint lodging (Web, Mobile, Email).",
                    "Automated routing to the concerned redressal committee.",
                    "Escalation matrix for unresolved issues.",
                    "Anonymous reporting options for sensitive matters."
                ],
                whyChooseUs: [
                    "Build trust with students and staff through transparency.",
                    "Ensure compliance with UGC/AICTE grievance norms."
                ]
            },
            {
                name: "360° Feedback System",
                href: "#",
                icon: "MessagesSquare",
                image: "/assets/student_preview.png",
                description: "Drive continuous quality improvement by collecting holistic feedback from all stakeholders—students, faculty, alumni, parents, and employers. Turn perceptions into actionable data.",
                benefits: [
                    "Customizable survey templates for Course/Faculty/Infra.",
                    "Complete anonymity to ensure honest responses.",
                    "Graphic analytics and trend analysis reports.",
                    "Action-taken reports to close the feedback loop."
                ],
                whyChooseUs: [
                    "Foster a culture of continuous improvement.",
                    "Data-backed performance appraisals for faculty."
                ]
            },
            {
                name: "Doc Tracking & Journey",
                href: "#",
                icon: "FileSearch",
                image: "/assets/finance_preview.png",
                description: "End the chaos of lost files and delayed approvals. This module tracks the entire lifecycle of every application and file within the higher education institute, providing real-time status visibility to all stakeholders.",
                benefits: [
                    "Unique tracking ID for every file/application.",
                    "Visual journey maps showing current file status.",
                    "SLA monitoring to identify bottlenecks in processing.",
                    "Digital archiving for instant retrieval."
                ],
                whyChooseUs: [
                    "Eliminate 'lost file' excuses forever.",
                    "Dramatically improve administrative processing speed."
                ]
            },
            {
                name: "Guest House & Hall Booking",
                href: "#",
                icon: "Hotel",
                image: "/assets/hero_timetable.png",
                description: "Maximize the utilization of your physical assets. A digital reservation system for guest houses, seminar halls, and vehicles that eliminates double-bookings and streamlines billing.",
                benefits: [
                    "Visual calendar view of resource availability.",
                    "Online booking requests with approval workflows.",
                    "Automated billing and invoice generation.",
                    "Housekeeping and maintenance integration."
                ],
                whyChooseUs: [
                    "Professionalize hospitality for institute guests.",
                    "Optimize revenue generation from campus facilities."
                ]
            },
            {
                name: "Event Management Program",
                href: "#",
                icon: "CalendarHeart",
                image: "/assets/HeroServices.png",
                description: "From academic conferences to cultural fests, plan and execute events flawlessly. Manage registrations, venue booking, certificates, and participant feedback in one platform.",
                benefits: [
                    "Online event publishing and participant registration.",
                    "QR-code based attendance for event entry.",
                    "Automated e-certificate generation and distribution.",
                    "Budgeting and expense tracking for events."
                ],
                whyChooseUs: [
                    "Create professional, memorable event experiences.",
                    "Centralize all event data for annual reports."
                ]
            },
            {
                name: "Convocation Management",
                href: "#",
                icon: "PartyPopper",
                image: "/assets/student_life.png",
                description: "Streamline the most important day for your students. Manage the entire convocation workflow from list generation and degree verification to seat allocation and medal distribution.",
                benefits: [
                    "Automated eligible student list generation.",
                    "Online registration and gown booking for graduates.",
                    "Degree certificate printing data management.",
                    "RFID/QR based efficient student movement on the day."
                ],
                whyChooseUs: [
                    "Ensure a glitch-free, dignified convocation ceremony.",
                    "Handle large student volumes with ease."
                ]
            },
            {
                name: "National & Int. Linkages",
                href: "#",
                icon: "Link",
                image: "/assets/partner_university.png",
                description: "Strengthen your global footprint by managing collaborations effectively. Track MoUs, student exchange programs, and joint research initiatives to maximize their impact.",
                benefits: [
                    "Digital repository of all MoUs and agreements.",
                    "Alerts for MoU expiry and renewal dates.",
                    "Activity tracking per collaboration (visits, exchanges).",
                    "Impact assessment reports for accreditation."
                ],
                whyChooseUs: [
                    "Maximize the value of your global partnerships.",
                    "Showcase international footprint for better rankings."
                ]
            },
            {
                name: "Communication System",
                href: "#",
                icon: "Megaphone",
                image: "/assets/Visual_services.png",
                description: "Bridge the communication gap. A unified broadcast system that ensures the right information reaches the right people at the right time via App, Email, and SMS.",
                benefits: [
                    "Targeted notifications (Dept-wise, Year-wise, etc.).",
                    "Emergency alert broadcasts for campus safety.",
                    "Read-receipts to verify information delivery.",
                    "Multi-channel delivery (App, Portal, Email, SMS)."
                ],
                whyChooseUs: [
                    "Eliminate communication gaps and rumors.",
                    "Ensure critical notices are never missed."
                ]
            },
            {
                name: "Workflow Management",
                href: "#",
                icon: "GitMerge",
                image: "/assets/WorkflowBuilder_alumni.png",
                description: "Transform rigid bureaucratic processes into agile digital workflows. Create custom approval paths for any request type, ensuring transparency and accountability at every step.",
                benefits: [
                    "Drag-and-drop workflow designer.",
                    "Parallel and serial approval capabilities.",
                    "Automated reminders for pending approvals.",
                    "Complete audit trail of who approved what and when."
                ],
                whyChooseUs: [
                    "Digitize 'paper-moving' processes instantly.",
                    "Enforce accountability across the hierarchy."
                ]
            },
            {
                name: "Campus Security (Visitor)",
                href: "#",
                icon: "ShieldAlert",
                image: "/assets/Smart Data Collection.png",
                description: "Secure your campus perimeter with a digital visitor management system. Replace manual registers with digital logs, ensuring only authorized personnel enter the premises.",
                benefits: [
                    "Digital visitor entry with photo and ID capture.",
                    "pre-approval system for expected guests.",
                    "Blacklisting capability for security threats.",
                    "Visitor pass printing with visitor details."
                ],
                whyChooseUs: [
                    "Enhance the safety of students and staff.",
                    "Modernize the 'Front Gate' experience."
                ]
            },
            {
                name: "Impact Study Management",
                href: "#",
                icon: "Target",
                image: "/assets/Actionable Insights.png",
                description: "Move beyond operations to outcomes. Measure the tangible impact of your institution's initiatives, community outreach, and research on society and stakeholders.",
                benefits: [
                    "Framework for defining and tracking impact metrics.",
                    "Data collection tools for field studies and extensions.",
                    "Impact reporting aligned with UN SDGs.",
                    "Longitudinal analysis of institutional performance."
                ],
                whyChooseUs: [
                    "Prove your institution's value to society.",
                    "Support funding grants with evidence-based impact."
                ]
            }
        ]
    },
    {
        category: "Student Lifecycle & Academic Management",
        description: "From admission to graduation, complete student journey.",
        icon: "UserSquare2",
        href: "/products/student-lifecycle",
        image: "/assets/student_preview.png",
        products: [
            {
                name: "Education CRM",
                href: "#",
                icon: "Megaphone",
                image: "/assets/admission_prediction_dashboard.png",
                description: "This module manages student lead and inquiry lifecycle. Prospective student interactions are tracked centrally.",
                benefits: [
                    "Automated follow-ups improve conversion rates.",
                    "Counselors manage admissions efficiently.",
                    "Campaign performance is analyzed.",
                    "Communication history is maintained."
                ],
                whyChooseUs: [
                    "Data-driven admissions planning is enabled.",
                    "Integration with SIS ensures continuity."
                ]
            },
            {
                name: "Online Entrance Exam",
                href: "#",
                icon: "Laptop",
                image: "/assets/exam_preview.png",
                description: "This system conducts secure online entrance exams. Exam registration and scheduling are automated.",
                benefits: [
                    "Question delivery is controlled and secure.",
                    "Remote and center-based exams are supported.",
                    "AI proctoring prevents malpractice.",
                    "Real-time monitoring ensures integrity."
                ],
                whyChooseUs: [
                    "Results are processed automatically.",
                    "Scalability supports large candidate volumes."
                ]
            },
            {
                name: "Pre-Registration & Eligibility",
                href: "#",
                icon: "FileCheck",
                image: "/assets/student_intro.png",
                description: "This module simplifies pre-admission processes. Candidates register online with minimal effort.",
                benefits: [
                    "Eligibility rules are validated automatically.",
                    "Document uploads are verified digitally.",
                    "Applicants receive instant status updates.",
                    "Data accuracy improves admissions quality."
                ],
                whyChooseUs: [
                    "Counselors access verified applicant data.",
                    "Duplicate entries are avoided."
                ]
            },
            {
                name: "Student Information System",
                href: "#",
                icon: "Users",
                image: "/assets/student_preview.png",
                description: "This system is the core student data repository. Academic, personal, and administrative records are centralized.",
                benefits: [
                    "Data consistency is maintained across modules.",
                    "Secure access protects student privacy.",
                    "Lifecycle tracking ensures continuity.",
                    "Reports support academic monitoring."
                ],
                whyChooseUs: [
                    "Integration with exams and finance ensures accuracy.",
                    "Manual registers are eliminated."
                ]
            },
            {
                name: "Admission & Migration",
                href: "#",
                icon: "UserPlus",
                image: "/assets/University Management Dashboard.png",
                description: "This module manages admissions and transfers digitally. Application processing follows structured workflows.",
                benefits: [
                    "Seat allocation is automated and transparent.",
                    "Migration and transfer records are maintained.",
                    "Compliance documentation is tracked.",
                    "Approvals are streamlined across departments."
                ],
                whyChooseUs: [
                    "Audit readiness is ensured.",
                    "Processing delays are reduced."
                ]
            },
            {
                name: "Academic Data Configuration",
                href: "#",
                icon: "Settings",
                image: "/assets/admin_preview.png",
                description: "This system defines academic structures digitally. Programs, courses, credits, and semesters are configured.",
                benefits: [
                    "Regulatory compliance is ensured.",
                    "Curriculum changes are managed efficiently.",
                    "Academic rules are standardized.",
                    "Integration with exams and SIS ensures consistency."
                ],
                whyChooseUs: [
                    "Configuration errors are minimized.",
                    "Reports reflect accurate academic data."
                ]
            },
            {
                name: "Attendance Tracking",
                href: "#",
                icon: "Clock",
                image: "/assets/timetable_attendance_dashboard.png",
                description: "This module monitors student and staff attendance. Multiple attendance modes are supported.",
                benefits: [
                    "Real-time data ensures accuracy.",
                    "Compliance alerts prevent shortages.",
                    "Reports support academic monitoring.",
                    "Integration with payroll and assessments is seamless."
                ],
                whyChooseUs: [
                    "Manual attendance is eliminated.",
                    "Transparency improves accountability."
                ]
            },
            {
                name: "Hostel & Accommodation",
                href: "#",
                icon: "Home",
                image: "/assets/institution1_inventory.png",
                description: "This system manages hostel operations digitally. Room allocation follows defined policies.",
                benefits: [
                    "Occupancy is tracked in real time.",
                    "Fee integration ensures billing accuracy.",
                    "Maintenance requests are managed online.",
                    "Student safety records are maintained."
                ],
                whyChooseUs: [
                    "Vacancy tracking supports planning.",
                    "Reports support audits."
                ]
            },
            {
                name: "Extracurricular Management",
                href: "#",
                icon: "Trophy",
                image: "/assets/student_life.png",
                description: "This module tracks student participation beyond academics. Clubs, sports, and activities are managed centrally.",
                benefits: [
                    "Participation records support holistic evaluation.",
                    "Event schedules and approvals are streamlined.",
                    "Faculty coordinators manage activities efficiently.",
                    "Certificates and credits are tracked."
                ],
                whyChooseUs: [
                    "Reports support accreditation needs.",
                    "Student engagement is encouraged."
                ]
            },
            {
                name: "Career Counseling",
                href: "#",
                icon: "Briefcase",
                image: "/assets/Hero_Career.png",
                description: "This system supports student career readiness. Counseling sessions are scheduled digitally.",
                benefits: [
                    "Skill development activities are tracked.",
                    "Resume and profile management is enabled.",
                    "Placement drives are coordinated centrally.",
                    "Employer engagement is maintained."
                ],
                whyChooseUs: [
                    "Student progress is monitored.",
                    "Analytics support placement strategy."
                ]
            },
            {
                name: "Student Portal",
                href: "#",
                icon: "Layout",
                image: "/assets/student_preview.png",
                description: "This portal provides students centralized access. Academic records are available anytime.",
                benefits: [
                    "Fee payments and applications are simplified.",
                    "Notifications ensure timely updates.",
                    "Exam and attendance details are accessible.",
                    "Feedback submission is enabled."
                ],
                whyChooseUs: [
                    "Mobile-friendly design improves usability.",
                    "Self-service reduces administrative load."
                ]
            },
            {
                name: "Mobile App",
                href: "#",
                icon: "Smartphone",
                image: "/assets/University Management Interface.png",
                description: "This app extends ERP access on mobile devices. Students and staff access information anytime.",
                benefits: [
                    "Push notifications ensure instant alerts.",
                    "Attendance and schedules are easily viewed.",
                    "Secure login protects data.",
                    "User-friendly interface improves engagement."
                ],
                whyChooseUs: [
                    "Offline features support flexibility.",
                    "Integration ensures real-time updates."
                ]
            },
            {
                name: "Club Management",
                href: "#",
                icon: "Users",
                image: "/assets/what_we_1_about.png",
                description: "This module manages academic and cultural clubs. Membership registration is digitized.",
                benefits: [
                    "Activity planning and approvals are streamlined.",
                    "Participation tracking supports evaluation.",
                    "Faculty oversight ensures governance.",
                    "Event documentation is maintained."
                ],
                whyChooseUs: [
                    "Reports support accreditation.",
                    "Student engagement is promoted."
                ]
            },
            {
                name: "Student Transfer/Migration",
                href: "#",
                icon: "ArrowRightLeft",
                image: "/assets/University Campus Technology.png",
                description: "This system manages student movement between institutions. Transfer requests are processed digitally.",
                benefits: [
                    "Document verification is automated.",
                    "Approval workflows ensure compliance.",
                    "Academic continuity is maintained.",
                    "Migration history is securely stored."
                ],
                whyChooseUs: [
                    "Reports support audits.",
                    "Manual errors are minimized."
                ]
            }
        ]
    },
    {
        category: "Examination & Assessment Solutions",
        description: "AI-driven, secure & digital exam processing.",
        icon: "FileCheck2",
        href: "/products/examination-assessment",
        image: "/assets/exam_preview.png",
        products: [
            {
                name: "Online Exam Form & Admit Card",
                href: "#",
                icon: "FileText",
                image: "/assets/exam_preview.png",
                description: "This module digitizes exam application and admit card generation. Students submit exam forms online with validation checks.",
                benefits: [
                    "Students submit exam forms online with validation checks.",
                    "Fee integration ensures accurate payment processing.",
                    "Admit cards are generated automatically.",
                    "Hall ticket errors are minimized.",
                    "Bulk downloads and printing are supported."
                ],
                whyChooseUs: [
                    "Exam eligibility is verified digitally.",
                    "Notifications inform students of updates.",
                    "Administrative workload is reduced.",
                    "Exam readiness improves significantly."
                ]
            },
            {
                name: "Pre, On & Post Exam Auto",
                href: "#",
                icon: "Settings",
                image: "/assets/reports_engine_dashboard.png",
                description: "This system automates the complete examination lifecycle. Exam schedules and workflows are configured centrally.",
                benefits: [
                    "Exam schedules and workflows are configured centrally.",
                    "On-exam monitoring ensures smooth conduct.",
                    "Attendance and incident logs are captured digitally.",
                    "Post-exam processing is automated.",
                    "Manual intervention is minimized."
                ],
                whyChooseUs: [
                    "Compliance timelines are maintained.",
                    "Reports support audit requirements.",
                    "Operational efficiency improves.",
                    "Examination integrity is ensured."
                ]
            },
            {
                name: "Exam Centre Management",
                href: "#",
                icon: "MapPin",
                image: "/assets/institution2_inventory.png",
                description: "This module manages exam centers and capacity planning. Center allocation is automated based on rules.",
                benefits: [
                    "Center allocation is automated based on rules.",
                    "Invigilator assignments are managed centrally.",
                    "Seating arrangements are optimized.",
                    "Real-time monitoring improves control.",
                    "Logistics and resource planning are simplified."
                ],
                whyChooseUs: [
                    "Compliance with exam guidelines is ensured.",
                    "Reports support operational review.",
                    "Manual coordination is reduced.",
                    "Exam center operations become seamless."
                ]
            },
            {
                name: "Digital Question Bank",
                href: "#",
                icon: "Database",
                image: "/assets/Smart Data Collection.png",
                description: "This system manages secure question repositories. Questions are categorized by subject and difficulty.",
                benefits: [
                    "Questions are categorized by subject and difficulty.",
                    "Randomized paper generation ensures confidentiality.",
                    "Access controls protect sensitive content.",
                    "Paper patterns are configurable.",
                    "Versioning supports multiple exam sets."
                ],
                whyChooseUs: [
                    "Leakage risks are minimized.",
                    "Faculty collaboration is enabled.",
                    "Audit trails ensure accountability.",
                    "Exam quality is maintained."
                ]
            },
            {
                name: "On-Screen Evaluation",
                href: "#",
                icon: "MonitorCheck",
                image: "/assets/analytics_preview.png",
                description: "This module enables digital answer script evaluation. Evaluators assess scripts securely online.",
                benefits: [
                    "Evaluators assess scripts securely online.",
                    "Marking schemes are standardized.",
                    "Evaluation progress is tracked in real time.",
                    "Bias and errors are reduced.",
                    "Turnaround time is significantly improved."
                ],
                whyChooseUs: [
                    "Secure access protects confidentiality.",
                    "Audit logs ensure transparency.",
                    "Result accuracy improves.",
                    "Manual paper handling is eliminated."
                ]
            },
            {
                name: "Internal Assessment Marks",
                href: "#",
                icon: "UploadCloud",
                image: "/assets/teacher_performance_analytics_dashboard.png",
                description: "This system digitizes internal assessment entry. Faculty submit marks securely online.",
                benefits: [
                    "Faculty submit marks securely online.",
                    "Validation rules prevent errors.",
                    "Submission timelines are enforced automatically.",
                    "Students receive transparent updates.",
                    "Data integrates with final results."
                ],
                whyChooseUs: [
                    "Approval workflows ensure accuracy.",
                    "Reports support academic monitoring.",
                    "Manual registers are eliminated.",
                    "Assessment reliability improves."
                ]
            },
            {
                name: "Result Processing",
                href: "#",
                icon: "GraduationCap",
                image: "/assets/academic_reporting_dashboard.png",
                description: "This module automates result computation. Marks aggregation follows academic rules.",
                benefits: [
                    "Marks aggregation follows academic rules.",
                    "Grade calculation is error-free.",
                    "Grade cards are generated instantly.",
                    "Student access is secured.",
                    "Bulk publishing is supported."
                ],
                whyChooseUs: [
                    "Historical records are maintained.",
                    "Corrections follow defined workflows.",
                    "Compliance requirements are met.",
                    "Result declaration becomes efficient."
                ]
            },
            {
                name: "Rechecking & Reassessment",
                href: "#",
                icon: "RefreshCw",
                image: "/assets/Visual_services.png",
                description: "This system manages result re-evaluation requests. Students apply digitally for rechecking.",
                benefits: [
                    "Students apply digitally for rechecking.",
                    "Approval workflows ensure fairness.",
                    "Reassessment tracking is transparent.",
                    "Updated results are published automatically.",
                    "Audit trails ensure accountability."
                ],
                whyChooseUs: [
                    "Communication keeps students informed.",
                    "Manual processing is eliminated.",
                    "Dispute resolution improves.",
                    "Trust in evaluation increases."
                ]
            }
        ]
    },
    {
        category: "Learning & Teaching Platforms",
        description: "Advanced education technology for smart learning.",
        icon: "Presentation",
        href: "/products/learning-teaching",
        image: "/assets/learning_preview.png",
        products: [
            {
                name: "Learning Management System",
                href: "#",
                icon: "BookOpen",
                image: "/assets/learning_preview.png",
                description: "This platform delivers digital learning experiences. Courses are hosted with multimedia content.",
                benefits: [
                    "Courses are hosted with multimedia content.",
                    "Faculty manage lectures and materials online.",
                    "Assignments and assessments are integrated.",
                    "Student progress is tracked continuously."
                ],
                whyChooseUs: [
                    "Discussion forums enhance engagement.",
                    "Teaching effectiveness improves."
                ]
            },
            {
                name: "Academic & Lesson Planning",
                href: "#",
                icon: "CalendarDays",
                image: "/assets/Next-Gen Learning.png",
                description: "This module supports structured academic planning. Faculty prepare lesson plans digitally.",
                benefits: [
                    "Course coverage is monitored in real time.",
                    "Alignment with curriculum is ensured.",
                    "Department coordination improves.",
                    "Progress tracking prevents syllabus delays."
                ],
                whyChooseUs: [
                    "Reports support academic audits.",
                    "Teaching delivery becomes systematic."
                ]
            },
            {
                name: "Course & Content Creation",
                href: "#",
                icon: "FileEdit",
                image: "/assets/Smart Learning Environment.png",
                description: "This system enables digital course development. Faculty create structured learning content.",
                benefits: [
                    "Multimedia resources enhance delivery.",
                    "Version control ensures consistency.",
                    "Access controls protect materials.",
                    "Integration with LMS ensures delivery."
                ],
                whyChooseUs: [
                    "Content reuse improves efficiency.",
                    "Content quality improves."
                ]
            },
            {
                name: "Assessment & Rubrics",
                href: "#",
                icon: "ClipboardCheck",
                image: "/assets/student_performance_analytics_dashboard.png",
                description: "This module standardizes assessment design. Rubrics define clear evaluation criteria.",
                benefits: [
                    "Assessment content aligns with learning outcomes.",
                    "Consistency across assessments is maintained.",
                    "Digital storage ensures accessibility.",
                    "Audit readiness is supported."
                ],
                whyChooseUs: [
                    "Bias in evaluation is reduced.",
                    "Assessment quality increases."
                ]
            },
            {
                name: "Curriculum Management",
                href: "#",
                icon: "BookCopy",
                image: "/assets/admin_preview.png",
                description: "This system manages curriculum structures digitally. Syllabus versions are controlled centrally.",
                benefits: [
                    "Regulatory alignment is ensured.",
                    "Approval workflows manage changes.",
                    "Stakeholder collaboration is supported.",
                    "Integration with exams and LMS ensures consistency."
                ],
                whyChooseUs: [
                    "Historical versions are preserved.",
                    "Academic governance improves."
                ]
            },
            {
                name: "Outcome-Based Education",
                href: "#",
                icon: "Boxes",
                image: "/assets/performance_analytics_dashboard.png",
                description: "This module implements OBE frameworks effectively. Program outcomes are mapped digitally.",
                benefits: [
                    "Course outcomes align with objectives.",
                    "Assessment data supports outcome measurement.",
                    "Analytics highlight achievement gaps.",
                    "Continuous improvement is enabled."
                ],
                whyChooseUs: [
                    "Accreditation readiness is ensured.",
                    "Educational quality is enhanced."
                ]
            },
            {
                name: "Choice-Based Credit (CBCS)",
                href: "#",
                icon: "MousePointerClick",
                image: "/assets/effortless_timetable.png",
                description: "This system supports flexible academic choices. Students select courses digitally.",
                benefits: [
                    "Credit rules are enforced automatically.",
                    "Seat availability is monitored.",
                    "Faculty workload is optimized.",
                    "Registration conflicts are prevented."
                ],
                whyChooseUs: [
                    "Student autonomy is increased.",
                    "Curriculum flexibility improves."
                ]
            },
            {
                name: "Personalized Adaptive Learning",
                href: "#",
                icon: "Lightbulb",
                image: "/assets/ai_insights_prediction_dashboard.png",
                description: "This platform personalizes learning paths. Student performance data drives adaptation.",
                benefits: [
                    "Content adjusts to learner needs.",
                    "Engagement improves learning outcomes.",
                    "Analytics support intervention strategies.",
                    "Learning gaps are addressed early."
                ],
                whyChooseUs: [
                    "Student motivation increases.",
                    "Smart learning is enabled."
                ]
            },
            {
                name: "Feedback Management",
                href: "#",
                icon: "MessageSquare",
                image: "/assets/student_preview.png",
                description: "This system manages structured feedback collection. Multiple feedback cycles are supported.",
                benefits: [
                    "Anonymous responses ensure honesty.",
                    "Analytics identify improvement areas.",
                    "Faculty and course evaluation is streamlined.",
                    "Reports support decision-making."
                ],
                whyChooseUs: [
                    "Action tracking ensures follow-up.",
                    "Quality assurance improves."
                ]
            },
            {
                name: "Digital Library & KRC",
                href: "#",
                icon: "Library",
                image: "/assets/institution3_inventory.png",
                description: "This module manages digital academic resources. E-books, journals, and databases are centralized.",
                benefits: [
                    "Access is role-based and secure.",
                    "Search tools improve discoverability.",
                    "Usage analytics support planning.",
                    "Integration with LMS enhances learning."
                ],
                whyChooseUs: [
                    "Remote access supports flexibility.",
                    "Knowledge access improves."
                ]
            },
            {
                name: "Internship & Placement",
                href: "#",
                icon: "Briefcase",
                image: "/assets/Hero_Career.png",
                description: "This system manages experiential learning programs. Internship opportunities are tracked centrally.",
                benefits: [
                    "Student applications are digitized.",
                    "Employer collaboration is facilitated.",
                    "Progress and evaluations are recorded.",
                    "Placement drives are coordinated."
                ],
                whyChooseUs: [
                    "Industry alignment improves.",
                    "Student employability increases."
                ]
            }
        ]
    },
    {
        category: "Finance & HR Solutions",
        description: "Seamless financial operations & workforce management.",
        icon: "Landmark",
        href: "/products/finance-hr",
        image: "/assets/finance_preview.png",
        products: [
            {
                name: "Fee Management",
                href: "#",
                icon: "IndianRupee",
                image: "/assets/finance_preview.png",
                description: "Comprehensive fee collection system covering tuition, hostel, mess, and exam fees with online payment integration.",
                benefits: [
                    "Automated receipt generation & reconciliation.",
                    "Real-time tracking of pending dues.",
                    "Multiple payment gateway integration.",
                    "Customizable fee structures for different batches."
                ],
                whyChooseUs: [
                    "Eliminates cash handling risk.",
                    "Improves financial transparency."
                ]
            },
            {
                name: "Govt. Scholarship Mgmt",
                href: "#",
                icon: "Award",
                image: "/assets/institution4_inventory.png",
                description: "Streamlined processing of government and private scholarships, ensuring eligible students receive funds on time.",
                benefits: [
                    "Automated eligibility verification.",
                    "Funds disbursement tracking.",
                    "Compliance with govt. regulations.",
                    "Transparent student status updates."
                ],
                whyChooseUs: [
                    "Ensures 100% compliance.",
                    "Reduces administrative paperwork."
                ]
            },
            {
                name: "Payroll & Salary",
                href: "#",
                icon: "Banknote",
                image: "/assets/Employee_Benifits_Career.png",
                description: "Automated payroll generation linked with attendance, taxes, and deductions for teaching and non-teaching staff.",
                benefits: [
                    "One-click salary slip generation.",
                    "Automated tax (TDS) calculations.",
                    "Integration with attendance & leave data.",
                    "Direct bank transfer compatibility."
                ],
                whyChooseUs: [
                    "Timely salary disbursement.",
                    "Error-free financial records."
                ]
            },
            {
                name: "Employee Records & Info",
                href: "#",
                icon: "Users",
                image: "/assets/admin_preview.png",
                description: "Centralized database for all employee information combined with smart biometric/RFID attendance tracking.",
                benefits: [
                    "Digital service book maintenance.",
                    "Real-time attendance dashboards.",
                    "Document storage for qualifications.",
                    "Leave balance tracking."
                ],
                whyChooseUs: [
                    "Single source of staff truth.",
                    "Improves workforce accountability."
                ]
            },
            {
                name: "Leave & Workflow",
                href: "#",
                icon: "CalendarCheck",
                image: "/assets/timetable_attendance_dashboard.png",
                description: "Digital workflow for leave applications and approvals, replacing manual paper forms.",
                benefits: [
                    "Paperless leave application process.",
                    "Multi-level approval workflows.",
                    "Automated leave balance updates.",
                    "Transparency for employees."
                ],
                whyChooseUs: [
                    "Faster decision making.",
                    "Clear audit trail."
                ]
            },
            {
                name: "Recruitment & Onboarding",
                href: "#",
                icon: "Briefcase",
                image: "/assets/Hero_Partners.png",
                description: "End-to-end management of the hiring process from job posting to candidate onboarding.",
                benefits: [
                    "Centralized applicant tracking system.",
                    "Online interview scheduling.",
                    "Digital document submission.",
                    "Structured onboarding checklists."
                ],
                whyChooseUs: [
                    "Attracts better talent.",
                    "Simplifies first-day experience."
                ]
            },
            {
                name: "Financial Accounting",
                href: "#",
                icon: "Calculator",
                image: "/assets/finance_preview.png",
                description: "Complete double-entry accounting system tailored for educational institutions.",
                benefits: [
                    "Automated ledgers and trial balance.",
                    "Income & Expense tracking.",
                    "Balance sheet generation.",
                    "Integration with fee & payroll modules."
                ],
                whyChooseUs: [
                    "Audit-ready financial statements.",
                    "Real-time financial health view."
                ]
            },
            {
                name: "Contingency Fund Mgmt",
                href: "#",
                icon: "Coins",
                image: "/assets/institution1_inventory.png",
                description: "Track and manage emergency and contingency funds to ensure financial stability.",
                benefits: [
                    "Separate fund allocation tracking.",
                    "Usage monitoring and approval.",
                    "Replenishment alerts.",
                    "Detailed usage reports."
                ],
                whyChooseUs: [
                    "Financial security assurance.",
                    "Prevents fund misuse."
                ]
            },
            {
                name: "Budget Module",
                href: "#",
                icon: "PieChart",
                image: "/assets/analytics_preview.png",
                description: "Plan, allocate, and monitor department-wise budgets to prevent overspending.",
                benefits: [
                    "Department-wise budget allocation.",
                    "Real-time expenditure vs budget tracking.",
                    "Variance analysis reports.",
                    "Approval workflows for extra funds."
                ],
                whyChooseUs: [
                    "Financial discipline.",
                    "Strategic resource planning."
                ]
            },
            {
                name: "Appraisal & Performance",
                href: "#",
                icon: "TrendingUp",
                image: "/assets/performance_analytics_dashboard.png",
                description: "360-degree performance evaluation system for faculty and staff career progression.",
                benefits: [
                    "Goal setting and KRA mapping.",
                    "Self, peer, and manager reviews.",
                    "Performance analytics for promotions.",
                    "Training needs identification."
                ],
                whyChooseUs: [
                    "Merit-based culture.",
                    "Retains top talent."
                ]
            },
            {
                name: "Org Structure Mgmt",
                href: "#",
                icon: "Network",
                image: "/assets/University Management Interface.png",
                description: "Define and manage the hierarchy and functional structure of the institution covering all departments and roles.",
                benefits: [
                    "Clear reporting lines.",
                    "Role and responsibility definition.",
                    "Easy updates to structure.",
                    "Visual hierarchy charts."
                ],
                whyChooseUs: [
                    "Operational clarity.",
                    "Better governance."
                ]
            },
            {
                name: "Compliance Management",
                href: "#",
                icon: "Gavel",
                image: "/assets/accreditation_compliance_dashboard.png",
                description: "Track and ensure adherence to UGC, AICTE, NAAC, and government statutory regulations.",
                benefits: [
                    "Automated compliance alerts.",
                    "Document expiry tracking.",
                    "Regulatory report generation.",
                    "Risk assessment dashboard."
                ],
                whyChooseUs: [
                    "Risk-free operations.",
                    "Legal safety."
                ]
            },
            {
                name: "Committee Management",
                href: "#",
                icon: "Users2",
                image: "/assets/stakeholder_dashboards.png",
                description: "Manage various institutional committees, their members, meetings, and minutes.",
                benefits: [
                    "Member role assignment.",
                    "Meeting scheduling & agenda.",
                    "Digital minutes of meeting.",
                    "Action item tracking."
                ],
                whyChooseUs: [
                    "Structured governance.",
                    "Active participation."
                ]
            },
            {
                name: "Institute Handbook",
                href: "#",
                icon: "Book",
                image: "/assets/learning_preview.png",
                description: "Digital access to institute policies, code of conduct, and operational guidelines for all stakeholders.",
                benefits: [
                    "Easy access to rules & policies.",
                    "Version control for updates.",
                    "Searchable content.",
                    "Acknowledgment tracking."
                ],
                whyChooseUs: [
                    "Informed community.",
                    "Reduced policy violations."
                ]
            }
        ]
    },
    {
        category: "Research, Collaboration & Institutional Growth",
        description: "Data-driven decision-making & academic excellence.",
        icon: "Rocket",
        href: "/products/research-collaboration",
        image: "/assets/research_preview.png",
        products: [
            {
                name: "Ph.D. Lifecycle Module",
                href: "#",
                icon: "GraduationCap",
                image: "/assets/research_preview.png",
                description: "A complete digital lifecycle management system for doctoral programs, from scholar enrollment to final degree award.",
                benefits: [
                    "Scholar registration and coursework tracked digitally.",
                    "Research progress and milestones monitored in real-time.",
                    "Guide and committee approvals managed seamlessly.",
                    "Thesis submission workflows fully automated."
                ],
                whyChooseUs: [
                    "Research governance improves significantly.",
                    "Compliance with UGC/institutional norms ensured."
                ]
            },
            {
                name: "Research & Collaboration",
                href: "#",
                icon: "Network",
                image: "/assets/Hero_Partners.png",
                description: "A centralized platform to foster academic collaboration, track projects, managed funding, and document research output.",
                benefits: [
                    "Projects and government grants tracked centrally.",
                    "Interdisciplinary and external collaborations enabled.",
                    "Research outputs (papers, patents) documented.",
                    "Funding utilization tracked for financial compliance."
                ],
                whyChooseUs: [
                    "Research excellence is promoted.",
                    "Knowledge sharing becomes seamless."
                ]
            },
            {
                name: "Institutional Analytics",
                href: "#",
                icon: "BrainCircuit",
                image: "/assets/institutional_analytics_dashboard.png",
                description: "Advanced AI-driven intelligence to analyze institutional data, identify trends, and support strategic decision-making.",
                benefits: [
                    "AI models analyze performance across departments.",
                    "Predictive insights support long-term planning.",
                    "Real-time dashboards provide total visibility.",
                    "Performance benchmarking against standards."
                ],
                whyChooseUs: [
                    "Decision-making becomes data-driven.",
                    "Institutional growth is strategically guided."
                ]
            },
            {
                name: "App & Database Security",
                href: "#",
                icon: "ShieldCheck",
                image: "/assets/Smart Data Collection.png",
                description: "Bank-grade security infrastructure protecting your institutional data with encryption, access controls, and constant monitoring.",
                benefits: [
                    "Data encryption protects sensitive info.",
                    "Role-based access controls prevent unauthorized use.",
                    "Automated backup and disaster recovery.",
                    "24/7 Threat monitoring and audit logging."
                ],
                whyChooseUs: [
                    "Data trust involves significantly.",
                    "Cyber resilience is strengthened."
                ]
            },
            {
                name: "Neo4j - Knowledge Graph",
                href: "#",
                icon: "Share2",
                image: "/assets/ai_insights_prediction_dashboard.png",
                description: "Utilizes graph database technology to map complex relationships between research entities, funding bodies, and citations.",
                benefits: [
                    "Visualizes complex academic relationships.",
                    "Discovers hidden collaboration opportunities.",
                    "Optimizes citation and impact analysis.",
                    "Enhances data retrieval speed for connected data."
                ],
                whyChooseUs: [
                    "Data connectivity is visualized.",
                    "Insights are faster and deeper."
                ]
            },
            {
                name: "Report Engine",
                href: "#",
                icon: "FileBarChart",
                image: "/assets/Actionable Insights.png",
                description: "A powerful, drag-and-drop reporting tool allowing customized report generation for any metric within the university system.",
                benefits: [
                    "Custom reports created without coding.",
                    "Automated scheduling and delivery via email.",
                    "Supports various formats (PDF, Excel, HTML).",
                    "Real-time data visualization integration."
                ],
                whyChooseUs: [
                    "Reporting becomes self-service.",
                    "Decision latency is reduced."
                ]
            },
            {
                name: "Template Engine",
                href: "#",
                icon: "LayoutTemplate",
                image: "/assets/admin_preview.png",
                description: "Dynamic document generation system for certificates, transcripts, and official letters with customizable placeholders.",
                benefits: [
                    "Standardizes official document formats.",
                    "Automates bulk generation of certificates.",
                    "Reduces manual entry errors.",
                    "supports digital signatures & QR codes."
                ],
                whyChooseUs: [
                    "Documentation efficiency improves.",
                    "Brand consistency is maintained."
                ]
            },
            {
                name: "Recommendation Engine",
                href: "#",
                icon: "Sparkles",
                image: "/assets/predictive_analytics_dashboard.png",
                description: "AI-driven system suggesting courses, research topics, and library resources based on user behavior and academic profile.",
                benefits: [
                    "Personalizes student learning paths.",
                    "Suggests relevant research grants to faculty.",
                    "Improves library resource utilization.",
                    "Enhances student engagement & retention."
                ],
                whyChooseUs: [
                    "Experience becomes hyper-personalized.",
                    "Resource discovery is automated."
                ]
            },
            {
                name: "Security TLS Maintaining",
                href: "#",
                icon: "Shield",
                image: "/assets/University Campus Technology.png",
                description: "Ensures all data transmission is encrypted using latest Transport Layer Security (TLS) protocols, guaranteeing privacy.",
                benefits: [
                    "End-to-end encryption for all data transit.",
                    "Protects against man-in-the-middle attacks.",
                    "Complies with global data privacy standards.",
                    "Regular certificate updates & management."
                ],
                whyChooseUs: [
                    "Data privacy is non-negotiable.",
                    "Trust is built through security."
                ]
            },
            {
                name: "Quality Assurance",
                href: "#",
                icon: "ClipboardCheck",
                image: "/assets/Smart Learning Environment.png",
                description: "Integrated automated testing and monitoring to ensure high system availability, performance, and bug-free operations.",
                benefits: [
                    "Automated regression testing for stable updates.",
                    "Real-time performance monitoring.",
                    "Instant bug reporting and tracking.",
                    "Ensures 99.9% system uptime."
                ],
                whyChooseUs: [
                    "Reliability is guaranteed.",
                    "User experience remains flawless."
                ]
            }
        ]
    },
];
