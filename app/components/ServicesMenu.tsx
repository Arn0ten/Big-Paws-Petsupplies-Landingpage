"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dog, Cat, Scissors, Hotel, Sun } from "lucide-react"
import Image from "next/image"

const groomingServices = {
  forDogs: {
    basicWash: {
      description: "Bath & Blow Dry with Cologne",
      prices: {
        small: "180.00",
        medium: "220.00",
        large: "280.00",
        extraLarge: "320.00",
      },
    },
    premiumWash: {
      description: "Bath, Brush, Shampoo, Ear Clean, Nail Cut & Trim around the Face/Facial Area",
      prices: {
        small: "300.00",
        medium: "450.00",
        large: "550.00",
        extraLarge: "850.00",
      },
    },
    premiumWashAndCut: {
      description: "Bath, Brush, BlowDry, Ear Clean, Nail Cut & Trim around the Face/Facial Area",
      prices: {
        small: "450.00",
        medium: "600.00",
        large: "850.00",
        extraLarge: "880.00",
      },
    },
    fullGrooming: {
      description: "Bath, Brush, BlowDry, Ear Clean, Nail Cut & Full Body Cleaning, Cut with Style & Cologne",
      prices: {
        small: "500.00",
        medium: "650.00",
        large: "700.00",
        extraLarge: "800.00",
      },
    },
  },
  forCats: {
    basicWash: {
      description: "Bath & Blow Dry",
      prices: {
        small: "150.00",
        medium: "200.00",
        large: "250.00",
        extraLarge: "280.00",
      },
    },
    premiumWash: {
      description: "Bath with Nail Cut, Ear Clean, Trim around the Face with Cologne",
      prices: {
        small: "200.00",
        medium: "250.00",
        large: "300.00",
        extraLarge: "350.00",
      },
    },
  },
  additionalServices: {
    teethClean: "80",
    tickAndFleaRemoval: "150",
    blowDry: "80",
    woundTreatment: "50",
    nailCut: "100",
    analSacCleaning: "100",
    earCleaning: "80",
  },
}

const hotelServices = {
  dayCare: {
    price: "250",
    hours: "8:00 AM to 8:00 PM",
    note: "Additional 50 per hour",
    requirements: "Need Fully Vaccinated & anti-rabies",
  },
  dayHotel: {
    standardRoom: "400.00",
    extraGuest: {
      smallToMedium: "200",
      largeBread: "300",
    },
    features: ["Play with Dog", "Walking", "Treats"],
  },
  catHotel: {
    standardRoom: "300.00",
  },
}

const serviceColors = {
  basicWash: "bg-blue-500 text-white",
  premiumWash: "bg-red-500 text-white",
  premiumWashAndCut: "bg-green-500 text-white",
  fullGrooming: "bg-purple-500 text-white",
}

const sizeColors = {
  small: "bg-purple-500 text-white",
  medium: "bg-pink-500 text-white",
  large: "bg-red-500 text-white",
  extraLarge: "bg-pink-400 text-white",
}

const serviceBackgroundColors = {
  basicWash: "bg-blue-100 dark:bg-blue-900/20",
  premiumWash: "bg-orange-100 dark:bg-orange-900/20",
  premiumWashAndCut: "bg-green-100 dark:bg-green-900/20",
  fullGrooming: "bg-gray-100 dark:bg-gray-800/20",
}

export default function ServicesMenu() {
  return (
    <section className="py-16 bg-background" id="services-menu">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Our Services & Rates</h2>
          <p className="mt-4 text-lg text-muted-foreground">Professional pet care services at competitive prices</p>
        </motion.div>

        <Tabs defaultValue="hotel" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="hotel" className="text-lg">
              <Hotel className="mr-2 h-5 w-5" />
              Hotel Services
            </TabsTrigger>
            <TabsTrigger value="grooming" className="text-lg">
              <Scissors className="mr-2 h-5 w-5" />
              Grooming Services
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hotel">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6"
            >
              <Card className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BigPawsLogoBig-QEuBX7LEMcYoQTMrjMOPnGFkVuwmrA.png"
                    alt="Big Paws Logo"
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>

                <div className="space-y-8">
                  {/* Day Care */}
                  <div className="border-b pb-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center bg-blue-500 text-white p-2 rounded">
                      <Dog className="mr-2" /> Day Care
                    </h3>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="flex-1">Standard Room</span>
                        <span className="text-2xl font-bold text-primary">
                          ₱{hotelServices.dayCare.price} <span className="text-base text-muted-foreground">/pet</span>
                        </span>
                      </div>
                      <p className="text-muted-foreground">{hotelServices.dayCare.hours}</p>
                      <p className="text-sm text-muted-foreground mt-2">Additional {hotelServices.dayCare.note}</p>
                      <div className="mt-4 bg-destructive/20 dark:bg-destructive/30 text-destructive dark:text-red-400 p-2 rounded text-sm font-medium">
                        Note: {hotelServices.dayCare.requirements}
                      </div>
                    </div>
                  </div>

                  {/* Day Hotel */}
                  <div className="border-b pb-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center bg-red-500 text-white p-2 rounded">
                      <Sun className="mr-2" /> Day Hotel
                    </h3>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-4">
                        <span>Standard Room</span>
                        <span className="text-2xl font-bold text-primary">
                          ₱{hotelServices.dayHotel.standardRoom}{" "}
                          <span className="text-base text-muted-foreground">/day</span>
                        </span>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Extra Guest:</p>
                        <div className="flex justify-between text-sm">
                          <span>Small to Medium</span>
                          <span className="text-xl font-semibold text-primary">
                            ₱{hotelServices.dayHotel.extraGuest.smallToMedium}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Large Breed</span>
                          <span className="text-xl font-semibold text-primary">
                            ₱{hotelServices.dayHotel.extraGuest.largeBread}
                          </span>
                        </div>
                        <div className="mt-4 bg-destructive/20 dark:bg-destructive/30 text-destructive dark:text-red-400 p-2 rounded text-sm font-medium">
                          Note: {hotelServices.dayCare.requirements}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cat Hotel */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center bg-orange-500 text-white p-2 rounded">
                      <Cat className="mr-2" /> Cat Hotel
                    </h3>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span>Standard Room</span>
                        <span className="text-2xl font-bold text-primary">
                          ₱{hotelServices.catHotel.standardRoom}{" "}
                          <span className="text-base text-muted-foreground">/day</span>
                        </span>
                      </div>
                      <div className="mt-4 bg-destructive/20 dark:bg-destructive/30 text-destructive dark:text-red-400 p-2 rounded text-sm font-medium">
                        Note: {hotelServices.dayCare.requirements}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="grooming">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6"
            >
              <Card className="p-6">
                {/* For Dogs */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                    <Dog className="mr-2" /> For Dogs
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-primary/5 p-4 rounded-lg">
                      {/* Size Badges Row */}
                      <div className="hidden sm:grid grid-cols-5 gap-4 mb-4">
                        <div className="invisible">Service Type</div>
                        {["small", "medium", "large", "extraLarge"].map((size) => (
                          <div
                            key={size}
                            className={`text-center p-2 rounded-full ${sizeColors[size as keyof typeof sizeColors]}`}
                          >
                            <div className="text-sm font-medium">
                              {size
                                .replace(/([A-Z])/g, " $1")
                                .trim()
                                .toUpperCase()}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Responsive Services */}
                      <div className="space-y-4">
                        {Object.entries(groomingServices.forDogs).map(([service, details]) => (
                          <div
                            key={service}
                            className={`rounded-lg p-2 ${serviceBackgroundColors[service as keyof typeof serviceBackgroundColors]}`}
                          >
                            {/* Grid Layout for Large Screens */}
                            <div className="hidden sm:grid grid-cols-5 gap-4 items-center">
                              <div
                                className={`text-sm font-medium px-3 py-1 rounded-full text-center ${
                                  serviceColors[service as keyof typeof serviceColors]
                                }`}
                              >
                                {service
                                  .replace(/And/g, " &")
                                  .replace(/([A-Z])/g, " $1")
                                  .trim()
                                  .toUpperCase()}
                              </div>
                              {Object.values(details.prices).map((price, index) => (
                                <div key={index} className="text-center font-semibold">
                                  ₱{price}
                                </div>
                              ))}
                            </div>

                            {/* Stacked Layout for Mobile */}
                            <div className="sm:hidden space-y-2">
                              <div className="bg-white/80 dark:bg-slate-950 p-2 rounded-lg mb-2 w-full">
                                <div
                                  className={`text-sm font-medium px-3 py-1 rounded-full w-full text-center ${
                                    serviceColors[service as keyof typeof serviceColors]
                                  }`}
                                >
                                  {service
                                    .replace(/([A-Z])/g, " $1")
                                    .trim()
                                    .toUpperCase()}
                                </div>
                              </div>
                              {Object.entries(details.prices).map(([size, price]) => (
                                <div
                                  key={size}
                                  className="flex justify-between bg-white/80 dark:bg-slate-950 p-2 rounded-lg"
                                >
                                  <span className="text-sm font-medium">{size.toUpperCase()}</span>
                                  <span className="font-semibold">₱{price}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* For Cats */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-6 flex items-center">
                    <Cat className="mr-2" /> For Cats
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-primary/5 p-4 rounded-lg">
                      {/* Size Badges Row */}
                      <div className="hidden sm:grid grid-cols-5 gap-4 mb-4">
                        <div className="invisible">Service Type</div>
                        {["small", "medium", "large", "extraLarge"].map((size) => (
                          <div
                            key={size}
                            className={`text-center p-2 rounded-full ${sizeColors[size as keyof typeof sizeColors]}`}
                          >
                            <div className="text-sm font-medium">
                              {size
                                .replace(/([A-Z])/g, " $1")
                                .trim()
                                .toUpperCase()}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Responsive Services */}
                      <div className="space-y-4">
                        {Object.entries(groomingServices.forCats).map(([service, details]) => (
                          <div
                            key={service}
                            className={`rounded-lg p-2 ${serviceBackgroundColors[service as keyof typeof serviceBackgroundColors]}`}
                          >
                            {/* Grid Layout for Large Screens */}
                            <div className="hidden sm:grid grid-cols-5 gap-4 items-center">
                              <div
                                className={`text-sm font-medium px-3 py-1 rounded-full text-center w-full ${
                                  serviceColors[service as keyof typeof serviceColors]
                                }`}
                              >
                                {service
                                  .replace(/([A-Z])/g, " $1")
                                  .trim()
                                  .toUpperCase()}
                              </div>
                              {Object.values(details.prices).map((price, index) => (
                                <div key={index} className="text-center font-semibold">
                                  ₱{price}
                                </div>
                              ))}
                            </div>

                            {/* Stacked Layout for Mobile */}
                            <div className="sm:hidden space-y-2">
                              <div className="bg-white/50 dark:bg-slate-900/50 p-2 rounded-lg mb-2 w-full">
                                <div
                                  className={`text-sm font-medium px-3 py-1 rounded-full w-full text-center ${
                                    serviceColors[service as keyof typeof serviceColors]
                                  }`}
                                >
                                  {service
                                    .replace(/([A-Z])/g, " $1")
                                    .trim()
                                    .toUpperCase()}
                                </div>
                              </div>
                              {Object.entries(details.prices).map(([size, price]) => (
                                <div
                                  key={size}
                                  className="flex justify-between bg-white/50 dark:bg-slate-900/50 p-2 rounded-lg"
                                >
                                  <span className="text-sm font-medium">{size.toUpperCase()}</span>
                                  <span className="font-semibold">₱{price}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4 ">Additional Services</h3>
                  <div className="bg-primary/5 p-4 rounded-lg border border-red-500">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(groomingServices.additionalServices).map(([service, price]) => (
                        <div
                          key={service}
                          className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        >
                          <span className="text-sm font-medium uppercase">
                            {service.replace(/([A-Z])/g, " $1").trim()}
                          </span>
                          <span className="font-semibold">₱{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

