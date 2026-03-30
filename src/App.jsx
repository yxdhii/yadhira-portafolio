import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SobreMi from './components/SobreMi'
import Tecnologias from './components/Tecnologias'
import Proyectos from './components/Proyectos'
import Experiencia from './components/Experiencia'
import Contacto from './components/Contacto'

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <SobreMi />
        <Tecnologias />
        <Proyectos />
        <Experiencia />
        <Contacto />
      </main>
    </div>
  )
}
