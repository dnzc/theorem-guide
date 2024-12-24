import '../styles/globals.css'
import '../styles/codehilite.css'
import { Fira_Code } from 'next/font/google'
import localFont from 'next/font/local'
import Head from 'next/head'

const iAWriterQuattro = localFont({
  src: '../fonts/iAWriterQuattroV.ttf'
})

const fira = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#f4f4f0"/>
      </Head>
      <style jsx global>{`
        :root {
          --font-text: ${iAWriterQuattro.style.fontFamily};
          --font-code: ${fira.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}