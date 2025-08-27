

"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Clock, Shield, Phone, CheckCircle, Star, Wrench, Package, Settings, DoorOpen, Hammer } from "lucide-react"

export default function RemontDvereyContent() {
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
                 Ремонт дверей
               </h1>
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
                Профессиональный ремонт дверей любой сложности
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Clock className="w-5 h-5 mr-2" />
                  Выезд за 15 минут
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Wrench className="w-5 h-5 mr-2" />
                  Все виды ремонта
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  <Star className="w-5 h-5 mr-2" />
                  Работаем 24/7
                </Badge>
              </div>
              <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.open('tel:+79264615302', '_self')}>
                <Phone className="w-5 h-5 mr-2" />
                Заказать ремонт: +7 926 461-53-02
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
              Ремонт входных дверей
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-4xl mx-auto leading-relaxed">
              Часто люди думают, что ремонт входной двери или замену замка можно произвести самостостельно. Но ремонт входных дверей в квартире – сложный, многоступенчатый процесс, поэтому лучше вызвать опытного мастера со стажем. Какие неисправности самые частые?:
            </p>
            
            {/* Service Card 1 - Image Left, Text Right */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="order-2 md:order-1">
                  <img 
                    src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jw7jikpo6uxvfsz08oty3wgg/q38c2gk311b76q9078qh6j1n/hycG38vIRdiXe3cpx_wBi/door-repairing1.0f7b1de359fe065e2f72.png" 
                    alt="Ремонт входных дверей" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      Возможно, вы столкнулись с одной из следующих проблем:
                    </h3>
                    <div className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      <ul className="space-y-2">
                        <li>• Износ фурнитуры, петель</li>
                        <li>• Порванная обивка</li>
                        <li>• Провисание, царапание о порог</li>
                        <li>• Перекос конструкции</li>
                        <li>• Повреждение щеколды, задвижки, дверной ручки</li>
                        <li>• Сломанные замки</li>
                        <li>• Рассыхание уплотнителей</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* New Door Handle Repair Section */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Ремонт дверных ручек
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Поручите ремонт дверной ручки металлической двери в Москве мастерам, и выбросьте из головы все бытовые заботы. Наши специалисты отремонтировали крепления и переставили на стяжки сотни моделей замков, благодаря чему клиенты сэкономили немало денег на стоимости новой ручки.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Хотя сломанные ручки, как правило, меняются на новые, все же во многих случаях крепления можно починить. На уличные или двери в квартиру устанавливают стационарные и нажимные модели. Если первые используются для жесткого открытия металлической двери, то вторые выступают в роли защелки запорного механизма.
                  </p>
                </div>
                <div>
                  {/* TODO: Замените на локальное изображение после добавления файла milwaukee-drill-lock-repair.jpg в public/images/services/ */}
                  <img 
                    src="/images/services/milwaukee-drill-lock-repair.jpg" 
                    alt="Профессиональный ремонт дверных ручек с использованием шуруповерта Milwaukee" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Problems section moved up */}
            <div className="mt-12 bg-gradient-to-br from-card/50 to-primary/5 p-8 rounded-xl border border-primary/20 shadow-lg">
              <h4 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-center">
                Наиболее частые проблемы клиентов:
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div className="bg-card/50 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">Выпадает дверная ручка</p>
                  </div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">Вышел из строя внутренний квадрат</p>
                  </div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">Не открывается защелка в результате износа</p>
                  </div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">Ручка не возвращается в исходное положение</p>
                  </div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">Повреждено стопорное кольцо</p>
                  </div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">Отлетел, сломался поворотник на входной двери</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.open('tel:+79264615302', '_self')}>
                  <Phone className="w-5 h-5 mr-2" />
                  Заказать ремонт: +7 926 461-53-02
                </Button>
              </div>
            </div>
            
            {/* New separate section with image and text */}
            <div className="mt-12 grid md:grid-cols-2 gap-8 items-start">
              <div>
                <img 
                  src="https://assets.macaly-user-data.dev/cdn-cgi/image/fit=scale-down,width=2000,height=2000,format=webp,quality=90/jw7jikpo6uxvfsz08oty3wgg/q38c2gk311b76q9078qh6j1n/NnHDoEzGbRPZqrQXfdAIe/handle-2.5cd8c006fb62a205827a.jpeg" 
                  alt="Ремонт дверных ручек" 
                  className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  На металлической двери ремонт ручки обязателен с момента возникновения проблем. Ведь в этом случае владелец квартиры рискует, стать легкой добычей для злоумышленников. Если вы обнаружили тревожные симптомы, не игнорируйте их в надежде, что функциональный элемент еще не сломан.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Открывать железную дверь квартиры со сломанной ручкой одно мучение. Лучше сразу отремонтировать ее, пока это еще возможно. Если затягивать с починкой, то придется менять ее на новую, а значит нести дополнительные финансовые потери.
                </p>
              </div>
            </div>

            {/* Service Card 3 - Image Right, Text Left */}
            <div className="mt-12 mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Ремонт петель</h3>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Часто владельцы квартир просто не замечают повреждений петель. Их видимые дефекты не так очевидны, как сломанный замок или дверная ручка.
                  </p>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Предлагаем качественный ремонт петель на месте с выездом в день обращения по Москве и области. Достаточно вызвать мастера на дом, а специалист выполнит работу профессионально, аккуратно, по аргументированным ценам.
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src="/images/services/13-petli.ef9270073cb782b8d149.png" 
                    alt="Ремонт петель дверей" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* New Additional Text Block about Hinge Problems */}
            <div className="mb-16">
              <div className="bg-gradient-to-br from-card/50 to-primary/5 p-8 rounded-xl border border-primary/20 shadow-lg">
                <div className="max-w-4xl mx-auto">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Wrench className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-foreground">
                      Важно знать о петлях
                    </h4>
                </div>
                  
                  <div className="bg-background/80 p-6 md:p-8 rounded-lg border border-primary/20 shadow-lg">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
                      Если вы обнаружили, что дверь стала провисать, с трудом закрываться, то, скорее всего, необходимо переварить петлю или осуществить ее ремонт. От качества и монтажа этих элементов и дверной фурнитуры зависит длительность эксплуатации, надежность самого полотна. В редких случаях, возможно, нужно будет заменить петлю.
                    </p>
                  </div>
                </div>
                </div>
              </div>
              
            {/* New Services Block with Image Left and Text Right */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <img 
                    src="/images/services/petli.d013312c1237a0054e8b.jpeg" 
                    alt="Профессиональный ремонт и замена дверных петель" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Наша компания может помочь вам осуществить:
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-lg text-muted-foreground">Замена петель на входных дверях</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-lg text-muted-foreground">Регулировка дверей</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-lg text-muted-foreground">Ремонт петли металлической двери</span>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-lg text-muted-foreground">Осуществление сварочных работ, грамотно приварить или переварить петлю железной двери</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/20">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Если вы заметили, что петля скрипит, не работает или вовсе отвалилась, не игнорируйте проблему! Мастерам службы под силу ликвидировать повреждение быстро и профессионально.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* New Door Adjustment Block with Text Left and Image Right */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Регулировка дверей
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Когда входная дверь скрипит, провисает или туго закрывается, неудобство — не единственная проблема. Из-за дефектов конструкция пропускает сквозняки в дом, замки и петли быстрее изнашиваются. Когда нужна регулировка входной двери?
                    </p>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      О некорректной работе входной двери можно судить по ряду характерных признаков, указывающих на возникновение дефекта: характерные скрипы; сложности при попытке закрыть / открыть замок, нажать на дверную ручку; сложности при закрытии / открытии двери; неплотная посадка дверного полотна в короб.
                    </p>
                  </div>
                </div>
                
                <div>
                  <img 
                    src="/images/services/addedimage2.b7728e75dcd55e3223fa.png" 
                    alt="Регулировка и настройка входных дверей" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* New Door Elements Adjustment Block with Image Left and Text Right */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <img 
                    src="/images/services/added2.1ef7e2daafce66b83bd8.png" 
                    alt="Регулировка различных дверных элементов" 
                    className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    Регулировка дверных элементов
                  </h3>
                  
                  <div className="space-y-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Наши мастера выполняют регулировку различных дверных элементов, таких как:
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-lg text-muted-foreground">дверной замок</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-lg text-muted-foreground">дверные петли</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-lg text-muted-foreground">дверные ручки</span>
                </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-lg text-muted-foreground">бронекладки и другие</span>
              </div>
            </div>

                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Осуществляем регулировку входных дверей, межкомнатных дверей и других видов.
                    </p>
                  </div>
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
                    Стоит отметить, мы выполняем полное обслуживание дверей любых типов, ремонт с бесплатной диагностикой, восстановление после повреждений на пороге квартиры
                  </p>
                  <div className="bg-background/80 p-6 rounded-lg border border-primary/20 shadow-lg max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl text-foreground font-semibold mb-4">
                      Стоимость ремонта зависит от объема и сложности работ.
                    </p>
                    <p className="text-lg md:text-xl text-muted-foreground mb-6">
                      Звоните по <span className="font-bold text-primary">+7 926 461-53-02</span> и наш мастер незамедлительно выедет в назначенное место.
                    </p>
                    <Button size="lg" className="text-lg px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => window.open('tel:+79264615302', '_self')}>
                      <Phone className="w-5 h-5 mr-2" />
                      Вызвать мастера: +7 926 461-53-02
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