"use client"

import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Key, Shield, Settings, Lock, CheckCircle, Award, Star } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ProductCard } from "@/components/ui/product-card"

export default function TsilindryZamkaContent() {
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
                <Key className="w-12 h-12 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Цилиндры замка
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Сердце замкового механизма
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Shield className="w-5 h-5 mr-2" />
                  Защита от взлома
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Settings className="w-5 h-5 mr-2" />
                  Легкая замена
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Lock className="w-5 h-5 mr-2" />
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
               Каталог цилиндров замков
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
                  {/* Цилиндр замка MAUER RED LINE L52/ 21-31 */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/1.jpg"
                      name="Цилиндр замка MAUER RED LINE L52/ 21-31"
                      specs={[
                        { label: "Степень секретности", value: "85 000 000 комбинаций" },
                        { label: "Секретная кодовая пин-карта", value: "для выпуска дубликата" },
                        { label: "Запатентованная защита", value: "от вскрытия бампингом, отмычками" },
                        { label: "Невозможно", value: "высверлить или сломать / переломить корпус" },
                        { label: "Ключи", value: "мельхиоровые 5+1" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка MAUER RED LINE L82/ 31-51 */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/2.jpg"
                      name="Цилиндр замка MAUER RED LINE L82/ 31-51"
                      specs={[
                        { label: "Степень секретности", value: "Высшая" },
                        { label: "Комплект", value: "5 основных мельхиоровых ключей + 1 перекодировочный" },
                        { label: "Секретная кодовая пин-карта", value: "для выпуска дубликата" },
                        { label: "Запатентованная защита", value: "от вскрытия бампингом, отмычками" },
                        { label: "Невозможно", value: "высверлить или сломать корпус" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка ABLOY NOVEL */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/3.jpg"
                      name="Цилиндр замка ABLOY NOVEL"
                      specs={[
                        { label: "Диск цилиндра", value: "изготовлен из закаленной стали и имеет защиту от высверливания" },
                        { label: "Вставка", value: "из закаленной стали защищает корпус цилиндра от разлома" },
                        { label: "Персональная карта", value: "с зашифрованным кодом поддерживает высокий уровень секретности" },
                        { label: "Абсолютная защита", value: "от бампинга, вскрытия отмычками и дублирования ключа" },
                        { label: "Комплект", value: "3 ключа и кодовая карта" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка ABLOY PROTEC */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/4.jpg"
                      name="Цилиндр замка ABLOY PROTEC"
                      specs={[
                        { label: "Абсолютная защита", value: "от бампинга, вскрытия отмычками, бокового слома, дублирования ключа" },
                        { label: "Самый высокий уровень секретности", value: "поддерживается персональной кодовой карточкой с зашифрованным кодом" },
                        { label: "Класс", value: "Extra Security" },
                        { label: "Комплект", value: "3 ключа и кодовая карта" }
                      ]}
                    />
                  </CarouselItem>
                  {/* Цилиндр замка ABUS KD6 */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/5.jpg"
                      name="Цилиндр замка ABUS KD6"
                      specs={[
                        { label: "Цилиндр имеет", value: "6 активных пинов, защиту от высверливания" },
                        { label: "В комплекте", value: "цилиндр, винт стопорный, 5 перфорированных ключей" },
                        { label: "Цвет на выбор", value: "никель, латунь, старая бронза" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка ABUS XP2 */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/6.jpg"
                      name="Цилиндр замка ABUS XP2"
                      specs={[
                        { label: "Запатентованная система", value: "цилиндра обладает высокой степенью защиты от бампинга, от высверливания" },
                        { label: "Имеет", value: "12 независимых активных пинов в трех плоскостях. Аналог Cisa AP3" },
                        { label: "В комплекте", value: "цилиндр, винт стопорный, 5 перфорированных ключей, кодовая карта" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка APECS SC */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/7.jpg"
                      name="Цилиндр замка APECS SC"
                      specs={[
                        { label: "Цилиндры APECS серии SC", value: "имеют закаленный стержень против высверливания" },
                        { label: "Два пина с проточкой", value: "защищают от вскрытия отмычками" },
                        { label: "В комплекте", value: "цилиндр, винт стопорный, 5 перфорированных ключей" },
                        { label: "Цвет на выбор", value: "никель, латунь, старая бронза" },
                        { label: "Секретность", value: "15.000 комбинаций ключа" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка APECS XD */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/8.jpg"
                      name="Цилиндр замка APECS XD"
                      specs={[
                        { label: "Цилиндры снабжены", value: "вставкой из закаленной стали в нижней части цилиндра, что защищает от излома или выдергивания" },
                        { label: "2 штыря в сердечнике", value: "защищают от высверливания, 14 пинов дают защиту от подбора ключей и отмычек" },
                        { label: "В комплекте", value: "цилиндр, винт стопорный, 5 перфорированных ключей, карта владельца" },
                        { label: "Цвет на выбор", value: "никель, латунь, старая бронза" },
                        { label: "Секретность", value: "8.000.000 комбинаций ключа" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка APECS XS */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/9.jpg"
                      name="Цилиндр замка APECS XS"
                      specs={[
                        { label: "Цилиндры имеют", value: "18 пинов против отмычек, штырь из закаленной стали против высверливания" },
                        { label: "2 стальных пина", value: "против вытягивания, в основании цилиндра тройная пластина из стали против разрыва и излома" },
                        { label: "В комплекте", value: "цилиндр, винт стопорный, 5 ключей, карта владельца" },
                        { label: "Цвет на выбор", value: "никель, латунь" },
                        { label: "Секретность", value: "68.000.000.000 комбинаций ключа" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка CISA ASTRAL S */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/10.jpg"
                      name="Цилиндр замка CISA ASTRAL S"
                      specs={[
                        { label: "Запатентованная система кодировки", value: "цилиндра обладает средней степенью защиты" },
                        { label: "Вставка SIGILLO", value: "в нижней части цилиндра защищает от вырывания и выкручивания" },
                        { label: "Имеет кодовую систему", value: "из 10 пинов" },
                        { label: "Комплект", value: "кодовая карта, 5 ключей" },
                        { label: "Секретность", value: "1.600.000 комбинаций ключа" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка CISA AP3 S */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/11.jpg"
                      name="Цилиндр замка CISA AP3 S"
                      specs={[
                        { label: "Запатентованная система кодировки", value: "цилиндра обладает высокой степенью защиты от бампинга" },
                        { label: "Вставка SIGILLO", value: "в нижней части цилиндра защищает от вырывания и излома" },
                        { label: "Имеет", value: "12 независимых активных пинов. Аналог Abus XP2" },
                        { label: "Комплект", value: "кодовая карта, 5 ключей, с подпружиненным пином" },
                        { label: "Секретность", value: "40.000.000 комбинаций ключа" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка CISA RS3 S */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/12.jpg"
                      name="Цилиндр замка CISA RS3 S"
                      specs={[
                        { label: "Лучший цилиндр Сisa RS3", value: "обладает высочайшей степенью защиты от бампинга, вскрытия отмычкой, вырывания, выкручивания, излома" },
                        { label: "Имеет ключ", value: "с подвижным элементом и систему кодировки из 19 независимых активных пинов" },
                        { label: "Комплект", value: "кодовая карта, 5 ключей, с подпружиненным пином" },
                        { label: "Секретность", value: "8.000.000.000 комбинаций ключа" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка KALE KILIT */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/13.jpg"
                      name="Цилиндр замка KALE KILIT"
                      specs={[
                        { label: "Цилиндры обычной степени секретности", value: "имеют 6 латунных комбинативных пинов, что позволяет противостоять вскрытию путем подбора секретного кода" },
                        { label: "Комплект", value: "цилиндр (никель/латунь), 5 английских ключей, стопорный винт" },
                        { label: "Секретность", value: "55.000 комбинаций ключа" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка KALE KILIT серии 164DBME */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/14.jpg"
                      name="Цилиндр замка KALE KILIT серии 164DBME"
                      specs={[
                        { label: "Цилиндр Kale Kilit серии 164DBME", value: "повышенной степени секретности имеют 20 латунных пинов" },
                        { label: "2 штифта", value: "против высверливания, стальные пластины, проходящие через цилиндр, защищают от излома и вырывания" },
                        { label: "Комплект", value: "цилиндр (никель/латунь), 5 перфорированных ключей, стопорный винт" },
                        { label: "Секретность", value: "5.000.000 комбинаций ключа" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка MOTTURA CHAMPIONS 31 серии */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/15.jpg"
                      name="Цилиндр замка MOTTURA CHAMPIONS 31 серии"
                      specs={[
                        { label: "Цилиндры в корпусе оснащены", value: "усиленной пружинной скобой, что обеспечивает устойчивость к излому и вырыванию" },
                        { label: "Имеют", value: "5 активных пинов, магнитный пин и магнитную вставку на ключе" },
                        { label: "Комплект", value: "кодовая карта (защита от дублирования), 5 ключей из никель-серебряного сплава, стопорный винт" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка MOTTURA CHAMPIONS 38 серии */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/16.jpg"
                      name="Цилиндр замка MOTTURA CHAMPIONS 38 серии"
                      specs={[
                        { label: "Цилиндры в корпусе оснащены", value: "усиленной пружинной скобой, что обеспечивает устойчивость к излому и вырыванию" },
                        { label: "Имеют ключ", value: "с подвижным интерактивным элементом, который обеспечивает защиту от использования дубликатов" },
                        { label: "Комплект", value: "кодовая карта (защита от дублирования), 5 ключей из никель-серебряного сплава, стопорный винт" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка MOTTURA CHAMPIONS 48 серии */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/17.jpg"
                      name="Цилиндр замка MOTTURA CHAMPIONS 48 серии"
                      specs={[
                        { label: "Цилиндры Champions 48 серии", value: "самые крутые, имеют две разные системы кодировки: традиционную 5 пиновую систему и новую систему с 4 вращающимися беспружинными пинами" },
                        { label: "Подвижный элемент на ключе", value: "для защиты от дубликатов" },
                        { label: "Комплект", value: "кодовая карта, 5 ключей из никель-серебряного сплава, стопорный винт" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка MUL-T-LOCK "7x7" */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/18.jpg"
                      name="Цилиндр замка MUL-T-LOCK '7x7'"
                      specs={[
                        { label: "Цилиндр 7х7", value: "средней степени секретности отлично подходит ко всем европрофильным цилиндрическим замкам" },
                        { label: "Содержит в себе", value: "7 одинарных пинов" },
                        { label: "Комплект", value: "кодовая карта (защита от дублирования), 5 перфорированных ключей из никель-серебряного сплава" },
                        { label: "Секретность", value: "850.000 комбинаций ключа" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка MUL-T-LOCK "CLASSIC" */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/19.jpg"
                      name="Цилиндр замка MUL-T-LOCK 'CLASSIC'"
                      specs={[
                        { label: "Цилиндр Classic", value: "обладает 10 телескопическими пинами" },
                        { label: "Высокая степень защиты", value: "от всех способов взлома" },
                        { label: "Комплект", value: "кодовая карта (защита от дублирования), 5 перфорированных ключей из никель-серебряного сплава" },
                        { label: "Секретность", value: "3.200.000 комбинаций ключа" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка MUL-T-LOCK "INTERACTIVE" */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/20.jpg"
                      name="Цилиндр замка MUL-T-LOCK 'INTERACTIVE'"
                      specs={[
                        { label: "Цилиндр Interactive", value: "очень похож на предыдущую модель Classic, но снабжен собственным уникальным элементом - подвижным пином в ключе" },
                        { label: "Комплект", value: "кодовая карта (защита от дублирования), 5 перфорированных ключей из никель-серебряного сплава" },
                        { label: "Секретность", value: "3.800.000 комбинаций ключа" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка MUL-T-LOCK "MT5+" */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/21.jpg"
                      name="Цилиндр замка MUL-T-LOCK 'MT5+'"
                      specs={[
                        { label: "Цилиндр MT5+", value: "имеет высочайшую степень секретности, 10 телескопических пинов и три независимые системы запирания" },
                        { label: "Плоский двусторонний ключ", value: "с запатентованным профилем нарезок" },
                        { label: "Комплект", value: "кодовая карта (защита от дублирования), 5 перфорированных ключей из никель-серебряного сплава" },
                        { label: "Секретность", value: "164.916.300 комбинаций ключа" }
                      ]}
                    />
                  </CarouselItem>

                  {/* Цилиндр замка MUL-T-LOCK "СВЕТОФОР"(CLASSIC) */}
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <ProductCard
                      image="/images/katalog/tsilindry-zamka/22.jpg"
                      name="Цилиндр замка MUL-T-LOCK 'СВЕТОФОР'(CLASSIC)"
                      specs={[
                        { label: "Цилиндр Светофор", value: "это модель Classic, но с функцией перекодировки, возможен двукратный переход на новый комплект ключей, не меняя цилиндр замка" },
                        { label: "Комплект", value: "ключи: 2+5+2 или 5+5+5 (зеленый, желтый и красный комплект)" },
                        { label: "Кодовая карта", value: "защита от дублирования" },
                        { label: "Секретность", value: "300.000.000 комбинаций ключа" }
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
                   <Key className="w-8 h-8 text-primary" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                   Важность дополнительной защиты
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
                         Ограничения профильных цилиндров
                       </h4>
                       <p className="text-muted-foreground leading-relaxed">
                         Профильные цилиндры предохраняют замок от высверливания, но не защищают от выбивания или вытягивания.
                       </p>
                       <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                         <span className="text-foreground font-semibold">
                           ⚠️ Только от высверливания
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
                         Рекомендуемое решение
                       </h4>
                       <p className="text-muted-foreground leading-relaxed">
                         Поэтому настоятельно рекомендуем устанавливать цилиндры для замков вместе с броненакладкой для максимальной защиты.
                       </p>
                       <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                         <span className="text-foreground font-semibold">
                           🛡️ Комплексная защита
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
                     <span className="text-foreground font-semibold text-lg">Безопасность превыше всего</span>
                     <Star className="w-5 h-5 text-primary" />
                   </div>
                   <p className="text-muted-foreground">
                     Качественный цилиндр - это основа безопасности вашего замка. Мы предлагаем цилиндры различных уровней защиты, от базовых до максимально защищенных. Доступная цена за надежную защиту вашего дома.
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
