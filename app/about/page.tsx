import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Us | Samta Sainik Dal',
  description: 'Learn about Samta Sainik Dal and our commitment to quality military uniforms',
}

export default function AboutPage() {
  const values = [
    { title: 'Quality First', description: 'We never compromise on the quality of our materials and craftsmanship' },
    { title: 'Customer Focus', description: 'Your satisfaction is our top priority in every interaction' },
    { title: 'Innovation', description: 'We continuously improve our products and services' },
    { title: 'Integrity', description: 'Transparent pricing and honest business practices always' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-6">About Samta Sainik Dal</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-amber-400 mb-4">Our Story</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Samta Sainik Dal is a leading supplier of premium military uniforms and equipment in India. 
                With years of experience in the defense sector, we have built a reputation for delivering 
                high-quality products that meet the stringent standards of military organizations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our commitment to excellence, combined with competitive pricing and efficient service, 
                makes us the preferred choice for military uniforms across the country.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Quick Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold text-lg">•</span>
                  <span className="text-gray-300">Established supplier in military uniform industry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold text-lg">•</span>
                  <span className="text-gray-300">ISO certified manufacturing and quality processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold text-lg">•</span>
                  <span className="text-gray-300">Pan-India delivery network</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-amber-400 font-bold text-lg">•</span>
                  <span className="text-gray-300">Trained and dedicated customer support team</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-amber-400/50 transition-all duration-300"
              >
                <h3 className="text-white font-semibold text-lg mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-2xl p-12 text-center backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            To provide premium quality military uniforms and equipment that meet international standards, 
            deliver exceptional customer service, and support organizations in their mission to protect and serve.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
