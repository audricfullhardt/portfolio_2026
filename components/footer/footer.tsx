"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="text-white">
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">

                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-white/50 text-center sm:text-left">
                            &copy; {new Date().getFullYear()} Audric Fullhardt. Tous droits réservés.
                        </p>
                        <p className="flex items-center gap-2 text-sm text-white/50">
                            Fait avec <Heart className="w-4 h-4 text-emerald-400 fill-emerald-400" /> et Next.js
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}