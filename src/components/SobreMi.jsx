import { useEffect, useRef } from 'react'
import { BarChart2, Palette, Globe, Cpu } from "lucide-react"
import foto from '../assets/foto.jpeg'

const traits = [
  { icon: <BarChart2 size={16} />, label: 'Análisis de datos' },
  { icon: <Palette size={16} />,   label: 'Diseño UX/UI' },
  { icon: <Globe size={16} />,     label: 'Desarrollo web' },
  { icon: <Cpu size={16} />,       label: 'Ing. de Sistemas' },
]

export default function SobreMi() {
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.replace('section-hidden', 'section-visible') },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="sobre-mi" className="relative py-28 overflow-hidden">
      
      <div className="orb w-80 h-80 -left-40 top-0 animate-glow" style={{ background: 'rgba(106,13,173,0.18)' }} />

      <div ref={ref} className="section-hidden max-w-6xl mx-auto px-6">
        
        <div className="flex items-center gap-4 mb-12">
          <div className="w-8 h-px" style={{ background: 'linear-gradient(to right, transparent, #FF4D8D)' }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: '#FF4D8D', fontFamily: 'JetBrains Mono, monospace' }}>Sobre mí</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Hola, soy{' '}
              <span className="grad-text">Yadhira</span> 
            </h2>

            <div className="space-y-4 text-base" style={{ color: '#9490b0', lineHeight: 1.85 }}>
              <p>
                Soy estudiante de <span style={{ color: '#f0eeff' }}>Ingeniería de Sistemas en 7° ciclo</span>­­ 
                y, en este último tiempo, he desarrollado un gran interés por el mundo de los datos y cómo pueden influir en la toma de decisiones.
              </p>
              <p>
                Actualmente estoy aprendiendo <span style={{ color: '#c084fc' }}>Excel, SQL y Python</span> de manera autodidacta
                y a través de cursos online, fortaleciendo mis habilidades poco a poco.
              </p>
              <p>
                También me interesa el <span style={{ color: '#f9a8d4' }}>diseño UX/UI</span> especialmente
                cómo la presentación visual puede ayudar a que los datos cuenten historias. Creo que la unión entre análisis y diseño
                tiene un gran potencial.
              </p>
              <p style={{ color: '#5a5770', fontSize: '0.875rem', fontFamily: 'JetBrains Mono, monospace' }}>
                // Aprendiendo en público · cometiendo errores · creciendo cada día
              </p>
            </div>

            
            <div className="flex flex-wrap gap-3 mt-8">
              {traits.map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm transition-all duration-300 hover:border-pink-500/30 cursor-default"
                  style={{ color: '#c084fc' }}
                >
                  <span>{t.icon}</span>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          
          <div className="relative flex justify-center">
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full border border-fuchsia-400/10 animate-spin-slow" style={{ borderColor: 'rgba(255,77,141,0.1)' }} />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-52 h-52 rounded-full border border-purple-500/10 animate-spin-slow" style={{ borderColor: 'rgba(106,13,173,0.15)', animationDirection: 'reverse', animationDuration: '15s' }} />
            </div>

            
            <div className="relative z-10 grad-border-card p-8 w-72">
              {/* Avatar */}
              <div className="w-28 h-28 mx-auto mb-6 rounded-full p-[2px] bg-gradient-to-r from-pink-500 to-purple-500 shadow-lg shadow-pink-500/30">
                <img
                  src={foto}
                  alt="Yadhira"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-black mb-1" style={{ fontFamily: 'Syne, sans-serif' }}>Yadhira Saavedra</h3>
                <p className="text-xs mb-5" style={{ color: '#FF4D8D', fontFamily: 'JetBrains Mono, monospace' }}>Data Analyst in Training</p>
                <div className="space-y-3">
                  {[
                    { label: 'Excel', pct: 75 },
                    { label: 'SQL', pct: 60 },
                    { label: 'Python', pct: 30 },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-xs mb-1" style={{ color: '#9490b0', fontFamily: 'JetBrains Mono, monospace' }}>
                        <span>{s.label}</span>
                        <span style={{ color: '#c084fc' }}>{s.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${s.pct}%`, background: 'linear-gradient(to right, #FF4D8D, #6A0DAD)' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}