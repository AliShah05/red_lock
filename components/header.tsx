


"use client"

import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-primary-foreground rounded-sm relative">
                <div className="absolute top-1 left-1 w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
            </div>
            <span className="text-xl font-bold text-foreground">Red Lock</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="/vskrytie-zamkov" className="text-foreground hover:text-primary transition-colors">Вскрытие замков</a>
            <a href="/zamena-zamkov" className="text-foreground hover:text-primary transition-colors">Замена замков</a>
            <a href="/remont-dverey" className="text-foreground hover:text-primary transition-colors">Ремонт дверей</a>
            <a href="/nashi-raboty" className="text-foreground hover:text-primary transition-colors">Наши работы</a>
          </nav>

          {/* Phone Number */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+79264615302" 
              className="hidden md:flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>+7 926 461-53-02</span>
            </a>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="/vskrytie-zamkov" className="text-foreground hover:text-primary transition-colors">Вскрытие замков</a>
              <a href="/zamena-zamkov" className="text-foreground hover:text-primary transition-colors">Замена замков</a>
              <a href="/remont-dverey" className="text-foreground hover:text-primary transition-colors">Ремонт дверей</a>
              <a href="/nashi-raboty" className="text-foreground hover:text-primary transition-colors">Наши работы</a>
              <a 
                href="tel:+79264615302" 
                className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-semibold"
              >
                <Phone className="w-4 h-4" />
                <span>+7 926 461-53-02</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}