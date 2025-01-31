import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu, X, ChevronDown, Briefcase, DollarSign, BarChart, HardHat, Heart, Phone,
  Users, Factory, Code, Truck, Video, Megaphone, Wrench, Globe, FileText,
  Layers, Shield, Monitor, Database, Settings, ClipboardList
} from "lucide-react";
import { ThemeToggle } from "./ui/theme-toggle";
import { siteContent } from "@/config/content";

const industryIcons = [Briefcase, DollarSign, BarChart, HardHat, Heart, Phone, Users, Factory, Code, Truck, Video, Megaphone];
const servicesIcons = [Wrench, Globe, FileText, Layers, Shield, Monitor, Database, Settings, ClipboardList];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between h-16 px-8 lg:px-20">
        
        {/* Logo */}
        <button onClick={() => scrollToSection("home")} className="flex items-center">
          <span className="text-6xl font-semibold text-brand-background dark:text-white hover:text-brand-accent transition-colors cursor-pointer">
            {siteContent.siteInfo.name}
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x ml-auto ">
          {siteContent.navigation.links.map((link, index) => {
            if (index === 2) {
              // Services Dropdown
              return (
                <div 
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                >
                  <button
                    className="text-md text-brand-background dark:text-white flex items-center group-hover:text-brand-accent transition-colors px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                  >
                    {link.label} <ChevronDown size={28} className="ml-2" />
                  </button>
                  {isServicesDropdownOpen && (
                    <div 
                      className="text-start absolute mt-0 w-[600px] bg-white dark:bg-gray-800 shadow-lg p-6 grid grid-cols-2 gap-6 left-1/2 transform -translate-x-16"
                    >
                      {siteContent.services.map((service, idx) => {
                        const Icon = servicesIcons[idx % servicesIcons.length];
                        return (
                          <button
                            key={idx}
                            className="flex place-items-center space-x-3 text-sm text-start py-2"
                            onClick={() => scrollToSection(service.toLowerCase().replace(/\s+/g, "-"))}
                          >
                            <Icon className="text-orange-500 dark:text-[rgb(0,255,255)]" size={28} />
                            <span className="text-gray-900 dark:text-white">{service}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            } else if (index === 3) {
              // Industry Dropdown
              return (
                <div 
                  key={index}
                  className="relative group"
                  onMouseEnter={() => setIsIndustryDropdownOpen(true)}
                  onMouseLeave={() => setIsIndustryDropdownOpen(false)}
                >
                  <button
                    className="text-md text-brand-background dark:text-white flex items-center group-hover:text-brand-accent transition-colors px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsIndustryDropdownOpen(!isIndustryDropdownOpen)}
                  >
                    {link.label} <ChevronDown size={28} className="ml-2" />
                  </button>
                  {isIndustryDropdownOpen && (
                    <div 
                      className="absolute items-start mt-0 w-[550px] bg-white dark:bg-gray-800 shadow-lg  p-6 grid grid-cols-2 gap-6 left-1/2 transform -translate-x-24"
                    >
                      {siteContent.industryServing.map((industry, idx) => {
                        const Icon = industryIcons[idx % industryIcons.length];
                        return (
                          <button
                            key={idx}
                            className="flex place-items-center space-x-3 text-sm text-start py-2"
                            // className="flex place-items-end space-x-3 text-sm text-end py-2"
                            onClick={() => scrollToSection(industry.toLowerCase().replace(/\s+/g, "-"))}
                          >
                            <Icon className="text-orange-500 dark:text-[#0ff]" size={28} />
                            <span className="text-gray-900 dark:text-white">{industry}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <button
                key={index}
                onClick={() => scrollToSection(link.href.replace("#", ""))}
                className="text-md text-brand-background dark:text-white hover:text-brand-accent transition-colors px-7 py-4  border-b-2 border-transparent hover:border-brand-accent hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {link.label}
              </button>
            );
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
