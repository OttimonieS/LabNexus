import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Menu, X } from "lucide-react";

type Props = {
  scrollToSection: (id: string) => void;
};

export default function Header({ scrollToSection }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-[rgba(2,6,23,0.7)] border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F] flex items-center justify-center">
            <span className="font-space-grotesk font-bold text-xl text-[#0F172A]">
              LN
            </span>
          </div>
          <span className="font-space-grotesk font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F]">
            LabNexus
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-10">
          {["projects", "about", "process", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="text-sm font-medium hover:text-[#00E5FF] transition-colors relative group"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F] group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/OttimonieS"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.1)] flex items-center justify-center transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="#contact"
            onClick={() => handleNavClick("contact")}
            className="px-4 py-2 bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F] text-[#0F172A] font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
          >
            Let's connect
          </a>
        </div>
        <button
          className="md:hidden w-10 h-10 rounded-full bg-[rgba(255,255,255,0.06)] flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t border-[rgba(255,255,255,0.06)] overflow-hidden"
          id="mobile-menu"
        >
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-6">
            {["projects", "about", "process", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="block w-full text-left text-xl font-space-grotesk font-medium py-2 hover:text-[#00E5FF] transition-colors"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}

            <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] mt-4">
              <a
                href="#contact"
                onClick={() => handleNavClick("contact")}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F] text-[#0F172A] font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Let's connect
              </a>
            </div>

            <div className="flex justify-center space-x-6 pt-6">
              {[
                { icon: Github, href: "https://github.com/OttimonieS" },
                { icon: Twitter, href: "https://twitter.com/OttimonieS" },
                { icon: Linkedin, href: "https://linkedin.com/in/OttimonieS" },
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.1)] flex items-center justify-center transition-colors"
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
