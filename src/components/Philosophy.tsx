import React from "react";
import { siteConfig } from "../config/site";
import { Compass, Moon, Star } from "lucide-react";
import { motion } from "motion/react";

export default function Philosophy() {
  return (
    <section
      id="filosofi"
      className="relative py-28 px-4 md:px-8 bg-obsidian border-b border-graphite/30 overflow-hidden"
    >
      {/* Decorative Moon Light Background Glow */}
      <div className="absolute right-0 top-1/4 w-[300px] h-[300px] rounded-full bg-blue-900/10 filter blur-[120px] pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-[200px] h-[200px] rounded-full bg-goldaccent/5 filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Visual Editorial Element */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 flex flex-col items-center md:items-start gap-4"
          >
            <div className="flex items-center gap-1.5 text-goldaccent text-[10px] font-mono tracking-widest uppercase">
              <Moon size={11} />
              <span>Sanubari EVEMON</span>
            </div>
            
            <h2 className="font-display font-medium text-3xl md:text-4xl text-white leading-tight tracking-wider text-center md:text-left">
              {siteConfig.philosophy.title}
            </h2>

            <div className="h-[1px] w-20 bg-neutral-800 my-2" />

            {/* A quote in display typography */}
            <p className="font-serif italic text-sm text-neutral-500 leading-relaxed text-center md:text-left">
              "{siteConfig.philosophy.quote}"
            </p>
          </motion.div>

          {/* Text Content Block */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 flex flex-col gap-6"
          >
            <div className="text-neutral-500 text-[10px] font-mono tracking-widest uppercase">
              // Editorial Article
            </div>

            {/* Section styled small as per "bagian filosofi dan teks yang panjangj cukup buatkan ukuran kecils saja" */}
            <p className="text-xs md:text-sm text-neutral-400 font-sans tracking-wide leading-relaxed text-justify">
              {siteConfig.philosophy.content}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl border border-neutral-900 bg-charcoal/30 flex flex-col gap-2">
                <Compass size={16} className="text-neutral-400" />
                <span className="font-display font-medium text-xs text-neutral-200">Perjalanan Damai</span>
                <span className="text-[10px] text-neutral-500 font-sans leading-relaxed">
                  Menjelajahi dunia yang damai tanpa intimidasi konflik berat.
                </span>
              </div>
              <div className="p-4 rounded-xl border border-neutral-900 bg-charcoal/30 flex flex-col gap-2">
                <Star size={16} className="text-neutral-400" />
                <span className="font-display font-medium text-xs text-neutral-200">Asosiasi Murni</span>
                <span className="text-[10px] text-neutral-500 font-sans leading-relaxed">
                  Bermain dengan keharmonisan, kejujuran, dan relasi komunitas yang erat.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
