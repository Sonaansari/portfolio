"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false); 
  };

  const menuItems = ["home", "about", "experience", "skills", "projects", "contact"];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2 h-[72px]">

        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Farida Ansari"
          width={140}
          height={60}
          className="object-contain h-[75px] w-auto"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-base font-semibold text-gray-700 items-center">
          {menuItems.map((item) => (
            <span
              key={item}
              onClick={() => handleScroll(`#${item}`)}
              className="cursor-pointer hover:text-pink-600 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          ))}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl hover:bg-gray-100"
        >
          {open ? (
            // Close Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeWidth="2" d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            // Menu Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor">
              <path strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t shadow-xl"
          >
            <div className="flex flex-col items-center py-6 gap-4">
              {menuItems.map((item) => (
                <motion.div
                  key={item}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleScroll(`#${item}`)}
                  className="w-[85%] text-center py-3 rounded-xl bg-gradient-to-r from-pink-500 to-teal-500 text-white font-semibold shadow-md cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}