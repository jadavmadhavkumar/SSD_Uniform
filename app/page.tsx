import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  const features = [
    { icon: '✓', title: 'Quality Materials', description: 'Premium fabric and construction for durability' },
    { icon: '✓', title: 'Competitive Prices', description: 'Best value for military uniforms in the market' },
    { icon: '✓', title: 'Fast Delivery', description: 'Quick and reliable shipping across India' },
    { icon: '✓', title: 'Expert Support', description: 'Dedicated team to assist with your needs' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Premium Military <span className="text-amber-400">Uniforms</span> & Equipment
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Welcome to Samta Sainik Dal - your trusted source for quality military uniforms and accessories. 
              Calculate your uniform requirements and order with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/calculator"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Start Calculator <ArrowRight size={20} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-8 rounded-lg transition-colors border border-white/20"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl p-8 border border-amber-500/30 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-gray-400 text-sm">Average Order Value</p>
                  <p className="text-amber-400 text-3xl font-bold">₹5,000 - ₹15,000</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-gray-400 text-sm">Quality Guarantee</p>
                  <p className="text-white font-semibold">100% Satisfaction or Money Back</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <p className="text-gray-400 text-sm">Delivery Time</p>
                  <p className="text-white font-semibold">5-7 Business Days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-amber-400/50 transition-all duration-300"
            >
              <div className="text-3xl mb-3 text-amber-400">{feature.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-2xl p-12 text-center backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Order Your Uniforms?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Use our interactive calculator to determine exactly what you need and get an instant quote.
          </p>
          <Link
            href="/calculator"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Open Calculator <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
