"use client";
import { useEffect } from "react";
import { Project } from "@/lib/types";
import { Icon } from "@/components/ui/Primitives";
import { useLang } from "@/lib/LangContext";

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { lang, t } = useLang();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [project, onClose]);

  if (!project) return null;
  const p = project;
  return (
    <div className={"modal-backdrop " + (p ? "open" : "")} onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-start gap-3 mb-4">
          <div>
            <span className="mono" style={{ fontSize: 11, color: "var(--subtle)", letterSpacing: "0.08em" }}>{p.category.toUpperCase()} · {p.year}</span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", fontWeight: 600, margin: "4px 0 6px", letterSpacing: "-0.02em" }}>{p.title}</h2>
            <p className="mono" style={{ fontSize: 14, color: "var(--accent)", margin: 0 }}>{p.tagline[lang]}</p>
          </div>
          <button onClick={onClose} className="btn btn-icon" aria-label={t.close}><Icon.Close width="14" height="14" /></button>
        </div>
        {p.pictures && p.pictures.length > 0 && (
          <div className="grid gap-2.5 mb-5" style={{ gridTemplateColumns: `repeat(${Math.min(p.pictures.length, 2)}, 1fr)` }}>
            {p.pictures.slice(0, 2).map((src, i) => (
              <img key={i} src={src} alt={p.title + " " + i} style={{ width: "100%", borderRadius: 10, border: "1px solid var(--border)" }} />
            ))}
          </div>
        )}
        <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.6, margin: "0 0 22px 0", textWrap: "pretty" } as React.CSSProperties}>{p.description[lang]}</p>

        {p.features && (
          <div className="mb-5">
            <div className="mono" style={{ fontSize: 11, color: "var(--subtle)", letterSpacing: "0.08em", marginBottom: 10, textTransform: "uppercase" }}>{t.features}</div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {p.features[lang].map((f, i) => (
                <li key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14 }}>
                  <Icon.Check width="14" height="14" style={{ color: "var(--accent)", marginTop: 3, flexShrink: 0 }} />
                  <span style={{ color: "var(--muted)" }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mb-5">
          <div className="mono" style={{ fontSize: 11, color: "var(--subtle)", letterSpacing: "0.08em", marginBottom: 10, textTransform: "uppercase" }}>{t.technologies}</div>
          <div className="flex gap-1.5 flex-wrap">
            {p.technologies.map(tech => <span key={tech} className="chip">{tech}</span>)}
          </div>
        </div>

        <div className="flex gap-2.5 flex-wrap">
          {p.demo && <a className="btn btn-primary" href={p.demo} target="_blank" rel="noreferrer"><Icon.Arrow width="14" height="14" />{t.viewDemo}</a>}
          {p.github && <a className="btn" href={p.github} target="_blank" rel="noreferrer"><Icon.Github width="14" height="14" />{t.viewCode}</a>}
        </div>
      </div>
    </div>
  );
}
