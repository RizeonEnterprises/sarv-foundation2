"use client";

import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { FaChild, FaFemale, FaUsers, FaOm } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MissionPage() {
  const missions = [
    {
      icon: <FaChild />,
      title: "Educate & Lead",
      desc: "To ensure every girl child learns, dreams, and leads.",
      color: "bg-yellow-100",
      iconBg: "bg-yellow-500",
    },
    {
      icon: <FaFemale />,
      title: "Independence",
      desc: "Supporting women toward financial and emotional independence.",
      color: "bg-pink-100",
      iconBg: "bg-pink-500",
    },
    {
      icon: <FaUsers />,
      title: "Community",
      desc: "Promoting community well-being through education and awareness.",
      color: "bg-blue-100",
      iconBg: "bg-blue-500",
    },
    {
      icon: <FaOm />,
      title: "Balanced Living",
      desc: "Encouraging mind-body-soul alignment for holistic growth.",
      color: "bg-gray-100",
      iconBg: "bg-gray-500",
    },
  ];

  // Images ka array
  const galleryImages = [
    "/images/05102026-SARV-File-01.jpeg",
    "/images/05102026-SARV-File-02.jpeg",
    "/images/05102026-SARV-File-03.jpeg",
    "/images/05102026-SARV-File-04.jpeg",
    "/images/05102026-SARV-File-05.jpeg",
    "/images/05102026-SARV-File-06.jpeg",
    "/images/05102026-SARV-File-07.jpeg",
  ];

  return (
    <PageTransition>

      {/* HERO */}
      <PageHero
        title="Our Mission"
        subtitle="Every Dream Matters"
        backgroundImage="/images/hero.jpg"
      />

      {/* MISSION GRID */}
      <section className="py-20 px-6 bg-[#f8f5f0]">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {missions.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`p-8 rounded-3xl shadow-lg hover:shadow-2xl transition ${item.color}`}
              >
                {/* ICON */}
                <div
                  className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center text-white text-2xl ${item.iconBg}`}
                >
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* QUOTE */}
          <div className="text-center mt-16">
            <h3 className="italic text-2xl md:text-3xl text-[#7b5e57] font-medium">
              "Every dream matters. Every step counts."
            </h3>
          </div>

          {/* IMAGE GALLERY SECTION */}
          <div className="mt-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800">Our Work In Action</h2>
              <p className="text-gray-600 mt-2">Glimpses of our mission coming to life</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="overflow-hidden rounded-2xl shadow-md"
                >
                  <img
                    src={src}
                    alt={`Mission gallery image ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300 cursor-pointer"
                  />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </PageTransition>
  );
}
