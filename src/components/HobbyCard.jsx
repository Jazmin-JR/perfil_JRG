import React from 'react'

export default function HobbyCard({ title, desc, tips = [] }){
  return (
    <article className="hobby-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      {tips.length > 0 && (
        <>
          <h4>Consejos</h4>
          <ul>
            {tips.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </>
      )}
    </article>
  )
}
