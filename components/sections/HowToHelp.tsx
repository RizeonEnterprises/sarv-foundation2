"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const options = [
  {
    title: "Sponsor a Dream",
    desc: "Support a girl’s education and help her build a brighter future.",
  },
  {
    title: "Volunteer",
    desc: "Teach, guide, or contribute your skills to empower communities.",
  },
  {
    title: "Partner With Purpose",
    desc: "Collaborate with us for meaningful and large-scale impact.",
  },
  {
    title: "Donate",
    desc: "Contribute funds, books, or essentials to support those in need.",
  },
];

export default function HowToHelp() {
  return (
    <section className="py-24 px-6 bg-white text-center">
      
      {/* Heading */}
      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-sm uppercase tracking-wider text-[#7b5e57] mb-3">
          Get Involved
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Be a Part of the Change
        </h2>

        <p className="text-gray-600">
          When you give even a little… someone receives a world.
        </p>
      </div>

      {/* Options Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {options.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm mb-6">
              {item.desc}
            </p>

            {/* BUTTON LINKED TO CONTACT */}
            <Link href="/contact">
              <Button className="rounded-xl w-full">
                Get Started
              </Button>
            </Link>

          </motion.div>
        ))}
      </div>

      {/* 🔥 MAIN CTA (Join SARV Today) */}
      <div className="mt-16">
        <Link href="/contact">
          <Button className="px-8 py-6 text-lg rounded-2xl bg-[#7b5e57] hover:scale-105 transition">
            Join SARV Today
          </Button>
        </Link>
      </div>

    </section>
  );
}