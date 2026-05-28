"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FloatingBookingButton() {
  const pathname = usePathname();

  if (pathname === "/contact") {
    return null;
  }

  return (
    <Link
      href="/contact"
      className="fixed inset-x-5 bottom-5 z-[70] flex min-h-12 items-center justify-center rounded-full bg-[#4E3B31] px-6 py-3 text-center text-xs font-medium uppercase tracking-[0.22em] text-[#F6F1EA] shadow-[0_18px_45px_rgba(78,59,49,0.24)] transition active:scale-[0.98] md:hidden"
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)" }}
    >
      Запази час
    </Link>
  );
}
