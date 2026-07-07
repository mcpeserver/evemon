import React from "react";
import { siteConfig } from "../config/site";
import { useDeveloperConfig } from "../hooks/useDeveloperConfig";
import { ExternalLink, Moon, ArrowUp } from "lucide-react";

export default function Footer() {
  const { data, loading } = useDeveloperConfig();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="komunitas"
      className="bg-obsidian border-t border-graphite/40 py-16 px-4 md:px-8 text-neutral-400 font-mono text-xs relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Brand/Identity */}
          <div className="flex flex-col items-center md:items-start gap-3 text-center md:text-left">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="EVEMON Logo"
                className="w-5 h-5 object-contain invert brightness-200"
                referrerPolicy="no-referrer"
              />
              <span className="font-display font-semibold text-sm tracking-widest text-moonwhite uppercase">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-[10px] text-neutral-500 font-sans tracking-wide max-w-xs leading-relaxed">
              Sebuah dunia Minecraft yang tenang, misterius, dan penuh petualangan di bawah perlindungan sinar bulan sabit.
            </p>
          </div>

          {/* Column 2: Server Navigation */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Navigation</span>
            <div className="flex flex-col items-center md:items-start gap-2">
              <a
                href="#beranda"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#beranda")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-neutral-400 hover:text-white hover:underline transition-all duration-200"
              >
                Beranda
              </a>
              <a
                href="#aturan"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#aturan")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-neutral-400 hover:text-white hover:underline transition-all duration-200"
              >
                Aturan
              </a>
              <a
                href={siteConfig.socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white hover:underline transition-all duration-200"
                id="footer-discord-link"
              >
                Discord Server
              </a>
            </div>
          </div>

          {/* Column 3: Developer & Community Hub */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Developer & Community</span>
            <div className="flex flex-col items-center md:items-start gap-2">
              <a
                href={data?.website?.portfolio || "https://sfl.gl/x2ic"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-neutral-400 hover:text-white hover:underline transition-all duration-200"
                id="footer-portfolio-link"
              >
                <span>{loading ? "Ran Dev" : data?.name} Portfolio</span>
                <ExternalLink size={10} className="text-neutral-600" />
              </a>

              <a
                href={data?.contact?.whatsapp ? `https://wa.me/${data.contact.whatsapp.replace(/\D/g, "")}` : "https://wa.me/62895602592430"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-neutral-400 hover:text-white hover:underline transition-all duration-200"
                id="footer-whatsapp-link"
              >
                <span>WhatsApp Dev</span>
                <ExternalLink size={10} className="text-neutral-600" />
              </a>

              <a
                href="https://sfl.gl/x2ic"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-neutral-400 hover:text-white hover:underline transition-all duration-200"
                id="footer-other-server-link"
              >
                <span>Server Lain</span>
                <ExternalLink size={10} className="text-neutral-600" />
              </a>

              <a
                href={data?.community?.website || "https://community.randev.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-neutral-400 hover:text-white hover:underline transition-all duration-200"
                id="footer-community-link"
              >
                <span>{loading ? "Komunitas Dev" : data?.community?.name}</span>
                <ExternalLink size={10} className="text-neutral-600" />
              </a>

              <a
                href={data?.community?.discord || "https://discord.gg/9KUN2byKRM"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-neutral-400 hover:text-white hover:underline transition-all duration-200"
                id="footer-discord-comm-link"
              >
                <span>Discord Komunitas</span>
                <ExternalLink size={10} className="text-neutral-600" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <div className="h-[1px] w-full bg-graphite/40" />

        {/* Copyright & Dynamic Developer Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-neutral-500">
          <div>
            &copy; {currentYear} {siteConfig.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-1 select-none">
            <span>Powered by</span>
            <span className="text-neutral-400 font-semibold">{loading ? "Ran Dev" : data?.name}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
