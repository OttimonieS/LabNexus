import { Github, Instagram, Linkedin, Mail, Star } from "lucide-react";

type Props = {
  scrollToSection: (id: string) => void;
};

export default function Footer({ scrollToSection }: Props) {
  return (
    <footer className="py-12 border-t border-[rgba(255,255,255,0.06)] mt-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F] flex items-center justify-center">
                <span className="font-space-grotesk font-bold text-xl text-[#0F172A]">
                  LN
                </span>
              </div>
              <span className="font-space-grotesk font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F]">
                LabNexus
              </span>
            </div>
            <p className="text-[#9AA7BD] mb-6 max-w-xs">
              Building ethical AI systems that ship. Open to research
              collaborations and engineering roles.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: "https://github.com/OttimonieS" },
                { icon: Instagram, href: "https://instagram.com/OttimonieS" },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/david-dwi-januar-gunawan/",
                },
                { icon: Mail, href: "mailto:januar.gunawan06@gmail.com" },
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

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-space-grotesk font-semibold text-lg mb-4">
                Explore
              </h3>
              <ul className="space-y-3">
                {["Projects", "Case Studies", "Blog", "Research"].map(
                  (item) => (
                    <li key={item}>
                      <button
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="text-[#9AA7BD] hover:text-[#00E5FF] transition-colors flex items-center"
                      >
                        <span>{item}</span>
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="font-space-grotesk font-semibold text-lg mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {[
                  "Resume",
                  "System Designs",
                  "AI Ethics Framework",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-[#9AA7BD] hover:text-[#A4FF6F] transition-colors flex items-center"
                    >
                      <span>{item}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-space-grotesk font-semibold text-lg mb-4">
              Stay Updated
            </h3>
            <p className="text-[#9AA7BD] mb-6 max-w-xs">
              Subscribe for updates on my new projects, research, and
              engineering insights.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="footer-email" className="sr-only">
                  Email
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="JohnDoe123@gmail.com"
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] rounded-lg focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent outline-none transition"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F] text-[#0F172A] font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-[rgba(255,255,255,0.06)] text-center text-[#9AA7BD] text-sm">
          <p>
            Designed and built by a CS student focused on real world engineering
            • © 2025
          </p>
          <p className="mt-2 flex items-center justify-center space-x-2 text-xs">
            <Star size={12} className="text-[#FFD700]" />
            <span>Accessible for all users</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
