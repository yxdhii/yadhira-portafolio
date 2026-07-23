import { useEffect, useRef } from "react";
import {
  SiReact,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiFigma,
  SiGit,
  SiGithub,
} from "react-icons/si";

import { FaJava, FaCode } from "react-icons/fa";

const techs = [
  {
    name: "React",
    icon: SiReact,
    level: "Intermediate",
    color: "#61DAFB",
    desc: "Building modern and responsive user interfaces.",
    badge: "Frontend",
  },
  {
    name: "Java",
    icon: FaJava,
    level: "Intermediate",
    color: "#F89820",
    desc: "Object-oriented programming and backend development.",
    badge: "Backend",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    level: "Intermediate",
    color: "#6DB33F",
    desc: "Developing REST APIs and web applications.",
    badge: "Backend",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    level: "Intermediate",
    color: "#4479A1",
    desc: "Database design and SQL queries.",
    badge: "Database",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    level: "Learning",
    color: "#3B82F6",
    desc: "Writing SQL queries and managing relational databases.",
    badge: "Data",
  },
  {
    name: "Python",
    icon: SiPython,
    level: "Learning",
    color: "#FFD43B",
    desc: "Learning data analysis with Python.",
    badge: "Data",
  },

  {
    name: "Figma",
    icon: SiFigma,
    level: "Intermediate",
    color: "#F24E1E",
    desc: "UI/UX design and interactive prototypes.",
    badge: "Design",
  },
  {
    name: "Git",
    icon: SiGit,
    level: "Intermediate",
    color: "#F05032",
    desc: "Version control and collaboration.",
    badge: "Tools",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    level: "Intermediate",
    color: "#ffffff",
    desc: "Repository management and teamwork.",
    badge: "Tools",
  },
];

export default function Tecnologias() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting)
          e.target.classList.replace("section-hidden", "section-visible");
      },
      { threshold: 0.08 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="tecnologias" className="relative py-28 overflow-hidden">
      <div
        className="orb w-96 h-96 -right-40 top-0 animate-glow"
        style={{ background: "rgba(255,77,141,0.12)" }}
      />

      <div ref={ref} className="section-hidden max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-8 h-px"
            style={{
              background: "linear-gradient(to right, transparent, #6A0DAD)",
            }}
          />
          <span
            className="text-xs tracking-widest uppercase"
            style={{
              color: "#c084fc",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            Stack
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <h2
            className="text-4xl lg:text-5xl font-black"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            <span className="text-white">Tech </span>
            <span className="grad-text">Stack</span>
          </h2>
          <p
            className="text-sm max-w-xs"
            style={{
              color: "#5a5770",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            // Always learning and improving
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techs.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={t.name}
                className="tech-card grad-border-card p-6 cursor-default"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${t.color}15`,
                      border: `1px solid ${t.color}30`,
                    }}
                  >
                    <Icon size={36} color={t.color} />
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      background: "rgba(255,255,255,0.04)",
                      color: "#5a5770",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    {t.badge}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold mb-1 text-white"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {t.name}
                </h3>
                <p
                  className="text-xs mb-4"
                  style={{ color: "#9490b0", lineHeight: 1.7 }}
                >
                  {t.desc}
                </p>

                <div className="mt-5">
                  <span
                    className="px-3 py-1 rounded-full text-xs"
                    style={{
                      background: `${t.color}15`,
                      color: t.color,
                      border: `1px solid ${t.color}40`,
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    {t.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <FaCode style={{ color: "#ff4d8d", fontSize: "16px" }} />
          <p
            className="text-sm"
            style={{
              color: "#5a5770",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            Continuously learning new technologies
          </p>
        </div>
      </div>
    </section>
  );
}
