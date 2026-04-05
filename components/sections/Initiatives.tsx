"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const initiatives = [
  {
    slug: "sakhi-saheli",
    title: "Sakhi Saheli",
    desc: "Creating safe spaces for women to share, heal, and grow. A community circle for emotional and social empowerment.",
    image: "/images/2025-SARV-I-02.webp",
  },
  {
    slug: "sarv-shiksha",
    title: "Sarv Shiksha",
    desc: "Empowering every child through the gift of education through scholarships, learning materials, and after-school support.",
    image: "/images/2025-SARV-I-05.webp",
  },
  {
    slug: "saksham-shakti",
    title: "Saksham Shakti",
    desc: "Skill development and vocational training programs designed to make women financially independent.",
    image: "/images/2025-SARV-I-03.webp",
  },
  {
    slug: "sarv-saanjh",
    title: "Sarv Saanjh",
    desc: "Community kitchen initiatives providing nutritious meals to the homeless and needy.",
    image: "/images/2025-SARV-I-01.webp",
  },
  {
    slug: "sarv-sahayata",
    title: "Sarv Sahayata",
    desc: "Emergency relief and rehabilitation support during natural calamities and crises.",
    image: "/images/2025-SARV-I-04.webp",
  },
  {
    slug: "sarv-vatika",
    title: "Sarv Vatika",
    desc: "Environmental drives, tree plantations, and promoting sustainable living practices.",
    image: "/images/2025-SARV-I-07.webp",
  },
  {
    slug: "sarv-swasthya",
    title: "Sarv Swasthya",
    desc: "Health camps, eye checkups, and hygiene awareness workshops for women and children.",
    image: "/images/2025-SARV-I-06.webp",
  },
];

export default function Initiatives() {
  return (
    <section className="py-24 px-6 bg-white">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="text-sm uppercase tracking-wider text-[#7b5e57] mb-3">
          Our Initiatives
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Creating Impact Through Purposeful Action
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Every initiative is a step toward building a more inclusive,
          compassionate, and empowered society.
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {initiatives.map((item, index) => (
          
          <Link key={index} href={`/initiatives/${item.slug}`}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              className="group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition bg-white cursor-pointer"
            >

              {/* IMAGE */}
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {item.desc}
                </p>

                <Button
                  variant="outline"
                  className="rounded-xl text-sm w-full"
                >
                  Learn More
                </Button>
              </div>

            </motion.div>
          </Link>

        ))}
      </div>

    </section>
  );
}