import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#0f0f0f"/> {/* fallback */}
        <Script src="/theme.js" strategy="beforeInteractive"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}