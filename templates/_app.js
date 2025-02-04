import '../styles/globals.css'
import '../styles/codehilite.css'
import { Lato, Fira_Code } from 'next/font/google'
import Head from 'next/head'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const fira = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#ffffff"/>
      </Head>
      <style jsx global>{`
        :root {
          --font-text: ${lato.style.fontFamily};
          --font-code: ${fira.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}