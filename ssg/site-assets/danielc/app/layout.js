import { Lato, Pangolin, Space_Grotesk, Fira_Code } from 'next/font/google';
import './globals.css';
import { MyThemeProvider } from '@/components/myThemeProvider';
import Head from 'next/head';
import Script from 'next/script';

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
    default: 'Daniel\'s Explainers',
  },
  description: 'Mathematical explanations and insights',
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
      <Head>
        <meta property="og:site_name" content="notes.danielc.rocks" />
        <meta property="og:title" content="Daniel's Explainers" />
        <meta property="og:description" content="Mathematical explanations and insights" />
        <meta property="og:image" itemprop="image" content="https://notes.danielc.rocks/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="apple-mobile-web-app-title" content="Daniel's Explainers" />
      </Head>
      <body
        className={`${lato.variable} ${pangolin.variable} ${space.variable} ${fira.variable} antialiased`}
      >
        <MyThemeProvider>{children}</MyThemeProvider>
        <Script src="/theme.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}