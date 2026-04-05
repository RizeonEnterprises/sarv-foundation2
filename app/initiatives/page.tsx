"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const initiatives = [
  {
    slug: "sakhi-saheli",
    title: "Sakhi Saheli",
    desc: "Safe spaces for women to share, heal, and grow.",
  },
  {
    slug: "sarv-shiksha",
    title: "Sarv Shiksha",
    desc: "Empowering children through education and mentorship.",
  },
  {
    slug: "saksham-shakti",
    title: "Saksham Shakti",
    desc: "Skill development for financial independence.",
  },
  {
    slug: "sarv-saanjh",
    title: "Sarv Saanjh",
    desc: "Community kitchens serving nutritious meals.",
  },
  {
    slug: "sarv-sahayata",
    title: "Sarv Sahayata",
    desc: "Emergency relief during disasters and crises.",
  },
  {
    slug: "sarv-vatika",
    title: "Sarv Vatika",
    desc: "Environmental drives and sustainability awareness.",
  },
  {
    slug: "sarv-swasthya",
    title: "Sarv Swasthya",
    desc: "Health camps and hygiene awareness programs.",
  },
];

export default function InitiativesPage() {
  return (
    <PageTransition>
      <div className="pt-24 pb-20 px-6 bg-[#f8f5f0] min-h-screen">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Initiatives
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every initiative is a step toward building a more inclusive,
            compassionate, and empowered society.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-4">
                {item.desc}
              </p>

              <Link
                href={`/initiatives/${item.slug}`}
                className="text-[#7b5e57] font-medium hover:underline"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </PageTransition>
  );
}