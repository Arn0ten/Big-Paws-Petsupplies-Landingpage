"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: "a.bautista.129340.tc@umindanao.edu.ph",
          subject: "New Customer Inquiry",
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
              <div style="background-color: #2E3357; padding: 15px; color: #fff; text-align: center;">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BigPawsLogo-tgQYrArFSfOX9irwlrG1D93gEjB9yr.png" alt="Profile Picture" style="width: 50px; height: 50px; border-radius: 50%;" />
                <h1>Big Paws Pet Supplies</h1>
              </div>
              <div style="padding: 20px;">
                <h2 style="color: #2E3357;">New Contact Inquiry</h2>
                <hr style="border: 1px solid #ccc;" />
                <h3 style="color: #555;">📋 Contact Details:</h3>
                <p><strong> Name:</strong> ${data.name}</p>
                <p><strong> Email:</strong> ${data.email}</p>
                <p><strong> Phone:</strong> ${data.phone}</p>
                <h3 style="color: #555;">🐾 Pet Information:</h3>
                <p>${data["pet-info"]}</p>
                <h3 style="color: #555;">💬 Customer Message:</h3>
                <p>${data.message}</p>
                <hr style="border: 1px solid #ccc;" />
                <p style="color: #777;">This is an automated message from your contact form. Please respond to the customer as soon as possible.</p>
              </div>
              <div style="background-color: #2E3357; padding: 10px; color: #fff; text-align: center;">
                <p>Big Paws Pet Supplies</p>
                <p>Lapu-lapu St., Pet Tagum City, Davao del Norte, 8100 PH</p>
                <p>Phone: +639501890933</p>
                <p>Email: info@big-paws-petsupplies.tech</p>
                <p>&copy; 2025 Big Paws Pet Supplies. All rights reserved.</p>
              </div>
            </div>
          `,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have questions about our services? Get in touch with us!
          </p>
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
              <Input
                id="name"
                name="name"
                required
                placeholder="Your full name"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Your phone number"
                className="w-full"
              />
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
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto min-w-[200px]"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-600 dark:text-green-400"
              >
                Thank you for your message! We'll get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
