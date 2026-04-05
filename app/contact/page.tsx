"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import PageTransition from "@/components/PageTransition";

export default function ContactPage() {
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
            Let’s Connect
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto">
            For partnerships, volunteering, or collaborations — we’d love to hear from you.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* LEFT SIDE - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Address */}
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg flex gap-4 items-start">
              <FaMapMarkerAlt className="text-xl text-[#7b5e57]" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600 text-sm">
                  Delhi NCR, India
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg flex gap-4 items-start">
              <FaEnvelope className="text-xl text-[#7b5e57]" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600 text-sm">
                  sarv.team.foundation@gmail.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg flex gap-4 items-start">
              <FaPhoneAlt className="text-xl text-[#7b5e57]" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600 text-sm">
                  +91 96548 00900
                </p>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center">
              <h3 className="font-semibold mb-4">Follow Us</h3>

              <div className="flex justify-center gap-4 text-xl">
                <FaLinkedin className="cursor-pointer hover:scale-110" />
                <FaInstagram className="cursor-pointer hover:scale-110" />
                <FaTwitter className="cursor-pointer hover:scale-110" />
                <FaFacebook className="cursor-pointer hover:scale-110" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl flex flex-col gap-4"
          >
            <h3 className="text-2xl font-bold mb-4">
              Send a Message
            </h3>

            <input
              type="text"
              placeholder="Your Name"
              required
              className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#7b5e57]"
            />

            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#7b5e57]"
            />

            <input
              type="tel"
              placeholder="Phone"
              className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#7b5e57]"
            />

            <select className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#7b5e57]">
              <option>General Inquiry</option>
              <option>Volunteer</option>
              <option>Partnership</option>
              <option>Donation</option>
            </select>

            <textarea
              rows={4}
              placeholder="Your Message"
              required
              className="p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#7b5e57]"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-[#7b5e57] to-[#a67c73] text-white py-3 rounded-xl shadow-md hover:scale-105 transition"
            >
              Send Message
            </button>

            <p className="text-xs text-gray-500 text-center">
              We usually respond within 24–48 hours.
            </p>
          </motion.form>
        </div>

        {/* FOOTER LINE */}
        <div className="text-center mt-16">
          <p className="text-gray-500 italic">
            “Built on compassion. Driven by impact.”
          </p>
        </div>

      </div>
    </PageTransition>
  );
}