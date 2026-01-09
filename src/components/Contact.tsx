import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeInUp, ScaleIn } from "@/components/ui/motion";
import { useState } from "react";
import { toast } from "sonner";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "okizmaofficial@gmail.com",
    href: "mailto:okizmaofficial@gmail.com",
    description: "Best for project inquiries",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect with me",
    href: "https://www.linkedin.com/in/abdulrahman-daud-671956243/",
    description: "For collaborations & opportunities",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@okizman09",
    href: "https://github.com/okizman09",
    description: "View my code & projects",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xovnbzyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again or email directly.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <FadeInUp className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Let's Connect
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Start a Conversation
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you're looking for a new website, exploring AI solutions, or seeking a collaboration—I'm here to help.
              Reach out for projects, partnerships, or job opportunities.
            </p>
          </FadeInUp>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <FadeInUp className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground mb-6">
                  Prefer a direct conversation? Reach out through any of these channels.
                </p>
                <div className="space-y-4">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 hover:bg-secondary transition-all group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <link.icon size={22} />
                      </div>
                      <div>
                        <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                          {link.value}
                        </p>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <div className="gradient-border p-6">
                <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                  Open to Opportunities
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  I'm available for freelance projects, collaborations, and full-time opportunities. Let's create something impactful together.
                </p>
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                  asChild
                >
                  <a href="mailto:okizmaofficial@gmail.com">
                    <Mail className="mr-2" size={18} />
                    Get in Touch
                  </a>
                </Button>
              </div>
            </FadeInUp>

            {/* Contact Form */}
            <ScaleIn className="bg-card rounded-xl border border-border p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={18} />
                    </>
                  )}
                </Button>
              </form>
            </ScaleIn>
          </div>
        </div>
      </div>
    </section>
  );
};
