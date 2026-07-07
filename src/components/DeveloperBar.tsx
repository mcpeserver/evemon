import React from "react";
import { useDeveloperConfig } from "../hooks/useDeveloperConfig";
import { Code, MessageCircle, ExternalLink, Users, Disc, Layers } from "lucide-react";

export default function DeveloperBar() {
  const { data, loading } = useDeveloperConfig();

  // Helper for whatsapp link
  const whatsappUrl = data?.contact?.whatsapp
    ? `https://wa.me/${data.contact.whatsapp.replace(/\D/g, "")}`
    : "https://wa.me/62895602592430";

  return (
    <div className="w-full bg-obsidian/40 backdrop-blur-md border-b border-graphite/40 py-2 relative z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between gap-4 text-xs font-mono text-neutral-400">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-goldaccent animate-pulse" />
            <span className="tracking-wide uppercase text-[10px] text-neutral-500">Developer Rail</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 max-w-full -mr-4 pr-4 md:mr-0 md:pr-0 scroll-smooth">
            {/* Developed By */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-800 bg-charcoal/30 text-neutral-300 shrink-0 select-none">
              <Code size={11} className="text-goldaccent" />
              <span>Dev: {loading ? "Memuat..." : data?.name}</span>
            </div>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-800 bg-charcoal/20 hover:bg-neutral-800/40 hover:border-neutral-700 hover:text-white transition-all duration-300 shrink-0"
              id="dev-bar-whatsapp"
            >
              <MessageCircle size={11} className="text-emerald-500" />
              <span>WhatsApp Dev</span>
            </a>

            {/* Portfolio */}
            <a
              href={data?.website?.portfolio || "https://sfl.gl/x2ic"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-800 bg-charcoal/20 hover:bg-neutral-800/40 hover:border-neutral-700 hover:text-white transition-all duration-300 shrink-0"
              id="dev-bar-portfolio"
            >
              <ExternalLink size={11} className="text-blue-400" />
              <span>Portfolio Dev</span>
            </a>

            {/* Website Server Lain */}
            <a
              href="https://sfl.gl/x2ic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-800 bg-charcoal/20 hover:bg-neutral-800/40 hover:border-neutral-700 hover:text-white transition-all duration-300 shrink-0"
              id="dev-bar-other-server"
            >
              <Layers size={11} className="text-purple-400" />
              <span>Server Lain</span>
            </a>

            {/* Komunitas Developer */}
            <a
              href={data?.community?.website || "https://community.randev.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-800 bg-charcoal/20 hover:bg-neutral-800/40 hover:border-neutral-700 hover:text-white transition-all duration-300 shrink-0"
              id="dev-bar-community"
            >
              <Users size={11} className="text-amber-500" />
              <span>{loading ? "Komunitas" : data?.community?.name}</span>
            </a>

            {/* Discord Komunitas */}
            <a
              href={data?.community?.discord || "https://discord.gg/9KUN2byKRM"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-800 bg-charcoal/20 hover:bg-neutral-800/40 hover:border-neutral-700 hover:text-white transition-all duration-300 shrink-0"
              id="dev-bar-discord"
            >
              <Disc size={11} className="text-indigo-400 animate-spin-slow" />
              <span>Discord Komunitas</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
