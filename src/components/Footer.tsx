import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-300 py-10 px-4">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-4">
        {/* Logo */}
        <Image
          src="/images/logo-bright.svg"
          alt="Bright Logo"
          width={70}
          height={70}
        />

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.instagram.com/brightmze"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/brightmze"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className="w-full h-px bg-neutral-400 dark:bg-neutral-700 my-6" />

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Bright Misael Zega. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
