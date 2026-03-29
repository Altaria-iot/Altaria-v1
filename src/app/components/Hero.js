"use client";

import { useEffect, useRef } from "react";
import { useSite } from "./SiteContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DEVFOLIO_URL = "https://devfolio.co";

export default function Hero() {
  const { booted } = useSite();
  const sectionRef = useRef(null);
  const zoomGroupRef = useRef(null);


  useEffect(() => {
    if (!booted) return;

    const initTimeout = setTimeout(() => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=80%",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
          },
        });



        tl.to(zoomGroupRef.current, {
          scale: 1,
          duration: 0.8,
          ease: "power2.in",
        }, 0.05);

        tl.to(zoomGroupRef.current, {
          opacity: 0,
          duration: 0.25,
          ease: "power1.in",
        }, 0.45);

      }, sectionRef);

      const onResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", onResize);

      return () => {
        ctx.revert();
        window.removeEventListener("resize", onResize);
      };
    }, 400);

    return () => clearTimeout(initTimeout);
  }, [booted]);

  if (!booted) return null;

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-texture opacity-15" />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center w-full min-h-screen">
        <div className="relative" style={{ height: "14rem", width: "100%" }}>
          <div
            ref={zoomGroupRef}
            className="absolute inset-0 flex items-center justify-center whitespace-nowrap pointer-events-none"
            style={{ transformOrigin: "center center", willChange: "transform, opacity", transform: "scale(0.1)" }}
          >
            <h1 className="hero-title zoom-letter leading-none flex items-baseline justify-center whitespace-nowrap gap-4 font-[Londrina]" style={{ fontSize: "120rem" }}>
              <span>ALTARIA V</span><span>1</span>
            </h1>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center text-center">
          <p
            className="text-sm md:text-lg max-w-xl mx-auto mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-text-muted)" }}
          >
            24 Hours of Reckless Creation, Unreasonable Collaboration, and Beautiful Chaos
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={DEVFOLIO_URL} target="_blank" rel="noopener noreferrer" className="cta-primary px-8 py-3 rounded text-sm md:text-base uppercase tracking-wider">
              Register Now
            </a>
            <a href={DEVFOLIO_URL} target="_blank" rel="noopener noreferrer" className="cta-secondary px-8 py-3 rounded text-sm md:text-base uppercase tracking-wider flex items-center gap-2">
              Join on Devfolio
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
