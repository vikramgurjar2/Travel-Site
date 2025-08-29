import React from 'react'

const partners = [
  { name: 'Axon', logo: '/src/assets/partners/axon.svg' },
  { name: 'Jetstar', logo: '/src/assets/partners/jetstar.svg' },
  { name: 'Expedia', logo: '/src/assets/partners/expedia.svg' },
  { name: 'Qantas', logo: '/src/assets/partners/qantas.svg' },
  { name: 'Alitalia', logo: '/src/assets/partners/alitalia.svg' }
]

export default function Partners() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center gap-6">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center justify-center rounded-2xl bg-white p-6 shadow-soft hover:shadow-card transition-shadow">
              <img src={p.logo} alt={`${p.name} logo`} className="h-6 object-contain" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

