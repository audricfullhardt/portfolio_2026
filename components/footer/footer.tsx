"use client";

export default function Footer() {
    return (
        <footer className="text-white">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <p className="text-sm text-white/50 text-center">
                        &copy; {new Date().getFullYear()} Audric Fullhardt. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    )
}