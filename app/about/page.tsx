import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function About() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--dark)] pt-24">
      <Navbar />

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
            <div className="grid lg:grid-cols-2 gap-10 items-center bg-[var(--card)] rounded-[2.5rem] overflow-hidden shadow-xl">
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

            <div className="grid lg:grid-cols-2 gap-10 items-center bg-[var(--card)] rounded-[2.5rem] overflow-hidden shadow-xl">
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

            <div className="grid lg:grid-cols-2 gap-10 items-center bg-[var(--card)] rounded-[2.5rem] overflow-hidden shadow-xl">
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
      <Footer />
    </div>
  );
}