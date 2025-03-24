"use client";
import Link from "next/link";
import { Home, Briefcase, Info, Mail } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 text-white flex justify-center gap-8 shadow-md transition-all duration-500 ${
        isHovered ? "bg-black" : "bg-gray-900/60 backdrop-blur-md"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href="/"
        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800 transition"
      >
        <Home size={20} /> <span>Home</span>
      </Link>
      <Link
        href="/projects"
        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800 transition"
      >
        <Briefcase size={20} /> <span>Projects</span>
      </Link>
      <Link
        href="/About"
        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800 transition"
      >
        <Info size={20} /> <span>About</span>
      </Link>
      <Link
        href="/Contact"
        className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-800 transition"
      >
        <Mail size={20} /> <span>Contact</span>
      </Link>
    </nav>
  );
}
