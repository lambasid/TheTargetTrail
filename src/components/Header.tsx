import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { siteContent } from "@/config/content";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scroll ? "bg-brand-primary/95 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
    >
      <div className="flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-brand-background hover:text-white transition-colors">
            {siteContent.siteInfo.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          {siteContent.navigation.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-brand-background hover:text-white transition-colors px-6 py-5 border-b-2 border-transparent hover:border-brand-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-background hover:text-white transition-colors p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size="24" /> : <Menu size="24" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-brand-primary/95">
          {siteContent.navigation.links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block text-brand-background hover:text-white transition-colors px-4 py-3 border-b border-brand-background/20"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
