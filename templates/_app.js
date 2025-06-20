import '../styles/globals.css'
import '../styles/codehilite.css'
import { Lato, Fira_Code, IBM_Plex_Mono, Space_Grotesk } from 'next/font/google'
import { SidebarProvider } from '@/components/sidebar'
import { MyThemeProvider } from '@/components/myThemeProvider'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['300', '700'],
  subsets: ['latin'],
  display: 'swap',
});

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
          --font-ibm: ${ibmPlexMono.style.fontFamily};
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