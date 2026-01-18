import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Card animation
      gsap.from(cardRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-32 md:py-48 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background accent */}
      <div className="circle-accent bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="section-label justify-center">Testimonials</span>
          <h2 ref={headingRef} className="section-title">
            What People<br />
            <span className="text-gradient">Say About Me</span>
          </h2>
        </div>

        {/* Empty state - Call to action */}
        <div
          ref={cardRef}
          className="max-w-2xl mx-auto text-center p-12 md:p-16 border border-[#222] rounded-3xl glass"
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#111] flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c9ff00"
              strokeWidth="1.5"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </div>

          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Be My First Testimonial
          </h3>

          <p className="text-[#888] text-lg mb-8 max-w-md mx-auto">
            I'm actively looking for opportunities to collaborate on exciting
            projects. Let's work together and you could be featured here!
          </p>

          <a href="#contact" className="btn-primary magnetic inline-flex">
            <span>Start a Project</span>
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

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-[#222]">
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-[#c9ff00]">
                10+
              </div>
              <div className="text-sm text-[#888] mt-2">Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-[#c9ff00]">
                1+
              </div>
              <div className="text-sm text-[#888] mt-2">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-bold text-[#c9ff00]">
                100%
              </div>
              <div className="text-sm text-[#888] mt-2">Dedication</div>
            </div>
          </div>
        </div>

        {/* Future testimonials placeholder */}
        <div className="flex justify-center gap-4 mt-12">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full border border-[#333] hover:border-[#c9ff00] hover:bg-[#c9ff00] transition-all duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
