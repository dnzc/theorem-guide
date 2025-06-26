import '../styles/globals.css'
import '../styles/codehilite.css'
import { Lato, Fira_Code, Space_Grotesk } from 'next/font/google'
import { localFont } from 'next/font/local'
import { SidebarProvider } from '@/components/sidebar'
import { MyThemeProvider } from '@/components/myThemeProvider'

const lato = Lato({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const iosevka = localFont({
  src: [
    { path: '../public/fonts/Iosevka/Iosevka-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/Iosevka/Iosevka-Italic.ttf', weight: '400', style: 'italic' },
    { path: '../public/fonts/Iosevka/Iosevka-ExtendedHeavy.ttf', weight: '700', style: 'normal' },
  ],
    display: 'swap',
    subsets: ['latin'],
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
          --font-iosevka: ${iosevka.style.fontFamily};
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