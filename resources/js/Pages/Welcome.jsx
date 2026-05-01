import GeneralLayout from '@/Layouts/GeneralLayout';
import { Head } from '@inertiajs/react';
import Hero from './LandingPage/Hero';
import TechHeadline from '@/Components/Hero/TechHeadline';
import WhoWeAre from '@/Components/Hero/WhoWeAre';
import Services from '@/Components/Hero/Services';
import Team from '@/Components/Hero/Team';
import Contact from '@/Components/Hero/Contact';
import CallToAction from '@/Components/Hero/CallToAction';
import Footer from '@/Components/Hero/Footer';

export default function Welcome({ auth }) {
    return (
        <GeneralLayout>
            <Head title="Premium Product Engineers" />

            <Hero />
            <TechHeadline />
            <WhoWeAre />
            <Services />
            <CallToAction />
            <Team />
            <Contact />
            <Footer />


        </GeneralLayout>
    );
}
