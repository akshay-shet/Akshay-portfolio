import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import CustomCursor from "@/components/CustomCursor";
import LenisProvider from "@/components/LenisProvider";
import ScrollTop from "@/components/ScrollTop";

export default function Home() {
  return (
    <LenisProvider>
      {/* Overlay effects */}
      <div className="noise-overlay" />
      <div className="scanlines-overlay" />

      {/* Custom cursor (client, touch-safe) */}
      <CustomCursor />

      {/* Scroll to top */}
      <ScrollTop />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <main>
        <Hero />
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Certifications />
        <div className="section-divider" />
        <Contact />
      </main>

      <Footer />
    </LenisProvider>
  );
}
