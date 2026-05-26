import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const galleryItems = [
  { image: "/gallery/hair-1.jpg", desktopHeight: "md:h-[520px]" },
  { image: "/gallery/hair-2.jpg", height: "h-[380px]" },
  { image: "/gallery/makeup-1.jpg", height: "h-[460px]" },
  { image: "/gallery/bridal-1.jpg", height: "h-[560px]" },
  { image: "/gallery/lashes-1.jpg", height: "h-[360px]" },
  { image: "/gallery/brows-1.jpg", height: "h-[480px]" },
  { image: "/gallery/color-1.jpg", height: "h-[420px]" },
  { image: "/gallery/salon-1.jpg", height: "h-[540px]" },
  { image: "/gallery/detail-1.jpg", height: "h-[400px]" },
];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--dark)] pt-24">
      <Navbar />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-60 fade-up">
            Галерия
          </p>

          <h1 className="luxury-heading text-5xl md:text-7xl font-light mb-10 leading-tight fade-up">
            Моменти,
            <br />
            създадени с внимание.
          </h1>

          <p className="text-lg opacity-75 max-w-2xl mb-16 leading-relaxed fade-up">
            Галерия с визии, детайли и beauty моменти от NUVÉ.
          </p>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
className={`group break-inside-avoid mb-6 rounded-[2rem] overflow-hidden shadow-xl bg-[#E8DDD1] luxury-card h-[360px] md:${item.desktopHeight}`}              >
                <img
                  src={item.image}
                  alt={`NUVÉ gallery ${index + 1}`}
                  className="image-zoom w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href="/contact"
              className="inline-block bg-[#4E3B31] text-white px-10 py-4 rounded-full hover:scale-105 transition duration-300"
            >
              Запази час
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}