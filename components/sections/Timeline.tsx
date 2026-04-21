"use client";
import { Badge } from "antd";
import { useLang } from "@/lib/LangContext";
import { TIMELINE } from "@/lib/data";

export default function Timeline() {
  const { lang, t } = useLang();
  const items = TIMELINE[lang];
  return (
    <section className="container-x" style={{ paddingTop: 56, paddingBottom: 56 }}>
      <div className="section-header">
        <span className="kicker mono">04 — {t.timelineKicker}</span>
        <h2>{t.timelineTitle}</h2>
        <div className="rule" />
      </div>
      <div className="card" style={{ padding: "32px 36px" }}>
        <div className="timeline">
          {items.map((it, i) => (
            <div key={i} className={"tl-item " + (it.current ? "current" : "")}>
              <span style={{ position: "absolute", left: -22, top: 7 }}>
                {it.current
                  ? <Badge status="processing" color="oklch(0.78 0.17 162)" />
                  : <Badge color="var(--border)" />
                }
              </span>
              <div className="flex items-baseline gap-3 mb-1.5 flex-wrap">
                <span className="mono" style={{ fontSize: 11, padding: "3px 8px", borderRadius: 4, background: it.current ? "var(--accent-soft)" : "oklch(1 0 0 / 0.05)", color: it.current ? "var(--accent)" : "var(--muted)", border: `1px solid ${it.current ? "var(--accent-ring)" : "var(--border)"}`, letterSpacing: "0.08em" }}>{it.tag}</span>
                <span className="mono" style={{ fontSize: 12, color: "var(--subtle)" }}>{it.year}</span>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>{it.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: 14, margin: "6px 0 0 0", lineHeight: 1.55, maxWidth: 600 }}>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
