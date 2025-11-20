import { motion } from "framer-motion";
import { testimonials as testimonialsData } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
          Trusted by Innovators
        </h2>
        <p className="text-[#9AA7BD] max-w-2xl mx-auto">
          Partners who value ethical engineering and production-ready solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            whileHover={{ y: -5 }}
            className="bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 transition-all"
          >
            <div className="flex items-start">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <div className="font-space-grotesk font-bold">
                  {testimonial.author}
                </div>
                <div className="text-[#9AA7BD] text-sm">{testimonial.role}</div>
              </div>
            </div>
            <div className="mt-6 text-[#9AA7BD] italic">
              "{testimonial.quote}"
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
