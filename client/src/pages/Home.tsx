import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Code2, Database, Layout, Terminal, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

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

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Home() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold font-heading tracking-tight"
          >
            Dev<span className="text-primary">.</span>Portfolio
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground"
          >
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden"
          >
            <Button variant="ghost" size="icon">
              <span className="sr-only">Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </Button>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 hero-gradient">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="px-4 py-2 text-primary border-primary/20 bg-primary/10 rounded-full text-sm">
                Available for hire
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold font-heading leading-tight">
              Building <span className="text-gradient">Digital Experiences</span> that Matter.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-muted-foreground max-w-lg">
              I'm a Full Stack Developer specializing in building exceptional digital experiences. Currently focused on accessible, human-centered products.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8" asChild>
                <a href="#projects">View Projects <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 rounded-full px-8" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="flex gap-6 pt-8 text-muted-foreground">
              <a href="#" className="hover:text-white transition-colors"><Github className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><Mail className="h-6 w-6" /></a>
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
                    <p className="text-sm text-muted-foreground text-center mt-2">Maintainable & scalable architecture</p>
                 </CardContent>
               </Card>
               <Card className="bg-card/50 backdrop-blur border-white/5 hover:border-primary/50 transition-colors">
                 <CardContent className="p-6 flex flex-col items-center justify-center h-48">
                    <Layout className="h-12 w-12 text-secondary mb-4" />
                    <h3 className="font-heading font-bold text-lg">Responsive</h3>
                    <p className="text-sm text-muted-foreground text-center mt-2">Pixel perfect on any device</p>
                 </CardContent>
               </Card>
               <Card className="bg-card/50 backdrop-blur border-white/5 translate-y-12 hover:border-primary/50 transition-colors">
                 <CardContent className="p-6 flex flex-col items-center justify-center h-48">
                    <Database className="h-12 w-12 text-purple-500 mb-4" />
                    <h3 className="font-heading font-bold text-lg">Full Stack</h3>
                    <p className="text-sm text-muted-foreground text-center mt-2">End-to-end development</p>
                 </CardContent>
               </Card>
               <Card className="bg-card/50 backdrop-blur border-white/5 hover:border-primary/50 transition-colors">
                 <CardContent className="p-6 flex flex-col items-center justify-center h-48">
                    <Terminal className="h-12 w-12 text-green-500 mb-4" />
                    <h3 className="font-heading font-bold text-lg">Modern Tech</h3>
                    <p className="text-sm text-muted-foreground text-center mt-2">Latest frameworks & tools</p>
                 </CardContent>
               </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold font-heading mb-4">Technical <span className="text-primary">Skills</span></motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable web applications.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"], icon: Layout, color: "text-blue-400" },
              { title: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "Prisma", "Redis"], icon: Terminal, color: "text-green-400" },
              { title: "DevOps", skills: ["Docker", "AWS", "CI/CD", "Git", "Nginx"], icon: Code2, color: "text-orange-400" },
              { title: "Design", skills: ["Figma", "UI/UX", "Responsive", "Accessibility", "Prototyping"], icon: Database, color: "text-purple-400" }
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
                    <div className={`mb-4 p-3 rounded-lg bg-white/5 w-fit ${category.color}`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-4">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <li key={i} className="flex items-center text-muted-foreground text-sm">
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

      {/* Projects Section */}
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

      {/* Experience Section */}
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card/20 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6 text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading">Get in <span className="text-secondary">Touch</span></h2>
            <p className="text-muted-foreground text-lg">
              Have a project in mind or want to say hi? I'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur border-white/5">
              <CardContent className="p-8">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-background/50 border-white/10 focus:border-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} className="bg-background/50 border-white/10 focus:border-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell me about your project..." className="min-h-[120px] bg-background/50 border-white/10 focus:border-primary" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-6 text-lg">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-sm text-muted-foreground bg-background">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2024 Dev Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-primary transition-colors">Twitter</a>
             <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
             <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
