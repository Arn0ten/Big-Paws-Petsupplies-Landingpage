"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export default function Location() {
  return (
    <div className="py-16 bg-background" id="location">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Visit Our Location</h2>
          <p className="mt-4 text-lg text-muted-foreground">We're conveniently located in the heart of Tagum City</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card rounded-lg shadow-lg p-6 space-y-6"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground">Address</h3>
                <p className="text-muted-foreground">
                  Bonifacio St., in front of Philhealth,
                  <br />
                  Tagum City, Philippines, 8100
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground">Phone</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+639501890933" className="hover:text-primary transition-colors">
                    +63 950 189 0933
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:galojanlloyn18@gmail.com" className="hover:text-primary transition-colors">
                    galojanlloyn18@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-medium text-foreground">Business Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Sunday
                  <br />
                  8:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-24%20105035-PgSINifAZLd919wTieppJTJU2MY0v3.png"
                alt="Big Paws Pet Hotel Storefront"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.0374095485396!2d125.80182397485961!3d7.446142012282287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjYnNDYuMSJOIDEyNcKwNDgnMTQuNCJF!5e0!3m2!1sen!2sph!4v1645510615000!5m2!1sen!2sph`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="Big Paws Pet Hotel Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

    