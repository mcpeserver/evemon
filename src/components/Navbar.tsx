import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { Menu, X, ChevronRight, Gamepad2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`relative z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-obsidian/90 backdrop-blur-xl border-b border-graphite/60 shadow-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#beranda"
            onClick={(e) => handleNavClick(e, "#beranda")}
            className="flex items-center gap-3 group"
            id="brand-logo-link"
          >
            <div className="relative w-8 h-8 rounded-full bg-graphite/40 border border-neutral-800 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img
                src="/logo.png"
                alt="EVEMON SMP Logo"
                className="w-full h-full object-cover rounded-full invert brightness-200"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-semibold text-sm tracking-widest text-moonwhite group-hover:text-goldaccent transition-colors duration-200">
                {siteConfig.name}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs font-mono tracking-wider text-neutral-400 hover:text-white transition-colors duration-200 relative py-1 group"
                id={`nav-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-goldaccent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Join Button */}
          <div className="hidden md:block">
            <a
              href="#server-info"
              onClick={(e) => handleNavClick(e, "#server-info")}
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono tracking-wider text-white border border-neutral-700 bg-charcoal/40 hover:bg-white hover:text-black transition-all duration-300 group"
              id="nav-join-button"
            >
              <Gamepad2 size={13} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Gabung Sekarang</span>
              <ChevronRight size={12} className="opacity-60" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-400 hover:text-white p-1"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-obsidian/95 backdrop-blur-2xl border-b border-graphite/80 py-6 px-4 md:hidden flex flex-col gap-5 shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm font-mono tracking-wider text-neutral-400 hover:text-white transition-colors py-2 border-b border-neutral-900"
                  id={`mobile-nav-link-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <a
              href="#server-info"
              onClick={(e) => handleNavClick(e, "#server-info")}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-mono tracking-wider text-black bg-white hover:bg-neutral-200 transition-colors"
              id="mobile-nav-join-button"
            >
              <Gamepad2 size={13} />
              <span>Gabung Sekarang</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
