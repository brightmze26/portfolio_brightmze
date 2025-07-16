"use client";
import ExperienceSection from "@/components/Experience";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import DiagonalProjects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <>
      <Navbar />
      {/* Home */}
      <motion.section
      id="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-16 md:py-20 text-center"
    >
      <div className="w-full max-w-2xl space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Hi, I'm Bright
        </h1>

        <p className="text-base sm:text-lg text-gray-700 px-2 sm:px-4">
          My journey has just begun, exploring the world of web development and AI.
        </p>

        {/* CTA buttons */}
        <div className="flex justify-center flex-wrap gap-3 sm:gap-4">
          <a
            href="https://github.com/brightmze26"
            target="_blank"
            className="bg-black text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:opacity-90 transition text-sm sm:text-base"
          >
            GitHub
          </a>
          <a
            href="/images/CV_Bright Misael Zega.pdf"
            target="_blank"
            className="border border-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-black hover:text-white transition text-sm sm:text-base"
          >
            CV
          </a>
        </div>
      </div>

      {/* Scroll arrow */}
      <Link
        href="#about"
        className="mt-12 sm:mt-16 flex flex-col items-center animate-bounce text-sm text-gray-500"
      >
        <span className="text-xs sm:text-sm">Follow my journey</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>
    </motion.section>

      <About />
      <ExperienceSection />
      <DiagonalProjects />
      <Contact />
      <Footer />
    </>
  );
}
