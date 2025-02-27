"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="bg-primary" id="contact">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-primary-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="block">Want to learn more about our services?</span>
          <span className="block mt-2">Get in touch with us today.</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-lg leading-6 text-primary-foreground/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Visit our facility or contact us for inquiries about our daycare and
          long-stay services.
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center gap-4 flex-col sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button size="lg" variant="secondary" asChild>
            <Link href="#contact">Contact Us</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary"
            asChild
          >
            <Link href="#services">Learn More</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
