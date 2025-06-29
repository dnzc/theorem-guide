import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:site_name" content="Tripos Guru" />
        <meta property="og:title" content="Tripos Guru" />
        <meta property="og:description" content="Maths Tripos lecture notes" />
        <meta property="og:image" itemprop="image" content="https://tripos.guru/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Tripos Guru" />
        <link rel="manifest" href="/site.webmanifest" />

        <Script src="/theme.js" strategy="beforeInteractive"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}