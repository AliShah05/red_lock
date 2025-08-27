import { Metadata } from 'next'
import BudzhetnyeZamkiContent from '@/components/katalog/budzhetnye-zamki-content'

export const metadata: Metadata = {
  title: 'Бюджетные замки - Каталог товаров',
  description: 'Высококачественные бюджетные замки производства СНГ. Доступные цены без потери качества.',
  openGraph: {
    title: 'Бюджетные замки - Каталог товаров',
    description: 'Высококачественные бюджетные замки производства СНГ. Доступные цены без потери качества.',
    images: ['/images/og-image.jpg'],
  },
}

export default function BudzhetnyeZamkiPage() {
  return <BudzhetnyeZamkiContent />
}
