"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Shield, Phone, CheckCircle, Star, Camera, Award } from "lucide-react"

export default function NashiRabotyContent() {
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
                Наши работы
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Примеры качественно выполненных работ
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">

                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Camera className="w-5 h-5 mr-2" />
                  Фото до и после
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Star className="w-5 h-5 mr-2" />
                  100% качество
                </Badge>
              </div>
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.open('tel:+79264615302', '_self')}>
                <Phone className="w-5 h-5 mr-2" />
                Заказать услугу: +7 926 461-53-02
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Примеры выполненных нами работ
            </h2>
            {/* Все карточки в ряд сверху вниз - фото слева, текст справа */}
            <div className="space-y-8">
              {/* Карточка 1 */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-3 items-start">
                                     <div className="w-full lg:w-[700px] h-[350px] lg:h-[450px] rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow flex-shrink-0 [450px]:w-[300px] [450px]:h-[200px] [450px]:ml-[5px]">
                     <img 
                       src="/images/services/image (1).png" 
                       alt="Фото работы" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                                    <div className="space-y-5 flex-1 min-w-0">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground">Замена замка и ручки</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <p className="text-sm text-muted-foreground font-medium">Москва</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-gray-400 leading-relaxed text-base">
                        Нашими опытными мастерами была произведена профессиональная установка высококачественного замка и стильной дверной ручки фирмы <span className="font-semibold text-primary">Cisa</span> - одного из ведущих производителей дверной фурнитуры в Европе.
                      </p>
                      
                      <div className="bg-card border border-gray-700 rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 text-lg">✨</span>
                          </div>
                          <p className="text-sm text-white font-medium">
                            Работа выполнена с гарантией качества и соблюдением всех технических стандартов
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary text-xs">🔗</span>
                        </div>
                        <span className="text-gray-400">Подробнее о данной услуге в списке наших <a href="/uslugi" className="text-primary hover:underline font-semibold">Услуг</a></span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary text-xs">📚</span>
                        </div>
                        <span className="text-gray-400">Подробнее о замках и ручках Cisa в нашем <a href="/katalog" className="text-primary hover:underline font-semibold">Каталоге</a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Карточка 2 */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-3 items-start">
                                     <div className="w-full lg:w-[700px] h-[350px] lg:h-[450px] rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow flex-shrink-0 [450px]:w-[300px] [450px]:h-[200px] [450px]:ml-[5px]">
                     <img 
                       src="/images/services/image (2).png" 
                       alt="Фото работы" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                                    <div className="space-y-5 flex-1 min-w-0">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground">Замена накладного замка</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <p className="text-sm text-muted-foreground font-medium">Москва</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-gray-400 leading-relaxed text-base">
                        Нашими квалифицированными мастерами была выполнена замена накладного замка на воротах частного дома. Работа включала демонтаж старого замка, подготовку поверхности и установку нового надежного механизма.
                      </p>
                      
                      <div className="bg-card border border-gray-700 rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <span className="text-orange-600 text-lg">🏠</span>
                          </div>
                          <p className="text-sm text-white font-medium">
                            Специализация: частные дома и коттеджи с индивидуальным подходом к каждому клиенту
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary text-xs">🔗</span>
                        </div>
                        <span className="text-gray-400">Подробнее о данной услуге в списке наших <a href="/uslugi" className="text-primary hover:underline font-semibold">Услуг</a></span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary text-xs">📚</span>
                        </div>
                        <span className="text-gray-400">Подробнее о замках в нашем <a href="/katalog" className="text-primary hover:underline font-semibold">Каталоге</a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Карточка 3 */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-3 items-start">
                                     <div className="w-full lg:w-[700px] h-[350px] lg:h-[450px] rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow flex-shrink-0 [450px]:w-[300px] [450px]:h-[200px] [450px]:ml-[5px]">
                     <img 
                       src="/images/services/image (3).png" 
                       alt="Фото работы" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                                    <div className="space-y-5 flex-1 min-w-0">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground">Замена дверного замка</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <p className="text-sm text-muted-foreground font-medium">Москва</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-gray-400 leading-relaxed text-base">
                        Нашими профессиональными мастерами была выполнена комплексная работа по замене дверного замка. Процесс включал диагностику старого механизма, подбор оптимальной замены и установку с настройкой.
                      </p>
                      
                      <div className="bg-card border border-gray-700 rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <span className="text-purple-600 text-lg">🔧</span>
                          </div>
                          <p className="text-sm text-white font-medium">
                            Комплексный подход: диагностика, подбор, установка и настройка в одном выезде
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary text-xs">🔗</span>
                        </div>
                        <span className="text-gray-400">Подробнее о данной услуге в списке наших <a href="/uslugi" className="text-primary hover:underline font-semibold">Услуг</a></span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary text-xs">📚</span>
                        </div>
                        <span className="text-gray-400">Подробнее о замках в нашем <a href="/katalog" className="text-primary hover:underline font-semibold">Каталоге</a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Карточка 4 */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-3 items-start">
                                     <div className="w-full lg:w-[700px] h-[350px] lg:h-[450px] rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow flex-shrink-0 [450px]:w-[300px] [450px]:h-[200px] [450px]:ml-[5px]">
                     <img 
                       src="/images/services/image (4).png" 
                       alt="Фото работы" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                  <div className="space-y-5 flex-1 min-w-0">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground">Замена цилиндра и броненакладки</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <p className="text-sm text-muted-foreground font-medium">Москва</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-gray-400 leading-relaxed text-base">
                        Нашими высококвалифицированными мастерами была выполнена работа по замене цилиндра замка и установке броненакладки. Это комплексная услуга, обеспечивающая максимальную безопасность и надежность дверного механизма.
                      </p>
                      
                      <div className="bg-card border border-gray-700 rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                            <span className="text-red-600 text-lg">🛡️</span>
                          </div>
                          <p className="text-sm text-white font-medium">
                            Повышенная безопасность: установка броненакладки для защиты от взлома
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary text-xs">🔗</span>
                        </div>
                        <span className="text-gray-400">Подробнее о данной услуге в списке наших <a href="/uslugi" className="text-primary hover:underline font-semibold">Услуг</a></span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary text-xs">📚</span>
                        </div>
                        <span className="text-gray-400">Подробнее о замках и броненакладках в нашем <a href="/katalog" className="text-primary hover:underline font-semibold">Каталоге</a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Карточка 5 */}
              <Card className="group hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-3 items-start">
                                     <div className="w-full lg:w-[700px] h-[350px] lg:h-[450px] rounded-lg overflow-hidden group-hover:shadow-lg transition-shadow flex-shrink-0 [450px]:w-[300px] [450px]:h-[200px] [450px]:ml-[5px]">
                     <img 
                       src="/images/services/image (5).png" 
                       alt="Фото работы" 
                       className="w-full h-full object-cover"
                     />
                   </div>
                  <div className="space-y-5 flex-1 min-w-0">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground">Установка кодового замка Меттэм</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <p className="text-sm text-muted-foreground font-medium">Москва</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <p className="text-gray-400 leading-relaxed text-base">
                        Нашими специалистами была произведена установка современного кодового замка фирмы <span className="font-semibold text-primary">Меттэм</span>. Это инновационное решение обеспечивает удобство использования и высокий уровень безопасности без необходимости носить ключи.
                      </p>
                      
                      <div className="bg-card border border-gray-700 rounded-lg p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                            <span className="text-indigo-600 text-lg">🔐</span>
                          </div>
                          <p className="text-sm text-white font-medium">
                            Современные технологии: кодовый замок для максимального удобства и безопасности
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary text-xs">🔗</span>
                        </div>
                        <span className="text-gray-400">Подробнее о данной услуге в списке наших <a href="/uslugi" className="text-primary hover:underline font-semibold">Услуг</a></span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary text-xs">📚</span>
                        </div>
                        <span className="text-gray-400">Подробнее о замках в нашем <a href="/katalog" className="text-primary hover:underline font-semibold">Каталоге</a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>






      </main>
      <Footer />
    </div>
  )
}
