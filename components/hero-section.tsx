


"use client"

import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Вскрытие и замена замков
          </h1>
          
          <div className="text-xl md:text-2xl text-primary font-semibold mb-8">
            Выезд мастера за 15 минут!
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 text-lg">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-foreground">Работаем 24/7</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center space-x-2 text-lg">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-foreground">По всей Москве</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="tel:+79264615302">
                <Phone className="w-5 h-5 mr-2" />
                +7 926 461-53-02
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Заказать звонок
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground">
            Профессиональные слесари • Без повреждений • Гарантия качества
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
    </section>
  )
}


