"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function FloatingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-40 flex justify-center">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={navVariants}
        className={cn("px-4 py-3 rounded-full transition-all duration-300 flex items-center justify-between", scrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-background/60 backdrop-blur-sm")}
        style={{ width: "auto", minWidth: "320px" }}
      >
        <Link href="/" className="text-foreground hover:text-primary transition-colors">
          <Home className="h-5 w-5" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 mx-6">
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden mx-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="px-0 hover:bg-transparent">
                <span className="font-medium">portfolio</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="pt-16">
              <div className="flex flex-col space-y-4 items-center">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href} className="text-lg font-medium hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Theme Toggle */}
        {mounted && (
          <Button variant="ghost" size="icon" className="rounded-full w-8 h-8 hover:bg-muted/50" onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={resolvedTheme} initial={{ scale: 0.5, opacity: 0, rotate: -30 }} animate={{ scale: 1, opacity: 1, rotate: 0 }} exit={{ scale: 0.5, opacity: 0, rotate: 30 }} transition={{ duration: 0.2 }}>
                {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </motion.div>
            </AnimatePresence>
          </Button>
        )}
      </motion.nav>
    </div>
  );
}
