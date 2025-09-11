import { Lato, Pangolin, Space_Grotesk, Fira_Code } from 'next/font/google';
import './globals.css';
import { MyThemeProvider } from '@/components/myThemeProvider';
import Script from 'next/script';
import NextTopLoader from 'nextjs-toploader';

const lato = Lato({
  variable:'--font-lato',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const pangolin = Pangolin({
  variable:'--font-pangolin',
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const space = Space_Grotesk({
  variable:'--font-space',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const fira = Fira_Code({
  variable:'--font-fira',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    template: '%s',
    default: 'Theorem Town',
  },
  description: 'Maths Lecture Notes and Visual Explanations',
  openGraph: {
    siteName: 'Theorem Town',
    title: 'Theorem Town',
    description: 'Maths Lecture Notes and Visual Explanations',
    images: 'https://theoremtown.com/og-image.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  appleWebApp: {
    title: 'Theorem Town',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#dddddd' },
    { media: '(prefers-color-scheme: dark)', color: '#1e1e2e' }
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lato.variable} ${pangolin.variable} ${space.variable} ${fira.variable} antialiased`}
      >
        <NextTopLoader />
        <MyThemeProvider>{children}</MyThemeProvider>
        <Script src="/theme.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}