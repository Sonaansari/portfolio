"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2 h-[72px]">
        {/* LOGO */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Farida Ansari"
            width={140}
            height={60}
            priority
            className="object-contain h-[75px] w-auto select-none"
          />
        </div>

        {/* MOBILE BUTTON */}
        <div className="md:hidden">
          <button className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* LINKS */}
        <div className="hidden md:flex gap-8 text-base font-semibold text-gray-700 items-center">
          {["home", "about", "experience", "skills", "projects", "contact"].map((item) => (
            <motion.span
              key={item}
              onClick={() => handleScroll(`#${item}`)}
              whileHover={{ scale: 1.05, y: -2 }}
              className="cursor-pointer relative group py-2 px-1 transition-all duration-300 hover:text-pink-600"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-pink-500 to-teal-500 rounded-full transition-all duration-300 group-hover:w-full origin-center"></span>
            </motion.span>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}