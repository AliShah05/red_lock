import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import NashiRabotyContent from '@/components/nashi-raboty-content';

export const metadata: Metadata = siteMetadata['/nashi-raboty'];

export default function NashiRabotyPage() {
  return <NashiRabotyContent />;
}