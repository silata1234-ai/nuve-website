import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3F2F27] text-[#F6F1EA] px-6 pb-28 pt-16 md:pb-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-3xl tracking-[0.3em] mb-5">NUVÉ</h2>

          <p className="opacity-70 leading-relaxed">
            Beauty salon във Варна, създаден за стил, увереност и естествена красота.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-5 uppercase tracking-[0.25em] text-sm opacity-60">
            Навигация
          </h3>

          <div className="space-y-3">
            <Link href="/about" className="block hover:opacity-70 transition">
              За нас
            </Link>

            <Link href="/services" className="block hover:opacity-70 transition">
              Услуги
            </Link>

            <Link href="/gallery" className="block hover:opacity-70 transition">
              Галерия
            </Link>

            <Link href="/contact" className="block hover:opacity-70 transition">
              Запази час
            </Link>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="mb-5 uppercase tracking-[0.25em] text-sm opacity-60">
            Адрес
          </h3>

          <div className="space-y-3 opacity-80 leading-relaxed">
            <p>ул. Генерал Георги Попов 28</p>
            <p>Варна, България 9000</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 uppercase tracking-[0.25em] text-sm opacity-60">
            Контакти
          </h3>

          <div className="space-y-3 opacity-80">
            <p>+359 888 104 488</p>
            <p>10:00 – 18:00</p>

            <div className="flex gap-3 pt-3">
  <a
    href="https://www.instagram.com/_nuve_by_galinadzhilyanov/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#3F2F27]"
  >
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  </a>

  <a
    href="https://www.facebook.com/profile.php?id=61582631022245"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#3F2F27]"
  >
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.6-.1-1.5-.2-2.4-.2-2.4 0-4 1.5-4 4.1V11H7.7v3H10v7h3.5Z" />
    </svg>
  </a>
</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-white/10 text-sm opacity-50">
        © 2026 NUVÉ Beauty Salon. All rights reserved.
      </div>
    </footer>
  );
}
