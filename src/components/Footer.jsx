import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <a href="#home" className="text-2xl font-extrabold text-purple">Jadoo</a>
          <p className="mt-3 text-grayish">Book your trip in minutes, get full control for much longer.</p>
        </div>
        <div>
          <h3 className="font-semibold text-navy">Company</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#services" className="hover:text-navy">About</a></li>
            <li><a href="#" className="hover:text-navy">Careers</a></li>
            <li><a href="#" className="hover:text-navy">Mobile</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-navy">Contact</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-navy">Help/FAQ</a></li>
            <li><a href="#" className="hover:text-navy">Press</a></li>
            <li><a href="#" className="hover:text-navy">Affiliates</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-navy">More</h3>
          <ul className="mt-3 space-y-2">
            <li><a href="#" className="hover:text-navy">Airlinefees</a></li>
            <li><a href="#" className="hover:text-navy">Airline</a></li>
            <li><a href="#" className="hover:text-navy">Low fare tips</a></li>
          </ul>
        </div>
      </div>
      <div className="py-6 text-center text-sm text-grayish">© {new Date().getFullYear()} Jadoo - All rights reserved</div>
    </footer>
  )
}

