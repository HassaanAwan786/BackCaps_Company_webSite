import Header from '@/Components/Header';

export default function GeneralLayout({ children }) {
    return (
        <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-purple/30">
            <Header />
            <main>{children}</main>
        </div>
    );
}
