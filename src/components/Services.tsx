import { Globe, Briefcase, Layout, Bot, Sparkles, Settings, Server, Zap } from "lucide-react";
import { FadeInUp, StaggerContainer, StaggerItem } from "@/components/ui/motion";

const services = [
  {
    icon: Briefcase,
    title: "Business Websites",
    description: "Professional, conversion-focused websites that establish your brand's online presence and help you reach more customers.",
  },
  {
    icon: Globe,
    title: "Portfolio Websites",
    description: "Stunning personal portfolios that showcase your work, skills, and achievements to attract opportunities and clients.",
  },
  {
    icon: Layout,
    title: "Web Applications",
    description: "Custom web applications tailored to your business needs—from dashboards to e-commerce platforms and booking systems.",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent chatbots that automate customer support, answer FAQs, and engage visitors 24/7—saving you time and resources.",
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    description: "Enhance your applications with AI-powered features like content generation, smart recommendations, and data analysis.",
  },
  {
    icon: Zap,
    title: "Website Optimization",
    description: "Boost your site's speed, SEO, and performance to improve user experience and search engine rankings.",
  },
  {
    icon: Server,
    title: "Hosting & Deployment",
    description: "Reliable hosting solutions and seamless deployment to keep your website fast, secure, and always online.",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Ongoing website maintenance, updates, and technical support to ensure your site stays current and problem-free.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <FadeInUp className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              What I Offer
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Services & Solutions
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end web development and AI solutions tailored to help businesses and professionals achieve their goals.
            </p>
          </FadeInUp>

          {/* Services Grid */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <div className="group relative bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <service.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
