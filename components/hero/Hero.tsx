/* components/hero/Hero.tsx */
"use client";
import { useState } from "react";
import { useLang } from "@/lib/LangContext";
import { Icon } from "@/components/ui/Primitives";

export default function Hero() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const email = "contact@audric-fullhardt.fr";
  const copy = () => {
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <section className="container-x" style={{ paddingTop: 80, paddingBottom: 56 }}>
      <div className="mono flex items-center gap-2 mb-6" style={{ fontSize: 11, color: "var(--subtle)" }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 10px var(--accent)" }} />
        <span>~/audric-fullhardt</span>
        <span style={{ opacity: 0.4 }}>— {new Date().getFullYear()}</span>
      </div>
      <div className="grid gap-7 items-start" style={{ gridTemplateColumns: "minmax(0,1fr) 300px" }}>
        <div className="flex gap-7 items-center flex-wrap">
          <div className="shimmer-border relative flex-shrink-0" style={{ width: 168, height: 168, borderRadius: 24, overflow: "hidden", border: "1px solid var(--border-strong)", background: "linear-gradient(135deg, oklch(0.22 0 0), oklch(0.16 0 0))" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 20%, oklch(0.78 0.17 162 / 0.15), transparent 60%)" }} />
            <img src="/avatar2.png" alt="Audric Fullhardt" style={{ position: "relative", zIndex: 1, width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div className="flex-1" style={{ minWidth: 260 }}>
            <h1 style={{ fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 600, margin: 0, letterSpacing: "-0.035em", lineHeight: 0.95 }}>
              Audric<span style={{ color: "var(--accent)" }}>.</span>
            </h1>
            <p style={{ fontSize: "clamp(18px, 2vw, 22px)", color: "var(--accent)", margin: "10px 0 0 0", fontWeight: 500 }}>{t.role}</p>
            <div className="flex gap-2.5 flex-wrap mt-4">
              <div className="inline-flex items-center gap-2.5" style={{ padding: "8px 14px", borderRadius: 999, background: "var(--accent-soft)", border: "1px solid var(--accent-ring)" }}>
                <span style={{ position: "relative", display: "inline-flex", width: 9, height: 9 }}>
                  <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--accent)", animation: "pulse-ring 2s ease-in-out infinite" }} />
                  <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "var(--accent)" }} />
                </span>
                <span className="mono" style={{ fontSize: 12, color: "var(--accent)" }}>{t.available}</span>
              </div>
              <div className="mono inline-flex items-center gap-2" style={{ padding: "8px 14px", borderRadius: 999, background: "oklch(1 0 0 / 0.04)", border: "1px solid var(--border)", fontSize: 12, color: "var(--muted)" }}>
                <Icon.Dot width="8" height="8" style={{ color: "var(--accent-2)" }} />
                France · FR / EN
              </div>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: 16 }}>
          <div className="flex justify-between items-center mb-3">
            <h3 style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>{t.contactMe}</h3>
            <span className="mono" style={{ fontSize: 10, color: "var(--subtle)" }}>/03</span>
          </div>
          <div className="flex flex-col gap-1">
            <ContactRow icon="Mail" label="E-mail" sub={email} onClick={copy} copied={copied} primary tCopy={t.copyEmail} tCopied={t.copied} />
            <ContactRow icon="Github" label="GitHub" sub="@audricfullhardt" href="https://github.com/audricfullhardt" />
            <ContactRow icon="Linkedin" label="LinkedIn" sub="Audric Fullhardt" href="https://www.linkedin.com/in/audric-fullhardt/" accent2 />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, sub, href, onClick, copied, primary, accent2, tCopy, tCopied }: {
  icon: keyof typeof Icon; label: string; sub: string; href?: string;
  onClick?: () => void; copied?: boolean; primary?: boolean; accent2?: boolean;
  tCopy?: string; tCopied?: string;
}) {
  const I = Icon[icon];
  const baseStyle: React.CSSProperties = { display: "flex", alignItems: "center", gap: 10, padding: 8, borderRadius: 8, textDecoration: "none", color: "inherit", cursor: "pointer", transition: "background 0.2s" };
  const content = (
    <>
      <div style={{ width: 34, height: 34, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", background: primary ? "var(--accent-soft)" : accent2 ? "var(--accent-2-soft)" : "oklch(1 0 0 / 0.05)", border: `1px solid ${primary ? "var(--accent-ring)" : accent2 ? "var(--accent-2-ring)" : "var(--border)"}`, color: primary ? "var(--accent)" : accent2 ? "var(--accent-2)" : "var(--muted)", flexShrink: 0 }}>
        <I width="15" height="15" />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 13, fontWeight: 500 }}>{label}</div>
        <div className="mono" style={{ fontSize: 11, color: "var(--subtle)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{sub}</div>
      </div>
      {onClick && (
        <span className="mono" style={{ fontSize: 10, padding: "3px 7px", borderRadius: 6, color: copied ? "var(--accent)" : "var(--subtle)", border: `1px solid ${copied ? "var(--accent-ring)" : "var(--border)"}`, transition: "all 0.2s" }}>
          {copied ? tCopied : tCopy}
        </span>
      )}
    </>
  );
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" style={baseStyle}>{content}</a>;
  return <div style={baseStyle} onClick={onClick}>{content}</div>;
}
