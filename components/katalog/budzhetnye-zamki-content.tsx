"use client"

import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Lock, Shield, Star, CheckCircle, Award } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ProductCard } from "@/components/ui/product-card"

export default function BudzhetnyeZamkiContent() {
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
                <Lock className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Бюджетные замки
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Высокое качество по доступным ценам
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Shield className="w-5 h-5 mr-2" />
                  Гарантия качества
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Star className="w-5 h-5 mr-2" />
                  Производство СНГ
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Доступные цены
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
               Каталог замков эконом-класса
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
                                         {/* ЗАЗ 4-6 МОТОР СИЧ */}
                                                                                                         <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/budzhetnye-zamki/1.jpg"
                      name="ЗАЗ 4-6 МОТОР СИЧ"
                      specs={[
                        { label: "Цвет", value: "медь" },
                        { label: "Механизм", value: "цилиндровый" },
                        { label: "Количество ключей", value: "4 шт" },
                        { label: "Комплектация", value: "с ручками, цилиндром" },
                        { label: "Способ установки", value: "врезной" },
                        { label: "Производство", value: "Запорожье" }
                      ]}
                    />
                  </CarouselItem>

                                       {/* ШО-25 */}
                                                                                                     <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/budzhetnye-zamki/2.jpg"
                      name="ШО-25"
                      specs={[
                        { label: "Цвет", value: "хром" },
                        { label: "Механизм", value: "полуавтоматический" },
                        { label: "Количество ключей", value: "5 шт" },
                        { label: "Комплектация", value: "с ручками, цилиндром" },
                        { label: "Способ установки", value: "врезной" },
                        { label: "Производство", value: "Беларусь" }
                      ]}
                    />
                  </CarouselItem>

                                       {/* ЗЕНИТ ЗВ4 - 3.01 */}
                                      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/budzhetnye-zamki/3.jpg"
                      name="ЗЕНИТ ЗВ4 - 3.01"
                      specs={[
                        { label: "Цвет", value: "на выбор" },
                        { label: "Механизм", value: "цилиндровый" },
                        { label: "Количество ключей", value: "4 шт" },
                        { label: "Комплектация", value: "с ручками, цилиндром" },
                        { label: "Способ установки", value: "врезной" },
                        { label: "Производство", value: "г.Димитровград" }
                      ]}
                    />
                  </CarouselItem>

                     {/* ЗВАД 1-01 */}
                                       <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/budzhetnye-zamki/4.jpg"
                      name="ЗВАД 1-01"
                      specs={[
                        { label: "Цвет", value: "на выбор" },
                        { label: "Механизм", value: "дисковый" },
                        { label: "Количество ключей", value: "4 шт" },
                        { label: "Комплектация", value: "с ручками, цилиндром" },
                        { label: "Способ установки", value: "врезной" },
                        { label: "Производство", value: "г. Ковров" }
                      ]}
                    />
                  </CarouselItem>

                     {/* ПРОСАМ ЗВ431 */}
                                       <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/budzhetnye-zamki/5.jpg"
                      name="ПРОСАМ ЗВ431"
                      specs={[
                        { label: "Цвет", value: "на выбор" },
                        { label: "Механизм", value: "цилиндровый" },
                        { label: "Количество ключей", value: "4 шт" },
                        { label: "Комплектация", value: "с ручками, цилиндром" },
                        { label: "Способ установки", value: "врезной" },
                        { label: "Производство", value: "г. Рязань" }
                      ]}
                    />
                  </CarouselItem>

                     {/* ГАРДИАН ЗВ 10.01 */}
                                       <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/budzhetnye-zamki/6.jpg"
                      name="ГАРДИАН ЗВ 10.01"
                      specs={[
                        { label: "Цвет накладок", value: "хром" },
                        { label: "Механизм", value: "сувальдный" },
                        { label: "Количество ключей", value: "4 шт" },
                        { label: "Комплектация", value: "ответная планка, накладки" },
                        { label: "Способ установки", value: "врезной" }
                      ]}
                    />
                  </CarouselItem>

                     {/* МЕТТЭМ ЗВ8 */}
                                       <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/budzhetnye-zamki/7.jpg"
                      name="МЕТТЭМ ЗВ8"
                      specs={[
                        { label: "Цвет накладок", value: "хром" },
                        { label: "Механизм", value: "сувальдный" },
                        { label: "Количество ключей", value: "4 шт" },
                        { label: "Комплектация", value: "ответная планка, накладки" },
                        { label: "Способ установки", value: "врезной" }
                      ]}
                    />
                  </CarouselItem>

                     {/* КРЕМЕНЬ */}
                                       <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/budzhetnye-zamki/8.jpg"
                      name="КРЕМЕНЬ"
                      specs={[
                        { label: "Цвет накладок", value: "хром" },
                        { label: "Механизм", value: "сувальдный" },
                        { label: "Количество ключей", value: "5 шт" },
                        { label: "Комплектация", value: "ответная планка, накладки" },
                        { label: "Способ установки", value: "врезной" }
                      ]}
                    />
                  </CarouselItem>

                     {/* ГРАНИТ */}
                                       <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/budzhetnye-zamki/9.jpg"
                      name="ГРАНИТ"
                      specs={[
                        { label: "Цвет накладок", value: "хром" },
                        { label: "Механизм", value: "сувальдный с задвижкой" },
                        { label: "Количество ключей", value: "5 шт" },
                        { label: "Комплектация", value: "ответная планка, накладки" },
                        { label: "Способ установки", value: "врезной" }
                      ]}
                    />
                  </CarouselItem>

                                                              {/* BORDER 81000 ПРОСАМ */}
                      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                       <ProductCard
                         image="/images/katalog/budzhetnye-zamki/10.jpg"
                         name="BORDER 81000 ПРОСАМ"
                         specs={[
                           { label: "Цвет накладок", value: "темный" },
                           { label: "Механизм", value: "сувальдный" },
                           { label: "Количество ключей", value: "3 шт" },
                           { label: "Комплектация", value: "накладки" },
                           { label: "Способ установки", value: "врезной" },
                           { label: "Производство", value: "г. Рязань" }
                         ]}
                       />
                     </CarouselItem>

                                           {/* KALE KILIT */}
                      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                       <ProductCard
                         image="/images/katalog/budzhetnye-zamki/11.jpg"
                         name="KALE KILIT"
                         specs={[
                           { label: "Цвет накладок", value: "латунь" },
                           { label: "Механизм", value: "крестообразный" },
                           { label: "Количество ключей", value: "5 шт" },
                           { label: "Комплектация", value: "накладки, ответная планка" },
                           { label: "Способ установки", value: "врезной" },
                           { label: "Производство", value: "Турция" }
                         ]}
                       />
                     </CarouselItem>

                                           {/* КЛАСС */}
                      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                       <ProductCard
                         image="/images/katalog/budzhetnye-zamki/12.jpg"
                         name="КЛАСС"
                         specs={[
                           { label: "Цвет накладок", value: "хром" },
                           { label: "Механизм", value: "сувальдный" },
                           { label: "Количество ключей", value: "5 шт" },
                           { label: "Комплектация", value: "накладки, ответная планка" },
                           { label: "Способ установки", value: "врезной" },
                           { label: "Производство", value: "г. Железнодорожный" }
                         ]}
                       />
                     </CarouselItem>

                                           {/* КЛАСС С ТЯГАМИ */}
                      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                       <ProductCard
                         image="/images/katalog/budzhetnye-zamki/13.jpg"
                         name="КЛАСС С ТЯГАМИ"
                         specs={[
                           { label: "Цвет накладок", value: "хром" },
                           { label: "Механизм", value: "сувальдный" },
                           { label: "Количество ключей", value: "5 шт" },
                           { label: "Комплектация", value: "накладки, ответная планка" },
                           { label: "Способ установки", value: "врезной" },
                           { label: "Производство", value: "г. Железнодорожный" }
                         ]}
                       />
                     </CarouselItem>

                                           {/* СЕЛЬМАШ */}
                      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                       <ProductCard
                         image="/images/katalog/budzhetnye-zamki/14.jpg"
                         name="СЕЛЬМАШ"
                         specs={[
                           { label: "Цвет накладок", value: "хром" },
                           { label: "Механизм", value: "крестообразный" },
                           { label: "Количество ключей", value: "5 шт" },
                           { label: "Комплектация", value: "накладки, ответная планка" },
                           { label: "Способ установки", value: "врезной" },
                           { label: "Производство", value: "г. Киров" }
                         ]}
                       />
                     </CarouselItem>

                                           {/* СЕЛЬМАШ с роликом */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                       <ProductCard
                         image="/images/katalog/budzhetnye-zamki/15.jpg"
                         name="СЕЛЬМАШ с роликом"
                         specs={[
                           { label: "Цвет накладок", value: "темный" },
                           { label: "Механизм", value: "цилиндровый" },
                           { label: "Количество ключей", value: "5 шт" },
                           { label: "Комплектация", value: "ответная планка, накладки" },
                           { label: "Способ установки", value: "врезной" },
                           { label: "Производство", value: "г. Киров" }
                         ]}
                       />
                  </CarouselItem>

                                           {/* КЭМЗ */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                       <ProductCard
                         image="/images/katalog/budzhetnye-zamki/16.jpg"
                         name="КЭМЗ"
                         specs={[
                           { label: "Цвет накладок", value: "темный" },
                           { label: "Механизм", value: "цилиндровый" },
                           { label: "Количество ключей", value: "5 шт" },
                           { label: "Комплектация", value: "накладки, ответная планка" },
                           { label: "Способ установки", value: "накладной" },
                           { label: "Производство", value: "г. Калуга" }
                         ]}
                       />
                  </CarouselItem>

                                           {/* KALE KILIT (накладной) */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                       <ProductCard
                         image="/images/katalog/budzhetnye-zamki/17.jpg"
                         name="KALE KILIT"
                         specs={[
                           { label: "Цвет", value: "на выбор" },
                           { label: "Механизм", value: "цилиндровый" },
                           { label: "Количество ключей", value: "3 шт" },
                           { label: "Комплектация", value: "накладки, ответная планка" },
                           { label: "Способ установки", value: "накладной" },
                           { label: "Производство", value: "Турция" }
                         ]}
                       />
                  </CarouselItem>

                                           {/* БАЗАЛЬТ */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                       <ProductCard
                         image="/images/katalog/budzhetnye-zamki/18.jpg"
                         name="БАЗАЛЬТ"
                         specs={[
                           { label: "Цвет накладок", value: "хром" },
                           { label: "Механизм", value: "сувальдный" },
                           { label: "Количество ключей", value: "5 шт" },
                           { label: "Комплектация", value: "ответная планка, накладки" },
                           { label: "Способ установки", value: "врезной" }
                         ]}
                       />
                  </CarouselItem>
                </CarouselContent>
                   
                   {/* Навигация */}
                   <div className="flex items-center justify-center mt-6 gap-2">
                     <CarouselPrevious className="relative static translate-y-0 w-10 h-10" />
                     <CarouselNext className="relative static translate-y-0 w-10 h-10" />
                   </div>
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
                   Качественные замки по доступным ценам
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
                         Современное производство
                       </h4>
                       <p className="text-muted-foreground leading-relaxed">
                     Сегодня распространено мнение, что хороших, но одновременно недорогих замков не бывает, а все что представлено отечественными производителями не выдерживает никакой критики.
                   </p>
                       <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                         <span className="text-foreground font-semibold">
                           ⚡ Прогресс не стоит на месте
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
                         Импортное оборудование
                       </h4>
                       <p className="text-muted-foreground leading-relaxed">
                         Замочно-скобяная продукция теперь изготавливается на импортном оборудовании, с соблюдением стандартов качества. Цена остается конкурентноспособной с импортными аналогами.
                       </p>
                       <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                         <span className="text-foreground font-semibold">
                           💰 Ценовая политика от <span className="text-primary font-bold">2000 рублей</span>
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
                     <span className="text-foreground font-semibold text-lg">Производство в СНГ</span>
                     <Star className="w-5 h-5 text-primary" />
                   </div>
                   <p className="text-muted-foreground">
                     За счет производства в СНГ, не требующей существенных вложений в перевозку и растаможивание продукции, цена складывается из стоимости самого замка и способа замены, установки или врезки замка, а так же конструктивных особенностей двери.
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
