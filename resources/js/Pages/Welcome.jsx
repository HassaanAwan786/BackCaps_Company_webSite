import GeneralLayout from '@/Layouts/GeneralLayout';
import { Head } from '@inertiajs/react';
import Hero from './LandingPage/Hero';
import TechHeadline from '@/Components/Hero/TechHeadline';
import WhoWeAre from '@/Components/Hero/WhoWeAre';
import Services from '@/Components/Hero/Services';
import CallToAction from '@/Components/Hero/CallToAction';
import Team from '@/Components/Hero/Team';
import Contact from '@/Components/Hero/Contact';
import Footer from '@/Components/Hero/Footer';

export default function Welcome({ auth, timeSlots }) {
    return (
        <GeneralLayout>
            <Head title="Home" />

            <Hero />
            <TechHeadline />
            <WhoWeAre />
            <Services />
            <CallToAction />
            <Team />
            <Contact timeSlots={timeSlots} />
            <Footer />


        </GeneralLayout>
    );
}
