import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  const galleryItems = [
    {
      image: "/gallery/hair-1.jpg",
      label: "Hair artistry",
      desktopHeight: 520,
      mobileHeight: 240,
    },
    {
      image: "/gallery/hair-2.jpg",
      label: "Soft styling",
      desktopHeight: 380,
      mobileHeight: 200,
    },
    {
      image: "/gallery/makeup-1.jpg",
      label: "Soft glam",
      desktopHeight: 460,
      mobileHeight: 230,
    },
    {
      image: "/gallery/bridal-1.jpg",
      label: "Bridal detail",
      desktopHeight: 560,
      mobileHeight: 260,
    },
    {
      image: "/gallery/lashes-1.jpg",
      label: "Lash styling",
      desktopHeight: 360,
      mobileHeight: 190,
    },
    {
      image: "/gallery/brows-1.jpg",
      label: "Brows",
      desktopHeight: 480,
      mobileHeight: 240,
    },
    {
      image: "/gallery/color-1.jpg",
      label: "Color work",
      desktopHeight: 420,
      mobileHeight: 210,
    },
    {
      image: "/gallery/salon-1.jpg",
      label: "Salon mood",
      desktopHeight: 540,
      mobileHeight: 250,
    },
    {
      image: "/gallery/detail-1.jpg",
      label: "Beauty detail",
      desktopHeight: 400,
      mobileHeight: 200,
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--dark)] pt-24">
      <Navbar />

      <section className="px-5 py-20 md:px-6 md:py-28">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-60 fade-up">
            Галерия
          </p>

          <h1 className="luxury-heading text-5xl md:text-8xl font-light mb-10 leading-[0.98] tracking-[0] fade-up">
            The NUVÉ
            <br />
            Lookbook.
          </h1>

          <p className="text-lg opacity-75 max-w-2xl mb-12 md:mb-16 leading-relaxed fade-up">
            Кадри от салона, финални визии и малки beauty детайли, подредени
            като редакционен дневник на NUVÉ.
          </p>

          {/* Mobile Gallery */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[1.5rem] bg-[#E8DDD1] shadow-lg"
                style={{ height: item.mobileHeight }}
              >
                <Image
                  src={item.image}
                  alt={`NUVÉ ${item.label}`}
                  fill
                  sizes="50vw"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-3 pt-10">
                  <p className="text-[0.62rem] uppercase tracking-[0.2em] text-[#F6F1EA]/90">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Masonry Gallery */}
          <div className="hidden md:block columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative mb-6 break-inside-avoid overflow-hidden rounded-[2rem] bg-[#E8DDD1] shadow-xl luxury-card"
                style={{ height: item.desktopHeight }}
              >
                <Image
                  src={item.image}
                  alt={`NUVÉ ${item.label}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="image-zoom h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#F6F1EA]/75">
                    0{index + 1}
                  </p>
                  <h2 className="luxury-heading text-3xl font-light text-[#F6F1EA]">
                    {item.label}
                  </h2>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 md:mt-20 text-center">
            <Link
              href="/contact"
              className="group premium-button border-[#4E3B31]/25 bg-[#4E3B31] text-[#F6F1EA] hover:bg-transparent hover:text-[#4E3B31]"
            >
              Запази час
              <span className="transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
