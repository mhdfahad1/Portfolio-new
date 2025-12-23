import { motion } from "framer-motion";
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
      staggerChildren: 0.12,
    },
  },
};

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    image: "/certifications/aws-cloud-practitioner.png",
    description:
      "Fundamental understanding of AWS cloud concepts, security, pricing, and core services.",
  },
  {
    title: "Meta Front-End Developer",
    image: "/certifications/meta-frontend.png",
    description:
      "Specialized in building responsive, accessible, and performant front-end experiences.",
  },
  {
    title: "Google Professional Cloud Developer",
    image: "/certifications/google-cloud-developer.png",
    description:
      "Designed, built, and deployed scalable applications on Google Cloud following best practices.",
  },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 bg-card/20 border-t border-white/5"
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
            Professional <span className="text-secondary">Certifications</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Verified credentials that back my skills with industry-recognized
            certifications.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/40 border-white/5 hover:border-primary/60 transition-colors duration-300 overflow-hidden">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="relative h-40 w-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="h-full w-full object-contain p-4 mix-blend-screen"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <h3 className="text-lg font-heading font-semibold">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
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
