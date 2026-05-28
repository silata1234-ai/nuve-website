import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#3F2F27] text-[#F6F1EA] px-6 py-16">
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

            <div className="flex gap-4 pt-2">
              <a
                href="https://www.instagram.com/_nuve_by_galinadzhilyanov/"
                target="_blank"
                className="hover:opacity-70 transition"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61582631022245"
                target="_blank"
                className="hover:opacity-70 transition"
              >
                Facebook
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
