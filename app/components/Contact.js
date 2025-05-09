"use client";
import React, { useState } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.5,
      delay,
      ease: "easeOut",
    },
  }),
};

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const isValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "" &&
    message.trim() !== "";
  return (
    <Element name="contact">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={scaleInVariant}
        custom={0}
        className="min-h-screen bg-white p-8"
      >
        <h1 className="text-4xl font-bold mb-6 text-cyan-800 text-center">
          Kapcsolatfelvétel
        </h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Bal oldal: információk */}
          <div className="md:w-1/2 space-y-4">
            <p className="font-bold text-xl">
              Amennyiben szeretnéd velem felvenni a kapcsolatot, megteheted az
              alábbi elérhetőségeimen, vagy töltsd ki a kapcsolatfelvételi
              űrlapot.
            </p>
            <p>
              <strong>Cím: </strong>
              3051 Szarvasdege Kossuth út 42.
              <br />
              <strong>Telefon:</strong> <span>06-20-212-6622</span>
              <br />
              <strong>E-mail:</strong> <span>troli0723@gmail.com</span>
            </p>

            {/* Google térkép */}
            <div className="w-full h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2678.803132080789!2d19.64019037660135!3d47.824032471210536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4740487571ccb2e9%3A0x57ffb72c1de53cb!2sSzarvasgede%2C%20Kossuth%20%C3%BAt%2042%2C%203051%20Hungary!5e0!3m2!1sen!2suk!4v1746624603898!5m2!1sen!2suk"
                allowFullScreen=""
                className="w-full h-full rounded-xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Jobb oldal: űrlap */}

          <div className="md:w-1/2 bg-gray-50 p-6 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Üzenetküldés</h2>
            <form className="space-y-4">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Teljes neve"
                className="w-full p-2 border rounded"
                required
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="E-mail címe"
                className="w-full p-2 border rounded"
                required
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                placeholder="Telefonszáma"
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Üzenete"
                rows={4}
                className="w-full p-2 border rounded"
                required
              ></textarea>

              <button
                type="submit"
                disabled={!isValid}
                className="bg-black text-white disabled:opacity-25 disabled:cursor-not-allowed px-6 py-2 rounded hover:bg-gray-800"
              >
                ÜZENETKÜLDÉS
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </Element>
  );
}
