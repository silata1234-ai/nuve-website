"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  const [openCategory, setOpenCategory] = useState("");
  const [openHairSection, setOpenHairSection] = useState("");

  const serviceHighlights = [
    {
      title: "Hair",
      subtitle: "Фризьор",
      text: "Цвят, форма и стайлинг, създадени с внимание към движението и личния стил.",
    },
    {
      title: "Makeup",
      subtitle: "Грим",
      text: "Мек glam, булчински визии и събитийна красота с премерен, фотогеничен финал.",
    },
    {
      title: "Nails",
      subtitle: "Маникюр",
      text: "Чисти линии, деликатен блясък и детайл, който завършва цялостното усещане.",
    },
    {
      title: "Lashes & Brows",
      subtitle: "Мигли и вежди",
      text: "Естествено подчертаване, баланс и изразителност без тежест.",
    },
  ];

  const hairSections = [
    {
      title: "Подстригване",
      items: [
        ["Дамско — къса коса", "15.34 €"],
        ["Дамско — средна коса", "23.00 €"],
        ["Дамско — дълга коса", "28.12 €"],
      ],
    },
    {
      title: "Стайлинг",
      items: [
        ["Къса коса", "12.78 €"],
        ["Средна коса", "20.45 €"],
        ["Дълга коса", "25.57 €"],
        ["Сешоар на четки", "28.12 €"],
      ],
    },
    {
      title: "Прически",
      items: [
        ["Сватбена", "61.35 €"],
        ["Кок", "51.10 €"],
        ["Опашка", "51.10 €"],
        ["Вълни", "46.00 €"],
        ["Букли с преса", "25.56 €"],
        ["Плитка 1 бр.", "25.56 €"],
        ["Афро преса", "76.69 €"],
        ["Ретро преса", "40.90 €"],
      ],
    },
    {
      title: "Боядисване",
      items: [
        
        ["Wella — 1 бр. боя", "23.00 €"],
        ["Wella — корен", "46.00 €"],
        ["Wella — цяла коса", "51.13 €"],
        ["Wella Матиране", "46.00 €"],
      ],
    },
    {
      title: "Обезцветяване",
      items: [
        ["Една доза BlondorPlex, 50гр", "12.78 €"],
        ["Труд", "35.79 €"],
        ["Airtouch", "46.00 €"],
      ],
    },
    {
      title: "Удължения",
      items: [
        ["С капси — до 2 реда", "20.45 €"],
        ["С капси — до 4 реда", "25.56 €"],
        ["На щипки", "7.67 €"],
        ["С пришиване — до 2 реда", "23.00 €"],
        ["С пришиване — до 1 ред", "28.12 €"],
      ],
    },
    {
      title: "Терапии за коса",
      items: [["Терапия за коса/Montibello, Joico, Milkshake", "30.67 €"]],
    },
  ];

  const serviceGroups = [
    {
      category: "Фризьор",
      sections: hairSections,
      nested: true,
    },
    {
      category: "Грим",
      note: "Цените са с включени мигли по желание.",
      sections: [
        {
          title: "Грим в салона",
          items: [
            ["Дневен / Вечерен", "35.80 €"],
            ["Булчински", "40.90 €"],
            ["Абитуриентски", "40.90 €"],
            ["Новогодишен", "40.90 €"],
            ["Пробен", "40.90 €"],
          ],
        },
        {
          title: "Грим на локация",
          items: [
            ["Булчински", "51.13 €"],
            ["Други", "46.02 €"],
            ["Капаро до 5 човека", "51.13 €"],
            ["До 10 човека", "102.26 €"],
            ["Събития", "46.02 €"],
          ],
        },
      ],
    },
    {
      category: "Маникюр",
      sections: [
        {
          title: "Маникюр",
          items: [
            ["Класически маникюр", "10.00 €"],
            ["Маникюр с гел лак", "15.00 €"],
          ],
        },
        {
          title: "Гел / Акригел върху естествен нокът",
          items: [
            ["Къси нокти", "25.00 €"],
            ["Дълги нокти", "30.00 €"],
            ["Поддръжка", "20.00 €"],
          ],
        },
        {
          title: "Ноктопластика",
          items: [
            ["Гел / Акригел изграждане", "35.00 €"],
            ["Дълги нокти", "40.00 €"],
            ["Екстра дълги", "50.00 €"],
            ["Поддръжка", "35.00 €"],
            ["Сваляне на стар гел лак", "10.00 €"],
            ["Поправка на един или повече нокътя", "3.00 € – 10.00 €"],
            ["Декорации", "2.00 € – 5.00 €"],
          ],
        },
      ],
    },
    {
      category: "Мигли и вежди",
      sections: [
        {
          title: "Мигли",
          items: [
            ["Ламиниране", "23.00 €"],
            ["Ламиниране и боядисване", "25.00 €"],
            ["Боядисване", "4.00 €"],
          ],
        },
        {
          title: "Вежди",
          items: [
            ["Ламиниране", "23.00 €"],
            ["Ламиниране и боядисване", "25.00 €"],
            ["Оформяне", "7.00 €"],
            ["Боядисване и оформяне", "13.00 €"],
            ["Боядисване", "7.00 €"],
          ],
        },
        {
          title: "Миглопластика",
          items: [
            ["Косъм по косъм", "30.00 €"],
            ["2D–3D", "35.00 €"],
            ["Обемни техники", "40.00 €"],
            ["Поддръжка косъм по косъм", "17.00 €"],
            ["Поддръжка 2D–3D", "20.00 €"],
            ["Поддръжка обемни техники", "23.00 €"],
            ["Премахване на мигли", "7.00 €"],
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--dark)] pt-24">
      <Navbar />

      <section className="px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-60 fade-up">
            Услуги
          </p>

          <h1 className="luxury-heading text-5xl md:text-8xl font-light mb-8 leading-[0.98] tracking-[0] fade-up">
            Rituals of
            <br />
            NUVÉ Beauty.
          </h1>

          <p className="text-lg opacity-75 max-w-2xl mb-16 leading-relaxed fade-up">
            Първо избери усещането, после разгледай детайлния ценоразпис.
            Всички цени са в евро.
          </p>

          <div className="mb-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceHighlights.map((item, index) => (
              <div
                key={item.title}
                className="group flex min-h-[240px] flex-col justify-between rounded-[2rem] border border-[#4E3B31]/10 bg-[#EFE5DA] p-7 shadow-[0_24px_70px_rgba(78,59,49,0.08)] transition-all duration-500 md:min-h-[270px] md:hover:-translate-y-2 md:hover:bg-[#4E3B31] md:hover:text-[#F6F1EA]"
              >
                <div>
                  <p className="mb-9 text-xs uppercase tracking-[0.32em] opacity-55">
                    0{index + 1} • {item.subtitle}
                  </p>
                  <h2 className="luxury-heading text-4xl font-light leading-none md:text-5xl">
                    {item.title}
                  </h2>
                </div>

                <p className="text-sm leading-6 opacity-75 transition-opacity duration-500 group-hover:opacity-85">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-8 flex flex-col gap-4 border-t border-[#4E3B31]/12 pt-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] opacity-50">
                Detailed pricing
              </p>
              <h2 className="luxury-heading text-4xl font-light leading-tight md:text-6xl">
                Ценоразпис
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 opacity-65 md:text-right">
              Отвори категория, за да видиш услугите. Фризьорството съдържа
              допълнителни подкатегории.
            </p>
          </div>

          <div className="space-y-5">
            {serviceGroups.map((group) => {
              const isOpen = openCategory === group.category;

              return (
                <div
                  key={group.category}
                  className="bg-[#EFE5DA] rounded-[2rem] shadow-xl overflow-hidden luxury-card"
                >
                  <button
                    onClick={() =>
                      setOpenCategory(isOpen ? "" : group.category)
                    }
                    className="w-full flex items-center justify-between gap-6 px-6 md:px-10 py-7 text-left"
                  >
                    <span className="luxury-heading text-3xl md:text-5xl font-light">
                      {group.category}
                    </span>

                    <span
                      className={`w-11 h-11 rounded-full border border-[#4E3B31]/30 flex items-center justify-center text-3xl font-light transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 bg-[#4E3B31] text-[#F6F1EA]"
                          : "bg-transparent text-[#4E3B31]"
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all ${
                      isOpen
                        ? "max-h-[5000px] opacity-100 duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        : "max-h-0 opacity-0 duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                    }`}
                  >
                    <div className="px-6 md:px-10 pb-10">
                      {group.nested ? (
                        <div className="space-y-4">
                          {group.sections.map((section) => {
                            const isHairOpen =
                              openHairSection === section.title;

                            return (
                              <div
                                key={section.title}
                                className="bg-[#F6F1EA] rounded-[1.5rem] overflow-hidden"
                              >
                                <button
                                  onClick={() =>
                                    setOpenHairSection(
                                      isHairOpen ? "" : section.title
                                    )
                                  }
                                  className="w-full flex items-center justify-between gap-6 p-6 md:p-8 text-left"
                                >
                                  <h3 className="luxury-heading text-2xl md:text-3xl font-light">
                                    {section.title}
                                  </h3>

                                  <span
                                    className={`w-10 h-10 rounded-full border border-[#4E3B31]/20 flex items-center justify-center text-2xl transition-all duration-300 ${
                                      isHairOpen
                                        ? "rotate-45 bg-[#4E3B31] text-[#F6F1EA]"
                                        : "bg-transparent text-[#4E3B31]"
                                    }`}
                                  >
                                    +
                                  </span>
                                </button>

                                <div
                                  className={`overflow-hidden transition-all ${
                                    isHairOpen
                                      ? "max-h-[2000px] opacity-100 duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                                      : "max-h-0 opacity-0 duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                                  }`}
                                >
                                  <div className="px-6 md:px-8 pb-8">
                                    <div className="space-y-4">
                                      {section.items.map(([name, price]) => (
                                        <div
                                          key={name}
                                          className="flex items-start justify-between gap-6 border-b border-[#D8C8BA]/80 pb-3"
                                        >
                                          <span className="text-base md:text-lg leading-relaxed">
                                            {name}
                                          </span>

                                          <span className="text-base md:text-lg whitespace-nowrap opacity-80">
                                            {price}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="grid lg:grid-cols-2 gap-6">
                          {group.sections.map((section) => (
                            <div
                              key={section.title}
                              className="bg-[#F6F1EA] rounded-[1.5rem] p-6 md:p-8"
                            >
                              <h3 className="luxury-heading text-2xl md:text-3xl font-light mb-7">
                                {section.title}
                              </h3>

                              <div className="space-y-4">
                                {section.items.map(([name, price]) => (
                                  <div
                                    key={name}
                                    className="flex items-start justify-between gap-6 border-b border-[#D8C8BA]/80 pb-3"
                                  >
                                    <span className="text-base md:text-lg leading-relaxed">
                                      {name}
                                    </span>

                                    <span className="text-base md:text-lg whitespace-nowrap opacity-80">
                                      {price}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {"note" in group && group.note && (
                        <p className="mt-6 text-sm opacity-60 italic">
                          * {group.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-20 text-center bg-[#4E3B31] text-[#F6F1EA] rounded-[2.5rem] px-8 py-16 shadow-2xl">
            <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-70">
              Запази час
            </p>

            <h2 className="luxury-heading text-4xl md:text-5xl font-light mb-8">
              Избери услуга и ни пиши.
            </h2>

            <Link
              href="/contact"
              className="group premium-button border-[#F6F1EA]/30 bg-[#F6F1EA] text-[#4E3B31] hover:border-[#F6F1EA] hover:bg-transparent hover:text-[#F6F1EA]"
            >
              Свържи се с нас
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
