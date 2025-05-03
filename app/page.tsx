import AboutMe from "@/components/about-me";
import FloatingNavbar from "@/components/floating-navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNavbar />
      <main className="container mx-auto px-4 py-20">
        <AboutMe />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}
