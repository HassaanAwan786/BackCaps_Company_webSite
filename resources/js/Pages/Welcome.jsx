import GeneralLayout from '@/Layouts/GeneralLayout';
import { Head } from '@inertiajs/react';
import Hero from './LandingPage/Hero';
import TechHeadline from '@/Components/Hero/TechHeadline';

export default function Welcome({ auth }) {
    return (
        <GeneralLayout>
            <Head title="Premium Product Engineers" />

            <Hero />
            <TechHeadline />

            {/* Next Section Starts Here */}
            <div className="min-h-screen bg-brand-dark flex items-center justify-center border-t border-white/5">
                <p className="text-brand-gray text-2xl font-bold uppercase tracking-[0.3em] opacity-20">Our Work Section</p>
            </div>
        </GeneralLayout>
    );
}
