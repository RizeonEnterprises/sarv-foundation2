"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#7b5e57] flex items-center justify-center z-[9999]">
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-white text-3xl font-bold tracking-widest"
      >
        SARV
      </motion.div>

      {/* Loading Bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-0 left-0 h-1 bg-white"
      />
    </div>
  );
}