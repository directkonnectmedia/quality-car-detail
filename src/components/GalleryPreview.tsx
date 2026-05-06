"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const galleryItems = [
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipOb630FjtBTM0vuoQybtVXfb4z7IZW1zbKs4vfM=s680-w680-h510-rw",
    alt: "Full detail transformation",
    span: true,
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipO0EYEqQbq3xIjgF_V4Y-h8bdFeqaAl1iH-Leor=s680-w680-h510-rw",
    alt: "Exterior wash and shine",
    span: false,
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipOmBEppexE8R9uxkxc8eqFNjImroUS9Tw-dhbd_=s680-w680-h510-rw",
    alt: "Interior deep clean and detail",
    span: false,
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipPS5LVt4BG11gv72_2iGjNPxdTt6-feP540iiNV=s680-w680-h510-rw",
    alt: "Paint correction and polish",
    span: true,
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGgTmkPBCHLh8-tirzfbHLqL56xlKvs73VT32tPqpuf5cavVF9OttLsERx7HUKGy7mwLv6hFm5SDo2zwFiiORsSrTXtGS_aE2ZxiaTMzorl8JQiGyiiHUbiCScyfK4kG6wI1YJILzGmD_Y=s680-w680-h510-rw",
    alt: "Ceramic coating application",
    span: false,
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipPWzhsWKhTpP64tFxwUYJhvWPs98xsR75T5uNkm=s680-w680-h510-rw",
    alt: "Tire and rim restoration",
    span: false,
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEf0oOLU4TADy0XMU_mL96mTID9DZF4cNZR_5fAPo-Zb6kSsJLUkrRbBnRI7PNaJldD_2jRrV-eJJAp0l87qsofM7KJuAcIaDc0Yv4esEY0wdxcH3R4hvWrt0MLZkxfZgGprvehr6zrq6s7=s680-w680-h510-rw",
    alt: "Exterior detail finish",
    span: true,
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEPOWex5Q4F6MQnDyggiGX_Mx0_4USn7ophOLhUtRSnC6mLkffzsujSRSlYd5NkFMmcWVfhJD4s_L46NQTBAFJhaXB5kCMaxC-48Qbgk6UdnqRTmFFsrUG86pi8LD_p0mJH9YPXyrbavh-b=s680-w680-h510-rw",
    alt: "Vehicle showcase",
    span: false,
  },
];

export default function GalleryPreview() {
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
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-xs font-light tracking-[0.4em] uppercase text-[var(--color-red)] mb-4">
              Our Work
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Recent Projects
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden sm:flex items-center gap-2 text-sm font-light tracking-wider uppercase text-white/50 hover:text-white transition-colors duration-300"
          >
            View Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                delay: i * 0.08,
              }}
              className="break-inside-avoid"
            >
              <div
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  item.span ? "aspect-[4/5]" : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
                {/* Caption on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm text-white font-light">{item.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden text-center mt-8">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-light tracking-wider uppercase text-white/50 hover:text-white transition-colors"
          >
            View Full Gallery
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
