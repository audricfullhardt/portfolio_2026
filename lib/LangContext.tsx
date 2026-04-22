"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { I18N, Lang, Dict } from "./i18n";

const Ctx = createContext<{ lang: Lang; t: Dict; setLang: (l: Lang) => void }>({
  lang: "fr",
  t: I18N.fr,
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");
  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang) || "fr";
    setLangState(saved);
    document.documentElement.lang = saved;
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  };
  return <Ctx.Provider value={{ lang, t: I18N[lang], setLang }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);

export function LangSwitch() {
  const { lang, setLang } = useLang();
  return (
    <div
      className="fixed top-5 right-5 z-40 flex rounded-full border p-[3px] backdrop-blur-md"
      style={{
        background: "oklch(0.18 0 0 / 0.8)",
        borderColor: "var(--border)",
        fontFamily: "var(--font-geist-mono), monospace",
        fontSize: 11,
      }}
    >
      {(["fr", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className="px-3 py-[5px] rounded-full border-0 cursor-pointer transition-all"
          style={{
            background: lang === l ? "var(--accent-soft)" : "transparent",
            color: lang === l ? "var(--accent)" : "var(--muted)",
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
