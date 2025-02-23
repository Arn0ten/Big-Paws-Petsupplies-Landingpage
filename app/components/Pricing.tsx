"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

const rates = [
  {
    name: "Daycare",
    price: "₱500",
    duration: "per day",
    features: ["Access to play areas", "Supervised activities", "Meals included", "Regular updates"],
  },
  {
    name: "Long Stay",
    price: "₱800",
    duration: "per night",
    features: [
      "Private comfortable space",
      "24/7 care and monitoring",
      "All meals included",
      "Daily exercise sessions",
      "Regular grooming",
    ],
  },
  {
    name: "VIP Suite",
    price: "₱1,200",
    duration: "per night",
    features: ["Luxury private room", "Premium bedding", "Personal caretaker", "Spa treatments", "Premium meals"],
  },
]

export default function Pricing() {
  return (
    <div className="bg-background py-16 sm:py-24 relative overflow-hidden" id="rates">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Transparent Pricing</h2>
          <p className="mt-4 text-xl text-muted-foreground">Walk-in rates for daycare and accommodation</p>
        </motion.div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {rates.map((rate, index) => (
            <motion.div
              key={rate.name}
              className="border border-border rounded-lg shadow-sm divide-y divide-border"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-foreground">{rate.name}</h3>
                <p className="mt-4">
                  <span className="text-3xl font-extrabold text-foreground">{rate.price}</span>
                  <span className="text-base font-medium text-muted-foreground">/{rate.duration}</span>
                </p>
              </div>
              <div className="px-6 pt-6 pb-8">
                <h4 className="text-sm font-medium text-foreground tracking-wide uppercase">What's included</h4>
                <ul className="mt-6 space-y-4">
                  {rate.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-6 w-6 text-green-500" aria-hidden="true" />
                      </div>
                      <p className="ml-3 text-sm text-muted-foreground">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="mt-8 text-center text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          * Additional services and special requirements can be discussed on-site
        </motion.p>
      </div>
    </div>
  )
}

