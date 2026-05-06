"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Full Detail",
    description:
      "Complete interior and exterior transformation — our most comprehensive service.",
    href: "/services#packages",
    image:
      "https://images.unsplash.com/photo-1646012656811-d6c6b0be5d9f?w=800&q=80",
    featured: true,
  },
  {
    title: "Exterior Wash",
    description:
      "Hand wash, foam bath, clay bar treatment, and premium drying.",
    href: "/services#exterior",
    image:
      "https://images.unsplash.com/photo-1750492786518-ab308a72603a?w=800&q=80",
  },
  {
    title: "Interior Detail",
    description:
      "Deep vacuum, leather conditioning, dashboard care, and restoration.",
    href: "/services#interior",
    image:
      "https://images.unsplash.com/photo-1725829879131-1780c5291059?w=800&q=80",
  },
  {
    title: "Paint Correction",
    description:
      "Swirl removal, scratch repair, and multi-stage polish for showroom paint.",
    href: "/services#paint-correction",
    image:
      "https://images.unsplash.com/photo-1708805282706-f44730b7e527?w=800&q=80",
  },
  {
    title: "Ceramic Coating",
    description:
      "Long-lasting paint protection with hydrophobic ceramic sealant.",
    href: "/services#ceramic",
    image:
      "https://images.unsplash.com/photo-1745588183437-7d4c3f0f0fe2?w=800&q=80",
  },
  {
    title: "Tires & Rims",
    description:
      "Deep clean, degrease, and dress your wheels and tires to look new.",
    href: "/services#tires",
    image:
      "https://images.unsplash.com/photo-1756664825124-15a086629185?w=800&q=80",
  },
];

function ServiceCard({
  service,
  index,
  featured = false,
}: {
  service: (typeof services)[number];
  index: number;
  featured?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
        delay: index * 0.1,
      }}
      className={featured ? "col-span-1 sm:col-span-2" : ""}
    >
      <Link
        href={service.href}
        className={`group block relative overflow-hidden rounded-xl ${
          featured ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[3/4]"
        }`}
      >
        {/* Background image */}
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes={featured ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/70 transition-colors duration-500" />

        {/* Red glow border on hover */}
        <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[var(--color-red)]/30 group-hover:shadow-[inset_0_0_30px_rgba(196,30,58,0.1)] transition-all duration-500" />

        {/* Content — bottom left */}
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <h3
            className={`font-semibold text-white mb-2 tracking-wide ${
              featured ? "text-2xl sm:text-3xl" : "text-xl"
            }`}
          >
            {service.title}
          </h3>
          <p
            className={`text-white/50 font-light leading-relaxed mb-3 ${
              featured ? "text-base max-w-lg" : "text-sm"
            }`}
          >
            {service.description}
          </p>
          <div className="flex items-center gap-2 text-[var(--color-red)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span className="text-sm font-medium tracking-wider uppercase">
              Learn More
            </span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesOverview() {
  const [featured, ...rest] = services;

  return (
    <section className="relative py-[var(--section-padding)] px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="text-center mb-16"
        >
          <p className="text-xs font-light tracking-[0.4em] uppercase text-[var(--color-red)] mb-4">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
            Premium Services
          </h2>
          <p className="text-white/40 font-light max-w-md mx-auto">
            Every detail matters. From a quick refresh to a full restoration, we
            treat every vehicle like our own.
          </p>
        </motion.div>

        {/* Featured card — full width */}
        <ServiceCard service={featured} index={0} featured />

        {/* Remaining cards — 2 column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {rest.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i + 1} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/services"
            className="inline-block px-8 py-3 text-sm font-light tracking-[0.2em] uppercase text-white/60 border border-white/10 hover:border-white/20 hover:text-white rounded-lg transition-all duration-300"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
