"use client";

import { motion } from "framer-motion";
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
          <motion.h2 className="text-3xl font-bold mb-6 text-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
            Hello There
          </motion.h2>
          <div className="space-y-4">
            <motion.p custom={1} initial="hidden" animate="visible" variants={paragraphVariants}>
              I&#39;m Aji Syamsul Rizal, a web developer specializing in modern front-end technologies like React.js, Next.js, and Tailwind CSS, with backend experience using Node.js and Express.js. With over four years of experience
              through personal projects and freelance work, I&#39;m passionate about blockchain technology and actively exploring the world of web3 development.
            </motion.p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
