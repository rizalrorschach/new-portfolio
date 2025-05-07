"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./animated-section";
import { motion } from "framer-motion";
import { MovingBorder } from "./moving-border";

export default function Projects() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website showcasing skills, projects, and professional journey with dark/light mode and smooth animations.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      image: "/portfolio.png?height=200&width=400",
      github: "https://github.com/rizalrorschach/portfolio-restu",
      demo: "https://www.restu.my.id/",
    },
    {
      title: "Expo Event Website",
      description: "A dynamic website for a educational exhibition event featuring schedule management, speaker profiles, and ticket registration.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      image: "/expo.png?height=200&width=400",
      github: "https://github.com/rizalrorschach/twb-expo",
      demo: "https://www.twbexpo.my.id/",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            >
              <div className="relative overflow-hidden bg-transparent p-[1px] rounded-xl">
                <div className="absolute inset-0">
                  <MovingBorder duration={7000} rx="30%" ry="30%">
                    <div className="h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]" />
                  </MovingBorder>
                </div>
                <Card className="relative overflow-hidden flex flex-col h-full bg-background/80 backdrop-blur-xl">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <motion.span key={tag} className="px-2 py-1 bg-muted text-xs rounded-md" whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex gap-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
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
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative overflow-hidden bg-transparent p-[1px] rounded-xl">
              <div className="absolute inset-0">
                <MovingBorder duration={7000} rx="30%" ry="30%">
                  <div className="h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]" />
                </MovingBorder>
              </div>
              <Card className="relative overflow-hidden flex flex-col h-full bg-background/80 backdrop-blur-xl border-dashed border-2">
                <div className="relative h-48 w-full overflow-hidden bg-muted/30 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="text-4xl font-bold text-muted-foreground/50"
                  >
                    Coming Soon
                  </motion.div>
                </div>
                <CardHeader>
                  <CardTitle>Wedding Invitation</CardTitle>
                  <CardDescription>A modern wedding invitation website featuring personalized guest experiences, elegant templates, and advanced web technologies for a seamless celebration.</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Express.js", "PostgreSQL", "REST API"].map((tag) => (
                      <motion.span key={tag} className="px-2 py-1 bg-muted text-xs rounded-md" whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 opacity-50">
                  <Button variant="outline" size="sm" disabled>
                    In Progress
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  );
}