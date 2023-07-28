import '../styles/globals.css'
import '../styles/codehilite.css'
import { Lato } from 'next/font/google'
import { Fira_Code } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const fira = Fira_Code({
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${lato.style.fontFamily};
          --font-mono: ${fira.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}