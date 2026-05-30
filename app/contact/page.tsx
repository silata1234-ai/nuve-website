import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--dark)] pt-24">
      <Navbar />

      <section className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] opacity-60 md:text-sm">
            Запази час • Контакти
          </p>

          <h1 className="luxury-heading mb-8 text-5xl font-light leading-[0.95] md:text-8xl">
            Посети
            <br />
            NUVÉ.
          </h1>

          <p className="playfair mb-10 max-w-2xl text-lg leading-relaxed opacity-75 md:text-xl">
            Beauty пространство във Варна, създадено за спокойствие, стил и
            внимание към всеки детайл.
          </p>

          <div className="overflow-hidden rounded-[2rem] shadow-2xl md:rounded-[2.75rem]">
            <div className="relative h-[430px] md:h-[720px]">
              <Image
                src="/salon.jpg"
                alt="NUVÉ Beauty Salon"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-[#F6F1EA] md:p-10">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] opacity-75">
                  NUVÉ Beauty Salon • Varna
                </p>

                <h2 className="luxury-heading mb-5 text-4xl font-light md:text-6xl">
                  ул. Генерал Георги Попов 28
                </h2>

                <p className="mb-6 max-w-xl text-sm leading-relaxed opacity-85 md:text-base">
                  Варна, България 9000 • Работно време: 10:00 – 18:00
                </p>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=ул.+Генерал+Георги+Попов+28,+Варна,+България+9000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#F6F1EA] px-6 py-4 text-center text-sm uppercase tracking-[0.2em] text-[#4E3B31] transition duration-300 hover:scale-105"
                  >
                    Отвори в Maps →
                  </a>

                  <a
                    href="https://www.instagram.com/_nuve_by_galinadzhilyanov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#F6F1EA]/60 px-6 py-4 text-center text-sm uppercase tracking-[0.2em] text-[#F6F1EA] transition duration-300 hover:bg-[#F6F1EA] hover:text-[#4E3B31]"
                  >
                    Запази час
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <a
              href="https://www.instagram.com/_nuve_by_galinadzhilyanov/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#4E3B31] px-5 py-4 text-center text-[#F6F1EA] transition duration-300 hover:scale-105"
            >
              Чат в Instagram
            </a>

            <a
              href="https://m.me/61582631022245"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#4E3B31] px-5 py-4 text-center text-[#F6F1EA] transition duration-300 hover:scale-105"
            >
              Чат в Messenger
            </a>

            <a
              href="tel:0888104488"
              className="rounded-full bg-[#4E3B31] px-5 py-4 text-center text-[#F6F1EA] transition duration-300 hover:scale-105"
            >
              Обади ни се
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}