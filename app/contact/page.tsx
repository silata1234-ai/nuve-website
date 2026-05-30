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

              <div className="absolute bottom-0 left-0 right-0 p-6 text-[#DCC8B2] md:p-10">
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

          <div className="mt-6 flex justify-center gap-16 md:gap-12">
  <a
    href="https://www.instagram.com/_nuve_by_galinadzhilyanov/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
    className="flex h-16 w-16 items-center justify-center rounded-full border border-[#4E3B31]/15 bg-[#EFE5DA] text-[#4E3B31] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  </a>

  <a
    href="https://m.me/61582631022245"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Messenger"
    className="flex h-16 w-16 items-center justify-center rounded-full border border-[#4E3B31]/15 bg-[#EFE5DA] text-[#4E3B31] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M12 3C7 3 3.2 6.4 3.2 10.8c0 2.5 1.2 4.7 3.2 6.1V21l3.4-1.9c.7.2 1.4.3 2.2.3 5 0 8.8-3.4 8.8-7.8S17 3 12 3Z" />
      <path d="m7.8 12.5 2.7-2.9 2.1 2.2 3.6-3.1-2.8 4.4-2.2-2.1-3.4 1.5Z" fill="currentColor" stroke="none" />
    </svg>
  </a>

  <a
    href="tel:0888104488"
    aria-label="Phone"
    className="flex h-16 w-16 items-center justify-center rounded-full border border-[#4E3B31]/15 bg-[#EFE5DA] text-[#4E3B31] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6.6 4.8 8.8 4c.7-.2 1.4.1 1.7.7l1 2.2c.2.5.1 1.1-.3 1.5l-1.1 1.1c.8 1.7 2.2 3.1 3.9 3.9l1.1-1.1c.4-.4 1-.5 1.5-.3l2.2 1c.6.3.9 1 .7 1.7l-.8 2.2c-.2.6-.8 1-1.4 1C10.9 18 6 13.1 6 6.2c0-.6.4-1.2.6-1.4Z" />
    </svg>
  </a>
</div>

         </div>      </section>

      <Footer />
    </div>
  );
}