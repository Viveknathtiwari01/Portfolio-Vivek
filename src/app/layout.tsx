import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Vivek Nath Tiwari - Portfolio',
  description: 'Full Stack Developer & Machine Learning Enthusiast',
  keywords: [
    'Vivek Nath Tiwari',
    'Portfolio',
    'Full Stack Developer',
    'Machine Learning',
    'Web Development',
    'React',
    'Node.js',
    'Python',
  ],
  authors: [{ name: 'Vivek Nath Tiwari' }],
  creator: 'Vivek Nath Tiwari',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vivek-portfolio.vercel.app/',
    title: 'Vivek Nath Tiwari - Portfolio',
    description: 'Full Stack Developer & Machine Learning Enthusiast',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Vivek Nath Tiwari Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivek Nath Tiwari - Portfolio',
    description: 'Full Stack Developer & Machine Learning Enthusiast',
    images: ['/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-poppins`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
} 