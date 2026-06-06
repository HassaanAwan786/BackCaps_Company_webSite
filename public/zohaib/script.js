// Initialize Animate On Scroll
AOS.init({
    once: true,
    offset: 100,
    duration: 800,
    easing: 'ease-out-cubic',
});

// Navbar scroll effect — hero is white, always use light pill; add elevation on scroll
window.addEventListener('scroll', () => {
    const pill = document.getElementById('navPill');
    pill.classList.add('nav-pill-scrolled');
    pill.classList.remove('nav-pill-dark');
});

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

// Modal functions
function openProject(id) {
    const data = caseStudies[id];
    if (!data) return;

    const modal = document.getElementById("projectModal");
    const modalBox = document.getElementById("modalBox");
    const container = document.getElementById("modalContent");

    // Build the color swatches HTML
    const swatchesHtml = data.colors.map(color => `
        <div class="flex items-center space-x-3 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
            <div class="w-10 h-10 rounded-xl shadow-inner border border-black/5" style="background-color: ${color.hex}"></div>
            <div>
                <div class="text-xs font-bold font-space text-slate-800">${color.hex}</div>
                <div class="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">${color.label}</div>
            </div>
        </div>
    `).join('');

    // Build the images HTML (Behance layout with text)
    const imagesHtml = data.images.map((img, index) => `
        <div class="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
            <div class="p-6 md:p-8 flex flex-col md:flex-row gap-8 items-start">
                <div class="w-full md:w-1/2 lg:w-3/5 flex-shrink-0">
                    <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">SCREEN 0${index + 1}</div>
                    <div class="w-full overflow-hidden rounded-2xl bg-[#0F172A]/5 p-2">
                        <img src="${img.src}" alt="${img.title}" class="w-full h-auto max-h-[75vh] object-contain rounded-xl hover:scale-[1.01] transition-transform duration-500" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80';">
                    </div>
                </div>
                <div class="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center py-4">
                    <div class="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">SCREEN BREAKDOWN</div>
                    <h4 class="text-xl md:text-2xl font-space font-bold text-[#0F172A] mb-4 leading-tight">${img.title}</h4>
                    <p class="text-slate-500 text-sm leading-relaxed">${img.desc}</p>
                </div>
            </div>
        </div>
    `).join('');

    // Build the metrics HTML
    const metricsHtml = data.metrics.map(metric => `
        <div class="p-6 bg-[#0F172A] rounded-2xl text-white shadow-md border border-white/5 hover:scale-105 transition-all">
            <div class="text-2xl md:text-3xl font-black font-space text-blue-400 mb-1">${metric.title}</div>
            <div class="text-xs font-semibold text-slate-300 leading-snug">${metric.desc}</div>
        </div>
    `).join('');

    // Construct full elegant Behance-style template
    container.innerHTML = `
        <!-- Case Study Header Banner -->
        <div class="relative ${data.bannerBg} px-8 py-20 md:py-28 text-white client-header overflow-hidden">
            <div class="max-w-4xl mx-auto text-center relative z-10">
                <span class="px-4 py-1.5 bg-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block backdrop-blur-sm">${data.tag}</span>
                <h1 class="text-4xl md:text-6xl lg:text-7xl font-space font-extrabold leading-tight mb-4 tracking-tighter">${data.title}</h1>
                <p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium leading-relaxed">${data.subtitle}</p>
            </div>
            <div class="absolute -right-32 -bottom-24 w-[400px] h-[400px] rounded-full bg-white/5 blur-2xl"></div>
            <div class="absolute -left-32 -top-24 w-[400px] h-[400px] rounded-full bg-black/5 blur-2xl"></div>
        </div>

        <!-- Section: Context & Mission -->
        <div class="px-6 md:px-12 py-16 max-w-5xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
                <div class="lg:col-span-7">
                    <div class="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">THE CONTEXT</div>
                    <h2 class="text-3xl md:text-4xl font-space font-black text-[#0F172A] mb-6 leading-tight">Mission Architect.</h2>
                    <p class="text-slate-600 text-lg leading-relaxed">${data.intro}</p>
                </div>
                
                <div class="lg:col-span-5 space-y-6">
                    <div class="bg-red-50/50 border border-red-100 p-6 rounded-2xl relative">
                        <div class="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 font-bold shadow-sm">
                            <i class="fas fa-times text-xs"></i>
                        </div>
                        <div class="text-xs font-bold text-red-500 uppercase tracking-widest mb-1">THE FRICTION</div>
                        <p class="text-slate-600 text-sm leading-relaxed">${data.friction}</p>
                    </div>

                    <div class="bg-emerald-50/50 border border-emerald-100 p-6 rounded-2xl relative">
                        <div class="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 font-bold shadow-sm">
                            <i class="fas fa-check text-xs"></i>
                        </div>
                        <div class="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">THE PIVOT</div>
                        <p class="text-slate-600 text-sm leading-relaxed">${data.pivot}</p>
                    </div>
                </div>
            </div>

            <!-- Section: Visual Identity -->
            <div class="border-t border-b border-slate-200/60 py-12 mb-16">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div class="lg:col-span-5">
                        <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">VISUAL IDENTITY</div>
                        <h3 class="text-3xl font-space font-bold text-[#0F172A] leading-tight mb-2">DNA of the Interface.</h3>
                        <p class="text-slate-500 text-sm">Consistent scaling layouts crafted for pixel-perfect screens.</p>
                        
                        <div class="mt-6">
                            <div class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Typography Font System</div>
                            <div class="text-2xl font-space font-black text-[#0F172A]">${data.fonts}</div>
                        </div>
                    </div>

                    <div class="lg:col-span-7 flex flex-wrap gap-4">
                        ${swatchesHtml}
                    </div>
                </div>
            </div>

            <!-- Section: Visual Mockups List -->
            <div class="space-y-12 mb-16">
                <div class="text-center mb-8">
                    <div class="text-xs font-bold text-blue-500 uppercase tracking-widest mb-1">THE VISUALS</div>
                    <h3 class="text-3xl md:text-4xl font-space font-black text-[#0F172A]">Crafted User Experience.</h3>
                </div>
                
                <div class="grid grid-cols-1 gap-8">
                    ${imagesHtml}
                </div>
            </div>

            <!-- Section: Measured Success -->
            <div class="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden">
                <div class="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-blue-50/40 blur-2xl"></div>
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    <div class="lg:col-span-5">
                        <div class="text-xs font-bold text-blue-500 uppercase tracking-widest mb-2">THE IMPACT</div>
                        <h3 class="text-3xl md:text-4xl font-space font-bold text-[#0F172A] leading-tight">Measured Success.</h3>
                        <p class="text-slate-500 text-sm mt-2 leading-relaxed">Quantifiable feedback highlighting architectural quality and platform engineering results.</p>
                    </div>

                    <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        ${metricsHtml}
                    </div>
                </div>
            </div>

            <!-- Case Study Conclusion Button -->
            <div class="text-center mt-16 pb-4">
                <button onclick="closeModal()" class="bg-[#0F172A] text-white px-8 py-3.5 rounded-full font-bold hover:bg-blue-600 transition-colors shadow-lg">
                    Close Case Study
                </button>
            </div>
        </div>
    `;

    modal.classList.remove("hidden");
    document.body.classList.add("overflow-hidden");

    setTimeout(() => {
        modalBox.classList.remove("scale-95", "opacity-0");
        modalBox.classList.add("scale-100", "opacity-100");
    }, 50);
}

function closeModal() {
    const modal = document.getElementById("projectModal");
    const modalBox = document.getElementById("modalBox");

    modalBox.classList.remove("scale-100", "opacity-100");
    modalBox.classList.add("scale-95", "opacity-0");

    setTimeout(() => {
        modal.classList.add("hidden");
        document.body.classList.remove("overflow-hidden");
    }, 300);
}

document.getElementById("projectModal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("projectModal")) {
        closeModal();
    }
});