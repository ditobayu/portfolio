import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import Navbar from "./components/navbar";
import Hero from "./components/section1";
import About from "./components/section2";
import Projects from "./components/section3";
import Testimonials from "./components/section4";
import Contact from "./components/section5";
import Footer from "./components/footer";
import Loader from "./components/Loader";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const appRef = useRef(null);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Connect Lenis to ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Custom cursor
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    if (!cursor || !cursorDot) return;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });
    };

    const handleMouseEnter = () => {
      cursor.classList.add("hover");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("hover");
    };

    window.addEventListener("mousemove", moveCursor);

    // Add hover effect to interactive elements
    const interactiveElements = document.querySelectorAll(
      "a, button, .project-card, .magnetic"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [isLoading]);

  // Handle loading complete
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Loader */}
      {isLoading && <Loader onComplete={handleLoadingComplete} />}

      {/* Custom Cursor */}
      <div ref={cursorRef} className="cursor hidden md:block" />
      <div ref={cursorDotRef} className="cursor-dot hidden md:block" />

      {/* Noise overlay for texture */}
      <div className="noise" />

      {/* Main App */}
      <div ref={appRef} className="app">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
