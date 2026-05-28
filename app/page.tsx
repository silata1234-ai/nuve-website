import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F6F1EA] text-[#4E3B31]">
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="video-bg absolute inset-0 h-full w-full object-cover blur-[4px] brightness-[0.72] saturate-[0.82]"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[#4E3B31]/25 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(246,241,234,0.12)_0%,rgba(78,59,49,0.12)_42%,rgba(0,0,0,0.45)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#F4ECE4] via-[#F4ECE4]/35 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pb-20 pt-28 text-center">
          <p className="fade-up mb-7 text-xs uppercase tracking-[0.42em] text-[#F6F1EA]/75 md:text-sm">
            Beauty Salon • Varna
          </p>

          <h1 className="luxury-heading fade-up mb-7 text-6xl font-light leading-[0.88] tracking-[0] text-[#F6F1EA] sm:text-8xl md:text-9xl lg:text-[10rem]">
            NUVÉ
          </h1>

          <p className="fade-up mx-auto mb-10 max-w-3xl text-2xl font-light leading-tight text-[#F6F1EA]/90 md:text-4xl">
            Красота без шум. Присъствие без усилие.
          </p>

          <p className="fade-up mx-auto mb-11 max-w-2xl text-sm leading-7 text-[#F6F1EA]/72 md:text-base">
            Луксозно beauty пространство във Варна, създадено за стил,
            увереност и индивидуален подход към всяка визия.
          </p>

          <div className="fade-up flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="group premium-button border-[#F6F1EA]/45 text-[#F6F1EA] hover:border-[#F6F1EA] hover:bg-[#F6F1EA] hover:text-[#4E3B31]"
            >
              Запази час
              <span className="transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </Link>

            <Link
              href="/about"
              className="group premium-button border-[#F6F1EA]/35 text-[#F6F1EA] hover:border-[#F6F1EA] hover:bg-[#F6F1EA] hover:text-[#4E3B31]"
            >
              Разгледай салона
              <span className="transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>

          <p className="absolute bottom-10 left-1/2 w-full -translate-x-1/2 px-6 text-[0.68rem] uppercase tracking-[0.28em] text-[#F6F1EA]/65 md:bottom-12 md:text-xs">
            Beauty Salon • Varna • Since 2026
          </p>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#4E3B31]/10 bg-[#EFE5DA] py-6 md:py-7">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, groupIndex) => (
            <div
              key={groupIndex}
              className="flex items-center text-xl uppercase tracking-[0.18em] text-[#4E3B31]/45 md:text-4xl"
            >
              {[
                "NUVÉ",
                "Hair Artistry",
                "Color",
                "Style",
                "Beauty",
                "Quiet Luxury",
              ].map((item) => (
                <span key={`${groupIndex}-${item}`} className="mx-5 md:mx-10">
                  {item} •
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden px-5 py-20 md:px-6 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] opacity-50">
              Signature experience
            </p>

            <h2 className="luxury-heading mb-8 max-w-3xl text-4xl font-light leading-tight md:text-7xl">
              Визия, която изглежда спокойна, но остава запомняща се.
            </h2>

            <p className="mb-9 max-w-xl text-base leading-8 opacity-75 md:text-lg">
              NUVÉ създава красота с премерен детайл — от мек цвят и форма до
              грим, мигли и финален стайлинг, които работят заедно.
            </p>

            <Link
              href="/services"
              className="group premium-button border-[#4E3B31]/25 text-[#4E3B31] hover:bg-[#4E3B31] hover:text-[#F6F1EA]"
            >
              Разгледай услугите
              <span className="transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-5">
            <div className="space-y-4 md:space-y-5">
              <div className="group relative h-56 overflow-hidden rounded-[2rem] bg-[#E8DDD1] shadow-[0_24px_70px_rgba(78,59,49,0.1)] md:h-80">
                <Image
                  src="/gallery/hair-1.jpg"
                  alt="NUVÉ hair artistry"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="image-zoom h-full w-full object-cover"
                />
              </div>
              <div className="rounded-[2rem] border border-[#4E3B31]/10 bg-[#EFE5DA] p-6 md:p-8">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] opacity-50">
                  Detail
                </p>
                <p className="luxury-heading text-3xl font-light leading-tight md:text-4xl">
                  Soft color. Clean shape. Quiet confidence.
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-4 md:mt-16 md:space-y-5">
              <div className="group relative h-48 overflow-hidden rounded-[2rem] bg-[#E8DDD1] shadow-[0_24px_70px_rgba(78,59,49,0.1)] md:h-72">
                <Image
                  src="/gallery/makeup-1.jpg"
                  alt="NUVÉ soft glam"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="image-zoom h-full w-full object-cover"
                />
              </div>
              <div className="group relative h-56 overflow-hidden rounded-[2rem] bg-[#E8DDD1] shadow-[0_24px_70px_rgba(78,59,49,0.1)] md:h-80">
                <Image
                  src="/gallery/lashes-1.jpg"
                  alt="NUVÉ lash styling"
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="image-zoom h-full w-full object-cover"
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
