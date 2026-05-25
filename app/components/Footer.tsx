export default function Footer() {
  return (
    <footer className="bg-[#3F2F27] text-[#F6F1EA] px-6 py-14">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-3xl tracking-[0.3em] mb-4">NUVÉ</h2>
          <p className="opacity-70 leading-relaxed">
            Beauty salon във Варна, създаден за стил, увереност и естествена красота.
          </p>
        </div>

        <div>
          <h3 className="mb-4 uppercase tracking-[0.25em] text-sm opacity-70">
            Навигация
          </h3>
          <div className="space-y-3">
            <a href="/about" className="block hover:opacity-70">За нас</a>
            <a href="/services" className="block hover:opacity-70">Услуги</a>
            <a href="/gallery" className="block hover:opacity-70">Галерия</a>
            <a href="/contact" className="block hover:opacity-70">Запази час</a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 uppercase tracking-[0.25em] text-sm opacity-70">
            Контакти
          </h3>
          <p className="opacity-80">ул. Генерал Георги Попов 28</p>
          <p className="opacity-80">Варна, България 9000</p>
          <p className="opacity-80 mt-3">10:00 – 18:00</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/15 text-sm opacity-60">
        © 2026 NUVÉ Beauty Salon. All rights reserved.
      </div>
    </footer>
  );
}