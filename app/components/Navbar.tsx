"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/about", label: "За нас" },
  { href: "/services", label: "Услуги" },
  { href: "/gallery", label: "Галерия" },
  { href: "/contact", label: "Запази час" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [openAtPath, setOpenAtPath] = useState<string | null>(null);
  const open = openAtPath === pathname;

  return (
    <nav className="fixed top-0 left-0 right-0 z-[80] backdrop-blur-md bg-[#F6F1EA]/90 border-b border-[#E7DED2]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          onClick={() => setOpenAtPath(null)}
          className="logo-font text-4xl md:text-5xl text-[#4E3B31]"
        >
          NUVÉ
        </Link>

        <div className="hidden md:flex gap-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:opacity-70 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpenAtPath(open ? null : pathname)}
          aria-expanded={open}
          aria-controls="mobile-menu"
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
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          open
            ? "max-h-80 opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-[#F6F1EA] border-t border-[#E7DED2] px-6 py-6 space-y-5 text-lg shadow-xl">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpenAtPath(null)}
              className="block hover:translate-x-2 transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
