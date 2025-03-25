"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 backdrop-blur-md p-4 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-white text-xl font-bold">OnyekwereC</h1>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none z-50"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-6 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <Link
          href="/"
          className="text-white text-2xl hover:text-gray-400"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/Projectspage"
          className="text-white text-2xl hover:text-gray-400"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Link
          href="/About"
          className="text-white text-2xl hover:text-gray-400"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          href="/Contact"
          className="text-white text-2xl hover:text-gray-400"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}
