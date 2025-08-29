import React, { useState } from "react";
import logoSvg from "../assets/partners/logo.svg";

const links = [
  { href: "#destinations", label: "Destinations" },
  { href: "#hotels", label: "Hotels" },
  { href: "#flights", label: "Flights" },
  { href: "#bookings", label: "Bookings" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header
      id="navbar"
      className="sticky w-full top-0 z-50 bg-transparent backdrop-blur-sm"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <img src={logoSvg} alt="Logo" className="h-8 w-auto" />

          <div className="hidden md:flex items-center gap-8">
            {/* Main Navigation Links */}
            {links.map((l) => (
              <a key={l.href} href={l.href} className="navbar-link">
                {l.label}
              </a>
            ))}

            {/* Login Link */}
            <a href="#login" className="navbar-link">
              Login
            </a>

            {/* Sign Up Button */}
            <a
              href="#signup"
              className="px-6 py-2 border border-[#212832] rounded-md text-[#212832] hover:bg-[#212832] hover:text-white transition-colors"
            >
              Sign up
            </a>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 navbar-link"
              >
                EN
                <svg
                  width="9"
                  height="5"
                  viewBox="0 0 9 5"
                  fill="none"
                  className="transition-transform duration-200"
                >
                  <path d="M0.5 0.5L4 4L7.5 0.5" stroke="#212832" />
                </svg>
              </button>

              {langOpen && (
                <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-1 min-w-[60px]">
                  <a
                    href="#"
                    className="block px-3 py-1 text-sm hover:bg-gray-100"
                  >
                    EN
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-1 text-sm hover:bg-gray-100"
                  >
                    ES
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-1 text-sm hover:bg-gray-100"
                  >
                    FR
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            aria-label="Open Menu"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white/95 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 py-3 space-y-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="navbar-link block w-full px-3 py-2 rounded-md"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#login"
              className="navbar-link block w-full px-3 py-2 rounded-md"
              onClick={() => setOpen(false)}
            >
              Login
            </a>
            <a
              href="#signup"
              className="block w-full px-6 py-2 mt-4 border border-[#212832] rounded-md text-[#212832] text-center hover:bg-[#212832] hover:text-white transition-colors"
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
