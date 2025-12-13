import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30">
      <div className="container mx-auto px-6">
          <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-heading mb-4">Featured <span className="text-secondary">Projects</span></motion.h2>
          <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl">
            Showcasing some of my best work in web development and design.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden bg-card border-white/5 group h-full flex flex-col">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-heading font-bold text-4xl">
                    Project {project}
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">Project Name {project}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    A modern web application built with Next.js and Tailwind CSS. Features real-time updates, authentication, and a responsive design.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="secondary" className="bg-white/5 hover:bg-white/10 text-white border-none">React</Badge>
                    <Badge variant="secondary" className="bg-white/5 hover:bg-white/10 text-white border-none">Node.js</Badge>
                    <Badge variant="secondary" className="bg-white/5 hover:bg-white/10 text-white border-none">Postgres</Badge>
                  </div>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="w-full border-white/10 hover:bg-white/5">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Button>
                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
