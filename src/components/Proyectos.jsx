import { useEffect, useRef } from 'react'
import { Rocket } from 'lucide-react'

export default function Proyectos() {
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
    <section id="proyectos" className="relative py-28 overflow-hidden">
      <div className="orb w-80 h-80 -left-32 bottom-0 animate-glow" style={{ background: 'rgba(168,85,247,0.15)' }} />

      <div ref={ref} className="section-hidden max-w-6xl mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-px" style={{ background: 'linear-gradient(to right, transparent, #FF4D8D)' }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: '#FF4D8D', fontFamily: 'JetBrains Mono, monospace' }}>Portafolio</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-4">
          <h2 className="text-4xl lg:text-5xl font-black" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span className="grad-text">Proyectos</span>
          </h2>
          <p className="text-sm" style={{ color: '#5a5770', fontFamily: 'JetBrains Mono, monospace' }}>
            // Building in public 🔨
          </p>
        </div>

        
        <div
          className="grad-border-card p-16 flex flex-col items-center justify-center text-center gap-6"
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.25)' }}
          >
            <Rocket size={36} color="#a855f7" />
          </div>

          <div>
            <h3 className="text-2xl font-black mb-3 text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
              Próximamente
            </h3>
            <p className="text-sm max-w-md mx-auto" style={{ color: '#9490b0', lineHeight: 1.85 }}>
              Estoy trabajando en mis primeros proyectos de análisis de datos, UX/UI y desarrollo web.
              Muy pronto los estaré publicando aquí. 🚀
            </p>
          </div>

          <p className="text-xs" style={{ color: '#5a5770', fontFamily: 'JetBrains Mono, monospace' }}>
            // Aprendiendo · construyendo · mejorando cada día 
          </p>
        </div>
      </div>
    </section>
  )
}