import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const counterRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(loaderRef.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          onComplete: onComplete,
        });
      },
    });

    // Animate counter from 0 to 100
    const counter = { value: 0 };
    tl.to(counter, {
      value: 100,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value) + "%";
        }
      },
    });

    // Animate text reveal
    tl.from(
      textRef.current.querySelectorAll("span"),
      {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      },
      0
    );
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="loader fixed inset-0 bg-[#0a0a0a] z-[10000] flex flex-col items-center justify-center"
    >
      {/* Accent glow */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#c9ff00] opacity-5 blur-[150px]" />

      {/* Main content */}
      <div className="relative z-10 text-center">
        <div ref={textRef} className="loader-text overflow-hidden">
          <span className="inline-block font-display font-bold text-[clamp(2rem,8vw,6rem)] tracking-tight">
            D
          </span>
          <span className="inline-block font-display font-bold text-[clamp(2rem,8vw,6rem)] tracking-tight">
            I
          </span>
          <span className="inline-block font-display font-bold text-[clamp(2rem,8vw,6rem)] tracking-tight">
            T
          </span>
          <span className="inline-block font-display font-bold text-[clamp(2rem,8vw,6rem)] tracking-tight">
            O
          </span>
        </div>
        <div
          ref={counterRef}
          className="font-body text-sm tracking-[0.3em] text-[#888] mt-8"
        >
          0%
        </div>
      </div>

      {/* Loading bar */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#222]">
        <div className="h-full bg-[#c9ff00] origin-left animate-[loadingBar_2s_ease-out_forwards]" />
      </div>

      <style jsx>{`
        @keyframes loadingBar {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
