"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const categories = [
    {
      id: "hair",
      index: "01",
      label: "Фризьор",
      title: "Hair",
      description: "Цвят, форма и стайлинг, създадени с внимание към движението и личния стил.",
      images: ["/gallery/hair-1.jpg", "/gallery/hair-2.jpg", "/gallery/color-1.jpg"],
    },
    {
      id: "makeup",
      index: "02",
      label: "Грим",
      title: "Makeup",
      description: "Soft glam, булчински визии и събитийна красота с премерен, фотогеничен финал.",
      images: ["/gallery/makeup-1.jpg", "/gallery/bridal-1.jpg"],
    },
    {
      id: "nails",
      index: "03",
      label: "Маникюр",
      title: "Nails",
      description: "Чисти линии, деликатен блясък и детайл, който завършва цялостното усещане.",
      images: ["/gallery/detail-1.jpg", "/gallery/salon-1.jpg"],
    },
    {
      id: "lashes",
      index: "04",
      label: "Мигли и вежди",
      title: "Lashes & Brows",
      description: "Естествено подчертаване, баланс и изразителност без тежест.",
      images: ["/gallery/lashes-1.jpg", "/gallery/brows-1.jpg"],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--dark)] pt-24">
      <Navbar />

      <section className="py-20 md:py-24 px-5 md:px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-60 fade-up">
            Галерия
          </p>

          <h1 className="luxury-heading text-5xl md:text-7xl font-light mb-8 leading-tight fade-up">
            The NUVÉ
            <br />
            Lookbook.
          </h1>

          <p className="playfair text-lg opacity-75 max-w-2xl mb-14 leading-relaxed fade-up">
            Подбрани beauty моменти, визии и детайли от света на NUVÉ.
          </p>

          {/* Category Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {categories.map((category) => {
              const isActive = activeCategory.id === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category)}
                  className={`group text-left rounded-[2rem] overflow-hidden border transition-all duration-500 ${
                    isActive
                      ? "border-[#4E3B31]/35 shadow-2xl bg-[#EFE5DA]"
                      : "border-[#4E3B31]/10 bg-[#F6F1EA]/60 hover:-translate-y-2 hover:shadow-xl"
                  }`}
                >
                  <div className="relative h-[230px] md:h-[260px] overflow-hidden">
                    {category.images.slice(0, 3).map((image, index) => (
                      <img
                        key={image}
                        src={image}
                        alt={category.title}
                        className="gallery-slide absolute inset-0 w-full h-full object-cover"
                        style={{
                          animationDelay: `${index * 3}s`,
                        }}
                      />
                    ))}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5 text-[#F6F1EA]">
                      <p className="uppercase tracking-[0.3em] text-xs opacity-75 mb-2">
                        {category.index} • {category.label}
                      </p>

                      <h2 className="luxury-heading text-4xl font-light leading-none">
                        {category.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="playfair text-base leading-relaxed opacity-75">
                      {category.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Gallery Section */}
          <div className="border-t border-[#4E3B31]/10 pt-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="uppercase tracking-[0.35em] text-xs opacity-50 mb-4">
                  {activeCategory.label}
                </p>

                <h2 className="luxury-heading text-4xl md:text-6xl font-light">
                  {activeCategory.title}
                </h2>
              </div>

              <p className="playfair max-w-md opacity-70 leading-relaxed md:text-right">
                {activeCategory.description}
              </p>
            </div>

            <div className="grid grid-cols-2 md:hidden gap-4">
              {activeCategory.images.map((image, index) => (
                <div
                  key={image}
                  className="rounded-[1.5rem] overflow-hidden shadow-lg bg-[#E8DDD1]"
                  style={{ height: index % 2 === 0 ? 250 : 210 }}
                >
                  <img
                    src={image}
                    alt={`${activeCategory.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="hidden md:block columns-2 lg:columns-3 gap-6 space-y-6">
              {activeCategory.images.map((image, index) => (
                <div
                  key={image}
                  className="group break-inside-avoid mb-6 rounded-[2rem] overflow-hidden shadow-xl bg-[#E8DDD1] luxury-card"
                  style={{ height: index % 2 === 0 ? 520 : 400 }}
                >
                  <img
                    src={image}
                    alt={`${activeCategory.title} ${index + 1}`}
                    className="image-zoom w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
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