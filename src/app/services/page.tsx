"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface ServiceItem {
  name: string;
  description: string;
  price: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

const categories: ServiceCategory[] = [
  {
    id: "exterior",
    title: "Exterior Detailing",
    description: "Hand wash, clay bar, wax, sealant, and more.",
    items: [
      { name: "Express Wash", description: "Hand wash, dry, and tire shine", price: "From $50" },
      { name: "Full Exterior", description: "Wash, clay bar, polish, and wax", price: "From $150" },
      { name: "Premium Exterior", description: "Full exterior plus trim restoration and sealant", price: "From $250" },
    ],
  },
  {
    id: "interior",
    title: "Interior Detailing",
    description: "Deep clean, leather care, odor removal, and restoration.",
    items: [
      { name: "Express Interior", description: "Vacuum, wipe down, and air freshener", price: "From $60" },
      { name: "Full Interior", description: "Deep vacuum, shampoo, leather condition, and detail", price: "From $175" },
      { name: "Premium Interior", description: "Full interior plus stain removal, odor elimination, and UV protection", price: "From $300" },
    ],
  },
  {
    id: "packages",
    title: "Full Detail Packages",
    description: "Complete interior and exterior transformation.",
    items: [
      { name: "Silver Package", description: "Express interior + express exterior", price: "From $100" },
      { name: "Gold Package", description: "Full interior + full exterior", price: "From $300" },
      { name: "Platinum Package", description: "Premium interior + premium exterior + engine bay", price: "From $500" },
    ],
  },
  {
    id: "paint-correction",
    title: "Paint Correction",
    description: "Swirl removal, scratch repair, and multi-stage polish.",
    items: [
      { name: "Single-Stage Polish", description: "Light swirl and scratch removal", price: "From $200" },
      { name: "Two-Stage Correction", description: "Compound and polish for moderate defects", price: "From $400" },
      { name: "Multi-Stage Correction", description: "Full paint restoration for heavy defects", price: "From $600" },
    ],
  },
  {
    id: "ceramic",
    title: "Ceramic Coating",
    description: "Long-lasting hydrophobic paint protection.",
    items: [
      { name: "1-Year Coating", description: "Entry-level ceramic protection", price: "From $300" },
      { name: "3-Year Coating", description: "Professional-grade ceramic sealant", price: "From $600" },
      { name: "5-Year Coating", description: "Premium multi-layer ceramic coating", price: "From $1,000" },
    ],
  },
  {
    id: "tires",
    title: "Tires & Rims",
    description: "Deep clean, degrease, and dress your wheels.",
    items: [
      { name: "Wheel Clean & Dress", description: "Clean, degrease, and tire shine", price: "From $40" },
      { name: "Deep Wheel Restoration", description: "Iron removal, clay, polish, and protect", price: "From $120" },
    ],
  },
];

function CategoryCard({ category }: { category: ServiceCategory }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      id={category.id}
      className="glass rounded-2xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 sm:p-8 text-left group"
      >
        <div>
          <h3 className="text-xl sm:text-2xl font-medium text-white mb-1">
            {category.title}
          </h3>
          <p className="text-sm text-white/40 font-light">
            {category.description}
          </p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-white/40 transition-transform duration-300 flex-shrink-0 ml-4 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="overflow-hidden"
      >
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 space-y-3">
          {category.items.map((item) => (
            <div
              key={item.name}
              className="flex items-start justify-between p-4 bg-white/[0.03] rounded-xl border border-white/5 hover:border-white/10 transition-colors duration-300"
            >
              <div>
                <p className="text-white font-medium text-sm">{item.name}</p>
                <p className="text-white/40 text-xs font-light mt-1">
                  {item.description}
                </p>
              </div>
              <span className="text-[var(--color-red)] text-sm font-medium whitespace-nowrap ml-4">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-light tracking-[0.4em] uppercase text-[var(--color-red)] mb-4">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
            What We Offer
          </h1>
          <p className="text-white/40 font-light max-w-md mx-auto">
            From a quick wash to a full restoration, every service is performed
            with precision and premium products.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-4">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </div>
  );
}
