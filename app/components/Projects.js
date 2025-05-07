"use client";
import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
const fadeUpVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 2.5, delay },
  }),
};
const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Wordle jatek",
      description:
        "Ez egy Wordle-szerű játék, amelyet Next.js segítségével fejlesztettem. A játék minden nap automatikusan egy új szót generál, amelyet a felhasználóknak ki kell találniuk. A projekt célja az volt, hogy bemutassam a Next.js és a React együttes használatával létrehozott dinamikus funkciókat, valamint a Tailwind CSS-t.",
      image: "/wordle.png",
      category: "nextjs",
      tags: ["Next.js", "Tailwind CSS"],

      liveUrl: "https://worlde-magyar.vercel.app",
    },
    {
      id: 2,
      title: "Hajszalon weboldal",
      description:
        "Ez a weboldal egy hajszalon számára készült, ahol az ügyfelek egyszerűen foglalhatnak időpontot online. A rendszer Next.js alapon épült, az adatok kezelését pedig a Supabase biztosítja. A weboldal tartalmaz egy adminisztrációs felületet is, ahol a foglalások megtekinthetők és kezelhetők.",
      image: "/fodraszat.png",
      category: "fullstack",
      tags: ["Next.js", "Tailwind CSS", "Supabase"],

      liveUrl: "https://fodraszat-eight.vercel.app",
    },
    {
      id: 3,
      title: "Quiz jatek",
      description:
        "Ez a modern kvízjáték React alapokra épül, és célja, hogy szórakoztató módon tesztelje a felhasználók tudását. A játék dinamikusan kezeli a kérdéseket és válaszokat, valamint összesíti a pontszámot a játék végén. A reszponzív felület biztosítja, hogy mobilon és asztali gépen is élvezhető legyen.",
      image: "/quiz.png",
      category: "react",
      tags: ["React"],

      liveUrl: "https://quiz-virid-six.vercel.app",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <Element name="projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        custom={0}
        className="py-10 bg-slate-50 "
      >
        <section className="hero-gradient text-black py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl text-cyan-500 font-bold mb-4">
              Portfolióm
            </h1>
            <p className="text-xl text-gray-900 max-w-2xl mx-auto">
              A projektjeim és munkáim bemutatója, amelyek szemléltetik a React,
              Tailwind CSS, Next.js és Supabase terén szerzett tudásomat.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container mx-auto px-4">
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => setFilter("all")}
                className={`px-6 py-2 rounded-full ${
                  filter === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                } transition-colors`}
              >
                Összes
              </button>
              <button
                onClick={() => setFilter("react")}
                className={`px-6 py-2 rounded-full ${
                  filter === "react"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                } transition-colors`}
              >
                React
              </button>
              <button
                onClick={() => setFilter("nextjs")}
                className={`px-6 py-2 rounded-full ${
                  filter === "nextjs"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                } transition-colors`}
              >
                Next.js
              </button>
              <button
                onClick={() => setFilter("fullstack")}
                className={`px-6 py-2 rounded-full ${
                  filter === "fullstack"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                } transition-colors`}
              >
                Full Stack
              </button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border-1 p-2 border-gray-200 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl shadow-white"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <Link
                        href={project.liveUrl}
                        className="text-gray-700 hover:text-blue-600 flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} className="mr-1" />
                        <span>Bemutató</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </Element>
  );
};

export default Projects;
