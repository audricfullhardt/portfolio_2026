"use client";
import { useLang } from "@/lib/LangContext";
import { Magnetic } from "@/components/ui/Primitives";
import { STACK } from "@/lib/data";

export default function Stack() {
  const { t } = useLang();
  return (
    <section className="container-x" style={{ paddingTop: 56, paddingBottom: 56 }}>
      <div className="section-header">
        <span className="kicker mono">02 — {t.stackKicker}</span>
        <h2>{t.stackTitle}</h2>
        <div className="rule" />
      </div>
      <p className="mono" style={{ color: "var(--muted)", fontSize: 14, marginTop: -8, marginBottom: 24 }}>{t.stackNote}</p>
      <div className="flex flex-wrap gap-2.5">
        {STACK.map((s, i) => (
          <Magnetic key={s.name} strength={0.3}>
            <span className="magnetic-pill">
              <span className="dot" style={{ background: i % 3 === 0 ? "var(--accent)" : i % 3 === 1 ? "var(--accent-2)" : "oklch(1 0 0 / 0.3)" }} />
              {s.name}
            </span>
          </Magnetic>
        ))}
      </div>
    </section>
  );
}
