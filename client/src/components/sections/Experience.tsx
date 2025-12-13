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
            { role: "Senior Frontend Engineer", company: "Tech Solutions Inc.", period: "2023 - Present", description: "Leading the frontend team in building scalable React applications. Improved performance by 40% and implemented a new design system." },
            { role: "Full Stack Developer", company: "Creative Agency", period: "2021 - 2023", description: "Developed full-stack web solutions for diverse clients. Utilized Next.js, Node.js, and AWS to deliver high-quality products." },
            { role: "Junior Developer", company: "StartUp Hub", period: "2020 - 2021", description: "Collaborated with senior developers to build and maintain user interfaces. Learned modern web development practices and agile methodologies." }
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
              <div className="mb-1 text-sm text-primary font-mono">{job.period}</div>
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
