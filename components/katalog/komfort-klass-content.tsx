"use client"

import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Shield, Star, CheckCircle, Award } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ProductCard } from "@/components/ui/product-card"

export default function KomfortKlassContent() {
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
                <Shield className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Замки Комфорт-класса
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Оптимальное соотношение цена-качество
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Award className="w-5 h-5 mr-2" />
                  Улучшенное качество
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Star className="w-5 h-5 mr-2" />
                  Доступные цены
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Надежность
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
               Каталог замков комфорт-класса
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
                                     {/* APECS 1425 */}
                   <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                     <ProductCard
                       image="/images/katalog/komfort-klass/1.jpg"
                       name="APECS 1425"
                       specs={[
                         { label: "Цвет ручек", value: "хром, латунь, медь, бронза" },
                         { label: "Механизм", value: "цилиндровый" },
                         { label: "Количество ключей", value: "5 шт" },
                         { label: "Комплектация", value: "замок, ответная планка, ручки" },
                         { label: "Способ установки", value: "врезной" },
                         { label: "Особенности", value: "цилиндрический механизм на выбор!" }
                       ]}
                     />
                   </CarouselItem>

                                     {/* BORDER ЗВ9-6 */}
                   <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                     <ProductCard
                       image="/images/katalog/komfort-klass/2.jpg"
                       name="BORDER ЗВ9-6"
                       specs={[
                         { label: "Цвет ручек", value: "латунь" },
                         { label: "Механизм", value: "сувальдный" },
                         { label: "Количество ключей", value: "5 шт" },
                         { label: "Комплектация", value: "замок, ответная планка, ручки" },
                         { label: "Способ установки", value: "врезной" }
                       ]}
                     />
                   </CarouselItem>

                                     {/* BORDER ЗВ9-8К */}
                   <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                     <ProductCard
                       image="/images/katalog/komfort-klass/3.jpg"
                       name="BORDER ЗВ9-8К"
                       specs={[
                         { label: "Цвет ручек", value: "медный антик" },
                         { label: "Механизм", value: "сувальдный" },
                         { label: "Количество ключей", value: "5 шт" },
                         { label: "Комплектация", value: "замок, ответная планка, ручки" },
                         { label: "Способ установки", value: "врезной" }
                       ]}
                     />
                   </CarouselItem>

                                     {/* KALE KILIT */}
                   <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                     <ProductCard
                       image="/images/katalog/komfort-klass/4.jpg"
                       name="KALE KILIT"
                       specs={[
                         { label: "Цвет ручек", value: "латунь" },
                         { label: "Механизм", value: "цилиндрический" },
                         { label: "Количество ключей", value: "5 шт" },
                         { label: "Комплектация", value: "замок, ответная планка, ручки" },
                         { label: "Способ установки", value: "врезной" },
                         { label: "Особенности", value: "цилиндрический механизм на выбор!" }
                       ]}
                     />
                   </CarouselItem>

                                     {/* KALE KILIT */}
                   <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                     <ProductCard
                       image="/images/katalog/komfort-klass/5.jpg"
                       name="KALE KILIT"
                       specs={[
                         { label: "Цвет ручек", value: "латунь" },
                         { label: "Механизм", value: "цилиндрический" },
                         { label: "Количество ключей", value: "5 шт" },
                         { label: "Комплектация", value: "замок, ручки на выбор, броне накладка на выбор" },
                         { label: "Способ установки", value: "врезной" },
                         { label: "Особенности", value: "цилиндрический механизм на выбор" }
                       ]}
                     />
                   </CarouselItem>

                                     {/* КРИТ */}
                   <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                     <ProductCard
                       image="/images/katalog/komfort-klass/6.jpg"
                       name="КРИТ"
                       specs={[
                         { label: "Цвет ручек", value: "хром" },
                         { label: "Механизм", value: "цилиндрический" },
                         { label: "Количество ключей", value: "5 шт" },
                         { label: "Комплектация", value: "замок, комплект ручек на планке" },
                         { label: "Способ установки", value: "врезной" },
                         { label: "Особенности", value: "цилиндрический механизм на выбор" }
                       ]}
                     />
                   </CarouselItem>

                   {/* CISA (Италия) */}
                   <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                     <ProductCard
                       image="/images/katalog/komfort-klass/7.jpg"
                       name="CISA (Италия)"
                       specs={[
                         { label: "Цвет накладки", value: "латунь" },
                         { label: "Механизм", value: "сувальдный" },
                         { label: "Количество ключей", value: "5 шт" },
                         { label: "Комплектация", value: "замок, ответная планка, накладки" },
                         { label: "Способ установки", value: "врезной" }
                       ]}
                     />
                   </CarouselItem>

                   {/* MOTTURA (Италия) */}
                   <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                     <ProductCard
                       image="/images/katalog/komfort-klass/8.jpg"
                       name="MOTTURA (Италия)"
                       specs={[
                         { label: "Цвет накладки", value: "латунь" },
                         { label: "Механизм", value: "сувальдный" },
                         { label: "Количество ключей", value: "5 шт" },
                         { label: "Комплектация", value: "замок, ответная планка, накладки" },
                         { label: "Способ установки", value: "врезной" }
                       ]}
                     />
                   </CarouselItem>

                   {/* МЕТТЭМ ЗВ8 с задвижкой */}
                   <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                     <ProductCard
                       image="/images/katalog/komfort-klass/9.jpg"
                       name="МЕТТЭМ ЗВ8 с задвижкой"
                       specs={[
                         { label: "Цвет накладки", value: "хром" },
                         { label: "Механизм", value: "сувальдный" },
                         { label: "Количество ключей", value: "5 шт" },
                         { label: "Комплектация", value: "замок, задвижка, накладки" },
                         { label: "Способ установки", value: "врезной" }
                       ]}
                     />
                   </CarouselItem>

                   {/* ГАРДИАН */}
                   <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                     <ProductCard
                       image="/images/katalog/komfort-klass/10.jpg"
                       name="ГАРДИАН"
                       specs={[
                         { label: "Цвет накладки", value: "хром" },
                         { label: "Механизм", value: "сувальдный" },
                         { label: "Количество ключей", value: "4 шт" },
                         { label: "Комплектация", value: "замок, задвижка, накладки" },
                         { label: "Способ установки", value: "врезной" },
                         { label: "Особенности", value: "ручки на выбор" }
                       ]}
                     />
                   </CarouselItem>

                   {/* RITKO (КРИТ-М) */}
                   <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                     <ProductCard
                       image="/images/katalog/komfort-klass/11.jfif"
                       name="RITKO (КРИТ-М)"
                       specs={[
                         { label: "Цвет", value: "хром, латунь" },
                         { label: "Механизм", value: "цилиндровый" },
                         { label: "Количество ключей", value: "5 шт" },
                         { label: "Комплектация", value: "замок" },
                         { label: "Способ установки", value: "врезной" },
                         { label: "Особенности", value: "ручки, броне накладка на выбор" }
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
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Почему выбирают замки Комфорт-класса?
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
                          Оптимальное соотношение цена/качество
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Замки Комфорт-класса - это оптимальное решение по соотношению цена/качество. Возможность установки дополнительной защиты (бронированных накладок, марганцевых пластин), выбора комплектации, в зависимости от пожеланий (ручки, цилиндры).
                        </p>
                        <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                          <span className="text-foreground font-semibold">
                            💰 Средняя ценовая политика - от <span className="text-primary font-bold">3500 рублей</span>
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
                          Профессиональная установка и комплектация
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Замена замка Комфорт-класса предполагает на выбор цилиндра европейского стандарта разных размеров, установку броненакладок, фурнитуру для входной металлической двери.
                        </p>
                        <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                          <span className="text-foreground font-semibold">
                            ⭐ Качество не уступает именитым моделям, но стоит в разы дешевле!
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
                      <span className="text-foreground font-semibold text-lg">Долговечность и надежность</span>
                      <Star className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Данные механизмы служат достаточно долго при правильной установке и эксплуатации, обеспечивая надежную защиту вашего дома.
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
