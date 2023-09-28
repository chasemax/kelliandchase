import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kelli and Chase's website",
  description: 'For the LDR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/argesta.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
