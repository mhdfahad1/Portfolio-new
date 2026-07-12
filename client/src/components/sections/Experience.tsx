import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold font-heading mb-16 text-center"
        >
          Work <span className="text-primary">Experience</span>
        </motion.h2>

        <div className="space-y-12">
          {[
            {
              role: "Full Stack Developer",
              company: "NewAgeSys Solutions",
              period: "March 2026 - Present",
              description:
                "Working as a full-stack developer, building modern web applications, contributing to both frontend and backend development, and collaborating closely with teams to deliver scalable and user-focused solutions.",
            },
            {
              role: "Software Engineer",
              company: "Bluecast Technologies",
              period: "February 2024 - March 2026",
              description:
                "Contributed to all phases of the development lifecycle, from client meetings to code delivery. Developed scalable, maintainable software solutions, adhered to best coding practices, and collaborated with cross-functional teams to troubleshoot and optimize systems.",
            },
            {
              role: "Intern",
              company: "Luminar Technologies",
              period: "May 2023 - Dec 2023",
              description:
                "Gained hands-on experience in full-stack web development using the MERN stack. Built real-world projects, enhancing both frontend and backend skills. Learned project collaboration and teamwork in a fast-paced environment.",
            },
          ].map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-white/10 hover:border-primary transition-colors duration-300"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-background border-2 border-primary" />
              <div className="mb-1 text-sm text-primary font-mono">
                {job.period}
              </div>
              <h3 className="text-xl font-bold font-heading">{job.role}</h3>
              <div className="text-lg text-white/80 mb-2">{job.company}</div>
              <p className="text-muted-foreground">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
