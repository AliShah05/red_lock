import { Metadata } from 'next'
import PremiumKlassContent from '@/components/katalog/premium-klass-content'

export const metadata: Metadata = {
  title: 'Замки Премиум-класса - Каталог товаров',
  description: 'Замки Премиум-класса для клиентов, ценящих высокое качество безопасности и защищенности.',
  openGraph: {
    title: 'Замки Премиум-класса - Каталог товаров',
    description: 'Замки Премиум-класса для клиентов, ценящих высокое качество безопасности и защищенности.',
    images: ['/images/og-image.jpg'],
  },
}

export default function PremiumKlassPage() {
  return <PremiumKlassContent />
}
