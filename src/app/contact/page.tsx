"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    trackEvent("button_click", { label: "contact_submit", ...formData })
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen pt-20" style={{ background: "#0b0b0b", color: "#d0d0d0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp}>
            <div className="tracking-[0.25em] uppercase text-xs mb-3" style={{ color: "#6DB2C7" }}>
              Let&apos;s Build
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: "#ffffff" }}>
              Get In Touch
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "#d0d0d0" }}>
              Share your product idea, automation challenge, or Web3 concept. I partner with teams
              to design, build, and ship resilient solutions across the full stack.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#ffffff" }}>Contact Information</h2>
              <p className="mb-8" style={{ color: "#d0d0d0" }}>
                Based in Crete and collaborating remotely across time zones. Expect a thoughtful reply within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(109, 178, 199, 0.1)" }}>
                  <Mail className="w-6 h-6" style={{ color: "#6DB2C7" }} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium" style={{ color: "#ffffff" }}>Email</p>
                  <a href="mailto:theofylaktos99@gmail.com" className="underline-offset-4 hover:underline" style={{ color: "#d0d0d0" }}>
                    theofylaktos99@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(109, 178, 199, 0.1)" }}>
                  <Phone className="w-6 h-6" style={{ color: "#6DB2C7" }} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium" style={{ color: "#ffffff" }}>Phone</p>
                  <a href="tel:+306949546463" className="underline-offset-4 hover:underline" style={{ color: "#d0d0d0" }}>
                    +30 694 954 6463
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: "rgba(109, 178, 199, 0.1)" }}>
                  <MapPin className="w-6 h-6" style={{ color: "#6DB2C7" }} />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium" style={{ color: "#ffffff" }}>Location</p>
                  <p style={{ color: "#d0d0d0" }}>Rethymno, Crete, Greece</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-lg font-semibold mb-4" style={{ color: "#ffffff" }}>Current Focus</h3>
              <div className="space-y-3" style={{ color: "#d0d0d0" }}>
                <div className="flex gap-3 items-start">
                  <Target className="w-5 h-5 mt-1" style={{ color: "#6DB2C7" }} />
                  <p>Scaling Cerebro Vault / MintMachine toward mainnet launches with sustainable token economics.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Target className="w-5 h-5 mt-1" style={{ color: "#6DB2C7" }} />
                  <p>Continuing CyclopSoft ERP expansions across CRM, finance, and project dashboards.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Target className="w-5 h-5 mt-1" style={{ color: "#6DB2C7" }} />
                  <p>Connecting my suite of applications into an interoperable, AI-assisted product ecosystem.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-lg border"
            style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.05)", 
              borderColor: "rgba(255, 255, 255, 0.1)" 
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: "#ffffff" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:border-transparent focus:ring-[#6DB2C7]"
                    style={{ 
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      color: "#ffffff"
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: "#ffffff" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:border-transparent"
                    style={{ 
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      color: "#ffffff"
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: "#ffffff" }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:border-transparent"
                  style={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    color: "#ffffff"
                  }}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: "#ffffff" }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:border-transparent resize-none"
                  style={{ 
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderColor: "rgba(255, 255, 255, 0.1)",
                    color: "#ffffff"
                  }}
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full px-8 py-3 rounded-full font-medium"
                style={{ 
                  backgroundColor: "#6DB2C7", 
                  color: "#0b0b0b"
                }}
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
