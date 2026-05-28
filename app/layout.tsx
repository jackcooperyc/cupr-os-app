import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Shell } from '@/components/shell/Shell';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'CŪPROS | Digital Operations',
  description: 'Compliance-native digital operating system for dispensaries and smoke shops.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="antialiased min-h-screen flex flex-col bg-cupros-bg text-cupros-text overflow-hidden" suppressHydrationWarning>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
