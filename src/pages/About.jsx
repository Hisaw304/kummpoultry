import React from "react";
import { motion } from "framer-motion";
import { Users, Clock, Heart, Handshake, ChevronRight } from "lucide-react";

// Replace these imports with your actual asset filenames
import heroBg from "../assets/hero2.jpg";
import missionImg from "../assets/hero3.jpg";
import leadershipImg from "../assets/leadership.jpg";
import historyImg from "../assets/history.jpg";
import cultureImg from "../assets/culture.jpg";
import partnersImg from "../assets/partners.jpg";

export default function About() {
  const sections = [
    {
      title: "Our leadership",
      text: "Run by family, driven by integrity. For over three generations, the Kumm family has been committed to being good stewards, good neighbors and good partners.",
      cta: { label: "Meet the Kumms", href: "/about" },
      img: leadershipImg,
      icon: <Users size={20} />,
    },
    {
      title: "Our history",
      text: "For decades our family has supplied farm-fresh poultry and eggs to local markets. The business began with a small farm and grew through a focus on quality and community.",
      cta: { label: "See where we’ve been", href: "/about" },
      img: historyImg,
      icon: <Clock size={20} />,
    },
    {
      title: "Our culture",
      text: "As a family-run business, we strive to be a good employer and neighbor — part of our local communities and proud to operate with respect and care.",
      cta: { label: "Learn about our values", href: "/about" },
      img: cultureImg,
      icon: <Heart size={20} />,
    },
    {
      title: "Our partners",
      text: "We partner with retailers, wholesalers and foodservice providers to deliver consistent, humane and high-quality poultry products—built on trust and transparency.",
      cta: { label: "Partner with us", href: "/about" },
      img: partnersImg,
      icon: <Handshake size={20} />,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-transparent">
      {/* Hero */}
      <section
        className="relative w-full h-[62vh] md:h-[68vh] lg:h-[72vh] overflow-hidden flex items-center"
        aria-label="About hero"
      >
        <div className="absolute inset-0 -z-10">
          <img
            src={heroBg || "/src/assets/hero1.jpg"}
            alt="KummPoultry farm"
            className="w-full h-full object-cover"
            draggable={false}
            onError={(e) => {
              console.error("Hero image failed to load:", e?.target?.src);
              e.target.style.border = "6px solid rgba(255,0,0,0.7)";
              e.target.style.opacity = "0.8";
            }}
            onLoad={() =>
              console.log(
                "Hero image loaded:",
                heroBg || "/src/assets/hero1.jpg"
              )
            }
          />

          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="text-white max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-[rgba(255,255,255,0.06)] px-3 py-1 rounded-full text-sm font-medium">
              <span className="inline-block rounded-full kp-bg-yellow text-black px-2 py-0.5 text-xs font-semibold">
                Egg Visionaries
              </span>
              <span className="text-xs">Family-run since our beginnings</span>
            </div>

            <h1 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight kp-text-yellow">
              KummPoultry — committed to quality, care, and community
            </h1>

            <p className="mt-4 text-lg text-white/90">
              Kumm Poultry is a trusted name in premium egg production, known
              for our commitment to quality, care, and community. From our
              humble beginnings, we’ve grown into a modern poultry brand while
              staying true to our family values — raising healthy hens,
              producing fresh, wholesome eggs, and nurturing a sustainable
              future for generations to come.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[var(--kp-yellow)] text-black font-semibold kp-focus shadow"
              >
                Our products <ChevronRight size={16} />
              </a>

              <a
                href="/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/10 text-white border border-white/20 kp-focus"
              >
                Contact us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-sm"
        >
          <div className="md:flex md:items-center md:gap-8">
            <div className="md:flex-1">
              <h2 className="text-2xl font-extrabold kp-text-yellow">
                Our mission
              </h2>
              <p className="mt-4 text-gray-700">
                It’s our mission to bring wholesome goodness into the world by
                producing delicious eggs that are made with the highest
                standards of quality, animal care and sustainability.
              </p>
            </div>

            <div className="mt-6 md:mt-0 md:w-64">
              <img
                src={missionImg}
                alt="Our mission - farm image"
                className="w-full h-40 object-cover rounded-lg shadow-md"
                draggable={false}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feature blocks */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-8 space-y-12">
        {sections.map((s, idx) => {
          const reverse = idx % 2 === 1;
          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-12 gap-0`}
            >
              {/* Image */}
              <div
                className={`md:col-span-5 ${reverse ? "md:order-2" : ""}`}
                aria-hidden="true"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full min-h-[220px] object-cover"
                  draggable={false}
                />
              </div>

              {/* Content */}
              <div
                className={`md:col-span-7 p-8 ${
                  reverse ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="flex items-center gap-3 text-kp-yellow">
                  <div className="p-2 rounded-lg bg-[var(--kp-yellow)]/10">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                </div>

                <p className="mt-4 text-gray-700">{s.text}</p>

                <a
                  href={s.cta.href}
                  className="inline-flex items-center gap-2 mt-6 text-sm font-medium kp-text-yellow kp-focus"
                >
                  {s.cta.label} <ChevronRight size={14} />
                </a>
              </div>
            </motion.article>
          );
        })}
      </section>

      {/* Closing CTA */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--kp-yellow)] rounded-2xl p-8 text-black flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div>
            <h4 className="text-xl font-bold">
              Ready to taste the difference?
            </h4>
            <p className="mt-1 text-sm">
              Partner with KummPoultry or order direct for farm-fresh quality.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/"
              className="px-4 py-2 rounded-md bg-black text-white font-semibold kp-focus"
            >
              Shop now
            </a>
            <a
              href="/"
              className="px-4 py-2 rounded-md bg-white text-black font-medium kp-focus"
            >
              Contact sales
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
