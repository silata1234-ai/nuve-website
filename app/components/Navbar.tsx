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
          <a href="/contact" className="hover:opacity-70 transition">Запази час</a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl leading-none"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#F6F1EA] border-t border-[#E7DED2] px-6 py-6 space-y-5 text-lg">
          <a href="/about" className="block">За нас</a>
          <a href="/services" className="block">Услуги</a>
          <a href="/contact" className="block">Запази час</a>
        </div>
      )}
    </nav>
  );
}