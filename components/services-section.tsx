

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Lock, Car, Settings, DoorOpen, Wrench, Key } from "lucide-react"

const services = [
  {
    icon: Lock,
    title: "Вскрытие замков",
    price: "от 900р",
    description: "Профессиональное вскрытие любых замков без повреждений"
  },
  {
    icon: Car,
    title: "Вскрытие авто",
    price: "от 1500р", 
    description: "Аварийное вскрытие автомобилей всех марок"
  },
  {
    icon: Settings,
    title: "Замена замков",
    price: "от 1000р",
    description: "Установка новых замков любой сложности"
  },
  {
    icon: DoorOpen,
    title: "Ремонт, замена ручек",
    price: "от 1500р",
    description: "Ремонт и замена дверных ручек и фурнитуры"
  },
  {
    icon: Wrench,
    title: "Ремонт двери",
    price: "от 1000р",
    description: "Комплексный ремонт входных и межкомнатных дверей"
  },
  {
    icon: Key,
    title: "Замена дверного цилиндра",
    price: "от 900р",
    description: "Замена цилиндровых механизмов замков"
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Топ наших услуг
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Профессиональные услуги слесаря-аварийщика с гарантией качества
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

