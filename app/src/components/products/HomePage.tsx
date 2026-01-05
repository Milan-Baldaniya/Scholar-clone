'use client';
import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import WhyUniversitiesSection from './WhyUniversitiesSection';
import KeyFeaturesSection from './KeyFeaturesSection';
import ScholarEdgeSection from './ScholarEdgeSection';
import DigitalTransformationSection from './DigitalTransformationSection';

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

export default function HomePage() {
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
                        image: '/images/img_image_326x420.png'
                    },
                    {
                        id: 2,
                        title: 'Seamless Academic & Administrative Workflows',
                        description: 'Automate faculty workload, payroll processing, budget allocation, and leave approvals.',
                        image: '/images/img_image_524x420.png'
                    },
                    {
                        id: 3,
                        title: 'Next-Gen Learning & Student Success',
                        description: 'Enhance student engagement with Personalized Adaptive Learning (PAL).',
                        image: '/images/img_image_524x420.png'
                    }
                ])

                setKeyFeatures([
                    {
                        id: 1,
                        number: '1.',
                        title: 'Student Lifecycle & Adaptive Learning Management',
                        description: 'Manage the entire student journey with AI-driven Personalized Adaptive Learning (PAL), competency-based education, and career mapping.'
                    },
                    {
                        id: 2,
                        number: '2.',
                        title: 'Faculty Research & Development',
                        description: 'Streamline research funding, publication tracking, and plagiarism detection while enabling CPD modules.'
                    },
                    {
                        id: 3,
                        number: '3.',
                        title: 'Smart Classroom & Hybrid Education',
                        description: 'Leverage IoT-enabled classrooms, AI-powered engagement, LMS integration, and VR/AR learning.'
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
                <HeroSection loading={loading} />
                <FeaturesSection
                    featuredCards={featuredCards}
                    loading={loading}
                />
                <WhyUniversitiesSection />
                <KeyFeaturesSection
                    keyFeatures={keyFeatures}
                    loading={loading}
                />
                <ScholarEdgeSection />
                <DigitalTransformationSection />
            </main>
        </div>
    )
}
