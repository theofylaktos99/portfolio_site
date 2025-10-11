"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import BookIntro from "@/components/BookIntro"
import { motion } from "framer-motion"

export default function AboutIntro() {
  const [showBook, setShowBook] = useState(true)
  const router = useRouter()

  const handleComplete = () => {
    setShowBook(false)
    setTimeout(() => {
      router.push("/about")
    }, 500)
  }

  const handleSkip = () => {
    router.push("/about")
  }

  if (!showBook) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('/backgrounds/20250824_0441_Elegant Metallic Gradient_simple_compose_01k3cvr4zke7s9z872ygfm21wf.png')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#0b0b0b'
        }}
      >
        <div className="text-center">
          <div className="text-4xl" style={{ color: "#6DB2C7" }}>✨</div>
          <p style={{ color: "#d0d0d0" }}>Φορτώνεται...</p>
        </div>
      </motion.div>
    )
  }

  return <BookIntro onComplete={handleComplete} onSkip={handleSkip} />
}
