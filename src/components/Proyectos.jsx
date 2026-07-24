import { useEffect, useRef, useState, useCallback } from "react";
import { ExternalLink, Play, Pause, Heart } from "lucide-react";
import pizzeria from "../assets/pizzeria.png";
import calle from "../assets/calle.jpeg";
import kindle from "../assets/kindle.jpeg";
import nike from "../assets/nike.jpeg";

function GithubIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="currentColor"
      {...props}
    >
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.17.69-3.84-1.35-3.84-1.35-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.14 1.17a10.9 10.9 0 0 1 5.72 0c2.18-1.48 3.14-1.17 3.14-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.67 5.34-5.21 5.62.41.36.77 1.06.77 2.14 0 1.55-.01 2.79-.01 3.17 0 .3.2.66.79.55 4.52-1.51 7.78-5.76 7.78-10.78C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

const proyectos = [
  {
    id: "modern-login-ui",
    title: "Modern Login UI",
    description:
      "Modern login page built with React + Vite, featuring a WebGL animated background and glassmorphism card design.",
    image: kindle,
    technologies: ["React", "Vite", "CSS", "WebGL"],
    github: "https://github.com/yxdhii/kindle3d-login",
    demo: "https://kindle3d-login-fg9s.vercel.app/",
    baseLikes: 50,
  },
  {
    id: "callego",
    title: "CalleGo",
    description:
      "A smart urban safety app that helps users navigate safer routes through interactive maps and community-driven reports.",
    image: calle,
    technologies: ["Figma", "React Native", "Maps API"],
    github: "https://github.com/yxdhii/app-CalleGo",
    demo: "https://app-calle-go.vercel.app/",
    baseLikes: 120,
  },
  {
    id: "la-esquina-pizzeria",
    title: "La Esquina Pizzeria",
    description:
      "Full stack web application built with Spring Boot and Thymeleaf, with a modern and intuitive interface for managing orders, inventory, sales, and users.",
    image: pizzeria,
    technologies: ["Spring Boot", "Thymeleaf", "MySQL", "Bootstrap"],
    github: "https://github.com/yxdhii/pizzeria-la-esquina",
    demo: "http://159.112.135.107:8080/login",
    baseLikes: 140,
  },
  {
    id: "nike-jacket-store",
    title: "Nike Jacket Store",
    description:
      "Visual store for Nike jackets with smooth animations and color/size selectors. Built with React + Vite + Tailwind CSS.",
    image: nike,
    technologies: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/yxdhii/nike-jacket-store",
    demo: "https://nike-jacket-store.vercel.app/",
    baseLikes: 123,
  },
];

const AUTOPLAY_MS = 4000;
const LIKES_KEY = "proyectos-likes";

export default function Proyectos() {
  const ref = useRef(null);
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const [dragging, setDragging] = useState(false);

  // { [projectId]: true/false } -> si ESTE visitante le dio corazón
  const [likedMap, setLikedMap] = useState({});

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(LIKES_KEY) || "{}");
      setLikedMap(stored);
    } catch {
      setLikedMap({});
    }
  }, []);

  const toggleLike = (id) => {
    setLikedMap((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      try {
        localStorage.setItem(LIKES_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  };

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

  const total = proyectos.length;

  const scrollToIndex = useCallback((i) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i];
    if (!card) return;
    track.scrollTo({
      left: card.offsetLeft - (track.offsetWidth - card.offsetWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    scrollToIndex(active);
  }, [active, scrollToIndex]);

  // Autoplay
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [playing, total]);

  const onPointerDown = (e) => {
    isDown.current = true;
    setDragging(true);
    setPlaying(false);
    startX.current = e.pageX ?? e.touches?.[0]?.pageX;
    scrollStart.current = trackRef.current.scrollLeft;
  };
  const onPointerMove = (e) => {
    if (!isDown.current) return;
    const x = e.pageX ?? e.touches?.[0]?.pageX;
    const walk = x - startX.current;
    trackRef.current.scrollLeft = scrollStart.current - walk;
  };
  const endDrag = () => {
    isDown.current = false;
    setDragging(false);
  };

  return (
    <section id="proyectos" className="relative py-28 overflow-hidden">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>

      <div
        className="orb w-80 h-80 -left-32 bottom-0 animate-glow"
        style={{ background: "rgba(168,85,247,0.15)" }}
      />

      <div ref={ref} className="section-hidden max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-4">
          <div
            className="w-8 h-px"
            style={{
              background: "linear-gradient(to right, transparent, #FF4D8D)",
            }}
          />
          <span
            className="text-xs tracking-widest uppercase"
            style={{
              color: "#FF4D8D",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            Portfolio
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <h2
            className="text-4xl lg:text-5xl font-black"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            <span className="grad-text">Projects</span>
          </h2>
          <p
            className="text-sm"
            style={{
              color: "#5a5770",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            // Building in public
          </p>
        </div>

        {/* Carrusel plano, tipo galería */}
        <div
          ref={trackRef}
          onMouseDown={onPointerDown}
          onMouseMove={onPointerMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onTouchStart={onPointerDown}
          onTouchMove={onPointerMove}
          onTouchEnd={endDrag}
          className="flex gap-6 overflow-x-auto no-scrollbar px-2 py-3 -mx-2"
          style={{ cursor: dragging ? "grabbing" : "grab", userSelect: "none" }}
        >
          {proyectos.map((p, i) => {
            const liked = !!likedMap[p.id];
            const likeCount = p.baseLikes + (liked ? 1 : 0);

            return (
              <div
                key={i}
                onClick={() => {
                  if (i !== active) {
                    setActive(i);
                    setPlaying(false);
                  }
                }}
                className="grad-border-card overflow-hidden shrink-0 transition-all duration-300"
                style={{
                  width: "min(420px, 80vw)",
                  opacity: i === active ? 1 : 0.55,
                  cursor: i === active ? "default" : "pointer",
                  boxShadow:
                    i === active
                      ? "0 0 0 1.5px #FF4D8D, 0 20px 50px rgba(255,77,141,0.2)"
                      : "none",
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    draggable={false}
                    className="w-full h-50 object-cover pointer-events-none"
                  />

                  {/* Botón de corazón */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleLike(p.id);
                    }}
                    className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-200"
                    style={{
                      background: "rgba(10,10,15,0.55)",
                      backdropFilter: "blur(6px)",
                      border: liked
                        ? "1px solid #FF4D8D"
                        : "1px solid rgba(255,255,255,0.15)",
                    }}
                    aria-label={liked ? "Quitar me gusta" : "Dar me gusta"}
                  >
                    <Heart
                      size={15}
                      color={liked ? "#FF4D8D" : "white"}
                      fill={liked ? "#FF4D8D" : "none"}
                    />
                    <span className="text-xs font-medium text-white">
                      {likeCount}
                    </span>
                  </button>
                </div>

                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {p.title}
                  </h3>

                  <p
                    className="text-sm leading-7 mb-5"
                    style={{ color: "#9f9ab8" }}
                  >
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "#e5e5e5",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium"
                      style={{ background: "#FF4D8D", color: "white" }}
                    >
                      <GithubIcon />
                      GitHub
                    </a>

                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-medium"
                      style={{
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "white",
                      }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Barra inferior: play/pause, progreso */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => setPlaying((p) => !p)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition hover:-translate-y-0.5 shrink-0"
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
            }}
            aria-label={playing ? "Pausar" : "Reproducir"}
          >
            {playing ? <Pause size={14} /> : <Play size={14} />}
          </button>

          <div className="flex items-center gap-2">
            {proyectos.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActive(i);
                  setPlaying(false);
                }}
                aria-label={`Ir al proyecto ${i + 1}`}
                className="h-1 rounded-full overflow-hidden transition-all duration-300"
                style={{
                  width: i === active ? "48px" : "20px",
                  background: "rgba(255,255,255,0.15)",
                }}
              >
                <span
                  className="block h-full rounded-full"
                  style={{
                    width: i === active ? "100%" : "0%",
                    background: "#FF4D8D",
                    transition:
                      i === active && playing
                        ? `width ${AUTOPLAY_MS}ms linear`
                        : "width 0.3s",
                  }}
                />
              </button>
            ))}
          </div>

          <div className="w-10 shrink-0" />
        </div>
      </div>
    </section>
  );
}
