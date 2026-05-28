import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Gallery() {
  const galleryItems = [
    { image: "/gallery/hair-1.jpg", desktopHeight: 520, mobileHeight: 240 },
    { image: "/gallery/hair-2.jpg", desktopHeight: 380, mobileHeight: 200 },
    { image: "/gallery/makeup-1.jpg", desktopHeight: 460, mobileHeight: 230 },
    { image: "/gallery/bridal-1.jpg", desktopHeight: 560, mobileHeight: 260 },
    { image: "/gallery/lashes-1.jpg", desktopHeight: 360, mobileHeight: 190 },
    { image: "/gallery/brows-1.jpg", desktopHeight: 480, mobileHeight: 240 },
    { image: "/gallery/color-1.jpg", desktopHeight: 420, mobileHeight: 210 },
    { image: "/gallery/salon-1.jpg", desktopHeight: 540, mobileHeight: 250 },
    { image: "/gallery/detail-1.jpg", desktopHeight: 400, mobileHeight: 200 },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--dark)] pt-24">
      <Navbar />

      <section className="py-20 md:py-24 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-60 fade-up">
            Галерия
          </p>

          <h1 className="luxury-heading text-5xl md:text-7xl font-light mb-10 leading-tight fade-up">
            Моменти,
            <br />
            създадени с внимание.
          </h1>

          <p className="text-lg opacity-75 max-w-2xl mb-12 md:mb-16 leading-relaxed fade-up">
            Галерия с визии, детайли и beauty моменти от NUVÉ.
          </p>

          {/* Mobile Gallery */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group rounded-[1.5rem] overflow-hidden shadow-lg bg-[#E8DDD1]"
                style={{ height: item.mobileHeight }}
              >
                <img
                  src={item.image}
                  alt={`NUVÉ gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Desktop Masonry Gallery */}
          <div className="hidden md:block columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group break-inside-avoid mb-6 rounded-[2rem] overflow-hidden shadow-xl bg-[#E8DDD1] luxury-card"
                style={{ height: item.desktopHeight }}
              >
                <img
                  src={item.image}
                  alt={`NUVÉ gallery ${index + 1}`}
                  className="image-zoom w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20 text-center">
            <Link
              href="/contact"
              className="inline-block bg-[#4E3B31] text-white px-10 py-4 rounded-full hover:scale-105 transition duration-300"
            >
              Запази час
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
