"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, PawPrint, ArrowUpRight, Instagram } from "lucide-react";
import ThemeToggle from "@/Components/ThemeToggle";
const links = [
  { href: "/", label: "Home" },
  { href: "/cats", label: "Meet the cats" },
  { href: "/services", label: "Our care" },
  { href: "/gallery", label: "Gallery" },
  { href: "/cat-care", label: "Cat care" },
  { href: "/about", label: "Our story" },
  { href: "/contact", label: "Contact" },
];
export default function Navbar({ logoUrl = "" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 18);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <header
      className={`site-header premium-header ${scrolled ? "is-scrolled" : ""}`}
    >
      <div className="top-strip">
        <span>✦ AZIZ FELINES CATTERY · MUMBRA, THANE</span>
        <span>Thoughtful care for every little paw</span>
        <a href="tel:+917700004469">+91 77000 04469</a>
      </div>
      <nav className="nav-wrap premium-nav">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            {
              <img
                src={logoUrl || "/aziz-felines-logo.png"}
                alt="Aziz Felines Cattery logo"
              />
            }
          </span>
          <span>
            <b>AZIZ FELINES</b>
            <small>CATTERY & FELINE CARE</small>
          </span>
        </Link>
        <button
          className="mobile-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link
            className="nav-cta"
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Plan a visit <ArrowUpRight size={15} />
          </Link>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
