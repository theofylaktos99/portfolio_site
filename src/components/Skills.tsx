"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Full-stack Architecture",
    points: ["React / Next.js App Router", "Node.js & Express services", "TypeScript-first workflows"],
  },
  {
    title: "Data & Persistence",
    points: ["MongoDB, Postgres, Supabase", "REST APIs & automation", "State management with Redux Toolkit"],
  },
  {
    title: "AI & Automation",
    points: ["OpenAI API integrations", "Prompt & workflow design", "LangChain & Streamlit prototypes"],
  },
  {
    title: "Web3 Engineering",
    points: ["Solidity smart contracts", "Hardhat, Ethers.js, Base L2", "IPFS + nft.storage deployments"],
  },
  {
    title: "DevOps & Delivery",
    points: ["CI/CD with GitHub Actions", "Docker & container-ready setups", "Deployments to Vercel, Render, Netlify"],
  },
  {
    title: "Design & Product",
    points: ["Dark-neon design systems", "UX writing & storytelling", "Brand identity & go-to-market"],
  },
]

export default function Skills() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#121212" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="tracking-[0.25em] uppercase text-xs mb-3" style={{ color: "#6DB2C7" }}>
            Expertise
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: "#ffffff" }}>
            Systems thinking across web platforms, automation, and decentralized tech
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl p-6 border"
              style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.05)", 
                borderColor: "rgba(255, 255, 255, 0.1)" 
              }}
            >
              <h3 className="text-lg font-semibold tracking-tight mb-3" style={{ color: "#ffffff" }}>
                {service.title}
              </h3>
              <ul className="space-y-2 text-sm list-disc list-inside" style={{ color: "#d0d0d0" }}>
                {service.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
