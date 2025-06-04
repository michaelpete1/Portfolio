"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/Projectspage", label: "Projects" },
    { href: "/About", label: "About" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-black shadow-md z-50">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-[#225e57] dark:text-teal-300 font-montserrat">
            OnyekwereC
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 font-roboto text-sm font-medium">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-[#225e57] text-gray-700 dark:text-gray-200 transition-colors duration-300"
                aria-current={typeof window !== 'undefined' && window.location.pathname === href ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#225e57] dark:text-teal-300 z-50"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-black shadow-lg transform transition-transform duration-300 ease-in-out md:hidden font-roboto ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col items-start p-6 space-y-6 text-lg text-gray-700 dark:text-gray-200">
            {links.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#225e57] transition-colors duration-300 animate-slide-in"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.4s ease forwards;
        }

        .animate-slide-in:hover {
          animation: pulse-color 1.5s infinite alternate;
        }

        @keyframes pulse-color {
          0% {
            color: #225e57;
          }
          100% {
            color: #1a4b46;
          }
        }
      `}</style>
    </>
  );
}
