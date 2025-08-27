import { Metadata } from 'next'
import TsilindryZamkaContent from '@/components/katalog/tsilindry-zamka-content'

export const metadata: Metadata = {
  title: 'Цилиндры замка - Каталог товаров',
  description: 'Цилиндры для замков - важнейшая часть замкового механизма, обеспечивающая защиту от незаконного проникновения.',
  openGraph: {
    title: 'Цилиндры замка - Каталог товаров',
    description: 'Цилиндры для замков - важнейшая часть замкового механизма, обеспечивающая защиту от незаконного проникновения.',
    images: ['/images/og-image.jpg'],
  },
}

export default function TsilindryZamkaPage() {
  return <TsilindryZamkaContent />
}
