/* components/projects/ProjectsList.tsx
   Layout LISTE — un projet par rangée, effet éditorial */
"use client";
import { useState } from "react";
import { Project } from "@/lib/types";
import { PROJECTS } from "@/lib/data";
import { Icon } from "@/components/ui/Primitives";
import { useLang } from "@/lib/LangContext";

export default function ProjectsList({ onOpen }: { onOpen: (p: Project) => void }) {
  const { lang, t } = useLang();
  return (
    <section className="container-x" style={{ paddingTop: 56, paddingBottom: 56 }}>
      <div className="section-header">
        <span className="kicker mono">03 — {t.projectsKicker}</span>
        <h2>{t.projectsTitle}</h2>
        <div className="rule" />
      </div>
      <p className="mono" style={{ color: "var(--muted)", fontSize: 13, marginTop: -8, marginBottom: 24 }}>{t.projectsNote}</p>
      <div>
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.id} p={p} lang={lang} onOpen={onOpen} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({ p, lang, onOpen, index }: { p: Project; lang: "fr" | "en"; onOpen: (p: Project) => void; index: number }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      onClick={() => onOpen(p)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="grid items-center cursor-pointer"
      style={{
        gridTemplateColumns: "60px 1fr auto",
        gap: 24,
        padding: "24px 8px",
        borderBottom: "1px solid var(--border)",
        transition: "padding 0.25s ease, background 0.25s ease",
        paddingLeft: hover ? 20 : 8,
        background: hover ? "oklch(1 0 0 / 0.02)" : "transparent",
      }}
    >
      <div className="mono" style={{ fontSize: 12, color: "var(--subtle)" }}>{String(index + 1).padStart(2, "0")}</div>
      <div style={{ minWidth: 0 }}>
        <div className="flex items-baseline gap-3.5 flex-wrap mb-1.5">
          <h4 style={{ fontSize: "clamp(20px, 2.4vw, 28px)", fontWeight: 600, margin: 0, letterSpacing: "-0.015em", color: hover ? "var(--accent)" : "var(--fg)", transition: "color 0.2s" }}>{p.title}</h4>
          <span className="mono" style={{ fontSize: 11, color: "var(--subtle)" }}>{p.category} · {p.year}</span>
        </div>
        <p style={{ color: "var(--muted)", fontSize: 14, margin: "0 0 10px 0", maxWidth: 620, lineHeight: 1.5, textWrap: "pretty" } as React.CSSProperties}>
          {p.tagline[lang]}
        </p>
        <div className="flex gap-1.5 flex-wrap">
          {p.technologies.map(tech => <span key={tech} className="chip" style={{ padding: "2px 7px", fontSize: 10 }}>{tech}</span>)}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, color: hover ? "var(--accent)" : "var(--subtle)", transition: "color 0.2s, transform 0.25s", transform: hover ? "translateX(4px)" : "translateX(0)" }}>
        <Icon.Arrow width="22" height="22" />
      </div>
    </article>
  );
}
