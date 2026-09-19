import { useState } from "react";

const links = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
            className="rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          
          <a href="#home" className="hidden items-center gap-2 lg:flex">
            <span className="brand-bg flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white">
              DS
            </span>
            <span className="text-xl font-extrabold">
              Dev <span className="brand-text">Stack</span>
            </span>
          </a>
        </div>

        
        <a href="#home" className="flex items-center gap-2 lg:hidden">
          <span className="brand-bg flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white">
            DS
          </span>
          <span className="text-lg font-extrabold">
            Dev <span className="brand-text">Stack</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={
                  link === "Home"
                    ? "font-semibold text-pink-600"
                    : "font-medium text-slate-700 hover:text-pink-600"
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        
        <div className="flex items-center gap-2 sm:gap-4">
          <button className="text-sm font-medium text-slate-700 hover:text-pink-600 sm:text-base">
            Sign In
          </button>
          <button className="rounded-full bg-pink-600 px-4 py-2 text-sm font-semibold text-white hover:bg-pink-700 sm:px-6 sm:text-base">
            Sign Up
          </button>
        </div>
      </nav>

      
      {open && (
        <ul className="space-y-1 border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 font-medium text-slate-700 hover:bg-slate-100"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
