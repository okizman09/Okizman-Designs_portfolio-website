import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profilePic from "@/assets/profilepic.png";
export const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
    {/* Background Effects */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(187_92%_44%_/_0.1)_0%,_transparent_50%)]" />
    <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for new projects</span>
        </motion.div>

        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl ring-2 ring-primary/10">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.1] mb-6">
          <span className="block">AI Software Engineer</span>
          <span className="block gradient-text">&amp; Web Developer</span>
        </motion.h1>

        {/* Value Statement */}
        <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }} className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          I build <span className="text-foreground font-semibold">intelligent, scalable web solutions</span> that
          transform ideas into powerful digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-10 py-6 text-lg group" onClick={() => document.querySelector("#projects")?.scrollIntoView({
            behavior: "smooth"
          })}>
            View Projects
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold px-10 py-6 text-lg" onClick={() => document.querySelector("#contact")?.scrollIntoView({
            behavior: "smooth"
          })}>
            Contact Me
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.5
        }} className="flex items-center justify-center gap-6">
          <a href="https://github.com/okizman09" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-lg" aria-label="GitHub">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/abdulrahman-daud-671956243/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-lg" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="mailto:okizmaofficial@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-secondary rounded-lg" aria-label="Email">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}

    </div>
  </section>;
};