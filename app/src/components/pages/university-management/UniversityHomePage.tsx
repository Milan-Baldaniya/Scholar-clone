'use client';
import { useState, useEffect } from 'react';
import UniversityHero from './UniversityHero';
import UniversityFeatures from './UniversityFeatures';
import WhyUniversities from './WhyUniversities';
import KeyFeatures from './KeyFeatures';
import ScholarEdge from './ScholarEdge';
import DigitalTransformation from './DigitalTransformation';
import AdminModuleCards from './AdminModuleCards';

interface FeatureCard {
    id: number;
    title: string;
    description: string;
    image: string;
}

interface KeyFeature {
    id: number;
    number: string;
    title: string;
    description: string;
}

export default function UniversityHomePage() {
    const [featuredCards, setFeaturedCards] = useState<FeatureCard[]>([])
    const [keyFeatures, setKeyFeatures] = useState<KeyFeature[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        loadHomeData()
    }, [])

    const loadHomeData = async (): Promise<void> => {
        try {
            setTimeout(() => {
                setFeaturedCards([
                    {
                        id: 1,
                        title: 'AI-Powered Insights & Analytics',
                        description: 'Gain deep institutional insights, track student progress, and make data-driven decisions effortlessly.',
                        image: '/assets/img_image_326x420.png'
                    },
                    {
                        id: 2,
                        title: 'Seamless Academic & Administrative Workflows',
                        description: 'Automate faculty workload, payroll processing, budget allocation, and leave approvals.',
                        image: '/assets/img_image_524x420.png'
                    },
                    {
                        id: 3,
                        title: 'Next-Gen Learning & Student Success',
                        description: 'Enhance student engagement with Personalized Adaptive Learning (PAL).',
                        image: '/assets/img_image_524x420.png'
                    }
                ])

                setKeyFeatures([
                    {
                        id: 1,
                        number: '1.',
                        title: 'Core ERP & Governance',
                        description: 'University Management, Website, Grievance Redressal, and Communication systems.'
                    },
                    {
                        id: 2,
                        number: '2.',
                        title: 'Resource & Asset Operations',
                        description: 'Inventory, Purchase, Transport, Guest House, and Hall Booking management.'
                    },
                    {
                        id: 3,
                        number: '3.',
                        title: 'Academic & Feedback Cycles',
                        description: 'Timetable, Attendance, Convocation, 360° Feedback, and Impact Studies.'
                    }
                ])

                setLoading(false)
            }, 1000)
        } catch (error) {
            console.error('Failed to load home data:', error)
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-neutral-background">
            <main>
                <UniversityHero />
                <AdminModuleCards />
                <UniversityFeatures
                    featuredCards={featuredCards}
                    loading={loading}
                />
                <WhyUniversities />
                <KeyFeatures
                    keyFeatures={keyFeatures}
                    loading={loading}
                />
                <ScholarEdge />
                <DigitalTransformation />
            </main>
        </div>
    )
}
