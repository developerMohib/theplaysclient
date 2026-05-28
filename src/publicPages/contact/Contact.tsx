
'use client';
import { useState } from 'react'
import { toast } from 'react-toastify';

type ContactForm = {
  name: string
  phone: string
  email: string
  packageType: string
  date: string
  time: string
  message: string
}

export default function ContactFormSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    phone: '',
    email: '',
    packageType: 'Starter Ride',
    date: '',
    time: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      setLoading(true)

      // 👉 later replace with API call
      console.log('Booking Data:', formData)

      await new Promise((res) => setTimeout(res, 1000))

      toast.success('Booking request sent successfully! 🎮')

      setFormData({
        name: '',
        phone: '',
        email: '',
        packageType: 'Starter Ride',
        date: '',
        time: '',
        message: '',
      })
    } catch (error) {
        console.log(error)
     toast.error('Something went wrong!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Book Your Gaming Slot
          </h2>
          <p className="text-gray-400">
            Choose your package and reserve your driving simulator experience
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800 p-6 md:p-10 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-5"
        >

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-700 outline-none"
            required
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-700 outline-none"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-700 outline-none"
          />

          {/* Package */}
          <select
            name="packageType"
            value={formData.packageType}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-700"
          >
            <option>Starter Ride</option>
            <option>Street Racer</option>
            <option>Pro Driver</option>
          </select>

          {/* Date */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-700"
            required
          />

          {/* Time */}
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-700"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Any special request..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 rounded-lg bg-slate-700 md:col-span-2 outline-none"
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 w-full py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition font-bold disabled:opacity-50"
          >
            {loading ? 'Booking...' : 'Confirm Booking'}
          </button>

        </form>
      </div>
    </section>
  )
}