import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, ExternalLink, ArrowUp } from "lucide-react";
import heroBg from "../assets/hero3.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function PrivacyPolicy() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 250);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main className="min-h-screen bg-[var(--kp-body-bg)] text-gray-800">
      {/* HERO SECTION */}
      <section className="relative w-full h-[55vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="KummPoultry Privacy Policy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.1)] px-3 py-1 rounded-full text-sm mb-4">
            <ShieldCheck size={16} />
            <span>Transparency & Trust</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold kp-text-yellow">
            Privacy Policy
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-white/90">
            Your privacy matters to us. Learn how KummPoultry collects,
            protects, and uses your information responsibly.
          </p>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <section className="relative z-10 max-w-5xl mx-auto py-16 px-6 md:px-10 space-y-14">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold kp-text-yellow">
            Our Commitment to Your Privacy
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong>KummPoultry</strong>, we value your privacy and are
            committed to protecting your personal data. This Privacy Policy
            explains what information we collect, how we use it, and the rights
            you have when engaging with our website and services.
          </p>
        </motion.div>

        {/* Website Visitors */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Lock size={18} className="text-[var(--kp-yellow)]" /> Website
            Visitors
          </h3>
          <p>
            Like many websites, KummPoultry gathers non-personally identifying
            information such as browser type, device, and time of visit to
            better understand how our visitors use our platform. This helps us
            enhance user experience and optimize website performance.
          </p>
        </motion.div>

        {/* Personally Identifiable Information */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Lock size={18} className="text-[var(--kp-yellow)]" /> Gathering of
            Personally Identifiable Information
          </h3>
          <p>
            Visitors who use our contact forms may provide personal information
            such as name and email address. This data is used solely to respond
            to inquiries or requests, and never sold or shared with unauthorized
            parties.
          </p>
        </motion.div>

        {/* Security */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <ShieldCheck size={18} className="text-[var(--kp-yellow)]" />{" "}
            Security
          </h3>
          <p>
            We use industry-standard security measures to protect your data.
            However, please remember that no system is completely secure, and
            absolute protection cannot be guaranteed. We continuously work to
            maintain robust digital safeguards.
          </p>
        </motion.div>

        {/* External Links */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <ExternalLink size={18} className="text-[var(--kp-yellow)]" /> Links
            to External Sites
          </h3>
          <p>
            Our website may include links to third-party websites. KummPoultry
            has no control over their content or policies. We encourage you to
            review the privacy practices of any external sites you visit.
          </p>
        </motion.div>

        {/* Policy Changes */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <ShieldCheck size={18} className="text-[var(--kp-yellow)]" /> Policy
            Updates
          </h3>
          <p>
            KummPoultry may update this Privacy Policy occasionally to reflect
            operational, legal, or regulatory changes. We encourage you to check
            this page regularly. Continued use of our website implies acceptance
            of any updated terms.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="space-y-4 border-t border-gray-200 pt-10"
        >
          <h3 className="text-xl font-semibold">Questions?</h3>
          <p>
            If you have any questions about our Privacy Policy, feel free to
            contact us at{" "}
            <a
              href="mailto:privacy@kummpoultry.com"
              className="text-[var(--kp-yellow)] hover:underline font-semibold"
            >
              kummpoultry@gmail.com
            </a>
            .
          </p>
        </motion.div>
      </section>

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[var(--kp-yellow)] text-black p-3 rounded-full shadow-lg hover:scale-105 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </main>
  );
}
