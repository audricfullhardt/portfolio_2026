"use client";
import { useLang } from "@/lib/LangContext";
import { Icon, Magnetic } from "@/components/ui/Primitives";

export default function CTA() {
  const { t } = useLang();
  const email = "contact@audric-fullhardt.fr";
  return (
    <section className="container-x" style={{ paddingTop: 56, paddingBottom: 56 }}>
      <div className="card shimmer-border" style={{
        padding: "clamp(32px, 5vw, 56px)",
        position: "relative", overflow: "hidden", textAlign: "center",
        background: "radial-gradient(ellipse at top, oklch(0.78 0.17 162 / 0.06), transparent 60%), var(--card)"
      }}>
        <div className="kicker mono" style={{ color: "var(--accent)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>05 — {t.cta}</div>
        <h2 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 600, margin: "16px auto 16px", letterSpacing: "-0.03em", maxWidth: 700, textWrap: "balance", lineHeight: 1.05 } as React.CSSProperties}>
          {t.cta}
        </h2>
        <p style={{ color: "var(--muted)", maxWidth: 520, margin: "0 auto 28px", lineHeight: 1.6, textWrap: "pretty" } as React.CSSProperties}>{t.ctaBody}</p>
        <div className="flex gap-2.5 justify-center flex-wrap">
          <Magnetic strength={0.25}>
            <a href={`mailto:${email}`} className="btn btn-primary" style={{ padding: "12px 20px", fontSize: 15 }}>
              <Icon.Mail width="16" height="16" />
              {t.sendEmail}
              <Icon.Arrow width="14" height="14" />
            </a>
          </Magnetic>
          <a href="https://www.linkedin.com/in/audric-fullhardt/" target="_blank" rel="noreferrer" className="btn" style={{ padding: "12px 20px", fontSize: 15 }}>
            <Icon.Linkedin width="14" height="14" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
