import { Github, Linkedin, Mail } from "lucide-react";
import okizmanLogo from "@/assets/okizman-logo.png";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/okizman09",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/abdulrahman-daud-671956243/",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:okizmaofficial@gmail.com",
    label: "Email",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={okizmanLogo} alt="Okizman Designs" className="h-8 w-auto" />
            <span className="font-display text-lg font-semibold text-foreground">Okizman Designs</span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-all"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Abdulrahman Daud
          </p>
        </div>
      </div>
    </footer>
  );
};
