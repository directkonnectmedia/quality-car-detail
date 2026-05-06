"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const filters = ["All", "Exterior", "Interior", "Trucks & SUVs", "Specialty"];

const galleryItems = [
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipOb630FjtBTM0vuoQybtVXfb4z7IZW1zbKs4vfM=s680-w680-h510-rw",
    alt: "Full detail transformation",
    category: "Exterior",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipO0EYEqQbq3xIjgF_V4Y-h8bdFeqaAl1iH-Leor=s680-w680-h510-rw",
    alt: "Exterior wash and shine",
    category: "Exterior",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipOmBEppexE8R9uxkxc8eqFNjImroUS9Tw-dhbd_=s680-w680-h510-rw",
    alt: "Interior deep clean and detail",
    category: "Interior",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipPS5LVt4BG11gv72_2iGjNPxdTt6-feP540iiNV=s680-w680-h510-rw",
    alt: "Paint correction and polish",
    category: "Exterior",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGgTmkPBCHLh8-tirzfbHLqL56xlKvs73VT32tPqpuf5cavVF9OttLsERx7HUKGy7mwLv6hFm5SDo2zwFiiORsSrTXtGS_aE2ZxiaTMzorl8JQiGyiiHUbiCScyfK4kG6wI1YJILzGmD_Y=s680-w680-h510-rw",
    alt: "Ceramic coating application",
    category: "Specialty",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipPWzhsWKhTpP64tFxwUYJhvWPs98xsR75T5uNkm=s680-w680-h510-rw",
    alt: "Tire and rim restoration",
    category: "Specialty",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEf0oOLU4TADy0XMU_mL96mTID9DZF4cNZR_5fAPo-Zb6kSsJLUkrRbBnRI7PNaJldD_2jRrV-eJJAp0l87qsofM7KJuAcIaDc0Yv4esEY0wdxcH3R4hvWrt0MLZkxfZgGprvehr6zrq6s7=s680-w680-h510-rw",
    alt: "Exterior detail finish",
    category: "Exterior",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEPOWex5Q4F6MQnDyggiGX_Mx0_4USn7ophOLhUtRSnC6mLkffzsujSRSlYd5NkFMmcWVfhJD4s_L46NQTBAFJhaXB5kCMaxC-48Qbgk6UdnqRTmFFsrUG86pi8LD_p0mJH9YPXyrbavh-b=s680-w680-h510-rw",
    alt: "Vehicle showcase",
    category: "Exterior",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEAryobQHLoV_5Mg3HqBBzV7k0o8ytlPbDrsrn1tArjVCDUcPzQwljp080JVV-d91Zbtq0hzE8OjMrg1Lt7zW5tSlLPduhrP4ebIgm6LZi4TVo8aWjLVLlPYKTCxfaGBEYCI3Lm748lwzAo=s680-w680-h510-rw",
    alt: "Premium exterior care",
    category: "Exterior",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAG_mpFumBeFxebl9tvJ8i_ljTotpQi35774s0vWdn72i6GZoEo9F_-3W4z1CUfVXEUVjvqW-9edbvjW2nutNH144tIMI5ZEGh5CkFjorU8WCqHrr_3a4AFv8DghsQYPFCgDCGHZa9kRdRE=s680-w680-h510-rw",
    alt: "Full vehicle restoration",
    category: "Exterior",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGFNwDkmtaMQYE7HVaAnkndHRKw1uLAqv090EKi3362jP6BgbLXYSs3vfSr84ZDTO76hp2phSR0PKOq-Z4SRkSdqAZZlwbvW2A9pRC1-P8cfIWA97zxjHZjkQ8LncVQNIGeuU-CAeyhtPLq=s680-w680-h510-rw",
    alt: "Detailed truck finish",
    category: "Trucks & SUVs",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAH95o7ae8cxtJE-ZTcnQvovcbJ3Id8OumA8m1_Y7NJyvpv6emoohtO4i23T-pfh6bnWc99fAtOFCgnb6Xmny7oDYrFFnw-kdhIP5iFwH0CRZMLoAAoWfDZhvJnVtRd8qj8lxdt9hYLwdUvG=s680-w680-h510-rw",
    alt: "SUV exterior detail",
    category: "Trucks & SUVs",
  },
];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="text-center mb-12"
        >
          <p className="text-xs font-light tracking-[0.4em] uppercase text-[var(--color-red)] mb-4">
            Our Work
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
            Gallery
          </h1>
          <p className="text-white/40 font-light max-w-md mx-auto">
            Browse our recent projects and see the A.M. Detailing difference.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[var(--color-red)] text-white"
                  : "bg-white/5 border border-white/10 text-white/50 hover:border-white/20 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {filtered.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                delay: i * 0.05,
              }}
              className="break-inside-avoid"
            >
              <div
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                  i % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm text-white font-light">{item.alt}</p>
                  <p className="text-xs text-[var(--color-red)] mt-1">
                    {item.category}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
