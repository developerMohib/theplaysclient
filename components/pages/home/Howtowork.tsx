'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Zap, CreditCard, CheckCircle, Smartphone } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Calendar,
      number: 1,
      title: 'Select Date',
      description: 'Choose your preferred date from our interactive calendar',
    },
    {
      icon: Clock,
      number: 2,
      title: 'Choose Time',
      description: 'Pick available time slots that suit your schedule',
    },
    {
      icon: Zap,
      number: 3,
      title: 'Select Duration',
      description: 'Pick between 1-4 hour sessions based on your needs',
    },
    {
      icon: CreditCard,
      number: 4,
      title: 'Secure Payment',
      description: 'Complete your booking with secure online payment',
    },
    {
      icon: CheckCircle,
      number: 5,
      title: 'Get Confirmation',
      description: 'Receive instant confirmation and booking details',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="how-it-works" className="py-20 px-4 relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-200">
            How Booking Works
          </h2>
          <p className="text-gray-200 text-lg">
            Simple, secure, and straightforward booking in 5 easy steps
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >               
                {/* Card */}
                <div className="p-6 rounded-xl bg-linear-to-br hover:shadow-md border border-gray-700 transition-all duration-300 backdrop-blur-sm h-full relative group">
                  {/* Number Badge */}
                  
                  {/* Icon */}
                  <div className="mb-4">
                    <Icon size={32} className="text-white group-hover:text-gray-300 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg text-gray-200 font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-200 text-sm">{step.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-xl bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Smartphone size={48} className="text-cyan-400" />
            <div>
              <h3 className="text-xl text-gray-200 font-bold mb-2">Get Mobile Notifications</h3>
              <p className="text-gray-200">
                Receive real-time updates about your booking, reminders, and exclusive offers directly on your phone.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}