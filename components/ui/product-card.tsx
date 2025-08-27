import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProductSpec {
  label: string
  value: string
}

interface ProductCardProps {
  image: string
  name: string
  specs: ProductSpec[]
}

export function ProductCard({
  image,
  name,
  specs
}: ProductCardProps) {
  return (
    <Card className="group h-full bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 product-card">
      <CardHeader className="pb-3">
        <div className="relative">
          {/* Изображение товара */}
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-primary/10">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 space-y-3">
        {/* Название товара */}
        <CardTitle className="text-lg font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </CardTitle>
        
        {/* Характеристики */}
        <div className="space-y-2">
          {specs.map((spec, index) => (
            <div key={index} className="flex justify-between text-xs sm:text-sm">
              <span className="text-muted-foreground font-medium truncate mr-2">{spec.label}:</span>
              <span className="text-foreground font-semibold text-right min-w-0 flex-1">{spec.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
