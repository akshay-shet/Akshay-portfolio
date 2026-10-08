"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TimelineType = "work" | "edu";

interface TLItem {
  type: TimelineType;
  side: "left" | "right";
  category: string;
  role: string;
  org: string;
  date: string;
  desc: string;
  emoji: string;
}

const items: TLItem[] = [
  {
    type: "edu",
    side: "left",
    category: "Education",
    emoji: "🎓",
    role: "B.E. Computer Science & Engineering",
    org: "Vivekananda Institute of Technology (VTU)",
    date: "2022 — 2026",
    desc: "Graduated with a CGPA of 8.05. Focused on AI/ML, software engineering, Android development, and FinTech systems. Active project builder across multiple domains.",
  },
  {
    type: "work",
    side: "right",
    category: "Internship",
    emoji: "💼",
    role: "AI-Based Android App Developer",
    org: "Lemonview — AICLAB, South Korea 🌏",
    date: "Jan 2026 — Jul 2026 · International",
    desc: "International internship working on AI-powered Android application development for AICLAB, South Korea. Contributed to the Lemonview App — recognized via a formal client reference letter from AICLAB CEO.",
  },
  {
    type: "work",
    side: "left",
    category: "Internship",
    emoji: "💼",
    role: "Java Full Stack Developer",
    org: "Covalence Global Private Limited",
    date: "2025 · Full Stack",
    desc: "Java Full Stack internship covering JSP, Servlets, REST APIs, and backend application architecture. Built complete CRUD-based application workflows from dev through integration.",
  },
  {
    type: "work",
    side: "right",
    category: "Internship",
    emoji: "💼",
    role: "Python Full Stack Developer",
    org: "Pentagon Space",
    date: "2025 · Python & Web",
    desc: "Built web applications and backend services with Python. Gained certification and hands-on experience in Python full-stack development and deployment.",
  },
];

const filters: { label: string; value: "all" | TimelineType }[] = [
  { label: "All", value: "all" },
  { label: "Work Experience", value: "work" },
  { label: "Education", value: "edu" },
];

export default function Experience() {
  const [filter, setFilter] = useState<"all" | TimelineType>("all");

  const visible = filter === "all" ? items : items.filter((i) => i.type === filter);

  return (
    <div
      id="experience"
      style={{
        width: "100%",
        padding: "100px 0",
        background: "linear-gradient(180deg, var(--bg) 0%, rgba(196,0,36,0.02) 50%, var(--bg) 100%)",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px" }}>
        <div className="section-label">03 / Journey</div>
        <h2 className="section-title">
          EXPERIENCE &amp;<br />EDUCATION
        </h2>

        {/* Filter pills */}
        <div style={{ display: "flex", gap: 12, marginBottom: 60, flexWrap: "wrap" }}>
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "8px 20px",
                border: `1px solid ${filter === f.value ? "var(--accent)" : "rgba(196,0,36,0.3)"}`,
                background: filter === f.value ? "rgba(196,0,36,0.15)" : "transparent",
                color: filter === f.value ? "var(--text)" : "var(--muted)",
                transition: "all 0.25s",
              }}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div style={{ position: "relative", padding: "20px 0" }}>
          {/* Spine */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 1,
              background: "linear-gradient(180deg, transparent, rgba(196,0,36,0.5) 10%, rgba(196,0,36,0.7) 50%, rgba(196,0,36,0.5) 90%, transparent)",
              transform: "translateX(-50%)",
            }}
          />

          <AnimatePresence mode="popLayout">
            {visible.map((item, idx) => (
              <motion.div
                key={item.role}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 60px 1fr",
                  alignItems: "flex-start",
                  marginBottom: 56,
                }}
              >
                {/* Left content or empty */}
                {item.side === "left" ? (
                  <TLCard item={item} align="right" />
                ) : (
                  <div />
                )}

                {/* Node */}
                <div style={{ display: "flex", justifyContent: "center", paddingTop: 6, position: "relative", zIndex: 1 }}>
                  <div
                    className="tl-dot-pulse"
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      border: "2px solid var(--accent)",
                      background: "var(--bg)",
                      position: "relative",
                    }}
                  />
                </div>

                {/* Right content or empty */}
                {item.side === "right" ? (
                  <TLCard item={item} align="left" />
                ) : (
                  <div />
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function TLCard({ item, align }: { item: TLItem; align: "left" | "right" }) {
  return (
    <motion.div
      whileHover={{ borderColor: "rgba(196,0,36,0.5)", boxShadow: "0 0 30px rgba(196,0,36,0.1)" }}
      style={{
        background: "var(--surface)",
        border: "1px solid rgba(196,0,36,0.18)",
        padding: "22px 26px",
        textAlign: align,
        transition: "border-color 0.3s, box-shadow 0.3s",
      }}
    >
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 6 }}>
        {item.emoji} {item.category}
      </div>
      <div style={{ fontFamily: "var(--font-syne)", fontSize: "1.05rem", fontWeight: 700, marginBottom: 4 }}>
        {item.role}
      </div>
      <div style={{ fontSize: "0.82rem", color: "var(--accent-bright)", marginBottom: 6 }}>{item.org}</div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--muted)", letterSpacing: "0.08em", marginBottom: 10 }}>
        {item.date}
      </div>
      <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.6 }}>{item.desc}</p>
    </motion.div>
  );
}
