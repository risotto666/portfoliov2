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

import Link from "next/link";

function Page() {
  return (
    <div className="h-full bg-[#212121] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <p className="text-lg leading-relaxed mb-6 mt-6">
              Roland vagyok webfejlesztő, két éves tapasztalattal. Az utam ebbe
              a szakmába kíváncsisággal kezdődött, és azóta elkötelezett vagyok
              a modern webtechnológiák és a felhasználóbarát élmények
              létrehozásában.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Specializálódok üzleti weboldalak, landoló oldalak és interaktív
              webalkalmazások készítésére, amik gyorsak, elegánsak, és minden
              eszközön tökéletesen működnek.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/me.png"
              alt="Portrait"
              className="rounded-lg  shadow-xl"
            />
          </div>
        </div>
        {/* About Section */}
        <div className="mt-12 bg-[#333] p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">
            Miért válassz engem?
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Különösen szenvedélyesen foglalkozom a szabadúszó webfejlesztéssel,
            segítve a vállalkozásokat és magánszemélyeket, hogy erős online
            jelenlétet építsenek.
          </p>
          <p className="text-lg leading-relaxed">
            Legyen szó céges weboldalról, portfólióról vagy egyedi webes
            megoldásról, itt vagyok, hogy a modern és elegáns megközelítéssel
            valóra váltsam ötleteidet.
          </p>
        </div>
        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-cyan-500 mb-6">
            Technikák, melyekkel dolgozom:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-[#444] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Frontend
              </h3>
              <ul className="list-disc pl-4 text-lg text-gray-300">
                <li>React</li>
                <li>Next.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="bg-[#444] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Backend & Databases
              </h3>
              <ul className="list-disc pl-4 text-lg text-gray-300">
                <li>Supabase</li>
              </ul>
            </div>
            <div className="bg-[#444] p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Tools & Workflow
              </h3>
              <ul className="list-disc pl-4 text-lg text-gray-300">
                <li>Git</li>
                <li>Flowbite</li>
                <li>Framer Motion</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="bg-cyan-600 text-white py-3 px-8 rounded-full text-2xl font-semibold transition duration-300 ease-in-out hover:bg-cyan-700"
          >
            Lépj kapcsolatba velem
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Page;
