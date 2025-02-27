"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

const categories = [
  {
    name: "Grooming Supplies",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480651967_1749158292311303_5993688682836237963_n.jpg-S49SRAtdFwn0AMN8crkJRzf14Myf2X.jpeg",
    description: "Professional grooming tools and accessories",
  },
  {
    name: "Pet Carriers & Cages",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480182713_1544947842810595_4423080990574973435_n%20-%20Copy.jpg-PwUXZMyRbjQxf1hHOa42MBBg8xgojM.jpeg",
    description: "Comfortable and safe transport solutions",
  },
  {
    name: "Stylish Backpacks",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/480597450_613380214797681_5459227510624089817_n.jpg-6LHqe34pP4aTkxiNdtX1TSFdq0jzwt.jpeg",
    description: "Trendy and functional pet carriers",
  },
  {
    name: "Leashes & Collars",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/482045664_1180160020193361_5600336283823124444_n.jpg-ZALha5g1oiMMkC1NrbFvaZwzJdwEGC.jpeg",
    description: "Quality leashes and collars in various styles",
  },
  {
    name: "Bowls & Feeders",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/481170612_1316734796113767_2651843019774642664_n%20-%20Copy.jpg-gCP96hEgmhOltJqY844BHmn2sgxqTC.jpeg",
    description: "Food and water solutions for all pets",
  },
];

export default function PetSupplies() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="py-16 bg-muted relative overflow-hidden" id="supplies">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Pet Supplies Shop</h2>
          <p className="text-xl text-muted-foreground">
            Your one-stop shop for premium pet supplies and accessories
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Store Video Tour */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative w-full max-w-5xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Take a Tour of Our Store
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Take a tour of our Pet Store and see why pets love staying with
              us.
            </p>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/481395045_9151168135004227_5862313037883567289_n-wDPu9EyHVBo2yUjrcF0DMQprgteqCO.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* Store Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Card className="max-w-3xl mx-auto p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Visit Our Store</h3>
                <div className="space-y-4 mb-6">
                  <p className="text-muted-foreground">
                    Explore our wide selection of premium pet supplies,
                    including:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-muted-foreground">
                      • Premium Pet Food & Treats
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      • Grooming Supplies & Tools
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      • Toys & Accessories
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      • Beds & Furniture
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      • Health & Wellness Products
                    </li>
                  </ul>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="h-5 w-5" />
                  <span>Bonifacio St., Tagum City, Philippines</span>
                </div>
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="#location">
                    <Navigation className="mr-2 h-4 w-4" />
                    Get Directions
                  </Link>
                </Button>
              </div>
              <div className="space-y-4">
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Store Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Sunday
                    <br />
                    8:00 AM - 7:00 PM
                  </p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Expert Assistance</h4>
                  <p className="text-muted-foreground">
                    Our knowledgeable staff is ready to help you find the
                    perfect products for your pets.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
