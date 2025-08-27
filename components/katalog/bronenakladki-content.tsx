"use client"

import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Wrench, Shield, Award, Lock, CheckCircle, Star } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ProductCard } from "@/components/ui/product-card"

export default function BronenakladkiContent() {
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
                <Wrench className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Броненакладки
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Максимальная защита от взлома
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Shield className="w-5 h-5 mr-2" />
                  Защита от взлома
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  Высокая прочность
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Lock className="w-5 h-5 mr-2" />
                  Дополнительная безопасность
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
               Каталог броненакладок
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
                  {/* ABUS */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/bronenakladki/1.jpg"
                      name="ABUS"
                      specs={[
                        { label: "Ручки с бронезащитой", value: "можно установить практически на все корпуса замков, ранее установленных в металлических дверях" },
                        { label: "Защита цилиндра", value: "осуществляется за счет бронечашечки с пластиковыми проставками внутри для защиты от выбивания или слома цилиндра" },
                        { label: "Свободно вращающийся стальной диск", value: "на ручке защищает от высверливания" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Накладная броненакладка Apecs */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/bronenakladki/2.jpg"
                      name="Накладная броненакладка Apecs"
                      specs={[
                        { label: "Серия", value: "Basic" },
                        { label: "Линия", value: "Simple" },
                        { label: "Цвета на выбор", value: "золото, бронза, хром" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Врезная броненакладка Apecs */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/bronenakladki/3.jpg"
                      name="Врезная броненакладка Apecs"
                      specs={[
                        { label: "Серия", value: "Protector Pro" },
                        { label: "Линия", value: "Standart" },
                        { label: "Цвета на выбор", value: "золото, хром" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Накладная броненакладка Cisa */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/bronenakladki/4.jpg"
                      name="Накладная броненакладка Cisa"
                      specs={[
                        { label: "Защитная броня", value: "из цементированной азотированной стали" },
                        { label: "Цвета на выбор", value: "латунь, хром" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Врезная броненакладка Cisa */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/bronenakladki/5.jpg"
                      name="Врезная броненакладка Cisa"
                      specs={[
                        { label: "Защитная броня", value: "из цементированной азотированной стали" },
                        { label: "Цвета на выбор", value: "латунь, хром" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Перекодировочная накладка Cisa */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/bronenakladki/6.jpg"
                      name="Перекодировочная накладка Cisa"
                      specs={[
                        { label: "Секретная накладка", value: "для установки на шестисувальдные замки Cisa" },
                        { label: "Цвета на выбор", value: "латунь, хром, никель" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Накладная броненакладка Kale Kilit */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/bronenakladki/7.jpg"
                      name="Накладная броненакладка Kale Kilit"
                      specs={[
                        { label: "Цвета на выбор", value: "латунь, никель" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Врезная броненакладка Kale Kilit */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/bronenakladki/8.jpg"
                      name="Врезная броненакладка Kale Kilit"
                      specs={[
                        { label: "Цвет", value: "латунь" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Врезная броненакладка Mottura */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/bronenakladki/9.jpg"
                      name="Врезная броненакладка Mottura"
                      specs={[
                        { label: "Серия защитных броненакладок", value: "Defender Top System поставляется со съемными крышками 5 цветов" },
                        { label: "Отверстие под ключ защищено", value: "вращающейся шайбой из марганцевой стали" },
                        { label: "Цвета на выбор", value: "хром, матовый хром, черный полимер, латунь, матовая латунь" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Накладная броненакладка Mottura */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/bronenakladki/10.jpg"
                      name="Накладная броненакладка Mottura"
                      specs={[
                        { label: "Защитная броня", value: "из цементированной азотированной стали" },
                        { label: "Отверстие под ключ защищено", value: "вращающейся шайбой из марганцевой стали" },
                        { label: "Цвета на выбор", value: "латунь, хром" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Накладная броненакладка Mul-T-Lock */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/bronenakladki/11.jpg"
                      name="Накладная броненакладка Mul-T-Lock"
                      specs={[
                        { label: "Рекомендуется", value: "как защита врезного замка стандарта DIN" },
                        { label: "Цвета на выбор", value: "латунь, хром" }
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
                   <Wrench className="w-8 h-8 text-primary" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                   Обязательная защита цилиндровых механизмов
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
                         Сверхтвердые сплавы
                       </h4>
                       <p className="text-muted-foreground leading-relaxed">
                         Бронированные накладки рекомендуется в обязательном порядке устанавливать для защиты цилиндровых механизмов. Они изготавливаются из сверхтвердых сплавов и значительно повышают взломоустойчивость замков.
                       </p>
                       <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                         <span className="text-foreground font-semibold">
                           🛡️ Обязательная установка
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
                         Мощный внешний вид
                       </h4>
                       <p className="text-muted-foreground leading-relaxed">
                         Их мощный, солидный внешний вид сам по себе является хорошей профилактикой против попытки проникновения! Броненакладки производятся из закаленных сплавов и разделяются на врезные и накладные.
                       </p>
                                               <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                          <span className="text-foreground font-semibold">
                            🛡️ Дополнительная защита
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
                     <span className="text-foreground font-semibold text-lg">Профилактика взлома</span>
                     <Star className="w-5 h-5 text-primary" />
                   </div>
                   <p className="text-muted-foreground">
                     Установка броненакладок - это эффективный способ повысить безопасность вашего дома без замены всего замка. Они обеспечивают дополнительную защиту от самых распространенных способов взлома. Доступная цена за дополнительную защиту вашего замка.
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
