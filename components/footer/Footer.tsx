"use client";
import { useLang } from "@/lib/LangContext";
import { Heart } from "lucide-react";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="container-x" style={{ paddingTop: 32, paddingBottom: 40 }}>
      <div className="flex justify-between items-center flex-wrap gap-3" style={{ padding: "20px 0", borderTop: "1px solid var(--border)" }}>
        <div className="mono" style={{ fontSize: 12, color: "var(--subtle)" }}>
          © {new Date().getFullYear()} Audric Fullhardt. {t.rights}
        </div>
        <div className="mono flex items-center gap-1.5" style={{ fontSize: 12, color: "var(--subtle)" }}>
          {t.madeWith} <Heart className="w-4 h-4 text-emerald-400 fill-emerald-400" /> {t.and} Next.js
        </div>
      </div>
    </footer>
  );
}
