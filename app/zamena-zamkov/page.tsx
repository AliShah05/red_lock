import type { Metadata } from 'next';
import siteMetadata from '@/app/metadata.json';
import ZamenaZamkovContent from '@/components/zamena-zamkov-content';

export const metadata: Metadata = siteMetadata['/zamena-zamkov'];

export default function ZamenaZamkovPage() {
  return <ZamenaZamkovContent />;
}