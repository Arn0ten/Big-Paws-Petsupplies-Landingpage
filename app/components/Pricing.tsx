"use client"

import { Check, Clock, Moon, Cat } from "lucide-react"
import { motion } from "framer-motion"

const dayCareRates = {
  icon: Clock,
  title: "Day Care",
  subtitle: "8:00 AM to 7:00 PM",
  description: "Perfect for pet parents who need daytime care",
  rates: [
    { size: "Small Breed", price: "25", unit: "per hour" },
    { size: "Medium Breed", price: "30", unit: "per hour" },
    { size: "Large Breed", price: "40", unit: "per hour" },
    { size: "XLarge Breed", price: "50", unit: "per hour" },
  ],
  features: ["Supervised playtime", "Feeding schedule", "Rest periods", "Climate controlled environment"],
}

const longStayRates = {
  icon: Moon,
  title: "Long Stay",
  subtitle: "24hrs Accommodation",
  description: "Flexible booking for overnight stays",
  rates: [
    { size: "Small Breed", price: "350", unit: "per night" },
    { size: "Medium Breed", price: "450", unit: "per night" },
    { size: "Large Breed", price: "520", unit: "per night" },
    { size: "XLarge Breed", price: "620", unit: "per night" },
  ],
  features: ["24/7 supervision", "Comfortable bedding", "Regular walks", "Meals included"],
}

const catHotelRates = {
  icon: Cat,
  title: "Cat Hotel",
  subtitle: "Cozy Cat Accommodation",
  description: "Specialized care for your feline friends",
  standardRoom: [
    { type: "Kitten", price: "300", unit: "per night" },
    { type: "Adult Cat", price: "400", unit: "per night" },
  ],
  extraGuest: [
    { type: "Small to Medium", price: "200", note: "additional" },
    { type: "Large Breed", price: "300", note: "additional" },
  ],
  features: ["Cat-specific amenities", "Separate quiet areas", "Climbing spaces", "Litter box service"],
}

function PriceCard({ price, unit }: { price: string; unit: string }) {
  return (
    <div className="flex items-baseline justify-center">
      <span className="text-lg">₱</span>
      <span className="text-4xl font-bold">{price}</span>
      <span className="text-sm text-muted-foreground ml-1">/{unit}</span>
    </div>
  )
}

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
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-muted-foreground">Choose the perfect care package for your pet</p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* Day Care Card */}
          <motion.div
            className="relative bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:border-primary transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-primary/5">
              <div className="flex items-center justify-between">
                <Clock className="h-8 w-8 text-primary" />
                <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                  Daily Care
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold">{dayCareRates.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{dayCareRates.subtitle}</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                {dayCareRates.rates.map((rate) => (
                  <div key={rate.size} className="bg-muted/50 rounded-lg p-4">
                    <div className="text-sm font-medium mb-2">{rate.size}</div>
                    <PriceCard price={rate.price} unit={rate.unit} />
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-border">
                <ul className="space-y-3">
                  {dayCareRates.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Long Stay Card */}
          <motion.div
            className="relative bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:border-primary transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-primary/5">
              <div className="flex items-center justify-between">
                <Moon className="h-8 w-8 text-primary" />
                <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                  Overnight
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold">{longStayRates.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{longStayRates.subtitle}</p>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                {longStayRates.rates.map((rate) => (
                  <div key={rate.size} className="bg-muted/50 rounded-lg p-4">
                    <div className="text-sm font-medium mb-2">{rate.size}</div>
                    <PriceCard price={rate.price} unit={rate.unit} />
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-border">
                <ul className="space-y-3">
                  {longStayRates.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Cat Hotel Card */}
          <motion.div
            className="relative bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:border-primary transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-primary/5">
              <div className="flex items-center justify-between">
                <Cat className="h-8 w-8 text-primary" />
                <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                  Feline Friends
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold">{catHotelRates.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{catHotelRates.subtitle}</p>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-sm font-semibold mb-4">Standard Room</h4>
                <div className="space-y-4">
                  {catHotelRates.standardRoom.map((rate) => (
                    <div key={rate.type} className="bg-muted/50 rounded-lg p-4">
                      <div className="text-sm font-medium mb-2">{rate.type}</div>
                      <PriceCard price={rate.price} unit="night" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-4">Extra Guest</h4>
                <div className="space-y-4">
                  {catHotelRates.extraGuest.map((rate) => (
                    <div key={rate.type} className="bg-muted/50 rounded-lg p-4">
                      <div className="text-sm font-medium mb-2">{rate.type}</div>
                      <PriceCard price={rate.price} unit="guest" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <ul className="space-y-3">
                  {catHotelRates.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            * All rates include basic care services. Additional services available upon request.
          </p>
          <p className="text-sm text-muted-foreground mt-2">* Prices may vary during peak seasons and holidays.</p>
        </motion.div>
      </div>
    </div>
  )
}

