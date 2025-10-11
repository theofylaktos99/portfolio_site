"use client"

import { motion } from "framer-motion"
import { Download, MapPin, Calendar, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { trackEvent } from "@/lib/analytics"

export default function About() {
  const [isPhotoRevealed, setIsPhotoRevealed] = useState(false)

  const handleDownloadCv = () => {
    trackEvent("download_cv", { label: "about_request_cv" })
    window.open("mailto:theofylaktos99@gmail.com?subject=Request%20for%20CV", "_blank")
  }
  
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div
      className="min-h-screen pt-20"
      style={{
        color: "#d0d0d0",
        backgroundColor: "#0b0b0b",
        backgroundImage:
          'linear-gradient(135deg, rgba(11, 11, 11, 0.92), rgba(11, 11, 11, 0.88)), url("/backgrounds/20250824_0439_Futuristic Tech Background_simple_compose_01k3cvny27fpdv4dx0rjdbz553.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div 
            variants={fadeInUp} 
            className="order-2 lg:order-1 mt-8 lg:-mt-32"
          >
            <div className="relative">
              <div 
                className="w-full h-[500px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105" 
                style={{ backgroundColor: "transparent" }}
                onClick={() => setIsPhotoRevealed(!isPhotoRevealed)}
              >
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: isPhotoRevealed ? 0 : 1 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 flex items-center justify-center rounded-3xl"
                  style={{ 
                    background: "linear-gradient(135deg, rgba(109, 178, 199, 0.1), rgba(255, 255, 255, 0.05))",
                    border: "2px dashed rgba(109, 178, 199, 0.3)"
                  }}
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="text-8xl mb-4"
                      style={{ color: "#6DB2C7" }}
                    >
                      ?
                    </motion.div>
                    <p className="text-lg font-medium" style={{ color: "#d0d0d0" }}>
                      Click to reveal
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: isPhotoRevealed ? 1 : 0,
                    scale: isPhotoRevealed ? 1 : 0.8
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src="/devphotoprofil.jpg"
                    alt="George Theofylaktos Papazisis portrait"
                    fill
                    className="object-contain rounded-3xl"
                    style={{ 
                      filter: "brightness(1.1) contrast(1.1)"
                    }}
                    priority
                  />
                </motion.div>

                {/* Click hint overlay */}
                {isPhotoRevealed && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                    style={{
                      background: "rgba(0, 0, 0, 0.7)",
                      color: "#ffffff"
                    }}
                  >
                    Click to hide
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={fadeInUp} className="order-1 lg:order-2">
            <div className="tracking-[0.25em] uppercase text-xs mb-3" style={{ color: "#6DB2C7" }}>
              About Me
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: "#ffffff" }}>
              Independent Developer &
              <span style={{ color: "#6DB2C7" }}> Product Architect</span>
            </h1>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: "#d0d0d0" }}>
              I&apos;m George Theofylaktos Papazisis, an independent developer based in Crete
              building software ecosystems that fuse Web, AI, and Web3. Over the past year
              I&apos;ve gone from rapid AI-assisted prototypes to fully engineered products
              deployed to production.
            </p>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#d0d0d0" }}>
              My process spans product strategy, technical architecture, and hands-on
              delivery. Whether it&apos;s an ERP for construction teams, an AI-driven
              financial analyst, or a decentralized minting experience, I immerse myself
              in the problem space and craft resilient, human-friendly solutions.
            </p>

            <div className="space-y-4 mb-8 p-6 rounded-2xl" style={{ 
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)"
            }}>
              <div className="flex items-center">
                <MapPin size={20} className="mr-3" style={{ color: "#6DB2C7" }} />
                <span style={{ color: "#d0d0d0" }}>Rethymno, Crete, Greece</span>
              </div>
              <div className="flex items-center">
                <Calendar size={20} className="mr-3" style={{ color: "#6DB2C7" }} />
                <span style={{ color: "#d0d0d0" }}>Self-employed • Open to remote collaborations</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3" style={{ color: "#6DB2C7" }} />
                <span style={{ color: "#d0d0d0" }}>theofylaktos99@gmail.com</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ 
                backgroundColor: "#6DB2C7", 
                color: "#0b0b0b",
                boxShadow: "0 0 20px rgba(109, 178, 199, 0.3)"
              }}
              onClick={handleDownloadCv}
            >
              <Download size={20} className="mr-2" />
              Request Full CV
            </Button>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 mt-8 p-6 rounded-2xl" style={{ 
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.05)"
            }}>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: "#6DB2C7" }}>10</div>
                <div className="text-sm" style={{ color: "#d0d0d0" }}>Products shipped in 2024–25</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: "#6DB2C7" }}>6</div>
                <div className="text-sm" style={{ color: "#d0d0d0" }}>Seminar papers authored</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: "#6DB2C7" }}>15+</div>
                <div className="text-sm" style={{ color: "#d0d0d0" }}>Years client-facing roles</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
          style={{ background: "#121212" }}
        >
          <div className="py-16 px-8 rounded-3xl">
            <div className="tracking-[0.25em] uppercase text-xs mb-3 text-center" style={{ color: "#6DB2C7" }}>
              Experience
            </div>
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: "#ffffff" }}>
              Experience & Education
            </h2>
            
            <div className="space-y-8">
              {/* Timeline items */}
              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 rounded-full mt-2" style={{ backgroundColor: "#6DB2C7" }}></div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold" style={{ color: "#ffffff" }}>Independent Developer / Product Architect</h3>
                  <p className="font-medium" style={{ color: "#6DB2C7" }}>Self-Employed • Crete, Greece • Apr 2024 – Present</p>
                  <p className="mt-2" style={{ color: "#d0d0d0" }}>
                    Designed and delivered end-to-end software ecosystems spanning React/Next.js frontends,
                    Node.js/Express backends, MongoDB data layers, and Solidity contracts. Responsible for
                    product design, documentation, branding, deployment, and automation.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 rounded-full mt-2" style={{ backgroundColor: "#6DB2C7" }}></div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold" style={{ color: "#ffffff" }}>Cross-domain Professional Background</h3>
                  <p className="font-medium" style={{ color: "#6DB2C7" }}>Hospitality, Sales, Transport • 2007 – Present</p>
                  <p className="mt-2" style={{ color: "#d0d0d0" }}>
                    Led customer-facing roles from hospitality leadership to logistics across Greece. Developed
                    resilience, sales acumen, and service mindset that now inform delivery of client-oriented
                    software and AI solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-4 h-4 rounded-full mt-2" style={{ backgroundColor: "#6DB2C7" }}></div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold" style={{ color: "#ffffff" }}>B.A. History & Archaeology</h3>
                  <p className="font-medium" style={{ color: "#6DB2C7" }}>University of Crete • 2007 – 2013</p>
                  <p className="mt-2" style={{ color: "#d0d0d0" }}>
                    Specialized in Archaeology & Art History, participated in excavations, and authored six
                    academic seminar papers. Built the research discipline that drives today&apos;s technical work.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
