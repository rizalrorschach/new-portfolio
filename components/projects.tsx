"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./animated-section";
import { motion } from "framer-motion";
import { MovingBorder } from "./moving-border";

export default function Projects() {
  const projects = [
    {
      title: "ChessMaster Academy",
      description: "A full-stack, subscription-based SaaS platform for chess players. Features an interactive PGN-based learning interface, secure payment processing with Stripe, and a complete user management system with Supabase.",
      tags: ["Next.js", "Tailwind CSS", "Supabase", "Stripe", "TypeScript"],
      image: "/chess.png?height=200&width=400",
      github: "https://github.com/rizalrorschach/pawnhub",
      demo: "https://chess.rizalize.com/",
    },
    {
      title: "Verona E-Commerce Platform",
      description: "A responsive e-commerce storefront for a local business, featuring a product catalog, shopping cart, and a unique WhatsApp-based checkout system for streamlined order processing. Includes a full CRUD admin dashboard.",
      tags: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript", "Cloudinary"],
      image: "/verona.png?height=200&width=400",
      github: "https://github.com/rizalrorschach/verona",
      demo: "https://verona.rizalize.com/",
    },
    {
      title: "ClipRoom: Real-Time Clipboard Sharing",
      description: "A real-time utility for instant, cross-device clipboard sharing using Supabase Realtime Channels. Features drag-and-drop image transfers and ephemeral rooms that are auto-deleted after 24 hours for privacy.",
      tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Realtime"],
      image: "/cliproom.png?height=200&width=400",
      github: "https://github.com/rizalrorschach/clip-room",
      demo: "https://clip.rizalize.com/",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="projects" className="py-20">
      <AnimatedSection>
        <motion.h2 className="text-3xl font-bold mb-10 text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="h-full"
            >
              <div className="relative overflow-hidden bg-transparent p-[1px] rounded-xl h-full">
                <div className="absolute inset-0">
                  <MovingBorder duration={7000} rx="0.75rem" ry="0.75rem">
                    <div className="h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]" />
                  </MovingBorder>
                </div>
                <Card className="relative overflow-hidden flex flex-col h-full bg-background/80 backdrop-blur-xl rounded-xl">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  </div>
                  <CardHeader className="flex-shrink-0">
                    <CardTitle className="line-clamp-2">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <motion.span key={tag} className="px-2 py-1 bg-muted text-xs rounded-md" whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2 flex-shrink-0">
                    {project.title === "ChessMaster Academy" || project.title === "Verona E-Commerce Platform" ? (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button variant="outline" size="sm" disabled>
                                <Github className="h-4 w-4 mr-2" />
                                Code (Private)
                              </Button>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Enterprise Platform - Code Restricted</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      </motion.div>
                    )}
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}