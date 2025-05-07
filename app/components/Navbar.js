"use client";
import { useState, useEffect } from "react";
import { Element, Link } from "react-scroll";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const fadeUpVariant = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,

    transition: { duration: 0.6, delay },
  }),
};
function Navbar() {
  const [navbarHidden, setNavbarHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 10;

      if (router.pathname === "/contact") {
        setNavbarHidden(false);
      } else {
        if (currentScrollY === 0) {
          setNavbarHidden(false);
        } else if (currentScrollY > lastScrollY + scrollThreshold) {
          setNavbarHidden(true);
        } else if (currentScrollY < lastScrollY - scrollThreshold) {
          setNavbarHidden(false);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, navbarHidden, router.pathname]);

  return (
    <Element name="home">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
        custom={0.6}
        className={`fixed top-0  left-0 w-full bg-white  py-4 px-6 z-10 ${
          navbarHidden ? "-translate-y-full" : "translate-y-0"
        } transition-transform duration-300 `}
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <ul className="flex md:text-2xl lg:text-3xl gap-x-8 justify-center">
          <Link to="home" smooth={true} duration={500}>
            <li className="text-cyan-500 cursor-pointer hover:text-cyan-600 transition duration-300 ease-in-out transform hover:scale-110 ">
              Főoldal
            </li>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <li className="text-cyan-500 cursor-pointer hover:text-cyan-600 transition duration-300 ease-in-out transform hover:scale-110 ">
              Rólam
            </li>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <li className="text-cyan-500 cursor-pointer hover:text-cyan-600 transition duration-300 ease-in-out transform hover:scale-110 ">
              Munkáim
            </li>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <li className="text-cyan-500 cursor-pointer hover:text-cyan-600 transition duration-300 ease-in-out transform hover:scale-110 ">
              Kapcsolat
            </li>
          </Link>
        </ul>
      </motion.div>
    </Element>
  );
}

export default Navbar;
