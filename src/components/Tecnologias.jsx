import { useEffect, useRef } from 'react'
import {
  FileSpreadsheet,
  Database,
  Code2,
  BarChart3,
  Palette,
  Globe
} from "lucide-react"

const techs = [
  {
    name: 'Excel',
    icon: FileSpreadsheet,
    level: 'Intermedio',
    pct: 75,
    color: '#22c55e',
    desc: 'Tablas dinámicas, VLOOKUP, fórmulas avanzadas y visualización de datos.',
    badge: 'Microsoft',
  },
  {
    name: 'SQL',
    icon: Database,
    level: 'Intermedio',
    pct: 60,
    color: '#3b82f6',
    desc: 'Consultas SELECT, JOINs, filtros y agrupaciones de bases de datos.',
    badge: 'Bases de datos',
  },
  {
    name: 'Python',
    icon: Code2,
    level: 'En aprendizaje',
    pct: 30,
    color: '#eab308',
    desc: 'Sintaxis básica, pandas, primeros pasos en análisis de datos.',
    badge: 'Programación',
  },
  {
    name: 'Power BI',
    icon: BarChart3,
    level: 'En aprendizaje',
    pct: 30,
    color: '#f97316',
    desc: 'Creación de dashboards básicos y visualizaciones interactivas.',
    badge: 'Visualización',
  },
  {
    name: 'UX/UI',
    icon: Palette,
    level: 'En aprendizaje',
    pct: 35,
    color: '#ec4899',
    desc: 'Principios de diseño, wireframes, prototipado y experiencia de usuario.',
    badge: 'Diseño',
  },
  {
    name: 'HTML/CSS',
    icon: Globe,
    level: 'Intermedio',
    pct: 60,
    color: '#8b5cf6',
    desc: 'Estructura web, responsive design y desarrollo con React y Tailwind CSS.',
    badge: 'Web',
  },
]

export default function Tecnologias() {
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
    <section id="tecnologias" className="relative py-28 overflow-hidden">
      <div className="orb w-96 h-96 -right-40 top-0 animate-glow" style={{ background: 'rgba(255,77,141,0.12)' }} />

      <div ref={ref} className="section-hidden max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px" style={{ background: 'linear-gradient(to right, transparent, #6A0DAD)' }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: '#c084fc', fontFamily: 'JetBrains Mono, monospace' }}>Stack</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <h2 className="text-4xl lg:text-5xl font-black" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span className="text-white">Mis </span>
            <span className="grad-text">Tecnologías</span>
          </h2>
          <p className="text-sm max-w-xs" style={{ color: '#5a5770', fontFamily: 'JetBrains Mono, monospace' }}>
            // En constante aprendizaje y práctica
          </p>
        </div>

        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techs.map((t, i) => {
            const Icon = t.icon 
            return (
              <div
                key={t.name}
                className="tech-card grad-border-card p-6 cursor-default"
                
                style={{ animationDelay: `${i * 0.08}s`, animationFillMode: 'both' }}
              >
                
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${t.color}15`, border: `1px solid ${t.color}30` }}
                  >
                    
                    <Icon size={24} color={t.color} />
                  </div>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      background: 'rgba(255,255,255,0.04)',
                      color: '#5a5770',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    {t.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold mb-1 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{t.name}</h3>
                <p className="text-xs mb-4" style={{ color: '#9490b0', lineHeight: 1.7 }}>{t.desc}</p>

                {/* progreso */}
                <div className="flex items-center justify-between text-xs mb-2" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <span style={{ color: '#5a5770' }}>{t.level}</span>
                  <span style={{ color: t.color }}>{t.pct}%</span>
                </div>
                <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${t.pct}%`, background: `linear-gradient(to right, ${t.color}99, ${t.color})` }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* nota*/}
        <div className="mt-10 text-center">
          <p className="text-sm" style={{ color: '#5a5770', fontFamily: 'JetBrains Mono, monospace' }}>
            + siempre aprendiendo nuevas herramientas cada semana ✨
          </p>
        </div>
      </div>
    </section>
  )
}