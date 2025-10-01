import React from 'react'

export default function Hero({ onShare }){
  return (
    <section id="about" className="hero">
      <div className="hero-inner">
        <img src="/public/foto_titulo.jpg" alt="Jazmín Roldán Guzmán" className="profile-rounded-full w-48 mx-auto" />
        <div className="bio">
          <h2>¿Quién soy?</h2>
          <p>Hola — soy <strong>Jazmín Roldán Guzmán</strong>, Soy programadora apasionada y motivada, con experiencia en proyectos académicos y sólidos conocimientos en desarrollo web y móvil. 
          Manejo tecnologías como JavaScript, Python, Java, React.js, MySQL y Django, aplicando buenas prácticas para crear soluciones innovadoras y eficientes que mejoren la experiencia del usuario. </p>
          <p><strong>Ubicación:</strong> Durango, México</p>
          <div className="hero-actions">
            <button onClick={onShare}>Compartir mi página</button>
            <a className="download-cv" href="/TuCV.pdf" target="_blank" rel="noreferrer">Descargar CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}
