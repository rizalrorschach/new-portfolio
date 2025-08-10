"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "./animated-section";
import { motion } from "framer-motion";
import { MovingBorder } from "./moving-border";

export default function Skills() {
  const skillsData = [
    {
      category: "Frontend",
      skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
    },
    {
      category: "Backend",
      skills: ["Next.js API Routes", "Node.js", "Express", "PostgreSQL", "REST API"],
    },
    {
      category: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Docker", "Stripe"],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
      },
    }),
  };

  return (
    <section id="skills" className="py-20">
      <AnimatedSection>
        <motion.h2 className="text-3xl font-bold mb-10 text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skillsData.map((category, categoryIndex) => (
            <motion.div key={category.category} custom={categoryIndex} initial="hidden" animate="visible" variants={cardVariants} className="h-full">
              <div className="relative h-full overflow-hidden bg-transparent p-[1px] rounded-xl">
                <div className="absolute inset-0">
                  <MovingBorder duration={7000} rx="30%" ry="30%">
                    <div className="h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.8]" />
                  </MovingBorder>
                </div>
                <Card className="relative h-full bg-background/80 backdrop-blur-xl">
                  <CardHeader>
                    <CardTitle>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div key={skill} custom={skillIndex} initial="hidden" animate="visible" variants={badgeVariants} whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
                          <Badge variant="secondary" className="bg-background/20 hover:bg-background/30">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
