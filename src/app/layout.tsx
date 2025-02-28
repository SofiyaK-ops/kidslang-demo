import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KidsLang - Fun Language Learning for Children',
  description: 'AI-powered language learning platform for children aged 18 months to 8 years',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
