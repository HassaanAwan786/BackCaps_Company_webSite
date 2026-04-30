import GeneralLayout from '@/Layouts/GeneralLayout';
import { Head } from '@inertiajs/react';
import Hero from './LandingPage/Hero';
import TechHeadline from '@/Components/Hero/TechHeadline';
import WhoWeAre from '@/Components/Hero/WhoWeAre';

export default function Welcome({ auth }) {
    return (
        <GeneralLayout>
            <Head title="Premium Product Engineers" />

            <Hero />
            <TechHeadline />
            <WhoWeAre />

            {/* Next Section (Work) */}
            <div className="min-h-screen bg-[#05050d] flex items-center justify-center border-t border-white/5">
                <p className="text-brand-gray text-2xl font-bold uppercase tracking-[0.3em] opacity-20">Our Work Section</p>
            </div>
        </GeneralLayout>
    );
}
