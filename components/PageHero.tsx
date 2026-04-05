"use client";

import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  backgroundImage,
}: {
  title: string;
  subtitle: string;
  backgroundImage: string;
}) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center text-white">

      {/* Background */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          {title}
        </h1>
        <p className="text-lg text-gray-200">
          {subtitle}
        </p>
      </div>
    </section>
  );
}