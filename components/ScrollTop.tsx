"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        zIndex: 500,
        width: 44,
        height: 44,
        border: "1px solid rgba(196,0,36,0.4)",
        background: "rgba(3,3,3,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--accent-bright)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.3s, transform 0.3s",
      }}
    >
      <ArrowUp size={18} />
    </button>
  );
}
