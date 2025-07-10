"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/Projectspage", label: "Projects" },
    { href: "/About", label: "About" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50" aria-label="Primary navigation">
      <div className="flex justify-between items-center px-6 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 select-none">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#225e57] text-white font-bold text-xl border-2 border-[#2c7a7b]">
            OC
          </span>
          <span className="text-xl font-extrabold tracking-wide text-[#225e57]">
            OnyekwereC
          </span>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-sans text-base font-semibold">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`px-2 py-1 border-b-2 border-transparent hover:border-[#225e57] hover:text-[#225e57] transition-colors duration-200 ${pathname === href ? 'border-[#225e57] text-[#225e57]' : 'text-gray-700'}`}
              aria-current={pathname === href ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-[#225e57] bg-gray-100 rounded-full p-2 border border-gray-300 shadow-sm hover:bg-gray-200 transition"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-black shadow-2xl z-50 transition-opacity duration-300 font-sans
        ${isOpen ? 'opacity-100 animate-fade-in' : 'opacity-0 pointer-events-none'}`}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        {/* Floating Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full shadow border border-gray-700 hover:bg-gray-700 transition z-50"
        >
          <X size={28} />
        </button>
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl font-bold text-white">
          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="px-6 py-3 rounded-xl hover:bg-gray-800 transition-all duration-200 text-center w-full"
              style={{ animationDelay: `${i * 120 + 200}ms`, animationFillMode: 'forwards' }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}