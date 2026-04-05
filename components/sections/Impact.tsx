"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "500+", label: "Women Empowered" },
  { number: "800+", label: "Children Educated" },
  { number: "50+", label: "Community Drives" },
  { number: "1000+", label: "Lives Impacted" },
];

export default function Impact() {
  return (
    <section className="py-24 px-6 bg-[#f1ebe5] text-center">
      
      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-sm uppercase tracking-wider text-[#7b5e57] mb-3">
          Impact in Motion
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Every Number Tells a Story of Change
        </h2>

        <p className="text-gray-600">
          Behind every statistic is a life touched, a dream nurtured,
          and a future transformed.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-6"
          >
            <h3 className="text-3xl font-bold text-[#7b5e57] mb-2">
              {item.number}
            </h3>
            <p className="text-gray-600 text-sm">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 text-lg text-gray-700 italic max-w-2xl mx-auto"
      >
        “Every smile is a story. Every story is a step toward change.”
      </motion.p>
    </section>
  );
}