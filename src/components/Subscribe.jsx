import React, { useState } from 'react'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!ok) {
      setError('Please enter a valid email.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section id="subscribe" className="relative py-20">
      <div className="absolute inset-0 -z-10 plus-pattern opacity-50"></div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-purple text-white p-8 sm:p-12 shadow-card">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center">Subscribe to get information, latest news and other interesting offers about Jadoo</h2>
          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your email" className="flex-1 rounded-full bg-white px-5 py-3 text-navy placeholder-grayish focus:outline-none" aria-invalid={!!error} aria-describedby="email-error" />
            <button type="submit" className="btn btn-lg bg-yellow text-white hover:brightness-95">Subscribe</button>
          </form>
          {error && <p id="email-error" className="mt-2 text-sm text-orange">{error}</p>}
          {submitted && <p className="mt-2 text-sm">Thanks for subscribing! 🎉</p>}
        </div>
      </div>
    </section>
  )
}

