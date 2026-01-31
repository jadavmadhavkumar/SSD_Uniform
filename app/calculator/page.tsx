import CalculatorComponent from '@/components/CalculatorComponent'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Uniform Price Calculator | Samta Sainik Dal',
  description: 'Calculate the exact cost of your military uniform requirements',
}

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Uniform Price Calculator</h1>
          <p className="text-gray-300 text-lg">
            Select quantities and get an instant quote for your military uniforms and equipment.
          </p>
        </div>

        <CalculatorComponent />
      </section>

      <Footer />
    </main>
  )
}
