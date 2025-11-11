import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import meetImg from "../assets/culture.jpg"; // 🖼️ Replace with your actual image

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function MeetKummPoultry() {
  return (
    <section className="relative w-full bg-[var(--kp-body-bg)] py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Section Heading + Intro */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--kp-yellow)] mb-3">
            Meet KummPoultry
          </h2>
          <p className="text-[var(--kp-text)] text-lg text-black leading-relaxed">
            From humble beginnings to a trusted name in ethical poultry farming
            — we’ve grown through dedication, care, and an unwavering commitment
            to quality.
          </p>
        </motion.div>

        {/* Image + Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* TEXT SIDE */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <p className="text-[var(--kp-text)] text-lg leading-relaxed mb-6">
              KummPoultry is a family-run poultry brand devoted to bringing
              premium-quality, farm-fresh eggs and poultry products to homes and
              businesses. Our process blends tradition and innovation — rooted
              in humane farming, sustainable practices, and transparency from
              farm to table.
            </p>

            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[var(--kp-yellow)] text-black font-semibold hover:opacity-90 transition-opacity duration-200"
            >
              Learn more <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* IMAGE SIDE */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-2xl shadow-xl order-first md:order-last"
          >
            <img
              src={meetImg}
              alt="KummPoultry family farm"
              className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
