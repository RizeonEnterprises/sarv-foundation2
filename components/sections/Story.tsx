"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Reveal from "@/components/Reveal";

<Reveal>
  <h2>Our Story</h2>
</Reveal>
export default function Story() {
  return (
    <section className="py-24 px-6 bg-[#f8f5f0]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/2006-SARV-Img-10.webp"
            alt="Sarv Story"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* RIGHT: TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Small Label */}
          <p className="text-sm uppercase tracking-wider text-[#7b5e57] mb-3">
            Our Essence
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
            A Journey Built on Compassion, <br /> Dignity & Love
          </h2>

          {/* Paragraph */}
          <p className="text-gray-700 leading-relaxed mb-4">
            Sarv Foundation was born from a simple belief — that every small act
            of kindness carries the power to transform lives.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            ‘Sarv’ means all — a vision where no one is invisible, unheard, or
            left behind. From community kitchens to empowering women and
            educating young minds, every step has been guided by purpose.
          </p>

          <p className="text-gray-700 leading-relaxed">
            This is not just an organization. It is a journey of hearts, growing
            stronger with every life it touches.
          </p>
        </motion.div>
      </div>
    </section>
  );
}