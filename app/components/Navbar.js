import Link from "next/link";

function Navbar() {
  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full py-4 px-6 ">
      <ul
        className="flex text-2xl gap-x-8 justify-center"
        style={{ fontFamily: "Poppins, sans-serif" }}
      >
        <Link href="/">
          <li className="text-white hover:text-cyan-600 transition duration-300 ease-in-out transform hover:scale-110 hover:underline">
            Főoldal
          </li>
        </Link>
        <Link href="/about">
          <li className="text-white hover:text-cyan-600 transition duration-300 ease-in-out transform hover:scale-110 hover:underline">
            Rólam
          </li>
        </Link>
        <Link href="/projects">
          <li className="text-white hover:text-cyan-600 transition duration-300 ease-in-out transform hover:scale-110 hover:underline">
            Munkáim
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
