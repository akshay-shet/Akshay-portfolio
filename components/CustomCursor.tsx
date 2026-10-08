"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only show custom cursor on non-touch devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", onMove);

    let rafId: number;
    const lerp = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      rafId = requestAnimationFrame(lerp);
    };
    rafId = requestAnimationFrame(lerp);

    // Expand on interactive elements
    const expand = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "56px";
        ringRef.current.style.height = "56px";
        ringRef.current.style.borderColor = "var(--accent-bright)";
        ringRef.current.style.background = "rgba(196,0,36,0.08)";
      }
    };
    const shrink = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
        ringRef.current.style.borderColor = "rgba(196,0,36,0.8)";
        ringRef.current.style.background = "transparent";
      }
    };

    document.querySelectorAll("a, button, [data-magnetic]").forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: 36,
          height: 36,
          border: "1.5px solid rgba(196,0,36,0.8)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10000,
          transform: "translate(-50%,-50%)",
          transition: "width .2s, height .2s, border-color .2s, background .2s",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: 6,
          height: 6,
          background: "var(--accent-bright)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10001,
          transform: "translate(-50%,-50%)",
          boxShadow: "0 0 10px rgba(255,59,92,0.8)",
        }}
      />
    </>
  );
}
