"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Order", href: "/order" },
  { label: "About", href: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#fdf8f2]/95 backdrop-blur-sm border-b-4 border-transparent" style={{ borderImage: 'repeating-linear-gradient(90deg, #f4a7b9 0px, #f4a7b9 20px, #7eccc5 20px, #7eccc5 40px, #f5a76b 40px, #f5a76b 60px, #c5d43e 60px, #c5d43e 80px, #b87bc8 80px, #b87bc8 100px, #5b9bd5 100px, #5b9bd5 120px) 4', boxShadow: '0 1px 12px rgba(0,0,0,0.08)' }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">✨</span>
          <div className="leading-tight">
            <div className="font-display text-xl text-[#7a4f2e] group-hover:text-[#f4845f] transition-colors">
              Sassy Signs
            </div>
            <div className="text-xs font-semibold tracking-widest text-[#b07c56] uppercase -mt-1">
              & Designs
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-semibold text-sm tracking-wide transition-colors ${
                pathname === link.href
                  ? "text-[#f4845f]"
                  : "text-[#7a4f2e] hover:text-[#f4845f]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/order"
            className="bg-[#f4845f] hover:bg-[#e8724e] text-white font-bold text-sm px-5 py-2 rounded-full transition-colors"
          >
            Order Now
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-[#7a4f2e]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#fdf8f3] border-t border-[#f7d9d0] px-6 py-4 flex flex-col gap-4">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-semibold text-[#7a4f2e] hover:text-[#f4845f] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/order"
            onClick={() => setOpen(false)}
            className="bg-[#f4845f] text-white font-bold text-sm px-5 py-2 rounded-full text-center transition-colors"
          >
            Order Now
          </Link>
        </div>
      )}
    </header>
  );
}
