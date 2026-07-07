import React from "react";
import { siteConfig } from "../config/site";
import { ShieldAlert, HeartCrack, FileX, Compass, TreePine, Terminal, Moon } from "lucide-react";
import { motion } from "motion/react";

// Robust icon dictionary to avoid bundler issues
const iconMap: Record<string, React.ReactNode> = {
  ShieldAlert: <ShieldAlert size={20} className="text-amber-500" />,
  HeartCrack: <HeartCrack size={20} className="text-red-400" />,
  FileX: <FileX size={20} className="text-neutral-400" />,
  Compass: <Compass size={20} className="text-sky-400" />,
  TreePine: <TreePine size={20} className="text-emerald-400" />,
  Terminal: <Terminal size={20} className="text-goldaccent" />,
};

export default function Rules() {
  return (
    <section
      id="aturan"
      className="relative py-28 px-4 md:px-8 bg-obsidian border-b border-graphite/30 overflow-hidden"
    >
      {/* Decorative Moon Background */}
      <div className="absolute right-10 bottom-0 w-[400px] h-[400px] rounded-full bg-neutral-900/40 filter blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center gap-2">
          <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">// Regulasi</span>
          <h2 className="font-display font-medium text-2xl md:text-3xl tracking-widest text-white uppercase">
            Aturan Main Server
          </h2>
          <div className="h-[1px] w-12 bg-neutral-800 mt-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.rules.map((rule, idx) => (
            <motion.div
              key={rule.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-5 rounded-xl border border-neutral-900 bg-charcoal/40 hover:border-neutral-800/60 transition-all duration-300 flex flex-col gap-4 group"
              id={`rule-card-${rule.id}`}
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800/80 group-hover:border-neutral-700 transition-colors">
                  {iconMap[rule.iconName] || <ShieldAlert size={20} />}
                </div>
                <span className="text-[10px] font-mono text-neutral-600 font-bold tracking-wider">
                  #0{idx + 1}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="font-display font-semibold text-xs text-neutral-200 tracking-wide group-hover:text-white transition-colors">
                  {rule.title}
                </h3>
                {/* Styled small as per instructions to keep long text compact */}
                <p className="text-[10px] md:text-[11px] text-neutral-500 font-sans leading-relaxed text-justify">
                  {rule.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
