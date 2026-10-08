"use client";

import { motion } from "framer-motion";

const skills = [
  {
    label: "// Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "SQL"],
  },
  {
    label: "// Frameworks & Frontend",
    items: ["React", "Next.js", "Node.js", "JSP", "Servlets"],
  },
  {
    label: "// AI / Machine Learning",
    items: ["TensorFlow", "TensorFlow Lite", "Computer Vision", "ML Models"],
  },
  {
    label: "// Databases & APIs",
    items: ["PostgreSQL", "MySQL", "Firebase", "REST APIs"],
  },
  {
    label: "// Tools & DevOps",
    items: ["Git", "VS Code", "Android SDK", "Google Maps API"],
  },
];

export default function About() {
  return (
    <div id="about" style={{ width: "100%", background: "var(--bg)", padding: "100px 0" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px" }}>
        <div className="section-label">02 / About Me</div>
        <h2 className="section-title">WHO I AM</h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          {/* Terminal */}
          <motion.div
            className="terminal-box"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              style={{
                background: "#111",
                padding: "12px 16px",
                display: "flex",
                alignItems: "center",
                gap: 8,
                borderBottom: "1px solid rgba(196,0,36,0.15)",
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#c40024", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#f7b731", display: "inline-block" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#20bf6b", display: "inline-block" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--muted)", marginLeft: "auto" }}>
                akshay@portfolio ~ bio.json
              </span>
            </div>
            <div style={{ padding: 24, fontFamily: "var(--font-mono)", fontSize: "0.8rem", lineHeight: 1.9 }}>
              <div><span style={{ color: "var(--accent-bright)" }}>$ </span><span style={{ color: "#64b5f6" }}>cat</span> bio.json</div>
              <br />
              <div><span style={{ color: "#546e7a" }}>{"{"}</span></div>
              {[
                ["name", "Akshay S"],
                ["role", "AI & Full-Stack Engineer"],
                ["location", "India"],
                ["education", "B.E. CSE, VTU — 8.05 CGPA"],
                ["graduation", "2026"],
                ["email", "a2k4sv@gmail.com"],
                ["phone", "9019516846"],
              ].map(([k, v]) => (
                <div key={k}>
                  &nbsp;&nbsp;<span style={{ color: "#64b5f6" }}>&quot;{k}&quot;</span>:{" "}
                  <span style={{ color: "#a5d6a7" }}>&quot;{v}&quot;</span>,
                </div>
              ))}
              <div>&nbsp;&nbsp;<span style={{ color: "#64b5f6" }}>&quot;interests&quot;</span>: [</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#a5d6a7" }}>&quot;AI/ML&quot;</span>, <span style={{ color: "#a5d6a7" }}>&quot;Computer Vision&quot;</span>,</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: "#a5d6a7" }}>&quot;FinTech&quot;</span>, <span style={{ color: "#a5d6a7" }}>&quot;Android Dev&quot;</span></div>
              <div>&nbsp;&nbsp;],</div>
              <div>&nbsp;&nbsp;<span style={{ color: "#64b5f6" }}>&quot;status&quot;</span>: <span style={{ color: "#20bf6b" }}>&quot;🟢 Open to Opportunities&quot;</span></div>
              <div><span style={{ color: "#546e7a" }}>{"}"}</span></div>
              <br />
              <div><span style={{ color: "var(--accent-bright)" }}>$ </span><span style={{ color: "#546e7a" }}>// Building AI-powered solutions that matter</span></div>
            </div>
          </motion.div>

          {/* Skills + Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {skills.map((cat) => (
              <div key={cat.label}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 10,
                  }}
                >
                  {cat.label}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {cat.items.map((item) => (
                    <span key={item} className="skill-pill">{item}</span>
                  ))}
                </div>
              </div>
            ))}

            <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.7, marginTop: 8 }}>
              Computer Science &amp; Engineering graduate with hands-on experience in Artificial Intelligence,
              Machine Learning, Full Stack Development, Android Development, and FinTech applications.
              Built AI-powered healthcare, digital payment, and real-time tracking solutions using Python, TensorFlow,
              Java, React, Next.js, Firebase, and PostgreSQL. Focused on AI-driven research, analytics, and responsible innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
