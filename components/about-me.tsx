"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./animated-section";

export default function AboutMe() {
  const paragraphVariants = {
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

  return (
    <section id="about" className="py-20">
      <AnimatedSection>
        <div className="max-w-3xl mx-auto">
          <motion.h2 className="text-3xl font-bold mb-6 text-left md:text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            Hello There
          </motion.h2>
          <div className="space-y-4">
            <motion.p custom={1} initial="hidden" animate="visible" variants={paragraphVariants}>
            I&#39;m Aji Syamsul Rizal, a product-minded web developer focused on building full-stack applications with React, Next.js, and Laravel. I specialize in creating intuitive user interfaces and robust backend systems that solve real-world problems. My goal is to translate complex business requirements into clean, scalable, and efficient code. I am currently exploring emerging technologies and am actively seeking a full-stack or front-end developer role.
            </motion.p>
            <motion.div 
              custom={2} 
              initial="hidden" 
              animate="visible" 
              variants={paragraphVariants}
              className="flex justify-start md:justify-center pt-4"
            >
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground mt-3"
              >
                <a 
                  href="/AjiSyamsulRizal-CV-2025.pdf" 
                  download="AjiSyamsulRizal-CV-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
