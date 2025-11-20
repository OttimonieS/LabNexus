import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";
import { mockupSlides } from "../../data/mockupSlides";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockupSlides.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [prefersReducedMotion]);

  return (
    <section className="py-20 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 max-w-2xl">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-medium text-[#9AA7BD] tracking-wider uppercase">
              Third-year CS • Systems, AI, Web3
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-space-grotesk font-bold leading-tight">
            Building modern{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F]">
              AI-powered digital experiences
            </span>{" "}
            for the next generation of the web.
          </h1>

          <p className="text-xl text-[#9AA7BD] max-w-xl">
            Delivering fast and scalable products through full stack
            development, mobile engineering, web development and{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F]">
              AI powered innovation
            </span>
            .
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.04)] backdrop-blur-sm font-medium rounded-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors flex items-center space-x-2"
            >
              <Download size={18} />
              <span>Download My Resume</span>
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative rounded-xl overflow-hidden border border-[rgba(255,255,255,0.1)] shadow-2xl shadow-[rgba(13,110,253,0.5)]">
            <div className="flex items-center space-x-2 p-3 bg-[rgba(255,255,255,0.04)] border-b border-[rgba(255,255,255,0.06)]">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#28C940]"></div>
              </div>
              <div className="ml-auto text-xs text-[#9AA7BD]">
                a11yguard.vercel.app
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] overflow-hidden">
              {mockupSlides.map((slide: string, index: number) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide})` }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="absolute -inset-4 -z-10"
            animate={{
              y: prefersReducedMotion ? 0 : ["0%", "-2%", "0%"],
              x: prefersReducedMotion ? 0 : ["0%", "1%", "0%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/10 to-[#A4FF6F]/10 rounded-full blur-3xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
