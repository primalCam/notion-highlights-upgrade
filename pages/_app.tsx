import '../globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Notion Highlights - Save Web Highlights to Notion</title>
        <meta name="description" content="One-click highlighting. Unlimited organization. Never lose an insight again." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
