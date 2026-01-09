import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

import neuralCloakImg from "@/assets/neural-cloak.png";
import homeConnectImg from "@/assets/home-connect.png";
import whisprImg from "@/assets/whispr.png";

const projects = [
  {
    title: "Neural-Cloak",
    description: "A privacy-first tool that applies invisible adversarial perturbations to images to disrupt AI face-detection and deepfake pipelines. Features in-memory processing and aggressive disruption modes.",
    techStack: ["Python", "Streamlit", "OpenCV", "Machine Learning"],
    github: "https://github.com/okizman09/Neural-Cloak",
    live: "https://neural-cloak.streamlit.app/",
    category: "AI & Security",
    image: neuralCloakImg
  },
  {
    title: "HomeConnect",
    description: "A comprehensive platform connecting landlords and tenants. Features real-time chat, property listings, and secure user authentication.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    github: "https://github.com/okizman09/HomeConnect",
    live: "https://home-connect-gamma.vercel.app/",
    category: "Full Stack Web App",
    image: homeConnectImg
  },
  {
    title: "Whispr",
    description: "A secure communication tool focused on privacy and anonymity.",
    techStack: ["React", "Node.js", "Encryption"],
    github: "https://github.com/okizman09/Whispr",
    live: "https://whispr-brown.vercel.app/",
    category: "Privacy & Security",
    image: whisprImg
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <FadeInUp className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              My Work
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in web development, AI integration, and building scalable solutions.
            </p>
          </FadeInUp>

          {/* Projects Grid */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <StaggerItem key={project.title}>
                <article className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full">
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Image */}
                  <div className="h-44 bg-secondary flex items-center justify-center relative overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          // Fallback if image not found
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.parentElement?.classList.add('bg-gradient-to-br', 'from-secondary', 'to-card');
                        }}
                      />
                    ) : null}
                    {/* Fallback Overlay or Gradient if image fails or doesn't exist (handled by error above mostly, but kept for structure) */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(187_92%_44%_/_0.15)_0%,_transparent_70%)] pointer-events-none" />
                    <span className="font-display text-3xl font-bold text-muted-foreground/20 absolute">
                      {project.title.split(" ")[0]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-medium bg-secondary border border-border text-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* View More */}
          <FadeInUp delay={0.3} className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:border-primary hover:bg-secondary"
              asChild
            >
              <a
                href="https://github.com/okizman09"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2" size={18} />
                View All Projects on GitHub
              </a>
            </Button>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};
