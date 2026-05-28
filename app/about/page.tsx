import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function About() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--dark)] pt-24">
      <Navbar />

      <section className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-60">
            За NUVÉ
          </p>

          <h1 className="luxury-heading text-5xl md:text-8xl font-light mb-8 leading-[0.98] tracking-[0] fade-up">
            Beauty as
            <br />
            presence.
          </h1>

          <p className="text-xl leading-relaxed opacity-80 max-w-3xl mb-20 md:text-2xl">
            NUVÉ съчетава модерна визия, професионализъм и индивидуален подход.
            Пространство, в което всяко посещение е специално преживяване.
          </p>

          <div className="mb-20 border-y border-[#4E3B31]/12 py-16 md:mb-28 md:py-24">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] opacity-50">
              Our philosophy
            </p>

            <h2 className="luxury-heading max-w-5xl text-4xl font-light leading-tight tracking-[0] md:text-7xl">
              Всяка визия започва с внимание — към лицето, стила и начина, по
              който искаш да се почувстваш.
            </h2>
          </div>

          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] opacity-50">
                The artists
              </p>
              <h2 className="luxury-heading text-4xl font-light md:text-6xl">
                Екипът на NUVÉ
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 opacity-65 md:text-right">
              Специалисти, които работят прецизно, спокойно и с уважение към
              индивидуалната красота.
            </p>
          </div>

          <div className="space-y-20 md:space-y-28">
            <div className="team-card group grid rounded-[2.5rem] lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="team-portrait-stage flex min-h-[390px] items-end justify-center px-6 pt-10 md:min-h-[520px] lg:min-h-[560px] lg:-ml-8 lg:pt-16">
                <img
                  src="/galina.png"
                  alt="Галина Джилянова"
                  className="team-portrait-image h-[390px] w-auto max-w-[92%] object-contain object-bottom md:h-[520px] lg:-mb-10"
                />
              </div>
              <div className="p-8 pt-2 md:p-14 lg:pl-8">
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

            <div className="team-card group grid rounded-[2.5rem] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="order-2 p-8 pt-2 md:p-14 lg:order-1 lg:pr-8">
                <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-60">Професионален гримьор</p>
                <h2 className="text-4xl md:text-5xl font-light mb-6">Ралица Герова</h2>
                <p className="text-lg leading-relaxed opacity-80 mb-6">
                  За Ралица гримът е не просто работа, а страст и изкуство, чрез което подчертава уникалната красота на всеки клиент.
                </p>
                <p className="italic opacity-70">“Най-благородното изкуство е да правиш другите щастливи.”</p>
              </div>
              <div className="team-portrait-stage order-1 flex min-h-[390px] items-end justify-center px-6 pt-10 md:min-h-[520px] lg:order-2 lg:-mr-8 lg:min-h-[560px] lg:pt-16">
                <img
                  src="/ralica.png"
                  alt="Ралица Герова"
                  className="team-portrait-image h-[390px] w-auto max-w-[92%] object-contain object-bottom md:h-[520px] lg:-mb-10"
                />
              </div>
            </div>

            <div className="team-card group grid rounded-[2.5rem] lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="team-portrait-stage flex min-h-[390px] items-end justify-center px-6 pt-10 md:min-h-[520px] lg:-ml-8 lg:min-h-[560px] lg:pt-16">
                <img
                  src="/elizabet.png"
                  alt="Елизабет Костадинова"
                  className="team-portrait-image h-[380px] w-auto max-w-[92%] object-contain object-bottom md:h-[510px] lg:-mb-10"
                />
              </div>
              <div className="p-8 pt-2 md:p-14 lg:pl-8">
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
