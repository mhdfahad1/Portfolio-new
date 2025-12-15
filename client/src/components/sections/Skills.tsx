import { motion } from "framer-motion";
import {
  Layout,
  Terminal,
  Code2,
  Database,
  Palette,
  Server,
  Settings,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold font-heading mb-4"
          >
            Technical <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive toolkit for building modern, scalable web
            applications.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            {
              title: "Frontend",
              skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "TanStack React Query",
                "React Hook Form",
                "Microfrontend",
              ],
              icon: Layout,
              color: "text-blue-400",
            },
            {
              title: "UI Libraries",
              skills: [
                "Tailwind CSS",
                "Mantine UI",
                "Shadcn UI",
                "Material UI",
                "Bootstrap",
              ],
              icon: Palette,
              color: "text-purple-400",
            },
            {
              title: "Backend",
              skills: ["Node.js", "Express.js", "Nestjs", "Fastify"],
              icon: Terminal,
              color: "text-green-400",
            },
            {
              title: "Databases",
              skills: ["MongoDB", "NoSQL", "SQL", "Prisma", "TypeORM"],
              icon: Database,
              color: "text-orange-400",
            },
            {
              title: "DevOps & Tools",
              skills: [
                "Git/GitHub",
                "Socket",
                "FCM",
                "Microservices",
                "Deployment(CI/CD)",
                "gRPC",
              ],
              icon: Settings,
              color: "text-cyan-400",
            },
          ].map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/30 border-white/5 hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6">
                  <div
                    className={`mb-4 p-3 rounded-lg bg-white/5 w-fit ${category.color}`}
                  >
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-4">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="flex items-center text-muted-foreground text-sm"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
