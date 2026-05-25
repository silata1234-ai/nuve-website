import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const galleryItems = [
    {
      title: "Hair Transformation",
      category: "Фризьорство",
      image: "/gallery/hair-1.jpg",
    },
    {
      title: "Balayage",
      category: "Цвят",
      image: "/gallery/hair-2.jpg",
    },
    {
      title: "Makeup Look",
      category: "Грим",
      image: "/gallery/makeup-1.jpg",
    },
    {
      title: "Bridal Beauty",
      category: "Събития",
      image: "/gallery/bridal-1.jpg",
    },
    {
      title: "Lashes",
      category: "Мигли",
      image: "/gallery/lashes-1.jpg",
    },
    {
      title: "Brows",
      category: "Вежди",
      image: "/gallery/brows-1.jpg",
    },
    {
      title: "Color Work",
      category: "Фризьорство",
      image: "/gallery/color-1.jpg",
    },
    {
      title: "Salon Mood",
      category: "NUVÉ",
      image: "/gallery/salon-1.jpg",
    },
    {
      title: "Beauty Detail",
      category: "Детайл",
      image: "/gallery/detail-1.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--dark)] pt-24">
      <Navbar />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-60 fade-up">
            Галерия
          </p>

          <h1 className="text-5xl md:text-7xl font-light mb-10 leading-tight fade-up">
            Моменти,
            <br />
            създадени с внимание.
          </h1>

          <p className="text-lg opacity-75 max-w-2xl mb-16 leading-relaxed fade-up">
            Галерия с визии, детайли и beauty моменти от NUVÉ.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.title}
                className="group luxury-card h-[420px] rounded-[2rem] overflow-hidden shadow-xl bg-[#E8DDD1] relative"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="image-zoom w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                
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