import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const items = [
    "Hair Transformation",
    "Balayage",
    "Makeup Look",
    "Bridal Beauty",
    "Lashes",
    "Brows",
    "Color Work",
    "Salon Mood",
    "Beauty Detail",
  ];

  return (
    <div className="min-h-screen bg-[#F6F1EA] text-[#4E3B31] pt-24">
      <Navbar />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-60">
            Галерия
          </p>

          <h1 className="text-5xl md:text-7xl font-light mb-10 leading-tight animate-fade-up">
            Моменти,
            <br />
            създадени с внимание.
          </h1>

          <p className="text-lg opacity-75 max-w-2xl mb-16 leading-relaxed">
            Тук скоро ще добавим реални снимки от работата на екипа на NUVÉ.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={item}
                className="group h-[420px] rounded-[2rem] bg-gradient-to-br from-[#E8DDD1] to-[#CDB9A7] overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="h-full w-full flex items-end p-8 bg-black/0 group-hover:bg-black/20 transition-all duration-500">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] opacity-60 mb-3">
                      0{index + 1}
                    </p>
                    <h2 className="text-3xl font-light">{item}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}