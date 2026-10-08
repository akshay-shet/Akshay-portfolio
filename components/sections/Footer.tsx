"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(196,0,36,0.12)",
        padding: "28px 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.72rem",
          color: "var(--muted)",
        }}
      >
        © 2026 Akshay S — Crafted with ♥ &amp; Code
      </div>
      <div style={{ display: "flex", gap: 24 }}>
        {[
          { label: "LinkedIn", href: "https://linkedin.com/in/akshay-s-5339582a3" },
          { label: "GitHub", href: "https://github.com/akshay-shet/akshay-shet.git" },
          { label: "Email", href: "mailto:a2k4sv@gmail.com" },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--muted)",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-bright)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
