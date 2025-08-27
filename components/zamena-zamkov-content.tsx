

"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Shield, Phone, CheckCircle, Star, Wrench, Package } from "lucide-react"

export default function ZamenaZamkovContent() {
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
                 Замена замков
               </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Установка и замена замков любой сложности
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  Выезд за 15 минут
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Package className="w-5 h-5 mr-2" />
                  Большой выбор замков
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Star className="w-5 h-5 mr-2" />
                  Работаем 24/7
                </Badge>
              </div>
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.open('tel:+79264615302', '_self')}>
                <Phone className="w-5 h-5 mr-2" />
                Заказать замену: +7 926 461-53-02
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
              Замена замков двери
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto leading-relaxed">
              Необходимая замена замков входной двери в Москве – услуга, с которой хотя бы раз сталкивался владелец квартиры. Если нужно с выездом на дом установить взломостойкий механизм, то без помощи специалиста не обойтись. Как вызвать мастера? Мы принимаем заявки круглосуточно, знаем как комплексно, оперативно и недорого решить задачи.
            </p>
            
            {/* Service Card 1 - Image Left, Text Right */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="order-2 md:order-1">
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jw7jikpo6uxvfsz08oty3wgg/q38c2gk311b76q9078qh6j1n/xE7hHk666fK7FSJfqmwRX/replace-1.0ae73e1fc3910f56219e.jpeg" 
                    alt="Замена замков в двери" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      Срочная замена замков входной двери квартиры
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Стоимость услуг в разных компаниях вызывает шок. У нас цены на смену замков входной металлической двери приемлемые и аргументированные. Мы устанавливаем лояльные расценки, хотим привлечь новых клиентов, а не отпугнуть их. Не имеем дел с посредниками, стоимость услуг радует прагматичных заказчиков, а входное полотно в квартиру преображается на глазах.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Full-width services block */}
              <div className="mt-12 bg-gradient-to-br from-card/50 to-primary/5 p-8 rounded-xl border border-primary/20 shadow-lg">
                <h4 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-center">
                  Услуги, которые оказывает наша компания
                </h4>
                <p className="text-lg text-muted-foreground text-center mb-8 max-w-4xl mx-auto leading-relaxed">
                  Мы предоставляем полный спектр слесарных услуг для обеспечения безопасности вашего дома или офиса. Наши опытные мастера работают с замками любой сложности и готовы выехать к вам в любое время суток.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <div className="bg-background/80 p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="flex items-start mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">Замена замков на входной двери</h5>
                        <p className="text-sm text-muted-foreground">Полная замена замков любого типа с установкой новых механизмов повышенной надежности</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background/80 p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="flex items-start mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">Установка цилиндров</h5>
                        <p className="text-sm text-muted-foreground">Замена и установка цилиндровых механизмов европейского и финского стандарта</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background/80 p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="flex items-start mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">Перекодировка ключей</h5>
                        <p className="text-sm text-muted-foreground">Изменение кодировки замка для работы с новыми ключами без замены механизма</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background/80 p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="flex items-start mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">Врезка дополнительных задвижек</h5>
                        <p className="text-sm text-muted-foreground">Установка дополнительных замков и задвижек для повышения уровня безопасности</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background/80 p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="flex items-start mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">Ремонт металлических дверей</h5>
                        <p className="text-sm text-muted-foreground">Восстановление и ремонт дверных полотен, петель, ручек и другой фурнитуры</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-background/80 p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="flex items-start mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">Экстренное вскрытие замков</h5>
                        <p className="text-sm text-muted-foreground">Аварийное вскрытие заблокированных замков без повреждения двери</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.open('tel:+79264615302', '_self')}>
                    <Phone className="w-5 h-5 mr-2" />
                    Заказать замену: +7 926 461-53-02
                  </Button>
                </div>
              </div>
            </div>

            {/* Service Card 2 - Image Right, Text Left */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Замена декоративной панели на входной двери</h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    После диагностики запорной системы найдем причину или корень проблемы, ликвидируем ее, поменяем цилиндр или механизм, который не работает, был поврежден.
                  </p>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Все работы проводятся за один выезд мастера. Специалисты работают в этой области более 10 лет, знают все тонкости работы. Выезжаем в удобное для вас время, грамотно осуществляем замену панели входной двери.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jw7jikpo6uxvfsz08oty3wgg/q38c2gk311b76q9078qh6j1n/fz4I4dyC99tiKvmEh8MOu/replace-2.9b9850c5e5f010723333-1-.jpeg" 
                    alt="Замена декоративной панели на входной двери" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              {/* Full-width pricing block */}
              <div className="mt-8 bg-gradient-to-br from-primary/5 to-primary/10 p-6 md:p-8 rounded-xl border border-primary/20 shadow-lg">
                <p className="text-lg md:text-xl text-center text-foreground leading-relaxed font-medium">
                  Хотите узнать, сколько стоит заменить замок входной металлической двери - диспетчер сразу озвучит стоимость по телефону. Основные цены указаны на сайте, эконом модель вместе с выездом мастера, работой под ключ составит от 1000 до 4000 рублей.
                </p>
              </div>
            </div>

            {/* Service Card 3 - Image Left, Text Right */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jw7jikpo6uxvfsz08oty3wgg/q38c2gk311b76q9078qh6j1n/w-pMl5FJEJCa9iQ8DzOnq/replace-3.97d3248c3ef77458c8af.jpeg" 
                    alt="Установка замков на входную дверь" 
                    className="w-full h-48 sm:h-56 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Установка замков на входную дверь</h3>
                  <p className="text-muted-foreground mb-4 text-base md:text-lg">
                    Специалисты компании устанавливают замки на входные железные двери, включая бронированные, кодовые и секретные механизмы с гарантией. Работы выполняем по фиксированной цене, приезжаем на дом с новыми замками, ручками. Время выезда мастера по Москве менее часа, поэтому можно доверить срочное решение проблемы нашему профессиональному мастеру.
                  </p>
                </div>
              </div>
              
              {/* Two-column layout under the image */}
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                {/* Left column - Bulleted list */}
                <div>
                  <p className="text-muted-foreground mb-4 text-base md:text-lg">
                    Специалистам службы не раз приходилось устанавливать замки во входные двери со срочным выездом на квартиру или частный дом. Монтажные работы проводятся тогда, когда нужно поставить дополнительный замок или задвижку. Однако чаще, необходимость вызова мастера возникает из-за интенсивной эксплуатации полотна:
                  </p>
                  <ul className="text-muted-foreground text-base md:text-lg space-y-2">
                    <li>• износ старого механизма или заклинивание цилиндра;</li>
                    <li>• монтаж сомнительного качества, без гарантии;</li>
                    <li>• сложно установить замок на входную дверь вкладным способом или на клепки;</li>
                    <li>• попытки взлома или вскрытия квартиры;</li>
                    <li>• неграмотный выбор размера сменного секрета, цилиндра, ячейки.</li>
                  </ul>
                </div>
                
                {/* Right column - Additional text and pricing */}
                <div>
                  <p className="text-muted-foreground mb-4 text-base md:text-lg">
                    Если механизм перестает работать, то необходимо действовать. Речь идет о безопасности, сохранности имущества. Для наших мастеров установка входных замков в Москве ежедневная работа, поэтому мы знаем все технические тонкости, недорого усилим взломостойкость замочной скважины, устраним проблему на месте.
                  </p>
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 md:p-6 rounded-xl border border-primary/20 shadow-lg">
                    <p className="text-lg md:text-xl text-center text-foreground leading-relaxed font-medium">
                      Цены на установку замков на входную дверь от 1500 до 3000 рублей
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 4 - Smart Locks */}
            <div className="mb-16">
              {/* Smart Locks Section - Text Left, Image Right */}
              <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                {/* Left side - Text */}
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Установка умных замков
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Задумались о гарантированной безопасности Вашего дома? Тогда smart-замок (умный замок) - это Ваш выбор! Установка электронных замков на дверь избавит Вас от необходимости постоянно носить с собой связку ключей, ведь "умные замки" можно открыть без использования ключа, электронные замки могут открываться с помощью:
                  </p>
                  <ul className="text-muted-foreground text-lg space-y-2">
                    <li>• Ключа или брелка</li>
                    <li>• Телефона (из любой точки мира)</li>
                    <li>• Кода</li>
                    <li>• Отпечатка пальца</li>
                    <li>• Лица или сетчатки глаза</li>
                  </ul>
                </div>
                
                {/* Right side - Image */}
                <div>
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jw7jikpo6uxvfsz08oty3wgg/q38c2gk311b76q9078qh6j1n/1Kf07e-Aju5wknO4NJeXW/smart-lock1.d82f461338c3b559abe5.jpeg" 
                    alt="Установка умных замков" 
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              {/* Professional Installation Block */}
              <div className="bg-gradient-to-br from-card/50 to-primary/5 p-8 rounded-xl border border-primary/20 shadow-lg mb-8">
                <p className="text-lg text-muted-foreground text-center mb-6 leading-relaxed">
                  Наши мастера профессионально установят умный замок на Вашу дверь. Расскажут, как им пользоваться, а также предложат техническое сопровождение после установки.
                </p>
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-4 md:p-6 rounded-xl border border-primary/20 shadow-lg mb-6">
                  <p className="text-lg md:text-xl text-center text-foreground leading-relaxed font-medium">
                    Цена на установку электронных замков от 8000 руб
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-lg text-muted-foreground mb-4">
                    Звоните по +7(968)711-02-40 и наш мастер незамедлительно выедет в назначенное место.
                  </p>
                  <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.open('tel:+79687110240', '_self')}>
                    <Phone className="w-5 h-5 mr-2" />
                    Вызвать мастера: +7 968 711-02-40
                  </Button>
                </div>
              </div>
            </div>

            {/* Service Card 5 - Door Lock Repair */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jw7jikpo6uxvfsz08oty3wgg/q38c2gk311b76q9078qh6j1n/Z0G6hdV08mzRPFBE6ihmw/door-panel.85ca09924701f5a3203e.png" 
                    alt="Ремонт замков входной двери" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Ремонт замков входной двери
                  </h3>
                  <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                    Заметили, что полотно закрывается не так, как прежде? Лучше сразу вызвать мастера, и поручить ремонт дверного замка на металлической двери грамотному специалисту.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Не стоит пытаться самостоятельно починить неисправный замок! Поручите ремонт замков входных дверей в Москве нам, и вам не придется переживать о своем выборе. Вовремя вызвать мастера на дом – верное решение возникшей проблемы
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 6 - Metal Door Lock Repair */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="order-1 md:order-1 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Ремонт замков входной металлической двери за один выезд на дом
                  </h3>
                  <div>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      Наши сотрудники могут выполнить:
                    </p>
                    <ul className="text-muted-foreground text-lg space-y-2">
                      <li>• Ремонт заклинивающего замка</li>
                      <li>• Перекодировку ключей</li>
                      <li>• Сварочные работы и замену петель</li>
                      <li>• Устранение перекоса</li>
                      <li>• Перекос конструкции</li>
                      <li>• Реставрацию после вскрытия МЧС</li>
                    </ul>
                  </div>
                </div>
                <div className="order-2 md:order-2">
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jw7jikpo6uxvfsz08oty3wgg/q38c2gk311b76q9078qh6j1n/xqaB45Dm7VTd8H5qPDXXY/replace-4.6cec463b399ed6368027.jpeg" 
                    alt="Ремонт замков входной металлической двери" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Call to Action Block */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-8 md:p-12 rounded-xl border border-primary/30 shadow-xl">
                <div className="text-center space-y-6">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                    Звоните! Мы поможем вам!
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                    Мастер срочно приезжает на квартиру к заказчику, в каком бы районе Москвы он не находился.
                  </p>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                    Стоит отметить, мы выполняем полное обслуживание металлических, ремонт входных дверей с бесплатной диагностикой, восстановлением железных со сваркой после вскрытия МЧС на пороге квартиры
                  </p>
                  <div className="bg-background/80 p-6 rounded-lg border border-primary/20 shadow-lg max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl text-foreground font-semibold mb-4">
                      Стоимость ремонта зависит от объема и сложности работ.
                    </p>
                    <p className="text-lg md:text-xl text-muted-foreground mb-6">
                      Звоните по <span className="font-bold text-primary">+7(968)711-02-40</span> и наш мастер незамедлительно выедет в назначенное место.
                    </p>
                    <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.open('tel:+79687110240', '_self')}>
                      <Phone className="w-5 h-5 mr-2" />
                      Вызвать мастера: +7 968 711-02-40
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 7 - Cylinder Replacement */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="order-2 md:order-1">
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jw7jikpo6uxvfsz08oty3wgg/q38c2gk311b76q9078qh6j1n/cgcfCQctizSBySTEdn1Cv/image-2.70e36d29cce5ae91d958.jpeg" 
                    alt="Замена цилиндра замка" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Замена цилиндра замка
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Замена цилиндра или сердцевины замка входной двери в квартиру, если в ней сломался ключ, у новичка может вызвать массу вопросов. Где взять инструменты? Нужно ли полностью разбирать запорный механизм? Какой фирмы цилиндр, ячейка, сердечник подойдет по размерам? Не советуем брать на себя ответственность, если не разбираетесь в профильной работе. В Москве, гораздо выгоднее поручить замену грамотному мастеру. Специалист аккуратно демонтирует старый цилиндр из замка, модернизирует запорный механизм и установит новый элемент за один выезд.
                  </p>
                </div>
              </div>
              
              {/* Problems list below the image */}
              <div className="mt-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left column - Problems list */}
                  <div>
                    <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                      Возможно вы столкнулись с одной из следующих проблем:
                    </p>
                    <ul className="text-muted-foreground text-lg space-y-2">
                      <li>• Цилиндр заклинило</li>
                      <li>• Потеря ключей от замка</li>
                      <li>• Переезд на новую квартиру</li>
                      <li>• Замена цилиндра замка после квартирантов</li>
                    </ul>
                  </div>
                  
                  {/* Right column - Service information */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-4">
                        Бесплатный выезд мастеров для замены цилиндра замка
                      </h4>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        Если вы потеряли ключи, вам не нужно приобретать новый дорогой механизм. Вы звоните в наш сервис и мастер выезжает на объект. Слесарь подъедет на вызов в удобное для клиента время с набором фурнитуры и инструментов. Конфиденциальность и порядочность со стороны мастера гарантирована, так как мы дорожим своей репутацией и доверием заказчиков.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Pricing block - separate and styled */}
              <div className="mt-8 bg-gradient-to-br from-primary/10 to-primary/20 p-8 rounded-xl border border-primary/30 shadow-xl">
                <div className="text-center space-y-4">
                  <h4 className="text-2xl md:text-3xl font-bold text-foreground">
                    Стоимость замены цилиндра замка начинается с 1500 рублей
                  </h4>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    При необходимости специалист проконсультирует вас, подскажет какая модель лучше и почему. Мы готовы установить цилиндр с перфорированным и английским ключом, механизмы высокой степени секретности.
                  </p>
                  <div className="pt-4">
                    <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.open('tel:+79264615302', '_self')}>
                      <Phone className="w-5 h-5 mr-2" />
                      Заказать замену: +7 926 461-53-02
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 8 - Armor Plates Installation */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="order-1 md:order-1 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Установка броненакладки на замок
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Установка брони или броненакладки на замок повышает уровень защиты входной двери, придает уверенность в ее неприступности для злоумышленников.
                  </p>
                </div>
                <div className="order-2 md:order-2">
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jw7jikpo6uxvfsz08oty3wgg/q38c2gk311b76q9078qh6j1n/ixbmVxVNH94gldVStU-l2/image-3.22e3867e017a95fb0b68.jpeg" 
                    alt="Установка броненакладки на замок" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              {/* Detailed description block - moved below */}
              <div className="mt-8 bg-gradient-to-br from-card/50 to-primary/5 p-6 rounded-xl border border-primary/20 shadow-lg">
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Что такое броненакладка на замок?
                </h4>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  Броненакладка на замок - это шайба, отлитая из прочного закаленного сплава металлов. Она защищает корпус и цилиндр замка от силовых способов вскрытия:
                </p>
                <div className="bg-background/80 p-4 rounded-lg border border-primary/10">
                  <ul className="text-muted-foreground text-lg space-y-2">
                    <li className="flex items-center">
                      <Shield className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span>выбивания</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span>высверливания</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span>излома</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span>вытягивания</span>
                    </li>
                    <li className="flex items-center">
                      <Shield className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span>вырывания механизма</span>
                    </li>
                  </ul>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Бронированная накладка состоит из двух металлических пластин - внешней и внутренней, стянутых винтами, насквозь проходящими через дверное полотно и корпус замка. По способу установки броненакладки делятся на врезные и накладные модели.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <section className="py-16 bg-background">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left text-lg font-semibold">
                        Как выбрать подходящий замок для замены?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-3">
                        <p>
                          Выбор замка зависит от нескольких факторов: типа двери, уровня безопасности, бюджета и личных предпочтений.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Для входных дверей рекомендуем сувальдные или цилиндровые замки высокого класса</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Для офисов подойдут электронные замки с возможностью программирования доступа</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Для дополнительной защиты устанавливаем второй замок или броненакладку</span>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left text-lg font-semibold">
                        Сколько времени занимает замена замка?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>
                          Время замены зависит от типа замка и сложности установки:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Замена цилиндра - 15-30 минут</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Замена врезного замка - 30-60 минут</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Установка электронного замка - 60-90 минут</span>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left text-lg font-semibold">
                        Какая гарантия предоставляется на замену замков?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>
                          Мы предоставляем комплексную гарантию на все виды работ:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Гарантия на работы по установке - 12 месяцев</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Гарантия производителя на замки - от 12 до 36 месяцев</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Бесплатное гарантийное обслуживание в течение всего срока</span>
                          </li>
                        </ul>
                        <div className="mt-4">
                          <Button onClick={() => window.open('tel:+79264615302', '_self')}>
                            <Phone className="w-4 h-4 mr-2" />
                            Вызвать мастера: +7 926 461-53-02
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left text-lg font-semibold">
                        Как устанавливается броненакладка?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>
                          Установить броненакладку можно на любую дверь, главное чтобы корпус замка предусматривал установочные отверстия для монтажа!
                        </p>
                        <p>
                          Монтаж врезной броненакладки требует высверливания круглого технологического отверстия внешнего листа металла. Проделанное отверстие по диаметру должно идеально совпадать с размером углубления внешней стороны брони. Самый сложный момент установки - не промахнуться с размером отверстия.
                        </p>
                        <p>
                          Главное, чтобы между бронированной накладкой и краем вырезанного дверного полотна не осталось зазора - это не позволит выдавить, выбить ее подручными средствами, сильно осложнит работу взломщика в попытке добраться до цилиндра замка.
                        </p>
                        <div className="mt-4">
                          <Button onClick={() => window.open('tel:+79264615302', '_self')}>
                            <Phone className="w-4 h-4 mr-2" />
                            Заказать установку: +7 926 461-53-02
                          </Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


