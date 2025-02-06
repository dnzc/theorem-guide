import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <meta name='description' content='Daniel C&apos;s course notes' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='og:title' content='Course Notes | Daniel C' />
                <meta name='twitter:card' content='summary_large_image' />
                <meta name="apple-mobile-web-app-title" content="Courses" />

                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>
            <main>
                {children}
            </main>
        </div>
    )
}