"use client";

import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { motion } from "framer-motion";
const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 0 },
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
export function Steps() {
  return (
    <div className="mt-12 rounded-3xl shadow-xl mb-12 p-8">
      <h1 className="text-3xl text-cyan-800 font-bold  mb-4">
        Így készül a weboldalad
      </h1>
      <Timeline horizontal className="px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleInVariant}
          custom={0}
        >
          <TimelineItem>
            <TimelineContent>
              <TimelineTime>1.</TimelineTime>
              <TimelineTitle>Megbeszélés és tervezés</TimelineTitle>
              <TimelineBody>
                Felmérem az igényeidet, megbeszéljük, milyen célra készül az
                oldal, és megtervezem a funkciókat és a dizájnt.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleInVariant}
          custom={1}
        >
          <TimelineItem>
            <TimelineContent>
              <TimelineTime>2.</TimelineTime>
              <TimelineTitle>Fejlesztés és tesztelés</TimelineTitle>
              <TimelineBody>
                Elkészítem a weboldalt modern technológiákkal, mobilbarát
                kialakítással. Minden funkciót letesztelve biztosítom a
                megbízható működést.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleInVariant}
          custom={1}
        >
          <TimelineItem>
            <TimelineContent>
              <TimelineTime>3.</TimelineTime>
              <TimelineTitle>Átadás és támogatás</TimelineTitle>
              <TimelineBody>
                Az elkészült weboldalt átadom, és igény szerint segítek a
                tárhelyre való feltöltésben, valamint későbbi frissítésekben is
                számíthatsz rám.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </motion.div>
      </Timeline>
    </div>
  );
}
