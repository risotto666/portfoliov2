"use client";
{
  /* Call to Action Section */
}
{
  /*   <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="bg-cyan-600 text-white py-3 px-8 rounded-full text-2xl font-semibold transition duration-300 ease-in-out hover:bg-cyan-700"
          >
            Lépj kapcsolatba velem
          </Link>
        </div> */
}

import { motion } from "framer-motion";
import { Element, Link } from "react-scroll";
import { Steps } from "./Steps";
const fadeUpVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.6, delay },
  }),
};
const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1.5,
      delay,
      ease: "easeOut",
    },
  }),
};
function About() {
  return (
    <Element name="about">
      <div className="h-full">
        <div className="container mx-auto px-4 py-12">
          {/* Introduction Section */}
          <div className="grid grid-cols-1  md:grid-cols-2 gap-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleInVariant}
              custom={0}
              className="flex justify-center items-center"
            >
              <div className="relative md:h-128 lg:h-128 w-full h-64">
                <img
                  src="/me.jpeg"
                  alt="Portrait"
                  className="w-full rounded-4xl h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-30" />
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0}
              className="flex flex-col gap-5  justify-center"
            >
              <p className="text-lg leading-8  mb-6 mt-6">
                Roland vagyok webfejlesztő, két éves tapasztalattal. Az utam
                ebbe a szakmába kíváncsisággal kezdődött, és azóta elkötelezett
                vagyok a modern webtechnológiák és a felhasználóbarát élmények
                létrehozásában.
              </p>
              <p className="text-lg leading-8 mb-6">
                Specializálódok üzleti weboldalak, landoló oldalak és interaktív
                webalkalmazások készítésére, amik gyorsak, elegánsak, és minden
                eszközön tökéletesen működnek.
              </p>
            </motion.div>
          </div>
          {/* About Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0}
            className="mt-12 bg-slate-50  p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-semibold text-cyan-500 mb-6">
              Miért válassz engem?
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Különösen szenvedélyesen foglalkozom a szabadúszó
              webfejlesztéssel, segítve a vállalkozásokat és magánszemélyeket,
              hogy erős online jelenlétet építsenek.
            </p>
            <p className="text-lg leading-relaxed">
              Legyen szó céges weboldalról, portfólióról vagy egyedi webes
              megoldásról, itt vagyok, hogy a modern és elegáns megközelítéssel
              valóra váltsam ötleteidet.
            </p>
          </motion.div>
          {/* Skills Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            custom={0}
            className="mt-12"
          >
            <h2 className="text-3xl font-semibold text-cyan-500 mb-6">
              Technikák, melyekkel dolgozom:
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              <div className=" border-t-2 border-gray-200  p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Frontend
                </h3>
                <ul className="list-disc  pl-4 text-lg text-gray-700">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className=" border-t-2 border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Backend & Databases
                </h3>
                <ul className="list-disc pl-4 text-lg text-gray-700">
                  <li>Supabase</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div className="border-t-2 border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Tools & Workflow
                </h3>
                <ul className="list-disc pl-4 text-lg text-gray-700">
                  <li>Git</li>
                  <li>Flowbite</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
          <Steps />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleInVariant}
            custom={1}
            className="mt-12 text-center"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="bg-blue-600 text-white py-3 px-8 rounded-full text-2xl font-semibold cursor-pointer transition duration-300 ease-in-out hover:bg-cyan-700"
            >
              Lépj kapcsolatba velem
            </Link>
          </motion.div>
        </div>
      </div>
    </Element>
  );
}
export default About;
