"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Car,
  Sparkles,
  ClipboardCheck,
  Calendar,
  User,
  ChevronRight,
  ChevronLeft,
  Check,
} from "lucide-react";

const STEPS = [
  { label: "Vehicle", icon: Car },
  { label: "Services", icon: Sparkles },
  { label: "Condition", icon: ClipboardCheck },
  { label: "Schedule", icon: Calendar },
  { label: "Contact", icon: User },
];

const vehicleSizes = [
  "Sedan",
  "Coupe",
  "SUV",
  "Truck",
  "Van",
  "UTV / Side-by-Side",
  "Other",
];

const serviceTypes = [
  {
    id: "exterior",
    title: "Exterior Wash",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=400&q=80",
  },
  {
    id: "interior",
    title: "Interior Detail",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80",
  },
  {
    id: "full",
    title: "Full Detail",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=400&q=80",
  },
  {
    id: "paint",
    title: "Paint Correction",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400&q=80",
  },
  {
    id: "ceramic",
    title: "Ceramic Coating",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=400&q=80",
  },
  {
    id: "engine",
    title: "Engine Bay",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
  },
];

const addOns = [
  "Pet Hair Removal",
  "Odor Elimination",
  "Headlight Restoration",
  "Tire/Rim Deep Clean",
  "Scratch Touch-Up",
  "Windshield Treatment",
];

const conditionLevels = [
  {
    id: "clean",
    label: "Clean",
    description: "Light dust, minor touch-up needed",
  },
  {
    id: "moderate",
    label: "Moderate",
    description: "Visible dirt, some stains or marks",
  },
  {
    id: "heavy",
    label: "Heavy",
    description: "Significant soiling, deep cleaning required",
  },
];

const concerns = [
  "Stains",
  "Pet Hair",
  "Smoke Odor",
  "Swirl Marks",
  "Scratches",
  "Water Spots",
  "Tree Sap",
];

const timeSlots = ["Morning (8am-12pm)", "Afternoon (12pm-4pm)", "Evening (4pm-7pm)"];

interface FormData {
  year: string;
  make: string;
  model: string;
  size: string;
  color: string;
  services: string[];
  addOns: string[];
  condition: string;
  concerns: string[];
  notes: string;
  date: string;
  time: string;
  location: string;
  name: string;
  phone: string;
  email: string;
  referral: string;
}

const initialFormData: FormData = {
  year: "",
  make: "",
  model: "",
  size: "",
  color: "",
  services: [],
  addOns: [],
  condition: "",
  concerns: [],
  notes: "",
  date: "",
  time: "",
  location: "",
  name: "",
  phone: "",
  email: "",
  referral: "",
};

const stepVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -40 },
};

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialFormData);

  function updateField(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function toggleArrayField(field: "services" | "addOns" | "concerns", value: string) {
    setForm((prev) => {
      const arr = prev[field];
      return {
        ...prev,
        [field]: arr.includes(value)
          ? arr.filter((v) => v !== value)
          : [...arr, value],
      };
    });
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-light tracking-[0.4em] uppercase text-[var(--color-red)] mb-4">
            Book Your Detail
          </p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white">
            Schedule Service
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-12 px-4">
          {STEPS.map((s, i) => (
            <div key={s.label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    i < step
                      ? "bg-[var(--color-red)] text-white"
                      : i === step
                        ? "bg-[var(--color-red)]/20 border-2 border-[var(--color-red)] text-[var(--color-red)]"
                        : "bg-white/5 border border-white/10 text-white/30"
                  }`}
                >
                  {i < step ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <s.icon className="w-4 h-4" />
                  )}
                </div>
                <span
                  className={`text-xs mt-2 hidden sm:block ${
                    i <= step ? "text-white/70" : "text-white/20"
                  }`}
                >
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={`w-8 sm:w-16 h-px mx-2 transition-colors duration-300 ${
                    i < step ? "bg-[var(--color-red)]" : "bg-white/10"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="glass rounded-2xl p-8 sm:p-10 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={stepVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
            >
              {/* Step 1: Vehicle Info */}
              {step === 0 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-medium text-white mb-6">
                    Vehicle Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="Year"
                      value={form.year}
                      onChange={(e) => updateField("year", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:border-[var(--color-red)]/50 focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Make"
                      value={form.make}
                      onChange={(e) => updateField("make", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:border-[var(--color-red)]/50 focus:outline-none transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Model"
                      value={form.model}
                      onChange={(e) => updateField("model", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:border-[var(--color-red)]/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-3">Vehicle Size</p>
                    <div className="flex flex-wrap gap-2">
                      {vehicleSizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => updateField("size", size)}
                          className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                            form.size === size
                              ? "bg-[var(--color-red)] text-white"
                              : "bg-white/5 border border-white/10 text-white/50 hover:border-white/20"
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Vehicle Color"
                    value={form.color}
                    onChange={(e) => updateField("color", e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:border-[var(--color-red)]/50 focus:outline-none transition-colors"
                  />
                </div>
              )}

              {/* Step 2: Service Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-medium text-white mb-6">
                    Select Services
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {serviceTypes.map((svc) => (
                      <button
                        key={svc.id}
                        onClick={() =>
                          toggleArrayField("services", svc.id)
                        }
                        className={`relative overflow-hidden rounded-xl aspect-[4/3] group ${
                          form.services.includes(svc.id)
                            ? "ring-2 ring-[var(--color-red)]"
                            : ""
                        }`}
                      >
                        <img
                          src={svc.image}
                          alt={svc.title}
                          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3">
                          <p className="text-sm font-medium text-white">
                            {svc.title}
                          </p>
                        </div>
                        {form.services.includes(svc.id) && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-[var(--color-red)] rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-3">Add-Ons</p>
                    <div className="flex flex-wrap gap-2">
                      {addOns.map((addon) => (
                        <button
                          key={addon}
                          onClick={() => toggleArrayField("addOns", addon)}
                          className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                            form.addOns.includes(addon)
                              ? "bg-[var(--color-red)] text-white"
                              : "bg-white/5 border border-white/10 text-white/50 hover:border-white/20"
                          }`}
                        >
                          {addon}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Vehicle Condition */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-medium text-white mb-6">
                    Vehicle Condition
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {conditionLevels.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => updateField("condition", level.id)}
                        className={`p-6 rounded-xl text-left transition-all duration-300 ${
                          form.condition === level.id
                            ? "bg-[var(--color-red)]/10 border-2 border-[var(--color-red)]"
                            : "bg-white/5 border border-white/10 hover:border-white/20"
                        }`}
                      >
                        <p className="text-lg font-medium text-white mb-1">
                          {level.label}
                        </p>
                        <p className="text-xs text-white/40">
                          {level.description}
                        </p>
                      </button>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-3">
                      Specific Concerns
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {concerns.map((concern) => (
                        <button
                          key={concern}
                          onClick={() =>
                            toggleArrayField("concerns", concern)
                          }
                          className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
                            form.concerns.includes(concern)
                              ? "bg-[var(--color-red)] text-white"
                              : "bg-white/5 border border-white/10 text-white/50 hover:border-white/20"
                          }`}
                        >
                          {concern}
                        </button>
                      ))}
                    </div>
                  </div>
                  <textarea
                    placeholder="Additional notes (optional)"
                    value={form.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:border-[var(--color-red)]/50 focus:outline-none transition-colors resize-none"
                  />
                </div>
              )}

              {/* Step 4: Scheduling */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-medium text-white mb-6">
                    Schedule Your Appointment
                  </h2>
                  <div>
                    <label className="block text-sm text-white/50 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => updateField("date", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[var(--color-red)]/50 focus:outline-none transition-colors [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-3">
                      Preferred Time
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => updateField("time", slot)}
                          className={`p-4 rounded-xl text-center transition-all duration-300 ${
                            form.time === slot
                              ? "bg-[var(--color-red)]/10 border-2 border-[var(--color-red)] text-white"
                              : "bg-white/5 border border-white/10 text-white/50 hover:border-white/20"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-white/50 mb-3">
                      Service Location
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {["Drop-off", "Mobile (we come to you)"].map((loc) => (
                        <button
                          key={loc}
                          onClick={() => updateField("location", loc)}
                          className={`p-4 rounded-xl text-center transition-all duration-300 ${
                            form.location === loc
                              ? "bg-[var(--color-red)]/10 border-2 border-[var(--color-red)] text-white"
                              : "bg-white/5 border border-white/10 text-white/50 hover:border-white/20"
                          }`}
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Contact + Review */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-medium text-white mb-6">
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:border-[var(--color-red)]/50 focus:outline-none transition-colors"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:border-[var(--color-red)]/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:border-[var(--color-red)]/50 focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="How did you hear about us?"
                    value={form.referral}
                    onChange={(e) => updateField("referral", e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:border-[var(--color-red)]/50 focus:outline-none transition-colors"
                  />

                  {/* Review Summary */}
                  <div className="mt-6 p-6 bg-white/[0.03] rounded-xl border border-white/5">
                    <h3 className="text-sm font-medium text-white/60 tracking-wider uppercase mb-4">
                      Booking Summary
                    </h3>
                    <div className="space-y-2 text-sm">
                      {form.year && (
                        <p className="text-white/50">
                          <span className="text-white/70">Vehicle:</span>{" "}
                          {form.year} {form.make} {form.model} ({form.size})
                        </p>
                      )}
                      {form.services.length > 0 && (
                        <p className="text-white/50">
                          <span className="text-white/70">Services:</span>{" "}
                          {form.services
                            .map(
                              (id) =>
                                serviceTypes.find((s) => s.id === id)?.title
                            )
                            .join(", ")}
                        </p>
                      )}
                      {form.addOns.length > 0 && (
                        <p className="text-white/50">
                          <span className="text-white/70">Add-ons:</span>{" "}
                          {form.addOns.join(", ")}
                        </p>
                      )}
                      {form.condition && (
                        <p className="text-white/50">
                          <span className="text-white/70">Condition:</span>{" "}
                          {form.condition}
                        </p>
                      )}
                      {form.date && (
                        <p className="text-white/50">
                          <span className="text-white/70">Date:</span>{" "}
                          {form.date} &mdash; {form.time}
                        </p>
                      )}
                      {form.location && (
                        <p className="text-white/50">
                          <span className="text-white/70">Location:</span>{" "}
                          {form.location}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
            {step > 0 ? (
              <button
                onClick={() => setStep((s) => s - 1)}
                className="flex items-center gap-2 px-6 py-3 text-sm text-white/50 hover:text-white border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>
            ) : (
              <div />
            )}
            {step < STEPS.length - 1 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                className="flex items-center gap-2 px-8 py-3 bg-[var(--color-red)] hover:bg-[var(--color-red-hover)] text-white text-sm font-medium tracking-wider uppercase rounded-lg transition-all duration-300 red-glow"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button className="flex items-center gap-2 px-8 py-3 bg-[var(--color-red)] hover:bg-[var(--color-red-hover)] text-white text-sm font-medium tracking-wider uppercase rounded-lg transition-all duration-300 red-glow">
                Submit Booking
                <Check className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
