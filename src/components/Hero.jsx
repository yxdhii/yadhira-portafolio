import { useState, useEffect } from 'react'

const typingPhrases = [
  'Data Analyst en Formación',
  'Apasionada por los datos',
  'Estudiante de Ing. de Sistemas e informática',
  'Exploradora de UX/UI',
]

export default function Hero() {
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const phrase = typingPhrases[phraseIdx]
    if (typing) {
      if (displayed.length < phrase.length) {
        const t = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 65)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2200)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
        return () => clearTimeout(t)
      } else {
        setPhraseIdx((i) => (i + 1) % typingPhrases.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, phraseIdx])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(106,13,173,0.25) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(255,77,141,0.12) 0%, transparent 60%), #0a0a10' }} />

      
      <div className="orb w-96 h-96 top-1/4 -left-32 animate-glow" style={{ background: 'rgba(106,13,173,0.3)' }} />
      <div className="orb w-72 h-72 bottom-1/4 -right-24 animate-glow" style={{ background: 'rgba(255,77,141,0.2)', animationDelay: '1.5s' }} />
      <div className="orb w-48 h-48 top-16 right-1/3 animate-glow" style={{ background: 'rgba(168,85,247,0.15)', animationDelay: '3s' }} />

      
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-fuchsia-400/10 animate-spin-slow hidden lg:block"
        style={{ borderColor: 'rgba(255,77,141,0.08)' }}
      />
      <div
        className="absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-purple-500/05 animate-spin-slow hidden lg:block"
        style={{ borderColor: 'rgba(106,13,173,0.06)', animationDirection: 'reverse', animationDuration: '30s' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12 text-center lg:text-left">
        <div className="lg:max-w-3xl">
          
          <div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full text-xs tracking-widest uppercase glass"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: '#FF4D8D', borderColor: 'rgba(255,77,141,0.2)' }}
          >
            <span className="w-2 h-2 rounded-full animate-glow" style={{ background: '#FF4D8D', boxShadow: '0 0 8px #FF4D8D' }} />
            Disponible para aprender y crecer
          </div>

          
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tight mb-6"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="text-white">Yadhira</span>
            <br />
            <span className="grad-text">Saavedra</span>
          </h1>

          
          <div className="text-xl sm:text-2xl mb-4 h-8" style={{ fontFamily: 'Syne, sans-serif', color: 'rgba(240,238,255,0.7)' }}>
            <span>{displayed}</span>
            <span className="typing-cursor" style={{ color: '#FF4D8D' }}>|</span>
          </div>

          
          <p className="text-base mb-10 max-w-lg mx-auto lg:mx-0" style={{ color: '#9490b0', lineHeight: 1.8 }}>
            Apasionada por los datos, la tecnología y el diseño UX/UI.
            Actualmente aprendiendo y fortaleciendo mis habilidades en el área.
          </p>

          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button
              className="btn-primary px-8 py-3.5 rounded-full text-sm"
              onClick={() => document.querySelector('#proyectos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Ver proyectos →</span>
            </button>
            <button
              className="btn-ghost px-8 py-3.5 rounded-full text-sm"
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contáctame
            </button>
          </div>

          
          <div className="flex flex-wrap gap-8 mt-16 justify-center lg:justify-start">
            {[
              { num: '7°', label: 'Ciclo activo' },
              { num: '3+', label: 'Tecnologías aprendiendo' },
              { num: '∞', label: 'Aprendizaje continuo' },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="text-3xl font-black grad-text" style={{ fontFamily: 'Syne, sans-serif' }}>{s.num}</div>
                <div className="text-xs mt-1" style={{ color: '#5a5770', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.08em' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <div className="text-xs tracking-widest uppercase" style={{ color: '#5a5770', fontFamily: 'JetBrains Mono, monospace' }}>scroll</div>
        <div className="w-px h-8" style={{ background: 'linear-gradient(to bottom, #FF4D8D, transparent)' }} />
      </div>
    </section>
  )
}
