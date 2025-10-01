import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HobbyCard from './components/HobbyCard'

export default function App() {
  const hobbies = [
    {
      title: 'Montar a caballo',
      desc: 'Disfruto montar a caballo porque me conecta con la naturaleza y me transmite libertad. Es una actividad que combina disciplina y aventura.',
      tips: ['Practicar con regularidad', 'Cuidar al caballo con cariño']
    },
    {
      title: 'Pintar y cocinar',
      desc: 'Me gusta expresar mi creatividad a través de la pintura y también experimentar sabores nuevos en la cocina. Ambas actividades me relajan y me permiten innovar.',
      tips: ['Explorar diferentes técnicas de pintura', 'Probar recetas de otras culturas']
    }
  ]

  const shareProfile = async () => {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Mi perfil',
          text: 'Mira mi página personal',
          url
        })
      } catch (err) {
        console.log('Compartir cancelado', err)
      }
    } else {
      // fallback: copiar al portapapeles
      try {
        await navigator.clipboard.writeText(url)
        alert('URL copiada al portapapeles: ' + url)
      } catch {
        alert('No se pudo copiar automáticamente. Copia la URL manualmente: ' + url)
      }
    }
  }

  return (
    <div className="page">
      <Header />
      <main>
        <Hero onShare={shareProfile} />
        <section className="hobbies" aria-label="Pasatiempos">
          <h2>Mis pasatiempos</h2>
          <div className="hobby-grid">
            {hobbies.map((h, i) => (
              <HobbyCard key={i} {...h} />
            ))}
          </div>
        </section>
      </main>
      <footer className="footer">
        <div>© {new Date().getFullYear()} Jazmín Roldán Guzmán</div>
        <div className="links">
          <a href="https://github.com/Jazmin-JR" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:jazminguzman2433@gmail.com">Email</a>
        </div>
      </footer>
    </div>
  )
}
