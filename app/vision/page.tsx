"use client";

import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

export default function VisionPage() {
  return (
    <PageTransition>

      {/* HERO */}
      <PageHero
        title="Our Vision"
        subtitle="Every Dream Matters"
        backgroundImage="/images/hero.jpg"
      />

      {/* CONTENT */}
      <section className="py-24 px-6 bg-[#f8f5f0]">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-12 rounded-3xl shadow-xl border-t-8 border-[#7b5e57]"
          >

            {/* ICON */}
            <FaEye className="text-6xl text-[#7b5e57] mx-auto mb-8" />

            {/* MAIN VISION */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#3e2f2b] leading-relaxed mb-8">
              "To build a self-sustained, compassionate ecosystem where
              education, awareness, and wellness uplift every life,
              especially women and children."
            </h2>

            {/* DIVIDER */}
            <div className="w-32 h-[2px] bg-gray-200 mx-auto mb-8"></div>

            {/* SUB POINTS */}
            <div className="text-lg text-gray-600 space-y-2">
              <p>A world where every girl learns.</p>
              <p>Every woman stands strong.</p>
              <p>Every community grows together.</p>
            </div>

          </motion.div>

        </div>
      </section>

    </PageTransition>
  );
}