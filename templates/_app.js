import '../styles/globals.css'
import '../styles/codehilite.css'
import { Lato, Fira_Code, IBM_Plex_Mono, Space_Grotesk } from 'next/font/google'
import { SidebarProvider } from '@/components/sidebar'
import { MyThemeProvider } from '@/components/myThemeProvider'
import Head from 'next/head'

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

const setInitialTheme = `
  (function () {
    try {
      var theme = localStorage.getItem('theme')
      var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches

      if (theme !== 'system') {
        var existing = document.querySelectorAll('meta[name="theme-color"]')
        existing.forEach(function(m) { m.remove(); })

        var meta = document.createElement('meta')
        meta.name = 'theme-color'
        switch(theme) {
          case 'system':
            if(systemDark) meta.content = '#1e1e2e' // catppuccin
            else meta.content = '#ffffff' // sanctum
            break
          case 'sanctum':
            meta.content = '#ffffff'
            break
          case 'catppuccin':
            meta.content = '#1e1e2e'
            break
          case 'gruvbox':
            meta.content = '#282828'
            break
        }
        document.head.appendChild(meta)
      }
    } catch (_) {}
  })();
`

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content='#000000' media='(prefers-color-scheme: dark)'/>
        <meta name="theme-color" content='#ffffff' media='(prefers-color-scheme: light)'/>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </Head>
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