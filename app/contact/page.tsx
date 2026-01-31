'use client'

import React from "react"

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: '+91-XXXXX-XXXXX', href: 'tel:+91-XXXXX-XXXXX' },
    { icon: Mail, label: 'Email', value: 'contact@samtasainikdal.in', href: 'mailto:contact@samtasainikdal.in' },
    { icon: MapPin, label: 'Address', value: 'New Delhi, India', href: '#' },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-gray-300 text-lg">
            Get in touch with our team. We're here to help with any inquiries about our uniforms and services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon
            return (
              <a
                key={idx}
                href={info.href}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <Icon className="text-amber-400" size={24} />
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{info.label}</h3>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-white font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 rounded-lg transition-colors"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-2xl p-8 backdrop-blur-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
              <div className="space-y-4 text-gray-300 mb-8">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Why Contact Us?</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Bulk order inquiries and special pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Customization requests for uniforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Product specifications and details</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400">✓</span>
                  <span>Support and technical assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
