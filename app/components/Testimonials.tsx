"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "Arneabell Bautista",
    pet: "Max the Golden Retriever",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smilingsog.jpg-0uRYHAW64K5XChiJCiBqKPpa8huJpa.jpeg",
    quote:
      "Sample feedback rani for future real-world use.",
  },
  {
    name: "kenneth Tan",
    pet: "Luna the Persian Cat",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sleepingcat.jpg-XBZkH31jxxrEenX8zw783gMVMMOV8P.jpeg",
    quote: "Sample feedback rani for future real-world use.",
  },
  {
    name: "Jhon Andrie Canedo",
    pet: "Charlie the Spaniel",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/saddog.jpg-IzpczZnSuAJK5nWRM8a6SoInZq5rB0.jpeg",
    quote: "Sample feedback rani for future real-world use.",
  },
]

export default function Testimonials() {
  return (
    <div className="bg-secondary py-16 sm:py-24 relative overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Happy Pets, Happy Parents</h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </motion.div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-background border border-border shadow-lg rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)" }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.pet}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="px-6 py-8">
                <div className="mb-4">
                  <div className="text-lg font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-primary">{testimonial.pet}</div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

