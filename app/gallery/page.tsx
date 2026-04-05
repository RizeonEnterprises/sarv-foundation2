"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";

const galleryImages = [
    '/images/2006-SARV-Img-40.webp',
    '/images/2006-SARV-Img-03.webp',
    '/images/2006-SARV-Img-05.webp',
    '/images/2006-SARV-Img-06.webp',
    '/images/2006-SARV-Img-07.webp',
    '/images/2006-SARV-Img-08.webp',
    '/images/2006-SARV-Img-09.webp',
    '/images/2006-SARV-Img-12.webp',
    '/images/2006-SARV-Img-11.webp',
    '/images/2006-SARV-Img-13.webp',
    '/images/2006-SARV-Img-14.webp',
    '/images/2006-SARV-Img-15.webp',
    '/images/2006-SARV-Img-16.webp',
    '/images/2006-SARV-Img-17.webp',
    '/images/2006-SARV-Img-18.webp',
    '/images/2006-SARV-Img-19.webp',
    '/images/2006-SARV-Img-20.webp',
    '/images/2006-SARV-Img-21.webp',
    '/images/2006-SARV-Img-22.webp',
    '/images/2006-SARV-Img-24.webp',
    '/images/2006-SARV-Img-26.webp',
    '/images/2006-SARV-Img-27.webp',
    '/images/2006-SARV-Img-28.webp',
    '/images/2006-SARV-Img-30.webp',
    '/images/2006-SARV-Img-31.webp',
    '/images/2006-SARV-Img-32.webp',
    '/images/2006-SARV-Img-33.webp',
    '/images/2006-SARV-Img-34.webp',
    '/images/2006-SARV-Img-35.webp',
    '/images/2006-SARV-Img-36.webp',
    '/images/2006-SARV-Img-37.webp',
    '/images/2006-SARV-Img-38.webp',
    '/images/2006-SARV-Img-39.webp',
    '/images/2006-SARV-Img-41.webp',
    '/images/2006-SARV-Img-42.webp',
    '/images/2006-SARV-Img-43.webp',
    '/images/2006-SARV-Img-44.webp',
    '/images/2006-SARV-Img-45.webp',
    '/images/2006-SARV-Img-46.webp',
    '/images/2006-SARV-Img-51.webp',
    '/images/2006-SARV-Img-53.webp',
    '/images/2006-SARV-Img-54.webp',
    '/images/2006-SARV-Img-56.webp',
    '/images/2006-SARV-Img-57.webp',
    '/images/2006-SARV-Img-58.webp',
    '/images/2006-SARV-Img-59.webp',
    '/images/2006-SARV-Img-67.webp',
    '/images/2006-SARV-Img-01.webp',
    '/images/2006-SARV-Img-02.webp'
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  return (
    <div className="pt-28 px-6 bg-[#f8f6f3] min-h-screen">

      {/* HEADER */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Impact in Motion
        </h1>
        <p className="text-gray-600">
          Small steps. Big impact.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">

        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="relative h-[180px] md:h-[220px] rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => {
              setCurrentImage(img);
              setLightboxOpen(true);
            }}
          >
            <Image
              src={img}
              alt="gallery"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <span className="text-white text-sm font-semibold">
                View
              </span>
            </div>
          </div>
        ))}

      </div>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999]"
          onClick={() => setLightboxOpen(false)}
        >
          <button className="absolute top-8 right-8 text-white text-3xl">
            <FaTimes />
          </button>

          <div
            className="relative w-[90%] h-[80%]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage}
              alt="preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

    </div>
  );
}