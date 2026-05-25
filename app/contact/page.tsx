import Navbar from "../components/Navbar";
export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F6F1EA] text-[#4E3B31] pt-24">
      <Navbar />

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-60">
              Запази час • Контакти
            </p>

            <h1 className="text-5xl md:text-7xl font-light mb-10 leading-tight">
              Свържи се
              <br />
              с NUVÉ.
            </h1>

            <p className="text-lg opacity-80 mb-10 leading-relaxed">
              Избери удобен начин за връзка и ни пиши директно за свободни часове.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://www.instagram.com/_nuve_by_galinadzhilyanov/"
                target="_blank"
                className="bg-[#4E3B31] text-white text-center px-8 py-4 rounded-full"
              >
                Чат в Instagram
              </a>

              <a
                href="https://m.me/61582631022245"
                target="_blank"
                className="border border-[#4E3B31] text-center px-8 py-4 rounded-full"
              >
                Чат в Messenger
              </a>
            </div>

            <div className="space-y-5 text-lg opacity-80">
              <p>ул. Генерал Георги Попов 28</p>
              <p>Варна, България 9000</p>
              <p>Работно време: 10:00 – 18:00</p>
              <p>0888 104 488</p>
            </div>
          </div>

          <div className="relative h-[520px] rounded-[2rem] overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps?q=ул.+Генерал+Георги+Попов+28,+Варна,+България+9000&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}