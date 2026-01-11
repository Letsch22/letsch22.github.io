import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dan Letscher | Product Manager',
  description: 'A product manager who is passionate about gaming. Senior Product Manager at Microsoft Xbox.',
  keywords: ['Dan Letscher', 'Product Manager', 'Microsoft', 'Xbox', 'Gaming', 'Wharton MBA'],
  authors: [{ name: 'Dan Letscher' }],
  creator: 'Dan Letscher',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.svg', type: 'image/svg+xml', sizes: '32x32' },
      { url: '/favicon-16x16.svg', type: 'image/svg+xml', sizes: '16x16' },
    ],
    apple: '/apple-touch-icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://danielletscher.com',
    siteName: 'Dan Letscher',
    title: 'Dan Letscher | Product Manager',
    description: 'A product manager who is passionate about gaming. Senior Product Manager at Microsoft Xbox.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dan Letscher | Product Manager',
    description: 'A product manager who is passionate about gaming. Senior Product Manager at Microsoft Xbox.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#14b8a6" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="min-h-screen bg-dark-950 text-dark-50 overflow-x-hidden">
        {/* Noise overlay for texture */}
        <div className="noise-overlay" aria-hidden="true" />
        
        {/* Background gradient blobs */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="gradient-blob w-[800px] h-[800px] bg-primary-500/20 -top-40 -left-40" />
          <div className="gradient-blob w-[600px] h-[600px] bg-accent-500/20 top-1/2 -right-40 animation-delay-200" />
          <div className="gradient-blob w-[500px] h-[500px] bg-primary-600/20 -bottom-20 left-1/3 animation-delay-400" />
        </div>

        {/* Main content */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Dan Letscher",
              "alternateName": "Dan Letscher",
              "description": "A product manager who is passionate about gaming.",
              "gender": "Male",
              "url": "https://DanielLetscher.com/",
              "jobTitle": "Senior Product Manager",
              "worksFor": {
                "@type": "Corporation",
                "name": "Microsoft"
              },
              "alumniOf": [
                {
                  "@type": "CollegeOrUniversity",
                  "name": "The Wharton School, University of Pennsylvania"
                },
                {
                  "@type": "CollegeOrUniversity",
                  "name": "Northwestern University"
                }
              ],
              "sameAs": [
                "https://www.linkedin.com/in/dpletscher/",
                "https://github.com/Letsch22"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
