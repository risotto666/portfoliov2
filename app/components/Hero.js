"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaAt } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function HeroSection() {
  return (
    <div className="min-h-fit  px-6 pb-6 pt-5 mt-6 md:min-h-screen lg:min-h-screen w-full flex flex-col md:flex-row overflow-hidden">
      {/* Bal oldal */}
      <motion.div
        className="w-full md:w-1/2  bg-gradient-to-b from-white via-cyan-700 to-white p-10 flex flex-col justify-center items-center text-black clip-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        custom={0}
      >
        <motion.h1
          variants={fadeUpVariant}
          custom={0.3}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Tóth Roland
        </motion.h1>
        <motion.p
          variants={fadeUpVariant}
          custom={0.5}
          className="text-sm md:text-lg text-white mt-2"
        >
          Front-end Developer / UI Designer
        </motion.p>

        <motion.div
          variants={fadeUpVariant}
          custom={0.7}
          className="flex gap-4 mt-6"
        >
          <a
            href="mailto:your.email@example.com"
            className="p-3 bg-white rounded shadow hover:scale-105 transition"
          >
            <FaAt size={20} />
          </a>
          <a
            href="https://github.com/yourusername"
            className="p-3 bg-white rounded shadow hover:scale-105 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="p-3 bg-white rounded shadow hover:scale-105 transition"
          >
            <FaLinkedin size={20} />
          </a>
        </motion.div>
      </motion.div>

      {/* Jobb oldal */}
      <motion.div
        className="w-full md:w-1/2 bg-gradient-to-b from-white via-cyan-900 to-white text-white flex items-center justify-center p-10 clip-right"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        custom={0.5}
      >
        <p className="text-center ml-2 md:text-2xl leading-relaxed max-w-md ">
          „Modern, reszponzív weboldalakat tervezek és készítek, különös
          figyelmet fordítva a felhasználói élményre és a letisztult kódra.
          Alkossunk együtt valami nagyszerűt!”
        </p>
      </motion.div>
    </div>
  );
}
