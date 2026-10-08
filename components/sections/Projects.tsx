"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface Project {
  num: string;
  repoName: string;
  name: string;
  sub: string;
  desc: string;
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    num: "01",
    repoName: "EcoSkin_Advisor",
    name: "EcoSkin Advisor",
    sub: "AI-Powered Skincare Analysis & Recommendations",
    desc: "Next-gen intelligent skin condition diagnostics utilizing TensorFlow, Computer Vision, and TypeScript. Provides tailored skincare analysis and ingredient advice.",
    tech: ["TypeScript", "Next.js", "TensorFlow", "Computer Vision", "TailwindCSS"],
    github: "https://github.com/akshay-shet/EcoSkin_Advisor",
    live: "https://ecoskinadvisor.vercel.app",
    featured: true,
  },
  {
    num: "02",
    repoName: "Lemonview-Kiosk",
    name: "Lemonview App",
    sub: "Smart Skincare Companion (AICLAB South Korea)",
    desc: "Intelligent skincare analysis Android application designed for kiosk and mobile deployments. Built in Kotlin during an international internship with AICLAB (South Korea).",
    tech: ["Kotlin", "Android SDK", "Computer Vision", "AICLAB", "AI/ML"],
    github: "https://github.com/akshay-shet/Lemonview-Kiosk",
    featured: true,
  },
  {
    num: "03",
    repoName: "Stallion-Stainless",
    name: "Stallion Stainless",
    sub: "Industrial Engineering Web Application",
    desc: "Modern digital catalog and web platform crafted with Next.js, TypeScript, and modern animation architecture for commercial stainless steel manufacturing.",
    tech: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Vercel"],
    github: "https://github.com/akshay-shet/Stallion-Stainless",
    live: "https://stallion-stainless-three.vercel.app",
    featured: true,
  },
  {
    num: "04",
    repoName: "Siddeshwara_Electricals",
    name: "Siddeshwara Electricals",
    sub: "Commercial Catalog & Portfolio Platform",
    desc: "Clean, responsive product showcase and portfolio website built to present electrical contracting capabilities, products, and past client installations.",
    tech: ["TypeScript", "React", "Modern UI", "Vercel", "Web"],
    github: "https://github.com/akshay-shet/Siddeshwara_Electricals",
    live: "https://siddeshwara-electricals.vercel.app",
  },
  {
    num: "05",
    repoName: "YM-Pay",
    name: "YM-Pay",
    sub: "Secure Digital Wallet & Payments Application",
    desc: "Robust FinTech digital wallet featuring secure user authentication, PostgreSQL data persistence, and transaction microservices with REST endpoints.",
    tech: ["Java", "PostgreSQL", "REST APIs", "Auth Security", "FinTech"],
    github: "https://github.com/akshay-shet/akshay-shet",
  },
  {
    num: "06",
    repoName: "Grama-Yatri",
    name: "Grama-Yatri",
    sub: "Community Public Transit Bus Tracker",
    desc: "Real-time location-based Android app connecting rural commuters with bus timings, live GPS telemetry using Firebase and Google Maps APIs.",
    tech: ["Android", "Firebase", "Google Maps", "Real-Time GPS", "Java"],
    github: "https://github.com/akshay-shet/akshay-shet",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 60px", maxWidth: 1400, margin: "0 auto" }}>
      <div className="section-label">04 / Projects &amp; Repositories</div>
      <h2 className="section-title">WHAT I&apos;VE BUILT</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.num} project={p} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project: p, delay }: { project: Project; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) * 6;
    card.style.transform = `translateY(-6px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
    card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
    card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "";
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="card-3d"
      style={{
        background: "var(--surface)",
        border: p.featured ? "1px solid rgba(196,0,36,0.35)" : "1px solid rgba(196,0,36,0.18)",
        padding: 32,
        position: "relative",
        overflow: "hidden",
        touchAction: "pan-y",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Spotlight */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse at var(--mx, 50%) var(--my, 50%), rgba(196,0,36,0.09) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
          <div
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "3.5rem",
              fontWeight: 700,
              color: "rgba(196,0,36,0.15)",
              lineHeight: 1,
            }}
          >
            {p.num}
          </div>

          {/* Repository Tag Badge */}
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem",
              letterSpacing: "0.08em",
              padding: "4px 10px",
              border: "1px solid rgba(196,0,36,0.3)",
              background: "rgba(196,0,36,0.06)",
              color: "var(--accent-bright)",
              borderRadius: "2px",
            }}
          >
            repo: {p.repoName}
          </div>
        </div>

        <div style={{ fontFamily: "var(--font-syne)", fontSize: "1.3rem", fontWeight: 700, marginBottom: 4 }}>
          {p.name}
        </div>
        <div style={{ fontSize: "0.78rem", color: "var(--accent-bright)", letterSpacing: "0.06em", marginBottom: 12 }}>
          {p.sub}
        </div>
        <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6, marginBottom: 20 }}>
          {p.desc}
        </p>
      </div>

      <div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
          {p.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.62rem",
                padding: "3px 10px",
                border: "1px solid rgba(196,0,36,0.25)",
                color: "var(--muted)",
                letterSpacing: "0.06em",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", gap: 16 }}>
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent-bright)",
              display: "flex",
              alignItems: "center",
              gap: 6,
              transition: "color 0.2s",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>{" "}
            GitHub
          </a>
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent-bright)",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
