import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { siteContent } from "@/config/content";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const socialIcons = {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn: Linkedin,
};

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-brand-primary text-brand-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{footer.about.title}</h3>
            <p className="text-brand-background/90">{footer.about.content}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              {footer.quickLinks.title}
            </h3>
            <ul className="space-y-2">
              {footer.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-brand-background/90 hover:text-brand-background transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{footer.contact.title}</h3>
            <ul className="space-y-2 text-brand-background/90">
              <li>{footer.contact.address}</li>
              <li>{footer.contact.city}</li>
              <li>{footer.contact.email}</li>
              <li>{footer.contact.phone}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              {footer.newsletter.title}
            </h3>
            <div className="flex gap-2 mb-6">
              <Input
                type="email"
                placeholder={footer.newsletter.placeholder}
                className="bg-brand-background/10 border-brand-background/20 text-brand-background placeholder:text-brand-background/60"
              />
              <Button
                variant="secondary"
                className="bg-brand-accent text-brand-primary hover:bg-brand-accent/90"
              >
                {footer.newsletter.button}
              </Button>
            </div>
            <h3 className="text-xl font-bold mb-4">{footer.social.title}</h3>
            <div className="flex space-x-4">
              {footer.social.links.map((link, index) => {
                const Icon =
                  socialIcons[link.platform as keyof typeof socialIcons];
                return (
                  <a
                    key={index}
                    href={link.href}
                    className="hover:text-brand-accent transition-colors"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border-t border-brand-background/20 mt-8 pt-8 text-center text-brand-background/90">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
