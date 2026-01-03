import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Layout,
  Database,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SOCIAL_LINKS } from "@/constants/links";
import { Typewriter } from "@/components/ui/Typewriter";
import { Particles } from "@/components/Particles";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-20 hero-gradient overflow-hidden"
    >
      <Particles />
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.div variants={fadeInUp}>
            <Badge
              variant="outline"
              className="px-4 py-2 text-primary border-primary/20 bg-primary/10 rounded-full text-sm"
            >
              Available for hire
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold font-heading leading-tight min-h-[1.2em]"
          >
            <Typewriter
              words={[
                "Building Digital Experiences",
                "Creating Modern Web Apps",
                "Developing Scalable Solutions",
                "Crafting Beautiful Interfaces",
              ]}
              className="text-gradient"
            />{" "}
            that Matter.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-muted-foreground max-w-lg min-h-[1.5em]"
          >
            I'm a{" "}
            <Typewriter
              words={[
                "Full Stack Developer",
                "React Specialist",
                "Next.js Expert",
                "Problem Solver",
              ]}
              className="text-primary font-semibold"
              typingSpeed={80}
              deletingSpeed={40}
            />{" "}
            specializing in building exceptional digital experiences. Currently
            focused on accessible, human-centered products.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8"
              asChild
            >
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/10 hover:bg-white/5 rounded-full px-8"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex gap-6 pt-8 text-muted-foreground"
          >
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:block"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <Card className="bg-card/50 backdrop-blur border-white/5 translate-y-12 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center justify-center h-48">
                <Code2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg">Clean Code</h3>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  Maintainable & scalable architecture
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-white/5 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center justify-center h-48">
                <Layout className="h-12 w-12 text-secondary mb-4" />
                <h3 className="font-heading font-bold text-lg">Responsive</h3>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  Pixel perfect on any device
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-white/5 translate-y-12 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center justify-center h-48">
                <Database className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="font-heading font-bold text-lg">Full Stack</h3>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  End-to-end development
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-white/5 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 flex flex-col items-center justify-center h-48">
                <Terminal className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="font-heading font-bold text-lg">Modern Tech</h3>
                <p className="text-sm text-muted-foreground text-center mt-2">
                  Latest frameworks & tools
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
