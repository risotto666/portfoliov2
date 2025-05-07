import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { LoadingProvider } from "./components/LoadingProvider";
import Head from "next/head";
import { Domine } from "next/font/google";

const domine = Domine({
  subsets: ["latin"],
  weight: ["400"], // csak 400-as súly érhető el
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Web development",
  description: "Building websites",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Tóth Roland | Webfejlesztő Portfólió</title>
        <meta
          name="description"
          content="Webfejlesztő portfólióm, ahol bemutatom a különböző projekteket és a szakmai tapasztalataimat."
        />
        <meta
          name="keywords"
          content="webfejlesztő, Next.js, React, frontend, portfólió, modern web"
        />
        <meta name="author" content="Tóth Roland" />

        {/* Open Graph metaadatok (Facebook, LinkedIn, stb.) */}
        <meta
          property="og:title"
          content="Tóth Roland | Webfejlesztő Portfólió"
        />
        <meta
          property="og:description"
          content="Fedezd fel a webfejlesztői portfóliómat, és tudd meg, hogyan segíthetek vállalkozásod online megjelenésének javításában."
        />
        <meta property="og:image" content="/images/portfolio-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter metaadatok */}
        <meta
          name="twitter:title"
          content="Tóth Roland | Webfejlesztő Portfólió"
        />
        <meta
          name="twitter:description"
          content="Fedezd fel a webfejlesztői portfóliómat és a projektjeimet."
        />
        <meta name="twitter:image" content="/images/portfolio-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body
        className={`${geistSans.variable} ${domine.className}  ${geistMono.variable} antialiased`}
      >
        <LoadingProvider> {children}</LoadingProvider>
      </body>
    </html>
  );
}
