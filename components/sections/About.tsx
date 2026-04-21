"use client";
import { useLang } from "@/lib/LangContext";
import { StatCounter } from "@/components/ui/Primitives";

export default function About() {
  const { t } = useLang();
  return (
    <section className="container-x" style={{ paddingTop: 56, paddingBottom: 56 }}>
      <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        <div className="card" style={{ padding: 28, gridColumn: "span 2", minWidth: 0 }}>
          <div className="section-header"><span className="kicker mono">01 — {t.aboutKicker}</span></div>
          <h2 style={{ fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 500, margin: 0, lineHeight: 1.2, letterSpacing: "-0.02em", textWrap: "balance" } as React.CSSProperties}>
            {t.aboutTitle}
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", lineHeight: 1.6, marginTop: 16, maxWidth: 620, textWrap: "pretty" } as React.CSSProperties}>
            {t.aboutBody}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3" style={{ minWidth: 0 }}>
          <Stat value={3} suffix="+" label={t.statsYears} />
          <Stat value={15} suffix="+" label={t.statsProjects} accent2 />
          <Stat value={20} label={t.statsTech} />
          <Stat value={87} label={t.statsCoffee} accent2 />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label, accent2 }: { value: number; suffix?: string; label: string; accent2?: boolean }) {
  return (
    <div className="card" style={{ padding: "20px 18px" }}>
      <div className="mono" style={{ fontSize: "clamp(30px, 4vw, 40px)", fontWeight: 600, letterSpacing: "-0.03em", color: accent2 ? "var(--accent-2)" : "var(--accent)", lineHeight: 1 }}>
        <StatCounter to={value} suffix={suffix || ""} />
      </div>
      <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 10 }}>{label}</div>
    </div>
  );
}
