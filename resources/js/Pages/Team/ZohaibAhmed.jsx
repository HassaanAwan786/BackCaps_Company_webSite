import React, { useState, useEffect } from 'react';
import { Head, Link } from '@inertiajs/react';

// Detailed Case Studies Database (Behance Presentation Layouts)
const caseStudies = {
    delicacia: {
        title: "Delicacia Sphere",
        subtitle: "A comprehensive food delivery and restaurant management ecosystem",
        bannerBg: "bg-gradient-to-r from-orange-400 to-amber-500",
        tag: "Mobile App • Swift / Kotlin & Flutter",
        intro: "Welcome to Delicacia Sphere, an innovative food restaurant ecosystem designed to bridge the gap between customers and restaurant owners. Our mission is to create a seamless and enjoyable dining experience across delivery, dine-in, and take-away.",
        friction: "Fragmented food ordering experiences where users struggle with slow menu synchronization, lack of real-time tracking transparency, and complex checkout flows across multiple devices.",
        pivot: "A unified cross-platform ecosystem leveraging Swift UI and Jetpack Compose for native performance, integrated with a robust Firebase backend for real-time state synchronization and AI-driven personalized recommendations.",
        colors: [
            { hex: "#EF4444", label: "Primary Orange-Red" },
            { hex: "#1E293B", label: "Dark Slate" },
            { hex: "#3B82F6", label: "Accent Blue" },
            { hex: "#F8FAFC", label: "Bg Light" }
        ],
        fonts: "Space Grotesk & Inter",
        images: [
            { src: "src/delicacia/customer home.png", title: "Customer Home Screen", desc: "The main discovery hub — users see their live delivery location set to Islamabad, a smart search bar, categorized food tabs (Burgers, Pizza, Biryani, Desserts), a promotional banner offering 20% off, and a personalized 'Recommended to you' section with ratings and delivery times." },
            { src: "src/delicacia/customer menu item.png", title: "Menu Item Customizer", desc: "A fully interactive item detail view for Veggie Pizza with size selection (Mini to X-Large), ingredient toggles (Tomato, Pepper, Onion, Olives), topping add-ons (Pepperoni, Extra Cheese, Chicken), and a built-in drink bundle selector before checkout." },
            { src: "src/delicacia/customer bucket.png", title: "Cart & Checkout", desc: "The smart cart screen lets users review all selected items, adjust quantities, apply promo codes, and see an itemized price breakdown with delivery fee, taxes, and total before confirming the order." },
            { src: "src/delicacia/customer delivery tracking.png", title: "Live Order Tracking", desc: "Real-time order status screen showing the delivery pipeline — from 'Order Confirmed' to 'Picked Up' to 'On the Way' — with a live map view, estimated arrival time, and rider contact info." },
            { src: "src/delicacia/Admin Home.png", title: "Admin Dashboard", desc: "The restaurant owner dashboard provides a live snapshot of active orders, daily revenue, pending deliveries, and top-selling menu items in a clean card-based management panel." },
            { src: "src/delicacia/Admin Menu Items.png", title: "Admin Menu Manager", desc: "Full CRUD control for the restaurant menu — admins can browse all food items with images and pricing, toggle availability status, edit item details, manage categories, and push menu updates in real time." }
        ],
        metrics: [
            { title: "30% Reduction", desc: "In food ordering friction & drop-offs" },
            { title: "15% Improvement", desc: "In kitchen response and delivery logs" },
            { title: "4.9 / 5.0", desc: "User Satisfaction Score across tests" },
            { title: "98% Real-time", desc: "Sync accuracy using Firebase streams" }
        ]
    },
    logistics: {
        title: "BackCAPS Logistics",
        subtitle: "Revolutionizing transportation and logistics systems in Pakistan",
        bannerBg: "bg-gradient-to-r from-blue-600 to-indigo-700",
        tag: "Web + Mobile • Flutter & Firebase",
        intro: "BackCAPS Logistics is an innovative platform engineered to revolutionize the transportation and logistics landscape. It acts as a comprehensive, user-friendly live ecosystem connecting businesses, drivers, and consumers seamlessly.",
        friction: "Highly fragmented logistics market in Pakistan suffering from manual route scheduling, lack of live fleet GPS tracking, non-transparent driver hiring rates, and insecure asset transitions.",
        pivot: "A synchronized dashboard and app platform supporting real-time tracking, optimized routing models, integrated payment pipelines, driver-matching algorithms, and automated vehicle-onboarding modules.",
        colors: [
            { hex: "#2563EB", label: "Logistics Blue" },
            { hex: "#0F172A", label: "Deep Indigo" },
            { hex: "#10B981", label: "Operational Green" },
            { hex: "#F1F5F9", label: "Light Slate" }
        ],
        fonts: "Space Grotesk & Inter",
        images: [
            { src: "src/logistics/Home Screen.png", title: "Customer Home — Shipment Hub", desc: "The customer-facing home screen displays active shipment cards, quick-action buttons for booking a new delivery, and live status chips showing 'In Transit', 'Out for Delivery', and 'Delivered' — all in a clean blue-accented mobile layout." },
            { src: "src/logistics/iPad Pro 11 Inches.png", title: "iPad Admin Panel", desc: "The iPad-optimized dashboard shows the administrative control plane — fleet overview, incoming booking requests, driver assignment queues, and route analytics rendered in a two-column split layout built for wide-screen management." },
            { src: "src/logistics/iPad Pro 11 Inches-1.png", title: "Booking Management View", desc: "A second iPad panel view displaying detailed booking records — sender info, parcel weight, pickup/drop address, assigned driver, and estimated delivery windows — with filter and export capabilities." },
            { src: "src/logistics/Driver Home Screen.png", title: "Driver App — Active Jobs", desc: "The driver-side interface shows a live job queue with pickup addresses, parcel weight specs, estimated earnings per trip, and a one-tap 'Accept Job' CTA button. Status toggles let drivers go online/offline instantly." },
            { src: "src/logistics/Parcel Screen 1.png", title: "Parcel Detail View", desc: "A comprehensive parcel tracking card displaying barcode ID, sender and receiver details, delivery timeline milestones, and the current GPS location of the assigned driver on an embedded map." },
            { src: "src/logistics/Parcel Screen 18.png", title: "Parcel History & Logs", desc: "The shipment history screen lists all previous deliveries with timestamps, delivery proof photos, digital signature confirmations, and quick re-order buttons for recurring shipment customers." }
        ],
        metrics: [
            { title: "25% Faster", desc: "Delivery turnaround with path routing" },
            { title: "99.4% Uptime", desc: "GPS Fleet tracking location stream accuracy" },
            { title: "10k+ Drivers", desc: "Onboarded and validated across test regions" },
            { title: "100% Secure", desc: "Document escrow & license verification" }
        ]
    },
    hezzni: {
        title: "Hezzni App",
        subtitle: "Automated ride-sharing platform custom-tailored for Morocco",
        bannerBg: "bg-gradient-to-r from-slate-800 to-slate-900",
        tag: "Mobile App • Native iOS & Android",
        intro: "Hezzni is a specialized transportation ecosystem designed specifically to answer local transit needs in the Moroccan market, optimizing taxi dispatches, ride rentals, and daily commutes with precision.",
        friction: "Local commuters faced unoptimized transit lanes, high surcharge rates, and difficulties in identifying verified rental fleet vehicles and licensed local companies.",
        pivot: "A clean modern app utilizing custom map tile overlays, strict local compliance protocols, a secure company dashboard interface, and instant push ride dispatches.",
        colors: [
            { hex: "#0F172A", label: "Midnight Slate" },
            { hex: "#2563EB", label: "Theme Blue" },
            { hex: "#F59E0B", label: "Taxi Amber" },
            { hex: "#FFFFFF", label: "Clean White" }
        ],
        fonts: "Space Grotesk & Inter",
        images: [
            { src: "src/hezzni/Home Screen.png", title: "Hezzni Home — Ride Now", desc: "The main map-centric home screen shows the user's live location in Morocco, a destination search bar, ride type selector (Standard, Comfort, XL), and estimated fare cards — all styled in a dark midnight-blue palette optimized for night usage." },
            { src: "src/hezzni/Home Screen-1.png", title: "Ride Type Selection", desc: "A bottom drawer expands to present available nearby drivers with estimated arrival times, vehicle class descriptions, dynamic pricing per km, and driver star ratings — letting users compare options before confirming a ride." },
            { src: "src/hezzni/Home Screen-2.png", title: "Active Ride Tracking", desc: "Once a ride is confirmed, the tracking screen shows the driver's real-time movement on the map, OTP-verified pickup pin, ride progress bar, driver profile photo, vehicle plate number, and a one-tap SOS emergency button." },
            { src: "src/hezzni/Home Screen-3.png", title: "Trip Summary & Rating", desc: "Post-ride summary screen displaying total fare, trip distance, time taken, payment method used, and a 5-star rating prompt for the driver — with optional written feedback for service quality improvement." },
            { src: "src/hezzni/Rental Companies.png", title: "Rental Companies Directory", desc: "A browsable directory of licensed Moroccan vehicle rental agencies — each card shows the company logo, available fleet count, operating city, verified badge, and minimum daily rental rates with a 'View Fleet' CTA." },
            { src: "src/hezzni/Dashboard.png", title: "Company Admin Dashboard", desc: "The web-based admin dashboard for rental companies displays fleet availability metrics, active bookings, revenue charts by day/week/month, driver management tables, and vehicle service due alerts in a structured grid layout." }
        ],
        metrics: [
            { title: "4.8 Star", desc: "Moroccan App Store launch review rating" },
            { title: "20% Cheaper", desc: "Transit costs via optimized matching pools" },
            { title: "50+ Companies", desc: "Fully integrated Moroccan rental fleets" },
            { title: "3s Match", desc: "Average dispatch lag time from driver to rider" }
        ]
    },
    karighar: {
        title: "KariGhar",
        subtitle: "On-demand local handyman booking mobile application",
        bannerBg: "bg-gradient-to-r from-emerald-600 to-teal-700",
        tag: "Mobile App • Flutter & Node.js",
        intro: "KariGhar bridges the gap between household repair needs and highly skilled local builders, plumbers, electricians, and painters by providing instant catalog searches and booking options.",
        friction: "Finding trusted domestic handymen on short notice while ensuring standardized labor pricing, genuine ratings, and safe cash-on-service guarantees.",
        pivot: "An intuitive customer catalog with interactive ratings, secure chat integration, standard budget estimators, and geofenced requests to match nearby experts instantly.",
        colors: [
            { hex: "#059669", label: "Handy Green" },
            { hex: "#D97706", label: "Warning Gold" },
            { hex: "#0F172A", label: "Title Blue" },
            { hex: "#F8FAFC", label: "Card White" }
        ],
        fonts: "Space Grotesk & Inter",
        images: [
            { src: "src/karighar/Complete mobile application.png", title: "Onboarding & Service Home", desc: "The app's first impression — a welcoming onboarding flow that flows into the home screen with service category tiles (Plumber, Electrician, Painter, Carpenter, Cleaner), a location picker, and a 'Book Now' prominent CTA above the fold." },
            { src: "src/karighar/Complete mobile application-1.png", title: "Handyman Profiles & Ratings", desc: "Each expert's profile card shows their photo, trade category, years of experience, verified ID badge, cumulative star rating, number of completed jobs, distance from user, and hourly rate — letting customers compare before booking." },
            { src: "src/karighar/Complete mobile application-2.png", title: "Booking Scheduler", desc: "An interactive date-time picker paired with a service description text area, address auto-fill, and an estimated cost calculator. Users confirm their booking with a single tap after reviewing all details in a clean summary card." },
            { src: "src/karighar/Complete mobile application-3.png", title: "Active Job Tracking", desc: "Live status tracking shows the handyman's ETA on a map, step-by-step job progress updates ('Accepted → On the Way → Arrived → In Progress → Completed'), and an in-app chat panel for direct communication." },
            { src: "src/karighar/Complete mobile application-4.png", title: "Review & Payment", desc: "Post-service screen where customers submit a star rating, written review, and tip amount before finalizing payment. Accepted modes include cash on delivery, JazzCash, and card — with a digital receipt sent automatically." }
        ],
        metrics: [
            { title: "45 Min", desc: "Average handyman arrival time on booking" },
            { title: "94% Clean", desc: "Service resolution rate on first booking" },
            { title: "3.5k+", desc: "Local handymen validated and onboarded" },
            { title: "4.9/5", desc: "Average client user feedback rating" }
        ]
    },
    curevio: {
        title: "CureVio Healthcare",
        subtitle: "Telemedicine application for doctors & patient management",
        bannerBg: "bg-gradient-to-r from-cyan-500 to-blue-600",
        tag: "Healthcare • UI/UX & Native Mobile",
        intro: "CureVio provides real-time virtual examinations, prescription trackers, vital metric reports, and doctor bookings in a clean HIPAA-compliant workspace designed for modern medical speeds.",
        friction: "Severe time delays in patient intake, high rates of missed prescription schedules, and non-secure patient-to-doctor document logs during remote checkups.",
        pivot: "An interactive, patient-centric telehealth UI featuring digital prescription vaults, fast audio/video consultations, smart metric monitors, and an analytical dashboard for doctors.",
        colors: [
            { hex: "#06B6D4", label: "Clinical Cyan" },
            { hex: "#2563EB", label: "Safety Blue" },
            { hex: "#EF4444", label: "Alert Coral" },
            { hex: "#F3F4F6", label: "Clean Gray" }
        ],
        fonts: "Space Grotesk & Inter",
        images: [
            { src: "src/curevio/Healthcare App Development.png", title: "Doctor Discovery & Booking", desc: "The patient home screen features specialty-based doctor filtering (General, Cardiology, Dermatology), a top-rated doctors carousel, availability indicators, consultation fee display, and instant 'Book Appointment' and 'Video Call' action buttons." },
            { src: "src/curevio/Healthcare App Development-1.png", title: "Patient Health Dashboard", desc: "A comprehensive health profile view showing upcoming appointments, prescription history, vital signs log (blood pressure, glucose, BMI), active medication reminders, and a quick-access medical records vault." },
            { src: "src/curevio/Group 1597882613.png", title: "Full App Screen Showcase", desc: "A composite multi-screen overview presenting the complete CureVio ecosystem — from patient onboarding and doctor selection, through live video consultation UI, to the digital prescription viewer and post-visit feedback flow." }
        ],
        metrics: [
            { title: "40% Time saved", desc: "No physical lobby lines & automated intake" },
            { title: "100% Log", desc: "End-to-end encrypted medical databases" },
            { title: "90% Adherence", desc: "On patient prescriptions using app reminders" },
            { title: "5k+ Consults", desc: "Successfully resolved remotely on trial" }
        ]
    },
    lifekarts: {
        title: "LifeKarts",
        subtitle: "Visual design for digital medical inventory and ordering",
        bannerBg: "bg-gradient-to-r from-rose-500 to-rose-600",
        tag: "UI/UX Design • Figma & Prototyping",
        intro: "LifeKarts is an aesthetically refined e-pharmacy interface tailored to make healthcare inventories accessible to first-time mobile users, supporting quick prescription uploads.",
        friction: "Conventional pharmacy shopping experiences suffer from chaotic layouts, confusing classifications, and manual checkouts that frustrate elderly or urgent care buyers.",
        pivot: "A soothing minimalist aesthetic styled with clear font weights, high contrast buttons, automatic dosage alerts, and deep categorization schemas.",
        colors: [
            { hex: "#F43F5E", label: "Heart Rose" },
            { hex: "#0F172A", label: "Deep Slate" },
            { hex: "#10B981", label: "Success Green" },
            { hex: "#FFF1F2", label: "Soft Pink" }
        ],
        fonts: "Space Grotesk & Inter",
        images: [
            { src: "src/lifekart/Medical App Development.png", title: "Pharmacy Home & Categories", desc: "A clean, rose-tinted home screen with a prominent search bar, medicine category tabs (Pain Relief, Vitamins, Skin Care, Baby Products), flash sale banners, and a 'Upload Prescription' shortcut — making first-time navigation frictionless." },
            { src: "src/lifekart/Medical App Development-1.png", title: "Product Detail & Dosage Info", desc: "The medicine detail view shows high-resolution product photos, dosage instructions, generic vs branded name toggle, stock availability, customer reviews, and an 'Add to Cart' / 'Add to Reminder' dual-action button pair." },
            { src: "src/lifekart/Medical App Development-2.png", title: "Cart & Prescription Upload", desc: "The checkout flow integrates a prescription image uploader with OCR scanning to auto-match medicines, a delivery date selector, insurance coupon field, and an itemized billing summary before order placement." },
            { src: "src/lifekart/Doctor Details View 1.png", title: "In-App Doctor Consultation", desc: "A secondary doctor-booking interface embedded within the pharmacy app — showing specialist profiles, availability slots, teleconsultation fees, and verified patient count — creating a unified health + pharmacy experience." }
        ],
        metrics: [
            { title: "Figma Master", desc: "Beautiful responsive components & style guides" },
            { title: "85% Score", desc: "A/B testing score for intuitive design flow" },
            { title: "3 Step", desc: "Minimal checkout flow from cart to order" },
            { title: "WCAG AA", desc: "Full accessibility visual contrast compliance" }
        ]
    },
    spoken_buddy: {
        title: "Spoken Buddy AI",
        subtitle: "AI Companion for accent and speech fluency assessment",
        bannerBg: "bg-gradient-to-r from-purple-600 to-indigo-800",
        tag: "AI / NLP • Web & Mobile Design",
        intro: "Spoken Buddy is an immersive NLP voice tool engineered for ESL users. It listens inside interactive challenges and models pronunciation matrices for fast speech coherence ratings.",
        friction: "Language students struggle with pronunciation check barriers due to expensive live tutors and lack of instant acoustic accent feedback.",
        pivot: "An extremely friendly speaking companion UI integrating Whisper NLP parsing, clean responsive grammar reports, and modern voice charts.",
        colors: [
            { hex: "#7C3AED", label: "Intelligent Purple" },
            { hex: "#4F46E5", label: "Speech Indigo" },
            { hex: "#0F172A", label: "Dark Panel" },
            { hex: "#FAF5FF", label: "Soothe Violet" }
        ],
        fonts: "Space Grotesk & Inter",
        images: [
            { src: "src/spoken_buddy/Spoken Buddy Web App Design.png", title: "Web Dashboard — Learning Hub", desc: "The full-featured web platform shows an overview of lessons, daily challenge prompts, pronunciation score history graphs, and quick-launch buttons for AI conversation sessions and co-learner matching." },
            { src: "src/spoken_buddy/Mobile app preparation.png", title: "Welcome & Profile Success", desc: "The jubilant onboarding completion screen — 'Welcome to Spoken Buddy Pro' with confetti animation and a verified badge — confirms successful profile setup and sets an encouraging tone for the learning journey ahead." },
            { src: "src/spoken_buddy/Mobile app preparation-1.png", title: "AVAN AI Conversation Mode", desc: "The live AI conversation screen with AVAN (the app's AI tutor) — the robot avatar pulses while speaking, captions appear in real time ('Hello Bilal! How can I assist you in improving your English today?'), and the user avatar displays a 'Thinking' state." },
            { src: "src/spoken_buddy/Mobile app preparation-2.png", title: "Co-Learner Matching", desc: "The peer practice mode showing the Co-Learner finder — when no live partner is available it shows a friendly empty-state illustration with retry option, maintaining user engagement without frustration." },
            { src: "src/spoken_buddy/OnBoarding Screen 18.png", title: "Onboarding — Track Your Progress", desc: "An onboarding slide showcasing the progress tracking feature — Day 12 streak badge, achievement medals, and animated growth charts communicate the gamified learning loop, motivating users to maintain their daily practice streaks." }
        ],
        metrics: [
            { title: "Whisper AI", desc: "High-accuracy live pronunciation model" },
            { title: "15% Jump", desc: "In speech clarity records over a month limits" },
            { title: "80k+ Words", desc: "Analyzed and scored across pilot releases" },
            { title: "4.8 App rating", desc: "Strong engagement inside speech classrooms" }
        ]
    },
    material_scanner: {
        title: "Material Scanner",
        subtitle: "Sleek document scanner with edge-clipping auto-captures",
        bannerBg: "bg-gradient-to-r from-indigo-500 to-slate-800",
        tag: "Productivity • Flutter & OpenCV Core",
        intro: "Material Scanner transforms simple camera snaps into ultra-clear, flattened PDF files using camera-based border guides, custom filtering modes, and swift tag managers.",
        friction: "Mobile document scans frequently suffer from skew angles, poor room lighting, manual cropping hassles, and heavy PDF sizes.",
        pivot: "OpenCV edge detection pipelines packaged into a gorgeous Material Design 3 app shell containing automatic perspective warps and paper contrast thresholds.",
        colors: [
            { hex: "#6366F1", label: "OpenCV Indigo" },
            { hex: "#1E293B", label: "Iron Carbon" },
            { hex: "#E0E7FF", label: "Background Mist" },
            { hex: "#FFFFFF", label: "Laser White" }
        ],
        fonts: "Space Grotesk & Inter",
        images: [
            { src: "src/material_scanner/iPhone 14 Mockups.png", title: "Choose Filter Screen", desc: "After capturing a document, this screen presents real-time filter previews — Original, Grayscale, B&W, Enhanced, and Laser modes — applied over the live scan of a MacBook and iPhone at an ICPC programming contest, demonstrating real-world performance." },
            { src: "src/material_scanner/iPhone 14 Mockups-1.png", title: "Edge Adjust & Crop", desc: "The 'Adjust' screen lets users manually fine-tune the four corner anchor points for perspective correction. OpenCV's edge detection pre-sets the crop boundary automatically, with manual override handles for precision trimming." },
            { src: "src/material_scanner/iPhone 14 Mockups-2.png", title: "Your Documents Vault", desc: "The document library home shows scans organized by date ('Today', 'Yesterday'), with thumbnail previews, file names, page counts, and last-modified timestamps. A top search bar and grid/list toggle ensure fast document retrieval." }
        ],
        metrics: [
            { title: "Instant", desc: "Auto-cropping aspect ratios on paper borders" },
            { title: "5 Filters", desc: "Laser sharp document color optimizations" },
            { title: "80% Size", desc: "Reduction in file payloads using smart PDF compress" },
            { title: "No Watermark", desc: "Fully open product build model" }
        ]
    },
    web_projects: {
        title: "Krixsen Portals & Landing Pages",
        subtitle: "Creative web systems and co-working automation portals",
        bannerBg: "bg-gradient-to-r from-violet-600 to-blue-700",
        tag: "Web Development • WordPress & React",
        intro: "Crafted robust web catalogs and specialized administrative portals listing core resources, facilitating seamless conference-room schedules and office operations.",
        friction: "Struggling to synchronize bookings, member lists, and custom public service listings across distinct local branches and separate schedules.",
        pivot: "A responsive system linking beautiful customer landings with interactive booking grids, real-time email alerts, and administrative management panels.",
        colors: [
            { hex: "#7C3AED", label: "Krixsen Violet" },
            { hex: "#1E293B", label: "Business Slate" },
            { hex: "#2563EB", label: "Network Blue" },
            { hex: "#FFFFFF", label: "Pure Light" }
        ],
        fonts: "Space Grotesk & Inter",
        images: [
            { src: "src/Web_projects/Landing Page.png", title: "BackCAPS — Vehicle Catalog Landing", desc: "A bold editorial-style landing page for BackCAPS featuring a massive 'HONDA CITY' headline, hero vehicle render, key specs chips (Price: $20,000 · Range: 500mi · Top Speed: 280mph), a tagline 'Redefining Class with Affordability and Speed', and a bottom filter bar for Make, Model, Year, and Price range." },
            { src: "src/Web_projects/image 55.png", title: "Krixsen Cowork — WordPress Site", desc: "The live Krixsen Cowork website built on WordPress — featuring the 'Make Ideas Happen' tagline, social media sidebar icons (Facebook, Instagram, LinkedIn, Twitter), a blog feed section, and clean minimal navigation with a search icon." },
            { src: "src/Web_projects/image 70.png", title: "BackCAPS Corporate Website", desc: "The full company website for BackCAPS — 'Design. Develop. Deliver.' hero headline with a process diagram (Idea → Coding Solution → Product), a services grid (Web Dev, Mobile App Dev, UI/UX, AI), a team section featuring Zohaib Ahmed as CEO & Founder, and a 'Get a Quote' contact section." },
            { src: "src/Web_projects/image 71.png", title: "Krixsen Cowork Booking Portal", desc: "The internal booking management portal for Krixsen's coworking branches — showing conference room availability grids, member registration forms, real-time seat booking status, and automated email notification triggers for scheduling." }
        ],
        metrics: [
            { title: "45% Boost", desc: "In customer coworking room bookings" },
            { title: "Responsive", desc: "Flawless mobile, tablet, and widescreen scaling" },
            { title: "Instant Notify", desc: "E-mail alerts for administrative tasks" },
            { title: "3 Main Portals", desc: "Designed, engineered, and successfully launched" }
        ]
    }
};

export default function ZohaibAhmed() {
    const [scrolled, setScrolled] = useState(false);
    const [activeProject, setActiveProject] = useState(null);

    // Initialize Animate On Scroll (AOS) when the window.AOS becomes available
    useEffect(() => {
        const initAOS = () => {
            if (window.AOS) {
                window.AOS.init({
                    once: true,
                    offset: 100,
                    duration: 800,
                    easing: 'ease-out-cubic',
                });
            } else {
                setTimeout(initAOS, 100);
            }
        };
        initAOS();
    }, []);

    // Navbar scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const openProject = (id) => {
        setActiveProject(caseStudies[id]);
        document.body.classList.add("overflow-hidden");
    };

    const closeModal = () => {
        setActiveProject(null);
        document.body.classList.remove("overflow-hidden");
    };

    return (
        <div className="bg-[#F8FAFC] text-[#1E293B] font-inter overflow-x-hidden min-h-screen">
            <Head>
                <title>Zohaib Ahmed | Portfolio</title>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" async></script>
            </Head>

            <style dangerouslySetInnerHTML={{ __html: `
                .font-space {
                    font-family: 'Space Grotesk', sans-serif;
                }

                .font-inter {
                    font-family: 'Inter', sans-serif;
                }

                html {
                    scroll-behavior: smooth;
                }

                ::selection {
                    background: #6366F1;
                    color: white;
                }

                .nav-pill-dark {
                    background: rgba(255,255,255,0.96);
                    border: 1px solid rgba(0,0,0,0.06);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    box-shadow: 0 4px 20px rgba(0,0,0,0.07);
                }

                .nav-pill-dark .nav-logo { color: #0F172A; }
                .nav-pill-dark .nav-link { color: #64748b; }
                .nav-pill-dark .nav-link:hover { color: #2563eb; }
                .nav-pill-dark .nav-hire-btn {
                    background: #0F172A !important;
                    border-color: #0F172A !important;
                    color: white !important;
                }

                .nav-pill-scrolled {
                    background: rgba(255,255,255,0.96);
                    border: 1px solid rgba(0,0,0,0.06);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
                }

                .nav-pill-scrolled .nav-logo { color: #0F172A !important; }
                .nav-pill-scrolled .nav-link { color: #64748b !important; }
                .nav-pill-scrolled .nav-link:hover { color: #2563eb !important; }
                .nav-pill-scrolled .nav-hire-btn {
                    background: #0F172A !important;
                    border-color: #0F172A !important;
                    color: white !important;
                }
                .nav-pill-scrolled .nav-hire-btn:hover {
                    background: #1e293b !important;
                    color: white !important;
                }

                .hero-section {
                    background: #ffffff;
                }

                .hero-base-bg {
                    background: radial-gradient(ellipse 80% 60% at 30% 10%, #eef2ff 0%, #ffffff 55%, #f0fdf4 100%);
                }

                .hero-grid {
                    background-image:
                        radial-gradient(circle, rgba(15,23,42,0.055) 1px, transparent 1px);
                    background-size: 36px 36px;
                    mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, black 50%, transparent 100%);
                    -webkit-mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, black 50%, transparent 100%);
                }

                .hero-vignette {
                    background: radial-gradient(ellipse 110% 110% at 50% 50%, transparent 50%, rgba(255,255,255,0.85) 100%);
                }

                @keyframes aurora1 {
                    0%   { transform: translate(0px, 0px)    scale(1)    rotate(0deg); }
                    20%  { transform: translate(80px,-80px)  scale(1.12) rotate(20deg); }
                    40%  { transform: translate(-30px, 60px) scale(0.92) rotate(-15deg); }
                    60%  { transform: translate(50px, 30px)  scale(1.08) rotate(10deg); }
                    80%  { transform: translate(-60px,-40px) scale(1.05) rotate(-5deg); }
                    100% { transform: translate(0px, 0px)    scale(1)    rotate(0deg); }
                }

                @keyframes aurora2 {
                    0%   { transform: translate(0px, 0px)     scale(1); }
                    33%  { transform: translate(-70px, 70px)  scale(1.18); }
                    66%  { transform: translate(60px, -90px)  scale(0.85); }
                    100% { transform: translate(0px, 0px)     scale(1); }
                }

                @keyframes aurora3 {
                    0%   { transform: translate(0px, 0px)    scale(1)    rotate(0deg); }
                    25%  { transform: translate(40px,-50px)  scale(1.1) rotate(12deg); }
                    50%  { transform: translate(-50px, 30px) scale(0.9) rotate(-20deg); }
                    75%  { transform: translate(20px, 60px)  scale(1.05) rotate(8deg); }
                    100% { transform: translate(0px, 0px)    scale(1)    rotate(0deg); }
                }

                .aurora-orb {
                    position: absolute;
                    border-radius: 50%;
                    mix-blend-mode: screen;
                    pointer-events: none;
                }

                .aurora-1 {
                    width: min(55vw, 700px);
                    height: min(55vw, 700px);
                    background: radial-gradient(circle at 40% 40%, rgba(99,102,241,0.14), transparent 65%);
                    filter: blur(90px);
                    top: -15%;
                    left: -12%;
                    animation: aurora1 14s ease-in-out infinite;
                }

                .aurora-2 {
                    width: min(45vw, 560px);
                    height: min(45vw, 560px);
                    background: radial-gradient(circle at 60% 60%, rgba(167,139,250,0.13), transparent 65%);
                    filter: blur(80px);
                    top: 20%;
                    right: -10%;
                    animation: aurora2 18s ease-in-out infinite;
                }

                .aurora-3 {
                    width: min(60vw, 750px);
                    height: min(60vw, 750px);
                    background: radial-gradient(circle at 50% 50%, rgba(99,210,240,0.1), transparent 65%);
                    filter: blur(100px);
                    bottom: -20%;
                    left: 15%;
                    animation: aurora3 20s ease-in-out infinite reverse;
                }

                .aurora-4 {
                    width: min(30vw, 380px);
                    height: min(30vw, 380px);
                    background: radial-gradient(circle at 50% 50%, rgba(52,211,153,0.12), transparent 65%);
                    filter: blur(70px);
                    top: 35%;
                    left: 38%;
                    animation: aurora1 11s ease-in-out infinite 3s;
                    opacity: 0.7;
                }

                @keyframes scanMove {
                    0%   { top: -2px; opacity: 0; }
                    5%   { opacity: 1; }
                    95%  { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }

                .hero-scan-line {
                    height: 1px;
                    background: linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.12) 20%, rgba(139,92,246,0.2) 50%, rgba(99,102,241,0.12) 80%, transparent 100%);
                    animation: scanMove 7s linear infinite;
                    box-shadow: 0 0 6px rgba(139,92,246,0.08);
                }

                .hero-first-name {
                    text-shadow: 0 2px 30px rgba(99,102,241,0.1);
                }

                @keyframes shimmerName {
                    0%   { background-position: 0% 50%; }
                    50%  { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .hero-gradient-name {
                    background: linear-gradient(115deg, #60a5fa, #818cf8, #a78bfa, #34d399, #60a5fa);
                    background-size: 300% 300%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: shimmerName 5s ease infinite;
                }

                .hero-btn-primary {
                    background: linear-gradient(135deg, #6366f1, #8b5cf6);
                    color: white;
                    box-shadow: 0 0 30px rgba(99,102,241,0.35), 0 4px 20px rgba(99,102,241,0.25);
                    border: 1px solid rgba(255,255,255,0.1);
                }

                .hero-btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 0 45px rgba(99,102,241,0.55), 0 8px 30px rgba(99,102,241,0.35);
                }

                .hero-btn-secondary {
                    background: white;
                    color: #0F172A;
                    border: 1.5px solid #e2e8f0;
                    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
                }

                .hero-btn-secondary:hover {
                    background: #f8fafc;
                    transform: translateY(-2px);
                    border-color: #c7d2fe;
                    box-shadow: 0 4px 20px rgba(99,102,241,0.12);
                }

                @keyframes pulseGreen {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.7); }
                    70%       { box-shadow: 0 0 0 6px rgba(52,211,153,0); }
                }

                .hero-pulse-dot {
                    animation: pulseGreen 1.8s ease-out infinite;
                }

                @keyframes glowBreath {
                    0%, 100% {
                        box-shadow:
                            0 0 35px rgba(99,102,241,0.2),
                            0 0 70px rgba(99,102,241,0.1),
                            0 0 110px rgba(139,92,246,0.07);
                        border-color: rgba(99,102,241,0.3);
                    }
                    50% {
                        box-shadow:
                            0 0 45px rgba(139,92,246,0.28),
                            0 0 90px rgba(139,92,246,0.14),
                            0 0 160px rgba(99,102,241,0.08);
                        border-color: rgba(139,92,246,0.38);
                    }
                }

                @keyframes orbitSpin {
                    from { transform: rotate(0deg); }
                    to   { transform: rotate(360deg); }
                }

                .hero-orbit-ring {
                    width: 510px;
                    height: 510px;
                    border: 1px dashed rgba(99,102,241,0.22);
                    animation: orbitSpin 30s linear infinite;
                }

                .hero-orbit-ring::before {
                    content: '';
                    position: absolute;
                    width: 10px;
                    height: 10px;
                    background: #818cf8;
                    border-radius: 50%;
                    top: -5px;
                    left: 50%;
                    margin-left: -5px;
                    box-shadow: 0 0 10px #818cf8, 0 0 22px rgba(129,140,248,0.45);
                }

                .hero-glow-ring {
                    width: 438px;
                    height: 438px;
                    border: 1.5px solid rgba(99,102,241,0.2);
                    animation: glowBreath 3.5s ease-in-out infinite;
                }

                .hero-profile-frame {
                    width: 360px;
                    height: 360px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 4px solid white;
                    box-shadow:
                        0 0 0 1px rgba(99,102,241,0.18),
                        0 20px 60px rgba(99,102,241,0.15),
                        0 8px 30px rgba(0,0,0,0.08);
                    position: relative;
                }

                .hero-profile-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.8s ease;
                }

                .hero-profile-frame:hover .hero-profile-img {
                    transform: scale(1.05);
                }

                .hero-profile-overlay {
                    background: linear-gradient(to bottom, transparent 70%, rgba(99,102,241,0.06) 100%);
                }

                @keyframes chipFloatA {
                    0%, 100% { transform: translateY(0px) rotate(-2deg); }
                    50%       { transform: translateY(-14px) rotate(-2deg); }
                }

                @keyframes chipFloatB {
                    0%, 100% { transform: translateY(0px) rotate(3deg); }
                    50%       { transform: translateY(-10px) rotate(3deg); }
                }

                .hero-chip {
                    position: absolute;
                    background: rgba(255,255,255,0.92);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(99,102,241,0.15);
                    border-radius: 50px;
                    padding: 9px 16px;
                    color: #1e293b;
                    font-size: 11px;
                    font-weight: 700;
                    letter-spacing: 0.06em;
                    text-transform: uppercase;
                    white-space: nowrap;
                    animation: chipFloatA 4s ease-in-out infinite;
                    box-shadow: 0 4px 20px rgba(99,102,241,0.1), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1);
                }

                .chip-flutter  { top: 8%;  left: -40px; animation-name: chipFloatA; }
                .chip-ios      { top: 42%; right: -30px; animation-name: chipFloatB; }
                .chip-uiux     { bottom: 18%; left: -20px; animation-name: chipFloatA; }
                .chip-firebase { top: 22%; right: 5%;   animation-name: chipFloatB; }

                .animate-float-slow {
                    animation: chipFloatA 4s ease-in-out infinite;
                }

                .hero-status-card {
                    background: white;
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(99,102,241,0.12);
                    border-radius: 16px;
                    padding: 14px 20px;
                    white-space: nowrap;
                    box-shadow: 0 8px 32px rgba(99,102,241,0.12), 0 2px 8px rgba(0,0,0,0.06);
                }

                @keyframes scrollDrop {
                    0%   { height: 0;    opacity: 1; transform: translateY(0); }
                    100% { height: 48px; opacity: 0; transform: translateY(0); }
                }

                .hero-scroll-cue {
                    opacity: 0.5;
                    transition: opacity 0.3s;
                }

                .hero-scroll-cue:hover {
                    opacity: 0.9;
                }

                .hero-scroll-line {
                    width: 1px;
                    background: linear-gradient(to bottom, rgba(99,102,241,0.8), transparent);
                    animation: scrollDrop 2s ease-in-out infinite;
                    height: 48px;
                    margin: 0 auto;
                }

                @keyframes float {
                    0%   { transform: translateY(0px) translateX(-50%); }
                    50%  { transform: translateY(-10px) translateX(-50%); }
                    100% { transform: translateY(0px) translateX(-50%); }
                }

                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
            `}} />

            {/* Navbar */}
            <nav className={`fixed w-full top-0 z-50 transition-all duration-500`} id="navbar">
                <div className="max-w-7xl mx-auto px-6 py-5">
                    <div id="navPill" className="nav-pill-scrolled rounded-full px-6 py-3 flex justify-between items-center transition-all duration-500">
                        <Link href="/" className="text-2xl font-bold font-space text-white tracking-tighter nav-logo">ZA.</Link>
                        
                        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-wider">
                            <a href="#projects" className="nav-link hover:text-blue-600 transition-colors">Projects</a>
                            <a href="#about" className="nav-link hover:text-blue-600 transition-colors">About</a>
                            <a href="#contact" className="nav-link hover:text-blue-600 transition-colors">Contact</a>
                        </div>

                        <div className="flex items-center space-x-4">
                            <a href="https://github.com/Zohaib1397" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                                <i className="fab fa-github text-xl"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/zohaib1397" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                                <i className="fab fa-linkedin text-xl"></i>
                            </a>
                            <a href="#contact" className="nav-hire-btn bg-white/10 border border-white/20 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white hover:text-[#0F172A] transition-all hover:shadow-lg transform hover:-translate-y-0.5 backdrop-blur-sm">
                                HIRE ME
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-section min-h-screen relative flex items-center overflow-hidden">
                {/* Dark base layer */}
                <div className="absolute inset-0 hero-base-bg z-0"></div>

                {/* Aurora orbs */}
                <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
                    <div className="aurora-orb aurora-1"></div>
                    <div className="aurora-orb aurora-2"></div>
                    <div className="aurora-orb aurora-3"></div>
                    <div className="aurora-orb aurora-4"></div>
                </div>

                {/* Dot grid overlay */}
                <div className="hero-grid absolute inset-0 z-0 pointer-events-none"></div>

                {/* Moving scan line */}
                <div className="hero-scan-line absolute left-0 right-0 z-0 pointer-events-none"></div>

                {/* Vignette edge fade */}
                <div className="absolute inset-0 z-0 hero-vignette pointer-events-none"></div>

                {/* Content */}
                <div className="max-w-7xl mx-auto w-full px-6 pt-36 pb-28 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Text */}
                    <div data-aos="fade-up" data-aos-duration="900">
                        {/* Available badge */}
                        <div className="inline-flex items-center gap-2.5 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-8">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 hero-pulse-dot"></span>
                            <span className="text-emerald-700 text-xs font-bold tracking-[0.2em] uppercase">Available for Work</span>
                        </div>

                        {/* Role line */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="h-px w-10 bg-indigo-400"></div>
                            <span className="text-slate-500 text-xs font-semibold tracking-[0.25em] uppercase">UI/UX Designer · iOS · Flutter · Full-Stack</span>
                        </div>

                        {/* Name */}
                        <h1 className="font-space font-black leading-[0.88] tracking-tighter mb-8">
                            <span className="hero-first-name block text-slate-900" style={{ fontSize: 'clamp(4.5rem, 10vw, 8.5rem)' }}>Zohaib</span>
                            <span className="hero-gradient-name block" style={{ fontSize: 'clamp(4.5rem, 10vw, 8.5rem)' }}>Ahmed</span>
                        </h1>

                        {/* Description */}
                        <p className="text-slate-600 text-lg max-w-md leading-relaxed mb-10">
                            Software Engineer crafting pixel-perfect interfaces and robust cross-platform products — from native iOS apps to AI-driven web systems. Driven by design quality and real user impact.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 mb-14">
                            <a href="#contact" className="hero-btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold tracking-wide transition-all">
                                <i className="fas fa-paper-plane text-xs"></i>
                                Get In Touch
                            </a>
                            <a href="/zohaib/src/ZOHAIB Resume.pdf" download className="hero-btn-secondary inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold tracking-wide transition-all">
                                <i className="far fa-file-pdf text-xs"></i>
                                Download CV
                            </a>
                        </div>

                        {/* Stats row */}
                        <div className="flex items-center gap-10">
                            <div className="text-center">
                                <div className="text-4xl font-black font-space text-slate-900 leading-none">3+</div>
                                <div className="text-[11px] text-slate-400 uppercase tracking-[0.2em] mt-2">Years Exp.</div>
                            </div>
                            <div className="w-px h-10 bg-slate-200"></div>
                            <div className="text-center">
                                <div className="text-4xl font-black font-space text-slate-900 leading-none">10+</div>
                                <div className="text-[11px] text-slate-400 uppercase tracking-[0.2em] mt-2">Projects</div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Profile visual */}
                    <div className="relative flex items-center justify-center" data-aos="fade-left" data-aos-duration="1100" data-aos-delay="200">
                        {/* Outer orbit ring */}
                        <div className="hero-orbit-ring absolute rounded-full pointer-events-none"></div>

                        {/* Glow ring */}
                        <div className="hero-glow-ring absolute rounded-full pointer-events-none"></div>

                        {/* Profile frame */}
                        <div className="hero-profile-frame relative z-10">
                            <img src="/zohaib/src/profile.JPG" alt="Zohaib Ahmed" className="w-full h-full object-cover hero-profile-img" />
                            {/* Inner gradient overlay */}
                            <div className="absolute inset-0 hero-profile-overlay rounded-full"></div>
                        </div>

                        {/* Floating skill chips */}
                        <div className="hero-chip chip-flutter animate-float-slow">
                            <i className="fas fa-mobile-alt text-xs mr-1.5 text-cyan-400"></i> Flutter
                        </div>
                        <div className="hero-chip chip-ios" style={{ animationDelay: '1.2s' }}>
                            <i className="fab fa-apple text-xs mr-1.5 text-white"></i> iOS Dev
                        </div>
                        <div className="hero-chip chip-uiux" style={{ animationDelay: '0.6s' }}>
                            <i className="fas fa-pen-nib text-xs mr-1.5 text-violet-400"></i> UI/UX
                        </div>
                        <div className="hero-chip chip-firebase" style={{ animationDelay: '1.8s' }}>
                            <i className="fas fa-fire text-xs mr-1.5 text-orange-400"></i> Firebase
                        </div>

                        {/* Status card */}
                        <div className="hero-status-card absolute -bottom-6 left-1/2 -translate-x-1/2 animate-float z-20">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                    <i className="fas fa-check text-emerald-400 text-xs"></i>
                                </div>
                                <div>
                                    <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Open to Work</div>
                                    <div className="text-slate-700 text-xs font-semibold leading-tight">Available for collaborations</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll cue */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 hero-scroll-cue">
                    <span className="text-[10px] text-slate-500 uppercase tracking-[0.25em] font-semibold">Scroll</span>
                    <div className="hero-scroll-line"></div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-space font-bold text-[#0F172A] mb-4" data-aos="fade-up">Featured Work</h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">Explore clean codebases, rich case studies, and comprehensive mockups with interactive details.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Project 1: Delicacia */}
                        <div className="group cursor-pointer" onClick={() => openProject('delicacia')} data-aos="fade-up" data-aos-delay="100">
                            <div className="rounded-3xl overflow-hidden mb-6 bg-slate-100 aspect-[4/3] relative shadow-sm border border-slate-100">
                                <img src="/zohaib/src/thumbnails/Delicacia.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Delicacia" />
                                <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-white text-[#0F172A] px-6 py-2.5 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center gap-2">
                                        <i class="fas fa-eye"></i> View Case Study
                                    </span>
                                </div>
                            </div>
                            <div className="px-2">
                                <span className="text-xs font-bold text-blue-500 tracking-wider uppercase border border-blue-100 px-3 py-1 rounded-full mb-3 inline-block">Mobile App</span>
                                <h3 className="text-2xl font-bold font-space text-[#0F172A] mb-2 group-hover:text-blue-600 transition-colors">Delicacia Sphere</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">A comprehensive food delivery and restaurant management ecosystem.</p>
                            </div>
                        </div>

                        {/* Project 2: Logistics */}
                        <div className="group cursor-pointer" onClick={() => openProject('logistics')} data-aos="fade-up" data-aos-delay="200">
                            <div className="rounded-3xl overflow-hidden mb-6 bg-slate-100 aspect-[4/3] relative shadow-sm border border-slate-100">
                                <img src="/zohaib/src/thumbnails/Logistics.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Logistics" />
                                <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-white text-[#0F172A] px-6 py-2.5 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center gap-2">
                                        <i class="fas fa-eye"></i> View Case Study
                                    </span>
                                </div>
                            </div>
                            <div className="px-2">
                                <span className="text-xs font-bold text-blue-500 tracking-wider uppercase border border-blue-100 px-3 py-1 rounded-full mb-3 inline-block">Web + Mobile</span>
                                <h3 className="text-2xl font-bold font-space text-[#0F172A] mb-2 group-hover:text-blue-600 transition-colors">BackCAPS Logistics</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Revolutionizing transportation with complete online booking booking systems.</p>
                            </div>
                        </div>

                        {/* Project 3: Hezzni */}
                        <div className="group cursor-pointer" onClick={() => openProject('hezzni')} data-aos="fade-up" data-aos-delay="300">
                            <div className="rounded-3xl overflow-hidden mb-6 bg-slate-100 aspect-[4/3] relative shadow-sm border border-slate-100">
                                <img src="/zohaib/src/thumbnails/Hezzni.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Hezzni" />
                                <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-white text-[#0F172A] px-6 py-2.5 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center gap-2">
                                        <i class="fas fa-eye"></i> View Case Study
                                    </span>
                                </div>
                            </div>
                            <div className="px-2">
                                <span className="text-xs font-bold text-blue-500 tracking-wider uppercase border border-blue-100 px-3 py-1 rounded-full mb-3 inline-block">Mobile App</span>
                                <h3 className="text-2xl font-bold font-space text-[#0F172A] mb-2 group-hover:text-blue-600 transition-colors">Hezzni</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Automated ride-sharing platform specifically built for the Moroccan market.</p>
                            </div>
                        </div>

                        {/* Project 4: KariGhar */}
                        <div className="group cursor-pointer" onClick={() => openProject('karighar')} data-aos="fade-up" data-aos-delay="400">
                            <div className="rounded-3xl overflow-hidden mb-6 bg-slate-100 aspect-[4/3] relative shadow-sm border border-slate-100">
                                <img src="/zohaib/src/thumbnails/KariGhar.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="KariGhar" />
                                <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span class="bg-white text-[#0F172A] px-6 py-2.5 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center gap-2">
                                        <i class="fas fa-eye"></i> View Case Study
                                    </span>
                                </div>
                            </div>
                            <div className="px-2">
                                <span className="text-xs font-bold text-blue-500 tracking-wider uppercase border border-blue-100 px-3 py-1 rounded-full mb-3 inline-block">Mobile App</span>
                                <h3 className="text-2xl font-bold font-space text-[#0F172A] mb-2 group-hover:text-blue-600 transition-colors">KariGhar</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">On-demand home services platform matching local handymen with customers.</p>
                            </div>
                        </div>

                        {/* Project 5: CureVio */}
                        <div className="group cursor-pointer" onClick={() => openProject('curevio')} data-aos="fade-up" data-aos-delay="500">
                            <div className="rounded-3xl overflow-hidden mb-6 bg-slate-100 aspect-[4/3] relative shadow-sm border border-slate-100">
                                <img src="/zohaib/src/thumbnails/CureVio.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="CureVio" />
                                <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-white text-[#0F172A] px-6 py-2.5 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center gap-2">
                                        <i class="fas fa-eye"></i> View Case Study
                                    </span>
                                </div>
                            </div>
                            <div className="px-2">
                                <span className="text-xs font-bold text-blue-500 tracking-wider uppercase border border-blue-100 px-3 py-1 rounded-full mb-3 inline-block">Healthcare</span>
                                <h3 className="text-2xl font-bold font-space text-[#0F172A] mb-2 group-hover:text-blue-600 transition-colors">CureVio</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Telemedicine application for streamlining diagnostic patient metrics.</p>
                            </div>
                        </div>

                        {/* Project 6: LifeKarts */}
                        <div className="group cursor-pointer" onClick={() => openProject('lifekarts')} data-aos="fade-up" data-aos-delay="600">
                            <div className="rounded-3xl overflow-hidden mb-6 bg-slate-100 aspect-[4/3] relative shadow-sm border border-slate-100">
                                <img src="/zohaib/src/thumbnails/LifeKarts.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="LifeKarts" />
                                <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-white text-[#0F172A] px-6 py-2.5 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center gap-2">
                                        <i class="fas fa-eye"></i> View Case Study
                                    </span>
                                </div>
                            </div>
                            <div className="px-2">
                                <span className="text-xs font-bold text-blue-500 tracking-wider uppercase border border-blue-100 px-3 py-1 rounded-full mb-3 inline-block">UI/UX Design</span>
                                <h3 className="text-2xl font-bold font-space text-[#0F172A] mb-2 group-hover:text-blue-600 transition-colors">LifeKarts</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Medical inventory and digital prescription assistant design on Figma.</p>
                            </div>
                        </div>

                        {/* Project 7: Spoken Buddy */}
                        <div className="group cursor-pointer" onClick={() => openProject('spoken_buddy')} data-aos="fade-up" data-aos-delay="700">
                            <div className="rounded-3xl overflow-hidden mb-6 bg-slate-100 aspect-[4/3] relative shadow-sm border border-slate-100">
                                <img src="/zohaib/src/thumbnails/Spoken buddy.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Spoken Buddy" />
                                <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-white text-[#0F172A] px-6 py-2.5 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center gap-2">
                                        <i class="fas fa-eye"></i> View Case Study
                                    </span>
                                </div>
                            </div>
                            <div className="px-2">
                                <span className="text-xs font-bold text-blue-500 tracking-wider uppercase border border-blue-100 px-3 py-1 rounded-full mb-3 inline-block">Web + Mobile</span>
                                <h3 className="text-2xl font-bold font-space text-[#0F172A] mb-2 group-hover:text-blue-600 transition-colors">Spoken Buddy</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">AI speaking partner that checks fluency and assists ESL students.</p>
                            </div>
                        </div>

                        {/* Project 8: Material Scanner */}
                        <div className="group cursor-pointer" onClick={() => openProject('material_scanner')} data-aos="fade-up" data-aos-delay="800">
                            <div className="rounded-3xl overflow-hidden mb-6 bg-slate-100 aspect-[4/3] relative shadow-sm border border-slate-100">
                                <img src="/zohaib/src/thumbnails/Material Scanner.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Material Scanner" />
                                <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-white text-[#0F172A] px-6 py-2.5 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center gap-2">
                                        <i class="fas fa-eye"></i> View Case Study
                                    </span>
                                </div>
                            </div>
                            <div className="px-2">
                                <span className="text-xs font-bold text-blue-500 tracking-wider uppercase border border-blue-100 px-3 py-1 rounded-full mb-3 inline-block">Mobile App</span>
                                <h3 className="text-2xl font-bold font-space text-[#0F172A] mb-2 group-hover:text-blue-600 transition-colors">Material Scanner</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">A fast scanning workspace tool featuring auto-clipping & filters.</p>
                            </div>
                        </div>

                        {/* Project 9: Krixsen */}
                        <div className="group cursor-pointer" onClick={() => openProject('web_projects')} data-aos="fade-up" data-aos-delay="900">
                            <div className="rounded-3xl overflow-hidden mb-6 bg-slate-100 aspect-[4/3] relative shadow-sm border border-slate-100">
                                <img src="/zohaib/src/thumbnails/Websites.png" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Krixsen Web Portal" />
                                <div className="absolute inset-0 bg-[#0F172A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="bg-white text-[#0F172A] px-6 py-2.5 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg flex items-center gap-2">
                                        <i class="fas fa-eye"></i> View Case Study
                                    </span>
                                </div>
                            </div>
                            <div className="px-2">
                                <span className="text-xs font-bold text-blue-500 tracking-wider uppercase border border-blue-100 px-3 py-1 rounded-full mb-3 inline-block">Web Platform</span>
                                <h3 className="text-2xl font-bold font-space text-[#0F172A] mb-2 group-hover:text-blue-600 transition-colors">Krixsen Portal</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">Corporate website portals and specialized systems for coworking spaces.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience / Foundations Info */}
            <section id="about" className="py-24 px-6 bg-[#F8FAFC]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 pb-12">
                    <div className="lg:col-span-8" data-aos="fade-right">
                        <h2 className="text-5xl font-space font-bold text-[#0F172A] mb-12 italic">Foundations_</h2>
                        
                        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent pt-4">
                            
                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-300 hover:scale-110"></div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-xl text-[#0F172A]">Lab Instructor</h3>
                                        <span className="text-xs font-medium text-slate-400">Sep 2024 - Current</span>
                                    </div>
                                    <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">Capital University of Science & Technology</h4>
                                    <p className="text-slate-500 text-sm">Providing hands-on guidance in core CS subjects: instructed Data Structures (C++) and Database Labs (SQL, ER Modeling). Mentored students in algorithmic problem-solving.</p>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-300 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-slate-100">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-xl text-[#0F172A]">Software Engineer Intern</h3>
                                        <span className="text-xs font-medium text-slate-400">Mar 2023 - Jul 2024</span>
                                    </div>
                                    <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">Bitoreal Pvt. Ltd.</h4>
                                    <p className="text-slate-500 text-sm">Developed reliable and user-friendly software solutions with a focus on code quality. Worked on Web Application Development using frameworks like Flutter and JavaScript.</p>
                                </div>
                            </div>

                            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-slate-300 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white shadow-sm border border-slate-100">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-xl text-[#0F172A]">Wordpress Developer</h3>
                                        <span className="text-xs font-medium text-slate-400">Sep 2021 - Dec 2022</span>
                                    </div>
                                    <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">Krixsen Pvt. Ltd.</h4>
                                    <p className="text-slate-500 text-sm">Created the main Krixsen website and designed a co-working space portal. Implemented notification systems for scheduling and admin tasks.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Toolkit / Education */}
                    <div className="lg:col-span-4 space-y-8" data-aos="fade-left" data-aos-delay="200">
                        <div className="bg-[#0F172A] rounded-[2rem] p-8 text-white">
                            <h3 className="text-2xl font-bold font-space mb-6">Toolkit</h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10 hover:bg-white/20 transition-colors cursor-default">Flutter</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10 hover:bg-white/20 transition-colors cursor-default">iOS (Swift)</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10 hover:bg-white/20 transition-colors cursor-default">Android (Kotlin)</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10 hover:bg-white/20 transition-colors cursor-default">React / HTML / CSS / JS</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10 hover:bg-white/20 transition-colors cursor-default">NodeJS / Express</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10 hover:bg-white/20 transition-colors cursor-default">UI/UX Design</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10 hover:bg-white/20 transition-colors cursor-default">Figma</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10 hover:bg-white/20 transition-colors cursor-default">Firebase</span>
                                <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10 hover:bg-white/20 transition-colors cursor-default">C++ / Java / Python</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                            <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-2">Education</h4>
                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="text-xl font-bold text-[#0F172A] mb-1">BS Software Engineering</h3>
                                    <p className="text-slate-500 text-sm">Capital University Of Science & Technology</p>
                                    <p className="text-slate-400 text-xs mt-1">2020 – 2024</p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-3xl font-bold text-blue-500 font-space">3.92</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">CGPA</span>
                                </div>
                            </div>
                        </div>

                        {/* Certifications Block */}
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                            <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-4">Certifications</h4>
                            <div className="space-y-4">
                                <div className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                                    <div className="flex justify-between items-start">
                                        <h5 className="text-sm font-bold text-[#0F172A]">Hackathon ExcITe Cup</h5>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase">2023</span>
                                    </div>
                                    <p className="text-slate-500 text-xs mt-0.5">Capital University of Science & Technology</p>
                                </div>
                                <div className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                                    <div className="flex justify-between items-start">
                                        <h5 className="text-sm font-bold text-[#0F172A]">2022 ICPC Asia Topi</h5>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase">2022</span>
                                    </div>
                                    <p className="text-slate-500 text-xs mt-0.5">International Collegiate Programming Contest</p>
                                </div>
                                <div className="border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                                    <div className="flex justify-between items-start">
                                        <h5 className="text-sm font-bold text-[#0F172A]">Frontend Fundamentals</h5>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase">2020</span>
                                    </div>
                                    <p className="text-slate-500 text-xs mt-0.5">Pirple.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Languages Block */}
                        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                            <h4 className="text-xs font-bold text-slate-400 tracking-wider uppercase mb-3">Languages</h4>
                            <div className="flex space-x-6">
                                <div>
                                    <span className="text-sm font-bold text-[#0F172A] block">Urdu</span>
                                    <span className="text-xs text-slate-400 font-medium">Native</span>
                                </div>
                                <div>
                                    <span className="text-sm font-bold text-[#0F172A] block">English</span>
                                    <span className="text-xs text-slate-400 font-medium">Moderate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" className="py-20 px-6">
                <div className="max-w-7xl mx-auto bg-[#0F172A] rounded-[3rem] p-12 lg:p-20 relative overflow-hidden" data-aos="zoom-in">
                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-space font-bold text-white mb-2">Let's start your</h2>
                            <h2 className="text-5xl md:text-7xl font-space font-bold text-blue-500 italic mb-12">next project.</h2>
                            
                            <div className="space-y-4">
                                <a href="mailto:zohaib.ahmed1397@gmail.com" className="flex items-center space-x-4 text-white hover:text-blue-400 transition-colors w-fit group">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                        <i className="far fa-envelope text-xl"></i>
                                    </div>
                                    <span className="text-lg font-medium">zohaib.ahmed1397@gmail.com</span>
                                </a>
                                <a href="tel:+923088877196" className="flex items-center space-x-4 text-white hover:text-blue-400 transition-colors w-fit group">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                        <i className="fas fa-phone-alt"></i>
                                    </div>
                                    <span className="text-lg font-medium">+92 308 8877196</span>
                                </a>
                            </div>
                        </div>

                        <div className="flex space-x-4">
                             <a href="#" className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0F172A] transition-all transform hover:scale-110">
                                <i className="fab fa-github text-2xl"></i>
                            </a>
                            <a href="#" className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#0F172A] transition-all transform hover:scale-110">
                                <i className="fas fa-external-link-alt text-xl"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-8 right-12 z-10">
                        <p className="text-white/40 text-xs font-bold tracking-widest uppercase">Designed for Zohaib Ahmed • 2024</p>
                    </div>
                    
                    {/* Decorative circle */}
                    <div className="absolute -right-64 -top-64 w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none"></div>
                </div>
            </footer>

            {/* Project Details Modal (Behance Style) */}
            {activeProject && (
                <div id="projectModal" className="fixed inset-0 z-[100] overflow-y-auto bg-[#0F172A]/90 backdrop-blur-md transition-all duration-300 flex items-center justify-center" onClick={closeModal}>
                    <div className="min-h-screen px-4 py-8 md:py-12 flex items-center justify-center w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                        {/* Modal Wrapper Card */}
                        <div className="inline-block w-full bg-[#F8FAFC] rounded-[2rem] md:rounded-[3rem] text-left align-middle shadow-2xl overflow-hidden relative my-4">
                            {/* Absolute Close Button */}
                            <button onClick={closeModal} className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/80 text-[#0F172A] hover:bg-[#0F172A] hover:text-white transition-all duration-300 flex items-center justify-center shadow-md">
                                <i className="fas fa-times text-lg"></i>
                            </button>
                            
                            {/* Injected Container */}
                            <div className="overflow-y-auto max-h-[92vh] scroll-smooth">
                                {/* Case Study Header Banner */}
                                <div className={`relative ${activeProject.bannerBg} px-8 py-20 md:py-28 text-white client-header overflow-hidden`}>
                                    <div className="max-w-4xl mx-auto text-center relative z-10">
                                        <span className="px-4 py-1.5 bg-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block backdrop-blur-sm">{activeProject.tag}</span>
                                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-space font-extrabold leading-tight mb-4 tracking-tighter">{activeProject.title}</h1>
                                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">{activeProject.subtitle}</p>
                                    </div>
                                    <div className="absolute -right-32 -bottom-24 w-[400px] h-[400px] rounded-full bg-white/5 blur-2xl"></div>
                                    <div className="absolute -left-32 -top-24 w-[400px] h-[400px] rounded-full bg-black/5 blur-2xl"></div>
                                </div>

                                {/* Section: Context & Mission */}
                                <div className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
                                        <div className="lg:col-span-7">
                                            <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">THE CONTEXT</div>
                                            <h2 className="text-3xl md:text-4xl font-space font-black text-[#0F172A] mb-6 leading-tight">Mission Architect.</h2>
                                            <p className="text-slate-600 text-lg leading-relaxed">{activeProject.intro}</p>
                                        </div>
                                        
                                        <div className="lg:col-span-5 space-y-6">
                                            <div className="bg-red-50/50 border border-red-100 p-6 rounded-2xl relative">
                                                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold shadow-sm">
                                                    <i className="fas fa-times text-xs"></i>
                                                </div>
                                                <div className="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">THE FRICTION</div>
                                                <p className="text-slate-600 text-sm leading-relaxed">{activeProject.friction}</p>
                                            </div>

                                            <div className="bg-emerald-50/50 border border-emerald-100 p-6 rounded-2xl relative">
                                                <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 font-bold shadow-sm">
                                                    <i className="fas fa-check text-xs"></i>
                                                </div>
                                                <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">THE PIVOT</div>
                                                <p className="text-slate-600 text-sm leading-relaxed">{activeProject.pivot}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section: Visual Identity */}
                                    <div className="border-t border-b border-slate-200/60 py-12 mb-16">
                                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                            <div className="lg:col-span-5">
                                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">VISUAL IDENTITY</div>
                                                <h3 className="text-3xl font-space font-bold text-[#0F172A] leading-tight mb-2">DNA of the Interface.</h3>
                                                <p className="text-slate-500 text-sm">Consistent scaling layouts crafted for pixel-perfect screens.</p>
                                                
                                                <div className="mt-6">
                                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Typography Font System</div>
                                                    <div className="text-2xl font-space font-black text-[#0F172A]">{activeProject.fonts}</div>
                                                </div>
                                            </div>

                                            <div className="lg:col-span-7 flex flex-wrap gap-4">
                                                {activeProject.colors.map(color => (
                                                    <div key={color.hex} className="flex items-center space-x-3 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
                                                        <div className="w-10 h-10 rounded-xl shadow-inner border border-black/5" style={{ backgroundColor: color.hex }}></div>
                                                        <div>
                                                            <div className="text-xs font-bold font-space text-slate-800">{color.hex}</div>
                                                            <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{color.label}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Section: Visual Mockups List */}
                                    <div className="space-y-12 mb-16">
                                        <div className="text-center mb-8">
                                            <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">THE VISUALS</div>
                                            <h3 className="text-3xl md:text-4xl font-space font-black text-[#0F172A]">Crafted User Experience.</h3>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 gap-8">
                                            {activeProject.images.map((img, index) => (
                                                <div key={index} className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                                                    <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
                                                        <div className="w-full md:w-1/2 lg:w-3/5 flex-shrink-0">
                                                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">SCREEN 0{index + 1}</div>
                                                            <div className="w-full overflow-hidden rounded-2xl bg-[#0F172A]/5 p-2">
                                                                <img src={`/zohaib/${img.src}`} alt={img.title} className="w-full h-auto max-h-[75vh] object-contain rounded-xl hover:scale-[1.01] transition-transform duration-500" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80'; }} />
                                                            </div>
                                                        </div>
                                                        <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center py-4">
                                                            <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">SCREEN BREAKDOWN</div>
                                                            <h4 className="text-xl md:text-2xl font-space font-bold text-[#0F172A] mb-4 leading-tight">{img.title}</h4>
                                                            <p className="text-slate-500 text-sm leading-relaxed">{img.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Section: Measured Success */}
                                    <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden">
                                        <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-blue-50/40 blur-2xl"></div>
                                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                            <div className="lg:col-span-5">
                                                <div className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">THE IMPACT</div>
                                                <h3 className="text-3xl md:text-4xl font-space font-bold text-[#0F172A] leading-tight">Measured Success.</h3>
                                                <p className="text-slate-500 text-sm mt-2 leading-relaxed">Quantifiable feedback highlighting architectural quality and platform engineering results.</p>
                                            </div>

                                            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {activeProject.metrics.map((metric, index) => (
                                                    <div key={index} className="p-6 bg-[#0F172A] rounded-2xl text-white shadow-md border border-white/5 hover:scale-105 transition-all">
                                                        <div className="text-2xl md:text-3xl font-black font-space text-blue-400 mb-1">{metric.title}</div>
                                                        <div className="text-xs font-semibold text-slate-300 leading-snug">{metric.desc}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Case Study Conclusion Button */}
                                    <div className="text-center mt-16 pb-4">
                                        <button onClick={closeModal} className="bg-[#0F172A] text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg">
                                            Close Case Study
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
