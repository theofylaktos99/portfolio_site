"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  liveLabel?: string
  index: number
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  liveLabel = "Live Demo",
  index
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-3xl overflow-hidden transition-transform duration-300 border group hover:z-40 group-hover:scale-[1.03]"
      style={{ 
        backgroundColor: "rgba(255, 255, 255, 0.05)", 
        borderColor: "rgba(255, 255, 255, 0.1)" 
      }}
    >
      <div
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-[#111111] flex items-center justify-center"
      >
        <div
          className="w-full h-full"
          onClick={() => trackEvent("button_click", { label: `project_image_${title}` })}
        >
          <Image
            src={image}
            alt={title}
            fill
            unoptimized
            className="object-contain transition-transform duration-300 lg:group-hover:scale-105"
          />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2" style={{ color: "#ffffff" }}>{title}</h3>
        <p className="mb-4 leading-relaxed" style={{ color: "#d0d0d0" }}>{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full border"
              style={{ 
                backgroundColor: "rgba(109, 178, 199, 0.1)", 
                color: "#6DB2C7",
                borderColor: "rgba(109, 178, 199, 0.3)"
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {githubUrl && (
              <Button 
              variant="outline" 
              size="sm" 
              className="border rounded-full text-white hover:scale-105 transition-all duration-200"
              style={{ 
                borderColor: "rgba(255, 255, 255, 0.2)",
                backgroundColor: "transparent"
              }}
              onClick={() => { trackEvent("button_click", { label: `project_code_${title}` }); window.open(githubUrl, '_blank', 'noopener,noreferrer') }}
            >
              <Github size={16} className="mr-2" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button 
              size="sm" 
              className="rounded-full font-medium hover:scale-105 transition-all duration-200"
              style={{ 
                backgroundColor: "#6DB2C7", 
                color: "#0b0b0b"
              }}
              onClick={() => { trackEvent("button_click", { label: `project_live_${title}` }); window.open(liveUrl, '_blank', 'noopener,noreferrer') }}
            >
              <ExternalLink size={16} className="mr-2" />
              {liveLabel}
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
