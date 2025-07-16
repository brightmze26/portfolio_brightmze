"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 80); // muncul setelah scroll 80px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
        px-6 py-3 rounded-full shadow-md backdrop-blur-md bg-white/40 
        transition-all duration-300 border border-white/30
        ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
    >
      <ul className="flex gap-6 text-sm font-medium text-gray-800">
        <li>
          <a href="#about" >About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
