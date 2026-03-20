import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/language-provider';
import { SiteChrome } from '@/components/site-chrome';

export const metadata: Metadata = {
  title: 'NovaForge',
  description: 'AI app builder marketing frontend',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <SiteChrome>{children}</SiteChrome>
        </LanguageProvider>
      </body>
    </html>
  );
}
