import { Code2, Brain, Database, Terminal, Cpu, Globe, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeInUp, StaggerContainer, StaggerItem, ScaleIn } from "@/components/ui/motion";
const skills = [{
  name: "JavaScript / TypeScript",
  icon: Code2
}, {
  name: "Python",
  icon: Terminal
}, {
  name: "React / Next.js",
  icon: Globe
}, {
  name: "AI / Machine Learning",
  icon: Brain
}, {
  name: "SQL / Databases",
  icon: Database
}, {
  name: "Node.js / APIs",
  icon: Cpu
}];
export const About = () => {
  return <section id="about" className="py-24 md:py-32 relative">
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeInUp className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            About Me
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
            Driven by Curiosity, Built on Code
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforming ideas into intelligent digital solutions through continuous learning and innovation.
          </p>
        </FadeInUp>



        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <FadeInUp className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm <span className="text-foreground font-medium">Abdulrahman Daud</span>, an <span className="text-foreground font-medium">AI Software Engineer and Web Developer</span> with
              a strong foundation built through the <span className="text-foreground font-medium">Power Learn Project (PLP)</span> —
              an intensive program that equipped me with modern development skills and a problem-solving mindset.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My expertise spans <span className="text-foreground font-medium">full-stack web development</span> and
              <span className="text-foreground font-medium"> AI integration</span>, enabling me to build intelligent
              applications that automate workflows, enhance user experiences, and deliver measurable business value.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I am passionate about <span className="text-foreground font-medium">continuous learning</span> and
              staying at the forefront of emerging technologies. My goal is to create real-world solutions that
              make a meaningful impact — from smart chatbots to scalable web platforms.
            </p>

            {/* Resume Download Button */}
            <div className="pt-4">
              <Button asChild size="lg" className="gap-2">
                <a href="/resume.pdf" download="Resume.pdf">
                  <Download size={18} />
                  Download Resume
                </a>
              </Button>
            </div>
          </FadeInUp>

          {/* Skills Grid */}
          <StaggerContainer className="grid grid-cols-2 gap-4">
            {skills.map(skill => <StaggerItem key={skill.name}>
              <div className="gradient-border p-5 group hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <skill.icon size={22} />
                  </div>
                  <span className="font-medium text-foreground text-sm leading-tight pt-1">
                    {skill.name}
                  </span>
                </div>
              </div>
            </StaggerItem>)}
          </StaggerContainer>
        </div>
      </div>
    </div>
  </section>;
};