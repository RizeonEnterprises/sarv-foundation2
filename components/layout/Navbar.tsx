"use client";

import Link from "next/link";
import Image from "next/image"; // ✅ FIXED
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [aboutOpenDesktop, setAboutOpenDesktop] = useState(false);
  const [initOpenDesktop, setInitOpenDesktop] = useState(false);

  const [aboutOpenMobile, setAboutOpenMobile] = useState(false);
  const [initOpenMobile, setInitOpenMobile] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-final.png"
            alt="logo"
            width={40}
            height={40}
            />
          <span className="font-semibold text-lg">SARV</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

          <Link href="/">Home</Link>

          {/* ABOUT */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpenDesktop(true)}
            onMouseLeave={() => setAboutOpenDesktop(false)}
          >
            <Link href="/about" className="flex items-center gap-1">
              About <ChevronDown size={16} />
            </Link>

            {aboutOpenDesktop && (
              <div className="absolute top-full left-0 pt-3">
                <div className="bg-white shadow-xl rounded-xl p-4 w-48">
                  <Link href="/mission" className="block py-2">Mission</Link>
                  <Link href="/essence" className="block py-2">Essence</Link>
                  <Link href="/journey" className="block py-2">Journey</Link>
                  <Link href="/vision" className="block py-2">Vision</Link>
                  <Link href="/values" className="block py-2">Values</Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/gallery">Gallery</Link>

          {/* INITIATIVES */}
          <div
            className="relative"
            onMouseEnter={() => setInitOpenDesktop(true)}
            onMouseLeave={() => setInitOpenDesktop(false)}
          >
            <Link href="/initiatives" className="flex items-center gap-1">
              Initiatives <ChevronDown size={16} />
            </Link>

            {initOpenDesktop && (
              <div className="absolute top-full left-0 pt-3">
                <div className="bg-white shadow-xl rounded-xl p-4 w-56">
                  <Link href="/initiatives/sakhi-saheli" className="block py-2">Sakhi Saheli</Link>
                  <Link href="/initiatives/sarv-shiksha" className="block py-2">Sarv Shiksha</Link>
                  <Link href="/initiatives/saksham-shakti" className="block py-2">Saksham Shakti</Link>
                  <Link href="/initiatives/sarv-saanjh" className="block py-2">Sarv Saanjh</Link>
                  <Link href="/initiatives/sarv-sahayata" className="block py-2">Sarv Sahayata</Link>
                  <Link href="/initiatives/sarv-vatika" className="block py-2">Sarv Vatika</Link>
                  <Link href="/initiatives/sarv-swasthya" className="block py-2">Sarv Swasthya</Link>
                </div>
              </div>
            )}
          </div>

          {/* NORMAL LINK */}
          <Link href="/contact">Contact</Link>

          {/* CTA BUTTON */}
          <Link
            href="/join"
            className="bg-[#7b5e57] text-white px-4 py-2 rounded-xl hover:scale-105 transition"
          >
            Join Now
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
  <div className="md:hidden bg-white px-6 py-6 space-y-4">

    <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>

    {/* ABOUT */}
        <div className="border-b pb-2">

        <div className="flex justify-between items-center w-full py-2">

            {/* CLICKABLE LINK */}
            <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="font-medium"
            >
            About
            </Link>

            {/* DROPDOWN BUTTON */}
            <button
            onClick={() => setAboutOpenMobile(!aboutOpenMobile)}
            >
            <ChevronDown
                className={`transition-transform duration-300 ${
                aboutOpenMobile ? "rotate-180" : ""
                }`}
            />
            </button>

        </div>

        {/* DROPDOWN */}
        <div
            className={`overflow-hidden transition-all duration-300 ${
            aboutOpenMobile ? "max-h-96 mt-2" : "max-h-0"
            }`}
        >
            <div className="flex flex-col gap-2 pl-3 text-sm text-gray-600">
            <Link href="/mission" onClick={() => setMobileOpen(false)}>Mission</Link>
            <Link href="/essence" onClick={() => setMobileOpen(false)}>Essence</Link>
            <Link href="/journey" onClick={() => setMobileOpen(false)}>Journey</Link>
            <Link href="/vision" onClick={() => setMobileOpen(false)}>Vision</Link>
            <Link href="/values" onClick={() => setMobileOpen(false)}>Values</Link>
            </div>
        </div>

        </div>

    <Link href="/gallery" onClick={() => setMobileOpen(false)}>Gallery</Link>

    {/* INITIATIVES */}
        <div className="border-b pb-2">

        <div className="flex justify-between items-center w-full py-2">

            {/* CLICKABLE LINK */}
            <Link
            href="/initiatives"
            onClick={() => setMobileOpen(false)}
            className="font-medium"
            >
            Initiatives
            </Link>

            {/* DROPDOWN BUTTON */}
            <button
            onClick={() => setInitOpenMobile(!initOpenMobile)}
            >
            <ChevronDown
                className={`transition-transform duration-300 ${
                initOpenMobile ? "rotate-180" : ""
                }`}
            />
            </button>

        </div>

        {/* DROPDOWN */}
        <div
            className={`overflow-hidden transition-all duration-300 ${
            initOpenMobile ? "max-h-[500px] mt-2" : "max-h-0"
            }`}
        >
            <div className="flex flex-col gap-2 pl-3 text-sm text-gray-600">
            <Link href="/initiatives/sakhi-saheli" onClick={() => setMobileOpen(false)}>Sakhi Saheli</Link>
            <Link href="/initiatives/sarv-shiksha" onClick={() => setMobileOpen(false)}>Sarv Shiksha</Link>
            <Link href="/initiatives/saksham-shakti" onClick={() => setMobileOpen(false)}>Saksham Shakti</Link>
            <Link href="/initiatives/sarv-saanjh" onClick={() => setMobileOpen(false)}>Sarv Saanjh</Link>
            <Link href="/initiatives/sarv-sahayata" onClick={() => setMobileOpen(false)}>Sarv Sahayata</Link>
            <Link href="/initiatives/sarv-vatika" onClick={() => setMobileOpen(false)}>Sarv Vatika</Link>
            <Link href="/initiatives/sarv-swasthya" onClick={() => setMobileOpen(false)}>Sarv Swasthya</Link>
            </div>
        </div>

        </div>

    <Link href="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>

    <Link
      href="/join"
      className="block bg-[#7b5e57] text-white px-4 py-2 rounded-xl text-center"
      onClick={() => setMobileOpen(false)}
    >
      Join Now
    </Link>
  </div>
)}
  </header>   // ✅ MUST EXIST
);
}