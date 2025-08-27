



"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Shield, Phone, CheckCircle, Star, Wrench } from "lucide-react"

export default function VskrytieZamkovContent() {
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
                 Вскрытие замков
               </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Профессиональное вскрытие замков любой сложности
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  Выезд за 15 минут
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Shield className="w-5 h-5 mr-2" />
                  Без повреждений
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Star className="w-5 h-5 mr-2" />
                  Работаем 24/7
                </Badge>
              </div>
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.open('tel:+79264615302', '_self')}>
                <Phone className="w-5 h-5 mr-2" />
                Вызвать мастера: +7 926 461-53-02
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
              Не можете открыть дверь жилого помещения, склада или офиса?
            </h2>
            
            {/* Service Card 1 - Image Left, Text Right */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="order-2 md:order-1">
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jw7jikpo6uxvfsz08oty3wgg/q38c2gk311b76q9078qh6j1n/RGmZNm9OZ4Z7X-kP4Eqwb/opening1.5cd90b6c1bbbbffc5678-1-.jpeg" 
                    alt="Современный дверной замок с ручкой" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                  
                  {/* When You Need Help - Moved under image with increased height and centered with bottom image */}
                  <div className="mt-6 bg-card/30 p-6 rounded-lg border border-primary/20 min-h-[400px] flex flex-col justify-center">
                    <h4 className="text-xl font-semibold mb-4 text-foreground text-center">Когда нужна наша помощь:</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">Ключи остались в квартире</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">В замочную скважину попал инородный предмет</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">Ключи потерялись или были украдены</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">Замок вышел из строя</span>
                      </li>
                    </ul>
                    
                    {/* Call to Action */}
                    <div className="mt-auto">
                      <p className="text-center text-muted-foreground mb-4">
                        Во всех описанных случаях лучше обратиться к профессионалам
                      </p>
                      <Button className="w-full" onClick={() => window.open('tel:+79264615302', '_self')}>
                        <Phone className="w-4 h-4 mr-2" />
                        Вызвать мастера
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      Срочное вскрытие замков любой сложности без повреждений двери по доступной цене:
                    </h3>
                    <div className="text-lg text-muted-foreground space-y-2">
                      <p>Вскрытие отечественных замков от 1500р</p>
                      <p>Вскрытие импортных замков от 3000р</p>
                      <p>Вскрытие дверных задвижек от 2000р</p>
                      <p>Почтовые и цилиндровые замки от 1000р</p>
                      <p>Гаражные и сувальдные замки от 2000р</p>
                      <p>Замков в входной двери с цепочкой или без от 1200 р.</p>
                      <p>Замков электромеханического типа от 1800 р.</p>
                    </div>
                  </div>
                  
                  {/* Additional image for this service */}
                  <div className="mt-6">
                    <img 
                      src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jw7jikpo6uxvfsz08oty3wgg/q38c2gk311b76q9078qh6j1n/ZspkZYJvRyR1CrRX4fzGE/opening2.17aef809b7adea5faf04.jpeg" 
                      alt="Профессиональное вскрытие замков" 
                      className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Service Card 2 - Image Right, Text Left */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Аварийное вскрытие гаража</h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Частая ситуация - ломается гаражный замок, но мы продолжаем его использовать. В конце концов, после поломки открыть гараж уже не возможно. А машину нужно иметь под рукой сейчас, необходимо ехать по делам. Что же в результате делать?
                  </p>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Лучше сразу вызвать мастера для вскрытия замков гаража. Наши специалисты могут срочно открыть механизм без ключа любого типа запирания. Вам необязательно резать петли болгаркой или пытаться ломать конструкцию, а потом дополнительно оплачивать ремонт – мы сделаем работу без повреждения, быстро и качественно.
                  </p>

                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jw7jikpo6uxvfsz08oty3wgg/q38c2gk311b76q9078qh6j1n/klwmWiVtX9wG6xcJIWbkE/garage1.0d65b2285e47893d2ea4.jpg" 
                    alt="Гаражные ворота с замком" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Service Card 3 - Image Left, Text Right */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jw7jikpo6uxvfsz08oty3wgg/q38c2gk311b76q9078qh6j1n/kcpwMmi5BJAAUOORcI4Rv/latch-1.0c06096064983aaaa37a.png" 
                    alt="Дверная щеколда и защёлка" 
                    className="w-full h-48 sm:h-56 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                  <div className="mt-4 text-center">
                    <div className="text-xl md:text-2xl font-bold text-primary mb-2">
                      Стоимость вскрытия щеколды или ночной задвижки от 900 рублей
                    </div>

                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Аварийное вскрытие щеколды или защёлки</h3>
                  <p className="text-muted-foreground mb-4 text-base md:text-lg">
                    Закрылась задвижка железной двери изнутри и не знаете куда звонить? Наша компания предлагает Вам рациональное решение!
                  </p>
                  <p className="text-muted-foreground mb-4 text-base md:text-lg">
                    Прежде чем портить дверь и пытаться отрыть щеколду или задвижку снаружи, лучше позвонить нашим мастерам. Это позволит избежать дополнительных затрат. Без практических навыков невозможно осуществить вскрытие щеколды на металлической входной двери успешно, быстро и грамотно.
                  </p>
                  <p className="text-muted-foreground mb-4 text-base md:text-lg">
                    Оградите себя от ряда беспокойств и проблем, вызовите мастера сервисной службы
                  </p>
                </div>
              </div>
            </div>

            {/* Service Card 4 - Safe Opening */}
            <div className="mb-16">
              {/* New Safe Opening Section - Text Left, Image Right */}
              <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                {/* Left side - Text */}
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Срочное вскрытие сейфа услуги любой сложности
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Сейфы используются как в жилых, так и в коммерческих помещениях для хранения денег, ценных вещей и бумаг.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Чаще всего выполнены из металла, имеют прочную конструкцию. Могут быть оснащены кодовыми и механическими замками с большим числом секретных комбинаций. Однако иногда запирающие устройства начинают работать против владельцев, и требуется помощь специалистов по вскрытию сейфов. Современные модели имеют высокий уровень защиты от интеллектуального и силового взлома, поэтому вскрыть сейф самостоятельно очень сложно.
                  </p>
                </div>
                
                {/* Right side - Image */}
                <div>
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jw7jikpo6uxvfsz08oty3wgg/q38c2gk311b76q9078qh6j1n/gzNl6dwPaRrPvOZdHJq5w/safe-opening.8bb0004b7f487a412b1b.png" 
                    alt="Вскрытие сейфа специальными инструментами" 
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>

              {/* Image Left, Text Right Layout */}
              <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
                {/* Left side - Image */}
                <div>
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jw7jikpo6uxvfsz08oty3wgg/q38c2gk311b76q9078qh6j1n/Gcjr6Yf_2HpX9iTf-yGMH/safe-1.a07c820f5fd984cd400c.png" 
                    alt="Профессиональное вскрытие сейфов" 
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Right side - Text */}
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Наша компания предоставляет услуги по вскрытию сейфов
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Наши сотрудники имеют специальные инструменты, позволяющие оперативно открыть замок.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Профессионалы затрачивают минимум времени, позволяют клиентам избавиться от стресса, забот.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Инструменты и оборудование дают возможность мастеру открыть без ключа сейф любой сложности. Исключается необходимость замены или ремонта. Мастер гарантирует сохранность конструкции.
                  </p>
                </div>
              </div>
              
              {/* Full-width service details */}
              <div className="bg-card/30 p-8 rounded-lg border border-primary/20">
                <p className="text-muted-foreground mb-6 leading-relaxed text-center text-lg">
                  Инструменты и оборудование дают возможность мастеру открыть без ключа сейф любой сложности. Исключается необходимость замены или ремонта. Мастер гарантирует сохранность конструкции. Высокая квалификация позволяет предлагать вам услуги:
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">открытие сейфов без повреждения</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">перекодирование ключей</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">ремонт и восстановление</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">смена паролей</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">разблокировка защиты</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">замена цилиндров замка</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">диагностика механизмов</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-center">
                  Наши сотрудники сделают все, чтобы подтвердить статус компании высокого уровня обслуживания.
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
                        Вскрытие замка сейфа: когда нужна такая услуга?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-3">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Утеряны ключи или забыт код</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Произошел сбой в работе запирающего механизма и он функционирует неисправно</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Замок засорился, в него попал мелкий мусор или пыль</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                            <span>Аварийные вскрытие сейфов потребуется и в случае, если ключ сломался пополам во время закрывания/открывания, его часть осталась внутри замочной скважины</span>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left text-lg font-semibold">
                        Процесс вскрытия сейфа:
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>
                          Вызов мастера экстренной службы – то, что нужно, если стремитесь свести риск повреждения хранилища к минимуму, сохранить конфиденциальность. Наши сотрудники к каждому заказу подходят индивидуально, не в свете набранных работ.
                        </p>
                        <p>
                          Если необходимо срочно вскрыть сейф без повреждений, мы приедем на дом, быстро устраним проблему. Наша цель свести любые неисправности к нулю независимо от того, с какими моделями приходится работать, механическими или электронными. Если хранилище уже повреждено, мы восстановим работоспособность. И неважно, что случилось с механизмом: сломался ключ, утрачена секретная комбинация или заклинил замок.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left text-lg font-semibold">
                        Сколько стоит вскрытие сейфа в Москве?
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground space-y-4">
                        <p>
                          Стоимость зависит от вида запирающего механизма, от его уровня взломостойкости, от вида поломки. От этих параметров зависит и время, которое будет затрачено мастером на открытие.
                        </p>
                        <p>
                          Не знаете, как вскрыть домашний сейф срочно? Звоните или оставляйте заявку на сайте!
                        </p>
                        <div className="mt-4">
                          <Button onClick={() => window.open('tel:+79264615302', '_self')}>
                            <Phone className="w-4 h-4 mr-2" />
                            Вызвать мастера: +79264615302
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
