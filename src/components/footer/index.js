import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer reveal animation
      gsap.from(footerRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={footerRef} className="bg-[#0a0a0a] border-t border-[#222]">
      {/* Large CTA Marquee */}
      <div
        ref={marqueeRef}
        className="py-16 md:py-24 border-b border-[#222] overflow-hidden"
      >
        <a href="#contact" className="block">
          <div className="marquee hover:pause">
            <div className="marquee-content">
              {[...Array(4)].map((_, i) => (
                <React.Fragment key={i}>
                  <span className="text-5xl md:text-8xl font-display font-bold text-white hover:text-[#c9ff00] transition-colors duration-300">
                    LET'S WORK TOGETHER
                  </span>
                  <span className="text-[#c9ff00] text-5xl md:text-8xl">★</span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </a>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a
              href="#hero"
              className="font-display text-3xl font-bold text-white tracking-tight inline-block mb-6"
            >
              DITO<span className="text-[#c9ff00]">.</span>
            </a>
            <p className="text-[#888] max-w-md leading-relaxed">
              A creative developer crafting digital experiences that combine
              aesthetics with functionality. Based in Malang, Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium tracking-[0.2em] uppercase text-[#888] mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "#hero" },
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Contact", href: "#contact" },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-white hover:text-[#c9ff00] transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium tracking-[0.2em] uppercase text-[#888] mb-6">
              Connect
            </h4>
            <ul className="space-y-4">
              {[
                {
                  name: "GitHub",
                  href: "https://github.com/ditobayu",
                },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/dito-bayu-adhitya-36198a227/",
                },
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/_ditobayu/",
                },
              ].map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#c9ff00] transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    {link.name}
                    <svg
                      width="10"
                      height="10"
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
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-12 mt-12 border-t border-[#222]">
          <p className="text-sm text-[#888]">
            © {currentYear} Dito Bayu Adhitya. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-sm text-[#888]">
            <span>Designed & Built with</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#c9ff00"
              className="animate-pulse"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>by Dito</span>
          </div>

          {/* Back to top */}
          <a
            href="#hero"
            className="w-12 h-12 rounded-full border border-[#333] flex items-center justify-center text-[#888] hover:border-[#c9ff00] hover:text-[#c9ff00] hover:bg-[#c9ff00]/10 transition-all duration-300"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </a>
        </div>
      </div>

      {/* Local time */}
      <div className="text-center py-4 border-t border-[#222]">
        <p className="text-xs text-[#555] tracking-wider">
          MALANG, INDONESIA • {new Date().toLocaleTimeString("en-US", { 
            timeZone: "Asia/Jakarta",
            hour: "2-digit",
            minute: "2-digit"
          })} LOCAL TIME
        </p>
      </div>
    </footer>
  );
};

export default Footer;
