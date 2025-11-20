import { Calendar } from "lucide-react";
import { education as educationData } from "../../data/education";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold">
            Crafting Digital Systems
          </h2>

          <div className="space-y-6">
            <p className="text-lg text-[#9AA7BD]">
              Third year Informatics student who enjoys building digital systems
              that create real value. My interests include full stack
              development, mobile engineering, applied AI, and emerging
              technologies in finance and Web3. I focus on projects that help
              real users and provide clear, measurable impact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl p-5">
                <div className="text-[#00E5FF] font-space-grotesk font-semibold mb-1">
                  Systems Design
                </div>
                <div className="text-[#9AA7BD]">
                  Scalable architectures for modern web, mobile, and data driven
                  applications.
                </div>
              </div>
              <div className="bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-xl p-5">
                <div className="text-[#A4FF6F] font-space-grotesk font-semibold mb-1">
                  Ethical AI
                </div>
                <div className="text-[#9AA7BD]">
                  Practical machine learning with focus on fairness, safety, and
                  clear evaluation.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00E5FF]/20 to-[#A4FF6F]/20 rounded-3xl blur-3xl"></div>
          <div className="relative bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-3xl p-8">
            <div className="flex items-center mb-8">
              <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-[rgba(255,255,255,0.1)]">
                <div className="w-full h-full bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F] flex items-center justify-center text-4xl font-bold text-[#0F172A]">
                  CS
                </div>
              </div>
              <div className="ml-6">
                <div className="font-space-grotesk font-bold text-2xl">
                  My Journey
                </div>
                <div className="text-[#9AA7BD]">Since 2021</div>
              </div>
            </div>

            <div className="space-y-6">
              {educationData.map((edu) => (
                <div key={edu.id} className="flex">
                  <div className="mt-1.5 mr-4">
                    <div className="w-3 h-3 rounded-full bg-[#00E5FF]"></div>
                    <div className="w-px h-full bg-[rgba(255,255,255,0.06)] ml-1.5"></div>
                  </div>
                  <div>
                    <div className="font-space-grotesk font-bold text-lg">
                      {edu.institution}
                    </div>
                    <div className="text-[#9AA7BD]">{edu.degree}</div>
                    <div className="text-[#00E5FF] text-sm flex items-center space-x-2 mt-1">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                    <div className="text-[#9AA7BD] mt-1 text-sm">
                      {edu.details}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
