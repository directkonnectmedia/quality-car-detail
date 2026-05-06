import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-black)] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="A.M. Detailing"
                width={60}
                height={60}
                className="w-15 h-15"
              />
            </Link>
            <p className="text-sm text-white/50 font-light leading-relaxed max-w-xs">
              Premium auto detailing services in Arizona. Your vehicle deserves
              the best treatment. Since 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-light tracking-[0.3em] uppercase text-white/40 mb-6">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {[
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Book Now", href: "/booking" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/50 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-light tracking-[0.3em] uppercase text-white/40 mb-6">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--color-red)]" />
                <span className="text-sm text-white/60">(480) 555-0125</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--color-red)]" />
                <span className="text-sm text-white/60">
                  info@amdetailing.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[var(--color-red)]" />
                <span className="text-sm text-white/60">Arizona</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} A.M. Detailing. All rights
            reserved.
          </p>
          <p className="text-xs text-white/20">
            Premium Auto Detailing &middot; Arizona
          </p>
        </div>
      </div>
    </footer>
  );
}
