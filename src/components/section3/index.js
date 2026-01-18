import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lokerin from "../../assets/Lokerin.png";
import taskmanager from "../../assets/taskmanager.png";
import silomba from "../../assets/silomba.png";
import dooit from "../../assets/dooit.png";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      name: "Silomba",
      description: "Sistem informasi berbasis web yang menyediakan informasi berbagai lomba dan kompetisi. Dikembangkan untuk mempermudah pengguna dalam mencari dan mengelola informasi kompetisi, sekaligus melatih kemampuan fullstack development pada studi kasus nyata.",
      img: silomba,
      category: ["frontend", "backend"],
      link: "https://silomba.id/",
      year: "2024",
      tech: ["React", "Node.js", "PostgreSQL"],
      highlights: ["Information System", "Fullstack Web App", "Real-world Problem", "Scalable Structure"],
      role: "Fullstack Developer",
    },
    {
      id: 2,
      name: "Lokerin",
      description: "Aplikasi web untuk mencari dan melihat informasi lowongan kerja. Dikembangkan sebagai final project bootcamp React JS di Sanbercode, dengan fokus pada pengembangan antarmuka yang responsif, pengelolaan state, serta integrasi API.",
      img: lokerin,
      category: ["frontend"],
      link: "https://lokerinaja.netlify.app/",
      year: "2023",
      tech: ["React", "Tailwind CSS", "REST API"],
      highlights: ["React Fundamentals", "Component Architecture", "API Integration", "Responsive UI"],
      role: "Frontend Developer",
    },
    {
      id: 3,
      name: "Doo-IT",
      description: "Aplikasi manajemen tugas yang dikembangkan sebagai final project mata kuliah Dasar Desain Antarmuka. Berfokus pada perancangan UI/UX yang intuitif, alur pengguna yang jelas, serta implementasi frontend dan backend yang terintegrasi.",
      img: dooit,
      category: ["frontend", "backend"],
      link: "https://doo-it.vercel.app/",
      year: "2023",
      tech: ["React", "Express", "MongoDB"],
      highlights: ["UI/UX Design", "User Flow & Wireframe", "Design Consistency", "Fullstack Implementation"],
      role: "Fullstack Developer",
    },
    {
      id: 4,
      name: "Task Manager",
      description: "Aplikasi manajemen tugas berbasis web yang memungkinkan pengguna untuk membuat, mengelola, dan melacak tugas harian. Personal project yang dikembangkan secara mandiri untuk mengasah kemampuan frontend dan backend selama libur semester.",
      img: taskmanager,
      category: ["frontend", "backend"],
      link: "https://managertugas.vercel.app/",
      year: "2023",
      tech: ["React", "Node.js", "Express"],
      highlights: ["CRUD Operations", "Authentication", "Fullstack Implementation", "Real-life Use Case"],
      role: "Fullstack Developer",
    },
  ];

  const filters = [
    { id: "all", label: "All Work" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Full Stack" },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category.includes(activeFilter));

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

      // Project cards animation
      const projectCards = document.querySelectorAll(".project-item");
      projectCards.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-32 md:py-48 bg-[#111] overflow-hidden"
    >
      {/* Background accent */}
      <div className="circle-accent top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
          <div>
            <span className="section-label">Selected Work</span>
            <h2 ref={headingRef} className="section-title">
              Featured<br />
              <span className="text-gradient">Projects</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="flex gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 text-sm tracking-wider uppercase rounded-full border transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-[#c9ff00] text-[#0a0a0a] border-[#c9ff00]"
                    : "border-[#333] text-[#888] hover:border-[#c9ff00] hover:text-white"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid gap-16 md:gap-24">
          {filteredProjects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-item group block"
            >
              <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}>
                {/* Image */}
                <div className={`relative overflow-hidden rounded-2xl aspect-[4/3] ${
                  index % 2 === 1 ? "md:col-start-2" : ""
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]/50 z-10" />
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#c9ff00] opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-20" />
                  
                  {/* View project button */}
                  <div className="absolute bottom-6 right-6 z-30">
                    <div className="w-16 h-16 rounded-full bg-[#c9ff00] text-[#0a0a0a] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <svg
                        width="20"
                        height="20"
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
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`flex flex-col ${
                  index % 2 === 1 ? "md:col-start-1 md:text-right md:items-end" : ""
                }`}>
                  {/* Project number */}
                  <span className="project-number opacity-30">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Year, role and category */}
                  <div className={`flex items-center gap-4 text-sm text-[#888] mb-4 flex-wrap ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}>
                    <span className="text-[#c9ff00] font-medium">{project.role}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#333]" />
                    <span>{project.year}</span>
                    <span className="w-8 h-[1px] bg-[#333]" />
                    <span className="uppercase tracking-wider">
                      {project.category.includes("backend") ? "Full Stack" : "Frontend"}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 group-hover:text-[#c9ff00] transition-colors duration-300">
                    {project.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[#888] text-lg mb-6 max-w-md leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className={`flex flex-wrap gap-2 mb-6 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}>
                    {project.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-xs tracking-wider uppercase bg-[#1a1a1a] border border-[#252525] rounded-full text-[#c9ff00]/80 font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className={`flex flex-wrap gap-2 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}>
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs tracking-wider uppercase border border-[#333] rounded-full text-[#888]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View all projects CTA */}
        <div className="flex justify-center mt-24">
          <a
            href="https://github.com/ditobayu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline magnetic"
          >
            <span>View All on GitHub</span>
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
      </div>
    </section>
  );
};

export default Projects;
