"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaHandsHelping,
  FaHandshake,
  FaGift,
} from "react-icons/fa";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";

const options = [
  {
    icon: <FaGraduationCap />,
    title: "Sponsor a Dream",
    desc: "Support a girl’s education and help shape her future with dignity and opportunity.",
    color: "from-pink-100 to-pink-200",
  },
  {
    icon: <FaHandsHelping />,
    title: "Volunteer",
    desc: "Contribute your skills by teaching, mentoring, or supporting community programs.",
    color: "from-green-100 to-green-200",
  },
  {
    icon: <FaHandshake />,
    title: "Partner With Purpose",
    desc: "Collaborate with us through CSR or partnerships to create large-scale impact.",
    color: "from-blue-100 to-blue-200",
  },
  {
    icon: <FaGift />,
    title: "Donate in Kind",
    desc: "Donate books, essentials, or digital tools to support underserved communities.",
    color: "from-orange-100 to-orange-200",
  },
];

export default function JoinPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-20 px-6 bg-[#f8f5f0] min-h-screen">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Movement
          </h1>

          <p className="text-lg text-gray-600 italic max-w-2xl mx-auto">
            “When you give even a little… someone receives a world.”
          </p>
        </motion.div>

        {/* OPTIONS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {options.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* ICON */}
              <div
                className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center text-2xl bg-gradient-to-br ${item.color}`}
              >
                {item.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 mb-6">
                {item.desc}
              </p>

              {/* LINK */}
              <Link
                href="/contact"
                className="text-[#7b5e57] font-medium hover:underline"
              >
                Get Started →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl max-w-2xl mx-auto">
            
            <h3 className="text-2xl font-bold mb-4">
              Ready to Make a Difference?
            </h3>

            <p className="text-gray-600 mb-6">
              Reach out and begin your journey of impact with Sarv Foundation.
            </p>

            <Link
              href="/contact"
              className="bg-[#7b5e57] text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

      </div>
    </PageTransition>
  );
}