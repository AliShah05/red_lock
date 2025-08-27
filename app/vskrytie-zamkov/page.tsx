import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import VskrytieZamkovContent from '@/components/vskrytie-zamkov-content';

export const metadata: Metadata = siteMetadata['/vskrytie-zamkov'];

export default function VskrytieZamkovPage() {
  return <VskrytieZamkovContent />;
}