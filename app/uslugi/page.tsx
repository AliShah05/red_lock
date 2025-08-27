import { Metadata } from 'next'
import UslugiContent from '@/components/uslugi-content'

export const metadata: Metadata = {
  title: 'Услуги - Замки и двери',
  description: 'Полный спектр услуг по замкам и дверям в Москве',
  openGraph: {
    title: 'Услуги - Замки и двери',
    description: 'Полный спектр услуг по замкам и дверям в Москве',
    images: ['/images/og-image.jpg'],
  },
}

export default function UslugiPage() {
  return <UslugiContent />
}
