import React, { useState } from "react";
import { Menu, X, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Privacy & Policy", href: "/privacy" },
  ];

  return (
    <header className="w-full">
      {/* Top contact bar - yellow background */}
      <div className="kp-bg-yellow text-gray-800 text-sm">
        <div className="max-w-7xl  mx-auto px-4 py-2 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
          <div className="flex items-center gap-4 justify-center  lg:justify-start">
            <a
              href="mailto:kummpoultry@gmail.com"
              className="flex items-center gap-2 kp-focus"
            >
              <Mail size={14} />
              <span className="text-xs">kummpoultry@gmail.com</span>
            </a>
            <a
              href="tel:+16812001946"
              className="flex items-center gap-2 kp-focus"
            >
              <Phone size={14} />
              <span className="text-xs">+1 (402) 225-5507</span>
            </a>
          </div>

          <div className="text-center lg:text-right text-xs">
            <span>Fast delivery • Farm-fresh quality</span>
          </div>
        </div>
      </div>

      {/* Main nav - white bg with yellow text */}
      <nav className="bg-white text-kp-yellow shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <a href="/" className="font-extrabold text-xl kp-text-yellow">
              KummPoultry
            </a>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-kp-yellow hover:underline decoration-[var(--kp-blue)] link-hover-underline kp-focus"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpen((x) => !x)}
              aria-label="Toggle menu"
              className="p-2 kp-focus"
            >
              {!open ? <Menu size={20} /> : <X size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu panel (animated) */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden px-4 pb-4"
            >
              <div className="flex flex-col gap-3">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 link-hover-underline kp-focus"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
