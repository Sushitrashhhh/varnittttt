import type { Metadata } from 'next'
import { Geist, Geist_Mono, Cinzel_Decorative, EB_Garamond } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
const cinzelDecorative = Cinzel_Decorative({ 
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cinzel"
});
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond"
});

export const metadata: Metadata = {
  title: "Varnittttt's 21st Birthday - Hogwarts Celebration",
  description: 'A magical Harry Potter themed birthday celebration',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${cinzelDecorative.variable} ${ebGaramond.variable}`}>
      <body className="font-sans antialiased bg-black text-white overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
