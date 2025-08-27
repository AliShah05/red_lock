import { Metadata } from 'next'
import KomfortKlassContent from '@/components/katalog/komfort-klass-content'

export const metadata: Metadata = {
  title: 'Замки Комфорт-класса - Каталог товаров',
  description: 'Доступные замки с улучшенными характеристиками эконом-класса. Оптимальное соотношение цена-качество.',
  openGraph: {
    title: 'Замки Комфорт-класса - Каталог товаров',
    description: 'Доступные замки с улучшенными характеристиками эконом-класса. Оптимальное соотношение цена-качество.',
    images: ['/images/og-image.jpg'],
  },
}

export default function KomfortKlassPage() {
  return <KomfortKlassContent />
}
