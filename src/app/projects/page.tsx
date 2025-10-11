"use client"

import { motion } from "framer-motion"
import ProjectCard from "@/components/ProjectCard"
import { trackEvent } from "@/lib/analytics"

type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  liveLabel?: string
  githubUrl?: string
  details?: {
    purpose?: string
    coreFeatures?: string[]
    architecture?: string[]
    apiEndpoints?: string[]
    status?: string
  }
}

const projects: Project[] = [
  {
    title: "Cerebro Vault / MintMachine",
    description:
      "Immutable NFT launchpad with flat-fee minting, loyalty discounts, IPFS failover, and a Hardhat-tested Solidity suite ready for Base mainnet rollout.",
    image: "/cerebro.png",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Ethers.js",
      "Solidity",
      "Hardhat",
      "IPFS",
      "Sepolia",
      "Base L2",
      "Vercel"
    ],
    liveUrl: "https://cerebro-vault.vercel.app/"
  },
  {
    title: "Greconomist AI",
    description:
      "AI-powered Greek tax assistant pairing a FastAPI backend with a React 19 dashboard, GPT-4o financial guidance, and neumorphic analytics.",
    image: "/greconomist.png",
    technologies: [
      "FastAPI",
      "Python 3.9",
      "React 19",
      "TypeScript",
      "Material UI",
      "OpenAI GPT-4o-mini",
      "JWT Auth",
      "SQLAlchemy",
      "Pydantic v2",
      "Axios"
    ],
    githubUrl: "https://github.com/theofylaktos99/greconomist_mvp"
  },
  {
    title: "CyclopSoft ERP",
    description:
      "Construction ERP covering projects, budgets, CRM, and scheduling with end-to-end delivery across React frontends, Express services, and MongoDB.",
    image: "/cyclopsoft.png",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind CSS"
    ]
  },
  {
    title: "Invoice App B (Italian Corner)",
    description:
      "Greek tax-compliant invoicing suite with mock AADE myDATA integration, multi-branch operations, PDF exports, and resilient retry queues.",
    image: "/invoiceapp2.png",
    technologies: [
      "React 18",
      "Babel Standalone",
      "Tailwind CSS",
      "PDFMake",
      "LocalStorage",
      "Node.js",
      "Express.js",
      "CORS",
      "Mock AADE API"
    ],
    githubUrl: "https://github.com/theofylaktos99/italiancorner_invoice_app"
  },
  {
    title: "Invoice App A",
    description:
      "Production-ready invoicing MVP with localized UI, automated VAT logic, PDF previews, and browser persistence for Greek freelancers and SMEs.",
    image: "/invoiceapp1.png",
    technologies: [
      "React 19.1",
      "TypeScript 5.8",
      "Vite 7",
      "Tailwind CSS 3.4",
      "myDATA Mock",
      "LocalStorage",
      "Vercel"
    ],
    liveUrl: "https://invoice-ajns9k8tb-theofylaktos99s-projects.vercel.app"
  },
  {
    title: "My Gym App (Mock)",
    description:
      "Multilingual Flask demo for gym management: dashboard with member stats and live area monitoring, workout programs, and Ngrok-exposed room bookings. Built as an educational PoC with REST API endpoints to support bookings and live status.",
    image: "/mygym.png",
    technologies: [
      "Python 3",
      "Flask",
      "Jinja2",
      "HTML/CSS/JS",
      "pyngrok",
      "REST API"
    ],
    details: {
      purpose: "Multilingual Flask-based gym management demo for bookings, workouts and live area monitoring (Ngrok-ready).",
      coreFeatures: [
        "User authentication (Member ID + password)",
        "Multilingual interface (English & Greek)",
        "Dashboard: member stats & live area status",
        "Room booking with trainer selection and pricing",
        "REST API for gym data and bookings",
        "Ngrok integration for instant public access"
      ],
      architecture: [
        "gym_app.py — Flask routes, templates and API",
        "Jinja2 templates for server-side rendering",
        "In-memory storage (demo), Ngrok for public exposure"
      ],
      apiEndpoints: [
        "/api/gym-status",
        "/api/start-workout",
        "/api/complete-workout",
        "/api/book-room",
        "/api/cancel-booking",
        "/api/user-bookings",
        "/api/available-slots/<room_id>"
      ],
      status: "Functional demo (100% local + Ngrok-ready). Educational PoC; requires DB and security upgrades for production."
    },
    liveUrl: "https://gym-app-0308.onrender.com",
    liveLabel: "Try me"
  },
  {
    title: "WNG Hub",
    description:
      "Claymorphic ecosystem MVP blending AI, blockchain analytics, and creator-economy flows across a React 18 + FastAPI stack.",
    image: "/wng.png",
    technologies: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "ShadCN/UI",
      "React Router",
      "i18next",
      "React Query",
      "Three.js",
      "FastAPI",
      "PostgreSQL",
      "Docker"
    ],
    liveUrl: "https://deluxe-smakager-6c38ff.netlify.app",
    liveLabel: "Watch Frontend"
  },
  {
    title: "UnderDogs Platform",
    description:
      "Castle-themed team hub with portal-gate auth, JWT-secured FastAPI backend, and dashboards for announcements, tasks, and files.",
    image: "/underdogs.png",
    technologies: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "JWT Auth",
      "SQLite",
      "Netlify",
      "Railway"
    ],
    liveUrl: "https://famous-moonbeam-1630fd.netlify.app"
  },
  {
    title: "My Crypto Bots",
    description:
      "Modular Python trading lab with Streamlit dashboards, Binance testnet bots, and YAML-driven strategies for scalping, DCA, and grid campaigns.",
    image: "/20251010_0400_Crypto%20Bots%20Gathering_simple_compose_01k75szjatfyhvey7hezb58n6k.png",
    technologies: [
      "Python 3.11",
      "Streamlit",
      "FastAPI",
      "Pandas",
      "NumPy",
      "ccxt",
      "aiohttp",
      "requests",
      "python-dotenv",
      "PyYAML",
      "loguru",
      "schedule"
    ],
    githubUrl: "https://github.com/theofylaktos99/my_crypto_bots"
  },
  {
    title: "Talos AI",
    description:
      "First-month experiment blending Gemini and ChatGPT outputs into a unified landing page and establishing the baseline for AI-assisted builds.",
    image: "/talosai.png",
    technologies: ["HTML", "CSS", "Vanilla JS", "Gemini", "ChatGPT"]
    ,
    liveUrl: "https://talos-ai-frontend.netlify.app",
    liveLabel: "Live demo"
  }
]

const headerVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const ProjectsPage = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#0b0b0b", color: "#d0d0d0" }}
    >
      <div className="py-16 md:py-24" style={{ background: "#121212" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div
              className="tracking-[0.25em] uppercase text-xs mb-3"
              style={{ color: "#6DB2C7" }}
            >
              2024 – 2025 Timeline
            </div>
            <h1
              className="text-4xl lg:text-5xl font-bold mb-6"
              style={{ color: "#ffffff" }}
            >
              Ten builds across Web, AI, and Web3
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Each launch brought a different product challenge — from experimental AI
              interfaces to production-ready ERPs and decentralized minting experiences.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} {...project} index={index} />
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-lg mb-6">
                Curious about live demos or deeper walkthroughs?
              </p>
              <button
                className="inline-flex items-center px-8 py-4 rounded-full font-medium transition-all duration-200 border"
                style={{
                  backgroundColor: "#6DB2C7",
                  color: "#0b0b0b",
                  borderColor: "rgba(255, 255, 255, 0.1)"
                }}
                onClick={() => {
                  trackEvent("button_click", { label: "projects_request_walkthrough" })
                  window.open(
                    "mailto:theofylaktos99@gmail.com?subject=Project%20Showcase%20Request",
                    "_self"
                  )
                }}
              >
                Request a walkthrough
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
