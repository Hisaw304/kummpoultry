// src/components/NewsInsights.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// replace with your real asset imports
import news1 from "../assets/picture1.png";
import news2 from "../assets/picture2.png";

const containerFade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function NewsInsights() {
  const articles = [
    {
      id: "donation",
      title: "KummPoultry donates 5,000 food items to local organizations",
      excerpt:
        "As part of our community-first program, KummPoultry contributed thousands of fresh poultry products and essentials to local families and food banks — helping nourish neighbors in need.",
      image: news1,
      alt: "Volunteers packing food donations",
      href: "/news/donation-drive",
    },
    {
      id: "outdoor-eggs",
      title: "KummPoultry launches new outdoor cage-free eggs",
      excerpt:
        "Expanding our commitment to animal welfare, KummPoultry introduces an outdoor cage-free line — providing hens with space and sunlight while delivering tastier, higher-quality eggs.",
      image: news2,
      alt: "Hens grazing outside at sunrise",
      href: "/news/outdoor-eggs",
    },
  ];

  return (
    <section
      aria-label="News and insights"
      className="w-full bg-[var(--kp-body-bg)] text-[var(--kp-text)] py-20"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* header */}
        <motion.header
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerFade}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--kp-blue)]">
            News & Insights
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Latest updates on our products, community initiatives, and farm
            practices — stories from the fields to your table.
          </p>
        </motion.header>

        {/* articles */}
        <div className="flex flex-col gap-16">
          {articles.map((item, idx) => {
            const flip = idx % 2 === 1;
            return (
              <motion.article
                key={item.id}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={containerFade}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}
              >
                {/* IMAGE COLUMN */}
                <div
                  className={`lg:col-span-7 order-1 ${
                    flip ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <div className="relative w-full">
                      {/* aspect container prevents stretching */}
                      <div className="aspect-[16/10] md:aspect-[16/9] w-full relative">
                        <motion.img
                          src={item.image}
                          alt={item.alt}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover"
                          whileHover={{ scale: 1.04 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          draggable={false}
                        />
                        {/* subtle top-to-bottom gradient for legibility */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/4 via-black/6 to-black/20 pointer-events-none" />
                        {/* CTA button positioned on image (bottom-left) */}
                        <div className="absolute left-6 bottom-6 z-20">
                          <ImageCTA href={item.href} label="Our eggs" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* TEXT COLUMN */}
                <div
                  className={`lg:col-span-5 flex flex-col gap-4 order-2 ${
                    flip ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--kp-blue)]">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <div className="mt-2">
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-3 text-[var(--kp-yellow)] font-semibold focus:outline-none kp-focus"
                      aria-label={`Read more about ${item.title}`}
                    >
                      Read more
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ImageCTA({ href = "#", label = "Our eggs" }) {
  return (
    <motion.a
      href={href}
      whileHover="hover"
      whileFocus="hover"
      initial="rest"
      animate="rest"
      // Framer Motion variants for child shim & text
      variants={{
        rest: {},
        hover: {},
      }}
      className="relative inline-flex items-center px-4 py-2 rounded-md overflow-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--kp-blue)] kp-focus"
      aria-label={label}
    >
      {/* shim: starts translated down (hidden) then slides up to fill button area.
          We purposely use CSS transform transitions on this span for best GPU perf. */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 bg-[var(--kp-body-bg)] -translate-y-full"
        variants={{
          rest: { translateY: "-100%" },
          hover: { translateY: "0%" },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        style={{ willChange: "transform" }}
      />

      {/* button text sits above shim; its color animates to black on hover */}
      <motion.span
        className="relative z-10 text-white font-semibold whitespace-nowrap"
        variants={{
          rest: { color: "rgba(255,255,255,1)" },
          hover: { color: "rgb(0,0,0)" },
        }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        {label}
      </motion.span>
    </motion.a>
  );
}
