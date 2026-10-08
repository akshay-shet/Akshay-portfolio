"use client";

import { motion } from "framer-motion";

const certs = [
  { icon: "🤖", name: "Google AI Essentials", issuer: "Google — AI Fundamentals Certification" },
  { icon: "📜", name: "NPTEL Certifications", issuer: "NPTEL — IIT Courses" },
  { icon: "🧠", name: "AI / ML Training", issuer: "Machine Learning & Deep Learning Specialization" },
  { icon: "🐍", name: "Python Full Stack Certification", issuer: "Pentagon Space — Full Stack Python" },
  { icon: "🌏", name: "International Internship Completion", issuer: "AICLAB, South Korea — Lemonview App" },
];

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "100px 60px", maxWidth: 1400, margin: "0 auto" }}>
      <div className="section-label">05 / Credentials</div>
      <h2 className="section-title">CERTIFICATIONS</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {certs.map((cert, i) => (
          <motion.div
            key={cert.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ borderColor: "rgba(196,0,36,0.5)", boxShadow: "0 0 25px rgba(196,0,36,0.1)", x: 4 }}
            style={{
              background: "var(--surface)",
              border: "1px solid rgba(196,0,36,0.18)",
              padding: "22px 24px",
              display: "flex",
              alignItems: "flex-start",
              gap: 16,
              transition: "all 0.3s",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                border: "1px solid rgba(196,0,36,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                fontSize: "1.2rem",
              }}
            >
              {cert.icon}
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-syne)", fontSize: "0.95rem", fontWeight: 700, marginBottom: 4 }}>
                {cert.name}
              </div>
              <div style={{ fontSize: "0.73rem", color: "var(--muted)" }}>{cert.issuer}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
