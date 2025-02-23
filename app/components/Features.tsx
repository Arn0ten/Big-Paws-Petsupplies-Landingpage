"use client"

import { Home, Heart, Shield, Clock } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    name: "Comfortable Accommodation",
    description: "Spacious, climate-controlled rooms with comfortable bedding and play areas for your pets.",
    icon: Home,
  },
  {
    name: "Loving Care",
    description: "Our experienced staff provides personal attention and care to every pet guest.",
    icon: Heart,
  },
  {
    name: "24/7 Supervision",
    description: "Round-the-clock monitoring ensures your pet's safety and well-being at all times.",
    icon: Clock,
  },
  {
    name: "Safe Environment",
    description: "Secure facilities with proper sanitization and safety protocols for peace of mind.",
    icon: Shield,
  },
]

export default function Features() {
  return (
    <div className="py-24 bg-background relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center">
          <motion.h2
            className="text-base text-primary font-semibold tracking-wide uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Premium Pet Care Services
          </motion.p>
          <motion.p
            className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We provide comprehensive care for your pets with a focus on comfort, safety, and happiness.
          </motion.p>
        </div>

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <dt>
                  <motion.div
                    className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-primary-foreground"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </motion.div>
                  <p className="ml-16 text-lg leading-6 font-medium text-foreground">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-muted-foreground">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

