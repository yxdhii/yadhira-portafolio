import { useEffect, useRef, useState } from 'react'
import { Mail, ExternalLink, GitCommit, Send, Copy, Check, Heart } from 'lucide-react'

const contacts = [
  {
    label: 'Email',
    value: 'yadhirasaavedra069@gmail.com',
    icon: Mail,
    href: 'mailto:yadhirasaavedra069@gmail.com',
    color: '#FF4D8D',
    badge: 'Respondo en 24h',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/itsyxdhi',
    icon: ExternalLink,
    href: 'https://www.linkedin.com/in/itsyxdhi/',
    color: '#0ea5e9',
    badge: 'Conectemos',
  },
  {
    label: 'GitHub',
    value: 'github.com/yxdhii',
    icon: GitCommit,
    href: 'https://github.com/yxdhii',
    color: '#a855f7',
    badge: 'Mis proyectos',
  },
]

export default function Contacto() {
  const ref = useRef(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.replace('section-hidden', 'section-visible') },
      { threshold: 0.1 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('yadhirasaavedra069@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contacto" className="relative py-28 overflow-hidden">
      
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(106,13,173,0.2) 0%, transparent 70%)' }} />
      <div className="orb w-80 h-80 left-1/2 -translate-x-1/2 top-0 animate-glow" style={{ background: 'rgba(255,77,141,0.1)' }} />

      <div ref={ref} className="section-hidden max-w-4xl mx-auto px-6 text-center">
       
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-8 h-px" style={{ background: 'linear-gradient(to right, transparent, #FF4D8D)' }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: '#FF4D8D', fontFamily: 'JetBrains Mono, monospace' }}>Hablemos</span>
          <div className="w-8 h-px" style={{ background: 'linear-gradient(to left, transparent, #FF4D8D)' }} />
        </div>

        <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
          ¿Tienes algo{' '}
          <span className="grad-text">interesante</span>
          <br />que compartir?
        </h2>

        <p className="text-base mb-14 max-w-lg mx-auto" style={{ color: '#9490b0', lineHeight: 1.8 }}>
          Estoy abierta a oportunidades de aprendizaje, prácticas, mentorías y colaboraciones.
          ¡No dudes en escribirme!
        </p>

        
        <div className="grid sm:grid-cols-3 gap-5 mb-12">
          {contacts.map((c) => {
            const Icon = c.icon 
            return (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group grad-border-card p-6 flex flex-col items-center gap-3 no-underline transition-all duration-300 hover:-translate-y-2"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}
                >
                  
                  <Icon size={22} color={c.color} />
                </div>
                <span className="text-xs" style={{ color: '#5a5770', fontFamily: 'JetBrains Mono, monospace' }}>{c.badge}</span>
                <h3 className="font-black text-base text-white" style={{ fontFamily: 'Syne, sans-serif' }}>{c.label}</h3>
                <p className="text-xs break-all" style={{ color: c.color, fontFamily: 'JetBrains Mono, monospace' }}>{c.value}</p>
              </a>
            )
          })}
        </div>

        {/* Mi correo */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:yadhirasaavedra069@gmail.com"
            className="btn-primary px-10 py-4 rounded-full text-sm inline-flex items-center gap-2 justify-center"
          >
            <Send size={15} />
            <span>Enviar email</span>
          </a>
          <button
            onClick={copyEmail}
            className="btn-ghost px-8 py-4 rounded-full text-sm inline-flex items-center gap-2"
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            {copied ? '¡Copiado!' : 'Copiar email'}
          </button>
        </div>

        
        <p className="mt-16 text-xs flex items-center justify-center gap-1" style={{ color: '#5a5770', fontFamily: 'JetBrains Mono, monospace' }}>
          © 2026 Yadhira Saavedra · Data Analyst in Training · Built with React & Tailwind {new Date().getFullYear()}
        </p>
      </div>
    </section>
  )
}