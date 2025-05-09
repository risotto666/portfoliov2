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
import { AccordionComponent } from "./Accordion";
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
        <div className="container mx-auto px-2 py-6">
          {/* Introduction Section */}
          <div className="grid grid-cols-1  rounded-2xl  md:grid-cols-2 gap-10 p-4 sm:p-6 lg:p-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={0}
              className="flex flex-col text-centershadow-2xl p-4  gap-2 justify-center order-1 md:order-2"
            >
              <h1 className="text-3xl font-bold text-cyan-900 sm:text-4xl">
                Egy picit rólam
              </h1>
              <p className="text-base text-cyan-900 sm:text-lg leading-7 sm:leading-8 mb-4">
                Roland vagyok webfejlesztő, két éves tapasztalattal. Az utam
                ebbe a szakmába kíváncsisággal kezdődött, és azóta elkötelezett
                vagyok a modern webtechnológiák és a felhasználóbarát élmények
                létrehozásában.
              </p>
              <p className="text-base text-cyan-900 sm:text-lg leading-7 sm:leading-8">
                Specializálódok üzleti weboldalak, landoló oldalak és interaktív
                webalkalmazások készítésére, amik gyorsak, elegánsak, és minden
                eszközön tökéletesen működnek.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={scaleInVariant}
              custom={0}
              className="flex justify-center items-center order-2 md:order-1"
            >
              <div className="relative w-full h-76 sm:h-76 md:h-104 lg:h-124 overflow-hidden rounded-4xl">
                <img
                  src="/me.png"
                  alt="Portrait"
                  className="w-full bg-gradient-to-b from-black via-gray-600 to-white  h-full object-cover object-top scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full h-16 sm:h-24 " />
              </div>
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
            <h2 className="text-3xl font-semibold text-cyan-800 mb-6">
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
            className="mt-12 bg-cyan-800  p-6 rounded-2xl"
          >
            <h2 className="text-3xl font-semibold text-white mb-6">
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
              <div className="bg-white text-gray-500  p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h3 className="text-2xl font-bold mb-4">
                  Felhasználói felület
                </h3>
                <ul className="list-disc  pl-4 text-lg ">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-white text-gray-500  p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h3 className="text-2xl font-bold  mb-4">
                  Szerveroldal & Adatbázisok
                </h3>
                <ul className="list-disc pl-4 text-lg ">
                  <li>Supabase</li>
                  <li>Next.js</li>
                </ul>
              </div>
              <div className=" p-6 bg-white text-gray-500 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                <h3 className="text-2xl font-bold  mb-4">
                  Eszközök & Munkafolyamat
                </h3>
                <ul className="list-disc pl-4 text-lg ">
                  <li>Git</li>
                  <li>Flowbite</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          <Steps />
          <AccordionComponent />

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
              className="bg-cyan-800 text-white py-3 px-8 rounded-full text-2xl font-semibold cursor-pointer transition duration-300 ease-in-out hover:bg-cyan-700"
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
