import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import RemontDvereyContent from '@/components/remont-dverey-content';

export const metadata: Metadata = siteMetadata['/remont-dverey'];

export default function RemontDvereyPage() {
  return <RemontDvereyContent />;
}