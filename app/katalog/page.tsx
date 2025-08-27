import { Metadata } from 'next'
import KatalogContent from '@/components/katalog-content'

export const metadata: Metadata = {
  title: 'Каталог - Замки и двери',
  description: 'Каталог товаров по замкам и дверям в Москве',
  openGraph: {
    title: 'Каталог - Замки и двери',
    description: 'Каталог товаров по замкам и дверям в Москве',
    images: ['/images/og-image.jpg'],
  },
}

export default function KatalogPage() {
  return <KatalogContent />
}
