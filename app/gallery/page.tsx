"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Gallery() {
  const categories = [
    {
      id: "hair",
      index: "01",
      label: "Фризьорство",
      title: "Hair",
      description: "Цвят, форма и стайлинг, създадени с внимание към движението и личния стил.",
      images: Array.from({ length: 10 }, (_, i) => `/gallery/hair/hair${i + 1}.jpg`),
    },
    {
      id: "makeup",
      index: "02",
      label: "Грим",
      title: "Makeup",
      description: "Soft glam, булчински визии и събитийна красота с премерен, фотогеничен финал.",
      images: Array.from({ length: 7 }, (_, i) => `/gallery/makeup/makeup${i + 1}.jpg`),
    },
    {
      id: "nails",
      index: "03",
      label: "Маникюр",
      title: "Nails",
      description: "Чисти линии, деликатен блясък и детайл, който завършва цялостното усещане.",
      images: Array.from({ length: 6 }, (_, i) => `/gallery/nails/nails${i + 1}.jpg`),
    },
    {
  id: "lashes",
  index: "04",
  label: "Мигли и вежди",
  title: "Lashes & Brows",
  description: "Естествено подчертаване, баланс и изразителност без тежест.",
  images: [
    "/gallery/lashes/lashes1.jpg",
    "/gallery/lashes/lashes2.jpg",
    "/gallery/lashes/lashes3.jpg",
    "/gallery/lashes/lashes4a.jpg",
    "/gallery/lashes/lashes5.jpg",
    "/gallery/lashes/lashes6.jpg",
    "/gallery/lashes/lashes7.jpg",
  ],
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
              const previewImages = category.images.slice(0, 3);

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
                  <div className="relative h-[260px] overflow-hidden px-5 pt-8">
                    <div className="absolute inset-0 bg-[#F5F0EA]/95 backdrop-blur-sm" />

                    {previewImages.map((image, index) => (
                      <img
                        key={image}
                        src={image}
                        alt={category.title}
                        className={`absolute rounded-[1.3rem] object-cover shadow-2xl transition-all duration-700 group-hover:scale-[1.03] ${
                          index === 0
                            ? "left-6 top-2 h-[170px] w-[120px] rotate-[-7deg] z-10"
                            : index === 1
                            ? "left-1/2 top-1 h-[190px] w-[130px] -translate-x-1/2 rotate-[3deg] z-20"
                            : "right-3 top-3 h-[165px] w-[115px] rotate-[8deg] z-10"
                        }`}
                      />
                    ))}

                    

                    <div className="absolute bottom-1 left-5 right-5 z-30 text-[#4E3B31]">
  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#6A564A]/80">
    {category.index} • {category.label}
  </p>

  <h2 className="luxury-heading text-4xl font-light leading-none text-[#4E3B31]">
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

          {/* Active Category */}
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

            {/* Mobile Gallery */}
            <div className="grid grid-cols-2 gap-4 md:hidden">
              {activeCategory.images.map((image, index) => (
                <div
                  key={image}
                  className="rounded-[1.5rem] overflow-hidden shadow-lg bg-[#E8DDD1]"
                  style={{ height: index % 2 === 0 ? 250 : 210 }}
                >
                  <img
                    src={image}
                    alt={`${activeCategory.title} ${index + 1}`}
                    className="block w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Desktop Masonry */}
            <div className="hidden md:block columns-2 lg:columns-3 gap-6 space-y-6">
              {activeCategory.images.map((image, index) => (
                <div
                  key={image}
                  className="group break-inside-avoid mb-6 rounded-[2rem] overflow-hidden shadow-xl bg-[#E8DDD1] luxury-card"
                  style={{ height: index % 3 === 0 ? 540 : index % 3 === 1 ? 420 : 480 }}
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