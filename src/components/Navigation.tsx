"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { trackEvent } from "@/lib/analytics"

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-intro" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b" style={{ borderColor: "rgba(255, 255, 255, 0.05)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-[0.2em] uppercase" style={{ color: "#ffffff" }}>PORTFOLIO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  pathname === item.href
                    ? ""
                    : "hover:opacity-80"
                )}
                style={{ 
                  color: pathname === item.href ? "#6DB2C7" : "#d0d0d0" 
                }}
                onClick={() => trackEvent("button_click", { label: `nav_${item.name}` })}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none transition-colors duration-200"
              style={{ color: "#d0d0d0" }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b"
            style={{ 
              backgroundColor: "#0b0b0b", 
              borderColor: "rgba(255, 255, 255, 0.05)" 
            }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                    onClick={() => { setIsOpen(false); trackEvent("button_click", { label: `nav_${item.name}` }); }}
                  className={cn(
                    "block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-lg",
                    pathname === item.href
                      ? ""
                      : "hover:opacity-80"
                  )}
                  style={{
                    color: pathname === item.href ? "#6DB2C7" : "#d0d0d0",
                    backgroundColor: pathname === item.href ? "rgba(109, 178, 199, 0.1)" : "transparent"
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
