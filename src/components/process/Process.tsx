// import React from "react";
import { processSteps as defaultSteps } from "../../data/processSteps";

type Props = {
  steps?: typeof defaultSteps;
  cardHeight?: string | number;
};

export default function Process({
  steps = defaultSteps,
  cardHeight = "16rem",
}: Props) {
  return (
    <section
      id="process"
      className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
          My Process
        </h2>
        <p className="text-[#9AA7BD] max-w-2xl mx-auto">
          A structured approach to building ethical, maintainable systems
        </p>
      </div>

      <div className="hidden md:grid grid-cols-4 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.id} className="relative">
              <div
                className={`relative bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 transition-all duration-300 hover:border-[rgba(255,255,255,0.15)]`}
                style={{ height: cardHeight }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F] flex items-center justify-center mb-6">
                  <Icon size={24} className="text-[#0F172A]" />
                </div>
                <h3 className="text-xl font-space-grotesk font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-[#9AA7BD] text-sm">{step.description}</p>
              </div>

              <div className="flex justify-center mt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F] flex items-center justify-center text-[#0F172A] font-bold text-lg border-4 border-[#0F172A]">
                  {index + 1}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="md:hidden">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              className={`relative pb-12 ${
                index < steps.length - 1
                  ? "border-l-2 border-dashed border-[rgba(255,255,255,0.1)] pl-8 ml-3"
                  : "pl-8 ml-3"
              }`}
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F] flex items-center justify-center text-[#0F172A] font-bold">
                {index + 1}
              </div>
              <div className="bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F] flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#0F172A]" />
                </div>
                <h3 className="text-lg font-space-grotesk font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-[#9AA7BD] text-sm">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
