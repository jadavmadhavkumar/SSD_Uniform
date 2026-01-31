'use client'

import { useState } from 'react'
import UniformCard from './UniformCard'

interface Uniform {
  id: string
  name: string
  price: number
  image: string
}

const uniformsData: Uniform[] = [
  { id: 'uniform-1', name: 'Military Cap', price: 50, image: '/images/beret.svg' },
  { id: 'uniform-2', name: 'Monogram Badge', price: 25, image: '/images/monogram-badge.jpg' },
  { id: 'uniform-3', name: 'Shoulder Flap (Pair)', price: 10, image: '/images/shoulder-flap.jpg' },
  { id: 'uniform-4', name: 'Star Badge', price: 40, image: '/images/star-badge.jpg' },
  { id: 'uniform-5', name: 'Belt with Buckle', price: 160, image: '/images/belt.jpg' },
  { id: 'uniform-6', name: 'Belt', price: 100, image: '/images/shoulder-flap.jpg' },
  { id: 'uniform-7', name: 'Buckle', price: 60, image: '/images/Buckle.jpg' },
]

export default function CalculatorComponent() {
  const [quantities, setQuantities] = useState<Record<string, number>>(
    uniformsData.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  )

  const handleQuantityChange = (id: string, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [id]: quantity }))
  }

  const handleClear = () => {
    setQuantities(
      uniformsData.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
    )
  }

  const totalAmount = uniformsData.reduce((sum, item) => {
    return sum + item.price * (quantities[item.id] || 0)
  }, 0)

  const totalItems = Object.values(quantities).reduce((sum, q) => sum + q, 0)

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {uniformsData.map((uniform) => (
          <UniformCard
            key={uniform.id}
            name={uniform.name}
            price={uniform.price}
            image={uniform.image}
            quantity={quantities[uniform.id] || 0}
            onQuantityChange={(qty) => handleQuantityChange(uniform.id, qty)}
          />
        ))}
      </div>

      {/* Summary Card */}
      <div className="sticky bottom-0 bg-gradient-to-r from-slate-900 to-slate-800 border border-amber-500/30 rounded-lg p-6 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center items-center">
          <div>
            <p className="text-gray-400 text-sm mb-1">Total Items</p>
            <p className="text-white font-bold text-2xl">{totalItems}</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-1">Total Amount</p>
            <p className="text-amber-400 font-bold text-2xl">₹{totalAmount.toLocaleString('en-IN')}</p>
          </div>
          <button 
            onClick={handleClear}
            className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-lg transition-colors border border-slate-600"
          >
            Clear
          </button>
          <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 rounded-lg transition-colors">
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}
