"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaAt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

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
    <div className="min-h-fit mt-12  px-2 pb-6 pt-5  md:min-h-screen lg:min-h-screen w-full flex flex-col md:flex-row overflow-hidden">
      {/* Bal oldal */}
      <motion.div
        className="w-full md:w-1/2 pb-24 rounded-2xl  bg-gradient-to-b from-cyan-900 via-cyan-900 to-white p-10 flex flex-col justify-center items-center text-black clip-left"
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
          <Link
            target="blank"
            href="mailto:troli0723@gmail.com"
            className="p-3 bg-white rounded shadow hover:scale-105 transition"
          >
            <FaAt size={20} />
          </Link>
          <Link
            target="blank"
            href="https://github.com/risotto666"
            className="p-3 bg-white rounded shadow hover:scale-105 transition"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            target="blank"
            href="https://linkedin.com/in/yourusername"
            className="p-3 bg-white rounded shadow hover:scale-105 transition"
          >
            <FaLinkedin size={20} />
          </Link>
        </motion.div>
        <p className="text-center ml-2 md:text-2xl mt-1 text-white leading-relaxed max-w-md ">
          „Modern, reszponzív weboldalakat tervezek és készítek, különös
          figyelmet fordítva a felhasználói élményre és a letisztult kódra.
          Alkossunk együtt valami nagyszerűt!”
        </p>
      </motion.div>

      {/* Jobb oldal */}
      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        custom={0.5}
      >
        <img
          src="/web3.gif"
          alt="Profile"
          className="h-full w-full rounded-2xl "
        />
        {/*   <p className="text-center ml-2 md:text-2xl leading-relaxed max-w-md ">
          „Modern, reszponzív weboldalakat tervezek és készítek, különös
          figyelmet fordítva a felhasználói élményre és a letisztult kódra.
          Alkossunk együtt valami nagyszerűt!”
        </p> */}
      </motion.div>
    </div>
  );
}
