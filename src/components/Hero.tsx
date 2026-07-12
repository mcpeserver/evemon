import React, { useState } from "react";
import { siteConfig } from "../config/site";
import { useDeveloperConfig } from "../hooks/useDeveloperConfig";
import { Copy, Check, Disc, MessageCircle, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import heroImage from "../assets/hero.jpg";
import logoImage from "../assets/logo.jpg";

export default function Hero() {
  const { data } = useDeveloperConfig();
  const [copiedJava, setCopiedJava] = useState(false);
  const [copiedBedrock, setCopiedBedrock] = useState(false);

  const handleCopyJava = () => {
    navigator.clipboard.writeText(siteConfig.server.javaIp);
    setCopiedJava(true);
    setTimeout(() => setCopiedJava(false), 2000);
  };

  const handleCopyBedrock = () => {
    const text = `${siteConfig.server.bedrockIp}:${siteConfig.server.bedrockPort}`;
    navigator.clipboard.writeText(text);
    setCopiedBedrock(true);
    setTimeout(() => setCopiedBedrock(false), 2000);
  };

  const handleScrollDown = () => {
    window.location.hash = "#filosofi";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Helper for whatsapp link
  const whatsappUrl = data?.contact?.whatsapp
    ? `https://wa.me/${data.contact.whatsapp.replace(/\D/g, "")}`
    : siteConfig.socials.whatsapp;

  return (
    <section
      id="beranda"
      className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-center items-center overflow-hidden pt-36 md:pt-44 pb-12 px-4"
    >
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="EVEMON World Night Landscape"
          className="w-full h-full object-cover scale-105 filter brightness-95"
          referrerPolicy="no-referrer"
        />
        {/* Dark elegant overlays to guarantee readability (65-70%) */}
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/85 via-obsidian/70 to-obsidian z-10" />
      </div>

      {/* Floating Sparkles Background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-sky-200 rounded-full opacity-30 animate-pulse duration-3000" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full opacity-25 animate-pulse duration-5000" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center gap-6 mt-6">
        {/* Floating Centered Logo */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-32 h-32 md:w-44 md:h-44 rounded-full border border-neutral-800 bg-charcoal/40 backdrop-blur-md flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)]"
        >
          <img
            src={logoImage}
            alt="EVEMON Logo"
            className="w-full h-full object-cover rounded-full invert brightness-200"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Server Sub-title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/40 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] md:text-xs font-mono tracking-widest text-neutral-400 uppercase">
            Sinar Rembulan Menuntun Langkah Kita
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display font-semibold text-4xl sm:text-6xl md:text-7xl tracking-widest text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
        >
          {siteConfig.name}
        </motion.h1>

        {/* Calm narration, not overhyped */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-neutral-400 font-sans text-xs md:text-sm max-w-lg leading-relaxed tracking-wide select-none"
        >
          Selamat datang di tempat di mana petualangan bersatu dengan keheningan.
          Sebuah komunitas Minecraft yang dibangun dengan keseimbangan, kesederhanaan, dan kebersamaan yang tulus di bawah sinar rembulan malam.
        </motion.p>

        {/* Call to Actions (CTAs) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-3.5 mt-4 w-full justify-center"
        >
          {/* Copy Java IP Button */}
          <button
            onClick={handleCopyJava}
            className="flex items-center justify-between gap-3 px-5 py-3 rounded-full border border-neutral-800 bg-charcoal/60 hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300 w-full sm:w-auto text-xs font-mono tracking-wider text-neutral-200 group relative overflow-hidden active:scale-[0.98]"
            id="cta-copy-java-ip"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>Java IP: {siteConfig.server.javaIp}</span>
            </span>
            {copiedJava ? (
              <Check size={14} className="text-emerald-400 animate-scale" />
            ) : (
              <Copy size={14} className="text-neutral-500 group-hover:text-neutral-300 transition-colors" />
            )}
          </button>

          {/* Copy Bedrock IP Button */}
          <button
            onClick={handleCopyBedrock}
            className="flex items-center justify-between gap-3 px-5 py-3 rounded-full border border-neutral-800 bg-charcoal/60 hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300 w-full sm:w-auto text-xs font-mono tracking-wider text-neutral-200 group active:scale-[0.98]"
            id="cta-copy-bedrock-ip"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Bedrock: {siteConfig.server.bedrockIp}:{siteConfig.server.bedrockPort}</span>
            </span>
            {copiedBedrock ? (
              <Check size={14} className="text-emerald-400 animate-scale" />
            ) : (
              <Copy size={14} className="text-neutral-500 group-hover:text-neutral-300 transition-colors" />
            )}
          </button>
        </motion.div>

        {/* Discord & WhatsApp Social CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1.0 }}
          className="flex items-center justify-center gap-6 mt-4 text-xs font-mono text-neutral-400"
        >
          <a
            href={siteConfig.socials.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors py-1 px-2 border border-transparent hover:border-neutral-800 rounded-lg bg-neutral-900/20"
            id="cta-discord"
          >
            <Disc size={14} />
            <span>Join Discord</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors py-1 px-2 border border-transparent hover:border-neutral-800 rounded-lg bg-neutral-900/20"
            id="cta-whatsapp"
          >
            <MessageCircle size={14} />
            <span>Hubungi WhatsApp</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0] }}
        transition={{ delay: 1.5, duration: 2.5, repeat: Infinity }}
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-neutral-500 hover:text-white transition-colors group cursor-pointer"
        id="cta-scroll-down"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Skrol ke Bawah</span>
        <ChevronDown size={14} className="group-hover:translate-y-1 transition-transform duration-300" />
      </motion.button>
    </section>
  );
}
