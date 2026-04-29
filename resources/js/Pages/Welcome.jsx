import GeneralLayout from '@/Layouts/GeneralLayout';
import { Head } from '@inertiajs/react';
import Hero from './LandingPage/Hero';

export default function Welcome({ auth }) {
    return (
        <GeneralLayout>
            <Head title="Premium Product Engineers" />

            <Hero />

            {/* Content to enable scrolling */}
            <div className="h-screen bg-brand-dark flex items-center justify-center">
                <p className="text-brand-gray text-2xl font-bold uppercase tracking-[0.3em] opacity-20">Scroll to see more</p>
            </div>
        </GeneralLayout>
    );
}
