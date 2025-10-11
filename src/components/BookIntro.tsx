"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronRight, ChevronLeft, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

interface BookIntroProps {
  onComplete: () => void
  onSkip: () => void
}

export default function BookIntro({ onComplete, onSkip }: BookIntroProps) {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    {
      content: (
        <div className="text-center space-y-8 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold holographic-text">
              G.T.P.
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-glow" style={{ color: "#d0d0d0" }}>
              I build stories in software the way archaeologists trace cities—layer by layer. From Crete’s shoreline to late-night command lines, I apprentice myself to curiosity, carving systems that feel alive and intentional.
            </p>
            <p className="text-sm md:text-base uppercase tracking-[0.35em] text-white/60">
              Independent Developer · Product Architect · Story-driven Technologist
            </p>
          </motion.div>
        </div>
      )
    },
    {
      content: (
        <div className="space-y-6 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-5"
          >
            <div className="text-xl md:text-2xl font-semibold holographic-text">
              A road paved by resilience
            </div>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: "#d0d0d0" }}>
              Decades of varied work—taxi meters, hospitality rushes, artisanal crafts—trained me to read intent in every interaction. When I embraced code full-time, those disciplines transformed into intuition for human-centered products.
            </p>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mx-auto" style={{ color: "#d0d0d0" }}>
              History & Archaeology taught me to question origins. Software invites me to design new ones. Today I craft digital worlds where strategy, storytelling, and infrastructure meet.
            </p>
          </motion.div>
        </div>
      )
    },
    {
      content: (
        <div className="space-y-7 px-6 text-left md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="text-xl md:text-2xl font-semibold holographic-text text-center">
              Six months of momentum
            </div>
            <motion.ul
              className="space-y-4 text-sm md:text-base leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              style={{ color: "#d0d0d0" }}
            >
              <li className="border border-white/10 rounded-lg p-4 bg-white/5 backdrop-blur">
                <span className="holographic-text font-semibold">Cerebro Vault / MintMachine</span>
                <p className="mt-2 text-white/80">
                  Sepolia is live; mainnet launch is etched for late October while new L2 voyages—Base, Arbitrum, Polygon—line the horizon. Loyalty mechanics power a dApp that feels like a constellation you can actually hold.
                </p>
              </li>
              <li className="border border-white/10 rounded-lg p-4 bg-white/5 backdrop-blur">
                <span className="holographic-text font-semibold">Greconomist AI</span>
                <p className="mt-2 text-white/80">
                  Financial narratives distilled through AI, where analysts meet ambient storytelling. Each insight arrives with the calm of a guided meditation and the precision of a ledger.
                </p>
              </li>
              <li className="border border-white/10 rounded-lg p-4 bg-white/5 backdrop-blur">
                <span className="holographic-text font-semibold">CyclopSoft ERP</span>
                <p className="mt-2 text-white/80">
                  Construction workflows orchestrated in one cohesive suite—budgets, CRM, calendars—engineered from scratch so teams can operate like a practiced symphony.
                </p>
              </li>
            </motion.ul>
            <p className="text-xs uppercase tracking-[0.25em] text-center text-white/40">
              10 projects · 6 months · A living ecosystem of interoperable ideas
            </p>
          </motion.div>
        </div>
      )
    },
    {
      content: (
        <div className="text-center space-y-8 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="text-2xl md:text-3xl font-bold holographic-text">
              Let’s author the next chapter
            </div>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: "#d0d0d0" }}>
              I partner with founders and teams who crave brave ideas—systems that carry both poetry and precision. If you need a builder who can hear the heartbeat beneath the backlog, you’ve found him.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={() => { 
                  trackEvent("button_click", { label: "book_view_projects" })
                  onComplete() 
                }}
                size="lg"
                className="px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: "#6DB2C7", color: "#0b0b0b" }}
              >
                View Projects
              </Button>
              <Button
                onClick={() => { 
                  trackEvent("button_click", { label: "book_contact" })
                  window.location.href = "/contact"
                }}
                size="lg"
                variant="ghost"
                className="px-8 py-3 rounded-full border font-medium transition-all duration-300 hover:scale-105"
                style={{ color: "#6DB2C7", borderColor: "rgba(109,178,199,0.3)" }}
              >
                Get in Touch
              </Button>
            </div>
          </motion.div>
        </div>
      )
    }
  ]

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1)
      trackEvent("button_click", { label: "book_next", step: currentPage + 1 })
    } else {
      trackEvent("button_click", { label: "book_complete" })
      onComplete()
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
      trackEvent("button_click", { label: "book_prev", step: currentPage - 1 })
    }
  }

  const bookVariants = {
    closed: {
      rotateY: 0,
      scale: 0.8,
    },
    open: {
      rotateY: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const
      }
    }
  }

  const pageVariants = {
    enter: {
      x: 100,
      opacity: 0,
      rotateY: 90
    },
    center: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    },
    exit: {
      x: -100,
      opacity: 0,
      rotateY: -90,
      transition: {
        duration: 0.8,
        ease: "easeIn" as const
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-10 md:py-16" style={{ background: "#0b0b0b" }}>
      <div className="w-full max-w-4xl mx-auto px-4 relative">
        {/* Skip Button */}
        <Button
          onClick={() => {
            trackEvent("button_click", { label: "book_skip", step: currentPage })
            onSkip()
          }}
          variant="ghost"
          className="absolute top-4 right-4 z-50"
          style={{ color: "#6DB2C7" }}
        >
          <SkipForward size={20} className="mr-2" />
          Skip
        </Button>

        {/* Book Container */}
        <motion.div
          variants={bookVariants}
          initial="closed"
          animate="open"
          className="relative w-full max-w-2xl mx-auto"
          style={{
            perspective: "1000px"
          }}
        >
          {/* Book Cover/Pages */}
          <div className="relative w-full rounded-2xl shadow-2xl holographic-frame">
            <div
              className="relative z-10 w-full rounded-[inherit] overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(109, 178, 199, 0.08), rgba(255, 255, 255, 0.03))",
                border: "1px solid rgba(109, 178, 199, 0.22)",
                boxShadow: "0 18px 40px rgba(0,0,0,0.35)"
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full"
                >
                  <div className="flex items-stretch">
                    <div className="w-full p-6 md:p-8 max-h-[70vh] md:max-h-[65vh] overflow-y-auto">
                      {pages[currentPage].content}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Page Navigation */}
              <div className="w-full flex items-center justify-center gap-4 py-4 border-t border-white/10 bg-black/20 backdrop-blur">
                {currentPage > 0 && (
                  <Button
                    onClick={prevPage}
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                    style={{ color: "#6DB2C7" }}
                  >
                    <ChevronLeft size={20} />
                  </Button>
                )}

                {/* Page Indicators */}
                <div className="flex space-x-2">
                  {pages.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentPage ? 'opacity-100 scale-110' : 'opacity-30'
                      }`}
                      style={{ backgroundColor: "#6DB2C7" }}
                    />
                  ))}
                </div>

                {currentPage < pages.length - 1 && (
                  <Button
                    onClick={nextPage}
                    variant="ghost"
                    size="sm"
                    className="rounded-full"
                    style={{ color: "#6DB2C7" }}
                  >
                    <ChevronRight size={20} />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-8"
        >
          <p className="text-sm" style={{ color: "#d0d0d0" }}>
            Use the arrows to navigate pages — content scrolls if it’s long.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
