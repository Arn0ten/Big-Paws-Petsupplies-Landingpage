"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/481266669_619546497482268_7852519735591331140_n.jpg-oMoCYJHGilSDHz6lgW036XSeEPy9NG.jpeg",
    alt: "Comfortable pet accommodation with toys and bedding",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480571878_548286108271303_2393865756725072190_n.jpg-XId4dxCDSDXyIRptjCYGKbbW1cpkmp.jpeg",
    alt: "Professional kennel facility with multiple units",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/475682535_431128586688797_3889418399224811858_n.jpg-n6uHVl0RFQAPTCdpTa04a9N9itoFL3.jpeg",
    alt: "Well-lit and ventilated pet accommodation",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480020873_591559303786747_1847082958706306313_n.jpg-stM5ofzyvVERJDJ3R9gWJeonFnGUJ2.jpeg",
    alt: "Safe and secure pet carriers for transport",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/476423370_1180780884058793_1895486931922885045_n.jpg-kq689WKmFtKQFziaPZLn21HSXsYqhE.jpeg",
    alt: "Professional pet grooming service",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480491302_9250055781727301_8238070743716968783_n.jpg-pLl0C8uCTew8JSDlFsLwF1AKxHXzdP.jpeg",
    alt: "Skilled groomer providing personalized care",
  },
]

export default function Gallery() {
  return (
    <div className="py-16 bg-muted" id="gallery">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Facilities</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Take a look at our professional pet care facilities and services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-lg overflow-hidden group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center px-4 text-sm">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

