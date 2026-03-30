import { useEffect, useRef } from 'react'
import { BarChart2, GraduationCap, Building2, Palette } from 'lucide-react'

const items = [
  {
    period: '2022 — Presente',
    title: 'Ingeniería de Sistemas — 7° ciclo',
    org: 'Universidad Tecnológica del Perú',
    desc: 'Formación académica en programación, bases de datos, ingeniería de software y sistemas de información. Proyectos universitarios que integran análisis de datos y desarrollo de sistemas.',
    tags: ['Sistemas', 'Programación', 'BD', 'Software'],
    icon: Building2,
    color: '#22c55e',
  },
  {
    period: '2026 — Presente',
    title: 'Cursos Online — Google Data Analytics',
    org: 'Google · Certificación',
    desc: 'Actualmente cursando el programa de Google Data Analytics, enfocado en análisis de datos, limpieza, visualización y toma de decisiones basada en datos.',
    tags: ['Análisis de datos', 'Google', 'Data Analytics'],
    icon: GraduationCap,
    color: '#a855f7',
  },
  {
    period: '2026 — Presente',
    title: 'Aprendizaje en Análisis de Datos',
    org: 'Autodidacta',
    desc: 'Estudio autónomo de Excel avanzado, SQL para consultas de bases de datos y fundamentos de Python con pandas. Práctica diaria con datasets reales descargados de Kaggle y otras fuentes públicas.',
    tags: ['Excel', 'SQL', 'Python', 'Pandas'],
    icon: BarChart2,
    color: '#FF4D8D',
  },
  {
    period: '2026 — Presente',
    title: 'Práctica Personal en UX/UI',
    org: 'Proyectos propios',
    desc: 'Exploración de principios de diseño centrado en el usuario, wireframing y prototipado. Estudio de interfaces de aplicaciones reales para aplicar mejores prácticas de experiencia de usuario.',
    tags: ['Figma', 'UX', 'UI', 'Diseño'],
    icon: Palette,
    color: '#ec4899',
  },
]

export default function Experiencia() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.replace('section-hidden', 'section-visible') },
      { threshold: 0.08 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experiencia" className="relative py-28 overflow-hidden">
      <div className="orb w-96 h-96 -right-40 top-20 animate-glow" style={{ background: 'rgba(106,13,173,0.15)' }} />

      <div ref={ref} className="section-hidden max-w-6xl mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px" style={{ background: 'linear-gradient(to right, transparent, #a855f7)' }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: '#a855f7', fontFamily: 'JetBrains Mono, monospace' }}>Trayectoria</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <div>
            <h2 className="text-4xl lg:text-5xl font-black" style={{ fontFamily: 'Syne, sans-serif' }}>
              Experiencia en{' '}
              <span className="grad-text">Formación</span>
            </h2>
            <p className="mt-3 text-sm max-w-md" style={{ color: '#9490b0' }}>
              Sin experiencia laboral formal todavía — pero con mucha práctica, curiosidad y aprendizaje constante.
            </p>
          </div>
        </div>

        
        <div className="relative">
          
          <div
            className="absolute left-5 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, #FF4D8D, #6A0DAD, transparent)' }}
          />

          <div className="space-y-8">
            {items.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="relative flex gap-8">
                  
                  <div
                    className="relative z-10 hidden sm:flex w-10 h-10 rounded-full flex-shrink-0 items-center justify-center mt-2"
                    style={{
                      background: `${item.color}15`,
                      border: `2px solid ${item.color}40`,
                      boxShadow: `0 0 16px ${item.color}20`,
                    }}
                  >
                    <Icon size={18} color={item.color} />
                  </div>

                  
                  <div
                    className="flex-1 grad-border-card p-6 transition-all duration-300 hover:translate-x-1 group"
                    style={{ cursor: 'default' }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-base font-bold text-white mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>
                          {item.title}
                        </h3>
                        <p className="text-xs" style={{ color: item.color, fontFamily: 'JetBrains Mono, monospace' }}>
                          {item.org}
                        </p>
                      </div>
                      <span
                        className="text-xs px-3 py-1 rounded-full flex-shrink-0"
                        style={{
                          background: 'rgba(255,255,255,0.04)',
                          color: '#5a5770',
                          border: '1px solid rgba(255,255,255,0.07)',
                          fontFamily: 'JetBrains Mono, monospace',
                        }}
                      >
                        {item.period}
                      </span>
                    </div>

                    <p className="text-sm mb-4" style={{ color: '#9490b0', lineHeight: 1.75 }}>{item.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-0.5 rounded-full"
                          style={{
                            background: `${item.color}10`,
                            color: item.color,
                            border: `1px solid ${item.color}30`,
                            fontFamily: 'JetBrains Mono, monospace',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Mi frasesita :D */}
        <div className="mt-16 text-center">
          <div
            className="inline-block px-8 py-5 rounded-2xl glass"
            style={{ borderColor: 'rgba(255,77,141,0.15)' }}
          >
            <p className="text-base italic mb-2" style={{ color: '#c084fc' }}>
              "El único camino al éxito es a través del aprendizaje constante."
            </p>
            <p className="text-xs" style={{ color: '#5a5770', fontFamily: 'JetBrains Mono, monospace' }}>— mi filosofía de vida</p>
          </div>
        </div>
      </div>
    </section>
  )
}