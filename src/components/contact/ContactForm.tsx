// import React from "react";
import useContactForm from "../../hooks/useContactForm";
import { CheckCircle } from "lucide-react";

export default function ContactForm() {
  const { formState, handleChange, handleSubmit, contactFormRef } =
    useContactForm();

  return (
    <div className="max-w-3xl mx-auto bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-3xl p-8 md:p-12">
      {formState.success ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F] rounded-full flex items-center justify-center">
            <CheckCircle size={40} className="text-[#0F172A]" />
          </div>
          <h3 className="text-2xl font-space-grotesk font-bold mb-2">
            Message Sent!
          </h3>
          <p className="text-[#9AA7BD] max-w-md mx-auto">
            Thank you for reaching out. I'll respond within 24-48 hours.
          </p>
        </div>
      ) : (
        <form
          ref={contactFormRef}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.04)] border ${
                  formState.errors.name
                    ? "border-[#EF4444]"
                    : "border-[rgba(255,255,255,0.06)]"
                } rounded-lg focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent outline-none transition`}
                required
                aria-invalid={!!formState.errors.name}
                aria-describedby={
                  formState.errors.name ? "name-error" : undefined
                }
              />
              {formState.errors.name && (
                <p id="name-error" className="mt-1 text-sm text-[#EF4444]">
                  {formState.errors.name}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.04)] border ${
                  formState.errors.email
                    ? "border-[#EF4444]"
                    : "border-[rgba(255,255,255,0.06)]"
                } rounded-lg focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent outline-none transition`}
                required
                aria-invalid={!!formState.errors.email}
                aria-describedby={
                  formState.errors.email ? "email-error" : undefined
                }
              />
              {formState.errors.email && (
                <p id="email-error" className="mt-1 text-sm text-[#EF4444]">
                  {formState.errors.email}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject (optional)
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formState.subject || ""}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] rounded-lg focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent outline-none transition`}
              placeholder="How can I help?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-3 bg-[rgba(255,255,255,0.04)] border ${
                formState.errors.message
                  ? "border-[#EF4444]"
                  : "border-[rgba(255,255,255,0.06)]"
              } rounded-lg focus:ring-2 focus:ring-[#00E5FF] focus:border-transparent outline-none transition`}
              required
              aria-invalid={!!formState.errors.message}
              aria-describedby={
                formState.errors.message ? "message-error" : undefined
              }
            ></textarea>
            {formState.errors.message && (
              <p id="message-error" className="mt-1 text-sm text-[#EF4444]">
                {formState.errors.message}
              </p>
            )}
          </div>

          <div className="hidden">
            <label htmlFor="phone">Phone (leave blank)</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full px-4 py-3 bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-4 bg-gradient-to-r from-[#00E5FF] to-[#A4FF6F] text-[#0F172A] font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] text-lg"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
