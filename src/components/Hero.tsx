"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { ArrowDown, Mail, Phone, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter()
  const fullGreeting = "Hello, I'm George Theofylaktos Papazisis"
  const highlightTarget = "George Theofylaktos Papazisis"
  const [typedGreeting, setTypedGreeting] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [typingCompleted, setTypingCompleted] = useState(false)

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      index += 1
      setTypedGreeting(fullGreeting.slice(0, index))
      if (index >= fullGreeting.length) {
        clearInterval(typingInterval)
        setTimeout(() => setShowCursor(true), 350)
        setTypingCompleted(true)
      }
    }, 115)

    return () => clearInterval(typingInterval)
  }, [fullGreeting])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 700)

    return () => clearInterval(cursorInterval)
  }, [])

  const { beforeName, nameSlice, afterName } = useMemo(() => {
    const highlightStart = fullGreeting.indexOf(highlightTarget)
    const highlightEnd = highlightStart + highlightTarget.length
    const safeGreeting = typedGreeting

    const begin = highlightStart === -1 ? safeGreeting : safeGreeting.slice(0, Math.min(highlightStart, safeGreeting.length))
    const middle = highlightStart === -1 ? "" : safeGreeting.slice(Math.max(highlightStart, 0), Math.min(highlightEnd, safeGreeting.length))
    const end = highlightStart === -1 ? "" : safeGreeting.slice(Math.min(highlightEnd, safeGreeting.length))

    return {
      beforeName: begin,
      nameSlice: middle,
      afterName: end
    }
  }, [fullGreeting, highlightTarget, typedGreeting])
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const handleViewWork = () => {
    trackEvent("button_click", { label: "view_my_work" })
    router.push("/projects")
  }

  const handleContact = () => {
    trackEvent("button_click", { label: "hero_contact" })
    router.push("/contact")
  }

  // The hero background pulls from /public/hex-grid.png — drop the provided hex texture there.
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-16 pb-16 overflow-hidden"
      style={{
        backgroundColor: "#0b0b0b",
        backgroundImage: 'url("/hex-grid.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/90" aria-hidden />
  <div className="absolute inset-0 opacity-70 mix-blend-screen bg-radial-gradient(circle_at_top,_rgba(109,178,199,0.18) bg-_rgba(11,11,11,0.9)_65%)" aria-hidden />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          <motion.div variants={fadeInUp}>
            <div className="tracking-[0.25em] uppercase text-xs mb-6" style={{ color: "#6DB2C7" }}>
              Independent Developer • Product Architect
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: "#ffffff" }}>
              <span className="font-mono">
                {beforeName}
                <span style={{ color: "#6DB2C7" }}>{nameSlice}</span>
                {afterName}
              </span>
              <span
                aria-hidden
                className="ml-1 inline-block w-2 rounded-sm bg-[#6DB2C7]"
                style={{ opacity: showCursor ? 1 : 0 }}
              />
            </h1>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={typingCompleted ? "animate" : "initial"}
          >
            <p className="text-xl md:text-2xl mb-8 leading-relaxed" style={{ color: "#d0d0d0" }}>
              Full-stack builder crafting Web, AI, and Web3 products end-to-end.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={typingCompleted ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: typingCompleted ? 0.15 : 0 }}
          >
            <p className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: "#d0d0d0" }}>
              I design, architect, and deliver production-ready systems that blend
              thoughtful product design with robust engineering — from decentralized
              minting platforms to AI-assisted ERPs and automation pipelines.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={typingCompleted ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: typingCompleted ? 0.25 : 0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="px-8 py-3 text-lg rounded-full font-medium"
              style={{ 
                backgroundColor: "#6DB2C7", 
                color: "#0b0b0b"
              }}
              onClick={handleViewWork}
            >
              Explore Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg rounded-full border"
              style={{ 
                borderColor: "rgba(255, 255, 255, 0.2)",
                color: "#ffffff",
                backgroundColor: "transparent"
              }}
              onClick={handleContact}
            >
              Start a Project
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={typingCompleted ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: typingCompleted ? 0.35 : 0 }}
            className="flex flex-col sm:flex-row justify-center gap-6 pt-8 text-sm md:text-base"
            style={{ color: "#d0d0d0" }}
          >
            <div className="flex items-center justify-center gap-2">
              <Mail size={20} style={{ color: "#6DB2C7" }} />
              <a
                href="mailto:theofylaktos99@gmail.com"
                className="hover:underline"
              >
                theofylaktos99@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Phone size={20} style={{ color: "#6DB2C7" }} />
              <a href="tel:+306949546463" className="hover:underline">
                +30 694 954 6463
              </a>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Globe size={20} style={{ color: "#6DB2C7" }} />
              <span>Rethymno, Crete, Greece</span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={typingCompleted ? "animate" : "initial"}
            transition={{ duration: 0.6, delay: typingCompleted ? 0.45 : 0 }}
            className="pt-12"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ color: "#6DB2C7" }}
            >
              <ArrowDown size={24} className="mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
