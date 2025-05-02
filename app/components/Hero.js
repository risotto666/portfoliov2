"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-center bg-no-repeat bg-gray-600 bg-[url('/hero.webp')] bg-cover  bg-blend-multiply px-4  h-screen">
      <div className="relative">
        <motion.h1
          initial={{ x: "100vw" }} // Az animáció kezdőpontja (balról indul)
          animate={{ x: 0 }} // Az animáció végpontja (középre kerül)
          transition={{ type: "spring", stiffness: 50 }} // Rugós hatású animáció
          className="mt-48 dark:text-red-700  absolute font-playfair text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent  lg:text-3xl sm:px-16 lg:px-48"
        >
          Szia, Roland vagyok, szenvedélyes webfejlesztő, aki a modern, nagy
          teljesítményű weboldalak létrehozására összpontosít. Tapasztalatom van
          a Next.js, React és frontend fejlesztés terén, és specializálódom
          elegáns, gyors és felhasználóbarát weboldalak készítésére
          vállalkozások számára.
          <span>
            <Link href="/contact">
              <motion.button
                initial={{ x: "100vw" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", stiffness: 50 }}
                className="px-6 py-1 cursor-pointer mb-4 text-white bg-blue-500 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
              >
                Lépj kapcsolatba
              </motion.button>
            </Link>

            <span>
              <motion.p
                initial={{ width: 0 }} // Kezdetben nulla szélesség
                animate={{ width: "100%" }} // Teljes szélességre nyílik
                transition={{ duration: 2, ease: "easeOut" }} // Lágy kifutás
                className="absolute  left-1/2 border-1 border-white "
                style={{ transform: "translateX(-50%)" }} // Középről indul
              ></motion.p>
            </span>
          </span>
        </motion.h1>
      </div>
    </div>
  );
}

export default Hero;
