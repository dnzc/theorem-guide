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
    default: 'Tripos Guru',
  },
  description: 'Cambridge Mathematical Tripos lecture notes',
  openGraph: {
    siteName: 'Tripos Guru',
    title: 'Tripos Guru',
    description: 'Cambridge Mathematical Tripos lecture notes',
    images: 'https://tripos.guru/og-image.png',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
  appleWebApp: {
    title: 'Tripos Guru',
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