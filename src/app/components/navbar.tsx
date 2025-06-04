"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/Projectspage", label: "Projects" },
    { href: "/About", label: "About" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <nav className={styles.navbar} aria-label="Primary navigation">
      <div className={styles.container}>
        <h1 className="text-2xl font-bold tracking-wide font-montserrat text-[#225e57] dark:text-teal-300">
  Onyekwere<span className="text-[#2c7a7b] dark:text-[#38b2ac]">C</span>
</h1>


        {/* Desktop Menu */}
        <div className={styles.links}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${pathname === href ? styles.active : ""}`}
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
  className="md:hidden text-[#225e57] dark:text-teal-300 z-50"
>
  {isOpen ? <X size={28} /> : <Menu size={28} />}
</button>


      </div>

      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        <div className={styles.sidebarLinks}>
          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className={styles.slideIn}
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
