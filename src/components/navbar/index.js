import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Animate navbar on scroll
    const showNav = gsap.fromTo(
      navRef.current,
      { yPercent: -100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        paused: true,
      }
    );

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1) {
          showNav.play();
        } else {
          showNav.reverse();
        }
      },
    });

    // Initial animation
    gsap.from(navRef.current, {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      delay: 2.5,
      ease: "power3.out",
    });
  }, []);

  // Menu toggle animation
  useEffect(() => {
    if (menuRef.current) {
      if (isMenuOpen) {
        gsap.to(menuRef.current, {
          clipPath: "circle(150% at 100% 0%)",
          duration: 0.8,
          ease: "power4.inOut",
        });
        gsap.from(menuRef.current.querySelectorAll("a"), {
          y: 100,
          opacity: 0,
          stagger: 0.1,
          duration: 0.6,
          delay: 0.3,
          ease: "power3.out",
        });
      } else {
        gsap.to(menuRef.current, {
          clipPath: "circle(0% at 100% 0%)",
          duration: 0.6,
          ease: "power4.inOut",
        });
      }
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-[100] mix-blend-difference"
      >
        <div className="flex items-center justify-between px-6 md:px-12 py-6">
          {/* Logo */}
          <a
            href="#hero"
            className="font-display text-xl font-bold text-white tracking-tight"
          >
            DITO<span className="text-[#c9ff00]">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="nav-link text-white"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="dito-bayu-adhitya-cv.pdf"
              className="btn-outline text-white border-white/20 hover:border-[#c9ff00] hover:text-[#0a0a0a]"
            >
              <span>Resume</span>
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
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[110]"
          >
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-[#0a0a0a] z-[90] flex items-center justify-center"
        style={{ clipPath: "circle(0% at 100% 0%)" }}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-4xl font-bold text-white hover:text-[#c9ff00] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="dito-bayu-adhitya-cv.pdf"
            className="btn-primary mt-8"
          >
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
