import '../globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // Reset scroll position on route change
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])

  return (
    <>
      <Head>
        <title>The Suite - 5 Chrome Extensions That Multiply Your Productivity</title>
        <meta name="description" content="5 specialized Chrome extensions = 1 powerful workflow. Notion Highlights (research), Sightline (visual capture), Clean Read (distraction-free), Focus Dock (tab management), AutoFlow (automation). Free to start, pro upgrades available." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="The Suite - 5x Your Productivity" />
        <meta property="og:description" content="Five Chrome extensions. One seamless workflow. Multiply what you can accomplish." />
        <meta name="keywords" content="productivity, chrome extensions, notion, automation, workflow, time-saving, browser tools" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}