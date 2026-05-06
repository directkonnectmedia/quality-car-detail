"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative py-[var(--section-padding)] px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xs font-light tracking-[0.4em] uppercase text-[var(--color-red)] mb-4">
            Ready?
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
            Your Vehicle Deserves the Best
          </h2>
          <p className="text-white/40 font-light max-w-lg mx-auto mb-10">
            Book your appointment today and experience the A.M. Detailing
            difference. Premium results, every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="px-10 py-4 bg-[var(--color-red)] hover:bg-[var(--color-red-hover)] text-white text-sm font-medium tracking-[0.2em] uppercase rounded-lg transition-all duration-300 red-glow"
            >
              Book Your Detail
            </Link>
            <Link
              href="/contact"
              className="px-10 py-4 border border-white/20 hover:border-white/40 text-white text-sm font-medium tracking-[0.2em] uppercase rounded-lg transition-all duration-300 hover:bg-white/5"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
