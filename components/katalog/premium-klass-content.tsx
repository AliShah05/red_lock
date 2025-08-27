"use client"

import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Star, Shield, Award, Crown, CheckCircle } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ProductCard } from "@/components/ui/product-card"

export default function PremiumKlassContent() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Замки Премиум-класса
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Максимальная безопасность и качество
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Crown className="w-5 h-5 mr-2" />
                  Премиум качество
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Shield className="w-5 h-5 mr-2" />
                  Максимальная защита
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  Высшие стандарты
                </Badge>
              </div>
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.open('tel:+79264615302', '_self')}>
                <Phone className="w-5 h-5 mr-2" />
                Заказать: +7 926 461-53-02
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        </section>

        

        {/* Products Slider Section */}
        <section className="py-16 bg-gradient-to-br from-card/50 to-primary/5">
          <div className="container mx-auto px-4">
                         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
               Каталог замков премиум-класса
             </h2>
            <div className="w-full">
              <Carousel 
                className="w-full"
                opts={{
                  dragFree: true,
                  containScroll: "keepSnaps"
                }}
              >
                <CarouselContent>
                  {/* Односистемный замок ATRA */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/1.jpg"
                      name="Односистемный замок ATRA"
                      specs={[
                        { label: "Серия", value: "HEAVY с одним ключевым механизмом повышенной секретности" },
                        { label: "Точки запирания", value: "3 точки" },
                        { label: "Тип", value: "Сувальдный замок ATRA со сменным блоком секретности" },
                        { label: "Управление", value: "управляет распорами и ригелями" },
                        { label: "Секретность", value: "более 1 млн. секретов" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Двухсистемный замок ATRA */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/2.jpg"
                      name="Двухсистемный замок ATRA"
                      specs={[
                        { label: "Тип", value: "DOUBLE CYLINDRO - зависимый замок" },
                        { label: "Секретность", value: "со сменным элементом секретности (нуклео)" },
                        { label: "Комплектация", value: "накладки, две пластины, препятствующие высверливанию, винты для крепления цилиндра" },
                        { label: "Верхний замок", value: "управляет распорами, ригелями и защелкой" },
                        { label: "Нижний замок", value: "имеет один ригель и блокирует верхний замок" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Замок ABLOY */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/3.jpg"
                      name="Замок ABLOY"
                      specs={[
                        { label: "Тип", value: "Врезной сувальдный" },
                        { label: "Секретность", value: "более 1 млн. различных комбинаций" },
                        { label: "Корпус", value: "из закаленной стали, дополнительно укреплен броненакладками" },
                        { label: "Ригель", value: "крюкообразный, цепляется за ответную часть двери" },
                        { label: "Защита", value: "препятствует вскрытию двери силовым методом" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Замок ABLOY */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/4.jpg"
                      name="Замок ABLOY"
                      specs={[
                        { label: "Ригель прямой", value: "прямой конструкции, запирается и отпирается посредством ключа или поворотной вертушки" },
                        { label: "Ригель косой", value: "из закаленной стали, отпирается как ключом, так и с помощью ручки" },
                        { label: "Ручки", value: "комплектуется дополнительно" },
                        { label: "Защита", value: "от высверливания" }
                      ]}
                    />
                  </CarouselItem>

                  {/* ABUS */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/5.jpg"
                      name="ABUS"
                      specs={[
                        { label: "Установка", value: "можно установить практически на все корпуса замков" },
                        { label: "Защита цилиндра", value: "от выбивания или слома" },
                        { label: "Защитный диск", value: "свободно вращающийся стальной диск на ручке защищает от высверливания" },
                        { label: "Цилиндр", value: "в данной комплектации предусмотрен цилиндр на выбор" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Односистемный замок CISA */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/6.jpg"
                      name="Односистемный замок CISA"
                      specs={[
                        { label: "Механизм", value: "с одним ключевым механизмом повышенной секретности" },
                        { label: "Запирание", value: "полное запирание в 4 оборота" },
                        { label: "Тип", value: "Сувальдный механизм" },
                        { label: "Функция", value: "выпускаются модели замков с функцией перекодировки New Cambio Facile" },
                        { label: "Ключи", value: "в зависимости от комплектации 3 или 5 сейфовых ключей" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Двухсистемный замок CISA */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/7.jpg"
                      name="Двухсистемный замок CISA"
                      specs={[
                        { label: "Система", value: "с механической системой перекодировки" },
                        { label: "Установка", value: "устанавливается в металлические двери в качестве основного замка" },
                        { label: "Комплектация", value: "корпус замка, набор для перекодировки, монтажный ключ" },
                        { label: "Не комплектуется", value: "цилиндром, торцевой планкой, накладками" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Двухсистемный замок CISA */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/8.jpg"
                      name="Двухсистемный замок CISA"
                      specs={[
                        { label: "Тип", value: "Цилиндровый с системой '2 in 1'" },
                        { label: "Ригели", value: "пять ригелей замка плюс защелка" },
                        { label: "Ручки", value: "подходят раздельные ручки MSM Lock или Armadillo" },
                        { label: "Рекомендации", value: "рекомендуется броненакладка CISA" },
                        { label: "Блок замка", value: "имеет уши для монтажа вертикальных тяг" },
                        { label: "Цилиндры", value: "от любого европейского производителя" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Замки MOTTURA 52 серии */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/9.jpg"
                      name="Замки MOTTURA 52 серии"
                      specs={[
                        { label: "Тип", value: "Мощные врезной замок предназначен для металлических дверей" },
                        { label: "Система", value: "некоторые модели снабжены системой Nucleo Replay (сменный перекодируемый сувальдный механизм)" },
                        { label: "Количество ключей", value: "5 шт" },
                        { label: "Дополнительная комплектация", value: "ручки, защитная марганцевая пластина" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Замки MOTTURA 54 серии */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/10.jpg"
                      name="Замки MOTTURA 54 серии"
                      specs={[
                        { label: "Тип", value: "Мощные, врезные замки с защелкой, имеющие три точки запирания" },
                        { label: "Механизм", value: "двухсистемный замок с сувальдными механизмами" },
                        { label: "Комплектация", value: "комплектуется двумя наборами, каждый по 5 ключей" },
                        { label: "Действие ключей", value: "действие главного черного ключа блокирует красный ключ" },
                        { label: "Дополнительная комплектация", value: "ручки, защитная марганцевая пластина" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Замки MOTTURA 62 серии Serrablocca */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/11.jpg"
                      name="Замки MOTTURA 62 серии Serrablocca"
                      specs={[
                        { label: "Тип", value: "Сувальдно помповые качественные, взломостойкие и особо мощные замки" },
                        { label: "Корпус", value: "корпус замка усилен бронезащитной пластиной в районе замочной скважины" },
                        { label: "Управление", value: "изнутри дверь можно открыть или закрыть ручкой" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Замки MOTTURA 72 серии */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/12.jpg"
                      name="Замки MOTTURA 72 серии"
                      specs={[
                        { label: "Тип", value: "Врезной сувальдный замок, не имеющий защелки" },
                        { label: "Комплектация", value: "комплектуется 5 ключами, накладками, ответной планкой" },
                        { label: "Дополнительная защита", value: "замок Mottura 72 серии дополнительно может быть защищен марганцевой пластиной" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Замки MOTTURA 85 серии */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/13.jpg"
                      name="Замки MOTTURA 85 серии"
                      specs={[
                        { label: "Тип", value: "Врезной замок с защелкой, имеет три точки запирания" },
                        { label: "Комплектация", value: "замок может комплектоваться ручками, марганцевой пластиной против сверления, евроцилиндром на выбор, броненакладкой для защиты цилиндра" }
                      ]}
                    />
                  </CarouselItem>

                  {/* NUCLEO MOTTURA */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/14.jpg"
                      name="NUCLEO MOTTURA"
                      specs={[
                        { label: "Функция", value: "сменный блок нуклео позволяет при утере ключа менять только элемент секретности замка, а не весь замок" },
                        { label: "Гарантия безопасности", value: "заказчик сам распечатывает ключи от нового нуклео замка" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Замки MUL-T-Lock M602 */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/15.jpg"
                      name="Замки MUL-T-Lock M602"
                      specs={[
                        { label: "Тип", value: "Основной замок под ручку с системой четырехканального запирания" },
                        { label: "Особенности", value: "замок имеет два протектора цилиндра, реверсную защелку" },
                        { label: "Удобство", value: "удобно запирается одним оборотом ключа" },
                        { label: "Рекомендации", value: "установка желательна с комплектом защитной фурнитуры" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Замки MUL-T-Lock OMEGA+ */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/16.jpg"
                      name="Замки MUL-T-Lock OMEGA+"
                      specs={[
                        { label: "Тип", value: "Роторные замки OMEGA+ чрезвычайно стойки к попыткам взлома или подбора отмычки" },
                        { label: "Секретность", value: "число секретных комбинаций превышает 10 миллионов" },
                        { label: "Принцип работы", value: "при повороте ключа в двери ротор приводит в движение шестерни, которые управляют ригелями и вертикальными тягами, движущимися независимо друг от друга" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Замки MUL-T-Lock MATRIX */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/17.jpg"
                      name="Замки MUL-T-Lock MATRIX"
                      specs={[
                        { label: "Тип", value: "Перекодируемые запатентованные замки с зубчато-реечным механизмом" },
                        { label: "Характеристики", value: "абсолютно бесшумные, устойчивые к взлому, легко перекодируемые" },
                        { label: "Перекодировка", value: "перекодировка позволит использование новой связки ключей бесконечное количество раз" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Замки SECUREMME 25 серии */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/18.jpg"
                      name="Замки SECUREMME 25 серии"
                      specs={[
                        { label: "Тип", value: "Двухсистемный сувальдно-цилиндровый замок" },
                        { label: "Верхняя система", value: "сувальдный механизм со сменным секретным механизмом (нуклео)" },
                        { label: "Нижняя система", value: "цилиндровый механизм с возможностью установки в нее любого цилиндра евростандарта" },
                        { label: "Рекомендации", value: "желательна установка броненакладки (дополнительно)" },
                        { label: "Особенность", value: "при закрытии нижнего механизма, закрывается отверстие для ключа верхнего механизма" }
                      ]}
                    />
                  </CarouselItem>

                  {/* NUCLEO SECUREMME */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/premium-klass/19.jpg"
                      name="NUCLEO SECUREMME"
                      specs={[
                        { label: "Функция", value: "сменный блок нуклео позволяет при утере ключа менять только элемент секретности замка, а не весь замок" },
                        { label: "Гарантия безопасности", value: "заказчик сам распечатывает ключи от нового нуклео замка" }
                      ]}
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
                 </section>

         {/* Description Section */}
         <section className="py-20 bg-gradient-to-br from-background via-card/30 to-primary/5">
           <div className="container mx-auto px-4">
             <div className="max-w-5xl mx-auto">
               {/* Заголовок секции */}
               <div className="text-center mb-12">
                 <div className="w-16 h-16 bg-primary/15 rounded-full flex items-center justify-center mx-auto mb-4">
                   <Crown className="w-8 h-8 text-primary" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                   Максимальная безопасность и качество
                 </h3>
                 <div className="w-24 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full mx-auto"></div>
               </div>

               {/* Основной контент */}
               <div className="grid md:grid-cols-2 gap-8">
                 {/* Первый блок */}
                 <div className="bg-gradient-to-br from-card/80 to-primary/10 rounded-2xl p-8 shadow-xl border border-primary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group">
                   <div className="flex items-start space-x-4">
                     <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                       <CheckCircle className="w-6 h-6 text-primary" />
                     </div>
                     <div className="flex-1">
                       <h4 className="text-xl font-semibold text-foreground mb-3">
                         Мировые лидеры безопасности
                       </h4>
                       <p className="text-muted-foreground leading-relaxed">
                         Самые надежные замки для металлических дверей Премиум-класса представлены на отечественном рынке, в первую очередь, мировыми ведущими компаниями замочно-скобяной продукции с высокой степенью секретности механизмов, такими как: ATRA, ABUS, CISA, MOTTURA, MUL-T-LOCK, KABA, EVVA, SECUREMME и др.
                       </p>
                       <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                         <span className="text-foreground font-semibold">
                           🌍 Исключительно надежные замки
                         </span>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Второй блок */}
                 <div className="bg-gradient-to-br from-card/80 to-primary/10 rounded-2xl p-8 shadow-xl border border-primary/20 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 group">
                   <div className="flex items-start space-x-4">
                     <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                       <Award className="w-6 h-6 text-primary" />
                     </div>
                     <div className="flex-1">
                       <h4 className="text-xl font-semibold text-foreground mb-3">
                         Максимальная защита
                       </h4>
                       <p className="text-muted-foreground leading-relaxed">
                         Данная категория предполагает использование исключительно надежных замков. Надежные дверные замки данных производителей невозможно открыть отмычкой или подбором ключей, количество секретных комбинаций подбора доходит до нескольких миллионов.
                       </p>
                       <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                         <span className="text-foreground font-semibold">
                           💰 Ценовая политика от <span className="text-primary font-bold">7000 рублей</span>
                         </span>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Дополнительная информация */}
               <div className="mt-12 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
                 <div className="text-center">
                   <div className="flex items-center justify-center space-x-2 mb-3">
                     <Star className="w-5 h-5 text-primary" />
                     <span className="text-foreground font-semibold text-lg">Любой каприз за Ваши деньги!</span>
                     <Star className="w-5 h-5 text-primary" />
                   </div>
                   <p className="text-muted-foreground">
                     Цилиндры производятся из кислотно-износостойкого металла и оснащены победитовыми стержнями и стальными шариками, защищающими механизм замка от высверливания. Это инвестиция в безопасность, которая окупается спокойствием и защищенностью.
                   </p>
                 </div>
               </div>
             </div>
           </div>
         </section>

         
      </main>
      <Footer />
    </div>
  )
}
