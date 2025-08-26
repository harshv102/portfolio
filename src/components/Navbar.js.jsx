import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0b0f1a]/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 grid place-items-center font-bold">
            HV
          </div>
          <span className="font-semibold">Harsh Vardhan</span>
        </div>

        {/* Hamburger menu button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Navigation links */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col absolute top-16 left-0 w-full bg-[#0b0f1a]/90 md:static md:flex md:flex-row md:items-center md:gap-8 gap-4 text-sm text-gray-300 md:ml-auto md:w-auto`}
        >
          <a href="#services" className="hover:text-white px-4 py-2" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#About" className="hover:text-white px-4 py-2" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#Projects" className="hover:text-white px-4 py-2" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#work" className="hover:text-white px-4 py-2" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#skills" className="hover:text-white px-4 py-2" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="/resume.pdf.pdf" download className="hover:text-white px-4 py-2" onClick={() => setMenuOpen(false)}>Resume</a>
          <a href="#contact" className="hover:text-white px-4 py-2" onClick={() => setMenuOpen(false)}>Contact</a>
          <a
            href="#contact"
            className="ml-0 md:ml-4 inline-flex items-center rounded-full px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90"
            onClick={() => setMenuOpen(false)}
          >
            Let’s Talk →
          </a>
        </nav>
      </div>
    </header>
  );
}