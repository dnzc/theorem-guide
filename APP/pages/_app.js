import '../styles/globals.css'
import '../styles/codehilite.css'
import { Lato, Pangolin, Fira_Code, Space_Grotesk } from 'next/font/google'
import { SidebarProvider } from '@/components/sidebar'
import { MyThemeProvider } from '@/components/myThemeProvider'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const pangolin = Pangolin({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const space = Space_Grotesk({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const fira = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-lato: ${lato.style.fontFamily};
          --font-pangolin: ${pangolin.style.fontFamily};
          --font-space: ${space.style.fontFamily};
          --font-fira: ${fira.style.fontFamily};
        }
      `}</style>
      <SidebarProvider>
        <MyThemeProvider>
          <Component {...pageProps} />
        </MyThemeProvider>
      </SidebarProvider>
    </>
  )
}