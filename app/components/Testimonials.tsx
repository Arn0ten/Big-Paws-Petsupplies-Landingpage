"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Arneabell Bautista",
    pet: "Max the Golden Retriever",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smilingsog.jpg-0uRYHAW64K5XChiJCiBqKPpa8huJpa.jpeg",
    quote:
      "The care and attention my Max receives at Big Paws is exceptional. The staff treats him like family!",
    rating: 5,
  },
  {
    name: "Kenneth Tan",
    pet: "Luna the Persian Cat",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sleepingcat.jpg-XBZkH31jxxrEenX8zw783gMVMMOV8P.jpeg",
    quote:
      "Luna comes back happy and beautifully groomed every time. Best pet care service in Tagum City!",
    rating: 5,
  },
  {
    name: "Jhon Andrie Canedo",
    pet: "Charlie the Spaniel",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/saddog.jpg-IzpczZnSuAJK5nWRM8a6SoInZq5rB0.jpeg",
    quote:
      "Professional service, clean facilities, and caring staff. Couldn't ask for better care for Charlie.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section
      className="py-24 bg-secondary relative overflow-hidden"
      id="testimonials"
    >
      {/* Background decorative elements */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-10 left-10 text-primary/10 text-[200px]">
          <Quote />
        </div>
        <div className="absolute bottom-10 right-10 text-primary/10 text-[200px] transform rotate-180">
          <Quote />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground">
            Real experiences from our valued pet parents
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden">
                    <Image
                      src={
                        testimonials[currentIndex].image || "/placeholder.svg"
                      }
                      alt={testimonials[currentIndex].pet}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg"
                  >
                    <Quote className="w-6 h-6" />
                  </motion.div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                        >
                          ⭐
                        </motion.span>
                      ),
                    )}
                  </div>
                  <blockquote className="text-xl italic">
                    {testimonials[currentIndex].quote}
                  </blockquote>
                  <div className="border-l-4 border-primary pl-4 mt-4">
                    <p className="font-semibold">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].pet}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full hover:scale-110 transition-transform"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full hover:scale-110 transition-transform"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
