"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Download } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      const sections = document.querySelectorAll("[id]");
      let current = "";
      sections.forEach((s) => {
        if (window.scrollY >= (s as HTMLElement).offsetTop - 120) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "18px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(180deg, rgba(3,3,3,0.96) 0%, transparent 100%)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(196,0,36,0.07)",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ fontFamily: "var(--font-oswald)", fontSize: "1.4rem", fontWeight: 700, letterSpacing: "0.08em" }}>
        Akshay<span style={{ color: "var(--accent-bright)" }}>.</span>
      </Link>

      {/* Desktop links */}
      <ul style={{ display: "flex", gap: 32, listStyle: "none" }} className="hidden md:flex">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              style={{
                fontFamily: "var(--font-space)",
                fontSize: "0.78rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: active === item.href.slice(1) ? "var(--text)" : "var(--muted)",
                transition: "color .3s",
                position: "relative",
                paddingBottom: 4,
              }}
            >
              {item.label}
              {active === item.href.slice(1) && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: "var(--accent)",
                  }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* Resume download */}
      <a
        href="/Updated_Akshay_Resume.pdf"
        download="Updated Akshay Resume.pdf"
        className="btn-outline hidden md:inline-flex"
        style={{ fontSize: "0.72rem", padding: "8px 18px" }}
      >
        <Download size={13} /> Download CV
      </a>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden"
        style={{ background: "none", border: "none", color: "var(--text)", padding: 8 }}
        aria-label="Menu"
      >
        <span style={{ display: "block", width: 22, height: 1.5, background: "var(--text)", marginBottom: 5 }} />
        <span style={{ display: "block", width: 16, height: 1.5, background: "var(--accent)", marginBottom: 5 }} />
        <span style={{ display: "block", width: 22, height: 1.5, background: "var(--text)" }} />
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(3,3,3,0.97)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          <button onClick={() => setMobileOpen(false)} style={{ position: "absolute", top: 20, right: 24, background: "none", border: "none", color: "var(--muted)", fontSize: "1.5rem" }}>✕</button>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{ fontFamily: "var(--font-oswald)", fontSize: "2.5rem", fontWeight: 700, color: "var(--text)", letterSpacing: "0.05em" }}
            >
              {item.label}
            </a>
          ))}
          <a href="/Updated_Akshay_Resume.pdf" download="Updated Akshay Resume.pdf" className="btn-primary">Download CV</a>
        </div>
      )}
    </nav>
  );
}
