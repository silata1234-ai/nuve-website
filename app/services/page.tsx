import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  const serviceGroups = [
    {
      category: "Фризьорство",
      sections: [
        {
          title: "Подстригване",
          items: [
            ["Дамско — къса коса", "15.34 €"],
            ["Дамско — средна коса", "23.00 €"],
            ["Дамско — дълга коса", "28.12 €"],
            ["Мъжко с машина", "7.67 €"],
            ["Мъжко с машина и ножица", "10.23 €"],
            ["Мъжко с измиване", "12.78 €"],
            ["Детско подстригване", "10.23 €"],
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
            ["Боядисване Matrix — 1 бр. боя", "23.00 €"],
            ["Боядисване Matrix — корен", "46.00 €"],
            ["Боядисване Matrix — цяла коса", "51.13 €"],
            ["Матиране Matrix", "46.00 €"],
            ["Боядисване Wella — 1 бр. боя", "23.00 €"],
            ["Боядисване Wella — корен", "46.00 €"],
            ["Боядисване Wella — цяла коса", "51.13 €"],
            ["Матиране Wella", "46.00 €"],
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
          title: "Треса",
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
          items: [["Терапия за коса", "30.67 €"]],
        },
      ],
    },
    {
      category: "Грим",
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
      note: "Цените са с включени мигли по желание.",
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
    <div className="min-h-screen bg-[#F6F1EA] text-[#4E3B31] pt-24">
      <Navbar />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-60 fade-up">
            Услуги
          </p>

          <h1 className="text-5xl md:text-7xl font-light mb-8 leading-tight fade-up">
            Ценоразпис
            <br />
            NUVÉ Beauty Salon.
          </h1>

          <p className="text-lg opacity-75 max-w-2xl mb-16 leading-relaxed fade-up">
            Минималистичен преглед на услугите в салона. Всички цени са
            посочени в евро.
          </p>

          <div className="space-y-20">
            {serviceGroups.map((group) => (
              <div key={group.category}>
                <div className="mb-8 flex items-end justify-between gap-6 border-b border-[#D8C8BA] pb-5">
                  <h2 className="text-4xl md:text-5xl font-light">
                    {group.category}
                  </h2>

                  <span className="hidden md:block uppercase tracking-[0.25em] text-xs opacity-50">
                    NUVÉ
                  </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {group.sections.map((section) => (
                    <div
                      key={section.title}
                      className="luxury-card bg-[#EFE5DA] rounded-[2rem] p-8 md:p-10 shadow-xl"
                    >
                      <h3 className="text-2xl md:text-3xl font-light mb-8">
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

                {"note" in group && group.note && (
                  <p className="mt-6 text-sm opacity-60 italic">
                    * {group.note}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-24 text-center bg-[#4E3B31] text-[#F6F1EA] rounded-[2.5rem] px-8 py-16 shadow-2xl">
            <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-70">
              Запази час
            </p>

            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Избери услуга и ни пиши.
            </h2>

            <a
              href="/contact"
              className="inline-block bg-[#F6F1EA] text-[#4E3B31] px-10 py-4 rounded-full hover:scale-105 transition duration-300"
            >
              Свържи се с нас
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}