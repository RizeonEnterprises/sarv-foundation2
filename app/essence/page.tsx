"use client";

import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

export default function EssencePage() {
  return (
    <PageTransition>

      {/* HERO */}
      <PageHero
        title="Our Essence"
        subtitle="The Heart of Sarv"
        backgroundImage="/images/2006-SARV-Img-06.webp"
      />

      {/* CONTENT */}
      <section className="py-20 px-6 bg-[#f8f5f0]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-[#3e2f2b] mb-6">
              The Spirit of Sarv
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Sarv Foundation is born from the belief that every small act of
              kindness carries the power to transform lives.
            </p>

            <p className="mb-4 text-gray-600">
              <strong>‘Sarv’</strong> means all, complete, whole—a vision where
              no one is invisible, unheard, or left behind.
            </p>

            <p className="mb-6 text-gray-600">
              Sarv stands on decades of on-ground experience in education,
              women empowerment, community kitchens, and dignity-based service.
            </p>

            {/* QUOTE */}
            <blockquote className="border-l-4 border-[#7b5e57] pl-6 italic text-[#7b5e57] text-lg mt-8 relative">
              <FaQuoteLeft className="absolute -top-4 -left-2 opacity-30 text-2xl" />
              "Every initiative started with one simple intention, to touch a life with love and purpose."
            </blockquote>
          </motion.div>

          {/* RIGHT IMAGES */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4 h-[500px]"
          >
            {/* BIG IMAGE */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg row-span-2">
              <Image
                src="/images/2006-SARV-Img-10.webp"
                alt="Sarv Essence 1"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* IMAGE 2 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/2006-SARV-Img-36.webp"
                alt="Sarv Essence 2"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* IMAGE 3 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/2006-SARV-Img-24.webp"
                alt="Sarv Essence 3"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* IMAGE 4 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/2006-SARV-Img-37.webp"
                alt="Sarv Essence 4"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            {/* IMAGE 5 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/2006-SARV-Img-46.webp"
                alt="Sarv Essence 5"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </motion.div>

        </div>
      </section>

    </PageTransition>
  );
}