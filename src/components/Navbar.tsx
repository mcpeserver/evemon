import React, { useState, useEffect } from "react";
import { siteConfig } from "../config/site";
import { useDeveloperConfig } from "../hooks/useDeveloperConfig";
import { Menu, X, ChevronRight, Gamepad2, ChevronDown, Globe, Disc, MessageCircle, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImage from "../assets/logo.jpg";

export default function Navbar() {
  const { data, loading } = useDeveloperConfig();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [komunitasOpen, setKomunitasOpen] = useState(false);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setKomunitasOpen(false);
    
    // Update the hash to trigger state change in App.tsx
    window.location.hash = href;
    
    // Scroll to top to ensure clean rendering on SPA page change
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = data?.contact?.whatsapp
    ? `https://wa.me/${data.contact.whatsapp.replace(/\D/g, "")}`
    : "https://wa.me/62895602592430";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-obsidian/95 backdrop-blur-xl border-b border-graphite/60 shadow-xl py-3"
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
                src={logoImage}
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
            {siteConfig.navigation.map((item) => {
              if (item.name === "Komunitas") {
                return (
                  <div
                    key={item.name}
                    className="relative py-1"
                    onMouseEnter={() => setKomunitasOpen(true)}
                    onMouseLeave={() => setKomunitasOpen(false)}
                  >
                    <button
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-xs font-mono tracking-wider text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-1 cursor-pointer focus:outline-none"
                      id="nav-link-komunitas"
                    >
                      <span>{item.name}</span>
                      <ChevronDown size={11} className={`transition-transform duration-300 ${komunitasOpen ? "rotate-180 text-goldaccent" : ""}`} />
                    </button>

                    {/* Community Dropdown Menu */}
                    <AnimatePresence>
                      {komunitasOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 5, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-56 rounded-xl border border-neutral-900 bg-obsidian/95 backdrop-blur-2xl p-2 shadow-2xl z-50 flex flex-col gap-1"
                        >
                          {/* Discord Server */}
                          <a
                            href={siteConfig.socials.discord}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono text-neutral-300 hover:bg-neutral-800/40 hover:text-white transition-colors"
                          >
                            <Disc size={13} className="text-indigo-400" />
                            <span>Discord Server</span>
                          </a>

                          {/* Website Komunitas */}
                          <a
                            href={data?.community?.website || "https://community.randev.com"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono text-neutral-300 hover:bg-neutral-800/40 hover:text-white transition-colors"
                          >
                            <Globe size={13} className="text-amber-500" />
                            <span>Website Komunitas</span>
                          </a>

                          {/* Discord Komunitas */}
                          <a
                            href={data?.community?.discord || "https://discord.gg/9KUN2byKRM"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono text-neutral-300 hover:bg-neutral-800/40 hover:text-white transition-colors"
                          >
                            <Disc size={13} className="text-indigo-400" />
                            <span>Discord Komunitas</span>
                          </a>

                          {/* Portfolio Dev */}
                          <a
                            href={data?.website?.portfolio || "https://sfl.gl/x2ic"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-2 rounded-lg border-t border-neutral-900 mt-1 pt-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
                          >
                            <ExternalLink size={13} className="text-blue-400" />
                            <span>Portfolio Dev</span>
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
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
              );
            })}

            {/* Separate Portfolio Link on Desktop */}
            <a
              href={data?.website?.portfolio || "https://sfl.gl/x2ic"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono tracking-wider text-neutral-400 hover:text-white transition-colors duration-200 relative py-1 group flex items-center gap-1 border-l border-neutral-800 pl-4"
              id="nav-link-dev-portfolio"
            >
              <span>Portfolio Dev</span>
              <ExternalLink size={10} className="text-neutral-500 group-hover:text-goldaccent transition-colors" />
            </a>
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
            className="absolute top-full left-0 w-full bg-obsidian/95 backdrop-blur-2xl border-b border-graphite/80 py-6 px-4 md:hidden flex flex-col gap-5 shadow-2xl overflow-y-auto max-h-[85vh] scrollbar-thin"
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

            {/* Developer & Community Section inside Mobile Drawer */}
            <div className="border-t border-neutral-900 pt-5 mt-2 flex flex-col gap-4">
              <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest block">
                Developer & Komunitas
              </span>
              
              <div className="grid grid-cols-2 gap-2">
                {/* Whatsapp Chat Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-mono tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-lg"
                  id="mobile-dev-whatsapp"
                >
                  <MessageCircle size={14} />
                  <span>Chat WhatsApp Dev</span>
                </a>

                {/* Portfolio Developer */}
                <a
                  href={data?.website?.portfolio || "https://sfl.gl/x2ic"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-[11px] font-mono tracking-wider text-neutral-300 border border-neutral-800 bg-charcoal/20 hover:bg-neutral-800"
                  id="mobile-dev-portfolio"
                >
                  <ExternalLink size={11} className="text-blue-400" />
                  <span>Portfolio Dev</span>
                </a>

                {/* Website Komunitas */}
                <a
                  href={data?.community?.website || "https://community.randev.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-[11px] font-mono tracking-wider text-neutral-300 border border-neutral-800 bg-charcoal/20 hover:bg-neutral-800"
                  id="mobile-dev-comm-web"
                >
                  <Globe size={11} className="text-amber-500" />
                  <span>Website Komunitas</span>
                </a>

                {/* Discord Komunitas */}
                <a
                  href={data?.community?.discord || "https://discord.gg/9KUN2byKRM"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-[11px] font-mono tracking-wider text-neutral-300 border border-neutral-800 bg-charcoal/20 hover:bg-neutral-800"
                  id="mobile-dev-comm-discord"
                >
                  <Disc size={11} className="text-indigo-400" />
                  <span>Discord Komunitas</span>
                </a>
              </div>

              <div className="text-center mt-1">
                <span className="text-[10px] text-neutral-600 font-mono">
                  Developed by {loading ? "Memuat..." : data?.name}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
