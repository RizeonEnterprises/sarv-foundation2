"use client";

import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { FaBullhorn, FaHandHoldingHeart, FaFemale, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

export default function JourneyPage() {
  const timeline = [
    {
      title: "VoiceItOut",
      desc: "Early grassroots work & advocacy.",
      icon: <FaBullhorn />,
    },
    {
      title: "WCD Collaboration",
      desc: "One Stop Centres & IBHAS partnership.",
      icon: <FaHandHoldingHeart />,
    },
    {
      title: "Mission Shakti",
      desc: "Aligning with national women-centric goals.",
      icon: <FaFemale />,
    },
    {
      title: "SARV Foundation",
      desc: "Evolving into a holistic movement.",
      icon: <FaUsers />,
    },
  ];

  return (
    <PageTransition>

      {/* HERO */}
      <PageHero
        title="Our Journey"
        subtitle="A Legacy of Grassroots Change"
        backgroundImage="/images/2006-SARV-Img-37.webp"
      />

      {/* CONTENT */}
      <section className="py-20 px-6 bg-[#f8f5f0]">
        <div className="max-w-5xl mx-auto">

          {/* INTRO */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3e2f2b]">
              From VoiceItOut to SARV
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              SARV Foundation has led and supported women-centric initiatives
              aligned with <strong>Mission Shakti</strong> and <strong>Atmanirbhar Bharat</strong>.
            </p>

            <p className="text-gray-600 mb-6">
              Formerly known as <strong>VoiceItOut</strong>, the organisation
              collaborated with IBHAS and Women & Child Development (WCD)
              to strengthen support systems.
            </p>

            <p className="italic text-xl text-[#7b5e57] font-medium">
              "This is not an organization. It is a journey of hearts."
            </p>
          </div>

          {/* TIMELINE */}
          <div className="relative">

            {/* LINE */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-300 md:-translate-x-1/2" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 flex flex-col md:flex-row items-center"
              >

                {/* LEFT */}
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "hidden md:block"}`}>
                  {i % 2 === 0 && (
                    <>
                      <h4 className="font-bold text-xl text-[#3e2f2b]">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </>
                  )}
                </div>

                {/* ICON */}
                <div className="absolute left-0 md:left-1/2 w-10 h-10 bg-[#7b5e57] text-white rounded-full flex items-center justify-center md:-translate-x-1/2 z-10">
                  {item.icon}
                </div>

                {/* RIGHT */}
                <div className={`md:w-1/2 ${i % 2 !== 0 ? "md:pl-12" : "hidden md:block"} pl-12 md:pl-0`}>
                  {i % 2 !== 0 && (
                    <>
                      <h4 className="font-bold text-xl text-[#3e2f2b]">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </>
                  )}
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

    </PageTransition>
  );
}