"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

const links = [
  { icon: <Mail size={16} />, label: "Email", value: "a2k4sv@gmail.com", href: "mailto:a2k4sv@gmail.com" },
  { icon: <Phone size={16} />, label: "Phone", value: "+91 9019516846", href: "tel:9019516846" },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/akshay-s-5339582a3",
    href: "https://linkedin.com/in/akshay-s-5339582a3",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/akshay-shet",
    href: "https://github.com/akshay-shet/akshay-shet.git",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div
      id="contact"
      style={{
        width: "100%",
        padding: "100px 0",
        background: "linear-gradient(180deg, var(--bg), rgba(196,0,36,0.03) 50%, var(--bg))",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px" }}>
        <div className="section-label">06 / Contact</div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "flex-start" }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              style={{
                fontFamily: "var(--font-oswald)",
                fontSize: "clamp(2.5rem, 5vw, 5rem)",
                fontWeight: 700,
                lineHeight: 0.9,
                marginBottom: 24,
              }}
            >
              LET&apos;S<br />BUILD<br />
              <span style={{ color: "var(--accent-bright)" }}>SOMETHING.</span>
            </h2>
            <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7, maxWidth: 380, marginBottom: 36 }}>
              Whether it&apos;s an AI application, a full-stack platform, or an Android solution —
              I&apos;m open to roles, collaborations, and exciting projects. Let&apos;s connect.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {links.map((l) => (
                <motion.a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  whileHover={{ x: 8, borderColor: "rgba(196,0,36,0.5)", background: "rgba(196,0,36,0.08)" }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "14px 18px",
                    border: "1px solid rgba(196,0,36,0.2)",
                    background: "rgba(196,0,36,0.03)",
                    transition: "all 0.3s",
                  }}
                >
                  <span style={{ color: "var(--accent-bright)" }}>{l.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.85rem" }}>{l.value}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)" }}>{l.label}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Your Name", type: "text", placeholder: "John Doe" },
                { label: "Your Email", type: "email", placeholder: "john@company.com" },
                { label: "Subject", type: "text", placeholder: "Collaboration / Job Opportunity" },
              ].map((field) => (
                <div key={field.label} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
                    {field.label}
                  </label>
                  <input type={field.type} placeholder={field.placeholder} required={field.type === "email"} className="form-input" />
                </div>
              ))}

              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <label style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)" }}>
                  Message
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn-primary"
                style={{ alignSelf: "flex-start", background: sent ? "#20bf6b" : undefined }}
                whileTap={{ scale: 0.97 }}
              >
                {sent ? "Message Sent ✓" : (<><Send size={14} /> Send Message</>)}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
