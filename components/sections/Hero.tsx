"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Download, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const metrics = [
  { value: 8.05, suffix: "+", label: "CGPA / VTU" },
  { value: 6, suffix: "+", label: "Live Projects" },
  { value: 3, suffix: "+", label: "Internships" },
  { value: 2026, suffix: "", label: "Graduation" },
];

function useCounter(target: number, duration = 1200) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - t, 3);
            el.textContent = target % 1 !== 0
              ? (ease * target).toFixed(2)
              : String(Math.round(ease * target));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);

  return ref;
}

function MetricCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useCounter(value);
  return (
    <div>
      <div
        style={{
          fontFamily: "var(--font-oswald)",
          fontSize: "2rem",
          fontWeight: 700,
          lineHeight: 1,
          display: "flex",
          alignItems: "baseline",
          gap: 2,
        }}
      >
        <span ref={ref}>0</span>
        <span style={{ color: "var(--accent-bright)", fontSize: "1.5rem" }}>{suffix}</span>
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          color: "var(--muted)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginTop: 4,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        width: "100%",
        maxWidth: "none",
        padding: 0,
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 60% 50%, rgba(196,0,36,0.07) 0%, transparent 70%),
            linear-gradient(to right, rgba(3,3,3,0.98) 35%, rgba(3,3,3,0.55) 100%)
          `,
        }}
      />

      {/* Watermark */}
      <div className="hero-watermark" aria-hidden>
        AKSHAY
      </div>

      {/* Content grid */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 60px",
          maxWidth: 1400,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
          paddingTop: 90,
        }}
        className="hero-grid"
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* OTW badge */}
          <div className="otw-badge">
            <span className="otw-dot" />
            Open to Opportunities
          </div>

          {/* Eyebrow */}
          <div className="section-label" style={{ marginBottom: 20 }}>
            01 / AI &amp; Full-Stack Engineer
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--font-oswald)",
              fontSize: "clamp(4rem, 8vw, 8rem)",
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              marginBottom: 20,
            }}
          >
            <span style={{ display: "block", color: "#fff" }}>BUILDING IDEAS</span>
            <span className="gradient-text" style={{ display: "block" }}>
              INTO EXPERIENCES.
            </span>
          </h1>

          <p
            style={{
              fontSize: "1rem",
              color: "var(--muted)",
              maxWidth: 420,
              lineHeight: 1.7,
              marginBottom: 40,
            }}
          >
            Computer Science graduate specializing in AI/ML, Full Stack Development, and FinTech applications.
            Driven by AI-powered research, data analytics, and responsible innovation.
          </p>

          {/* Metrics */}
          <div style={{ display: "flex", gap: 32, marginBottom: 48, flexWrap: "wrap" }}>
            {metrics.map((m) => (
              <MetricCounter key={m.label} {...m} />
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="#projects" className="btn-primary">
              Explore Work <ArrowRight size={15} />
            </a>
            <a href="/Updated_Akshay_Resume.pdf" download="Updated Akshay Resume.pdf" className="btn-outline">
              <Download size={14} /> Download Résumé
            </a>
          </div>
        </motion.div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}
        >
          <div
            style={{
              position: "relative",
              width: 340,
              height: 420,
            }}
          >
            {/* Orbit ring */}
            <div
              className="orbit-ring"
              style={{
                position: "absolute",
                inset: -40,
                border: "1px dashed rgba(196,0,36,0.15)",
                borderRadius: "50%",
              }}
            />

            {/* Red gradient border */}
            <div
              style={{
                position: "absolute",
                inset: -2,
                background: "linear-gradient(135deg, var(--accent), transparent 50%, var(--accent-bright))",
                zIndex: -1,
              }}
            />

            {/* Shadow offset frame */}
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                right: -20,
                bottom: -20,
                border: "1px solid rgba(196,0,36,0.2)",
                zIndex: -2,
              }}
            />

            <Image
              src="/akshay.jpeg"
              alt="Akshay S"
              fill
              style={{ objectFit: "cover", objectPosition: "top", filter: "grayscale(15%) contrast(1.05)" }}
              priority
            />

            {/* Badge */}
            <div
              style={{
                position: "absolute",
                bottom: -18,
                right: -18,
                background: "var(--accent)",
                color: "#fff",
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "10px 16px",
                boxShadow: "0 0 30px rgba(196,0,36,0.5)",
              }}
            >
              BE CSE • VTU • 2026
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          zIndex: 2,
        }}
      >
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--muted)", textTransform: "uppercase" }}>Scroll</div>
        <div style={{ width: 1, height: 40, background: "linear-gradient(180deg, var(--accent), transparent)" }} />
      </motion.div>
    </section>
  );
}
