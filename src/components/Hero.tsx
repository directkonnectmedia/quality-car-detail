"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/detailing-3.mp4" type="video/mp4" />
      </video>

      {/* Warm cinematic overlay — Mercedes-style mood */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[var(--color-charcoal)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <p className="text-xs font-light tracking-[0.4em] uppercase text-white/50 mb-4">
            Premium Auto Detailing &middot; Arizona
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-[0.1em] uppercase text-white mb-6"
        >
          A.M. Detailing
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          className="text-lg sm:text-xl font-light text-white/60 max-w-lg mb-10"
        >
          Where precision meets perfection. Your vehicle deserves nothing less.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/booking"
            className="px-10 py-4 bg-[var(--color-red)] hover:bg-[var(--color-red-hover)] text-white text-sm font-medium tracking-[0.2em] uppercase rounded-lg transition-all duration-300 red-glow"
          >
            Book Now
          </Link>
          <Link
            href="/services"
            className="px-10 py-4 border border-white/20 hover:border-white/40 text-white text-sm font-medium tracking-[0.2em] uppercase rounded-lg transition-all duration-300 hover:bg-white/5"
          >
            Our Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
