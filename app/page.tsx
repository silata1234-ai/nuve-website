"use client";

import { useState } from "react";

export default function NuveHomepage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = () => setBookingOpen(true);

  return (
    <div className="min-h-screen bg-[#F6F1EA] text-[#4E3B31]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#F6F1EA]/85 border-b border-[#E7DED2]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="text-2xl font-semibold tracking-[0.3em]">
            NUVÉ
          </a>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:opacity-70 transition">За нас</a>
            <a href="#services" className="hover:opacity-70 transition">Услуги</a>
            <a href="#team" className="hover:opacity-70 transition">Екип</a>
            <a href="#booking" className="hover:opacity-70 transition">Запази час</a>
            <a href="#contact" className="hover:opacity-70 transition">Контакти</a>
          </div>

          <button
            onClick={openBooking}
            className="bg-[#4E3B31] text-white px-5 py-2 rounded-full text-sm hover:opacity-90 transition"
          >
            Запази час
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-105 blur-[3px]"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[#3a271f]/25" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#F6F1EA] via-[#F6F1EA]/55 to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-5xl pt-20">
          <p className="uppercase tracking-[0.5em] text-xs md:text-sm mb-6 text-[#F6F1EA]/85">
            NUVÉ BEAUTY SALON • VARNA
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 text-[#F6F1EA]">
            Красотата започва
            <br />
            с усещане.
          </h1>

          <p className="text-base md:text-xl text-[#F6F1EA]/85 max-w-2xl mx-auto leading-relaxed mb-10">
            Луксозно beauty пространство във Варна, създадено за стил,
            увереност и индивидуален подход към всяка визия.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openBooking}
              className="bg-[#F6F1EA] text-[#4E3B31] px-8 py-4 rounded-full hover:scale-105 transition duration-300 font-medium shadow-2xl"
            >
              Запази час
            </button>

            <a
              href="#services"
              className="border border-[#F6F1EA]/70 text-[#F6F1EA] px-8 py-4 rounded-full hover:bg-[#F6F1EA] hover:text-[#4E3B31] transition duration-300"
            >
              Разгледай услугите
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 border-b border-[#E7DED2]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-60">
              За NUVÉ
            </p>

            <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
              Място за красота,
              <br />
              стил и увереност.
            </h2>

            <p className="text-lg leading-relaxed opacity-80 mb-6">
              NUVÉ съчетава модерна визия, професионализъм и индивидуален
              подход. Пространство, в което всяко посещение е специално
              преживяване.
            </p>

            <p className="text-lg leading-relaxed opacity-80">
              Вярваме, че красивият резултат започва с внимание към човека,
              неговия стил и усещането да бъде себе си.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#E8DDD1] p-10 shadow-xl">
            <p className="text-3xl md:text-4xl font-light leading-tight mb-8">
              “Естествена красота, подчертана с финес.”
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm uppercase tracking-[0.25em] opacity-70">
              <p>Hair</p>
              <p>Makeup</p>
              <p>Lashes</p>
              <p>Brows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-32 px-6 bg-[#EFE5DA] border-b border-[#E0D4C7]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-60">
              Услуги
            </p>

            <h2 className="text-4xl md:text-6xl font-light leading-tight">
              Подбрани услуги за твоята визия.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Фризьорство",
                text: "Подстригване, боядисване, балеаж, терапии и официални прически.",
              },
              {
                title: "Грим",
                text: "Естествени, вечерни, булчински и артистични визии за специални моменти.",
              },
              {
                title: "Мигли и вежди",
                text: "Ламиниране, оформяне и визии, които подчертават естественото излъчване.",
              },
              {
                title: "Маникюр",
                text: "Маникюр, гел лак, изграждане и clean beauty визии.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-[#F6F1EA] rounded-[2rem] p-8 min-h-[280px] flex flex-col justify-between hover:-translate-y-2 transition duration-300 shadow-lg"
              >
                <h3 className="text-2xl mb-6 font-light">{service.title}</h3>
                <p className="leading-relaxed opacity-75">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-32 px-6 bg-[#F6F1EA] border-b border-[#E7DED2]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-60">
              Екип
            </p>

            <h2 className="text-4xl md:text-6xl font-light">
              Хората зад NUVÉ
            </h2>
          </div>

          <div className="space-y-16">
            {/* Galina */}
            <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#EFE5DA] rounded-[2.5rem] overflow-hidden shadow-xl">
              <img
                src="/galina.png"
                alt="Галина Джилянова"
                className="w-full h-[520px] object-cover object-top"
              />

              <div className="p-8 md:p-14">
                <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-60">
                  Основател • Фризьор
                </p>

                <h3 className="text-4xl md:text-5xl font-light mb-6">
                  Галина Джилянова
                </h3>

                <p className="text-lg leading-relaxed opacity-80 mb-6">
                  С повече от 10 години опит в света на фризьорството,
                  Галина създава визии с индивидуален подход и внимание към
                  всеки детайл.
                </p>

                <p className="text-lg leading-relaxed opacity-80 mb-8">
                  Специализира в цветови трансформации, балеажи и модерни
                  техники за коса.
                </p>

                <button
                  onClick={openBooking}
                  className="bg-[#4E3B31] text-white px-8 py-4 rounded-full hover:scale-105 transition duration-300"
                >
                  Запази час
                </button>
              </div>
            </div>

            {/* Ralitsa */}
            <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#EFE5DA] rounded-[2.5rem] overflow-hidden shadow-xl">
              <div className="p-8 md:p-14 order-2 lg:order-1">
                <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-60">
                  Професионален гримьор
                </p>

                <h3 className="text-4xl md:text-5xl font-light mb-6">
                  Ралица Герова
                </h3>

                <p className="text-lg leading-relaxed opacity-80 mb-6">
                  За Ралица гримът е не просто работа, а страст и изкуство,
                  чрез което подчертава уникалната красота на всеки клиент.
                </p>

                <p className="text-lg leading-relaxed opacity-80 mb-6">
                  Създава визии за сватби, фотосесии, специални събития и
                  модерни beauty проекти.
                </p>

                <p className="italic opacity-70 mb-8">
                  “Най-благородното изкуство е да правиш другите щастливи.”
                </p>

                <button
                  onClick={openBooking}
                  className="bg-[#4E3B31] text-white px-8 py-4 rounded-full hover:scale-105 transition duration-300"
                >
                  Запази час
                </button>
              </div>

              <img
                src="/ralica.png"
                alt="Ралица Герова"
                className="w-full h-[520px] object-cover object-top order-1 lg:order-2"
              />
            </div>

            {/* Elizabet */}
            <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#EFE5DA] rounded-[2.5rem] overflow-hidden shadow-xl">
              <img
                src="/elizabet.png"
                alt="Елизабет Костадинова"
                className="w-full h-[520px] object-cover object-top"
              />

              <div className="p-8 md:p-14">
                <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-60">
                  Мигли • Вежди
                </p>

                <h3 className="text-4xl md:text-5xl font-light mb-6">
                  Елизабет Костадинова
                </h3>

                <p className="text-lg leading-relaxed opacity-80 mb-6">
                  Професионалист, отдаден на изкуството на естествената
                  красота.
                </p>

                <p className="text-lg leading-relaxed opacity-80 mb-6">
                  Като специалист по мигли и ламиниране на мигли и вежди, тя
                  създава визии, които подчертават индивидуалния чар и нежност
                  на всяка жена.
                </p>

                <p className="text-lg leading-relaxed opacity-80 mb-8">
                  С внимание към детайла и спокойна атмосфера, Елизабет кара
                  всяка клиентка да се чувства уверена, красива и комфортно.
                </p>

                <button
                  onClick={openBooking}
                  className="bg-[#4E3B31] text-white px-8 py-4 rounded-full hover:scale-105 transition duration-300"
                >
                  Запази час
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="booking" className="py-32 px-6 bg-[#4E3B31] text-[#F6F1EA]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-70">
            Запази час
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            Готова ли си за своята нова визия?
          </h2>

          <p className="text-lg opacity-80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Свържи се с нас директно чрез Instagram или Messenger и избери
            удобен час за посещение.
          </p>

          <button
            onClick={openBooking}
            className="bg-[#F6F1EA] text-[#4E3B31] px-10 py-4 rounded-full hover:scale-105 transition duration-300 font-medium"
          >
            Избери начин за връзка
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 bg-[#F6F1EA]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-60">
              Контакти
            </p>

            <h2 className="text-4xl md:text-5xl font-light mb-10 leading-tight">
              Ще ни откриеш
              <br />
              във Варна.
            </h2>

            <div className="space-y-6 text-lg opacity-80">
              <p>ул. Генерал Георги Попов 28</p>
              <p>Варна, България 9000</p>
              <p>Работно време: 10:00 – 18:00</p>
              <p>0888 104 488</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                onClick={openBooking}
                className="bg-[#4E3B31] text-white px-6 py-3 rounded-full hover:scale-105 transition duration-300"
              >
                Запази час
              </button>

              <a
                href="tel:0888104488"
                className="border border-[#4E3B31] px-6 py-3 rounded-full hover:bg-[#4E3B31] hover:text-white transition duration-300"
              >
                Обади се
              </a>
            </div>
          </div>

          <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps?q=ул.+Генерал+Георги+Попов+28,+Варна,+България+9000&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Booking Popup */}
      {bookingOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-6">
          <div className="bg-[#F6F1EA] rounded-[2rem] p-10 max-w-md w-full relative shadow-2xl">
            <button
              onClick={() => setBookingOpen(false)}
              className="absolute top-5 right-5 text-2xl opacity-60 hover:opacity-100"
            >
              ×
            </button>

            <p className="uppercase tracking-[0.3em] text-sm mb-4 opacity-60">
              NUVÉ BEAUTY SALON
            </p>

            <h3 className="text-4xl font-light mb-6">
              Избери начин
              <br />
              за връзка
            </h3>

            <p className="opacity-70 mb-10 leading-relaxed">
              Свържи се с нас директно чрез Instagram или Facebook Messenger.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="https://www.instagram.com/_nuve_by_galinadzhilyanov/"
                target="_blank"
                className="bg-[#4E3B31] text-white text-center px-6 py-4 rounded-full hover:scale-105 transition duration-300"
              >
                Чат в Instagram
              </a>

              <a
                href="https://m.me/61582631022245"
                target="_blank"
                className="border border-[#4E3B31] text-center px-6 py-4 rounded-full hover:bg-[#4E3B31] hover:text-white transition duration-300"
              >
                Чат в Messenger
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61582631022245"
                target="_blank"
                className="text-center opacity-70 hover:opacity-100 transition text-sm mt-2"
              >
                Отвори Facebook страницата
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}