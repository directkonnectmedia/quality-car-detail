"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function updateField(field: keyof ContactForm, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="text-center mb-16"
        >
          <p className="text-xs font-light tracking-[0.4em] uppercase text-[var(--color-red)] mb-4">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/40 font-light max-w-md mx-auto">
            Have questions or ready to schedule? Reach out and we will get back
            to you promptly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form — 3 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              delay: 0.1,
            }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-2xl p-8 sm:p-10">
              <h2 className="text-xl font-medium text-white mb-8">
                Send a Message
              </h2>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/40 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:border-[var(--color-red)]/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/40 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="(480) 555-0000"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:border-[var(--color-red)]/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/40 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:border-[var(--color-red)]/50 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/40 mb-2">
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your vehicle and what you need..."
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:border-[var(--color-red)]/50 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[var(--color-red)] hover:bg-[var(--color-red-hover)] text-white text-sm font-medium tracking-[0.2em] uppercase rounded-lg transition-all duration-300 red-glow"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Business Info Sidebar — 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              delay: 0.2,
            }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Details */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-sm font-light tracking-[0.3em] uppercase text-white/40 mb-6">
                Contact Details
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[var(--color-red)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Phone</p>
                    <p className="text-white/50 text-sm">(480) 555-0125</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[var(--color-red)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Email</p>
                    <p className="text-white/50 text-sm">info@amdetailing.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[var(--color-red)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Location</p>
                    <p className="text-white/50 text-sm">
                      Serving the Greater Phoenix Area, Arizona
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[var(--color-red)] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">Hours</p>
                    <p className="text-white/50 text-sm">
                      Mon - Sat: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-white/50 text-sm">
                      Sunday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="glass rounded-2xl overflow-hidden aspect-[4/3]">
              <div className="w-full h-full bg-white/[0.02] flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-white/20 mx-auto mb-3" />
                  <p className="text-sm text-white/30">
                    Google Maps Embed
                  </p>
                  <p className="text-xs text-white/15 mt-1">
                    Phoenix, Arizona
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
