import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import foto from "../../assets/foto.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Master timeline
      const tl = gsap.timeline({ delay: 2.5 });

      // Title animation - letter by letter
      const titleChars = titleRef.current.querySelectorAll(".char");
      tl.from(titleChars, {
        y: 200,
        opacity: 0,
        rotateX: -90,
        stagger: 0.05,
        duration: 1.2,
        ease: "power4.out",
      });

      // Subtitle animation
      tl.from(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Image animation
      tl.from(
        imageRef.current,
        {
          scale: 1.5,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // CTA buttons animation
      tl.from(
        ctaRef.current.children,
        {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );

      // Parallax effect on scroll
      gsap.to(titleRef.current, {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(imageRef.current, {
        yPercent: 30,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Split text into characters
  const splitText = (text) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="char inline-block"
        style={{ display: char === " " ? "inline" : "inline-block" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background gradient circles */}
      <div className="circle-accent top-[-200px] left-[-200px]" />
      <div className="circle-accent bottom-[-200px] right-[-200px] bg-gradient-to-r from-[#00fff0] to-transparent" />

      {/* Main content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Subtitle */}
          <div ref={subtitleRef} className="mb-8">
            <span className="section-label">Software Engineer</span>
          </div>

          {/* Main title */}
          <div className="relative">
            <h1 ref={titleRef} className="hero-title mb-8">
              <span className="block">{splitText("DITO")}</span>
              <span className="block">{splitText("BAYU")}</span>
              <span className="block">{splitText("ADITYA")}</span>
            </h1>
          </div>

          {/* Description and CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mt-12">
            <p className="max-w-md text-lg text-[#888] leading-relaxed">
              A passionate Software Engineer with expertise in fullstack development,
              mobile apps, and DevOps. Building scalable applications with React, 
              Node.js, Golang, Flutter, Docker & Jenkins.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary magnetic">
                <span>Let's Talk</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11L11 1M11 1H1M11 1V11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
              <a href="#projects" className="btn-outline magnetic">
                <span>View Work</span>
              </a>
            </div>
          </div>
        </div>

        {/* Floating image */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px] overflow-hidden rounded-2xl opacity-30 lg:opacity-100">
          <div ref={imageRef} className="w-full h-full">
            <img
              src={foto}
              alt="Dito Bayu Adhitya"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <div className="scroll-line" />
      </div>

      {/* Social links */}
      <div className="absolute left-6 md:left-12 bottom-12 flex flex-col gap-6">
        <a
          href="https://github.com/ditobayu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888] hover:text-[#c9ff00] transition-colors duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/dito-bayu-adhitya-36198a227/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888] hover:text-[#c9ff00] transition-colors duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/_ditobayu/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#888] hover:text-[#c9ff00] transition-colors duration-300"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        </a>
      </div>

      {/* Available for work badge */}
      <div className="absolute right-6 md:right-12 bottom-12">
        <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-[#222] glass">
          <span className="w-2 h-2 rounded-full bg-[#c9ff00] animate-pulse" />
          <span className="text-xs tracking-wider text-[#888] uppercase">
            Available for work
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
