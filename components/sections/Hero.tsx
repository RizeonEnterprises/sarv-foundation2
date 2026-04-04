"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Sarv Foundation"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Empowering Lives. <br />
          Nurturing Humanity.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-200"
        >
          A movement of compassion, dignity, and inclusive growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button className="bg-[#7b5e57] hover:bg-[#6a504a] text-white px-6 py-3 rounded-2xl text-lg">
            Sponsor a Child
          </Button>

          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-2xl text-lg"
          >
            Join as Volunteer
          </Button>
        </motion.div>
      </div>
    </section>
  );
}