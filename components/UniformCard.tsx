'use client';

import Image from 'next/image'

interface UniformCardProps {
  name: string
  price: number
  image: string
  quantity: number
  onQuantityChange: (newQuantity: number) => void
}

export default function UniformCard({
  name,
  price,
  image,
  quantity,
  onQuantityChange,
}: UniformCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden hover:border-amber-400/50 transition-all duration-300 p-4">
      <div className="relative w-full h-48 mb-4 bg-slate-800 rounded-lg overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      <h3 className="text-white font-semibold text-lg mb-2">{name}</h3>
      
      <div className="flex items-center justify-between mb-4">
        <span className="text-amber-400 font-bold text-xl">₹{price}</span>
        <span className="text-gray-300 text-sm">per unit</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => onQuantityChange(Math.max(0, quantity - 1))}
          className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded transition-colors"
          aria-label={`Decrease ${name} quantity`}
        >
          -
        </button>
        <input
          type="number"
          min="0"
          value={quantity}
          onChange={(e) => onQuantityChange(Math.max(0, parseInt(e.target.value) || 0))}
          className="flex-1 bg-slate-800 text-white text-center py-2 rounded border border-white/10 focus:border-amber-400 focus:outline-none"
          aria-label={`${name} quantity`}
        />
        <button
          onClick={() => onQuantityChange(quantity + 1)}
          className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 rounded transition-colors"
          aria-label={`Increase ${name} quantity`}
        >
          +
        </button>
      </div>

      <div className="mt-3 text-right">
        <span className="text-gray-300 text-sm">
          Subtotal: <span className="text-amber-400 font-semibold">₹{(price * quantity).toLocaleString('en-IN')}</span>
        </span>
      </div>
    </div>
  )
}
