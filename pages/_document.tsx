// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icons/icon48.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/icons/icon128.png" />
        <link rel="apple-touch-icon" href="/icons/icon128.png" />
        <meta name="theme-color" content="#ffd700" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}