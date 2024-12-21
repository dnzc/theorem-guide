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
        <meta name="theme-color" content="#282c34"/>
      </Head>
      <style jsx global>{`
        :root {
          --font-lato: ${lato.style.fontFamily};
          --font-fira: ${fira.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}