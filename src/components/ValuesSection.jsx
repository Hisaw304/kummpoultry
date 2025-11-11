import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import eggsBg from "../assets/cmp1.jpg";
import operationsBg from "../assets/cmp2.jpg";
import newsBg from "../assets/cmp4.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function ValuesSection() {
  const cards = [
    {
      title: "Our Eggs",
      desc: "KummPoultry provides premium, farm-fresh eggs — produced with humane care, advanced safety standards, and the highest quality feed.",
      img: eggsBg,
      button: "Explore our selection",
      href: "/about",
    },
    {
      title: "Our Operations",
      desc: "At KummPoultry, we believe in continuous improvement — optimizing efficiency, animal welfare, and sustainability at every step.",
      img: operationsBg,
      button: "Learn more",
      href: "/about",
    },
    {
      title: "News & Insights",
      desc: "Stay up to date with our latest innovations, sustainability milestones, and community impact stories.",
      img: newsBg,
      button: "Read updates",
      href: "/about",
    },
  ];

  return (
    <section className="relative py-24 bg-[var(--kp-body-bg)] overflow-hidden">
      {/* Section heading */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16 px-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--kp-yellow)] mb-4">
          Our Values
        </h2>
        <p className="text-black text-lg leading-relaxed">
          We do what’s right — for the hens, for the people, and for the planet.
          Every egg we produce carries our promise of care and integrity.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-12">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="relative rounded-2xl overflow-hidden group h-[420px] shadow-xl"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            {/* Background image */}
            <img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
              <p className="text-white/90 text-sm mb-6">{card.desc}</p>

              {/* Animated Button */}
              <motion.a
                href={card.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-white/30 font-semibold bg-transparent text-white relative overflow-hidden group"
              >
                <span className="relative z-10">{card.button}</span>
                <ArrowRight size={16} className="relative z-10" />
                {/* Animated background on hover */}
                <span className="absolute inset-0 bg-[var(--kp-yellow)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[var(--kp-yellow)] mix-blend-multiply" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
