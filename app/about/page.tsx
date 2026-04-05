"use client";

import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import { FaCheckCircle, FaShoppingBasket, FaCoins } from "react-icons/fa";

export default function AboutPage() {
  return (
    <PageTransition>

      {/* HERO */}
      <PageHero
        title="About Sarv Foundation"
        subtitle="One World | One Heart"
        backgroundImage="/images/hero.jpg"
      />

      {/* WHO WE ARE */}
      <section className="py-20 px-6 bg-[#f8f5f0]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div>
            <h2 className="text-3xl font-bold mb-6">
              Who We Are
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Sarv Foundation is a Delhi NCR–based organization committed to
              empowering communities through compassion, dignity, and inclusive growth.
            </p>

            <p className="text-gray-700 mb-4 leading-relaxed">
              We focus on uplifting women, educating children, and supporting
              vulnerable communities through meaningful, grassroots initiatives.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our belief is simple — every individual deserves opportunity,
              dignity, and a chance to grow.
            </p>

            {/* LEGAL */}
            <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold mb-4">Legal & Compliance</h3>

              <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                <p className="flex items-center gap-2">
                  <FaCheckCircle /> 12A Registered
                </p>
                <p className="flex items-center gap-2">
                  <FaCheckCircle /> 80G Certified
                </p>
                <p className="flex items-center gap-2">
                  <FaCheckCircle /> DARPAN Registered
                </p>
                <p className="flex items-center gap-2">
                  <FaCheckCircle /> CSR-Compliant
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
              <h3 className="text-xl font-semibold mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To create an inclusive society where every individual has access
                to opportunities, education, and dignity.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">
            Promoter’s Prior Experience
          </h2>

          <p className="text-gray-600">
            Strong foundation built through impactful collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-bold mb-2">Sherise × Govt. of UP</h3>
            <span className="text-xs bg-[#7b5e57] text-white px-2 py-1 rounded">
              Mission Shakti
            </span>
            <p className="mt-3 text-gray-600 text-sm">
              Women empowerment programs focused on dignity, nutrition, and awareness.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-bold mb-2">IBHAS Collaboration</h3>
            <span className="text-xs bg-[#7b5e57] text-white px-2 py-1 rounded">
              Gender Equality
            </span>
            <p className="mt-3 text-gray-600 text-sm">
              Emotional well-being and inclusion programs for vulnerable communities.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h3 className="font-bold mb-2">WCD Engagements</h3>
            <span className="text-xs bg-[#7b5e57] text-white px-2 py-1 rounded">
              Inclusion
            </span>
            <p className="mt-3 text-gray-600 text-sm">
              Programs promoting gender equality and women empowerment.
            </p>
          </div>

        </div>
      </section>

      {/* POSHAN SAATHI */}
      <section className="py-20 px-6 bg-[#fcfbf9]">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Poshan Saathi Food Drive
            </h2>

            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Supporting underprivileged families with essential nutrition kits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* LEFT */}
            <div className="mt-6 bg-white p-6 rounded-xl shadow">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <FaShoppingBasket /> Food Kit Includes
                </h4>

                <ul className="text-sm text-gray-600">
                  <li>• Rice / Atta</li>
                  <li>• Pulses</li>
                  <li>• Cooking Oil</li>
                  <li>• Essentials</li>
                </ul>
            </div>

            {/* RIGHT */}
            <div className="bg-[#7b5e57] text-white p-8 rounded-2xl shadow-xl">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <FaCoins /> Budget Summary
              </h4>

              <p>Cost per Family: ₹1,000</p>

              <p className="text-2xl font-bold mt-4">
                Total: ₹1,00,000
              </p>
            </div>

          </div>

        </div>
      </section>

    </PageTransition>
  );
}