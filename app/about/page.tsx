import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

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
                <Image
                  src="/galina.png"
                  alt="Галина Джилянова"
                  width={573}
                  height={822}
                  priority
                  className="team-portrait-image h-[390px] w-auto max-w-[92%] object-contain object-bottom md:h-[520px] lg:-mb-10"
                />
              </div>
              <div className="p-8 pt-2 md:p-14 lg:pl-8">
                <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-60">Основател • Фризьор</p>
                <h2 className="luxury-heading mb-6 text-4xl font-light leading-tight md:text-5xl">Галина Джилянова</h2>
                <p className="playfair text-lg leading-relaxed opacity-80">
                  С повече от 10 години опит в света на фризьорството, Галина създава визии с индивидуален подход и внимание към всеки детайл.
                </p>
                <p className="playfair text-lg leading-relaxed opacity-80">
                  Сертифициран Color Expert с международно призната квалификация, специализирана в цветовите трансформации, балеажи и съвременни техники за коса.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
  <a
    href="INSTAGRAM_LINK"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#4E3B31] text-[#F6F1EA] px-5 py-3 rounded-full hover:scale-105 transition duration-300"
  >
    Instagram
  </a>

  <a
    href="/gallery"
    className="border border-[#4E3B31]/20 px-5 py-3 rounded-full hover:bg-[#4E3B31] hover:text-[#F6F1EA] transition duration-300"
  >
    Портфолио
  </a>
</div>
              </div>
            </div>

            <div className="team-card group grid rounded-[2.5rem] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="order-2 p-8 pt-2 md:p-14 lg:order-1 lg:pr-8">
                <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-60">Професионален гримьор</p>
                <h2 className="luxury-heading mb-6 text-4xl font-light leading-tight md:text-5xl">Ралица Герова</h2>
                <p className="playfair text-lg leading-relaxed opacity-80">
                  За Ралица гримът е не просто работа, а страст и изкуство, чрез което подчертава уникалната красота на всеки клиент.
                </p>
                <p className="italic opacity-70">“Най-благородното изкуство е да правиш другите щастливи.”</p>
                <div className="mt-8 flex flex-wrap gap-3">
  <a
    href="INSTAGRAM_LINK"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#4E3B31] text-[#F6F1EA] px-5 py-3 rounded-full hover:scale-105 transition duration-300"
  >
    Instagram
  </a>

  <a
    href="/gallery"
    className="border border-[#4E3B31]/20 px-5 py-3 rounded-full hover:bg-[#4E3B31] hover:text-[#F6F1EA] transition duration-300"
  >
    Портфолио
  </a>
</div>
              </div>
              <div className="team-portrait-stage order-1 flex min-h-[390px] items-end justify-center px-6 pt-10 md:min-h-[520px] lg:order-2 lg:-mr-8 lg:min-h-[560px] lg:pt-16">
                <Image
                  src="/ralica.png"
                  alt="Ралица Герова"
                  width={597}
                  height={798}
                  className="team-portrait-image h-[390px] w-auto max-w-[92%] object-contain object-bottom md:h-[520px] lg:-mb-10"
                />
              </div>
            </div>

            <div className="team-card group grid rounded-[2.5rem] lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="team-portrait-stage flex min-h-[390px] items-end justify-center px-6 pt-10 md:min-h-[520px] lg:-ml-8 lg:min-h-[560px] lg:pt-16">
                <Image
                  src="/elizabet.png"
                  alt="Елизабет Костадинова"
                  width={673}
                  height={780}
                  className="team-portrait-image h-[380px] w-auto max-w-[92%] object-contain object-bottom md:h-[510px] lg:-mb-10"
                />
              </div>
              <div className="p-8 pt-2 md:p-14 lg:pl-8">
                <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-60">Мигли • Вежди</p>
                <h2 className="luxury-heading mb-6 text-4xl font-light leading-tight md:text-5xl">Елизабет Костадинова</h2>
                <p className="playfair text-lg leading-relaxed opacity-80">
                  Специалист по мигли и ламиниране на мигли и вежди, който създава визии, подчертаващи естествената нежност и чар.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
  <a
    href="INSTAGRAM_LINK"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#4E3B31] text-[#F6F1EA] px-5 py-3 rounded-full hover:scale-105 transition duration-300"
  >
    Instagram
  </a>

  <a
    href="/gallery"
    className="border border-[#4E3B31]/20 px-5 py-3 rounded-full hover:bg-[#4E3B31] hover:text-[#F6F1EA] transition duration-300"
  >
    Портфолио
  </a>
</div>
              </div>
            </div>
            <div className="team-card group grid rounded-[2.5rem] lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
  <div className="order-2 p-8 pt-2 md:p-14 lg:order-1 lg:pr-8">
    <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-60">
      Маникюрист
    </p>

    <h2 className="luxury-heading mb-6 text-4xl font-light leading-tight md:text-5xl">
      Християна Стоянова
    </h2>

    <p className="playfair text-lg leading-relaxed opacity-80">
  Християна съчетава прецизност, естетика и внимание към всеки детайл,
  създавайки елегантни и стилни маникюри.
</p>

<p className="playfair text-lg leading-relaxed opacity-80">
  За нея красивите ръце са естествен завършек на безупречната визия и
  отражение на индивидуалния стил.
</p>
<div className="mt-8 flex flex-wrap gap-3">
  <a
    href="INSTAGRAM_LINK"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#4E3B31] text-[#F6F1EA] px-5 py-3 rounded-full hover:scale-105 transition duration-300"
  >
    Instagram
  </a>

  <a
    href="/gallery"
    className="border border-[#4E3B31]/20 px-5 py-3 rounded-full hover:bg-[#4E3B31] hover:text-[#F6F1EA] transition duration-300"
  >
    Портфолио
  </a>
</div>
  </div>

  <div className="team-portrait-stage order-1 flex min-h-[390px] items-end justify-center px-6 pt-10 md:min-h-[520px] lg:order-2 lg:-mr-8 lg:min-h-[560px] lg:pt-16">
    <Image
      src="/hristiyana.png"
      alt="Християна Стоянова"
      width={673}
      height={780}
      className="team-portrait-image h-[390px] w-auto max-w-[92%] object-contain object-bottom md:h-[520px] lg:-mb-10"
    />
  </div>
</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    
  );
}
