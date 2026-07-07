import React, { useState } from "react";
import { siteConfig } from "../config/site";
import { useDeveloperConfig } from "../hooks/useDeveloperConfig";
import { Copy, Check, ShieldCheck, HelpCircle, ArrowRight, Smartphone, Monitor } from "lucide-react";
import { motion } from "motion/react";

export default function ServerInfo() {
  const { data } = useDeveloperConfig();
  const [copiedJava, setCopiedJava] = useState(false);
  const [copiedBedrock, setCopiedBedrock] = useState(false);

  const handleCopyJava = () => {
    navigator.clipboard.writeText(siteConfig.server.javaIp);
    setCopiedJava(true);
    setTimeout(() => setCopiedJava(false), 2000);
  };

  const handleCopyBedrock = () => {
    navigator.clipboard.writeText(siteConfig.server.bedrockIp);
    setCopiedBedrock(true);
    setTimeout(() => setCopiedBedrock(false), 2000);
  };

  // Helper for whatsapp link
  const whatsappUrl = data?.contact?.whatsapp
    ? `https://wa.me/${data.contact.whatsapp.replace(/\D/g, "")}`
    : siteConfig.socials.whatsapp;

  return (
    <section
      id="server-info"
      className="relative py-28 px-4 md:px-8 bg-charcoal border-b border-graphite/30 overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute left-1/3 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-neutral-900 filter blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">// Aksesibilitas</span>
          <h2 className="font-display font-medium text-2xl md:text-3xl tracking-widest text-white uppercase">
            Informasi Server
          </h2>
          <div className="h-[1px] w-12 bg-neutral-800 mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Java Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl border border-neutral-900 bg-obsidian/60 backdrop-blur-md flex flex-col justify-between hover:border-neutral-800/80 transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-sky-400">
                    <Monitor size={18} />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-sm text-neutral-200">Java Edition</h3>
                    <span className="text-[9px] font-mono text-neutral-500 uppercase">PC / Laptop</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  Online
                </span>
              </div>

              <div className="h-[1px] bg-neutral-900" />

              <div className="flex flex-col gap-3 font-mono text-xs">
                <div className="flex justify-between items-center py-1 border-b border-neutral-900/50">
                  <span className="text-neutral-500">IP Server</span>
                  <span className="text-neutral-300">{siteConfig.server.javaIp}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-neutral-900/50">
                  <span className="text-neutral-500">Port</span>
                  <span className="text-neutral-300">{siteConfig.server.javaPort}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-neutral-500">Versi</span>
                  <span className="text-neutral-300">1.20.x - Terbaru</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCopyJava}
              className="mt-6 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-xs font-mono tracking-wide text-neutral-400 active:scale-[0.98]"
              id="copy-java-ip-card"
            >
              {copiedJava ? (
                <>
                  <Check size={13} className="text-emerald-500" />
                  <span>IP Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Salin IP Java</span>
                </>
              )}
            </button>
          </motion.div>

          {/* Bedrock Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-6 rounded-2xl border border-neutral-900 bg-obsidian/60 backdrop-blur-md flex flex-col justify-between hover:border-neutral-800/80 transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-purple-400">
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <h3 className="font-display font-medium text-sm text-neutral-200">Bedrock Edition</h3>
                    <span className="text-[9px] font-mono text-neutral-500 uppercase">HP / Konsol / Win10</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  Online
                </span>
              </div>

              <div className="h-[1px] bg-neutral-900" />

              <div className="flex flex-col gap-3 font-mono text-xs">
                <div className="flex justify-between items-center py-1 border-b border-neutral-900/50">
                  <span className="text-neutral-500">IP Server</span>
                  <span className="text-neutral-300">{siteConfig.server.bedrockIp}</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-neutral-900/50">
                  <span className="text-neutral-500">Port</span>
                  <span className="text-neutral-300">{siteConfig.server.bedrockPort}</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-neutral-500">Versi</span>
                  <span className="text-neutral-300">Terbaru (Bedrock)</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCopyBedrock}
              className="mt-6 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-neutral-800 bg-neutral-900/40 hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-xs font-mono tracking-wide text-neutral-400 active:scale-[0.98]"
              id="copy-bedrock-ip-card"
            >
              {copiedBedrock ? (
                <>
                  <Check size={13} className="text-emerald-500" />
                  <span>IP Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Salin IP Bedrock</span>
                </>
              )}
            </button>
          </motion.div>
        </div>

        {/* Dynamic Help Center & Community Connect */}
        <div className="mt-12 p-5 rounded-2xl border border-neutral-900 bg-charcoal/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-goldaccent hidden sm:block">
              <ShieldCheck size={16} />
            </div>
            <div>
              <h4 className="text-xs font-display font-medium text-neutral-300">Butuh Bantuan Akses Server?</h4>
              <p className="text-[10px] text-neutral-500">Hubungi moderator atau admin kami untuk panduan whitelist / kendala teknis.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono tracking-wider text-neutral-400 hover:text-white flex items-center gap-1"
              id="help-connect-whatsapp"
            >
              <span>Hubungi Admin</span>
              <ArrowRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
