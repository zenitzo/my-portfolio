import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Chris's Portfolio",
  description: 'Modern and simple portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="/Z-4.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Z-4.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/Z-4.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/Z-4.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/Z-4-128x128.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="256x256"
          href="/Z-4-256x256.png"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
