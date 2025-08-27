"use client"

import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Shield, Phone, CheckCircle, Star, Camera, Award, Wrench, Lock, Settings, Key, ChevronDown } from "lucide-react"


export default function KatalogContent() {
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
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Каталог товаров
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Широкий выбор замков и дверной фурнитуры
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Shield className="w-5 h-5 mr-2" />
                  Гарантия качества
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  Быстрый выезд
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Star className="w-5 h-5 mr-2" />
                  100% качество
                </Badge>
              </div>
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.open('tel:+79264615302', '_self')}>
                <Phone className="w-5 h-5 mr-2" />
                Заказать товар: +7 926 461-53-02
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-2xl"></div>
        </section>



        {/* Catalog Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Каталог товаров
            </h2>
            <div className="max-w-6xl mx-auto">
                             {/* Бюджетные замки */}
               <div className="bg-gradient-to-br from-card/50 to-primary/5 rounded-xl p-8 shadow-lg border border-primary/20">
                 <div className="flex flex-col lg:flex-row items-start gap-6">
                   <div className="w-full lg:w-1/3">
                     <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                       <Lock className="w-10 h-10 text-primary" />
                     </div>
                     <h3 className="text-2xl font-bold text-foreground mb-4">
                       Бюджетные замки
                     </h3>
                   </div>
                   <div className="w-full lg:w-2/3">
                     <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                       Замки в этом ценовом сегменте высокого качества. Поскольку производятся в СНГ, не требуют больших таможенных и транспортных затрат, что позволяет производителю держать приятную цену на свой товар.
                     </p>
                     <Button 
                       size="lg" 
                       className="bg-primary hover:bg-primary/90 text-primary-foreground"
                       onClick={() => window.location.href = '/katalog/budzhetnye-zamki'}
                     >
                       Подробнее
                     </Button>
                   </div>
                 </div>
               </div>

              {/* Замки Комфорт-класса */}
              <div className="mt-8 bg-gradient-to-br from-card/50 to-primary/5 rounded-xl p-8 shadow-lg border border-primary/20">
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  <div className="w-full lg:w-1/3">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Shield className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Замки Комфорт-класса
                    </h3>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      Доступные замки с улучшенными характеристиками эконом-класса, замки Комфорт-класса отличает более высокое качество, а по отношению к Премиум-классу цены не кусается.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.location.href = '/katalog/komfort-klass'}
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>

              {/* Замки Премиум-класса */}
              <div className="mt-8 bg-gradient-to-br from-card/50 to-primary/5 rounded-xl p-8 shadow-lg border border-primary/20">
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  <div className="w-full lg:w-1/3">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Star className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Замки Премиум-класса
                    </h3>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      Замки Премиум-класса рассчитанны клиентов, ценящих высокое качество безопасности, защищенности и взломостойкости своих квартир. Замки Премиум-класса стоят дороже, но результат оправдывает средства на 100%.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.location.href = '/katalog/premium-klass'}
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>

              {/* Цилиндры замка */}
              <div className="mt-8 bg-gradient-to-br from-card/50 to-primary/5 rounded-xl p-8 shadow-lg border border-primary/20">
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  <div className="w-full lg:w-1/3">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Key className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Цилиндры замка
                    </h3>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      Цилиндры для замков являются одной из важнейших частей замкового механизма, которые обеспечивают защиту металлической двери от незаконного проникновения.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.location.href = '/katalog/tsilindry-zamka'}
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>



              {/* Броненакладки */}
              <div className="mt-8 bg-gradient-to-br from-card/50 to-primary/5 rounded-xl p-8 shadow-lg border border-primary/20">
                <div className="flex flex-col lg:flex-row items-start gap-6">
                  <div className="w-full lg:w-1/3">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Wrench className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Броненакладки
                    </h3>
                  </div>
                  <div className="w-full lg:w-2/3">
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      Защитные броненакладки значительно повышают взломостойкость замков и помогают сохранить замок от вытягивания, высверливания, выбивания, выкручивания или излом запорных дверных механизмов.
                    </p>
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.location.href = '/katalog/bronenakladki'}
                    >
                      Подробнее
                    </Button>
                  </div>
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
