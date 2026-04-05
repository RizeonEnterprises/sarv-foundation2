"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-28 px-6 bg-[#7b5e57] text-white text-center relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold leading-tight mb-6"
        >
          Together, We Can Build <br />
          A Better Tomorrow
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-200 mb-10"
        >
          Every small step creates a ripple of change. Join us in making a
          difference that truly matters.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Button className="bg-white text-[#7b5e57] hover:bg-gray-200 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg">
            Join Sarv Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}