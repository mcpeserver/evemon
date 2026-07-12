import React from "react";
import { useDeveloperConfig } from "../hooks/useDeveloperConfig";
import { siteConfig } from "../config/site";
import { Disc, MessageCircle, ExternalLink, Globe, Code, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function Community() {
  const { data, loading } = useDeveloperConfig();

  const whatsappUrl = data?.contact?.whatsapp
    ? `https://wa.me/${data.contact.whatsapp.replace(/\D/g, "")}`
    : "https://wa.me/62895602592430";

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="komunitas"
      className="relative min-h-[80vh] flex flex-col justify-center items-center py-24 px-4 overflow-hidden pt-36 md:pt-44"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-[300px] h-[300px] bg-goldaccent/5 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-[20%] right-[15%] w-[400px] h-[400px] bg-blue-900/5 rounded-full filter blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col gap-12">
        {/* Page Header */}
        <div className="text-center flex flex-col gap-3">
          <span className="text-[10px] font-bold tracking-[0.25em] text-goldaccent uppercase font-mono bg-goldaccent/10 px-4 py-1.5 rounded-full self-center">
            Community & Developer Hub
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Pusat Komunitas & Developer
          </h2>
          <p className="text-sm text-neutral-400 font-sans max-w-xl mx-auto leading-relaxed">
            Terhubung dengan komunitas Minecraft resmi kami serta tim pengembang yang merancang dan memelihara ekosistem digital ini.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          
          {/* Card 1: Main Server Community */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-900 bg-charcoal/30 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between gap-6 hover:border-neutral-800 transition-all duration-300 relative group overflow-hidden"
            id="community-server-card"
          >
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-blue-500/5 rounded-full filter blur-[60px] pointer-events-none group-hover:bg-blue-500/10 transition-all duration-500" />
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Disc size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-mono font-medium text-white group-hover:text-goldaccent transition-colors duration-300">
                  {siteConfig.name} Discord
                </h3>
                <span className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase">Official Server Connection</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans mt-1">
                Bergabunglah dengan server Discord resmi kami untuk mendapatkan informasi pembaruan terbaru, mengobrol dengan sesama pemain, mengajukan tiket bantuan, dan berpartisipasi dalam event-event komunitas kami yang menarik.
              </p>
            </div>
            <a
              href={siteConfig.socials.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-mono tracking-wider text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 shadow-lg shadow-indigo-600/10"
              id="community-join-discord"
            >
              <Disc size={14} className="animate-spin-slow" />
              <span>Masuk Discord Server</span>
            </a>
          </motion.div>

          {/* Card 2: Developer Team Community */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-neutral-900 bg-charcoal/30 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between gap-6 hover:border-neutral-800 transition-all duration-300 relative group overflow-hidden"
            id="community-dev-card"
          >
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-amber-500/5 rounded-full filter blur-[60px] pointer-events-none group-hover:bg-amber-500/10 transition-all duration-500" />
            <div className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                <Globe size={20} />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-mono font-medium text-white group-hover:text-goldaccent transition-colors duration-300">
                  {loading ? "Komunitas Developer" : data?.community?.name}
                </h3>
                <span className="text-[10px] text-neutral-500 font-mono tracking-wider uppercase">Developer Ecosystem Hub</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans mt-1">
                Ekosistem pengembang tempat lahirnya berbagai proyek open-source, API, dan integrasi server game. Tempat bertukar wawasan seputar coding, arsitektur server, dan pengembangan fitur Minecraft kustom.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={data?.community?.website || "https://community.randev.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-mono tracking-wider text-neutral-300 border border-neutral-800 bg-charcoal/10 hover:bg-neutral-800/40 hover:border-neutral-700 transition-all duration-300"
                id="community-dev-website"
              >
                <Globe size={12} />
                <span>Website</span>
              </a>
              <a
                href={data?.community?.discord || "https://discord.gg/9KUN2byKRM"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-mono tracking-wider text-neutral-300 border border-neutral-800 bg-charcoal/10 hover:bg-neutral-800/40 hover:border-neutral-700 transition-all duration-300"
                id="community-dev-discord"
              >
                <Disc size={12} />
                <span>Discord</span>
              </a>
            </div>
          </motion.div>

          {/* Card 3: Main Developer - Full Width Banner */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 rounded-2xl border border-neutral-900 bg-charcoal/30 backdrop-blur-md p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-8 hover:border-neutral-800 transition-all duration-300 relative group overflow-hidden"
            id="community-main-developer-card"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-goldaccent/0 via-goldaccent/[0.01] to-goldaccent/0 pointer-events-none" />
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-goldaccent/10 border border-goldaccent/20 flex items-center justify-center text-goldaccent shrink-0 shadow-lg shadow-goldaccent/5">
                <Code size={28} />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <h3 className="text-xl font-mono font-bold text-white tracking-tight">
                    {loading ? "Ran Dev" : data?.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-goldaccent/10 text-goldaccent text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-full border border-goldaccent/20">
                    <ShieldCheck size={9} />
                    <span>Lead Dev</span>
                  </div>
                </div>
                <span className="text-[10px] text-neutral-500 font-mono tracking-widest uppercase">System Architect & Creator</span>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans max-w-xl mt-1">
                  Pengembang sistem utama di balik platform EVEMON SMP. Mengelola seluruh integrasi API, sinkronisasi data dinamis, pemeliharaan basis data, serta arsitektur antarmuka web modern yang ringan dan berkinerja tinggi ini.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10 shrink-0">
              {/* WhatsApp direct chat button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-mono tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 shadow-lg shadow-emerald-600/10 cursor-pointer text-center sm:w-auto"
                id="community-whatsapp-direct"
              >
                <MessageCircle size={14} />
                <span>Chat WhatsApp Dev</span>
              </a>

              {/* Portfolio */}
              <a
                href={data?.website?.portfolio || "https://sfl.gl/x2ic"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-mono tracking-wider text-black bg-white hover:bg-neutral-200 transition-all duration-300 shadow-lg cursor-pointer text-center sm:w-auto"
                id="community-portfolio-direct"
              >
                <ExternalLink size={13} />
                <span>Portfolio Dev</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
