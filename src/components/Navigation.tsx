"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const serviceCategories = [
  {
    title: "Interior Detailing",
    description: "Deep clean, leather care, odor removal",
    image: "/videos/detailing-2.mp4",
    href: "/services#interior",
  },
  {
    title: "Exterior Detailing",
    description: "Hand wash, clay bar, wax & sealant",
    image: "/videos/detailing-1.mp4",
    href: "/services#exterior",
  },
  {
    title: "Paint Correction",
    description: "Swirl removal, scratch repair, polish",
    image: "/videos/detailing-3.mp4",
    href: "/services#paint-correction",
  },
  {
    title: "Full Detail Packages",
    description: "Complete interior & exterior transformation",
    image: "/videos/detailing-4.mp4",
    href: "/services#packages",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Booking", href: "/booking" },
  { label: "Contact", href: "/contact" },
];

const panelVariants = {
  closed: {
    x: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
  open: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const overlayVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const staggerChildren = {
  open: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  closed: { opacity: 0, x: -20 },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Top Nav Bar — Always subtle clear glass, stronger on scroll with red accent */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-nav-scrolled shadow-lg" : "glass-nav"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* Logo — left */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="A.M. Detailing"
              width={50}
              height={50}
              className="w-10 h-10 sm:w-12 sm:h-12"
              priority
            />
          </Link>

          {/* Menu Button — centered, bigger, prominent */}
          <button
            onClick={() => setIsOpen(true)}
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-3 px-8 py-3 rounded-full border border-white/15 hover:border-white/30 bg-white/[0.04] hover:bg-white/[0.08] text-white/90 hover:text-white transition-all duration-300 group"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-base font-light tracking-[0.25em] uppercase">
              Menu
            </span>
          </button>

          {/* Right Side — CTA */}
          <Link
            href="/booking"
            className="flex items-center gap-2 text-sm font-light tracking-wider uppercase text-white/80 hover:text-white transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Book Now</span>
          </Link>
        </div>
      </header>

      {/* Side Panel — Clear glassmorphism + Rivian content */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-[2px]"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel — true glassmorphism, transparent, futuristic */}
            <motion.div
              variants={panelVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 bottom-0 z-[70] w-full max-w-2xl overflow-y-auto no-scrollbar"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(40px) saturate(1.5)",
                WebkitBackdropFilter: "blur(40px) saturate(1.5)",
                borderRight: "1px solid rgba(255, 255, 255, 0.12)",
                boxShadow: "inset 0 0 80px rgba(255, 255, 255, 0.03), 0 0 40px rgba(0, 0, 0, 0.3)",
              }}
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <Image
                    src="/logo.png"
                    alt="A.M. Detailing"
                    width={44}
                    height={44}
                    className="w-11 h-11"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <span className="text-sm font-light tracking-[0.2em] uppercase">
                    Close
                  </span>
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <motion.nav
                variants={staggerChildren}
                initial="closed"
                animate="open"
                exit="closed"
                className="px-8 py-8"
              >
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <motion.div key={link.href} variants={itemVariants}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block py-3 text-2xl font-light tracking-[0.15em] uppercase text-white/70 hover:text-white hover:pl-2 transition-all duration-300"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.nav>

              {/* Service Categories with Visual Cards — Rivian logic */}
              <div className="px-8 pb-8">
                <motion.div
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-xs font-light tracking-[0.3em] uppercase text-white/40 mb-6">
                    Explore Services
                  </p>
                </motion.div>

                <div className="grid grid-cols-2 gap-3">
                  {serviceCategories.map((cat, i) => (
                    <motion.div
                      key={cat.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.6 + i * 0.1,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1] as [
                          number,
                          number,
                          number,
                          number,
                        ],
                      }}
                    >
                      <Link
                        href={cat.href}
                        onClick={() => setIsOpen(false)}
                        className="group block relative overflow-hidden rounded-lg aspect-[4/3]"
                      >
                        {/* Video thumbnail */}
                        <video
                          src={cat.image}
                          muted
                          loop
                          playsInline
                          autoPlay
                          className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <h3 className="text-sm font-medium tracking-wide text-white mb-0.5">
                            {cat.title}
                          </h3>
                          <p className="text-xs text-white/50 font-light">
                            {cat.description}
                          </p>
                          <ChevronRight className="w-4 h-4 text-[var(--color-red)] mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="px-8 pb-10">
                <Link
                  href="/booking"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-4 text-center text-sm font-medium tracking-[0.2em] uppercase bg-[var(--color-red)] hover:bg-[var(--color-red-hover)] text-white rounded-lg transition-all duration-300 red-glow"
                >
                  Book Your Detail
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
