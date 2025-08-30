"use client";

import { useState } from "react";
import { Menu } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 border-b border-white/10">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className="font-semibold tracking-wide">Syed Abdul Latif<span className="text-brand-400">.</span></a>
        <nav className="hidden md:flex gap-8 text-sm">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-brand-300 transition">{l.label}</a>
          ))}
        </nav>
        <button className="md:hidden btn-ghost" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10">
          <div className="container py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="py-1" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
