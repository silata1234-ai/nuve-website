import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
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
          className="absolute inset-0 w-full h-full object-cover scale-105 blur-[3px]"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[#3a271f]/25" />

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
            <a href="/contact" className="border border-[#F6F1EA]/70 text-[#F6F1EA] px-8 py-4 rounded-full">
  Запази час
</a>

            <a href="/about" className="border border-[#F6F1EA]/70 text-[#F6F1EA] px-8 py-4 rounded-full">
              Разгледай салона
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}