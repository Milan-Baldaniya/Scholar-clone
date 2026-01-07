import Image from 'next/image';

export default function CareerHero() {
    return (
        <section className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Images/Hero_Career.png"
                    alt="Careers at Scholar Clone"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Angled Cut */}
            <div
                className="
                    absolute
                    bottom-[-25px]
                    right-[-20px]
                    w-[50%]
                    h-[60px]
                    bg-white
                    skew-x-[-30deg]
                    origin-bottom-right
                    z-30
                "
            ></div>
        </section>
    );
}
