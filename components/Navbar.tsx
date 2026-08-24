"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "home";
      for (const link of links) {
        const id = link.href.replace("#", "");
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[200] flex items-center justify-between gap-10 md:gap-14
        border border-border rounded-full bg-black/60 backdrop-blur-md transition-all duration-300
        ${scrolled ? "px-5 py-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.5)]" : "px-6 py-3.5"}`}
    >
      <span className="font-mono text-sm font-semibold tracking-wide">{profile.logo}</span>
      <ul className="hidden md:flex gap-8 list-none">
        {links.map((link) => {
          const id = link.href.replace("#", "");
          const isActive = active === id;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm pb-1 border-b transition-colors ${
                  isActive
                    ? "text-white border-white"
                    : "text-muted border-transparent hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
