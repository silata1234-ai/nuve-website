export default function About() {
  return (
    <div className="min-h-screen bg-[#F6F1EA] text-[#4E3B31] pt-24">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#F6F1EA]/85 border-b border-[#E7DED2]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-semibold tracking-[0.3em]">NUVÉ</a>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="/about">За нас</a>
            <a href="/services">Услуги</a>
            <a href="/contact">Запази час</a>
          </div>
          <a href="/contact" className="bg-[#4E3B31] text-white px-5 py-2 rounded-full text-sm">Запази час</a>
        </div>
      </nav>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-60">За NUVÉ</p>

          <h1 className="text-5xl md:text-7xl font-light mb-10 leading-tight">
            Място за красота,
            <br />
            стил и увереност.
          </h1>

          <p className="text-xl leading-relaxed opacity-80 max-w-3xl mb-20">
            NUVÉ съчетава модерна визия, професионализъм и индивидуален подход.
            Пространство, в което всяко посещение е специално преживяване.
          </p>

          <div className="space-y-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#EFE5DA] rounded-[2.5rem] overflow-hidden shadow-xl">
              <img src="/galina.png" alt="Галина Джилянова" className="w-full h-[520px] object-cover object-top" />
              <div className="p-8 md:p-14">
                <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-60">Основател • Фризьор</p>
                <h2 className="text-4xl md:text-5xl font-light mb-6">Галина Джилянова</h2>
                <p className="text-lg leading-relaxed opacity-80 mb-6">
                  С повече от 10 години опит в света на фризьорството, Галина създава визии с индивидуален подход и внимание към всеки детайл.
                </p>
                <p className="text-lg leading-relaxed opacity-80">
                  Специализира в цветови трансформации, балеажи и модерни техники за коса.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#EFE5DA] rounded-[2.5rem] overflow-hidden shadow-xl">
              <div className="p-8 md:p-14 order-2 lg:order-1">
                <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-60">Професионален гримьор</p>
                <h2 className="text-4xl md:text-5xl font-light mb-6">Ралица Герова</h2>
                <p className="text-lg leading-relaxed opacity-80 mb-6">
                  За Ралица гримът е не просто работа, а страст и изкуство, чрез което подчертава уникалната красота на всеки клиент.
                </p>
                <p className="italic opacity-70">“Най-благородното изкуство е да правиш другите щастливи.”</p>
              </div>
              <img src="/ralica.png" alt="Ралица Герова" className="w-full h-[520px] object-cover object-top order-1 lg:order-2" />
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#EFE5DA] rounded-[2.5rem] overflow-hidden shadow-xl">
              <img src="/elizabet.png" alt="Елизабет Костадинова" className="w-full h-[520px] object-cover object-top" />
              <div className="p-8 md:p-14">
                <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-60">Мигли • Вежди</p>
                <h2 className="text-4xl md:text-5xl font-light mb-6">Елизабет Костадинова</h2>
                <p className="text-lg leading-relaxed opacity-80">
                  Специалист по мигли и ламиниране на мигли и вежди, който създава визии, подчертаващи естествената нежност и чар.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}