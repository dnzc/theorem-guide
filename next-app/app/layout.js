import { Lato, Pangolin, Space_Grotesk, Fira_Code } from 'next/font/google';
import './globals.css';
import { MyThemeProvider } from '@/components/myThemeProvider';
import Head from 'next/head';
import Script from 'next/script';

const lato = Lato({
  variable:'--font-lato',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const pangolin = Pangolin({
  variable:'--font-pangolin',
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const space = Space_Grotesk({
  variable:'--font-space',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const fira = Fira_Code({
  variable:'--font-fira',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: {
    template: '%s | Tripos Guru', // applies to child routes only
    default: 'Tripos Guru',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#dddddd' },
    { media: '(prefers-color-scheme: dark)', color: '#1e1e2e' }
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta property="og:site_name" content="Tripos Guru" />
        <meta property="og:title" content="Tripos Guru" />
        <meta property="og:description" content="Maths Tripos lecture notes" />
        <meta property="og:image" itemprop="image" content="https://tripos.guru/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="apple-mobile-web-app-title" content="Tripos Guru" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme');
                var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var color;
                switch (theme) {
                  case 'system':
                    color = systemDark ? '#1e1e2e' : '#dddddd';
                    break;
                  case 'sanctum':
                    color = '#dddddd';
                    break;
                  case 'catppuccin':
                    color = '#1e1e2e';
                    break;
                  case 'gruvbox':
                    color = '#282828';
                    break;
                  default:
                    color = systemDark ? '#1e1e2e' : '#dddddd';
                    break;
                }
                document.write('<meta name="theme-color" content="' + color + '">');
              } catch (_) {}
            `,
          }}
        />
      </Head>
      <body
        className={`${lato.variable} ${pangolin.variable} ${space.variable} ${fira.variable} antialiased`}
      >
        <MyThemeProvider>{children}</MyThemeProvider>
        <Script src="/theme.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
