import React from "react";
import { siteConfig } from "../config/site";
import { Flame, Star } from "lucide-react";
import { motion } from "motion/react";

export default function Consequences() {
  return (
    <section
      className="relative py-28 px-4 md:px-8 bg-charcoal border-b border-graphite/30 overflow-hidden flex flex-col items-center justify-center"
      id="konsekuensi"
    >
      {/* Cinematic subtle light flare behind blockquote */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-red-950/10 filter blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-red-400"
        >
          <Flame size={16} className="animate-pulse" />
        </motion.div>

        {/* Beautiful large elegant editorial blockquote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col gap-4 relative"
        >
          {/* Large decorative quotation marks */}
          <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-[120px] font-serif text-neutral-800/30 select-none pointer-events-none">
            “
          </span>

          {/* Core text - smaller elegant size as per "bagian filosofi dan teks yang panjangj cukup buatkan ukuran kecils saja" */}
          <blockquote className="font-serif italic text-base md:text-lg text-neutral-300 leading-relaxed max-w-2xl mx-auto relative z-10 drop-shadow-md">
            "{siteConfig.consequences.text}"
          </blockquote>

          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="w-1.5 h-1.5 rounded-full bg-goldaccent" />
            <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
              {siteConfig.consequences.author}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-goldaccent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
