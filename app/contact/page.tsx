import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--dark)] pt-24">
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

            <div className="flex gap-4 items-center mb-10">
              <a
                href="https://www.instagram.com/_nuve_by_galinadzhilyanov/"
                target="_blank"
                className="bg-[#4E3B31] text-[#F6F1EA] min-w-[190px] px-5 py-3 rounded-full hover:scale-105 transition duration-300 text-center whitespace-nowrap"
              >
                Чат в Instagram
              </a>

              <a
                href="https://m.me/61582631022245"
                target="_blank"
                className="bg-[#4E3B31] text-[#F6F1EA] min-w-[190px] px-5 py-3 rounded-full hover:scale-105 transition duration-300 text-center whitespace-nowrap"
              >
                Чат в Messenger
              </a>
              <a
  href="tel:0888104488"
  className="bg-[#4E3B31] text-[#F6F1EA] min-w-[190px] px-5 py-3 rounded-full hover:scale-105 transition duration-300 text-center whitespace-nowrap"
>
  Обади ни се
</a>
            </div>

            <div className="space-y-5 text-lg opacity-80">
              <p>ул. Генерал Георги Попов 28</p>
              <p>Варна, България 9000</p>
              <p>Работно време: 10:00 – 18:00</p>
              <p>0888 104 488</p>
            </div>
          </div>

          <div className="relative h-[520px] rounded-[2rem] overflow-hidden shadow-2xl lg:translate-x-10">
            <iframe
              src="https://www.google.com/maps?q=ул.+Генерал+Георги+Попов+28,+Варна,+България+9000&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
    
  );
}