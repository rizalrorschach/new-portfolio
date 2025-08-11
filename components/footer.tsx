"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className=" py-8">
      <div className="container mx-auto px-4">
        <motion.div className="flex flex-col items-center justify-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={footerVariants}>
          <div className="flex space-x-6 mb-4">
            <motion.div variants={itemVariants} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="https://github.com/rizalrorschach" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="https://www.linkedin.com/in/ajsymrzl/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
              <Link href="mailto:rizalrorschach@gmail.com" className="hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </div>
          <motion.p variants={itemVariants} className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aji Syamsul Rizal. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
