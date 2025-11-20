import Header from "./components/header/Header";
import Hero from "./components/hero/hero";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Testimonials from "./components/testimonials/Testimonials";
import About from "./components/about/about";
import Footer from "./components/footer/Footer";
import Background from "./components/Background";
import Process from "./components/process/Process";
import ContactForm from "./components/contact/ContactForm";

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#0B2545] to-[#0D6EFD] text-[#E6EEF8] font-sans antialiased">
      <Background />

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-[#0B2545] px-4 py-2 rounded-lg shadow-lg"
      >
        Skip to content
      </a>

      <Header scrollToSection={scrollToSection} />

      <main id="main-content">
        <Hero />
        <Skills />
        <Projects />
        <Process />
        <Testimonials />
        <About />

        <section
          id="contact"
          className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
              Let's Build Something Meaningful
            </h2>
            <p className="text-[#9AA7BD] max-w-2xl mx-auto">
              I'm actively seeking for research and internship opportunities in software
              engineering, full stack development, mobile engineering, applied
              AI, data systems, Web3, and finance related technology.
            </p>
          </div>

          <ContactForm />
        </section>
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
