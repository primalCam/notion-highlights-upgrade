// components/Layout.tsx
import Navigation from './Navigation'
import Footer from './Footer'
import { ReactNode } from 'react'
import Script from 'next/script'
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Global Head with Favicon */}
      <Head>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/icons/icon48.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/icons/icon128.png" />
        <title>Notion Highlights - Save web content directly to Notion</title>
        <meta name="description" content="Right-click any web content - text, code, images - and save directly to Notion. Perfect for AI research and knowledge building." />
      </Head>
      
      {/* Tawk.to Script - Global for all pages */}
      <Script
        id="tawk-to"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
            (function(){
              var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = 'https://embed.tawk.to/691675b14c142519583d0a91/1j9vrnfd2';
              s1.charset = 'UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `,
        }}
      />
      
      <Navigation />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}