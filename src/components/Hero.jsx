import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Feather, ChevronRight } from "lucide-react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

export default function Hero() {
  const images = [hero1, hero2, hero3];
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // Duration settings (ms)
  const DISPLAY_TIME = 6000;
  const FADE_DURATION = 0.8; // seconds (framer motion)

  // Auto-advance carousel
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, DISPLAY_TIME);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  // Pause on hover
  const pause = () => clearInterval(intervalRef.current);
  const resume = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, DISPLAY_TIME);
  };

  // framer motion variants for crossfade
  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section className="relative w-full h-screen max-h-[920px] overflow-hidden">
      {/* Background images (stacked absolute) */}
      <div
        className="absolute inset-0 -z-10"
        aria-hidden="true"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        {images.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`KummPoultry hero ${i + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === i ? 1 : 0 }}
            transition={{ duration: FADE_DURATION, ease: "easeInOut" }}
            style={{ willChange: "opacity" }}
          />
        ))}

        {/* overlay gradient — keeps contrast and hides micro gaps */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(4,6,23,0.25) 0%, rgba(4,6,23,0.45) 50%, rgba(4,6,23,0.6) 100%)",
            mixBlendMode: "multiply",
          }}
        />
      </div>
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-12 h-full flex items-center">
        <motion.div
          className="w-full md:w-3/4 lg:w-2/3 text-white py-20"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.06)] px-3 py-1 rounded-full text-sm font-medium mb-4">
            <span className="inline-block rounded-full kp-bg-yellow text-black px-2 py-0.5 text-xs font-semibold">
              Farm Fresh
            </span>
            <span>Premium poultry — sustainably raised</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-4 kp-text-yellow drop-shadow-lg">
            Fresh. Local. Delivered.
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-100 max-w-2xl">
            From our farm to your table — carefully raised poultry with
            transparent sourcing and fast delivery. Shop whole birds, fillets,
            and weekly bundles tailored to families and businesses.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            {/* <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="/"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-[var(--kp-yellow)] text-black font-semibold shadow-md kp-focus"
            >
              Shop Fresh <ChevronRight size={18} />
            </motion.a> */}

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="/about"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-md bg-white/10 text-white border border-white/20 font-medium kp-focus"
            >
              Learn More
            </motion.a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 items-center text-sm text-gray-200">
            <div className="inline-flex items-center gap-2">
              <Truck size={16} />
              <div>
                <div className="font-semibold">Free delivery</div>
                <div className="text-xs">on orders over $50</div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2">
              <Feather size={16} />
              <div>
                <div className="font-semibold">Humane farming</div>
                <div className="text-xs">ethically raised stock</div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2">
              <div className="rounded-full bg-white/10 px-2 py-1 text-xs font-semibold">
                New
              </div>
              <div>
                <div className="font-semibold">Weekly bundles</div>
                <div className="text-xs">discounted family packs</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right promo card */}
        <motion.aside
          className="hidden lg:flex ml-auto w-80 bg-white/6 rounded-2xl p-6 backdrop-blur-md border border-white/10"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col gap-4 text-white">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-200">Today’s special</div>
                <div className="font-bold text-lg kp-text-yellow">
                  Whole chicken — 25% off
                </div>
              </div>
              <div className="text-xs text-gray-300">Limited</div>
            </div>

            <p className="text-sm text-gray-200">
              Fresh, oven-ready birds for the family. Free recipe card included.
            </p>

            <a
              href="/"
              className="mt-2 inline-flex items-center gap-2 justify-center px-3 py-2 rounded-md bg-[var(--kp-yellow)] text-black font-semibold kp-focus"
            >
              Grab deal
              <ChevronRight size={14} />
            </a>
          </div>
        </motion.aside>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Show background ${i + 1}`}
            className={`w-3 h-3 rounded-full kp-focus transition-all ${
              i === index ? "bg-[var(--kp-yellow)] scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
