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
  title: 'Tripos Guru',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta property="og:site_name" content="Tripos Guru" />
        <meta property="og:title" content="Tripos Guru" />
        <meta property="og:description" content="Maths Tripos lecture notes" />
        <meta property="og:image" itemprop="image" content="https://tripos.guru/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="apple-mobile-web-app-title" content="Tripos Guru" />

        <Script src="/theme.js" strategy="beforeInteractive" />
      </Head>
      <body
        className={`${lato.variable} ${pangolin.variable} ${space.variable} ${fira.variable} antialiased`}
      >
        <MyThemeProvider>{children}</MyThemeProvider>
      </body>
    </html>
  );
}
