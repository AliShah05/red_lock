import { Metadata } from 'next'
import BronenakladkiContent from '@/components/katalog/bronenakladki-content'

export const metadata: Metadata = {
  title: 'Броненакладки - Каталог товаров',
  description: 'Защитные броненакладки значительно повышают взломостойкость замков и защищают от различных способов взлома.',
  openGraph: {
    title: 'Броненакладки - Каталог товаров',
    description: 'Защитные броненакладки значительно повышают взломостойкость замков и защищают от различных способов взлома.',
    images: ['/images/og-image.jpg'],
  },
}

export default function BronenakladkiPage() {
  return <BronenakladkiContent />
}
