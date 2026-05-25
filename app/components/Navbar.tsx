"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#F6F1EA]/90 border-b border-[#E7DED2]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-2xl font-semibold tracking-[0.3em]">
          NUVÉ
        </a>

        <div className="hidden md:flex gap-8 text-sm">
          <a href="/about" className="hover:opacity-70 transition">За нас</a>
          <a href="/services" className="hover:opacity-70 transition">Услуги</a>
          <a href="/gallery" className="hover:opacity-70 transition">Галерия</a>
          <a href="/contact" className="hover:opacity-70 transition">Запази час</a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Меню"
        >
          <span
            className={`w-7 h-[2px] bg-[#4E3B31] rounded-full transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-7 h-[2px] bg-[#4E3B31] rounded-full transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-7 h-[2px] bg-[#4E3B31] rounded-full transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#F6F1EA] border-t border-[#E7DED2] px-6 py-6 space-y-5 text-lg shadow-xl">
          <a href="/about" className="block hover:translate-x-2 transition duration-300">За нас</a>
          <a href="/services" className="block hover:translate-x-2 transition duration-300">Услуги</a>
          <a href="/gallery" className="block hover:translate-x-2 transition duration-300">Галерия</a>
          <a href="/contact" className="block hover:translate-x-2 transition duration-300">Запази час</a>
        </div>
      </div>
    </nav>
  );
}