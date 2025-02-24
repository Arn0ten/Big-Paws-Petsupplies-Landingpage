"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Label } from "@/components/ui/label"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)

    // Reset form
    const form = e.target as HTMLFormElement
    form.reset()

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="bg-background py-16 sm:py-24" id="contact">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-lg text-muted-foreground">Have questions about our services? Get in touch with us!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required placeholder="Your full name" className="w-full" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" required placeholder="Your phone number" className="w-full" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pet-info">Pet Information</Label>
              <Textarea
                id="pet-info"
                name="pet-info"
                required
                placeholder="Tell us about your pet(s) - type, breed, age, etc."
                className="w-full min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Questions or Comments</Label>
              <Textarea
                id="message"
                name="message"
                required
                placeholder="How can we help you?"
                className="w-full min-h-[100px]"
              />
            </div>

            <div className="flex justify-center">
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto min-w-[200px]">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-600 dark:text-green-400"
              >
                Thank you for your message! We&apos;ll get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  )
}

