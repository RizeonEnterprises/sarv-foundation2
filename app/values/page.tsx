"use client";

import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import {
  FaHandHoldingHeart,
  FaCheckDouble,
  FaUserShield,
  FaPrayingHands,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function ValuesPage() {
  const values = [
    {
      icon: <FaHandHoldingHeart />,
      title: "Compassion",
      desc: "Kindness must create empowerment.",
      bg: "bg-green-100",
      color: "text-green-700",
    },
    {
      icon: <FaCheckDouble />,
      title: "Transparency",
      desc: "Every rupee reaches the right place.",
      bg: "bg-yellow-100",
      color: "text-yellow-600",
    },
    {
      icon: <FaUserShield />,
      title: "Dignity",
      desc: "Every life deserves respect.",
      bg: "bg-blue-100",
      color: "text-blue-700",
    },
    {
      icon: <FaPrayingHands />,
      title: "Service",
      desc: "Seva from the heart.",
      bg: "bg-purple-100",
      color: "text-purple-700",
    },
  ];

  return (
    <PageTransition>

      {/* HERO */}
      <PageHero
        title="Our Core Values"
        subtitle="The Principles That Guide Us"
        backgroundImage="/images/hero.jpg"
      />

      {/* VALUES */}
      <section className="py-20 px-6 bg-[#f8f5f0]">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition"
              >

                {/* ICON */}
                <div
                  className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-3xl mb-6 ${item.bg} ${item.color}`}
                >
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="font-semibold text-xl text-[#3e2f2b] mb-3">
                  {item.title}
                </h3>

                {/* DIVIDER */}
                <div className="w-10 h-[2px] bg-[#7b5e57] mx-auto mb-3"></div>

                {/* DESC */}
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

          {/* QUOTE */}
          <div className="text-center mt-16">
            <p className="text-2xl font-medium text-[#7b5e57] italic">
              "These values are not principles. They are our promise."
            </p>
          </div>

        </div>
      </section>

    </PageTransition>
  );
}