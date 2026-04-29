import GeneralLayout from '@/Layouts/GeneralLayout';
import { Head } from '@inertiajs/react';

export default function Welcome({ auth }) {
    return (
        <GeneralLayout>
            <Head title="Welcome" />
            
            <div className="relative overflow-hidden min-h-[calc(100vh-80px)] flex flex-col items-center justify-center">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-brand-purple)_0%,_transparent_70%)] opacity-10"></div>
                    <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxwYXRoIGQ9Ik0zMCAwIEw2MCAzMCBMMzAgNjAgTDAgMzAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')", backgroundSize: "60px 60px" }}></div>
                </div>

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Building the <span className="text-brand-purple">Future</span> of Web.
                    </h1>
                    <p className="text-brand-gray text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        We craft premium digital experiences that push the boundaries of design and technology.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="#work" className="px-8 py-3 rounded-full bg-white text-brand-dark font-bold hover:bg-brand-purple hover:text-white transition-all">
                            Explore Work
                        </a>
                        <a href="#studio" className="px-8 py-3 rounded-full border border-white/20 font-bold hover:bg-white/10 transition-all">
                            Our Studio
                        </a>
                    </div>
                </div>
            </div>
        </GeneralLayout>
    );
}
