"use client";

import Link from "next/link";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
  FaShieldAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] py-[70px] pb-[30px] mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* 1. BRAND */}
          <div>
            <h2 className="font-bold text-3xl mb-2 text-white tracking-tight uppercase">
              SARV
            </h2>

            <p className="text-[#73b745] font-bold text-xs uppercase tracking-[3px] mb-6">
              One World | One Heart
            </p>

            <p className="text-white/70 text-sm leading-relaxed">
              Empowering lives through compassion, dignity, and inclusive growth.
            </p>

            <div className="flex gap-4 mt-6">
              <div className="w-9 h-9 bg-[#f38b27] rounded-full flex items-center justify-center text-white hover:scale-110 transition">
                <FaLinkedinIn />
              </div>
              <div className="w-9 h-9 bg-[#f38b27] rounded-full flex items-center justify-center text-white hover:scale-110 transition">
                <FaInstagram />
              </div>
              <div className="w-9 h-9 bg-[#f38b27] rounded-full flex items-center justify-center text-white hover:scale-110 transition">
                <FaFacebookF />
              </div>
            </div>
          </div>

          {/* 2. NAVIGATION */}
          <div>
            <h4 className="text-white mb-6 uppercase text-xs tracking-widest border-b border-[#f38b27] pb-1">
              Navigation
            </h4>

            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-white/80 hover:text-[#f38b27]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="text-white/80 hover:text-[#f38b27]">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-white/80 hover:text-[#f38b27]">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-[#f38b27]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. LEGAL */}
          <div>
            <h4 className="text-white mb-6 uppercase text-xs tracking-widest border-b border-[#f38b27] pb-1">
              Legal & Compliance
            </h4>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/90">
                <FaShieldAlt className="text-[#73b745]" /> 12A REGISTERED
              </li>
              <li className="flex items-center gap-2 text-white/90">
                <FaShieldAlt className="text-[#73b745]" /> 80G CERTIFIED
              </li>
              <li className="flex items-center gap-2 text-white/90">
                <FaShieldAlt className="text-[#73b745]" /> DARPAN REGISTERED
              </li>
              <li className="flex items-center gap-2 text-white/90">
                <FaShieldAlt className="text-[#73b745]" /> CSR-COMPLIANT
              </li>
            </ul>
          </div>

          {/* 4. CONTACT */}
          <div>
            <h4 className="text-white mb-6 uppercase text-xs tracking-widest border-b border-[#f38b27] pb-1">
              Reach Us
            </h4>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <FaEnvelope className="text-[#f38b27]" />
                <a href="mailto:sarv.team.foundation@gmail.com" className="text-white hover:text-[#f38b27]">
                  sarv.team.foundation@gmail.com
                </a>
              </div>

              <div className="flex gap-3">
                <FaPhoneAlt className="text-[#f38b27]" />
                <a href="tel:+919654800900" className="text-white hover:text-[#f38b27]">
                  +91 96548 00900
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>
            © {new Date().getFullYear()} SARV FOUNDATION. All rights reserved.
          </p>

          <a
            href="https://rizeon.in"
            target="_blank"
            className="text-[#f38b27] hover:text-[#73b745]"
          >
            Developed by RIZEON
          </a>
        </div>
      </div>
    </footer>
  );
}