import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECT_LINKS } from "@/constants/links";

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
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold font-heading mb-4"
          >
            Featured <span className="text-secondary">Projects</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground max-w-2xl"
          >
            Showcasing some of my best work in web development and design.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "CRM Management System",
              description:
                "A comprehensive platform with WhatsApp, Instagram, and Email integration for managing leads and support tickets, streamlining workflows, and scheduling customer communication through an intuitive interface.",
              technologies: [
                "Mantine UI",
                "Tailwind CSS",
                "Next.js",
                "NestJS",
                "TypeORM",
                "PostgreSQL",
                "TanStack React Query",
              ],
              links: PROJECT_LINKS.crm,
            },
            {
              title: "Personal Finance & Investment Management System",
              description:
                "The Personal Finance & Investment Management System is a modern and intuitive platform designed to help individuals and businesses track expenses, manage investments, and make data-driven financial decisions. The system provides a seamless user experience with real-time insights, budget planning, and portfolio management, enabling users to achieve financial stability and growth.",
              technologies: [
                "Shadcn UI",
                "Tailwind CSS",
                "Next.js",
                "Prisma",
                "uploadthing",
                "TanStack React Query",
              ],
              links: PROJECT_LINKS.finance,
            },
            {
              title: "Doctor-Patient Questionnaire & Attending System",
              description:
                "The Doctor-Patient Questionnaire & Attending System is a digital platform designed to streamline patient consultations by collecting pre-appointment medical information through interactive questionnaires. It helps doctors make informed decisions by analyzing patient responses and providing an efficient attending system for developed healthcare management.",
              technologies: [
                "Shadcn UI",
                "Tailwind CSS",
                "Next.js",
                "TanStack React Query",
              ],
              links: PROJECT_LINKS.doctor,
            },
            {
              title: "Workmen Productivity Management",
              description:
                "A comprehensive platform for task assignment, allocation, and status updates, built using Microfrontend and Microservice architectures. It allows managers to assign tasks to workers, track progress, and update task statuses efficiently. The system also supports multi-language translation, ensuring clear communication across diverse teams and improving overall operational efficiency.",
              technologies: [
                "Shadcn UI",
                "Tailwind CSS",
                "Next.js",
                "TanStack React Query",
                "Prisma",
              ],
              links: PROJECT_LINKS.workmen,
            },
            {
              title: "VIWO - Virtual Work Force",
              description:
                "This project is built to let users complete various tasks through a chat-based agent. The agent reads the user's messages, understands the required action, and calls the appropriate APIs to perform tasks such as searching, updating, creating, or completing workflows. Any process — like bookings, payments, or reservations — can be done interactively through simple conversation.",
              technologies: [
                "Shadcn UI",
                "Tailwind CSS",
                "Next.js",
                "TanStack React Query",
                "Python",
              ],
              links: PROJECT_LINKS.viwo,
            },
          ].map((project, index) => (
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
                  <div className="absolute inset-0 flex items-center justify-center text-white/10 font-heading font-bold text-2xl px-4 text-center">
                    {project.title}
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-white/5 hover:bg-white/10 text-white border-none"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-white/10 hover:bg-white/5"
                      asChild
                    >
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="w-full bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
                      </a>
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
