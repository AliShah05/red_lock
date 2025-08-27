


"use client"

import { Phone, MessageCircle } from "lucide-react"

export default function Footer() {
  const districts = [
    {
      code: "ВАО",
      name: "Восточный административный округ",
      areas: [
        "Богородское", "Вешняки", "Восточный", "Гольяново", "Ивановский",
        "Измайлово", "Косино-Ухтомский", "Кожухово", "Метрогородок",
        "Новогиреево", "Новокосино", "Перово", "Преображенский",
        "Соколиная гора", "Сокольники"
      ]
    },
    {
      code: "СВАО",
      name: "Северо-Восточный административный округ",
      areas: [
        "Алексеевский", "Алтуфьевский", "Бабушкинский", "Бибирево",
        "Бутырский", "Лианозово", "Марфино", "Марьина Роща",
        "Останкинскинский", "Отрадное", "Ростокино", "Свиблово",
        "Медведково", "Северный", "Ярославский"
      ]
    },
    {
      code: "ЮВАО",
      name: "Юго-Восточный административный округ",
      areas: [
        "Выхино-Жулебино", "Капотня", "Кузьминки", "Лефортово",
        "Люблино", "Марьино", "Некрасовка", "Нижегородский",
        "Печатники", "Рязанский", "Текстильщики", "Южнопортовый"
      ]
    },
    {
      code: "ЗАО",
      name: "Западный административный округ",
      areas: [
        "Внуково", "Дорогомилово", "Крылатское", "Кунцево",
        "Можайский", "Ново-Переделкино", "Очаково-Матвеевское",
        "Проспект Вернадского", "Раменки", "Солнцево",
        "Тропарево–Никулино", "Филевский Парк", "Фили-Давыдково"
      ]
    },
    {
      code: "СЗАО",
      name: "Северо-Западный административный округ",
      areas: [
        "Куркино", "Митино", "Покровское-Стрешнево", "Строгино",
        "Тушино", "Хорошево-Мневники", "Щукино"
      ]
    }
  ]

  const districtsColumn2 = [
    {
      code: "ЦАО",
      name: "Центральный административный округ",
      areas: [
        "Арбат", "Басманный", "Замоскворечье", "Красносельский",
        "Мещанский", "Пресненский", "Таганский", "Тверской",
        "Хамовники", "Якиманка"
      ]
    },
    {
      code: "ЮАО",
      name: "Южный административный округ",
      areas: [
        "Бирюлево", "Братеево", "Даниловский", "Донской",
        "Зябликово", "Москворечье-Сабурово", "Нагатино-Садовники",
        "Нагатинский Затон", "Нагорный", "Орехово-Борисово",
        "Царицыно", "Чертаново"
      ]
    },
    {
      code: "САО",
      name: "Северный административный округ",
      areas: [
        "Аэропорт", "Беговой", "Бескудниковский", "Войковский",
        "Головинский", "Дегунино", "Дмитровский", "Коптево",
        "Левобережный", "Молжаниновский", "Савёловский", "Сокол",
        "Тимирязевский", "Ховрино", "Хорошёвский"
      ]
    },
    {
      code: "ЮЗАО",
      name: "Юго-Западный административный округ",
      areas: [
        "Академический", "Гагаринский", "Зюзино", "Коньково",
        "Котловка", "Ломоносовский", "Обручевский", "Теплый Стан",
        "Черемушки", "Южное Бутово", "Ясенево"
      ]
    }
  ]

  const moscowOblastDistricts = [
    "Видное", "Дзержинский", "Домодедово", "Железнодорожный",
    "Жуковский", "Королёв", "Котельники", "Красногорск",
    "Лыткарино", "Люберцы", "Мытищи", "Реутов", "Химки"
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Contact Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Сервис центр замков Москва, Московская область
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a 
              href="tel:+79264615302" 
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors text-xl font-semibold"
            >
              <Phone className="w-6 h-6" />
              <span>+7 926 461-53-02</span>
            </a>
          </div>
          
          {/* Social Media */}
          <div className="flex items-center justify-center space-x-4">
            <a 
              href="https://wa.me/79264615302" 
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 rounded-full px-6 py-3 transition-colors text-white font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Написать</span>
            </a>
          </div>
        </div>

        {/* Districts Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - First 5 districts */}
            <div>
              {districts.map((district, index) => (
                <details key={index} className="mb-4 border border-border rounded-lg">
                  <summary className="cursor-pointer p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-semibold text-foreground mr-3">
                          {district.code}
                        </span>
                        <span className="text-md font-medium text-muted-foreground">
                          {district.name}
                        </span>
                      </div>
                      <span className="text-muted-foreground">▼</span>
                    </div>
                  </summary>
                  <div className="p-4 pt-0 border-t border-border">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 text-sm text-muted-foreground">
                      {district.areas.map((area, areaIndex) => (
                        <div key={areaIndex} className="py-1">
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
            </div>

            {/* Right Column - Second 4 districts */}
            <div>
              {districtsColumn2.map((district, index) => (
                <details key={index} className="mb-4 border border-border rounded-lg">
                  <summary className="cursor-pointer p-4 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-semibold text-foreground mr-3">
                          {district.code}
                        </span>
                        <span className="text-md font-medium text-muted-foreground">
                          {district.name}
                        </span>
                      </div>
                      <span className="text-muted-foreground">▼</span>
                    </div>
                  </summary>
                  <div className="p-4 pt-0 border-t border-border">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 text-sm text-muted-foreground">
                      {district.areas.map((area, areaIndex) => (
                        <div key={areaIndex} className="py-1">
                          {area}
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              ))}
              
              {/* Moscow Oblast Districts */}
              <details className="mb-4 border border-border rounded-lg">
                <summary className="cursor-pointer p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-semibold text-foreground mr-3">
                        МО
                      </span>
                      <span className="text-md font-medium text-muted-foreground">
                        Московская область
                      </span>
                    </div>
                    <span className="text-muted-foreground">▼</span>
                  </div>
                </summary>
                <div className="p-4 pt-0 border-t border-border">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 text-sm text-muted-foreground">
                    {moscowOblastDistricts.map((district, index) => (
                      <div key={index} className="py-1">
                        {district}
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Red Lock. Все права защищены. Профессиональные услуги слесаря 24/7
          </p>
        </div>
      </div>
    </footer>
  )
}


