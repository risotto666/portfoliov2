"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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
    <div
      className={`fixed top-0  left-0 w-full bg-white  py-4 px-6 z-10 ${
        navbarHidden ? "-translate-y-full" : "translate-y-0"
      } transition-transform duration-300 `}
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <ul className="flex text-2xl gap-x-8 justify-center">
        <Link href="/">
          <li className="text-gray-600 hover:text-cyan-600 transition duration-300 ease-in-out transform hover:scale-110 hover:underline">
            Főoldal
          </li>
        </Link>
        <Link href="/about">
          <li className="text-gray-600 hover:text-cyan-600 transition duration-300 ease-in-out transform hover:scale-110 hover:underline">
            Rólam
          </li>
        </Link>
        <Link href="/projects">
          <li className="text-gray-600 hover:text-cyan-600 transition duration-300 ease-in-out transform hover:scale-110 hover:underline">
            Munkáim
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
