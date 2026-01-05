import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { StudentLifecycle } from "@/components/home/StudentLifecycle";
import { WhyChoose } from "@/components/home/WhyChoose";

export default function Home() {
    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Hero />
            <Features />
            <StudentLifecycle />
            <WhyChoose />
        </main>
    );
}
