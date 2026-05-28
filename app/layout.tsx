import type { Metadata, Viewport } from 'next';
import { Archivo_Black, DM_Sans, JetBrains_Mono } from 'next/font/google';
import ThemeScript from '@/components/ThemeScript/ThemeScript';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';
import { Shell } from '@/components/shell/Shell';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const display = Archivo_Black({
  subsets: ['latin'],
  variable: '--font-display-face',
  weight: ['400'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-face',
  weight: ['400', '500'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4f4f5' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0f11' },
  ],
};

export const metadata: Metadata = {
  title: 'CŪPR.OS | Digital Operations',
  description: 'Compliance-native digital operating system for dispensaries and smoke shops.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${display.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body
        className="antialiased min-h-screen flex flex-col bg-cupros-bg text-cupros-text overflow-hidden"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Shell>{children}</Shell>
        </ThemeProvider>
      </body>
    </html>
  );
}
