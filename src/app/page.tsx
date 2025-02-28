import Hero from '@/components/Hero'
import Features from '@/components/Features'
import DemoVideo from '@/components/DemoVideo'
import CallToAction from '@/components/CallToAction'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <main>
        <Hero />
        <Features />
        <DemoVideo />
        <CallToAction />
      </main>
    </div>
  )
}
