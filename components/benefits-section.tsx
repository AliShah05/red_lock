"use client"

import { Clock, MapPin, DollarSign, Shield, CheckCircle, Package } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Работаем 24/7",
    description: "Наши специалисты готовы приехать по вашему адресу даже ночью в воскресенье!"
  },
  {
    icon: MapPin,
    title: "Мы по всей Москве",
    description: "У нас есть мастера в каждом районе Москвы и Московской области"
  },
  {
    icon: DollarSign,
    title: "От 500р",
    description: "Цена наших услуг ниже, чем у конкурентов, а качество выше!"
  },
  {
    icon: Shield,
    title: "Гарантия качества",
    description: "После выполнения работ вы получаете гарантийный талон (3-36 месяцев в зависимости от вида услуги)"
  },
  {
    icon: CheckCircle,
    title: "Вскрытие без повреждений",
    description: "100% решение проблемы"
  },
  {
    icon: Package,
    title: "Большой выбор замков и цилиндров",
    description: "Мастер сразу приедет с большим ассортиментом на любой бюджет"
  }
]

export default function BenefitsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Почему клиенты выбирают нас:
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональный подход и качественное обслуживание уже более 10 лет
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div 
                key={index} 
                className="group text-center hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-card border border-border rounded-lg px-6 py-3">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">
              Сервис центр замков Москва, Московская область
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}