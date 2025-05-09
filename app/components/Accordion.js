import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { motion } from "framer-motion";
const fadeUpVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.6, delay },
  }),
};

export function AccordionComponent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUpVariant}
      custom={0}
      className=" text-cyan-800 shadow-xl rounded-xl border-1 border-gray-50 "
    >
      <Accordion collapseAll>
        <AccordionPanel>
          <AccordionTitle className="text-lg text-bold  hover:bg-gray-100">
            💰 Mennyibe kerül?
          </AccordionTitle>
          <AccordionContent>
            <ul className="list-disc px-4 text-gray-500 grid gap-2">
              <li>Egyszerű bemutatkozó oldal (1-3 oldal): 60.000–90.000 Ft</li>
              <li>
                Közepes céges weboldal (4-6 oldal, űrlap, galéria):
                90.000–150.000 Ft
              </li>
              <li>
                Egyedi funkciókkal rendelkező oldal (pl. időpontfoglalás, admin
                felület): 150.000 Ft-tól
              </li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle className="text-lg text-bold hover:bg-gray-100">
            ⏳ Mennyi időt vesz igénybe?
          </AccordionTitle>
          <AccordionContent>
            <ul className="list-disc text-gray-500 grid gap-2 px-4">
              <li>Egyszerű weboldal: 3–5 munkanap</li>
              <li>Közepes weboldal: 5–10 munkanap</li>
              <li>Komplex rendszer: 10+ munkanap</li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle className="text-lg text-bold hover:bg-gray-100">
            🛠️ Mit tartalmaz a munka?
          </AccordionTitle>
          <AccordionContent>
            <ul className="list-disc text-gray-500 grid gap-2 px-4">
              <li>Mobilbarát, reszponzív design</li>
              <li>Gyors betöltésű, optimalizált weboldal</li>
              <li>Egyedi megjelenés a márkádhoz igazítva</li>
              <li>Kapcsolatfelvételi űrlap (ha szükséges)</li>
              <li>Alap SEO beállítások</li>
              <li>Betanítás a használathoz (ha kell)</li>
            </ul>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </motion.div>
  );
}
