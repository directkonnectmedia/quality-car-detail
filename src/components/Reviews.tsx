"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Marcus T.",
    vehicle: "2024 GMC Yukon",
    text: "Absolutely incredible work. My Yukon looked better than the day I drove it off the lot. The attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    vehicle: "2023 Tesla Model Y",
    text: "I've tried several detailers in Arizona and A.M. Detailing is by far the best. The interior was spotless and the paint correction was flawless.",
    rating: 5,
  },
  {
    name: "David R.",
    vehicle: "Polaris General XP",
    text: "They detailed my side-by-side and it came out looking brand new. These guys handle more than just cars — highly recommend for any vehicle.",
    rating: 5,
  },
  {
    name: "Jennifer L.",
    vehicle: "2024 Chevy Suburban",
    text: "Professional, on time, and the results speak for themselves. The ceramic coating has my Suburban beading water like crazy. Worth every penny.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="relative py-[var(--section-padding)] px-6 bg-[var(--color-charcoal-dark)]">
      {/* Top gradient blend */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[var(--color-charcoal)] to-transparent" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-light tracking-[0.4em] uppercase text-[var(--color-red)] mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/40 font-light max-w-md mx-auto">
            Real results. Real satisfaction. See why Arizona trusts A.M.
            Detailing.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.1,
              }}
              className="p-8 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-[var(--color-red)] text-[var(--color-red)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/60 font-light leading-relaxed mb-6 text-sm">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="text-white font-medium text-sm">{review.name}</p>
                <p className="text-white/30 text-xs font-light">
                  {review.vehicle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom gradient blend */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-charcoal)] to-transparent" />
    </section>
  );
}
