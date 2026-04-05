"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="Sarv Foundation"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Gradient Overlay (Premium Look) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm md:text-base text-gray-300 mb-4 tracking-wide uppercase"
        >
          A Movement of Compassion & Change
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Empowering Lives. <br />
          Nurturing Humanity.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-gray-200"
        >
          A journey of dignity, love, and inclusive growth — where every life matters.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/join"><Button className="bg-[#7b5e57] hover:bg-[#6a504a] text-white px-8 py-4 rounded-2xl text-lg shadow-lg">
            Sponsor a Child
          </Button></Link>
          <Link href="/contact">
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl text-lg"
          >
            Join as Volunteer
          </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 flex flex-col items-center text-gray-300 text-sm">
        <span className="mb-1">Scroll</span>
        <div className="w-5 h-8 border border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-300 mt-1 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}