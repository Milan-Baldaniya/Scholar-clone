import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Education Technology Blog | Scholar Clone",
    description: "Insights, trends, and guides on Higher Education technology, ERP systems, and campus management.",
};

const blogPosts = [
    {
        id: 1,
        title: "5 Ways AI is Transforming Higher Education Management",
        excerpt: "Artificial Intelligence is revolutionizing how universities manage admissions, student success, and campus operations.",
        date: "October 15, 2023",
        slug: "ai-transforming-higher-education"
    },
    {
        id: 2,
        title: "How to Choose the Right ERP for Your University",
        excerpt: "A comprehensive guide to evaluating and selecting the best Enterprise Resource Planning system for your institution.",
        date: "November 2, 2023",
        slug: "choose-right-erp-university"
    },
    {
        id: 3,
        title: "Digital Transformation in Education: A Complete Guide",
        excerpt: "Understanding the roadmap to digital maturity for modern educational institutions.",
        date: "November 20, 2023",
        slug: "digital-transformation-education-guide"
    }
];

export default function BlogPage() {
    return (
        <main className="min-h-screen pt-32 px-6 lg:px-8 max-w-7xl mx-auto mb-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Scholar Clone Blog</h1>
                <p className="text-xl text-slate-600">Latest insights on Education Technology and Campus Management</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-48 bg-slate-200"></div> {/* Placeholder for image */}
                        <div className="p-6">
                            <p className="text-sm text-slate-500 mb-2">{post.date}</p>
                            <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                                <Link href={`/blog/${post.slug}`} className="hover:text-[#2A518A] transition-colors">
                                    {post.title}
                                </Link>
                            </h2>
                            <p className="text-slate-600 mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>
                            <Link href={`/blog/${post.slug}`} className="text-[#76B900] font-semibold hover:underline">
                                Read More &rarr;
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}
