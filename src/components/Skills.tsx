import { Code2, Server, Brain, Wrench } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Backend / Programming",
    icon: Server,
    skills: ["Python", "Node.js", "REST APIs", "SQL", "PostgreSQL", "Express.js", "FastAPI"],
  },
  {
    title: "AI & Automation",
    icon: Brain,
    skills: ["Gemini AI API", "LangChain", "Prompt Engineering", "Chatbot Development", "AI Integration", "Workflow Automation"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify", "Supabase", "Figma"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <FadeInUp className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Technical Skills
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              My Tech Stack
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications and intelligent solutions.
            </p>
          </FadeInUp>

          {/* Skills Grid */}
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <StaggerItem key={category.title}>
                <div className="gradient-border p-6 md:p-8 hover:scale-[1.02] transition-transform duration-300 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <category.icon size={28} />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-secondary border border-border text-sm text-foreground hover:bg-primary/10 hover:border-primary/50 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
