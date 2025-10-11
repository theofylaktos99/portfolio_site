"use client"

import { motion } from "framer-motion"
import { trackEvent } from "@/lib/analytics"
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaTelegramPlane,
  FaGithub,
  FaYoutube,
  FaLinkedinIn
} from "react-icons/fa"
import { IconType } from "react-icons"

const socialLinks: Array<{
  name: string
  href: string
  icon: IconType
  color: string
}> = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebookF,
    color: "#1877F2"
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
    color: "#E4405F"
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com",
    icon: FaTiktok,
    color: "#25F4EE"
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/306949546463",
    icon: FaWhatsapp,
    color: "#25D366"
  },
  {
    name: "Telegram",
    href: "https://t.me",
    icon: FaTelegramPlane,
    color: "#2AABEE"
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: FaGithub,
    color: "#ffffff"
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
    color: "#FF0000"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: FaLinkedinIn,
    color: "#0A66C2"
  }
]

export default function Footer() {
  return (
    <footer className="relative border-t" style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, rgba(109, 178, 199, 0.2), transparent 60%), linear-gradient(180deg, rgba(11, 11, 11, 0.95), rgba(11, 11, 11, 1))"
        }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-[1.75fr_1fr] gap-12"
        >
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full text-xs tracking-[0.3em] uppercase"
              style={{
                backgroundColor: "rgba(109, 178, 199, 0.12)",
                color: "#6DB2C7",
                border: "1px solid rgba(109, 178, 199, 0.4)"
              }}
            >
              Let&apos;s Connect
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: "#ffffff" }}>
              Building the future of web, AI, and Web3 experiences — let&apos;s create the next release together.
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: "#d0d0d0" }}>
              Reach out for collaborations, product architecture, or launch strategies. I operate end-to-end, from
              concept sprints to production deployments and growth automation.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="mailto:theofylaktos99@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium"
                style={{
                  backgroundColor: "#6DB2C7",
                  color: "#0b0b0b",
                  boxShadow: "0 10px 40px rgba(109, 178, 199, 0.3)"
                }}
                onClick={() => trackEvent("button_click", { label: "footer_email" })}
              >
                theofylaktos99@gmail.com
              </a>
              <a
                href="tel:+306949546463"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  color: "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.15)"
                }}
                onClick={() => trackEvent("button_click", { label: "footer_phone" })}
              >
                +30 694 954 6463
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-sm uppercase tracking-[0.2em]" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
              Social & Channels
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {socialLinks.map(({ name, href, icon: Icon, color }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl border backdrop-blur-sm"
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.08)",
                    backgroundColor: "rgba(255, 255, 255, 0.03)"
                  }}
                  onClick={() => trackEvent("button_click", { label: `footer_social_${name.toLowerCase()}` })}
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    style={{ backgroundColor: "rgba(109, 178, 199, 0.12)" }}
                  >
                    <Icon size={20} color={color} />
                  </span>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "#ffffff" }}>
                      {name}
                    </div>
                    <div className="text-xs" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
                      Connect instantly
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 pt-8 border-t"
          style={{ borderColor: "rgba(255, 255, 255, 0.08)" }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-sm" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
              © {new Date().getFullYear()} George Theofylaktos Papazisis. Crafted with TypeScript, Next.js, and relentless curiosity.
            </div>
            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(255, 255, 255, 0.45)" }}>
              <span>Web</span>
              <span>AI</span>
              <span>Web3</span>
              <span>Product</span>
              <span>Automation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
