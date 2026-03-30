import { useState, useEffect } from 'react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Tecnologías', href: '#tecnologias' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contáctame', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#inicio')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setActive(href)
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(10,10,16,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <button
          onClick={() => handleNav('#inicio')}
          className="font-display font-bold text-lg tracking-tight"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          <span className="grad-text">YS</span>
          <span className="text-white/40 ml-1 font-light text-sm">·portfolio</span>
        </button>

        
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="relative px-4 py-2 rounded-full text-sm transition-all duration-300"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 500,
                color: active === l.href ? '#FF4D8D' : 'rgba(240,238,255,0.6)',
                background: active === l.href ? 'rgba(255,77,141,0.08)' : 'transparent',
              }}
            >
              {l.label}
              {active === l.href && (
                <span
                  className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                  style={{ background: '#FF4D8D', boxShadow: '0 0 6px #FF4D8D' }}
                />
              )}
            </button>
          ))}
        </nav>

        
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white/60 transition-all" style={{ transform: menuOpen ? 'rotate(45deg) translate(4px,4px)' : 'none' }} />
          <span className="block w-6 h-0.5 bg-white/60 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
          <span className="block w-6 h-0.5 bg-white/60 transition-all" style={{ transform: menuOpen ? 'rotate(-45deg) translate(4px,-4px)' : 'none' }} />
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden glass border-t border-white/05 px-6 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-left py-2 px-3 rounded-lg text-sm transition-all"
              style={{
                fontFamily: 'Syne, sans-serif',
                color: active === l.href ? '#FF4D8D' : 'rgba(240,238,255,0.7)',
                background: active === l.href ? 'rgba(255,77,141,0.08)' : 'transparent',
              }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
