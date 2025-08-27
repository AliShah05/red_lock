"use client"

import React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Shield, Phone, CheckCircle, Star, Camera, Award, Wrench, Lock, DoorOpen, Settings, Key, ChevronDown } from "lucide-react"

export default function UslugiContent() {
  const [isLockServicesOpen, setIsLockServicesOpen] = React.useState(false);
  const [isLockReplacementOpen, setIsLockReplacementOpen] = React.useState(false);
  const [isDoorHandlesOpen, setIsDoorHandlesOpen] = React.useState(false);
  const [isLockInstallationOpen, setIsLockInstallationOpen] = React.useState(false);
  const [isLockCylinderOpen, setIsLockCylinderOpen] = React.useState(false);
  const [isDoorRepairOpen, setIsDoorRepairOpen] = React.useState(false);
  const [isLockRepairOpen, setIsLockRepairOpen] = React.useState(false);

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
                Наши услуги
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Полный спектр услуг по замкам и дверям
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
                Заказать услугу: +7 926 461-53-02
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
              Каталог услуг
            </h2>
                         {/* Всплывающий список услуг */}
             <div className="max-w-6xl mx-auto">
                                             {/* Вскрытие замков - всплывающий список */}
                <div>
                                   <button
                    onClick={() => setIsLockServicesOpen(!isLockServicesOpen)}
                    className="w-full flex items-center justify-center mb-8 p-4 rounded-lg hover:bg-background/50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <Lock className="w-6 h-6 text-primary" />
                    </div>
                                         <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                       Вскрытие замков
                     </h3>
                     <ChevronDown 
                       className={`w-6 h-6 ml-4 text-primary transition-transform duration-300 ${
                         isLockServicesOpen ? 'rotate-180' : ''
                       }`}
                     />
                  </button>
                 
                                   {/* 4 карточки услуг - показываются при открытии */}
                                     <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out ${
                     isLockServicesOpen 
                       ? 'opacity-100 max-h-[1000px] overflow-hidden' 
                       : 'opacity-0 max-h-0 overflow-hidden'
                   }`}>
                                           {/* Карточка 1: Вскрытие дверей */}
                      <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                        isLockServicesOpen 
                          ? 'opacity-100 translate-y-0 scale-100' 
                          : 'opacity-0 translate-y-8 scale-95'
                      }`} style={{ transitionDelay: '100ms' }}>
                        <div className="p-4">
                          <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                                                         <img 
                               src="/images/services/door-opening1.a76e0c10f61c739215c0.png" 
                               alt="Вскрытие дверей"
                               className="w-full h-full object-cover"
                             />
                          </div>
                          <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                            Вскрытие дверей
                          </h4>
                          <p className="text-xl font-bold text-primary mb-2 text-center">
                            от 900 руб
                          </p>
                        </div>
                      </Card>

                     

                                           {/* Карточка 3: Вскрытие сейфов */}
                      <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                        isLockServicesOpen 
                          ? 'opacity-100 translate-y-0 scale-100' 
                          : 'opacity-0 translate-y-8 scale-95'
                      }`} style={{ transitionDelay: '200ms' }}>
                        <div className="p-4">
                          <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                                                         <img 
                               src="/images/services/safe-opening.8bb0004b7f487a412b1b.png" 
                               alt="Вскрытие сейфов"
                               className="w-full h-full object-cover"
                             />
                          </div>
                          <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                            Вскрытие сейфов
                          </h4>
                          <p className="text-xl font-bold text-primary mb-2 text-center">
                            Цена договорная
                          </p>
                        </div>
                      </Card>

                                           {/* Карточка 4: Вскрытие гаражей */}
                      <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                        isLockServicesOpen 
                          ? 'opacity-100 translate-y-0 scale-100' 
                          : 'opacity-0 translate-y-8 scale-95'
                      }`} style={{ transitionDelay: '300ms' }}>
                        <div className="p-4">
                          <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                                                         <img 
                               src="/images/services/garage-opening.76c52e04ab1edd528b25.png" 
                               alt="Вскрытие гаражей"
                               className="w-full h-full object-cover"
                             />
                          </div>
                          <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                            Вскрытие гаражей
                          </h4>
                          <p className="text-xl font-bold text-primary mb-2 text-center">
                            от 900 руб
                          </p>
                        </div>
                      </Card>

                                           {/* Карточка 5: Вскрытие щеколды */}
                      <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                        isLockServicesOpen 
                          ? 'opacity-100 translate-y-0 scale-100' 
                          : 'opacity-0 translate-y-8 scale-95'
                      }`} style={{ transitionDelay: '400ms' }}>
                        <div className="p-4">
                          <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                                                         <img 
                               src="/images/services/latch-opening.d8f83ad000646eed8d03.png" 
                               alt="Вскрытие щеколды"
                               className="w-full h-full object-cover"
                             />
                          </div>
                          <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                            Вскрытие щеколды
                          </h4>
                          <p className="text-xl font-bold text-primary mb-2 text-center">
                            от 900 руб
                          </p>
                        </div>
                      </Card>
                                       </div>
                </div>

                                 {/* Замена замков - всплывающий список */}
                 <div>
                                     <button
                     onClick={() => setIsLockReplacementOpen(!isLockReplacementOpen)}
                     className="w-full flex items-center justify-center mb-8 p-4 rounded-lg hover:bg-background/50 transition-colors"
                   >
                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                       <Key className="w-6 h-6 text-primary" />
                     </div>
                                           <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                        Замена замков
                      </h3>
                      <ChevronDown 
                        className={`w-6 h-6 ml-4 text-primary transition-transform duration-300 ${
                          isLockReplacementOpen ? 'rotate-180' : ''
                        }`}
                      />
                   </button>
                  
                  {/* 3 карточки услуг - показываются при открытии */}
                  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out ${
                    isLockReplacementOpen 
                      ? 'opacity-100 max-h-[1000px] overflow-hidden' 
                      : 'opacity-0 max-h-0 overflow-hidden'
                  }`}>
                    {/* Карточка 1: Входной двери */}
                    <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                      isLockReplacementOpen 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-8 scale-95'
                    }`} style={{ transitionDelay: '100ms' }}>
                      <div className="p-4">
                        <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                                                     <img 
                             src="/images/services/locks-replacement1.661620048ab3f1630206.png" 
                             alt="Входной двери"
                             className="w-full h-full object-cover"
                           />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                          Входной двери
                        </h4>
                        <p className="text-xl font-bold text-primary mb-2 text-center">
                          от 1000 руб
                        </p>
                      </div>
                    </Card>

                    {/* Карточка 2: Металлической двери */}
                    <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                      isLockReplacementOpen 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-8 scale-95'
                    }`} style={{ transitionDelay: '200ms' }}>
                      <div className="p-4">
                        <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                                                     <img 
                             src="/images/services/locks-replacement2.7db32b5210172b26e911.png" 
                             alt="Металлической двери"
                             className="w-full h-full object-cover"
                           />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                          Металлической двери
                        </h4>
                        <p className="text-xl font-bold text-primary mb-2 text-center">
                          от 1000 руб
                        </p>
                      </div>
                    </Card>

                    {/* Карточка 3: Пластиковой двери */}
                    <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                      isLockReplacementOpen 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-8 scale-95'
                    }`} style={{ transitionDelay: '300ms' }}>
                      <div className="p-4">
                        <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                                                     <img 
                             src="/images/services/locks-replacement3.0347dfe72f850997ed08.png" 
                             alt="Пластиковой двери"
                             className="w-full h-full object-cover"
                           />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                          Пластиковой двери
                        </h4>
                        <p className="text-xl font-bold text-primary mb-2 text-center">
                          от 1000 руб
                        </p>
                      </div>
                    </Card>
                  </div>
                                 </div>

                                   {/* Дверные ручки - всплывающий список */}
                  <div>
                                       <button
                      onClick={() => setIsDoorHandlesOpen(!isDoorHandlesOpen)}
                      className="w-full flex items-center justify-center mb-8 p-4 rounded-lg hover:bg-background/50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <DoorOpen className="w-6 h-6 text-primary" />
                      </div>
                                             <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                         Дверные ручки
                       </h3>
                       <ChevronDown 
                         className={`w-6 h-6 ml-4 text-primary transition-transform duration-300 ${
                           isDoorHandlesOpen ? 'rotate-180' : ''
                         }`}
                       />
                    </button>
                   
                   {/* 3 карточки услуг - показываются при открытии */}
                   <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out ${
                     isDoorHandlesOpen 
                       ? 'opacity-100 max-h-[1000px] overflow-hidden' 
                       : 'opacity-0 max-h-0 overflow-hidden'
                   }`}>
                                           {/* Карточка 1: Замена */}
                      <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                        isDoorHandlesOpen 
                          ? 'opacity-100 translate-y-0 scale-100' 
                          : 'opacity-0 translate-y-8 scale-95'
                      }`} style={{ transitionDelay: '100ms' }}>
                        <div className="p-4">
                          <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                            <img 
                              src="/images/services/1.png" 
                              alt="Замена дверной ручки MORELLI"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                            Замена
                          </h4>
                          <p className="text-xl font-bold text-primary mb-2 text-center">
                            от 1500 руб
                          </p>
                        </div>
                      </Card>

                     {/* Карточка 2: Установка */}
                     <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                       isDoorHandlesOpen 
                         ? 'opacity-100 translate-y-0 scale-100' 
                         : 'opacity-0 translate-y-8 scale-95'
                     }`} style={{ transitionDelay: '200ms' }}>
                       <div className="p-4">
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                           <img 
                             src="/images/services/2.png" 
                             alt="Установка дверной ручки"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                           Установка
                         </h4>
                         <p className="text-xl font-bold text-primary mb-2 text-center">
                           от 1500 руб
                         </p>
                       </div>
                     </Card>

                     {/* Карточка 3: Ремонт */}
                     <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                       isDoorHandlesOpen 
                         ? 'opacity-100 translate-y-0 scale-100' 
                         : 'opacity-0 translate-y-8 scale-95'
                     }`} style={{ transitionDelay: '300ms' }}>
                       <div className="p-4">
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                           <img 
                             src="/images/services/3.png" 
                             alt="Ремонт дверной ручки"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                           Ремонт
                         </h4>
                         <p className="text-xl font-bold text-primary mb-2 text-center">
                           от 1500 руб
                         </p>
                       </div>
                     </Card>
                   </div>
                 </div>

                                   {/* Установка замков - всплывающий список */}
                  <div>
                                       <button
                      onClick={() => setIsLockInstallationOpen(!isLockInstallationOpen)}
                      className="w-full flex items-center justify-center mb-8 p-4 rounded-lg hover:bg-background/50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <Settings className="w-6 h-6 text-primary" />
                      </div>
                                             <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                         Установка замков
                       </h3>
                       <ChevronDown 
                         className={`w-6 h-6 ml-4 text-primary transition-transform duration-300 ${
                           isLockInstallationOpen ? 'rotate-180' : ''
                         }`}
                       />
                    </button>
                   
                   {/* 4 карточки услуг - показываются при открытии */}
                   <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out ${
                     isLockInstallationOpen 
                       ? 'opacity-100 max-h-[1000px] overflow-hidden' 
                       : 'opacity-0 max-h-0 overflow-hidden'
                   }`}>
                     {/* Карточка 1: Металлическая дверь */}
                     <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                       isLockInstallationOpen 
                         ? 'opacity-100 translate-y-0 scale-100' 
                         : 'opacity-0 translate-y-8 scale-95'
                     }`} style={{ transitionDelay: '100ms' }}>
                       <div className="p-4">
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                           <img 
                             src="/images/services/4.png" 
                             alt="Установка замка на металлическую дверь"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                           Металлическая дверь
                         </h4>
                         <p className="text-xl font-bold text-primary mb-2 text-center">
                           от 1000 руб
                         </p>
                       </div>
                     </Card>

                     {/* Карточка 2: Входная дверь */}
                     <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                       isLockInstallationOpen 
                         ? 'opacity-100 translate-y-0 scale-100' 
                         : 'opacity-0 translate-y-8 scale-95'
                     }`} style={{ transitionDelay: '200ms' }}>
                       <div className="p-4">
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                           <img 
                             src="/images/services/5.png" 
                             alt="Установка замка на входную дверь"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                           Входная дверь
                         </h4>
                         <p className="text-xl font-bold text-primary mb-2 text-center">
                           от 1000 руб
                         </p>
                       </div>
                     </Card>

                     {/* Карточка 3: Пластиковая дверь */}
                     <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                       isLockInstallationOpen 
                         ? 'opacity-100 translate-y-0 scale-100' 
                         : 'opacity-0 translate-y-8 scale-95'
                     }`} style={{ transitionDelay: '300ms' }}>
                       <div className="p-4">
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                           <img 
                             src="/images/services/6.png" 
                             alt="Установка замка на пластиковую дверь"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                           Пластиковая дверь
                         </h4>
                         <p className="text-xl font-bold text-primary mb-2 text-center">
                           от 1000 руб
                         </p>
                       </div>
                     </Card>

                     {/* Карточка 4: Установка броненакладок */}
                     <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                       isLockInstallationOpen 
                         ? 'opacity-100 translate-y-0 scale-100' 
                         : 'opacity-0 translate-y-8 scale-95'
                     }`} style={{ transitionDelay: '400ms' }}>
                       <div className="p-4">
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                           <img 
                             src="/images/services/7.png" 
                             alt="Установка броненакладок"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                           Установка броненакладок
                         </h4>
                         <p className="text-xl font-bold text-primary mb-2 text-center">
                           от 1000 руб
                         </p>
                       </div>
                     </Card>
                   </div>
                 </div>

                                   {/* Цилиндр замка - всплывающий список */}
                  <div>
                                       <button
                      onClick={() => setIsLockCylinderOpen(!isLockCylinderOpen)}
                      className="w-full flex items-center justify-center mb-8 p-4 rounded-lg hover:bg-background/50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <Key className="w-6 h-6 text-primary" />
                      </div>
                                             <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                         Цилиндр замка
                       </h3>
                       <ChevronDown 
                         className={`w-6 h-6 ml-4 text-primary transition-transform duration-300 ${
                           isLockCylinderOpen ? 'rotate-180' : ''
                         }`}
                       />
                    </button>
                   
                   {/* 3 карточки услуг - показываются при открытии */}
                   <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out ${
                     isLockCylinderOpen 
                       ? 'opacity-100 max-h-[1000px] overflow-hidden' 
                       : 'opacity-0 max-h-0 overflow-hidden'
                   }`}>
                     {/* Карточка 1: Замена */}
                     <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                       isLockCylinderOpen 
                         ? 'opacity-100 translate-y-0 scale-100' 
                         : 'opacity-0 translate-y-8 scale-95'
                     }`} style={{ transitionDelay: '100ms' }}>
                       <div className="p-4">
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                           <img 
                             src="/images/services/8.png" 
                             alt="Замена цилиндра замка"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                           Замена
                         </h4>
                         <p className="text-xl font-bold text-primary mb-2 text-center">
                           от 1500 руб
                         </p>
                       </div>
                     </Card>

                     {/* Карточка 2: Установка */}
                     <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                       isLockCylinderOpen 
                         ? 'opacity-100 translate-y-0 scale-100' 
                         : 'opacity-0 translate-y-8 scale-95'
                     }`} style={{ transitionDelay: '200ms' }}>
                       <div className="p-4">
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                           <img 
                             src="/images/services/9.png" 
                             alt="Установка цилиндра замка"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                           Установка
                         </h4>
                         <p className="text-xl font-bold text-primary mb-2 text-center">
                           от 1500 руб
                         </p>
                       </div>
                     </Card>

                     {/* Карточка 3: Ремонт */}
                     <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                       isLockCylinderOpen 
                         ? 'opacity-100 translate-y-0 scale-100' 
                         : 'opacity-0 translate-y-8 scale-95'
                     }`} style={{ transitionDelay: '300ms' }}>
                       <div className="p-4">
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                           <img 
                             src="/images/services/10.png" 
                             alt="Ремонт цилиндра замка"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                           Ремонт
                         </h4>
                         <p className="text-xl font-bold text-primary mb-2 text-center">
                           от 1500 руб
                         </p>
                       </div>
                     </Card>
                   </div>
                 </div>

                                   {/* Ремонт дверей - всплывающий список */}
                  <div>
                   <button
                     onClick={() => setIsDoorRepairOpen(!isDoorRepairOpen)}
                     className="w-full flex items-center justify-center mb-8 p-4 rounded-lg hover:bg-background/50 transition-colors"
                   >
                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                       <Wrench className="w-6 h-6 text-primary" />
                     </div>
                     <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                       Ремонт дверей
                     </h3>
                     <ChevronDown 
                       className={`w-6 h-6 ml-4 text-primary transition-transform duration-300 ${
                         isDoorRepairOpen ? 'rotate-180' : ''
                       }`}
                     />
                   </button>
                   
                   {/* 4 карточки услуг - показываются при открытии */}
                   <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-500 ease-in-out ${
                     isDoorRepairOpen 
                       ? 'opacity-100 max-h-[1000px] overflow-hidden' 
                       : 'opacity-0 max-h-0 overflow-hidden'
                   }`}>
                     {/* Карточка 1: Металлических */}
                     <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                       isDoorRepairOpen 
                         ? 'opacity-100 translate-y-0 scale-100' 
                         : 'opacity-0 translate-y-8 scale-95'
                     }`} style={{ transitionDelay: '100ms' }}>
                       <div className="p-4">
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                           <img 
                             src="/images/services/11.png" 
                             alt="Ремонт металлических дверей"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                           Металлических
                         </h4>
                         <p className="text-xl font-bold text-primary mb-2 text-center">
                           Цена договорная
                         </p>
                       </div>
                     </Card>

                     {/* Карточка 2: Входных */}
                     <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                       isDoorRepairOpen 
                         ? 'opacity-100 translate-y-0 scale-100' 
                         : 'opacity-0 translate-y-8 scale-95'
                     }`} style={{ transitionDelay: '200ms' }}>
                       <div className="p-4">
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                           <img 
                             src="/images/services/12.png" 
                             alt="Ремонт входных дверей"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                           Входных
                         </h4>
                         <p className="text-xl font-bold text-primary mb-2 text-center">
                           Цена договорная
                         </p>
                       </div>
                     </Card>

                     {/* Карточка 3: Пластиковых */}
                     <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                       isDoorRepairOpen 
                         ? 'opacity-100 translate-y-0 scale-100' 
                         : 'opacity-0 translate-y-8 scale-95'
                     }`} style={{ transitionDelay: '300ms' }}>
                       <div className="p-4">
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                           <img 
                             src="/images/services/13.png" 
                             alt="Ремонт пластиковых дверей"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                           Пластиковых
                         </h4>
                         <p className="text-xl font-bold text-primary mb-2 text-center">
                           Цена договорная
                         </p>
                       </div>
                     </Card>

                     {/* Карточка 4: Ремонт петель */}
                     <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                       isDoorRepairOpen 
                         ? 'opacity-100 translate-y-0 scale-100' 
                         : 'opacity-0 translate-y-8 scale-95'
                     }`} style={{ transitionDelay: '400ms' }}>
                       <div className="p-4">
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                           <img 
                             src="/images/services/14.png" 
                             alt="Ремонт петель"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                           Ремонт петель
                         </h4>
                         <p className="text-xl font-bold text-primary mb-2 text-center">
                           Цена договорная
                         </p>
                       </div>
                     </Card>
                   </div>
                 </div>

                                   {/* Ремонт замков - всплывающий список */}
                  <div>
                   <button
                     onClick={() => setIsLockRepairOpen(!isLockRepairOpen)}
                     className="w-full flex items-center justify-center mb-8 p-4 rounded-lg hover:bg-background/50 transition-colors"
                   >
                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                       <Wrench className="w-6 h-6 text-primary" />
                     </div>
                     <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                       Ремонт замков
                     </h3>
                     <ChevronDown 
                       className={`w-6 h-6 ml-4 text-primary transition-transform duration-300 ${
                         isLockRepairOpen ? 'rotate-180' : ''
                       }`}
                     />
                   </button>
                   
                   {/* 3 карточки услуг - показываются при открытии */}
                   <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ease-in-out ${
                     isLockRepairOpen 
                       ? 'opacity-100 max-h-[1000px] overflow-hidden' 
                       : 'opacity-0 max-h-0 overflow-hidden'
                   }`}>
                     {/* Карточка 1: Металлической двери */}
                     <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                       isLockRepairOpen 
                         ? 'opacity-100 translate-y-0 scale-100' 
                         : 'opacity-0 translate-y-8 scale-95'
                     }`} style={{ transitionDelay: '100ms' }}>
                       <div className="p-4">
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                           <img 
                             src="/images/services/15.png" 
                             alt="Ремонт замка металлической двери"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                           Металлической двери
                         </h4>
                         <p className="text-xl font-bold text-primary mb-2 text-center">
                           от 1500 руб
                         </p>
                       </div>
                     </Card>

                     {/* Карточка 2: Входной двери */}
                     <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                       isLockRepairOpen 
                         ? 'opacity-100 translate-y-0 scale-100' 
                         : 'opacity-0 translate-y-8 scale-95'
                     }`} style={{ transitionDelay: '200ms' }}>
                       <div className="p-4">
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                           <img 
                             src="/images/services/16.png" 
                             alt="Ремонт замка входной двери"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                           Входной двери
                         </h4>
                         <p className="text-xl font-bold text-primary mb-2 text-center">
                           от 1500 руб
                         </p>
                       </div>
                     </Card>

                     {/* Карточка 3: Пластиковой двери */}
                     <Card className={`group hover:shadow-xl transition-all duration-500 ease-out bg-background border border-border transform ${
                       isLockRepairOpen 
                         ? 'opacity-100 translate-y-0 scale-100' 
                         : 'opacity-0 translate-y-8 scale-95'
                     }`} style={{ transitionDelay: '300ms' }}>
                       <div className="p-4">
                         <div className="w-full h-32 rounded-lg overflow-hidden mb-4 group-hover:shadow-lg transition-shadow">
                           <img 
                             src="/images/services/17.png" 
                             alt="Ремонт замка пластиковой двери"
                             className="w-full h-full object-cover"
                           />
                         </div>
                         <h4 className="text-lg font-semibold text-foreground mb-2 text-center">
                           Пластиковой двери
                         </h4>
                         <p className="text-xl font-bold text-primary mb-2 text-center">
                           от 1500 руб
                         </p>
                       </div>
                     </Card>
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
