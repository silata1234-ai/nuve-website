export default function Services() {
  const services = [
    {
      title: "Фризьорство",
      items: ["Дамско подстригване", "Боядисване", "Балеаж", "Кичури", "Терапии за коса", "Официални прически"],
    },
    {
      title: "Грим",
      items: ["Дневен грим", "Вечерен грим", "Булчински грим", "Грим за фотосесии", "Сценичен грим", "Грим за събития"],
    },
    {
      title: "Мигли и вежди",
      items: ["Ламиниране на мигли", "Ламиниране на вежди", "Оформяне на вежди", "Боядисване на вежди", "Естествени beauty визии"],
    },
    {
      title: "Маникюр",
      items: ["Маникюр", "Гел лак", "Изграждане", "Поддръжка", "Nail art", "Clean beauty дизайн"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F1EA] text-[#4E3B31] pt-24">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#F6F1EA]/85 border-b border-[#E7DED2]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-semibold tracking-[0.3em]">NUVÉ</a>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="/about">За нас</a>
            <a href="/services">Услуги</a>
            <a href="/contact">Запази час</a>
          </div>
          <a href="/contact" className="bg-[#4E3B31] text-white px-5 py-2 rounded-full text-sm">Запази час</a>
        </div>
      </nav>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.35em] text-sm mb-5 opacity-60">Услуги</p>

          <h1 className="text-5xl md:text-7xl font-light mb-10 leading-tight">
            Подбрани услуги
            <br />
            за твоята визия.
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {services.map((service) => (
              <div key={service.title} className="bg-[#EFE5DA] rounded-[2rem] p-10 shadow-xl">
                <h2 className="text-4xl font-light mb-8">{service.title}</h2>

                <div className="space-y-4">
                  {service.items.map((item) => (
                    <div key={item} className="flex justify-between border-b border-[#D8C8BA] pb-3">
                      <span className="text-lg">{item}</span>
                      <span className="opacity-50">по запитване</span>
                    </div>
                  ))}
                </div>

                <a href="/contact" className="inline-block mt-10 bg-[#4E3B31] text-white px-8 py-4 rounded-full">
                  Запази час
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}