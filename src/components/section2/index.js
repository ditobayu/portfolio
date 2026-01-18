import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const skillsRef = useRef(null);
  const marqueeRef = useRef(null);

  const skills = [
    "React",
    "Next.js",
    "Vue.js",
    "Node.js",
    "Express.js",
    "Golang",
    "Laravel",
    "Flutter",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Jenkins",
    "Tailwind CSS",
    "Git",
  ];

  const services = [
    {
      number: "01",
      title: "Frontend Development",
      description:
        "Building modern, responsive web applications with React, Next.js, Vue.js and cutting-edge frontend technologies.",
    },
    {
      number: "02",
      title: "Backend Development",
      description:
        "Developing secure, scalable APIs and server-side applications using Node.js, Golang, and Laravel.",
    },
    {
      number: "03",
      title: "Mobile Development",
      description:
        "Crafting cross-platform mobile applications using Flutter with clean architecture and state management.",
    },
    {
      number: "04",
      title: "DevOps & CI/CD",
      description:
        "Setting up Docker containerization and Jenkins pipelines for automated build, test, and deployment workflows.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal animation
      gsap.from(headingRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });

      // Text reveal animation
      gsap.from(textRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Skills animation
      gsap.from(skillsRef.current.children, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Services animation
      const serviceCards = document.querySelectorAll(".service-card");
      serviceCards.forEach((card, index) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Parallax effect on heading
      gsap.to(headingRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 md:py-48 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background accent */}
      <div className="circle-accent top-1/2 right-0 translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-20 md:mb-32">
          <span className="section-label">About Me</span>
          <h2 ref={headingRef} className="section-title max-w-4xl">
            I build{" "}
            <span className="text-gradient">fullstack applications</span> from
            concept to production deployment
          </h2>
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-32">
          {/* Left column - Description */}
          <div ref={textRef}>
            <p className="text-lg md:text-xl text-[#888] leading-relaxed mb-8">
              I'm a Software Engineer based in Malang, Indonesia. Information Technology
              student at Brawijaya University with a strong foundation in fullstack development,
              mobile apps, and DevOps practices.
            </p>
            <p className="text-lg md:text-xl text-[#888] leading-relaxed mb-12">
              Experienced in building production applications with React, Next.js, Node.js,
              Golang, Laravel, and Flutter. Proficient in Docker containerization and
              Jenkins CI/CD pipelines for automated deployments.
            </p>
            <a href="#contact" className="btn-outline magnetic">
              <span>Get in Touch</span>
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

          {/* Right column - Skills */}
          <div>
            <h3 className="text-sm font-medium tracking-[0.2em] uppercase text-[#888] mb-8">
              Technologies & Skills
            </h3>
            <div ref={skillsRef} className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span key={index} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider mb-32" />

        {/* Services */}
        <div className="mb-20">
          <span className="section-label">What I Do</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group p-8 md:p-10 border border-[#222] rounded-2xl hover:border-[#c9ff00] transition-all duration-500 hover:bg-[#111]"
            >
              <span className="text-5xl md:text-7xl font-display font-bold text-[#222] group-hover:text-[#c9ff00] transition-colors duration-500">
                {service.number}
              </span>
              <h3 className="text-xl md:text-2xl font-display font-semibold mt-6 mb-4">
                {service.title}
              </h3>
              <p className="text-[#888] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div ref={marqueeRef} className="mt-32 md:mt-48 py-8 border-y border-[#222]">
        <div className="marquee">
          <div className="marquee-content">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="text-4xl md:text-6xl font-display font-bold text-[#222]">
                  FRONTEND
                </span>
                <span className="text-[#c9ff00] text-4xl">★</span>
                <span className="text-4xl md:text-6xl font-display font-bold text-[#222]">
                  BACKEND
                </span>
                <span className="text-[#c9ff00] text-4xl">★</span>
                <span className="text-4xl md:text-6xl font-display font-bold text-[#222]">
                  MOBILE APPS
                </span>
                <span className="text-[#c9ff00] text-4xl">★</span>
                <span className="text-4xl md:text-6xl font-display font-bold text-[#222]">
                  DEVOPS
                </span>
                <span className="text-[#c9ff00] text-4xl">★</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
